// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_(sel)){
var temp__5455__auto__ = jayq.core.crate_meta(sel);
if(cljs.core.truth_(temp__5455__auto__)){
var cm = temp__5455__auto__;
return ["[crateGroup=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm),"]"].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name(sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var G__37495 = arguments.length;
switch (G__37495) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
var G__37500 = jayq.core.__GT_selector(sel);
return jQuery(G__37500);
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
var G__37501 = jayq.core.__GT_selector(sel);
var G__37502 = context;
return jQuery(G__37501,G__37502);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;

jayq.core.jquery_QMARK_ = (function jayq$core$jquery_QMARK_(v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),jQuery);
});
jQuery.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count(this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count(this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count(this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__30789__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$2(this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.cljs$core$IFn$_invoke$arity$3(this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.call = (function() {
var G__37510 = null;
var G__37510__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$,k);
});
var G__37510__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$,k,not_found);
});
G__37510 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__37510__2.call(this,self__,k);
case 3:
return G__37510__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37510.cljs$core$IFn$_invoke$arity$2 = G__37510__2;
G__37510.cljs$core$IFn$_invoke$arity$3 = G__37510__3;
return G__37510;
})()
;

jQuery.prototype.apply = (function (self__,args37505){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37505)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37518 = arguments.length;
var i__32069__auto___37519 = (0);
while(true){
if((i__32069__auto___37519 < len__32068__auto___37518)){
args__32075__auto__.push((arguments[i__32069__auto___37519]));

var G__37520 = (i__32069__auto___37519 + (1));
i__32069__auto___37519 = G__37520;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((2) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__37514){
var vec__37515 = p__37514;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37515,(1),null);
return $elem.animate(cljs.core.clj__GT_js(props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq37511){
var G__37512 = cljs.core.first(seq37511);
var seq37511__$1 = cljs.core.next(seq37511);
var G__37513 = cljs.core.first(seq37511__$1);
var seq37511__$2 = cljs.core.next(seq37511__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__37512,G__37513,seq37511__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var G__37522 = arguments.length;
switch (G__37522) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;

jayq.core.css = (function jayq$core$css(var_args){
var G__37532 = arguments.length;
switch (G__37532) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js(opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name(p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;

jayq.core.attr = (function jayq$core$attr(var_args){
var G__37540 = arguments.length;
switch (G__37540) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name(n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js(x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;

jayq.core.prop = (function jayq$core$prop(var_args){
var G__37550 = arguments.length;
switch (G__37550) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name(n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js(x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name(a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name(a));
});
jayq.core.data = (function jayq$core$data(var_args){
var G__37555 = arguments.length;
switch (G__37555) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js(k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name(k),cljs.core.clj__GT_js(v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name(cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var G__37574 = arguments.length;
switch (G__37574) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name(cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var G__37589 = arguments.length;
switch (G__37589) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name(cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name(cl),cljs.core.boolean$(switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name(cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector(selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector(target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector(target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector(target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector(target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37653 = arguments.length;
var i__32069__auto___37654 = (0);
while(true){
if((i__32069__auto___37654 < len__32068__auto___37653)){
args__32075__auto__.push((arguments[i__32069__auto___37654]));

var G__37656 = (i__32069__auto___37654 + (1));
i__32069__auto___37654 = G__37656;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__37645){
var vec__37646 = p__37645;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37646,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37646,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq37634){
var G__37635 = cljs.core.first(seq37634);
var seq37634__$1 = cljs.core.next(seq37634);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__37635,seq37634__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37691 = arguments.length;
var i__32069__auto___37700 = (0);
while(true){
if((i__32069__auto___37700 < len__32068__auto___37691)){
args__32075__auto__.push((arguments[i__32069__auto___37700]));

var G__37702 = (i__32069__auto___37700 + (1));
i__32069__auto___37700 = G__37702;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__37685){
var vec__37686 = p__37685;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq37669){
var G__37670 = cljs.core.first(seq37669);
var seq37669__$1 = cljs.core.next(seq37669);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__37670,seq37669__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37741 = arguments.length;
var i__32069__auto___37742 = (0);
while(true){
if((i__32069__auto___37742 < len__32068__auto___37741)){
args__32075__auto__.push((arguments[i__32069__auto___37742]));

var G__37743 = (i__32069__auto___37742 + (1));
i__32069__auto___37742 = G__37743;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__37720){
var vec__37730 = p__37720;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37730,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37730,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq37711){
var G__37712 = cljs.core.first(seq37711);
var seq37711__$1 = cljs.core.next(seq37711);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__37712,seq37711__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37750 = arguments.length;
var i__32069__auto___37751 = (0);
while(true){
if((i__32069__auto___37751 < len__32068__auto___37750)){
args__32075__auto__.push((arguments[i__32069__auto___37751]));

var G__37752 = (i__32069__auto___37751 + (1));
i__32069__auto___37751 = G__37752;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__37746){
var vec__37747 = p__37746;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37747,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37747,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq37744){
var G__37745 = cljs.core.first(seq37744);
var seq37744__$1 = cljs.core.next(seq37744);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__37745,seq37744__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37759 = arguments.length;
var i__32069__auto___37760 = (0);
while(true){
if((i__32069__auto___37760 < len__32068__auto___37759)){
args__32075__auto__.push((arguments[i__32069__auto___37760]));

var G__37761 = (i__32069__auto___37760 + (1));
i__32069__auto___37760 = G__37761;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__37755){
var vec__37756 = p__37755;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq37753){
var G__37754 = cljs.core.first(seq37753);
var seq37753__$1 = cljs.core.next(seq37753);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__37754,seq37753__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37768 = arguments.length;
var i__32069__auto___37769 = (0);
while(true){
if((i__32069__auto___37769 < len__32068__auto___37768)){
args__32075__auto__.push((arguments[i__32069__auto___37769]));

var G__37770 = (i__32069__auto___37769 + (1));
i__32069__auto___37769 = G__37770;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__37764){
var vec__37765 = p__37764;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq37762){
var G__37763 = cljs.core.first(seq37762);
var seq37762__$1 = cljs.core.next(seq37762);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__37763,seq37762__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37777 = arguments.length;
var i__32069__auto___37778 = (0);
while(true){
if((i__32069__auto___37778 < len__32068__auto___37777)){
args__32075__auto__.push((arguments[i__32069__auto___37778]));

var G__37779 = (i__32069__auto___37778 + (1));
i__32069__auto___37778 = G__37779;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__37773){
var vec__37774 = p__37773;
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(0),null);
var on_finish = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq37771){
var G__37772 = cljs.core.first(seq37771);
var seq37771__$1 = cljs.core.next(seq37771);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__37772,seq37771__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var G__37781 = arguments.length;
switch (G__37781) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name(selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var G__37784 = arguments.length;
switch (G__37784) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name(selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var G__37787 = arguments.length;
switch (G__37787) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector(selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;

jayq.core.children = (function jayq$core$children(var_args){
var G__37790 = arguments.length;
switch (G__37790) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name(selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;

jayq.core.next = (function jayq$core$next(var_args){
var G__37793 = arguments.length;
switch (G__37793) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name(selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;

jayq.core.prev = (function jayq$core$prev(var_args){
var G__37796 = arguments.length;
switch (G__37796) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name(selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;

jayq.core.next_all = (function jayq$core$next_all(var_args){
var G__37799 = arguments.length;
switch (G__37799) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name(selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var G__37802 = arguments.length;
switch (G__37802) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name(selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;

jayq.core.next_until = (function jayq$core$next_until(var_args){
var G__37805 = arguments.length;
switch (G__37805) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector(selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var G__37808 = arguments.length;
switch (G__37808) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector(selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector(selector),cljs.core.name(filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name(selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37817 = arguments.length;
var i__32069__auto___37818 = (0);
while(true){
if((i__32069__auto___37818 < len__32068__auto___37817)){
args__32075__auto__.push((arguments[i__32069__auto___37818]));

var G__37819 = (i__32069__auto___37818 + (1));
i__32069__auto___37818 = G__37819;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((2) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__37813){
var vec__37814 = p__37813;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37814,(0),null);
return $elem.closest(jayq.core.__GT_selector(selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq37810){
var G__37811 = cljs.core.first(seq37810);
var seq37810__$1 = cljs.core.next(seq37810);
var G__37812 = cljs.core.first(seq37810__$1);
var seq37810__$2 = cljs.core.next(seq37810__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__37811,G__37812,seq37810__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var G__37821 = arguments.length;
switch (G__37821) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var G__37824 = arguments.length;
switch (G__37824) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var G__37827 = arguments.length;
switch (G__37827) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var G__37830 = arguments.length;
switch (G__37830) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$accepts,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$edn,"application/edn, text/edn",cljs.core.cst$kw$clojure,"application/clojure, text/clojure"], null),cljs.core.cst$kw$contents,new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),cljs.core.cst$kw$converters,new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find(/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__37834){
var map__37835 = p__37834;
var map__37835__$1 = ((((!((map__37835 == null)))?((((map__37835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37835):map__37835);
var request = map__37835__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,cljs.core.cst$kw$data);
var contentType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,cljs.core.cst$kw$contentType);
var ct = jayq.core.__GT_content_type(contentType);
var G__37838 = (function (){var fexpr__37839 = ((function (ct,map__37835,map__37835__$1,request,data,contentType){
return (function (p1__37832_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37832_SHARP_,cljs.core.cst$kw$contentType,ct);
} else {
return p1__37832_SHARP_;
}
});})(ct,map__37835,map__37835__$1,request,data,contentType))
;
return fexpr__37839(request);
})();
var fexpr__37837 = ((function (G__37838,ct,map__37835,map__37835__$1,request,data,contentType){
return (function (p1__37833_SHARP_){
if(cljs.core.truth_((function (){var and__30777__auto__ = ct;
if(cljs.core.truth_(and__30777__auto__)){
return jayq.core.clj_content_type_QMARK_(ct);
} else {
return and__30777__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37833_SHARP_,cljs.core.cst$kw$data,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
} else {
return p1__37833_SHARP_;
}
});})(G__37838,ct,map__37835,map__37835__$1,request,data,contentType))
;
return fexpr__37837(G__37838);
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js(jayq.core.preprocess_request(request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var G__37841 = arguments.length;
switch (G__37841) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings(settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings(settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__37843,content,callback){
var vec__37844 = p__37843;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37844,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37844,(1),null);
var params = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,clojure.string.upper_case(cljs.core.name(method)),cljs.core.cst$kw$data,cljs.core.clj__GT_js(content),cljs.core.cst$kw$success,callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(jayq.core.html.cljs$core$IFn$_invoke$arity$1($elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name(ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37854 = arguments.length;
var i__32069__auto___37855 = (0);
while(true){
if((i__32069__auto___37855 < len__32068__auto___37854)){
args__32075__auto__.push((arguments[i__32069__auto___37855]));

var G__37856 = (i__32069__auto___37855 + (1));
i__32069__auto___37855 = G__37856;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((2) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__37850){
var vec__37851 = p__37850;
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37851,(0),null);
return $elem.unbind(cljs.core.name(ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq37847){
var G__37848 = cljs.core.first(seq37847);
var seq37847__$1 = cljs.core.next(seq37847);
var G__37849 = cljs.core.first(seq37847__$1);
var seq37847__$2 = cljs.core.next(seq37847__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__37848,G__37849,seq37847__$2);
});

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name(ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector(sel),cljs.core.name(ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_(e)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,e));
} else {
return cljs.core.clj__GT_js(e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37864 = arguments.length;
var i__32069__auto___37865 = (0);
while(true){
if((i__32069__auto___37865 < len__32068__auto___37864)){
args__32075__auto__.push((arguments[i__32069__auto___37865]));

var G__37866 = (i__32069__auto___37865 + (1));
i__32069__auto___37865 = G__37866;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((2) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__37860){
var vec__37861 = p__37860;
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(2),null);
return $elem.on(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq37857){
var G__37858 = cljs.core.first(seq37857);
var seq37857__$1 = cljs.core.next(seq37857);
var G__37859 = cljs.core.first(seq37857__$1);
var seq37857__$2 = cljs.core.next(seq37857__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__37858,G__37859,seq37857__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37877 = arguments.length;
var i__32069__auto___37879 = (0);
while(true){
if((i__32069__auto___37879 < len__32068__auto___37877)){
args__32075__auto__.push((arguments[i__32069__auto___37879]));

var G__37880 = (i__32069__auto___37879 + (1));
i__32069__auto___37879 = G__37880;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((2) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__37870){
var vec__37871 = p__37870;
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(1),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37871,(2),null);
return $elem.one(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq37867){
var G__37868 = cljs.core.first(seq37867);
var seq37867__$1 = cljs.core.next(seq37867);
var G__37869 = cljs.core.first(seq37867__$1);
var seq37867__$2 = cljs.core.next(seq37867__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__37868,G__37869,seq37867__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37890 = arguments.length;
var i__32069__auto___37891 = (0);
while(true){
if((i__32069__auto___37891 < len__32068__auto___37890)){
args__32075__auto__.push((arguments[i__32069__auto___37891]));

var G__37892 = (i__32069__auto___37891 + (1));
i__32069__auto___37891 = G__37892;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((2) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__32076__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__37886){
var vec__37887 = p__37886;
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37887,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37887,(1),null);
return $elem.off(jayq.core.__GT_event(events),jayq.core.__GT_selector(sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq37883){
var G__37884 = cljs.core.first(seq37883);
var seq37883__$1 = cljs.core.next(seq37883);
var G__37885 = cljs.core.first(seq37883__$1);
var seq37883__$2 = cljs.core.next(seq37883__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__37884,G__37885,seq37883__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var G__37895 = arguments.length;
switch (G__37895) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;

jayq.core.width = (function jayq$core$width(var_args){
var G__37903 = arguments.length;
switch (G__37903) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var G__37908 = arguments.length;
switch (G__37908) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js(coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic($elem.offset(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic($elem.position(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var G__37911 = arguments.length;
switch (G__37911) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var G__37918 = arguments.length;
switch (G__37918) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var G__37921 = arguments.length;
switch (G__37921) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js(done_fn),cljs.core.clj__GT_js(fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js(done_fn),cljs.core.clj__GT_js(fail_fn),cljs.core.clj__GT_js(progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;

jayq.core.done = (function jayq$core$done(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37929 = arguments.length;
var i__32069__auto___37930 = (0);
while(true){
if((i__32069__auto___37930 < len__32068__auto___37929)){
args__32075__auto__.push((arguments[i__32069__auto___37930]));

var G__37931 = (i__32069__auto___37930 + (1));
i__32069__auto___37930 = G__37931;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js(fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq37925){
var G__37926 = cljs.core.first(seq37925);
var seq37925__$1 = cljs.core.next(seq37925);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__37926,seq37925__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37935 = arguments.length;
var i__32069__auto___37936 = (0);
while(true){
if((i__32069__auto___37936 < len__32068__auto___37935)){
args__32075__auto__.push((arguments[i__32069__auto___37936]));

var G__37938 = (i__32069__auto___37936 + (1));
i__32069__auto___37936 = G__37938;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js(fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq37933){
var G__37934 = cljs.core.first(seq37933);
var seq37933__$1 = cljs.core.next(seq37933);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__37934,seq37933__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js(fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var G__37942 = arguments.length;
switch (G__37942) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;

jayq.core.always = (function jayq$core$always(var_args){
var args__32075__auto__ = [];
var len__32068__auto___37950 = arguments.length;
var i__32069__auto___37951 = (0);
while(true){
if((i__32069__auto___37951 < len__32068__auto___37950)){
args__32075__auto__.push((arguments[i__32069__auto___37951]));

var G__37952 = (i__32069__auto___37951 + (1));
i__32069__auto___37951 = G__37952;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((1) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32076__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js(fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq37947){
var G__37948 = cljs.core.first(seq37947);
var seq37947__$1 = cljs.core.next(seq37947);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__37948,seq37947__$1);
});

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var G__37960 = arguments.length;
switch (G__37960) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$return,jayq.core.$when,cljs.core.cst$kw$bind,(function (x,f){
var dfd = (jayq.core.$deferred.cljs$core$IFn$_invoke$arity$0 ? jayq.core.$deferred.cljs$core$IFn$_invoke$arity$0() : jayq.core.$deferred());
jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (dfd){
return (function (v){
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f(v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jayq.core.resolve,dfd)], 0));
});})(dfd))
], 0));

return jayq.core.promise.cljs$core$IFn$_invoke$arity$1(dfd);
}),cljs.core.cst$kw$zero,cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$return,cljs.core.identity,cljs.core.cst$kw$bind,(function (x,f){
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(jayq.core.ajax.cljs$core$IFn$_invoke$arity$1(x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));
}),cljs.core.cst$kw$zero,cljs.core.identity], null);
