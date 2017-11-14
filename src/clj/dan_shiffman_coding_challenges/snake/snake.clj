(ns dan-shiffman-coding-challenges.snake.snake
  (:require [dan-shiffman-coding-challenges.snake.protocols
             :refer [Animal Moveable Renderable]]

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [random-location opposite-direction]]

            [quil.core :as q]))

(def ^:private directions
  {:up {:x-speed 0 :y-speed -1 :next-direction :up}
   :down {:x-speed 0 :y-speed 1 :next-direction :down}
   :left {:x-speed -1 :y-speed 0 :next-direction :left}
   :right {:x-speed 1 :y-speed 0 :next-direction :right}})

(defrecord Snake [x y tail count
                  x-speed y-speed direction next-direction moving? dead?
                  width height scale]

  Renderable
  (render [{:keys [x y scale tail]}]
    (q/no-stroke)
    (q/fill 255)
    (q/rect x y scale scale)

    (q/fill 170)
    (doseq [[x y] tail] (q/rect x y scale scale))))

(defn- make-snake [{:keys [x y width height scale] :as m}]
  (map->Snake
   (let [dir (rand-nth (keys directions))]
     (merge (dir directions)
            {:tail '() :count 0
             :direction dir :next-direction nil :moving? true :dead? false}
            m
            {:x (q/constrain x 0 (- width scale))
             :y (q/constrain y 0 (- height scale))}))))

(extend-type Snake
  Moveable
  (move [{:keys [next-direction] :as m}]
    (let [m (cond-> m
              next-direction (-> (merge (next-direction directions))
                                 (assoc :direction next-direction)
                                 (assoc :next-direction nil)))
          {:keys [x y tail x-speed y-speed moving? dead? width height scale]} m]
      (if (and moving? (not dead?))
        (let [new-x (+ x (* scale x-speed))
              new-y (+ y (* scale y-speed))]
          (if (or (some #{[new-x new-y]} (drop-last tail))
                  (< new-x 0) (>= new-x width)
                  (< new-y 0) (>= new-y height))
            (assoc m :dead? true)
            (-> m
                (update-in [:tail] (fn [tail]
                                     (if (seq tail)
                                       (conj (drop-last tail) [x y])
                                       tail)))

                (assoc :x new-x :y new-y))))
        m)))

  (change-direction [{:keys [direction next-direction] :as m} dir]
    (cond-> m
      (not next-direction)

      (merge
       (if (not= dir (opposite-direction direction)) (dir directions)))))

  (toggle-moving? [{:keys [moving?] :as m}]
    (assoc m :moving? (not moving?)))

  Animal
  (eat [{:keys [x y] :as m} {:food-x :x :food-y :y}]
    (cond-> m
      (and (= food-x x) (= food-y y))

      (-> (update-in [:tail] #(conj % [x y]))
          (update-in [:count] inc)
          (assoc :x food-x :y food-y)))))

(defn make-random-snake [width height scale]
  (make-snake (merge (random-location width height scale)
                     {:width width :height height :scale scale})))
