// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__36624 = arguments.length;
switch (G__36624) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__36626 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__36627 = null;
var count__36628 = (0);
var i__36629 = (0);
while(true){
if((i__36629 < count__36628)){
var vec__36630 = chunk__36627.cljs$core$IIndexed$_nth$arity$2(null,i__36629);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36630,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36630,(1),null);
var temp__5457__auto___36638 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts(quil_name));
if(cljs.core.truth_(temp__5457__auto___36638)){
var handler_36639 = temp__5457__auto___36638;
(prc[cljs.core.name(processing_name)] = ((function (seq__36626,chunk__36627,count__36628,i__36629,handler_36639,temp__5457__auto___36638,vec__36630,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_36633 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_36639.cljs$core$IFn$_invoke$arity$0 ? handler_36639.cljs$core$IFn$_invoke$arity$0() : handler_36639());
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_36633;
}});})(seq__36626,chunk__36627,count__36628,i__36629,handler_36639,temp__5457__auto___36638,vec__36630,processing_name,quil_name))
);
} else {
}

var G__36640 = seq__36626;
var G__36641 = chunk__36627;
var G__36642 = count__36628;
var G__36643 = (i__36629 + (1));
seq__36626 = G__36640;
chunk__36627 = G__36641;
count__36628 = G__36642;
i__36629 = G__36643;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36626);
if(temp__5457__auto__){
var seq__36626__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36626__$1)){
var c__31720__auto__ = cljs.core.chunk_first(seq__36626__$1);
var G__36644 = cljs.core.chunk_rest(seq__36626__$1);
var G__36645 = c__31720__auto__;
var G__36646 = cljs.core.count(c__31720__auto__);
var G__36647 = (0);
seq__36626 = G__36644;
chunk__36627 = G__36645;
count__36628 = G__36646;
i__36629 = G__36647;
continue;
} else {
var vec__36634 = cljs.core.first(seq__36626__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36634,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36634,(1),null);
var temp__5457__auto___36648__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts(quil_name));
if(cljs.core.truth_(temp__5457__auto___36648__$1)){
var handler_36649 = temp__5457__auto___36648__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__36626,chunk__36627,count__36628,i__36629,handler_36649,temp__5457__auto___36648__$1,vec__36634,processing_name,quil_name,seq__36626__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_36637 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_36649.cljs$core$IFn$_invoke$arity$0 ? handler_36649.cljs$core$IFn$_invoke$arity$0() : handler_36649());
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_36637;
}});})(seq__36626,chunk__36627,count__36628,i__36629,handler_36649,temp__5457__auto___36648__$1,vec__36634,processing_name,quil_name,seq__36626__$1,temp__5457__auto__))
);
} else {
}

var G__36650 = cljs.core.next(seq__36626__$1);
var G__36651 = null;
var G__36652 = (0);
var G__36653 = (0);
seq__36626 = G__36650;
chunk__36627 = G__36651;
count__36628 = G__36652;
i__36629 = G__36653;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__36656 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__36655 = ((function (G__36656){
return (function (p1__36654_SHARP_){
return (p1__36654_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36654_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__36654_SHARP_(options));
});})(G__36656))
;
return fexpr__36655(G__36656);
})()], 0));
var sketch_size = (function (){var or__30789__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__36657_36661 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__36657_36661.cljs$core$IFn$_invoke$arity$0 ? fexpr__36657_36661.cljs$core$IFn$_invoke$arity$0() : fexpr__36657_36661());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__36658 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__36658.cljs$core$IFn$_invoke$arity$0 ? fexpr__36658.cljs$core$IFn$_invoke$arity$0() : fexpr__36658());
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__36660 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__36659 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__36659.cljs$core$IFn$_invoke$arity$1 ? fexpr__36659.cljs$core$IFn$_invoke$arity$1(G__36660) : fexpr__36659(G__36660));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.target_frame_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__32075__auto__ = [];
var len__32068__auto___36664 = arguments.length;
var i__32069__auto___36665 = (0);
while(true){
if((i__32069__auto___36665 < len__32068__auto___36664)){
args__32075__auto__.push((arguments[i__32069__auto___36665]));

var G__36666 = (i__32069__auto___36665 + (1));
i__32069__auto___36665 = G__36666;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__36663 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__36663);
})();
var renderer = (function (){var or__30789__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__30789__auto__)){
return or__30789__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
host_elem.processing_obj = proc_obj;

return proc_obj.quil_canvas = host_elem;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq36662){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36662));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__36673 = quil.sketch.empty_body_QMARK_();
var seq__36667_36674 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__36668_36675 = null;
var count__36669_36676 = (0);
var i__36670_36677 = (0);
while(true){
if((i__36670_36677 < count__36669_36676)){
var sk_36678 = chunk__36668_36675.cljs$core$IIndexed$_nth$arity$2(null,i__36670_36677);
if(cljs.core.truth_(add_elem_QMARK__36673)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_36678));
} else {
}

var fexpr__36671_36679 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_36678);
(fexpr__36671_36679.cljs$core$IFn$_invoke$arity$0 ? fexpr__36671_36679.cljs$core$IFn$_invoke$arity$0() : fexpr__36671_36679());

var G__36680 = seq__36667_36674;
var G__36681 = chunk__36668_36675;
var G__36682 = count__36669_36676;
var G__36683 = (i__36670_36677 + (1));
seq__36667_36674 = G__36680;
chunk__36668_36675 = G__36681;
count__36669_36676 = G__36682;
i__36670_36677 = G__36683;
continue;
} else {
var temp__5457__auto___36684 = cljs.core.seq(seq__36667_36674);
if(temp__5457__auto___36684){
var seq__36667_36685__$1 = temp__5457__auto___36684;
if(cljs.core.chunked_seq_QMARK_(seq__36667_36685__$1)){
var c__31720__auto___36686 = cljs.core.chunk_first(seq__36667_36685__$1);
var G__36687 = cljs.core.chunk_rest(seq__36667_36685__$1);
var G__36688 = c__31720__auto___36686;
var G__36689 = cljs.core.count(c__31720__auto___36686);
var G__36690 = (0);
seq__36667_36674 = G__36687;
chunk__36668_36675 = G__36688;
count__36669_36676 = G__36689;
i__36670_36677 = G__36690;
continue;
} else {
var sk_36691 = cljs.core.first(seq__36667_36685__$1);
if(cljs.core.truth_(add_elem_QMARK__36673)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_36691));
} else {
}

var fexpr__36672_36692 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_36691);
(fexpr__36672_36692.cljs$core$IFn$_invoke$arity$0 ? fexpr__36672_36692.cljs$core$IFn$_invoke$arity$0() : fexpr__36672_36692());

var G__36693 = cljs.core.next(seq__36667_36685__$1);
var G__36694 = null;
var G__36695 = (0);
var G__36696 = (0);
seq__36667_36674 = G__36693;
chunk__36668_36675 = G__36694;
count__36669_36676 = G__36695;
i__36670_36677 = G__36696;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
