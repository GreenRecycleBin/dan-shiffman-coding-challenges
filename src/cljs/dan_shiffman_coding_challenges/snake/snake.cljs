(ns dan-shiffman-coding-challenges.snake.snake
  (:require clojure.set

            [dan-shiffman-coding-challenges.snake.protocols
             :as protocols :refer [Animal Moveable Neighbor Renderable]]

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [random-location opposite-direction]]

            [quil.core :as q :include-macros true]))

(def ^:private ^:const direction-maps
  {:up {:x-speed 0 :y-speed -1 :next-direction :up}
   :down {:x-speed 0 :y-speed 1 :next-direction :down}
   :left {:x-speed -1 :y-speed 0 :next-direction :left}
   :right {:x-speed 1 :y-speed 0 :next-direction :right}})

(def ^:private ^:const direction-set (set (keys direction-maps)))

(defrecord Snake [x y tail tail-set count
                  x-speed y-speed direction next-direction ^boolean moving? ^boolean dead?
                  width height scale]

  Renderable
  (render [{:keys [x y scale tail]}]
    (q/no-stroke)
    (q/fill 255)
    (q/rect x y scale scale)

    (when (seq tail)
      (q/fill 255 0 0)

      (let [[x y] (peek tail)]
        (q/rect x y scale scale))

      (q/fill 170)

      (loop [tail (pop tail)]
        (when (seq tail)
          (let [[x y] (peek tail)]
            (q/rect x y scale scale)
            (recur (pop tail)))))))

  Moveable
  (move [{:keys [next-direction] :as m}]
    (let [m (cond-> m
              next-direction (-> (merge (next-direction direction-maps))
                                 (assoc :direction next-direction)
                                 (assoc :next-direction nil)))

          {:keys [x y tail tail-set x-speed y-speed ^boolean moving? ^boolean dead? width height scale]} m]
      (if (and moving? (not dead?))
        (let [new-x (+ x (* scale x-speed))
              new-y (+ y (* scale y-speed))
              last-tail (peek tail)
              tail-set-without-last (disj tail-set last-tail)]
          (if (or (contains? tail-set-without-last [new-x new-y])
                  (< new-x 0) (>= new-x width)
                  (< new-y 0) (>= new-y height))
            (assoc m :dead? true)

            (let [tail-without-last (pop tail)]
              (-> m

                  (update-in [:tail]
                             #(if (seq %) (conj tail-without-last [x y]) %))

                  (update-in [:tail-set]
                             #(if (seq %) (conj tail-set-without-last [x y]) %))

                  (assoc :x new-x :y new-y)))))

        m)))

  (change-direction [{:keys [direction next-direction] :as m} dir]
    (cond-> m
      (not next-direction)

      (merge
       (if (not= dir (opposite-direction direction)) (dir direction-maps)))))

  (toggle-moving? [{:keys [moving?] :as m}]
    (assoc m :moving? (not moving?)))

  Animal
  (eat [{:keys [x y] :as m} {:food-x :x :food-y :y}]
    (cond-> m
      (and (= food-x x) (= food-y y))

      (-> (update-in [:tail] #(conj % [x y]))
          (update-in [:tail-set] #(conj % [x y]))
          (update-in [:count] inc)
          (assoc :x food-x :y food-y))))

  Neighbor
  (neighbor [m direction]
    (case direction
      (:up :down :left :right) (-> m
                                   (protocols/change-direction direction)
                                   protocols/move)))

  (neighbors [m except-direction except-cells]
    (let [directions (clojure.set/difference direction-set except-direction)]
      (keep #(let [m (protocols/neighbor m %)]
               (when-not (or (:dead? m)
                             (contains? except-cells [(:x m) (:y m)]))
                 m))
            directions))))

(defn- constrain [n min max]
  (cond
    (< n min) min
    (> n max) max
    :default n))

(defn- make-snake [{:keys [x y width height scale] :as m}]
  (map->Snake
   (let [dir (rand-nth (keys direction-maps))]
     (merge (dir direction-maps)

            {:tail #queue [] :tail-set #{} :count 0
             :direction dir :next-direction nil :moving? true :dead? false}

            m

            {:x (constrain x 0 (- width scale))
             :y (constrain y 0 (- height scale))}))))

(defn make-random-snake [width height scale]
  (make-snake (merge (random-location width height scale)
                     {:width width :height height :scale scale})))
