(ns dan-shiffman-coding-challenges.menger-sponge.core
  (:require [dan-shiffman-coding-challenges.menger-sponge.cube
             :refer [cube render generate]]

            [quil.core :as q]
            [quil.middleware :as m]))

(def ^:private width (/ 1920 2))
(def ^:private height 1080)

(defn- setup [] {:a 0 :cubes [(cube {:x 0 :y 0 :z 0 :size 200})]})

(defn- update-state [state] (update-in state [:a] #(+ % 0.01)))

(defn- draw [{:keys [a cubes]}]
  (q/background 85)
  (q/stroke 255)
  (q/no-fill)
  (q/lights)
  (q/translate (/ width 2) (/ height 2))

  (q/rotate-x a)
  (q/rotate-y (* a 0.4))
  (q/rotate-x (* a 0.1))

  (doseq [cube cubes]
    (render cube)))

(defn- key-pressed [state _]
  (if (= (q/key-code) java.awt.event.KeyEvent/VK_SPACE)
    (update-in state [:cubes] #(mapcat (fn [cube] (generate cube)) %))
    state))

(q/defsketch menger-sponge
  :title "Menger Sponge"
  :size [width height]
  :renderer :p3d
  :setup setup
  :update update-state
  :draw draw
  :key-pressed key-pressed
  :middleware [m/fun-mode m/pause-on-error])
