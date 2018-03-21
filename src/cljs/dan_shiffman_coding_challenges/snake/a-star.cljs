(ns dan-shiffman-coding-challenges.snake.a-star
  (:require clojure.set

            [dan-shiffman-coding-challenges.snake.protocols
             :refer [neighbors]]

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [opposite-direction]]

            [tailrecursion.priority-map :refer [priority-map]]))

(defn- manhattan-distance [x1 y1 x2 y2]
  (+ (Math/abs (- x1 x2)) (Math/abs (- y1 y2))))

(defn- heuristic-cost [[x1 y1 :as start] [x2 y2 :as goal]]
  (manhattan-distance x1 y1 x2 y2))

(defn- directions [parent-snake {:food-x :x :food-y :y :as food}]
  (let [path (reverse
              (take-while identity
                          (iterate #(some (fn [[{:keys [x y]} cell]]
                                            (when (= [x y] %)
                                              cell))
                                          parent-snake)
                                   [food-x food-y])))]
    (reverse
     (map (fn [[snake-x snake-y]]
            (let [snake (ffirst
                         (filter (fn [[{:keys [x y]}]]
                                   (= [x y] [snake-x snake-y]))
                                 parent-snake))]
              (:direction snake)))
          (drop-last (reverse path))))))

(defn a* [{:keys [x y scale direction tail] :as snake}
          {:food-x :x :food-y :y :as food}]
  (loop [closed #{}
         open-snake (priority-map snake 0)
         parent-snake {}
         score {[x y] 0}]
    (when-let [[{:keys [x y scale direction tail] :as snake}] (peek open-snake)]
      (if (= [x y] [food-x food-y])
        (directions parent-snake food)

        (let [neighbors
              (neighbors snake #{(opposite-direction direction)} closed)

              neighbor-to-new-score

              (for [{:new-x :x :new-y :y :as neighbor} neighbors
                    :let [new-score (+ (score [x y]) scale (heuristic-cost [new-x new-y] [food-x food-y]))]
                    :when (< new-score (score [new-x new-y] js/Number.MAX_SAFE_INTEGER))]
                [neighbor new-score])]
          (recur (conj closed [x y])
                 (into (pop open-snake) neighbor-to-new-score)

                 (into parent-snake
                       (for [[neighbor] neighbor-to-new-score]
                         [neighbor [x y]]))

                 (into score
                       (for [[{:new-x :x :new-y :y} score]
                             neighbor-to-new-score]
                         [[new-x new-y] score]))))))))

