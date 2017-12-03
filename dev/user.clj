(ns user
  (:require [figwheel-sidecar.repl-api :as ra]))

(def ^:private default-build-id "dev")

(defn start
  ([] (start default-build-id))
  ([build-id] (ra/start-figwheel! build-id)))

(defn stop [] (ra/stop-figwheel!))

(defn cljs
  ([] (cljs "dev"))
  ([build-id] (ra/cljs-repl build-id)))
