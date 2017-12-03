// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.a_star');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('dan_shiffman_coding_challenges.snake.cheaplist');
goog.require('dan_shiffman_coding_challenges.snake.protocols');
goog.require('dan_shiffman_coding_challenges.snake.utilities');
dan_shiffman_coding_challenges.snake.a_star.manhattan_distance = (function dan_shiffman_coding_challenges$snake$a_star$manhattan_distance(x1,y1,x2,y2){
return ((function (){var G__38361 = (x1 - x2);
return Math.abs(G__38361);
})() + (function (){var G__38362 = (y1 - y2);
return Math.abs(G__38362);
})());
});
dan_shiffman_coding_challenges.snake.a_star.heuristic_cost = (function dan_shiffman_coding_challenges$snake$a_star$heuristic_cost(p__38367,p__38368){
var vec__38369 = p__38367;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38369,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38369,(1),null);
var start = vec__38369;
var vec__38372 = p__38368;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372,(1),null);
var goal = vec__38372;
return dan_shiffman_coding_challenges.snake.a_star.manhattan_distance(x1,y1,x2,y2);
});
dan_shiffman_coding_challenges.snake.a_star.directions = (function dan_shiffman_coding_challenges$snake$a_star$directions(cell_to_parent_cell_and_direction_and_score,p__38380){
var map__38381 = p__38380;
var map__38381__$1 = ((((!((map__38381 == null)))?((((map__38381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38381):map__38381);
var food = map__38381__$1;
var food_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381__$1,cljs.core.cst$kw$x);
var food_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38381__$1,cljs.core.cst$kw$y);
var path = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(((function (map__38381,map__38381__$1,food,food_x,food_y){
return (function (p1__38378_SHARP_){
return cljs.core.first((cell_to_parent_cell_and_direction_and_score.cljs$core$IFn$_invoke$arity$1 ? cell_to_parent_cell_and_direction_and_score.cljs$core$IFn$_invoke$arity$1(p1__38378_SHARP_) : cell_to_parent_cell_and_direction_and_score(p1__38378_SHARP_)));
});})(map__38381,map__38381__$1,food,food_x,food_y))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [food_x,food_y], null)));
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path,map__38381,map__38381__$1,food,food_x,food_y){
return (function (p1__38379_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cell_to_parent_cell_and_direction_and_score.cljs$core$IFn$_invoke$arity$1 ? cell_to_parent_cell_and_direction_and_score.cljs$core$IFn$_invoke$arity$1(p1__38379_SHARP_) : cell_to_parent_cell_and_direction_and_score(p1__38379_SHARP_)),(1));
});})(path,map__38381,map__38381__$1,food,food_x,food_y))
,cljs.core.butlast(path)));
});
dan_shiffman_coding_challenges.snake.a_star.a_STAR_ = (function dan_shiffman_coding_challenges$snake$a_star$a_STAR_(p__38420,p__38421){
var map__38422 = p__38420;
var map__38422__$1 = ((((!((map__38422 == null)))?((((map__38422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38422):map__38422);
var snake = map__38422__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,cljs.core.cst$kw$y);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,cljs.core.cst$kw$scale);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,cljs.core.cst$kw$direction);
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38422__$1,cljs.core.cst$kw$tail);
var map__38423 = p__38421;
var map__38423__$1 = ((((!((map__38423 == null)))?((((map__38423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38423):map__38423);
var food = map__38423__$1;
var food_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38423__$1,cljs.core.cst$kw$x);
var food_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38423__$1,cljs.core.cst$kw$y);
var closed = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var open_snake = dan_shiffman_coding_challenges.snake.cheaplist.cheap_list.cljs$core$IFn$_invoke$arity$variadic(((function (closed,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y){
return (function (p__38432,p__38433){
var vec__38434 = p__38432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(1),null);
var vec__38437 = p__38433;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38437,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38437,(1),null);
return (a > b);
});})(closed,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake,(0)], null)], 0));
var cell_to_parent_cell_and_direction_and_score = cljs.core.transient$(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null)]));
while(true){
var temp__5457__auto__ = cljs.core.first(open_snake);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__38444 = temp__5457__auto__;
var map__38447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(0),null);
var map__38447__$1 = ((((!((map__38447 == null)))?((((map__38447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38447):map__38447);
var snake__$1 = map__38447__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,cljs.core.cst$kw$x);
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,cljs.core.cst$kw$y);
var scale__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,cljs.core.cst$kw$scale);
var direction__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,cljs.core.cst$kw$direction);
var tail__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38447__$1,cljs.core.cst$kw$tail);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [food_x,food_y], null))){
return dan_shiffman_coding_challenges.snake.a_star.directions(cljs.core.persistent_BANG_(cell_to_parent_cell_and_direction_and_score),food);
} else {
var neighbors = dan_shiffman_coding_challenges.snake.protocols.neighbors(snake__$1,cljs.core.PersistentHashSet.createAsIfByAssoc([dan_shiffman_coding_challenges.snake.utilities.opposite_direction(direction__$1)]),closed);
var neighbor_to_new_score = (function (){var iter__31671__auto__ = ((function (closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y){
return (function dan_shiffman_coding_challenges$snake$a_star$a_STAR__$_iter__38452(s__38453){
return (new cljs.core.LazySeq(null,((function (closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y){
return (function (){
var s__38453__$1 = s__38453;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__38453__$1);
if(temp__5457__auto____$1){
var s__38453__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38453__$2)){
var c__31669__auto__ = cljs.core.chunk_first(s__38453__$2);
var size__31670__auto__ = cljs.core.count(c__31669__auto__);
var b__38455 = cljs.core.chunk_buffer(size__31670__auto__);
if((function (){var i__38454 = (0);
while(true){
if((i__38454 < size__31670__auto__)){
var map__38456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31669__auto__,i__38454);
var map__38456__$1 = ((((!((map__38456 == null)))?((((map__38456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38456):map__38456);
var neighbor = map__38456__$1;
var new_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38456__$1,cljs.core.cst$kw$x);
var new_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38456__$1,cljs.core.cst$kw$y);
var new_score = ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_to_parent_cell_and_direction_and_score,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)),(2)) + scale__$1) + dan_shiffman_coding_challenges.snake.a_star.heuristic_cost(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [food_x,food_y], null)));
if((new_score < (function (){var or__30789__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_to_parent_cell_and_direction_and_score,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null)),(2));
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return Number.MAX_SAFE_INTEGER;
}
})())){
cljs.core.chunk_append(b__38455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor,new_score], null));

var G__38531 = (i__38454 + (1));
i__38454 = G__38531;
continue;
} else {
var G__38532 = (i__38454 + (1));
i__38454 = G__38532;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38455),dan_shiffman_coding_challenges$snake$a_star$a_STAR__$_iter__38452(cljs.core.chunk_rest(s__38453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38455),null);
}
} else {
var map__38460 = cljs.core.first(s__38453__$2);
var map__38460__$1 = ((((!((map__38460 == null)))?((((map__38460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38460):map__38460);
var neighbor = map__38460__$1;
var new_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38460__$1,cljs.core.cst$kw$x);
var new_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38460__$1,cljs.core.cst$kw$y);
var new_score = ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_to_parent_cell_and_direction_and_score,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)),(2)) + scale__$1) + dan_shiffman_coding_challenges.snake.a_star.heuristic_cost(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [food_x,food_y], null)));
if((new_score < (function (){var or__30789__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cell_to_parent_cell_and_direction_and_score,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null)),(2));
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return Number.MAX_SAFE_INTEGER;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neighbor,new_score], null),dan_shiffman_coding_challenges$snake$a_star$a_STAR__$_iter__38452(cljs.core.rest(s__38453__$2)));
} else {
var G__38540 = cljs.core.rest(s__38453__$2);
s__38453__$1 = G__38540;
continue;
}
}
} else {
return null;
}
break;
}
});})(closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y))
,null,null));
});})(closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y))
;
return iter__31671__auto__(neighbors);
})();
var G__38544 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(closed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
var G__38545 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(open_snake),neighbor_to_new_score);
var G__38546 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,neighbor_to_new_score,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y){
return (function (p1__38415_SHARP_,p2__38416_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__38415_SHARP_,p2__38416_SHARP_);
});})(closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,neighbor_to_new_score,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y))
,cell_to_parent_cell_and_direction_and_score,(function (){var iter__31671__auto__ = ((function (closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,neighbor_to_new_score,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y){
return (function dan_shiffman_coding_challenges$snake$a_star$a_STAR__$_iter__38462(s__38463){
return (new cljs.core.LazySeq(null,((function (closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,neighbor_to_new_score,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y){
return (function (){
var s__38463__$1 = s__38463;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__38463__$1);
if(temp__5457__auto____$1){
var s__38463__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38463__$2)){
var c__31669__auto__ = cljs.core.chunk_first(s__38463__$2);
var size__31670__auto__ = cljs.core.count(c__31669__auto__);
var b__38465 = cljs.core.chunk_buffer(size__31670__auto__);
if((function (){var i__38464 = (0);
while(true){
if((i__38464 < size__31670__auto__)){
var vec__38466 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31669__auto__,i__38464);
var map__38469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(0),null);
var map__38469__$1 = ((((!((map__38469 == null)))?((((map__38469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38469):map__38469);
var new_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38469__$1,cljs.core.cst$kw$x);
var new_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38469__$1,cljs.core.cst$kw$y);
var direction__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38469__$1,cljs.core.cst$kw$direction);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38466,(1),null);
cljs.core.chunk_append(b__38465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),direction__$2,score], null)], null));

var G__38558 = (i__38464 + (1));
i__38464 = G__38558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38465),dan_shiffman_coding_challenges$snake$a_star$a_STAR__$_iter__38462(cljs.core.chunk_rest(s__38463__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38465),null);
}
} else {
var vec__38471 = cljs.core.first(s__38463__$2);
var map__38474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38471,(0),null);
var map__38474__$1 = ((((!((map__38474 == null)))?((((map__38474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38474):map__38474);
var new_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38474__$1,cljs.core.cst$kw$x);
var new_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38474__$1,cljs.core.cst$kw$y);
var direction__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38474__$1,cljs.core.cst$kw$direction);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38471,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),direction__$2,score], null)], null),dan_shiffman_coding_challenges$snake$a_star$a_STAR__$_iter__38462(cljs.core.rest(s__38463__$2)));
}
} else {
return null;
}
break;
}
});})(closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,neighbor_to_new_score,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y))
,null,null));
});})(closed,open_snake,cell_to_parent_cell_and_direction_and_score,neighbors,neighbor_to_new_score,vec__38444,map__38447,map__38447__$1,snake__$1,x__$1,y__$1,scale__$1,direction__$1,tail__$1,temp__5457__auto__,map__38422,map__38422__$1,snake,x,y,scale,direction,tail,map__38423,map__38423__$1,food,food_x,food_y))
;
return iter__31671__auto__(neighbor_to_new_score);
})());
closed = G__38544;
open_snake = G__38545;
cell_to_parent_cell_and_direction_and_score = G__38546;
continue;
}
} else {
return null;
}
break;
}
});
