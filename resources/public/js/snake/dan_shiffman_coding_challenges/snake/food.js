// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.food');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dan_shiffman_coding_challenges.snake.protocols');
goog.require('dan_shiffman_coding_challenges.snake.utilities');
goog.require('quil.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {dan_shiffman_coding_challenges.snake.protocols.Renderable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dan_shiffman_coding_challenges.snake.food.Food = (function (x,y,scale,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.scale = scale;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31477__auto__,k__31478__auto__){
var self__ = this;
var this__31477__auto____$1 = this;
return this__31477__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31478__auto__,null);
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31479__auto__,k38350,else__31480__auto__){
var self__ = this;
var this__31479__auto____$1 = this;
var G__38366 = k38350;
var G__38366__$1 = (((G__38366 instanceof cljs.core.Keyword))?G__38366.fqn:null);
switch (G__38366__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "scale":
return self__.scale;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38350,else__31480__auto__);

}
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31491__auto__,writer__31492__auto__,opts__31493__auto__){
var self__ = this;
var this__31491__auto____$1 = this;
var pr_pair__31494__auto__ = ((function (this__31491__auto____$1){
return (function (keyval__31495__auto__){
return cljs.core.pr_sequential_writer(writer__31492__auto__,cljs.core.pr_writer,""," ","",opts__31493__auto__,keyval__31495__auto__);
});})(this__31491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31492__auto__,pr_pair__31494__auto__,"#dan-shiffman-coding-challenges.snake.food.Food{",", ","}",opts__31493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$scale,self__.scale],null))], null),self__.__extmap));
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38349){
var self__ = this;
var G__38349__$1 = this;
return (new cljs.core.RecordIter((0),G__38349__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$scale], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31475__auto__){
var self__ = this;
var this__31475__auto____$1 = this;
return self__.__meta;
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31472__auto__){
var self__ = this;
var this__31472__auto____$1 = this;
return (new dan_shiffman_coding_challenges.snake.food.Food(self__.x,self__.y,self__.scale,self__.__meta,self__.__extmap,self__.__hash));
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31481__auto__){
var self__ = this;
var this__31481__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31473__auto__){
var self__ = this;
var this__31473__auto____$1 = this;
var h__31245__auto__ = self__.__hash;
if(!((h__31245__auto__ == null))){
return h__31245__auto__;
} else {
var h__31245__auto____$1 = (function (){var fexpr__38390 = ((function (h__31245__auto__,this__31473__auto____$1){
return (function (coll__31474__auto__){
return (1968930301 ^ cljs.core.hash_unordered_coll(coll__31474__auto__));
});})(h__31245__auto__,this__31473__auto____$1))
;
return fexpr__38390(this__31473__auto____$1);
})();
self__.__hash = h__31245__auto____$1;

return h__31245__auto____$1;
}
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38351,other38352){
var self__ = this;
var this38351__$1 = this;
return (!((other38352 == null))) && ((this38351__$1.constructor === other38352.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38351__$1.x,other38352.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38351__$1.y,other38352.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38351__$1.scale,other38352.scale)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38351__$1.__extmap,other38352.__extmap));
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31486__auto__,k__31487__auto__){
var self__ = this;
var this__31486__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$scale,null,cljs.core.cst$kw$x,null], null), null),k__31487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31486__auto____$1),self__.__meta),k__31487__auto__);
} else {
return (new dan_shiffman_coding_challenges.snake.food.Food(self__.x,self__.y,self__.scale,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31487__auto__)),null));
}
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31484__auto__,k__31485__auto__,G__38349){
var self__ = this;
var this__31484__auto____$1 = this;
var pred__38403 = cljs.core.keyword_identical_QMARK_;
var expr__38404 = k__31485__auto__;
if(cljs.core.truth_((function (){var G__38406 = cljs.core.cst$kw$x;
var G__38407 = expr__38404;
return (pred__38403.cljs$core$IFn$_invoke$arity$2 ? pred__38403.cljs$core$IFn$_invoke$arity$2(G__38406,G__38407) : pred__38403(G__38406,G__38407));
})())){
return (new dan_shiffman_coding_challenges.snake.food.Food(G__38349,self__.y,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38413 = cljs.core.cst$kw$y;
var G__38414 = expr__38404;
return (pred__38403.cljs$core$IFn$_invoke$arity$2 ? pred__38403.cljs$core$IFn$_invoke$arity$2(G__38413,G__38414) : pred__38403(G__38413,G__38414));
})())){
return (new dan_shiffman_coding_challenges.snake.food.Food(self__.x,G__38349,self__.scale,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38417 = cljs.core.cst$kw$scale;
var G__38418 = expr__38404;
return (pred__38403.cljs$core$IFn$_invoke$arity$2 ? pred__38403.cljs$core$IFn$_invoke$arity$2(G__38417,G__38418) : pred__38403(G__38417,G__38418));
})())){
return (new dan_shiffman_coding_challenges.snake.food.Food(self__.x,self__.y,G__38349,self__.__meta,self__.__extmap,null));
} else {
return (new dan_shiffman_coding_challenges.snake.food.Food(self__.x,self__.y,self__.scale,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31485__auto__,G__38349),null));
}
}
}
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31489__auto__){
var self__ = this;
var this__31489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$x,self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$scale,self__.scale],null))], null),self__.__extmap));
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31476__auto__,G__38349){
var self__ = this;
var this__31476__auto____$1 = this;
return (new dan_shiffman_coding_challenges.snake.food.Food(self__.x,self__.y,self__.scale,G__38349,self__.__extmap,self__.__hash));
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31482__auto__,entry__31483__auto__){
var self__ = this;
var this__31482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31483__auto__)){
return this__31482__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31482__auto____$1,entry__31483__auto__);
}
});

