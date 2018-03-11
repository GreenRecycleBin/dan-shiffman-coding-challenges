(ns dan-shiffman-coding-challenges.snake.a-star
  (:require clojure.set

            [dan-shiffman-coding-challenges.snake.cheaplist :refer [cheap-list]]

            [dan-shiffman-coding-challenges.snake.protocols
             :refer [neighbors]]

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [opposite-direction]]))

(defn- manhattan-distance [x1 y1 x2 y2]
  (+ (Math/abs (- x1 x2)) (Math/abs (- y1 y2))))

(defn- heuristic-cost [[x1 y1 :as start] [x2 y2 :as goal]]
  (manhattan-distance x1 y1 x2 y2))

(defn- directions [cell-to-parent-cell-and-direction-and-score
                   {:food-x :x :food-y :y :as food}]
  (let [path

        (take-while identity
                    (iterate #(first (cell-to-parent-cell-and-direction-and-score %)) [food-x food-y]))]
    (reverse (map #(nth (cell-to-parent-cell-and-direction-and-score %) 1)
                  (butlast path)))))

(defn a* [{:keys [x y scale direction tail] :as snake}
          {:food-x :x :food-y :y :as food}]
  (loop [closed (transient #{})
         open-snake (cheap-list (fn [[_ a] [_ b]]
                                  (> a b))
                                [snake 0])
         cell-to-parent-cell-and-direction-and-score (transient {[x y] [nil nil 0]})]
    (when-let [[{:keys [x y scale direction tail] :as snake}] (first open-snake)]
      (if (= [x y] [food-x food-y])
        (directions (persistent! cell-to-parent-cell-and-direction-and-score)
                    food)

        (let [neighbors
              (neighbors snake #{(opposite-direction direction)} closed)

              neighbor-to-new-score

              (for [{:new-x :x :new-y :y :as neighbor} neighbors
                    :let [new-score

                          (+ (nth (get cell-to-parent-cell-and-direction-and-score [x y]) 2)
                             scale
                             (heuristic-cost [new-x new-y] [food-x food-y]))]
                    :when (< new-score
                             (or (nth (get cell-to-parent-cell-and-direction-and-score [new-x new-y]) 2)
                                 js/Number.MAX_SAFE_INTEGER))]
                [neighbor new-score])]
          (recur (conj! closed [x y])
                 (into (rest open-snake) neighbor-to-new-score)

                 (reduce #(conj! %1 %2) cell-to-parent-cell-and-direction-and-score
                         (for [[{:new-x :x :new-y :y :direction :direction} score]
                               neighbor-to-new-score]
                           [[new-x new-y] [[x y] direction score]]))))))))
