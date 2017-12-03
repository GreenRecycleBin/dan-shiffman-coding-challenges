// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.utilities');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
dan_shiffman_coding_challenges.snake.utilities.random_location = (function dan_shiffman_coding_challenges$snake$utilities$random_location(width,height,scale){
var scaled_width = cljs.core.quot(width,scale);
var scaled_height = cljs.core.quot(height,scale);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(scale * cljs.core.rand_int(scaled_width)),cljs.core.cst$kw$y,(scale * cljs.core.rand_int(scaled_height))], null);
});
dan_shiffman_coding_challenges.snake.utilities.center_text_horizontally = (function dan_shiffman_coding_challenges$snake$utilities$center_text_horizontally(s,y,width){
return quil.core.text.cljs$core$IFn$_invoke$arity$3(s,((width / (2)) - (quil.core.text_width(s) / (2))),y);
});
dan_shiffman_coding_challenges.snake.utilities.opposite_direction = (function dan_shiffman_coding_challenges$snake$utilities$opposite_direction(direction){
var G__38332 = direction;
var G__38332__$1 = (((G__38332 instanceof cljs.core.Keyword))?G__38332.fqn:null);
switch (G__38332__$1) {
case "up":
return cljs.core.cst$kw$down;

break;
case "down":
return cljs.core.cst$kw$up;

break;
case "left":
return cljs.core.cst$kw$right;

break;
case "right":
return cljs.core.cst$kw$left;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38332__$1)].join('')));

}
});
