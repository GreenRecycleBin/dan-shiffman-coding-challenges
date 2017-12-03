// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.snake');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('dan_shiffman_coding_challenges.snake.protocols');
goog.require('dan_shiffman_coding_challenges.snake.utilities');
goog.require('quil.core');
dan_shiffman_coding_challenges.snake.snake.direction_maps = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null);
dan_shiffman_coding_challenges.snake.snake.direction_set = cljs.core.set(cljs.core.keys(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null)));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {dan_shiffman_coding_challenges.snake.protocols.Neighbor}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {dan_shiffman_coding_challenges.snake.protocols.Animal}
 * @implements {dan_shiffman_coding_challenges.snake.protocols.Moveable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dan_shiffman_coding_challenges.snake.protocols.Renderable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dan_shiffman_coding_challenges.snake.snake.Snake = (function (x,y,tail,tail_set,count,x_speed,y_speed,direction,next_direction,moving_QMARK_,dead_QMARK_,width,height,scale,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.tail = tail;
this.tail_set = tail_set;
this.count = count;
this.x_speed = x_speed;
this.y_speed = y_speed;
this.direction = direction;
this.next_direction = next_direction;
this.moving_QMARK_ = moving_QMARK_;
this.dead_QMARK_ = dead_QMARK_;
this.width = width;
this.height = height;
this.scale = scale;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31477__auto__,k__31478__auto__){
var self__ = this;
var this__31477__auto____$1 = this;
return this__31477__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31478__auto__,null);
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31479__auto__,k38394,else__31480__auto__){
var self__ = this;
var this__31479__auto____$1 = this;
var G__38402 = k38394;
var G__38402__$1 = (((G__38402 instanceof cljs.core.Keyword))?G__38402.fqn:null);
switch (G__38402__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "tail":
return self__.tail;

break;
case "tail-set":
return self__.tail_set;

break;
case "count":
return self__.count;

break;
case "x-speed":
return self__.x_speed;

break;
case "y-speed":
return self__.y_speed;

break;
case "direction":
return self__.direction;

break;
case "next-direction":
return self__.next_direction;

break;
case "moving?":
return self__.moving_QMARK_;

break;
case "dead?":
return self__.dead_QMARK_;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "scale":
return self__.scale;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38394,else__31480__auto__);

}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Neighbor$ = cljs.core.PROTOCOL_SENTINEL;

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Neighbor$neighbor$arity$2 = (function (m,direction__$1){
var self__ = this;
var m__$1 = this;
var G__38419 = direction__$1;
var G__38419__$1 = (((G__38419 instanceof cljs.core.Keyword))?G__38419.fqn:null);
switch (G__38419__$1) {
case "up":
case "down":
case "left":
case "right":
return dan_shiffman_coding_challenges.snake.protocols.move(m__$1.dan_shiffman_coding_challenges$snake$protocols$Moveable$change_direction$arity$2(null,direction__$1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38419__$1)].join('')));

}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Neighbor$neighbors$arity$3 = (function (m,except_direction,except_cells){
var self__ = this;
var m__$1 = this;
var directions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.snake.direction_set,except_direction);
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (directions,m__$1){
return (function (p1__38391_SHARP_){
var m__$2 = m__$1.dan_shiffman_coding_challenges$snake$protocols$Neighbor$neighbor$arity$2(null,p1__38391_SHARP_);
if(cljs.core.truth_((function (){var or__30789__auto__ = cljs.core.cst$kw$dead_QMARK_.cljs$core$IFn$_invoke$arity$1(m__$2);
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return cljs.core.contains_QMARK_(except_cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m__$2),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m__$2)], null));
}
})())){
return null;
} else {
return m__$2;
}
});})(directions,m__$1))
,directions);
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31491__auto__,writer__31492__auto__,opts__31493__auto__){
var self__ = this;
var this__31491__auto____$1 = this;
var pr_pair__31494__auto__ = ((function (this__31491__auto____$1){
return (function (keyval__31495__auto__){
return cljs.core.pr_sequential_writer(writer__31492__auto__,cljs.core.pr_writer,""," ","",opts__31493__auto__,keyval__31495__auto__);
});})(this__31491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31492__auto__,pr_pair__31494__auto__,"#dan-shiffman-coding-challenges.snake.snake.Snake{",", ","}",opts__31493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tail,self__.tail],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tail_DASH_set,self__.tail_set],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$count,self__.count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x_DASH_speed,self__.x_speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y_DASH_speed,self__.y_speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$direction,self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_direction,self__.next_direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$moving_QMARK_,self__.moving_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dead_QMARK_,self__.dead_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$width,self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$height,self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$scale,self__.scale],null))], null),self__.__extmap));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38393){
var self__ = this;
var G__38393__$1 = this;
return (new cljs.core.RecordIter((0),G__38393__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$tail,cljs.core.cst$kw$tail_DASH_set,cljs.core.cst$kw$count,cljs.core.cst$kw$x_DASH_speed,cljs.core.cst$kw$y_DASH_speed,cljs.core.cst$kw$direction,cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$moving_QMARK_,cljs.core.cst$kw$dead_QMARK_,cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$scale], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31475__auto__){
var self__ = this;
var this__31475__auto____$1 = this;
return self__.__meta;
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31472__auto__){
var self__ = this;
var this__31472__auto____$1 = this;
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,self__.__hash));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31481__auto__){
var self__ = this;
var this__31481__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31473__auto__){
var self__ = this;
var this__31473__auto____$1 = this;
var h__31245__auto__ = self__.__hash;
if(!((h__31245__auto__ == null))){
return h__31245__auto__;
} else {
var h__31245__auto____$1 = (function (){var fexpr__38459 = ((function (h__31245__auto__,this__31473__auto____$1){
return (function (coll__31474__auto__){
return (846396707 ^ cljs.core.hash_unordered_coll(coll__31474__auto__));
});})(h__31245__auto__,this__31473__auto____$1))
;
return fexpr__38459(this__31473__auto____$1);
})();
self__.__hash = h__31245__auto____$1;

return h__31245__auto____$1;
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38395,other38396){
var self__ = this;
var this38395__$1 = this;
return (!((other38396 == null))) && ((this38395__$1.constructor === other38396.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.x,other38396.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.y,other38396.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.tail,other38396.tail)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.tail_set,other38396.tail_set)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.count,other38396.count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.x_speed,other38396.x_speed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.y_speed,other38396.y_speed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.direction,other38396.direction)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.next_direction,other38396.next_direction)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.moving_QMARK_,other38396.moving_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.dead_QMARK_,other38396.dead_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.width,other38396.width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.height,other38396.height)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.scale,other38396.scale)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38395__$1.__extmap,other38396.__extmap));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31486__auto__,k__31487__auto__){
var self__ = this;
var this__31486__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$scale,null,cljs.core.cst$kw$width,null,cljs.core.cst$kw$x_DASH_speed,null,cljs.core.cst$kw$y_DASH_speed,null,cljs.core.cst$kw$moving_QMARK_,null,cljs.core.cst$kw$tail,null,cljs.core.cst$kw$count,null,cljs.core.cst$kw$x,null,cljs.core.cst$kw$dead_QMARK_,null,cljs.core.cst$kw$next_DASH_direction,null,cljs.core.cst$kw$direction,null,cljs.core.cst$kw$height,null,cljs.core.cst$kw$tail_DASH_set,null], null), null),k__31487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31486__auto____$1),self__.__meta),k__31487__auto__);
} else {
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31487__auto__)),null));
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31484__auto__,k__31485__auto__,G__38393){
var self__ = this;
var this__31484__auto____$1 = this;
var pred__38475 = cljs.core.keyword_identical_QMARK_;
var expr__38476 = k__31485__auto__;
if(cljs.core.truth_((function (){var G__38479 = cljs.core.cst$kw$x;
var G__38480 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38479,G__38480) : pred__38475(G__38479,G__38480));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(G__38393,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38481 = cljs.core.cst$kw$y;
var G__38482 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38481,G__38482) : pred__38475(G__38481,G__38482));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,G__38393,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38483 = cljs.core.cst$kw$tail;
var G__38484 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38483,G__38484) : pred__38475(G__38483,G__38484));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,G__38393,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38485 = cljs.core.cst$kw$tail_DASH_set;
var G__38486 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38485,G__38486) : pred__38475(G__38485,G__38486));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,G__38393,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38487 = cljs.core.cst$kw$count;
var G__38488 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38487,G__38488) : pred__38475(G__38487,G__38488));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,G__38393,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38489 = cljs.core.cst$kw$x_DASH_speed;
var G__38490 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38489,G__38490) : pred__38475(G__38489,G__38490));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,G__38393,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38491 = cljs.core.cst$kw$y_DASH_speed;
var G__38492 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38491,G__38492) : pred__38475(G__38491,G__38492));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,G__38393,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38493 = cljs.core.cst$kw$direction;
var G__38494 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38493,G__38494) : pred__38475(G__38493,G__38494));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,G__38393,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38495 = cljs.core.cst$kw$next_DASH_direction;
var G__38496 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38495,G__38496) : pred__38475(G__38495,G__38496));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,G__38393,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38497 = cljs.core.cst$kw$moving_QMARK_;
var G__38498 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38497,G__38498) : pred__38475(G__38497,G__38498));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,G__38393,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38499 = cljs.core.cst$kw$dead_QMARK_;
var G__38500 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38499,G__38500) : pred__38475(G__38499,G__38500));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,G__38393,self__.width,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38501 = cljs.core.cst$kw$width;
var G__38502 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38501,G__38502) : pred__38475(G__38501,G__38502));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,G__38393,self__.height,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38503 = cljs.core.cst$kw$height;
var G__38504 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38503,G__38504) : pred__38475(G__38503,G__38504));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,G__38393,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38505 = cljs.core.cst$kw$scale;
var G__38506 = expr__38476;
return (pred__38475.cljs$core$IFn$_invoke$arity$2 ? pred__38475.cljs$core$IFn$_invoke$arity$2(G__38505,G__38506) : pred__38475(G__38505,G__38506));
})())){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,G__38393,self__.__meta,self__.__extmap,null));
} else {
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31485__auto__,G__38393),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31489__auto__){
var self__ = this;
var this__31489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tail,self__.tail],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tail_DASH_set,self__.tail_set],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$count,self__.count],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x_DASH_speed,self__.x_speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y_DASH_speed,self__.y_speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$direction,self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_direction,self__.next_direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$moving_QMARK_,self__.moving_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dead_QMARK_,self__.dead_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$width,self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$height,self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$scale,self__.scale],null))], null),self__.__extmap));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Moveable$ = cljs.core.PROTOCOL_SENTINEL;

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Moveable$move$arity$1 = (function (p__38518){
var self__ = this;
var map__38519 = p__38518;
var map__38519__$1 = ((((!((map__38519 == null)))?((((map__38519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38519):map__38519);
var m = map__38519__$1;
var next_direction__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,cljs.core.cst$kw$next_DASH_direction);
var map__38523 = this;
var map__38523__$1 = ((((!((map__38523 == null)))?((((map__38523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38523):map__38523);
var m__$1 = map__38523__$1;
var next_direction__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38523__$1,cljs.core.cst$kw$next_DASH_direction);
var m__$2 = (function (){var G__38526 = m__$1;
if(cljs.core.truth_(next_direction__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__38526,(next_direction__$2.cljs$core$IFn$_invoke$arity$1 ? next_direction__$2.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null)) : next_direction__$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null)))], 0)),cljs.core.cst$kw$direction,next_direction__$2),cljs.core.cst$kw$next_DASH_direction,null);
} else {
return G__38526;
}
})();
var map__38525 = m__$2;
var map__38525__$1 = ((((!((map__38525 == null)))?((((map__38525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38525):map__38525);
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$x);
var dead_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$dead_QMARK_);
var height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$height);
var tail_set__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$tail_DASH_set);
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$y);
var scale__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$scale);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$width);
var x_speed__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$x_DASH_speed);
var y_speed__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$y_DASH_speed);
var moving_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$moving_QMARK_);
var tail__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,cljs.core.cst$kw$tail);
if((moving_QMARK___$1) && (!(dead_QMARK___$1))){
var new_x = (x__$1 + (scale__$1 * x_speed__$1));
var new_y = (y__$1 + (scale__$1 * y_speed__$1));
var last_tail = cljs.core.peek(tail__$1);
var tail_set_without_last = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(tail_set__$1,last_tail);
if((cljs.core.contains_QMARK_(tail_set_without_last,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null))) || ((new_x < (0))) || ((new_x >= width__$1)) || ((new_y < (0))) || ((new_y >= height__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,cljs.core.cst$kw$dead_QMARK_,true);
} else {
var tail_without_last = cljs.core.pop(tail__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tail], null),((function (tail_without_last,new_x,new_y,last_tail,tail_set_without_last,m__$2,map__38525,map__38525__$1,x__$1,dead_QMARK___$1,height__$1,tail_set__$1,y__$1,scale__$1,width__$1,x_speed__$1,y_speed__$1,moving_QMARK___$1,tail__$1,map__38523,map__38523__$1,m__$1,next_direction__$2,map__38519,map__38519__$1,m,next_direction__$1){
return (function (p1__38383_SHARP_){
if(cljs.core.seq(p1__38383_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tail_without_last,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
} else {
return p1__38383_SHARP_;
}
});})(tail_without_last,new_x,new_y,last_tail,tail_set_without_last,m__$2,map__38525,map__38525__$1,x__$1,dead_QMARK___$1,height__$1,tail_set__$1,y__$1,scale__$1,width__$1,x_speed__$1,y_speed__$1,moving_QMARK___$1,tail__$1,map__38523,map__38523__$1,m__$1,next_direction__$2,map__38519,map__38519__$1,m,next_direction__$1))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tail_DASH_set], null),((function (tail_without_last,new_x,new_y,last_tail,tail_set_without_last,m__$2,map__38525,map__38525__$1,x__$1,dead_QMARK___$1,height__$1,tail_set__$1,y__$1,scale__$1,width__$1,x_speed__$1,y_speed__$1,moving_QMARK___$1,tail__$1,map__38523,map__38523__$1,m__$1,next_direction__$2,map__38519,map__38519__$1,m,next_direction__$1){
return (function (p1__38384_SHARP_){
if(cljs.core.seq(p1__38384_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tail_set_without_last,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));
} else {
return p1__38384_SHARP_;
}
});})(tail_without_last,new_x,new_y,last_tail,tail_set_without_last,m__$2,map__38525,map__38525__$1,x__$1,dead_QMARK___$1,height__$1,tail_set__$1,y__$1,scale__$1,width__$1,x_speed__$1,y_speed__$1,moving_QMARK___$1,tail__$1,map__38523,map__38523__$1,m__$1,next_direction__$2,map__38519,map__38519__$1,m,next_direction__$1))
),cljs.core.cst$kw$x,new_x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,new_y], 0));
}
} else {
return m__$2;
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Moveable$change_direction$arity$2 = (function (p__38533,dir){
var self__ = this;
var map__38534 = p__38533;
var map__38534__$1 = ((((!((map__38534 == null)))?((((map__38534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38534):map__38534);
var m = map__38534__$1;
var direction__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534__$1,cljs.core.cst$kw$direction);
var next_direction__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534__$1,cljs.core.cst$kw$next_DASH_direction);
var map__38536 = this;
var map__38536__$1 = ((((!((map__38536 == null)))?((((map__38536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38536):map__38536);
var m__$1 = map__38536__$1;
var direction__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38536__$1,cljs.core.cst$kw$direction);
var next_direction__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38536__$1,cljs.core.cst$kw$next_DASH_direction);
var G__38539 = m__$1;
if(cljs.core.not(next_direction__$2)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__38539,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dir,dan_shiffman_coding_challenges.snake.utilities.opposite_direction(direction__$2)))?(dir.cljs$core$IFn$_invoke$arity$1 ? dir.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null)) : dir(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null))):null)], 0));
} else {
return G__38539;
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Moveable$toggle_moving_QMARK_$arity$1 = (function (p__38541){
var self__ = this;
var map__38542 = p__38541;
var map__38542__$1 = ((((!((map__38542 == null)))?((((map__38542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38542):map__38542);
var m = map__38542__$1;
var moving_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38542__$1,cljs.core.cst$kw$moving_QMARK_);
var map__38547 = this;
var map__38547__$1 = ((((!((map__38547 == null)))?((((map__38547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38547):map__38547);
var m__$1 = map__38547__$1;
var moving_QMARK___$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38547__$1,cljs.core.cst$kw$moving_QMARK_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.cst$kw$moving_QMARK_,cljs.core.not(moving_QMARK___$2));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Animal$ = cljs.core.PROTOCOL_SENTINEL;

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Animal$eat$arity$2 = (function (p__38549,p__38550){
var self__ = this;
var map__38551 = p__38549;
var map__38551__$1 = ((((!((map__38551 == null)))?((((map__38551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38551):map__38551);
var m = map__38551__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38551__$1,cljs.core.cst$kw$x);
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38551__$1,cljs.core.cst$kw$y);
var map__38552 = p__38550;
var map__38552__$1 = ((((!((map__38552 == null)))?((((map__38552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38552):map__38552);
var food_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38552__$1,cljs.core.cst$kw$x);
var food_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38552__$1,cljs.core.cst$kw$y);
var map__38555 = this;
var map__38555__$1 = ((((!((map__38555 == null)))?((((map__38555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38555.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38555):map__38555);
var m__$1 = map__38555__$1;
var x__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38555__$1,cljs.core.cst$kw$x);
var y__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38555__$1,cljs.core.cst$kw$y);
var G__38557 = m__$1;
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(food_x,x__$2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(food_y,y__$2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__38557,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tail], null),((function (G__38557,map__38555,map__38555__$1,m__$1,x__$2,y__$2,map__38551,map__38551__$1,m,x__$1,y__$1,map__38552,map__38552__$1,food_x,food_y){
return (function (p1__38385_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__38385_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$2,y__$2], null));
});})(G__38557,map__38555,map__38555__$1,m__$1,x__$2,y__$2,map__38551,map__38551__$1,m,x__$1,y__$1,map__38552,map__38552__$1,food_x,food_y))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tail_DASH_set], null),((function (G__38557,map__38555,map__38555__$1,m__$1,x__$2,y__$2,map__38551,map__38551__$1,m,x__$1,y__$1,map__38552,map__38552__$1,food_x,food_y){
return (function (p1__38386_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__38386_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$2,y__$2], null));
});})(G__38557,map__38555,map__38555__$1,m__$1,x__$2,y__$2,map__38551,map__38551__$1,m,x__$1,y__$1,map__38552,map__38552__$1,food_x,food_y))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$count], null),cljs.core.inc),cljs.core.cst$kw$x,food_x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,food_y], 0));
} else {
return G__38557;
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31476__auto__,G__38393){
var self__ = this;
var this__31476__auto____$1 = this;
return (new dan_shiffman_coding_challenges.snake.snake.Snake(self__.x,self__.y,self__.tail,self__.tail_set,self__.count,self__.x_speed,self__.y_speed,self__.direction,self__.next_direction,self__.moving_QMARK_,self__.dead_QMARK_,self__.width,self__.height,self__.scale,G__38393,self__.__extmap,self__.__hash));
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31482__auto__,entry__31483__auto__){
var self__ = this;
var this__31482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31483__auto__)){
return this__31482__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31482__auto____$1,entry__31483__auto__);
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL;

dan_shiffman_coding_challenges.snake.snake.Snake.prototype.dan_shiffman_coding_challenges$snake$protocols$Renderable$render$arity$1 = (function (p__38559){
var self__ = this;
var map__38560 = p__38559;
var map__38560__$1 = ((((!((map__38560 == null)))?((((map__38560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38560):map__38560);
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38560__$1,cljs.core.cst$kw$x);
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38560__$1,cljs.core.cst$kw$y);
var scale__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38560__$1,cljs.core.cst$kw$scale);
var tail__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38560__$1,cljs.core.cst$kw$tail);
var map__38562 = this;
var map__38562__$1 = ((((!((map__38562 == null)))?((((map__38562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38562):map__38562);
var x__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38562__$1,cljs.core.cst$kw$x);
var y__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38562__$1,cljs.core.cst$kw$y);
var scale__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38562__$1,cljs.core.cst$kw$scale);
var tail__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38562__$1,cljs.core.cst$kw$tail);
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

quil.core.rect.cljs$core$IFn$_invoke$arity$4(x__$2,y__$2,scale__$2,scale__$2);

if(cljs.core.seq(tail__$2)){
quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(0),(0));

var vec__38564_38572 = cljs.core.peek(tail__$2);
var x_38573__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38564_38572,(0),null);
var y_38574__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38564_38572,(1),null);
quil.core.rect.cljs$core$IFn$_invoke$arity$4(x_38573__$3,y_38574__$3,scale__$2,scale__$2);

quil.core.fill.cljs$core$IFn$_invoke$arity$1((170));

var tail__$3 = cljs.core.pop(tail__$2);
while(true){
if(cljs.core.seq(tail__$3)){
var vec__38567 = cljs.core.peek(tail__$3);
var x__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38567,(0),null);
var y__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38567,(1),null);
quil.core.rect.cljs$core$IFn$_invoke$arity$4(x__$3,y__$3,scale__$2,scale__$2);

var G__38575 = cljs.core.pop(tail__$3);
tail__$3 = G__38575;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});

dan_shiffman_coding_challenges.snake.snake.Snake.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$tail,cljs.core.cst$sym$tail_DASH_set,cljs.core.cst$sym$count,cljs.core.cst$sym$x_DASH_speed,cljs.core.cst$sym$y_DASH_speed,cljs.core.cst$sym$direction,cljs.core.cst$sym$next_DASH_direction,cljs.core.with_meta(cljs.core.cst$sym$moving_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null)),cljs.core.with_meta(cljs.core.cst$sym$dead_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null)),cljs.core.cst$sym$width,cljs.core.cst$sym$height,cljs.core.cst$sym$scale], null);
});

