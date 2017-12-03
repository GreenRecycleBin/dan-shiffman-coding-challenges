// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
dan_shiffman_coding_challenges.snake.protocols.Renderable = function(){};

dan_shiffman_coding_challenges.snake.protocols.render = (function dan_shiffman_coding_challenges$snake$protocols$render(this$){
if((!((this$ == null))) && (!((this$.dan_shiffman_coding_challenges$snake$protocols$Renderable$render$arity$1 == null)))){
return this$.dan_shiffman_coding_challenges$snake$protocols$Renderable$render$arity$1(this$);
} else {
var x__31522__auto__ = (((this$ == null))?null:this$);
var m__31523__auto__ = (dan_shiffman_coding_challenges.snake.protocols.render[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return (m__31523__auto__.cljs$core$IFn$_invoke$arity$1 ? m__31523__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__31523__auto__(this$));
} else {
var m__31523__auto____$1 = (dan_shiffman_coding_challenges.snake.protocols.render["_"]);
if(!((m__31523__auto____$1 == null))){
return (m__31523__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__31523__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__31523__auto____$1(this$));
} else {
throw cljs.core.missing_protocol("Renderable.render",this$);
}
}
}
});


/**
 * @interface
 */
dan_shiffman_coding_challenges.snake.protocols.Moveable = function(){};

dan_shiffman_coding_challenges.snake.protocols.move = (function dan_shiffman_coding_challenges$snake$protocols$move(this$){
if((!((this$ == null))) && (!((this$.dan_shiffman_coding_challenges$snake$protocols$Moveable$move$arity$1 == null)))){
return this$.dan_shiffman_coding_challenges$snake$protocols$Moveable$move$arity$1(this$);
} else {
var x__31522__auto__ = (((this$ == null))?null:this$);
var m__31523__auto__ = (dan_shiffman_coding_challenges.snake.protocols.move[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return (m__31523__auto__.cljs$core$IFn$_invoke$arity$1 ? m__31523__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__31523__auto__(this$));
} else {
var m__31523__auto____$1 = (dan_shiffman_coding_challenges.snake.protocols.move["_"]);
if(!((m__31523__auto____$1 == null))){
return (m__31523__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__31523__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__31523__auto____$1(this$));
} else {
throw cljs.core.missing_protocol("Moveable.move",this$);
}
}
}
});

dan_shiffman_coding_challenges.snake.protocols.change_direction = (function dan_shiffman_coding_challenges$snake$protocols$change_direction(this$,dir){
if((!((this$ == null))) && (!((this$.dan_shiffman_coding_challenges$snake$protocols$Moveable$change_direction$arity$2 == null)))){
return this$.dan_shiffman_coding_challenges$snake$protocols$Moveable$change_direction$arity$2(this$,dir);
} else {
var x__31522__auto__ = (((this$ == null))?null:this$);
var m__31523__auto__ = (dan_shiffman_coding_challenges.snake.protocols.change_direction[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return (m__31523__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31523__auto__.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__31523__auto__(this$,dir));
} else {
var m__31523__auto____$1 = (dan_shiffman_coding_challenges.snake.protocols.change_direction["_"]);
if(!((m__31523__auto____$1 == null))){
return (m__31523__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31523__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,dir) : m__31523__auto____$1(this$,dir));
} else {
throw cljs.core.missing_protocol("Moveable.change-direction",this$);
}
}
}
});

dan_shiffman_coding_challenges.snake.protocols.toggle_moving_QMARK_ = (function dan_shiffman_coding_challenges$snake$protocols$toggle_moving_QMARK_(this$){
if((!((this$ == null))) && (!((this$.dan_shiffman_coding_challenges$snake$protocols$Moveable$toggle_moving_QMARK_$arity$1 == null)))){
return this$.dan_shiffman_coding_challenges$snake$protocols$Moveable$toggle_moving_QMARK_$arity$1(this$);
} else {
var x__31522__auto__ = (((this$ == null))?null:this$);
var m__31523__auto__ = (dan_shiffman_coding_challenges.snake.protocols.toggle_moving_QMARK_[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return (m__31523__auto__.cljs$core$IFn$_invoke$arity$1 ? m__31523__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__31523__auto__(this$));
} else {
var m__31523__auto____$1 = (dan_shiffman_coding_challenges.snake.protocols.toggle_moving_QMARK_["_"]);
if(!((m__31523__auto____$1 == null))){
return (m__31523__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__31523__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__31523__auto____$1(this$));
} else {
throw cljs.core.missing_protocol("Moveable.toggle-moving?",this$);
}
}
}
});


/**
 * @interface
 */
dan_shiffman_coding_challenges.snake.protocols.Animal = function(){};

dan_shiffman_coding_challenges.snake.protocols.eat = (function dan_shiffman_coding_challenges$snake$protocols$eat(this$,food){
if((!((this$ == null))) && (!((this$.dan_shiffman_coding_challenges$snake$protocols$Animal$eat$arity$2 == null)))){
return this$.dan_shiffman_coding_challenges$snake$protocols$Animal$eat$arity$2(this$,food);
} else {
var x__31522__auto__ = (((this$ == null))?null:this$);
var m__31523__auto__ = (dan_shiffman_coding_challenges.snake.protocols.eat[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return (m__31523__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31523__auto__.cljs$core$IFn$_invoke$arity$2(this$,food) : m__31523__auto__(this$,food));
} else {
var m__31523__auto____$1 = (dan_shiffman_coding_challenges.snake.protocols.eat["_"]);
if(!((m__31523__auto____$1 == null))){
return (m__31523__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31523__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,food) : m__31523__auto____$1(this$,food));
} else {
throw cljs.core.missing_protocol("Animal.eat",this$);
}
}
}
});


/**
 * @interface
 */
dan_shiffman_coding_challenges.snake.protocols.Neighbor = function(){};

dan_shiffman_coding_challenges.snake.protocols.neighbor = (function dan_shiffman_coding_challenges$snake$protocols$neighbor(this$,direction){
if((!((this$ == null))) && (!((this$.dan_shiffman_coding_challenges$snake$protocols$Neighbor$neighbor$arity$2 == null)))){
return this$.dan_shiffman_coding_challenges$snake$protocols$Neighbor$neighbor$arity$2(this$,direction);
} else {
var x__31522__auto__ = (((this$ == null))?null:this$);
var m__31523__auto__ = (dan_shiffman_coding_challenges.snake.protocols.neighbor[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return (m__31523__auto__.cljs$core$IFn$_invoke$arity$2 ? m__31523__auto__.cljs$core$IFn$_invoke$arity$2(this$,direction) : m__31523__auto__(this$,direction));
} else {
var m__31523__auto____$1 = (dan_shiffman_coding_challenges.snake.protocols.neighbor["_"]);
if(!((m__31523__auto____$1 == null))){
return (m__31523__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__31523__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,direction) : m__31523__auto____$1(this$,direction));
} else {
throw cljs.core.missing_protocol("Neighbor.neighbor",this$);
}
}
}
});

dan_shiffman_coding_challenges.snake.protocols.neighbors = (function dan_shiffman_coding_challenges$snake$protocols$neighbors(this$,except_direction,except_cells){
if((!((this$ == null))) && (!((this$.dan_shiffman_coding_challenges$snake$protocols$Neighbor$neighbors$arity$3 == null)))){
return this$.dan_shiffman_coding_challenges$snake$protocols$Neighbor$neighbors$arity$3(this$,except_direction,except_cells);
} else {
var x__31522__auto__ = (((this$ == null))?null:this$);
var m__31523__auto__ = (dan_shiffman_coding_challenges.snake.protocols.neighbors[goog.typeOf(x__31522__auto__)]);
if(!((m__31523__auto__ == null))){
return (m__31523__auto__.cljs$core$IFn$_invoke$arity$3 ? m__31523__auto__.cljs$core$IFn$_invoke$arity$3(this$,except_direction,except_cells) : m__31523__auto__(this$,except_direction,except_cells));
} else {
var m__31523__auto____$1 = (dan_shiffman_coding_challenges.snake.protocols.neighbors["_"]);
if(!((m__31523__auto____$1 == null))){
return (m__31523__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__31523__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,except_direction,except_cells) : m__31523__auto____$1(this$,except_direction,except_cells));
} else {
throw cljs.core.missing_protocol("Neighbor.neighbors",this$);
}
}
}
});

