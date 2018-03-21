(ns dan-shiffman-coding-challenges.snake.food
  (:require [dan-shiffman-coding-challenges.snake.utilities
             :refer [random-location]]

            [quil.core :as q :include-macros true]))

(defrecord Food [x y scale])

(set! (.. Food -prototype -render)
      (fn []
        (this-as this
          (let [{:keys [x y scale]} this]
            (q/no-stroke)
            (q/fill 228 71 171)
            (q/rect x y scale scale)))))

(defn make-random-food [width height scale & {:keys [:except]}]
  (loop [{:keys [x y] :as location} (random-location width height scale)]
    (if (some #{[x y]} except)
      (recur (random-location width height scale))
      (map->Food (merge location {:scale scale})))))
