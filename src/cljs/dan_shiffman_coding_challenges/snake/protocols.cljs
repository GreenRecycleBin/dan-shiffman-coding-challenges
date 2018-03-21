(ns dan-shiffman-coding-challenges.snake.protocols)

(defprotocol Renderable
  (render [this]))

(defprotocol Moveable
  (move [this])
  (change-direction [this dir])
  (toggle-moving? [this]))

(defprotocol Animal
  (eat [this food]))

(defprotocol Neighbor
  (neighbor [this direction])
  (neighbors [this except-direction except-cells]))
