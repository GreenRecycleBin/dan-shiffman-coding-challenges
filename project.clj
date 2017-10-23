(defproject dan-shiffman-coding-challenges "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[jayq "2.5.4"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [quil "2.6.1-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [deraen/lein-sass4clj "0.3.1"]]

  :hooks [leiningen.cljsbuild]

  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.2"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :sass {:source-paths ["resources/public/scss"]
         :target-path "resources/public/css"}

  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js" "resources/public/css"]

  :cljsbuild
  {:builds [{:source-paths ["src/cljs/dan_shiffman_coding_challenges/starfield"]
             :compiler
             {:output-to "resources/public/js/starfield.js"
              :output-dir "resources/public/js/starfield"
              :asset-path "js/starfield"
              :main "dan-shiffman-coding-challenges.starfield.core"
              :optimizations :none
              :pretty-print true}}]})
