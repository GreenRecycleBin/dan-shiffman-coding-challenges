// Compiled by ClojureScript 1.9.946 {:static-fns true, :fn-invoke-direct true, :optimize-constants true}
goog.provide('dan_shiffman_coding_challenges.snake.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dan_shiffman_coding_challenges.snake.a_star');
goog.require('dan_shiffman_coding_challenges.snake.food');
goog.require('dan_shiffman_coding_challenges.snake.greedy_best_first_search');
goog.require('dan_shiffman_coding_challenges.snake.protocols');
goog.require('dan_shiffman_coding_challenges.snake.snake');
goog.require('dan_shiffman_coding_challenges.snake.utilities');
goog.require('jayq.core');
goog.require('quil.core');
goog.require('quil.middleware');
dan_shiffman_coding_challenges.snake.core.global_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
dan_shiffman_coding_challenges.snake.core.canvas_id = "canvas";
dan_shiffman_coding_challenges.snake.core.setup = (function dan_shiffman_coding_challenges$snake$core$setup(){
quil.core.frame_rate(cljs.core.cst$kw$frame_DASH_rate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$snake,dan_shiffman_coding_challenges.snake.snake.make_random_snake(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state))),cljs.core.cst$kw$food,dan_shiffman_coding_challenges.snake.food.make_random_food(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)))], null);
});
dan_shiffman_coding_challenges.snake.core.calculate_next_direction = (function dan_shiffman_coding_challenges$snake$core$calculate_next_direction(snake,food){
var G__38627 = cljs.core.cst$kw$ai_DASH_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state));
switch (G__38627) {
case "greedy-best-first-search":
case "temp-greedy-best-first-search":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (G__38627){
return (function (p1__38623_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38623_SHARP_,cljs.core.cst$kw$a_STAR__DASH_next_DASH_direction);
});})(G__38627))
);

return dan_shiffman_coding_challenges.snake.greedy_best_first_search.next_direction(snake,food);

break;
case "a*":
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a_STAR__DASH_next_DASH_direction], null)))){
} else {
var a_STAR__path_38629 = dan_shiffman_coding_challenges.snake.a_star.a_STAR_(snake,food);
if(cljs.core.seq(a_STAR__path_38629)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (a_STAR__path_38629,G__38627){
return (function (p1__38624_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38624_SHARP_,cljs.core.cst$kw$a_STAR__DASH_next_DASH_direction,a_STAR__path_38629);
});})(a_STAR__path_38629,G__38627))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (a_STAR__path_38629,G__38627){
return (function (p1__38625_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38625_SHARP_,cljs.core.cst$kw$ai_DASH_mode,"temp-greedy-best-first-search");
});})(a_STAR__path_38629,G__38627))
);

console.log("Switched to temp-greedy-best-first-search");

dan_shiffman_coding_challenges.snake.greedy_best_first_search.next_direction(snake,food);
}
}

var next_direction = cljs.core.first(cljs.core.cst$kw$a_STAR__DASH_next_DASH_direction.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (next_direction,G__38627){
return (function (p1__38626_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__38626_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a_STAR__DASH_next_DASH_direction], null),cljs.core.rest);
});})(next_direction,G__38627))
);

return next_direction;