dan_shiffman_coding_challenges.snake.food.Food.prototype.dan_shiffman_coding_challenges$snake$protocols$Renderable$ = cljs.core.PROTOCOL_SENTINEL;

dan_shiffman_coding_challenges.snake.food.Food.prototype.dan_shiffman_coding_challenges$snake$protocols$Renderable$render$arity$1 = (function (p__38441){
var self__ = this;
var map__38442 = p__38441;
var map__38442__$1 = ((((!((map__38442 == null)))?((((map__38442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38442):map__38442);
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38442__$1,cljs.core.cst$kw$x);
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38442__$1,cljs.core.cst$kw$y);
var scale__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38442__$1,cljs.core.cst$kw$scale);
var map__38450 = this;
var map__38450__$1 = ((((!((map__38450 == null)))?((((map__38450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38450):map__38450);
var x__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,cljs.core.cst$kw$x);
var y__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,cljs.core.cst$kw$y);
var scale__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,cljs.core.cst$kw$scale);
quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$3((228),(71),(171));

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(x__$2,y__$2,scale__$2,scale__$2);
});

dan_shiffman_coding_challenges.snake.food.Food.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$x,cljs.core.cst$sym$y,cljs.core.cst$sym$scale], null);
});

dan_shiffman_coding_challenges.snake.food.Food.cljs$lang$type = true;

dan_shiffman_coding_challenges.snake.food.Food.cljs$lang$ctorPrSeq = (function (this__31515__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"dan-shiffman-coding-challenges.snake.food/Food");
});

dan_shiffman_coding_challenges.snake.food.Food.cljs$lang$ctorPrWriter = (function (this__31515__auto__,writer__31516__auto__){
return cljs.core._write(writer__31516__auto__,"dan-shiffman-coding-challenges.snake.food/Food");
});

dan_shiffman_coding_challenges.snake.food.__GT_Food = (function dan_shiffman_coding_challenges$snake$food$__GT_Food(x,y,scale){
return (new dan_shiffman_coding_challenges.snake.food.Food(x,y,scale,null,null,null));
});

dan_shiffman_coding_challenges.snake.food.map__GT_Food = (function dan_shiffman_coding_challenges$snake$food$map__GT_Food(G__38360){
return (new dan_shiffman_coding_challenges.snake.food.Food(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(G__38360),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__38360),cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(G__38360),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38360,cljs.core.cst$kw$x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,cljs.core.cst$kw$scale], 0))),null));
});

dan_shiffman_coding_challenges.snake.food.make_random_food = (function dan_shiffman_coding_challenges$snake$food$make_random_food(var_args){
var args__32075__auto__ = [];
var len__32068__auto___38528 = arguments.length;
var i__32069__auto___38529 = (0);
while(true){
if((i__32069__auto___38529 < len__32068__auto___38528)){
args__32075__auto__.push((arguments[i__32069__auto___38529]));

var G__38530 = (i__32069__auto___38529 + (1));
i__32069__auto___38529 = G__38530;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((3) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((3)),(0),null)):null);
return dan_shiffman_coding_challenges.snake.food.make_random_food.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32076__auto__);
});

dan_shiffman_coding_challenges.snake.food.make_random_food.cljs$core$IFn$_invoke$arity$variadic = (function (width,height,scale,p__38511){
var map__38512 = p__38511;
var map__38512__$1 = ((((!((map__38512 == null)))?((((map__38512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38512):map__38512);
var except = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38512__$1,cljs.core.cst$kw$except);
var G__38515 = dan_shiffman_coding_challenges.snake.utilities.random_location(width,height,scale);
var map__38516 = G__38515;
var map__38516__$1 = ((((!((map__38516 == null)))?((((map__38516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38516):map__38516);
var location = map__38516__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38516__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38516__$1,cljs.core.cst$kw$y);
var G__38515__$1 = G__38515;
while(true){
var map__38521 = G__38515__$1;
var map__38521__$1 = ((((!((map__38521 == null)))?((((map__38521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38521):map__38521);
var location__$1 = map__38521__$1;
var x__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38521__$1,cljs.core.cst$kw$x);
var y__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38521__$1,cljs.core.cst$kw$y);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)]),except))){
var G__38538 = dan_shiffman_coding_challenges.snake.utilities.random_location(width,height,scale);
G__38515__$1 = G__38538;
continue;
} else {
return dan_shiffman_coding_challenges.snake.food.map__GT_Food(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scale,scale], null)], 0)));
}
break;
}
});

dan_shiffman_coding_challenges.snake.food.make_random_food.cljs$lang$maxFixedArity = (3);

dan_shiffman_coding_challenges.snake.food.make_random_food.cljs$lang$applyTo = (function (seq38507){
var G__38508 = cljs.core.first(seq38507);
var seq38507__$1 = cljs.core.next(seq38507);
var G__38509 = cljs.core.first(seq38507__$1);
var seq38507__$2 = cljs.core.next(seq38507__$1);
var G__38510 = cljs.core.first(seq38507__$2);
var seq38507__$3 = cljs.core.next(seq38507__$2);
return dan_shiffman_coding_challenges.snake.food.make_random_food.cljs$core$IFn$_invoke$arity$variadic(G__38508,G__38509,G__38510,seq38507__$3);
});

