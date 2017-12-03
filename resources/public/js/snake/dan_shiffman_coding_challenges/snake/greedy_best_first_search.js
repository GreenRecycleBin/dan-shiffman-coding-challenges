// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.greedy_best_first_search');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('dan_shiffman_coding_challenges.snake.utilities');
dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor = (function dan_shiffman_coding_challenges$snake$greedy_best_first_search$neighbor(x,y,scale,direction){
var G__38344 = direction;
var G__38344__$1 = (((G__38344 instanceof cljs.core.Keyword))?G__38344.fqn:null);
switch (G__38344__$1) {
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - scale)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + scale)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - scale),y], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + scale),y], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38344__$1)].join('')));

}
});
dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor_to_direction = (function dan_shiffman_coding_challenges$snake$greedy_best_first_search$neighbor_to_direction(var_args){
var args__32075__auto__ = [];
var len__32068__auto___38375 = arguments.length;
var i__32069__auto___38376 = (0);
while(true){
if((i__32069__auto___38376 < len__32068__auto___38375)){
args__32075__auto__.push((arguments[i__32069__auto___38376]));

var G__38377 = (i__32069__auto___38376 + (1));
i__32069__auto___38376 = G__38377;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((3) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((3)),(0),null)):null);
return dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor_to_direction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32076__auto__);
});

dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor_to_direction.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,scale,p__38363){
var map__38364 = p__38363;
var map__38364__$1 = ((((!((map__38364 == null)))?((((map__38364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38364):map__38364);
var except = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38364__$1,cljs.core.cst$kw$except);
var directions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$down,null,cljs.core.cst$kw$up,null,cljs.core.cst$kw$right,null,cljs.core.cst$kw$left,null], null), null),except);
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor,x,y,scale),directions),directions);
});

dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor_to_direction.cljs$lang$maxFixedArity = (3);

dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor_to_direction.cljs$lang$applyTo = (function (seq38354){
var G__38355 = cljs.core.first(seq38354);
var seq38354__$1 = cljs.core.next(seq38354);
var G__38357 = cljs.core.first(seq38354__$1);
var seq38354__$2 = cljs.core.next(seq38354__$1);
var G__38358 = cljs.core.first(seq38354__$2);
var seq38354__$3 = cljs.core.next(seq38354__$2);
return dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor_to_direction.cljs$core$IFn$_invoke$arity$variadic(G__38355,G__38357,G__38358,seq38354__$3);
});

