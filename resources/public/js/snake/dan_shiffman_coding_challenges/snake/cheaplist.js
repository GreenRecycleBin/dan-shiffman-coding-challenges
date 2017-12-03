// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.cheaplist');
goog.require('cljs.core');
goog.require('cljs.core.constants');
dan_shiffman_coding_challenges.snake.cheaplist.que_size = (15);
dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux = (function dan_shiffman_coding_challenges$snake$cheaplist$qsort_aux(p__36396,pred){
var vec__36397 = p__36396;
var seq__36398 = cljs.core.seq(vec__36397);
var first__36399 = cljs.core.first(seq__36398);
var seq__36398__$1 = cljs.core.next(seq__36398);
var pivot = first__36399;
var tail = seq__36398__$1;
if(cljs.core.truth_(pivot)){
var pred_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(pred,pivot);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.LazySeq(null,((function (pred_QMARK_,vec__36397,seq__36398,first__36399,seq__36398__$1,pivot,tail){
return (function (){
var G__36404 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred_QMARK_,tail);
var G__36405 = pred;
return (dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux.cljs$core$IFn$_invoke$arity$2 ? dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux.cljs$core$IFn$_invoke$arity$2(G__36404,G__36405) : dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux(G__36404,G__36405));
});})(pred_QMARK_,vec__36397,seq__36398,first__36399,seq__36398__$1,pivot,tail))
,null,null)),(new cljs.core.LazySeq(null,((function (pred_QMARK_,vec__36397,seq__36398,first__36399,seq__36398__$1,pivot,tail){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pivot], null);
});})(pred_QMARK_,vec__36397,seq__36398,first__36399,seq__36398__$1,pivot,tail))
,null,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.LazySeq(null,((function (pred_QMARK_,vec__36397,seq__36398,first__36399,seq__36398__$1,pivot,tail){
return (function (){
var G__36406 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred_QMARK_,tail);
var G__36407 = pred;
return (dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux.cljs$core$IFn$_invoke$arity$2 ? dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux.cljs$core$IFn$_invoke$arity$2(G__36406,G__36407) : dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux(G__36406,G__36407));
});})(pred_QMARK_,vec__36397,seq__36398,first__36399,seq__36398__$1,pivot,tail))
,null,null))], 0));
} else {
return null;
}
});
dan_shiffman_coding_challenges.snake.cheaplist.qsort = (function dan_shiffman_coding_challenges$snake$cheaplist$qsort(xs,f){
return dan_shiffman_coding_challenges.snake.cheaplist.qsort_aux(cljs.core.seq(xs),f);
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {dan_shiffman_coding_challenges.snake.cheaplist.Object}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.ILookup}
*/
dan_shiffman_coding_challenges.snake.cheaplist.CheapList = (function (pred,cheap,bulk){
this.pred = pred;
this.cheap = cheap;
this.bulk = bulk;
this.cljs$lang$protocol_mask$partition0$ = 10486095;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(this$))].join('');
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,curr){
var self__ = this;
var this$__$1 = this;
var vec__36415 = curr;
var item_curr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(0),null);
var pri_curr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36415,(1),null);
var eol = cljs.core.last(self__.cheap);
var vec__36418 = eol;
var item_eol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36418,(0),null);
var pri_eol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36418,(1),null);
if((eol == null)){
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.cheap,curr),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.bulk,item_curr,pri_curr)));
} else {
if(cljs.core.truth_((self__.bulk.cljs$core$IFn$_invoke$arity$1 ? self__.bulk.cljs$core$IFn$_invoke$arity$1(item_curr) : self__.bulk(item_curr)))){
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36415,item_curr,pri_curr,eol,vec__36418,item_eol,pri_eol,this$__$1){
return (function (p__36423){
var vec__36424 = p__36423;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,item_curr);
});})(vec__36415,item_curr,pri_curr,eol,vec__36418,item_eol,pri_eol,this$__$1))
,self__.cheap),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.bulk,item_curr))).cljs$core$ICollection$_conj$arity$2(null,curr);
} else {
if(cljs.core.truth_((self__.pred.cljs$core$IFn$_invoke$arity$2 ? self__.pred.cljs$core$IFn$_invoke$arity$2(eol,curr) : self__.pred(eol,curr)))){
if((cljs.core.count(self__.cheap) >= dan_shiffman_coding_challenges.snake.cheaplist.que_size)){
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,dan_shiffman_coding_challenges.snake.cheaplist.qsort(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(self__.cheap),curr),self__.pred),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.bulk,item_eol,pri_eol)));
} else {
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,dan_shiffman_coding_challenges.snake.cheaplist.qsort(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.cheap,curr),self__.pred),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.bulk,item_curr,pri_curr)));
}
} else {
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,self__.cheap,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.bulk,item_curr,pri_curr)));

}
}
}
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.first(self__.cheap);
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(self__.cheap),(1))){
var bulk__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.bulk,cljs.core.first(cljs.core.first(self__.cheap)));
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,cljs.core.take.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.cheaplist.que_size,dan_shiffman_coding_challenges.snake.cheaplist.qsort(bulk__$1,self__.pred)),bulk__$1));
} else {
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,cljs.core.rest(self__.cheap),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.bulk,cljs.core.first(cljs.core.first(self__.cheap)))));
}
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.empty_QMARK_(self__.bulk))){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
return cljs.core.cons(cljs.core.first(this$__$1),cljs.core.rest(this$__$1));
});})(this$__$1))
,null,null));
} else {
return null;
}
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.cheaplist.CheapList,cljs.core.type(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(this$__$1),cljs.core.seq(o)));
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.bulk);
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(self__.pred,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.bulk.cljs$core$IFn$_invoke$arity$1 ? self__.bulk.cljs$core$IFn$_invoke$arity$1(key) : self__.bulk(key));
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key,not_found){
var self__ = this;
var this$__$1 = this;
var or__30789__auto__ = this$__$1.cljs$core$ILookup$_lookup$arity$2(null,key);
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return not_found;
}
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.call = (function() {
var G__36445 = null;
var G__36445__2 = (function (self__,key){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,key);
});
var G__36445__3 = (function (self__,key,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,key,not_found);
});
G__36445 = function(self__,key,not_found){
switch(arguments.length){
case 2:
return G__36445__2.call(this,self__,key);
case 3:
return G__36445__3.call(this,self__,key,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__36445.cljs$core$IFn$_invoke$arity$2 = G__36445__2;
G__36445.cljs$core$IFn$_invoke$arity$3 = G__36445__3;
return G__36445;
})()
;

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.apply = (function (self__,args36414){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args36414)));
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$IFn$_invoke$arity$1 = (function (key){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,key);
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.prototype.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,key,not_found);
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pred,cljs.core.cst$sym$cheap,cljs.core.cst$sym$bulk], null);
});

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.cljs$lang$type = true;

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.cljs$lang$ctorStr = "dan-shiffman-coding-challenges.snake.cheaplist/CheapList";

