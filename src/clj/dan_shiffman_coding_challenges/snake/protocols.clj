(ns dan-shiffman-coding-challenges.snake.protocols)

(defprotocol Renderable
  (render [this]))

(defprotocol Moveable
  (move [this])
  (change-direction [this dir])
  (stop [this]))

(defprotocol Animal
  (eat [this food]))