dan_shiffman_coding_challenges.snake.snake.Snake.cljs$lang$type = true;

dan_shiffman_coding_challenges.snake.snake.Snake.cljs$lang$ctorPrSeq = (function (this__31515__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"dan-shiffman-coding-challenges.snake.snake/Snake");
});

dan_shiffman_coding_challenges.snake.snake.Snake.cljs$lang$ctorPrWriter = (function (this__31515__auto__,writer__31516__auto__){
return cljs.core._write(writer__31516__auto__,"dan-shiffman-coding-challenges.snake.snake/Snake");
});

dan_shiffman_coding_challenges.snake.snake.__GT_Snake = (function dan_shiffman_coding_challenges$snake$snake$__GT_Snake(x,y,tail,tail_set,count,x_speed,y_speed,direction,next_direction,moving_QMARK_,dead_QMARK_,width,height,scale){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(x,y,tail,tail_set,count,x_speed,y_speed,direction,next_direction,moving_QMARK_,dead_QMARK_,width,height,scale,null,null,null));
});

dan_shiffman_coding_challenges.snake.snake.map__GT_Snake = (function dan_shiffman_coding_challenges$snake$snake$map__GT_Snake(G__38397){
return (new dan_shiffman_coding_challenges.snake.snake.Snake(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$tail.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$tail_DASH_set.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$x_DASH_speed.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$y_DASH_speed.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$next_DASH_direction.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$moving_QMARK_.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$dead_QMARK_.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(G__38397),cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(G__38397),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38397,cljs.core.cst$kw$x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,cljs.core.cst$kw$tail,cljs.core.cst$kw$tail_DASH_set,cljs.core.cst$kw$count,cljs.core.cst$kw$x_DASH_speed,cljs.core.cst$kw$y_DASH_speed,cljs.core.cst$kw$direction,cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$moving_QMARK_,cljs.core.cst$kw$dead_QMARK_,cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$scale], 0))),null));
});

