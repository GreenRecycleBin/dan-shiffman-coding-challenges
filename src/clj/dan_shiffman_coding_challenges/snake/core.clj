(ns dan-shiffman-coding-challenges.snake.core
  (:require [dan-shiffman-coding-challenges.snake.food
             :refer [make-random-food]]

            [dan-shiffman-coding-challenges.snake.protocols
             :refer [change-direction eat move render toggle-moving?]]

            [dan-shiffman-coding-challenges.snake.snake
             :refer [make-random-snake]]

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [center-text-horizontally]]

            [quil.core :as q]
            [quil.middleware :as m]))

(def ^:private width 600)
(def ^:private height 600)
(def ^:private scale 10)
(def ^:private ^:dynamic frame-rate 10)

(defn- setup []
  (q/frame-rate frame-rate)

  {:snake (make-random-snake width height scale)
   :food (make-random-food width height scale)})

(defn- update-state [{:keys [food] {:keys [x y tail count] :as snake} :snake
                      :as state}]
  (alter-var-root #'frame-rate (constantly (+ 10 (quot count 10))))

  (let [new-snake (-> snake move (eat food))]
    (-> state
        (assoc :snake new-snake)

        (update-in [:food]
                   #(if-not (= (:count new-snake) count)
                      (make-random-food width height scale
                                        :except (conj tail [x y]))
                      %)))))

(defn- draw [{:keys [food] {:keys [count moving? dead?] :as snake} :snake}]
  (q/frame-rate frame-rate)
  (q/background 85)
  (q/fill 255)
  (q/text-size 15)

  (let [score-str (str "Score: " count)]
    (center-text-horizontally score-str 50 width))

  (render food)
  (render snake)

  (when-not moving?
    (q/fill 255)

    (let [unpausing-str "Press p to unpause the game."]
      (center-text-horizontally unpausing-str 100 width))

    (q/no-loop))

  (when dead?
    (q/fill 255 0 0)

    (let [loss-str "You lose!"]
      (center-text-horizontally loss-str 75 width))

    (q/fill 255)

    (let [retry-str "Press spacebar to retry."]
      (center-text-horizontally retry-str 100 width))

    (q/no-loop)))

(defn- key-pressed [{:keys [snake] :as state} _]
  (let [key-keyword (q/key-as-keyword)]
    (case key-keyword
      (:up :down :left :right) (assoc state
                                      :snake (change-direction snake
                                                               key-keyword))

      (condp = (q/key-code)
        java.awt.event.KeyEvent/VK_SPACE

        (do
          (q/start-loop)
          (assoc state :snake (make-random-snake width height scale)))

        java.awt.event.KeyEvent/VK_P

        (do
          (when-not (:moving? snake) (q/start-loop))
          (assoc state :snake (stop snake)))

        state))))

(q/defsketch snake
  :title "Snake"
  :size [width height]
  :setup setup
  :update update-state
  :draw draw
  :key-pressed key-pressed
  :middleware [m/pause-on-error m/fun-mode])
