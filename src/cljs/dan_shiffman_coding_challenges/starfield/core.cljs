(ns dan-shiffman-coding-challenges.starfield.core
  (:require [goog.object :as goog]
            [jayq.core :refer [$]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m])
  (:require-macros jayq.macros))

(def ^:private global-state (atom {}))
(def ^:private max-size 20)
(def ^:private max-speed 50)
(def ^:private canvas-id "canvas")

(defn- rand-int
  ([n] (clojure.core/rand-int n))
  ([x y] (+ x (clojure.core/rand-int (- y x)))))

(defn- create-random-star [width height]
  (let [x (rand-int (- width) width)
        y (rand-int (- height) height)
        z (rand-int 1 (inc width))]
    {:x x :y y :z z :pz z}))

(defn- setup []
  {:stars (take (:star-count @global-state)
                (repeatedly #(create-random-star (:width @global-state)
                                                 (:height @global-state))))
   :speed 1})

(defn- update-star [star speed]
  (let [{z :z} star
        new-z (- z speed)]
    (if (not (pos? new-z))
      (create-random-star (:width @global-state) (:height @global-state))
      (-> star
          (assoc :z new-z)
          (assoc :pz z)))))

(defn- update-stars [stars pn n]
  (case (compare pn n)
    -1 (apply conj
              stars
              (take (- n pn)
                    (repeatedly #(create-random-star (:width @global-state)
                                                     (:height @global-state)))))
    0 stars
    1 (take n stars)))

(defn- update-state [{:keys [speed] :as state}]
  (update-in state
             [:stars]
             (fn [stars]
               (let [{:keys [pstar-count star-count]} @global-state
                     new-stars (update-stars stars pstar-count star-count)]
                 (swap! global-state #(assoc % :pstar-count (:star-count %)))
                 (map #(update-star % speed) new-stars)))))

(defn- draw-star [star]
  (q/fill 255)
  (q/no-stroke)
  (let [{:keys [x y z pz]} star
        sx (q/map-range (/ x z) 0 1 0 (:width @global-state))
        sy (q/map-range (/ y z) 0 1 0 (:height @global-state))
        px (q/map-range (/ x pz) 0 1 0 (:width @global-state))
        py (q/map-range (/ y pz) 0 1 0 (:height @global-state))
        r (q/map-range z 0 (:width @global-state) max-size 0)]
    ;; (q/ellipse sx sy r r)
    (q/stroke 255)
    (q/line px py sx sy)))

(defn- draw [{:keys [stars]}]
  (q/background 0)
  (q/translate (/ (:width @global-state) 2) (/ (:height @global-state) 2))
  (doseq [star stars] (draw-star star)))

(defn- mouse-moved [state event]
  (assoc-in state
            [:speed]
            (q/map-range (:x event) 0 (:width @global-state) 0 max-speed)))

(q/defsketch starfield
  :host canvas-id
  :title "Star Field"
  :size [(:width @global-state) (:height @global-state)]
  :setup setup
  :update update-state
  :draw draw
  :mouse-moved mouse-moved
  :middleware [m/fun-mode]
  :features [:no-start])

(defn- canvas-height []
  (- (.-innerHeight js/window) (.height ($ :div))))

(jayq.macros/ready
 (reset! global-state {:width (.-innerWidth js/window)
                       :height (canvas-height)
                       :pstar-count 1000
                       :star-count 1000})

 (when-let [canvas (.getElementById js/document canvas-id)]
   (set! (.-width canvas) (:width @global-state))
   (set! (.-height canvas) (:height @global-state)))

 (.val ($ :input#star-count-range) (:star-count @global-state))
 (.val ($ :input#star-count) (:star-count @global-state))

 (let [$datalist ($ "<datalist>" (clj->js {:id :tickmarks}))
       $input-range ($ :input#star-count-range)
       min (int (.attr $input-range "min"))
       max (int (.attr $input-range "max"))
       step (int (.attr $input-range "step"))]
   (doseq [value (range min (+ step max) step)]
     (.append $datalist ($ "<option>" (clj->js {:value value}))))

   (.appendTo $datalist ($ js/document.body))
   (.attr $input-range "list" "tickmarks"))

 (.change ($ :input#star-count-range)
          (fn [event]
            (swap! global-state
                   #(-> %
                        (assoc :pstar-count (:star-count %))
                        (assoc :star-count (int (.. event -target -value)))))

            (.val ($ :input#star-count) (:star-count @global-state))))

 (.click ($ :button#start)
         (fn [event]
           (starfield)
           (.text ($ (.-target event)) "Restart")))

 (.click ($ :button#play)
         #(when-let [sketch (q/get-sketch-by-id canvas-id)]
            (q/with-sketch sketch
              (q/start-loop))))

 (.click ($ :button#pause)
         #(when-let [sketch (q/get-sketch-by-id canvas-id)]
            (q/with-sketch sketch
              (q/no-loop))))

 (.click ($ :button#stop)
         #(do
            (when-let [sketch (q/get-sketch-by-id canvas-id)]
              (q/with-sketch sketch
                (q/exit)))

            (when-let [canvas (.getElementById js/document canvas-id)]
              (let [context (.getContext canvas "2d")]
                (doto context
                  .beginPath
                  (.clearRect 0 0 (.-width canvas) (.-height canvas)))))
            (.text ($ :button#start) "Start")))

 (.resize ($ js/window)
          (fn [event]
            (when-let [canvas (.getElementById js/document canvas-id)]
              (swap! global-state
                     #(-> %
                          (assoc :pwidth (:width %))
                          (assoc :pheight (:height %))
                          (assoc :width (.-innerWidth js/window))
                          (assoc :height (canvas-height)))))

            (when-let [sketch (q/get-sketch-by-id canvas-id)]
              (q/with-sketch sketch
                (q/resize-sketch (:width @global-state) (:height @global-state))
                (q/redraw))))))
