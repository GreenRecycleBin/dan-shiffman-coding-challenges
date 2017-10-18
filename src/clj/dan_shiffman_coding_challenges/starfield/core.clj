(ns dan-shiffman-coding-challenges.starfield.core
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(def ^:private width 1920)
(def ^:private height 1080)
(def ^:private max-size 20)
(def ^:private max-speed 50)
(def ^:private star-count 1000)

(defn- rand-int
  ([n] (clojure.core/rand-int n))
  ([x y] (+ x (clojure.core/rand-int (- y x)))))

(defn- create-random-star []
  (let [x (rand-int (- width) width)
        y (rand-int (- height) height)
        z (rand-int 1 (inc width))]
    {:x x :y y :z z :pz z}))

(defn- setup []
  {:stars (take star-count (repeatedly create-random-star))
   :speed 1})

(defn- update-star [star speed]
  (let [{z :z} star
        new-z (- z speed)]
    (if (not (pos? new-z))
      (create-random-star)
      (-> star
          (assoc :z new-z)
          (assoc :pz z)))))

(defn- update-state [{:keys [speed] :as state}]
  (update-in state
             [:stars]
             (fn [stars] (map #(update-star % speed) stars))))

(defn- draw-star [star]
  (q/fill 255)
  (q/no-stroke)
  (let [{:keys [x y z pz]} star
        sx (q/map-range (/ x z) 0 1 0 width)
        sy (q/map-range (/ y z) 0 1 0 width)
        px (q/map-range (/ x pz) 0 1 0 width)
        py (q/map-range (/ y pz) 0 1 0 width)
        r (q/map-range z 0 width max-size 0)]
    ;; (q/ellipse sx sy r r)
    (q/stroke 255)
    (q/line px py sx sy)))


(defn- draw [{:keys [stars]}]
  (q/background 0)
  (q/translate (/ width 2) (/ height 2))
  (doseq [star stars] (draw-star star)))

(defn- mouse-moved [state event]
  (assoc-in state [:speed] (q/map-range (:x event) 0 width 0 max-speed)))

(q/defsketch starfield
  :title "Star Field"
  :size [width height]
  :setup setup
  :update update-state
  :draw draw
  :key-pressed (fn [state _] state)
  :mouse-moved mouse-moved
  :middleware [m/pause-on-error m/fun-mode])
