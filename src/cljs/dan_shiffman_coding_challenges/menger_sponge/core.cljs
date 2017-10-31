(ns dan-shiffman-coding-challenges.menger-sponge.core
  (:require [dan-shiffman-coding-challenges.menger-sponge.cube
             :refer [cube render generate]]

            [jayq.core :refer [$]]
            [quil.core :as q :include-macros true]
            [quil.middleware :as m])
  (:require-macros jayq.macros))

(def ^:private global-state (atom {}))
(def ^:private canvas-id "canvas")

(defn- setup [] {:a 0 :cubes [(cube {:x 0 :y 0 :z 0 :size 200})]})

(defn- update-state [state] (update-in state [:a] #(+ % 0.01)))

(defn- draw [{:keys [a cubes]}]
  (q/background 85)
  (q/stroke 255)
  (q/no-fill)
  (q/lights)
  (q/translate (/ (:width @global-state) 2) (/ (:height @global-state) 2))

  (q/rotate-x a)
  (q/rotate-y (* a 0.4))
  (q/rotate-x (* a 0.1))

  (doseq [cube cubes]
    (render cube)))

(defn- key-pressed [state _]
  (if (= (q/key-code) 32)
    (update-in state [:cubes] #(mapcat (fn [cube] (generate cube)) %))
    state))

(q/defsketch menger-sponge
  :host canvas-id
  :title "Menger Sponge"
  :size [(:width @global-state) (:height @global-state)]
  :renderer :p3d
  :setup setup
  :update update-state
  :draw draw
  :key-pressed key-pressed
  :middleware [m/fun-mode]
  :features [:no-start])

(jayq.macros/ready
 (reset! global-state {:width (.-innerWidth js/window)
                       :height (.-innerHeight js/window)})

 (.focus ($ canvas-id))
 (menger-sponge))
