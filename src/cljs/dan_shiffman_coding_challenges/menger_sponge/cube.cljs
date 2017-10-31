(ns dan-shiffman-coding-challenges.menger-sponge.cube
  (:require [quil.core :as q :include-macros true]))

(defprotocol Renderable
  (render [this]))

(defprotocol Menger
  (generate [this]))

(defrecord Cube [position size]
  Renderable
  (render [{{:keys [x y z]} :position, :keys [size]}]
    (q/push-matrix)
    (q/translate x y z)
    (q/fill 255)
    (q/no-stroke)
    (q/box size)
    (q/pop-matrix)))

(defn cube [m] (->Cube (select-keys m [:x :y :z]) (:size m)))

(extend-protocol Menger
  Cube
  (generate [{{:pos-x :x :pos-y :y :pos-z :z} :position, :keys [size]}]
    (for [x (range -1 2)
          y (range -1 2)
          z (range -1 2)
          :when (> (apply + (map #(Math/abs %) [x y z])) 1)]
      (let [size (/ size 3)]
        (cube {:x (+ pos-x (* x size))
               :y (+ pos-y (* y size))
               :z (+ pos-z (* z size))
               :size size})))))
