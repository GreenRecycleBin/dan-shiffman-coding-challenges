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

(defn a* [{:keys [x y scale direction tail] :as snake}
          {:food-x :x :food-y :y :as food}]
  (loop [closed #{}
         open-snake (priority-map snake 0)
         parent-snake {}
         score {[x y] 0}]
    (when-let [[{:keys [x y scale direction tail] :as snake}] (peek open-snake)]
      (if (= [x y] [food-x food-y])
        (letfn [(directions []
                  (let [path (reverse
                              (take-while identity
                                          (iterate #(second
                                                     (first
                                                      (filter (fn [[{:keys [x y]}]]
                                                                (= [x y] %))
                                                              parent-snake)))
                                                   [food-x food-y])))]
                    (reverse
                     (map (fn [[snake-x snake-y]]
                            (:direction
                             (into {}
                                   (first
                                    (filter (fn [[{:keys [x y]}]]
                                              (= [x y] [snake-x snake-y]))
                                            parent-snake)))))
                          (drop-last (reverse path))))))]
          (directions))

        (do
          (let [neighbors
                (neighbors snake #{(opposite-direction direction)})

                neighbors
                (remove (fn [{:keys [x y]}] (some #{[x y]} closed)) neighbors)]
            (let [neighbor-to-new-score

                  (for [{:new-x :x :new-y :y :as neighbor} neighbors
                        :let [new-score (+ (score [x y]) scale)]
                        :when (< new-score (or (score [new-x new-y] js/Number.MAX_SAFE_INTEGER)))]
                    [neighbor new-score])]
              (recur (conj closed [x y])

                     (into (pop open-snake) (for [[{:new-x :x :new-y :y :as neighbor} new-score] neighbor-to-new-score]
                                              [neighbor (+ new-score (heuristic-cost [new-x new-y] [food-x food-y]))]))

                     (into parent-snake (for [[n] neighbor-to-new-score] [n [x y]]))
                     (into score (for [[{:new-x :x :new-y :y} score] neighbor-to-new-score] [[new-x new-y] score]))))))))))

;; (def snake (dan-shiffman-coding-challenges.snake.snake/make-snake {:x 750 :y 70 :width 1920 :height 688 :scale 10}))
;; (def food (dan-shiffman-coding-challenges.snake.food/map->Food {:x 750 :y 510 :scale 10}))
;; (def path (a* snake food))
