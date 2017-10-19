(defproject dan-shiffman-coding-challenges "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [quil "2.6.0"]]

  :plugins [[lein-cljsbuild "1.1.5"]]
  :hooks [leiningen.cljsbuild]

  :clean-targets ^{:protect false} [:target-path :compile-path "resources/public/js"]

  :cljsbuild
  {:builds [{:source-paths ["src/cljs/dan_shiffman_coding_challenges/starfield"]
             :compiler
             {:output-to "resources/public/js/starfield.js"
              :output-dir "resources/public/js/starfield"
              :asset-path "js/starfield"
              :main "dan-shiffman-coding-challenges.starfield.core"
              :parallel-build true}}]})