dan_shiffman_coding_challenges.snake.cheaplist.CheapList.cljs$lang$ctorPrWriter = (function (this__31460__auto__,writer__31461__auto__,opt__31462__auto__){
return cljs.core._write(writer__31461__auto__,"dan-shiffman-coding-challenges.snake.cheaplist/CheapList");
});

dan_shiffman_coding_challenges.snake.cheaplist.__GT_CheapList = (function dan_shiffman_coding_challenges$snake$cheaplist$__GT_CheapList(pred,cheap,bulk){
return (new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(pred,cheap,bulk));
});

dan_shiffman_coding_challenges.snake.cheaplist.cheap_list = (function dan_shiffman_coding_challenges$snake$cheaplist$cheap_list(var_args){
var args__32075__auto__ = [];
var len__32068__auto___36450 = arguments.length;
var i__32069__auto___36452 = (0);
while(true){
if((i__32069__auto___36452 < len__32068__auto___36450)){
args__32075__auto__.push((arguments[i__32069__auto___36452]));

var G__36454 = (i__32069__auto___36452 + (1));
i__32069__auto___36452 = G__36454;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return dan_shiffman_coding_challenges.snake.cheaplist.cheap_list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

dan_shiffman_coding_challenges.snake.cheaplist.cheap_list.cljs$core$IFn$_invoke$arity$variadic = (function (pred,keyvals){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,(new dan_shiffman_coding_challenges.snake.cheaplist.CheapList(pred,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),keyvals);
});

dan_shiffman_coding_challenges.snake.cheaplist.cheap_list.cljs$lang$maxFixedArity = (1);

dan_shiffman_coding_challenges.snake.cheaplist.cheap_list.cljs$lang$applyTo = (function (seq36447){
var G__36448 = cljs.core.first(seq36447);
var seq36447__$1 = cljs.core.next(seq36447);
return dan_shiffman_coding_challenges.snake.cheaplist.cheap_list.cljs$core$IFn$_invoke$arity$variadic(G__36448,seq36447__$1);
});

