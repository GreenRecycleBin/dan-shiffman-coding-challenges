(ns dan-shiffman-coding-challenges.snake.snake
  (:require clojure.set

            [dan-shiffman-coding-challenges.snake.utilities
             :refer [random-location opposite-direction]]

            [quil.core :as q :include-macros true]))

(def ^:private direction-set #{:up :down :left :right})
(def ^:private directions [:up :down :left :right])

(defn- x-speed [direction]
  (case direction
    (:up :down) 0
    :left -1
    :right 1))

(defn- y-speed [direction]
  (case direction
    :up -1
    :down 1
    (:left :right) 0))

(defrecord Snake [x y tail tail-set count
                  direction next-direction moving? dead?
                  width height scale])

(set! (.. Snake -prototype -render)
      (fn []
        (this-as this
          (let [{:keys [x y scale tail]} this]
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
                    (recur (pop tail))))))))))

(set! (.. Snake -prototype -move)
      (fn []
        (this-as this
          (let [{:keys [next-direction] :as m} this]
            (let [m (cond-> m
                      next-direction (assoc :direction next-direction :next-direction nil))

                  {:keys [x y tail tail-set moving? dead? direction width height scale]} m]
              (if (and moving? (not dead?))
                (let [x-speed (x-speed direction)
                      y-speed (y-speed direction)
                      new-x (+ x (* scale x-speed))
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

                m))))))

(set! (.. Snake -prototype -change-direction)
      (fn [dir]
        (this-as this
          (let [{:keys [direction next-direction] :as m} this]
            (cond-> m
              (not next-direction)

              (as-> m
                  (when-not (= dir (opposite-direction direction))
                    (assoc m :next-direction dir))))))))

(set! (.. Snake -prototype -toggle-moving?)
      (fn []
        (this-as this
          (let [{:keys [moving?] :as m} this]
            (assoc m :moving? (not moving?))))))

(set! (.. Snake -prototype -eat)
      (fn [{:food-x :x :food-y :y}]
        (this-as this
          (let [{:keys [x y] :as m} this]
            (cond-> m
              (and (= food-x x) (= food-y y))

              (-> (update-in [:tail] #(conj % [x y]))
                  (update-in [:tail-set] #(conj % [x y]))
                  (update-in [:count] inc)
                  (assoc :x food-x :y food-y)))))))

(set! (.. Snake -prototype -neighbor)
      (fn [direction]
        (this-as m
          (case direction
            (:up :down :left :right) (-> m
                                         (.change-direction direction)
                                         .move)))))

(set! (.. Snake -prototype -neighbors)
      (fn [except]
        (this-as m
          (let [directions (clojure.set/difference #{:up :down :left :right} except)]
            (remove (fn [{:keys [dead?]}] dead?)
                    (map #(.neighbor m %) directions))))))

(defn- constrain [n min max]
  (cond
    (< n min) min
    (> n max) max
    :default n))

(defn- make-snake [{:keys [x y width height scale] :as m}]
  (map->Snake
   (merge {:tail #queue [] :tail-set #{} :count 0
           :direction (rand-nth directions) :next-direction nil :moving? true :dead? false}

          m

          {:x (constrain x 0 (- width scale))
           :y (constrain y 0 (- height scale))})))

(defn make-random-snake [width height scale]
  (make-snake (merge (random-location width height scale)
                     {:width width :height height :scale scale})))
