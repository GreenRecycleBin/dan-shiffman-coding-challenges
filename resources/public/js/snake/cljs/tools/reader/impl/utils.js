// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
});

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31477__auto__,k__31478__auto__){
var self__ = this;
var this__31477__auto____$1 = this;
return this__31477__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31478__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31479__auto__,k36496,else__31480__auto__){
var self__ = this;
var this__31479__auto____$1 = this;
var G__36511 = k36496;
var G__36511__$1 = (((G__36511 instanceof cljs.core.Keyword))?G__36511.fqn:null);
switch (G__36511__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36496,else__31480__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31491__auto__,writer__31492__auto__,opts__31493__auto__){
var self__ = this;
var this__31491__auto____$1 = this;
var pr_pair__31494__auto__ = ((function (this__31491__auto____$1){
return (function (keyval__31495__auto__){
return cljs.core.pr_sequential_writer(writer__31492__auto__,cljs.core.pr_writer,""," ","",opts__31493__auto__,keyval__31495__auto__);
});})(this__31491__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__31492__auto__,pr_pair__31494__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__31493__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36495){
var self__ = this;
var G__36495__$1 = this;
return (new cljs.core.RecordIter((0),G__36495__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$splicing_QMARK_,cljs.core.cst$kw$form], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31475__auto__){
var self__ = this;
var this__31475__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31472__auto__){
var self__ = this;
var this__31472__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31481__auto__){
var self__ = this;
var this__31481__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31473__auto__){
var self__ = this;
var this__31473__auto____$1 = this;
var h__31245__auto__ = self__.__hash;
if(!((h__31245__auto__ == null))){
return h__31245__auto__;
} else {
var h__31245__auto____$1 = (function (){var fexpr__36522 = ((function (h__31245__auto__,this__31473__auto____$1){
return (function (coll__31474__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll(coll__31474__auto__));
});})(h__31245__auto__,this__31473__auto____$1))
;
return fexpr__36522(this__31473__auto____$1);
})();
self__.__hash = h__31245__auto____$1;

return h__31245__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36498,other36499){
var self__ = this;
var this36498__$1 = this;
return (!((other36499 == null))) && ((this36498__$1.constructor === other36499.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36498__$1.splicing_QMARK_,other36499.splicing_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36498__$1.form,other36499.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36498__$1.__extmap,other36499.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31486__auto__,k__31487__auto__){
var self__ = this;
var this__31486__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$splicing_QMARK_,null,cljs.core.cst$kw$form,null], null), null),k__31487__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__31486__auto____$1),self__.__meta),k__31487__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__31487__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31484__auto__,k__31485__auto__,G__36495){
var self__ = this;
var this__31484__auto____$1 = this;
var pred__36538 = cljs.core.keyword_identical_QMARK_;
var expr__36539 = k__31485__auto__;
if(cljs.core.truth_((function (){var G__36541 = cljs.core.cst$kw$splicing_QMARK_;
var G__36542 = expr__36539;
return (pred__36538.cljs$core$IFn$_invoke$arity$2 ? pred__36538.cljs$core$IFn$_invoke$arity$2(G__36541,G__36542) : pred__36538(G__36541,G__36542));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__36495,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36543 = cljs.core.cst$kw$form;
var G__36544 = expr__36539;
return (pred__36538.cljs$core$IFn$_invoke$arity$2 ? pred__36538.cljs$core$IFn$_invoke$arity$2(G__36543,G__36544) : pred__36538(G__36543,G__36544));
})())){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__36495,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__31485__auto__,G__36495),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31489__auto__){
var self__ = this;
var this__31489__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$splicing_QMARK_,self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31476__auto__,G__36495){
var self__ = this;
var this__31476__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__36495,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31482__auto__,entry__31483__auto__){
var self__ = this;
var this__31482__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__31483__auto__)){
return this__31482__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31483__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__31483__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__31482__auto____$1,entry__31483__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$splicing_QMARK_,cljs.core.cst$sym$form], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__31515__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__31515__auto__,writer__31516__auto__){
return cljs.core._write(writer__31516__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__36503){
return (new cljs.tools.reader.impl.utils.ReaderConditional(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(G__36503),cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(G__36503),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36503,cljs.core.cst$kw$splicing_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form], 0))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$splicing_QMARK_.cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__31671__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__36559(s__36560){
return (new cljs.core.LazySeq(null,(function (){
var s__36560__$1 = s__36560;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__36560__$1);
if(temp__5457__auto__){
var s__36560__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36560__$2)){
var c__31669__auto__ = cljs.core.chunk_first(s__36560__$2);
var size__31670__auto__ = cljs.core.count(c__31669__auto__);
var b__36562 = cljs.core.chunk_buffer(size__31670__auto__);
if((function (){var i__36561 = (0);
while(true){
if((i__36561 < size__31670__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__31669__auto__,i__36561);
cljs.core.chunk_append(b__36562,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__36563 = (function (){var fexpr__36566 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__36566.cljs$core$IFn$_invoke$arity$1 ? fexpr__36566.cljs$core$IFn$_invoke$arity$1(key) : fexpr__36566(key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36563,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36563,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key(ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key(key_name));
} else {
return key;

}
}
})():key));

var G__36578 = (i__36561 + (1));
i__36561 = G__36578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36562),cljs$tools$reader$impl$utils$namespace_keys_$_iter__36559(cljs.core.chunk_rest(s__36560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36562),null);
}
} else {
var key = cljs.core.first(s__36560__$2);
return cljs.core.cons(((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__36567 = (function (){var fexpr__36570 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name);
return (fexpr__36570.cljs$core$IFn$_invoke$arity$1 ? fexpr__36570.cljs$core$IFn$_invoke$arity$1(key) : fexpr__36570(key));
})();
var key_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(0),null);
var key_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return (__GT_key.cljs$core$IFn$_invoke$arity$2 ? __GT_key.cljs$core$IFn$_invoke$arity$2(ns,key_name) : __GT_key(ns,key_name));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",key_ns)){
return (__GT_key.cljs$core$IFn$_invoke$arity$1 ? __GT_key.cljs$core$IFn$_invoke$arity$1(key_name) : __GT_key(key_name));
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__36559(cljs.core.rest(s__36560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31671__auto__(keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__36585){
var vec__36586 = p__36585;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36586,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36586,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});