break;
default:
return null;

}
});
dan_shiffman_coding_challenges.snake.core.update_state = (function dan_shiffman_coding_challenges$snake$core$update_state(p__38633){
var map__38634 = p__38633;
var map__38634__$1 = ((((!((map__38634 == null)))?((((map__38634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38634):map__38634);
var state = map__38634__$1;
var map__38635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,cljs.core.cst$kw$food);
var map__38635__$1 = ((((!((map__38635 == null)))?((((map__38635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38635):map__38635);
var food = map__38635__$1;
var food_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38635__$1,cljs.core.cst$kw$x);
var food_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38635__$1,cljs.core.cst$kw$y);
var map__38636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,cljs.core.cst$kw$snake);
var map__38636__$1 = ((((!((map__38636 == null)))?((((map__38636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38636):map__38636);
var snake = map__38636__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$y);
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$tail);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$count);
var dead_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$dead_QMARK_);
var moving_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$moving_QMARK_);
var G__38640_38642 = cljs.core.cst$kw$ai_DASH_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state));
switch (G__38640_38642) {
case "no-ai":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (G__38640_38642,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_){
return (function (p1__38630_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38630_SHARP_,cljs.core.cst$kw$a_STAR__DASH_next_DASH_direction),cljs.core.cst$kw$frame_DASH_rate,(cljs.core.cst$kw$default_DASH_frame_DASH_rate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)) + cljs.core.quot(count,(10))));
});})(G__38640_38642,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_))
);

break;
case "greedy-best-first-search":
case "temp-greedy-best-first-search":
case "a*":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (G__38640_38642,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_){
return (function (p1__38631_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38631_SHARP_,cljs.core.cst$kw$frame_DASH_rate,(60));
});})(G__38640_38642,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38640_38642)].join('')));

}

if((dead_QMARK_) || (!(moving_QMARK_))){
return state;
} else {
var next_direction = dan_shiffman_coding_challenges.snake.core.calculate_next_direction(snake,food);
var new_snake = dan_shiffman_coding_challenges.snake.protocols.eat(dan_shiffman_coding_challenges.snake.protocols.move((function (){var G__38641 = snake;
if(cljs.core.truth_(next_direction)){
return dan_shiffman_coding_challenges.snake.protocols.change_direction(G__38641,next_direction);
} else {
return G__38641;
}
})()),food);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$snake,new_snake),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$food], null),((function (next_direction,new_snake,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_){
return (function (p1__38632_SHARP_){
if((cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(new_snake) > count)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("temp-greedy-best-first-search",cljs.core.cst$kw$ai_DASH_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (next_direction,new_snake,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_){
return (function (global_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(global_state,cljs.core.cst$kw$ai_DASH_mode,"a*");
});})(next_direction,new_snake,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_))
);

console.log("Switched to a*");
} else {
}

return dan_shiffman_coding_challenges.snake.food.make_random_food.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$except,cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),tail)], 0));
} else {
return p1__38632_SHARP_;
}
});})(next_direction,new_snake,map__38634,map__38634__$1,state,map__38635,map__38635__$1,food,food_x,food_y,map__38636,map__38636__$1,snake,x,y,tail,count,dead_QMARK_,moving_QMARK_))
);
}
});
dan_shiffman_coding_challenges.snake.core.draw = (function dan_shiffman_coding_challenges$snake$core$draw(p__38644){
var map__38645 = p__38644;
var map__38645__$1 = ((((!((map__38645 == null)))?((((map__38645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38645):map__38645);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.cst$kw$food);
var map__38646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.cst$kw$snake);
var map__38646__$1 = ((((!((map__38646 == null)))?((((map__38646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38646.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38646):map__38646);
var snake = map__38646__$1;
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.cst$kw$count);
var moving_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.cst$kw$moving_QMARK_);
var dead_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.cst$kw$dead_QMARK_);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.cst$kw$height);
quil.core.frame_rate(cljs.core.cst$kw$frame_DASH_rate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));

quil.core.background.cljs$core$IFn$_invoke$arity$1((85));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

quil.core.text_size((15));

var dimension_str_38649 = ["Width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," Height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)].join('');
dan_shiffman_coding_challenges.snake.utilities.center_text_horizontally(dimension_str_38649,(25),cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));

var score_str_38650 = ["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)].join('');
dan_shiffman_coding_challenges.snake.utilities.center_text_horizontally(score_str_38650,(50),cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));

dan_shiffman_coding_challenges.snake.protocols.render(food);

dan_shiffman_coding_challenges.snake.protocols.render(snake);

if(moving_QMARK_){
} else {
quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

var unpausing_str_38651 = "Press p to unpause the game.";
dan_shiffman_coding_challenges.snake.utilities.center_text_horizontally(unpausing_str_38651,(100),cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));

quil.core.no_loop();
}

if(dead_QMARK_){
quil.core.fill.cljs$core$IFn$_invoke$arity$3((255),(0),(0));

var loss_str_38652 = "You lose!";
dan_shiffman_coding_challenges.snake.utilities.center_text_horizontally(loss_str_38652,(75),cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

var retry_str_38653 = "Press spacebar to retry.";
dan_shiffman_coding_challenges.snake.utilities.center_text_horizontally(retry_str_38653,(100),cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)));

return quil.core.no_loop();
} else {
return null;
}
});
dan_shiffman_coding_challenges.snake.core.ai_mode_input = (function dan_shiffman_coding_challenges$snake$core$ai_mode_input(var_args){
var args__32075__auto__ = [];
var len__32068__auto___38658 = arguments.length;
var i__32069__auto___38659 = (0);
while(true){
if((i__32069__auto___38659 < len__32068__auto___38658)){
args__32075__auto__.push((arguments[i__32069__auto___38659]));

var G__38660 = (i__32069__auto___38659 + (1));
i__32069__auto___38659 = G__38660;
continue;
} else {
}
break;
}

var argseq__32076__auto__ = ((((0) < args__32075__auto__.length))?(new cljs.core.IndexedSeq(args__32075__auto__.slice((0)),(0),null)):null);
return dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$core$IFn$_invoke$arity$variadic(argseq__32076__auto__);
});

dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$core$IFn$_invoke$arity$variadic = (function (p__38655){
var map__38656 = p__38655;
var map__38656__$1 = ((((!((map__38656 == null)))?((((map__38656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38656):map__38656);
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38656__$1,cljs.core.cst$kw$checked,false);
var selector = "input[type='radio'][name='ai-mode']";
return jayq.core.$.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(selector),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(checked)?":checked":null))].join(''));
});

dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$lang$maxFixedArity = (0);

dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$lang$applyTo = (function (seq38654){
return dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38654));
});

dan_shiffman_coding_challenges.snake.core.key_pressed = (function dan_shiffman_coding_challenges$snake$core$key_pressed(p__38662,_){
var map__38663 = p__38662;
var map__38663__$1 = ((((!((map__38663 == null)))?((((map__38663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38663):map__38663);
var state = map__38663__$1;
var snake = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38663__$1,cljs.core.cst$kw$snake);
var key_keyword = quil.core.key_as_keyword();
var G__38665 = key_keyword;
var G__38665__$1 = (((G__38665 instanceof cljs.core.Keyword))?G__38665.fqn:null);
switch (G__38665__$1) {
case "up":
case "down":
case "left":
case "right":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$snake,dan_shiffman_coding_challenges.snake.protocols.change_direction(snake,key_keyword));

break;
default:
var G__38666 = quil.core.key_code();
switch (G__38666) {
case (32):
quil.core.start_loop();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,((function (G__38666,G__38665,G__38665__$1,key_keyword,map__38663,map__38663__$1,state,snake){
return (function (p1__38661_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38661_SHARP_,cljs.core.cst$kw$a_STAR__DASH_next_DASH_direction),cljs.core.cst$kw$ai_DASH_mode,dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$checked,true], 0)).val());
});})(G__38666,G__38665,G__38665__$1,key_keyword,map__38663,map__38663__$1,state,snake))
);

var G__38667_38670 = ["Switched to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$checked,true], 0)).val())].join('');
console.log(G__38667_38670);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$snake,dan_shiffman_coding_challenges.snake.snake.make_random_snake(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$scale.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state))));

break;
case (80):
if(cljs.core.truth_(cljs.core.cst$kw$moving_QMARK_.cljs$core$IFn$_invoke$arity$1(snake))){
} else {
quil.core.start_loop();
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$snake,dan_shiffman_coding_challenges.snake.protocols.toggle_moving_QMARK_(snake));