dan_shiffman_coding_challenges.snake.snake.constrain = (function dan_shiffman_coding_challenges$snake$snake$constrain(n,min,max){
if((n < min)){
return min;
} else {
if((n > max)){
return max;
} else {
return n;

}
}
});
dan_shiffman_coding_challenges.snake.snake.make_snake = (function dan_shiffman_coding_challenges$snake$snake$make_snake(p__38576){
var map__38577 = p__38576;
var map__38577__$1 = ((((!((map__38577 == null)))?((((map__38577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38577):map__38577);
var m = map__38577__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577__$1,cljs.core.cst$kw$y);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577__$1,cljs.core.cst$kw$height);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38577__$1,cljs.core.cst$kw$scale);
return dan_shiffman_coding_challenges.snake.snake.map__GT_Snake((function (){var dir = cljs.core.rand_nth(cljs.core.keys(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(dir.cljs$core$IFn$_invoke$arity$1 ? dir.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null)) : dir(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(-1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$up], null),cljs.core.cst$kw$down,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(0),cljs.core.cst$kw$y_DASH_speed,(1),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$down], null),cljs.core.cst$kw$left,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(-1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$left], null),cljs.core.cst$kw$right,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x_DASH_speed,(1),cljs.core.cst$kw$y_DASH_speed,(0),cljs.core.cst$kw$next_DASH_direction,cljs.core.cst$kw$right], null)], null))),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$tail,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$tail_DASH_set,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$count,(0),cljs.core.cst$kw$direction,dir,cljs.core.cst$kw$next_DASH_direction,null,cljs.core.cst$kw$moving_QMARK_,true,cljs.core.cst$kw$dead_QMARK_,false], null),m,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,dan_shiffman_coding_challenges.snake.snake.constrain(x,(0),(width - scale)),cljs.core.cst$kw$y,dan_shiffman_coding_challenges.snake.snake.constrain(y,(0),(height - scale))], null)], 0));
})());
});
dan_shiffman_coding_challenges.snake.snake.make_random_snake = (function dan_shiffman_coding_challenges$snake$snake$make_random_snake(width,height,scale){
return dan_shiffman_coding_challenges.snake.snake.make_snake(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dan_shiffman_coding_challenges.snake.utilities.random_location(width,height,scale),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$scale,scale], null)], 0)));
});
