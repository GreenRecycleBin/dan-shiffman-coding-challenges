(defproject dan-shiffman-coding-challenges "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[jayq "2.5.5"]
                 [org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [quil "2.6.0"]
                 [tailrecursion/cljs-priority-map "1.2.1"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [deraen/lein-sass4clj "0.3.1"]
            [lein-figwheel "0.5.14"]]

  :hooks [leiningen.cljsbuild]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.2"]
                                  [figwheel-sidecar "0.5.14"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :source-paths ["dev"]}}

  :sass {:source-paths ["resources/public/scss"]
         :target-path "resources/public/css"}

  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js" "resources/public/css"]

  :cljsbuild
  {:builds {:starfield
            {:source-paths ["src/cljs/dan_shiffman_coding_challenges/starfield"]
             :compiler
             {:output-to "resources/public/js/starfield.js"
              :output-dir "resources/public/js/starfield"
              :asset-path "js/starfield"
              :parallel-build true
              :optimizations :advanced
              :pretty-print false
              :externs ["externs/jquery.js"]}}

            :menger-sponge
            {:source-paths ["src/cljs/dan_shiffman_coding_challenges/menger_sponge"]
             :compiler
             {:output-to "resources/public/js/menger-sponge.js"
              :output-dir "resources/public/js/menger-sponge"
              :asset-path "js/menger-sponge"
              :parallel-build true
              :optimizations :advanced
              :pretty-print false
              :externs ["externs/jquery.js"]}}

            :snake
            {:source-paths ["src/cljs/dan_shiffman_coding_challenges/snake"]
             :figwheel true
             :compiler
             {:output-to "resources/public/js/snake.js"
              :output-dir "resources/public/js/snake"
              :asset-path "js/snake"
              :parallel-build true
              :optimizations :advanced
              :static-fns true
              :fn-invoke-direct true
              :optimize-constants true
              :pseudo-names true
              :anon-fn-naming-policy :mapped
              :pretty-print false
              :externs ["externs/jquery.js"]}}}})