break;
default:
return state;

}

}
});
dan_shiffman_coding_challenges.snake.core.snake = (function dan_shiffman_coding_challenges$snake$core$snake(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$features,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$no_DASH_start], null),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(dan_shiffman_coding_challenges.snake.core.update_state))?(function() { 
var G__38671__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.update_state,args);
};
var G__38671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38672__i = 0, G__38672__a = new Array(arguments.length -  0);
while (G__38672__i < G__38672__a.length) {G__38672__a[G__38672__i] = arguments[G__38672__i + 0]; ++G__38672__i;}
  args = new cljs.core.IndexedSeq(G__38672__a,0,null);
} 
return G__38671__delegate.call(this,args);};
G__38671.cljs$lang$maxFixedArity = 0;
G__38671.cljs$lang$applyTo = (function (arglist__38673){
var args = cljs.core.seq(arglist__38673);
return G__38671__delegate(args);
});
G__38671.cljs$core$IFn$_invoke$arity$variadic = G__38671__delegate;
return G__38671;
})()
:dan_shiffman_coding_challenges.snake.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state)),cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(dan_shiffman_coding_challenges.snake.core.global_state))], null),cljs.core.cst$kw$title,"Snake",cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(dan_shiffman_coding_challenges.snake.core.setup))?(function() { 
var G__38674__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.setup,args);
};
var G__38674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38675__i = 0, G__38675__a = new Array(arguments.length -  0);
while (G__38675__i < G__38675__a.length) {G__38675__a[G__38675__i] = arguments[G__38675__i + 0]; ++G__38675__i;}
  args = new cljs.core.IndexedSeq(G__38675__a,0,null);
} 
return G__38674__delegate.call(this,args);};
G__38674.cljs$lang$maxFixedArity = 0;
G__38674.cljs$lang$applyTo = (function (arglist__38676){
var args = cljs.core.seq(arglist__38676);
return G__38674__delegate(args);
});
G__38674.cljs$core$IFn$_invoke$arity$variadic = G__38674__delegate;
return G__38674;
})()
:dan_shiffman_coding_challenges.snake.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$host,((cljs.core.fn_QMARK_(dan_shiffman_coding_challenges.snake.core.canvas_id))?(function() { 
var G__38677__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.canvas_id,args);
};
var G__38677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38678__i = 0, G__38678__a = new Array(arguments.length -  0);
while (G__38678__i < G__38678__a.length) {G__38678__a[G__38678__i] = arguments[G__38678__i + 0]; ++G__38678__i;}
  args = new cljs.core.IndexedSeq(G__38678__a,0,null);
} 
return G__38677__delegate.call(this,args);};
G__38677.cljs$lang$maxFixedArity = 0;
G__38677.cljs$lang$applyTo = (function (arglist__38679){
var args = cljs.core.seq(arglist__38679);
return G__38677__delegate(args);
});
G__38677.cljs$core$IFn$_invoke$arity$variadic = G__38677__delegate;
return G__38677;
})()
:dan_shiffman_coding_challenges.snake.core.canvas_id),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(dan_shiffman_coding_challenges.snake.core.key_pressed))?(function() { 
var G__38680__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.key_pressed,args);
};
var G__38680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38681__i = 0, G__38681__a = new Array(arguments.length -  0);
while (G__38681__i < G__38681__a.length) {G__38681__a[G__38681__i] = arguments[G__38681__i + 0]; ++G__38681__i;}
  args = new cljs.core.IndexedSeq(G__38681__a,0,null);
} 
return G__38680__delegate.call(this,args);};
G__38680.cljs$lang$maxFixedArity = 0;
G__38680.cljs$lang$applyTo = (function (arglist__38682){
var args = cljs.core.seq(arglist__38682);
return G__38680__delegate(args);
});
G__38680.cljs$core$IFn$_invoke$arity$variadic = G__38680__delegate;
return G__38680;
})()
:dan_shiffman_coding_challenges.snake.core.key_pressed),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(dan_shiffman_coding_challenges.snake.core.draw))?(function() { 
var G__38683__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.draw,args);
};
var G__38683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38684__i = 0, G__38684__a = new Array(arguments.length -  0);
while (G__38684__i < G__38684__a.length) {G__38684__a[G__38684__i] = arguments[G__38684__i + 0]; ++G__38684__i;}
  args = new cljs.core.IndexedSeq(G__38684__a,0,null);
} 
return G__38683__delegate.call(this,args);};
G__38683.cljs$lang$maxFixedArity = 0;
G__38683.cljs$lang$applyTo = (function (arglist__38685){
var args = cljs.core.seq(arglist__38685);
return G__38683__delegate(args);
});
G__38683.cljs$core$IFn$_invoke$arity$variadic = G__38683__delegate;
return G__38683;
})()
:dan_shiffman_coding_challenges.snake.core.draw)], 0));
});
goog.exportSymbol('dan_shiffman_coding_challenges.snake.core.snake', dan_shiffman_coding_challenges.snake.core.snake);

