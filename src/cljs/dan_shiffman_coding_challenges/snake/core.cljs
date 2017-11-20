(ns dan-shiffman-coding-challenges.snake.core
  (:require [dan-shiffman-coding-challenges.snake.food
             :refer [make-random-food]]

            [dan-shiffman-coding-challenges.snake.greedy-best-first-search
             :refer [next-direction]]

            [dan-shiffman-coding-challenges.snake.protocols
             :refer [change-direction eat move render stop]]

            [dan-shiffman-coding-challenges.snake.snake
             :refer [make-random-snake]]

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [center-text-horizontally]]

            [jayq.core :refer [$]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m])
  (:require-macros jayq.macros))

(def ^:private global-state (atom {}))
(def ^:private canvas-id "canvas")

(defn- setup []
  (q/frame-rate (:frame-rate @global-state))

  {:snake (make-random-snake (:width @global-state)
                             (:height @global-state)
                             (:scale @global-state))

   :food (make-random-food (:width @global-state)
                           (:height @global-state)
                           (:scale @global-state))})

(defn- update-state [{:keys [food] {:keys [x y tail count] :as snake} :snake
                      :as state}]
  (case (:ai-mode @global-state)
    "no-ai"

    (swap! global-state
           #(assoc %
                   :frame-rate
                   (+ (:default-frame-rate @global-state) (quot count 10))))

    "greedy-best-first-search" (swap! global-state #(assoc % :frame-rate 180)))

  (let [next-direction (when (= "greedy-best-first-search" (:ai-mode @global-state))
                         (next-direction snake food))

        new-snake (-> snake

                      (cond->
                          next-direction (change-direction next-direction))

                      move (eat food))]

    (-> state
        (assoc :snake new-snake)

        (update-in [:food]
                   #(if-not (= (:count new-snake) count)
                      (make-random-food (:width @global-state)
                                        (:height @global-state)
                                        (:scale @global-state)
                                        :except (conj tail [x y]))
                      %)))))

(defn- draw [{:keys [food] {:keys [count moving? dead?] :as snake} :snake}]
  (q/frame-rate (:frame-rate @global-state))
  (q/background 85)
  (q/fill 255)
  (q/text-size 15)

  (let [score-str (str "Score: " count)]
    (center-text-horizontally score-str 50 (:width @global-state)))

  (render food)
  (render snake)

  (when-not moving?
    (q/fill 255)
    (let [unpausing-str "Press p to unpause the game."]
      (center-text-horizontally unpausing-str 100 (:width @global-state))))

  (when dead?
    (q/fill 255 0 0)
    (let [loss-str "You lose!"]
      (center-text-horizontally loss-str 75 (:width @global-state)))

    (q/fill 255)
    (let [retry-str "Press spacebar to retry."]
      (center-text-horizontally retry-str 100 (:width @global-state)))

    (q/no-loop)))

(defn- key-pressed [{:keys [snake] :as state} _]
  (let [key-keyword (q/key-as-keyword)]
    (case key-keyword
      (:up :down :left :right) (assoc state
                                      :snake (change-direction snake
                                                               key-keyword))

      (case (q/key-code)
        32 (do
             (q/start-loop)

             (assoc state :snake (make-random-snake (:width @global-state)
                                                    (:height @global-state)
                                                    (:scale @global-state))))

        80 (assoc state :snake (stop snake))
        state))))

(q/defsketch snake
  :host canvas-id
  :title "Snake"
  :size [(:width @global-state) (:height @global-state)]
  :setup setup
  :update update-state
  :draw draw
  :key-pressed key-pressed
  :middleware [m/fun-mode]
  :features [:no-start])

(defn- canvas-height []
  (- (.-innerHeight js/window) (.height ($ :form))))

(jayq.macros/ready
 (reset! global-state {:width (.-innerWidth js/window)
                       :height (canvas-height)
                       :scale 10
                       :default-frame-rate 10
                       :frame-rate 10
                       :ai-mode "no-ai"})

 (.change ($ "input[type='radio'][name='ai-mode']")
          (fn [event]
            (swap! global-state #(assoc % :ai-mode (.. event -target -value)))
            (.focus ($ canvas-id))))

 (.prop ($ "input[type='radio'][name='ai-mode'][value='no-ai']") "checked")
 (.focus ($ canvas-id))
 (snake))
