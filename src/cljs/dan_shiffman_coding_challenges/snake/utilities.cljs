(ns dan-shiffman-coding-challenges.snake.utilities
  (:require [quil.core :as q :include-macros true]))

(defn random-location [width height scale]
  (let [scaled-width (quot width scale)
        scaled-height (quot height scale)]
    {:x (* scale (rand-int scaled-width))
     :y (* scale (rand-int scaled-height))}))

(defn center-text-horizontally [s y width]
  (q/text s (- (/ width 2) (/ (q/text-width s) 2)) y))

(defn opposite-direction [direction]
  (case direction
    :up :down
    :down :up
    :left :right
    :right :left))
