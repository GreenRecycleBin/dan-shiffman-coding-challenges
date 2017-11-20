(ns dan-shiffman-coding-challenges.snake.greedy-best-first-search
  (:require clojure.set

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [opposite-direction]]))

(defn- neighbor [x y scale direction]
  (case direction
    :up [x (- y scale)]
    :down [x (+ y scale)]
    :left [(- x scale) y]
    :right [(+ x scale) y]))

(defn- neighbor-to-direction [x y scale & {:keys [except]}]
  (let [directions (clojure.set/difference #{:up :down :left :right} except)]
    (zipmap (map (partial neighbor x y scale) directions) directions)))

(defn- filter-neighbors-not-on-next-tail [m tail]
  (reduce-kv #(cond-> %1
                      (not (some #{%2} tail)) (assoc %2 %3))
             {} m))

(defn- manhattan-distance [x1 y1 x2 y2]
  (+ (Math/abs (- x1 x2)) (Math/abs (- y1 y2))))

(defn- zipmap-union
  "Returns a map with the keys mapped to the corresponding vals. Values of
  duplicate keys are conjoined together into a set."
  [keys vals]
  (loop [map {}
         ks (seq keys)
         vs (seq vals)]
    (if (and (seq ks) (seq vs))
      (recur (merge-with #(cond
                            (set? %1) (conj %1 %2)
                            %1 (conj #{%1} %2))
                         map {(first ks) (first vs)})
             (rest ks)
             (rest vs))
      map)))

(defn- vals-into-sets [m]
  (reduce-kv (fn [m k v]
               (assoc m k (if (set? v)
                            v
                            #{v})))
             {} m))

(defn next-direction [{:keys [x y scale direction tail]}
                      {:food-x :x :food-y :y}]
  (let [neighbor-to-direction
        (neighbor-to-direction x y scale
                               :except #{(opposite-direction direction)})

        neighbor-to-direction
        (filter-neighbors-not-on-next-tail neighbor-to-direction
                                           (drop-last tail))

        neighbors (keys neighbor-to-direction)

        distances (map #(apply (partial manhattan-distance food-x food-y) %)
                       neighbors)

        distance-to-neighbor (vals-into-sets (zipmap-union distances neighbors))
        min-distance (apply min distances)
        potential-neighbors (vec (distance-to-neighbor min-distance))]
    (when (seq potential-neighbors)
      (neighbor-to-direction (rand-nth potential-neighbors)))))