dan_shiffman_coding_challenges.snake.greedy_best_first_search.filter_neighbors_not_on_next_tail = (function dan_shiffman_coding_challenges$snake$greedy_best_first_search$filter_neighbors_not_on_next_tail(m,tail){
return cljs.core.reduce_kv((function (p1__38387_SHARP_,p2__38388_SHARP_,p3__38389_SHARP_){
var G__38392 = p1__38387_SHARP_;
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p2__38388_SHARP_]),tail))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38392,p2__38388_SHARP_,p3__38389_SHARP_);
} else {
return G__38392;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
dan_shiffman_coding_challenges.snake.greedy_best_first_search.manhattan_distance = (function dan_shiffman_coding_challenges$snake$greedy_best_first_search$manhattan_distance(x1,y1,x2,y2){
return ((function (){var G__38398 = (x1 - x2);
return Math.abs(G__38398);
})() + (function (){var G__38399 = (y1 - y2);
return Math.abs(G__38399);
})());
});
/**
 * Returns a map with the keys mapped to the corresponding vals. Values of
 *   duplicate keys are conjoined together into a set.
 */
dan_shiffman_coding_challenges.snake.greedy_best_first_search.zipmap_union = (function dan_shiffman_coding_challenges$snake$greedy_best_first_search$zipmap_union(keys,vals){
var map = cljs.core.PersistentArrayMap.EMPTY;
var ks = cljs.core.seq(keys);
var vs = cljs.core.seq(vals);
while(true){
if((cljs.core.seq(ks)) && (cljs.core.seq(vs))){
var G__38408 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (map,ks,vs){
return (function (p1__38400_SHARP_,p2__38401_SHARP_){
if(cljs.core.set_QMARK_(p1__38400_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__38400_SHARP_,p2__38401_SHARP_);
} else {
if(cljs.core.truth_(p1__38400_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([p1__38400_SHARP_]),p2__38401_SHARP_);
} else {
return null;
}
}
});})(map,ks,vs))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ks),cljs.core.first(vs)])], 0));
var G__38410 = cljs.core.rest(ks);
var G__38411 = cljs.core.rest(vs);
map = G__38408;
ks = G__38410;
vs = G__38411;
continue;
} else {
return map;
}
break;
}
});
dan_shiffman_coding_challenges.snake.greedy_best_first_search.vals_into_sets = (function dan_shiffman_coding_challenges$snake$greedy_best_first_search$vals_into_sets(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,((cljs.core.set_QMARK_(v))?v:cljs.core.PersistentHashSet.createAsIfByAssoc([v])));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
dan_shiffman_coding_challenges.snake.greedy_best_first_search.next_direction = (function dan_shiffman_coding_challenges$snake$greedy_best_first_search$next_direction(p__38427,p__38428){
var map__38429 = p__38427;
var map__38429__$1 = ((((!((map__38429 == null)))?((((map__38429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38429):map__38429);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,cljs.core.cst$kw$y);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,cljs.core.cst$kw$scale);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,cljs.core.cst$kw$direction);
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429__$1,cljs.core.cst$kw$tail);
var map__38430 = p__38428;
var map__38430__$1 = ((((!((map__38430 == null)))?((((map__38430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38430):map__38430);
var food_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430__$1,cljs.core.cst$kw$x);
var food_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430__$1,cljs.core.cst$kw$y);
var neighbor_to_direction = dan_shiffman_coding_challenges.snake.greedy_best_first_search.neighbor_to_direction.cljs$core$IFn$_invoke$arity$variadic(x,y,scale,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$except,cljs.core.PersistentHashSet.createAsIfByAssoc([dan_shiffman_coding_challenges.snake.utilities.opposite_direction(direction)])], 0));
var neighbor_to_direction__$1 = dan_shiffman_coding_challenges.snake.greedy_best_first_search.filter_neighbors_not_on_next_tail(neighbor_to_direction,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(tail));
var neighbors = cljs.core.keys(neighbor_to_direction__$1);
var distances = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neighbor_to_direction,neighbor_to_direction__$1,neighbors,map__38429,map__38429__$1,x,y,scale,direction,tail,map__38430,map__38430__$1,food_x,food_y){
return (function (p1__38426_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dan_shiffman_coding_challenges.snake.greedy_best_first_search.manhattan_distance,food_x,food_y),p1__38426_SHARP_);
});})(neighbor_to_direction,neighbor_to_direction__$1,neighbors,map__38429,map__38429__$1,x,y,scale,direction,tail,map__38430,map__38430__$1,food_x,food_y))
,neighbors);
var distance_to_neighbor = dan_shiffman_coding_challenges.snake.greedy_best_first_search.vals_into_sets(dan_shiffman_coding_challenges.snake.greedy_best_first_search.zipmap_union(distances,neighbors));
var min_distance = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,distances);
var potential_neighbors = cljs.core.vec((distance_to_neighbor.cljs$core$IFn$_invoke$arity$1 ? distance_to_neighbor.cljs$core$IFn$_invoke$arity$1(min_distance) : distance_to_neighbor(min_distance)));
if(cljs.core.seq(potential_neighbors)){
var G__38449 = cljs.core.rand_nth(potential_neighbors);
return (neighbor_to_direction__$1.cljs$core$IFn$_invoke$arity$1 ? neighbor_to_direction__$1.cljs$core$IFn$_invoke$arity$1(G__38449) : neighbor_to_direction__$1(G__38449));
} else {
return null;
}
});