if(cljs.core.truth_(cljs.core.some((function (p1__36612__36613__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__36612__36613__auto__);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$no_DASH_start], null)))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,dan_shiffman_coding_challenges.snake.core.snake,cljs.core.cst$kw$host_DASH_id,((cljs.core.fn_QMARK_(dan_shiffman_coding_challenges.snake.core.canvas_id))?(function() { 
var G__38686__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.canvas_id,args);
};
var G__38686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38687__i = 0, G__38687__a = new Array(arguments.length -  0);
while (G__38687__i < G__38687__a.length) {G__38687__a[G__38687__i] = arguments[G__38687__i + 0]; ++G__38687__i;}
  args = new cljs.core.IndexedSeq(G__38687__a,0,null);
} 
return G__38686__delegate.call(this,args);};
G__38686.cljs$lang$maxFixedArity = 0;
G__38686.cljs$lang$applyTo = (function (arglist__38688){
var args = cljs.core.seq(arglist__38688);
return G__38686__delegate(args);
});
G__38686.cljs$core$IFn$_invoke$arity$variadic = G__38686__delegate;
return G__38686;
})()
:dan_shiffman_coding_challenges.snake.core.canvas_id)], null));
}
dan_shiffman_coding_challenges.snake.core.canvas_height = (function dan_shiffman_coding_challenges$snake$core$canvas_height(){
return (window.innerHeight - jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$form).height());
});
jayq.core.document_ready((function (){
cljs.core.reset_BANG_(dan_shiffman_coding_challenges.snake.core.global_state,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,window.innerWidth,cljs.core.cst$kw$height,dan_shiffman_coding_challenges.snake.core.canvas_height(),cljs.core.cst$kw$scale,(10),cljs.core.cst$kw$default_DASH_frame_DASH_rate,(10),cljs.core.cst$kw$frame_DASH_rate,(10),cljs.core.cst$kw$ai_DASH_mode,"no-ai"], null));

dan_shiffman_coding_challenges.snake.core.ai_mode_input().change((function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dan_shiffman_coding_challenges.snake.core.global_state,(function (p1__38689_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38689_SHARP_,cljs.core.cst$kw$ai_DASH_mode,event.target.value);
}));

var G__38690_38691 = ["Switched to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dan_shiffman_coding_challenges.snake.core.ai_mode_input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$checked,true], 0)).val())].join('');
console.log(G__38690_38691);

return jayq.core.$.cljs$core$IFn$_invoke$arity$1(dan_shiffman_coding_challenges.snake.core.canvas_id).focus();
}));

dan_shiffman_coding_challenges.snake.core.ai_mode_input().prop("checked");

jayq.core.$.cljs$core$IFn$_invoke$arity$1(dan_shiffman_coding_challenges.snake.core.canvas_id).focus();

return dan_shiffman_coding_challenges.snake.core.snake();
}));
