(ns dan-shiffman-coding-challenges.snake.cheaplist)

(def que-size 15)

(defn qsort-aux [[pivot & tail] pred]
  (when pivot
    (let [pred? (partial pred pivot)]
      (lazy-cat (qsort-aux (filter pred? tail) pred)
                [pivot]
                (qsort-aux (remove pred? tail) pred)))))

(defn qsort [xs f] (qsort-aux (seq xs) f))

(deftype CheapList [pred cheap bulk]
  Object
  (toString [this] (str (seq this)))

  cljs.core/ICollection
  (-conj [this curr]
    (let [[item-curr pri-curr] curr
          eol (last cheap)
          [item-eol pri-eol] eol]

      (cond
        ;;empty list
        (nil? eol)
        (CheapList. pred (conj cheap curr) (assoc bulk item-curr pri-curr))

        ;;list contains item
        (bulk item-curr)
        (-conj
         (CheapList. pred
                     (filter (fn [[k]]
                               (not= k item-curr)) cheap)
                     (dissoc bulk item-curr))
         curr)

        ;;cheaper then the curr most expensive
        (pred eol curr)
        (if (>= (count cheap) que-size)
          (CheapList. pred
                      (qsort (conj (drop-last cheap) curr) pred)
                      (assoc bulk item-eol pri-eol))
          (CheapList. pred
                      (qsort (conj cheap curr) pred)
                      (assoc bulk item-curr pri-curr)))

        ;;new item
        :default (CheapList. pred cheap (assoc bulk item-curr pri-curr)))))

  cljs.core/ISeq
  (-first [this]
    (first cheap))

  (-rest [this]
    (if (= (count cheap) 1)
      (let [bulk (dissoc bulk (-> cheap first first))]
        (CheapList. pred
                    (take que-size (qsort bulk pred))
                    bulk))
      (CheapList. pred (rest cheap) (dissoc bulk (-> cheap first first)))))

  cljs.core/ISeqable
  (-seq [this]
    (when (not (empty? bulk))
      (lazy-seq (cons (first this) (rest this)))))

  cljs.core/IEquiv
  (-equiv [this o]
    (and (= CheapList (type o))
         (= (seq this) (seq o))))

  cljs.core/ICounted
  (-count [this]
    (count bulk))

  cljs.core/IEmptyableCollection
  (-empty [this]
    (CheapList. pred [] {}))

  cljs.core/ILookup
  (-lookup [this key]
    (bulk key))

  (-lookup [this key not-found]
    (or (-lookup this key) not-found))

  cljs.core/IFn
  (-invoke [this key]
    (get this key))

  (-invoke [this key not-found]
    (get this key not-found)))

(defn cheap-list
  [pred & keyvals]
  (reduce conj (CheapList. pred [] {}) keyvals))
