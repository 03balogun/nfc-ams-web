/*
 *  Document   : be_comp_rating.js
 *  Author     : pixelcave
 */
var BeCompRating=function(){var a=function(){jQuery.fn.raty.defaults.starType="i",jQuery.fn.raty.defaults.hints=["Just Bad!","Almost There!","It’s ok!","That’s nice!","Incredible!"],jQuery(".js-rating").each(function(){var a=jQuery(this);a.raty({score:a.data("score")||0,number:a.data("number")||5,cancel:a.data("cancel")||!1,target:a.data("target")||!1,targetScore:a.data("target-score")||!1,precision:a.data("precision")||!1,cancelOff:a.data("cancel-off")||"fa fa-fw fa-times-circle text-danger",cancelOn:a.data("cancel-on")||"fa fa-fw fa-times-circle",starHalf:a.data("star-half")||"fa fa-fw fa-star-half-o text-warning",starOff:a.data("star-off")||"fa fa-fw fa-star text-muted",starOn:a.data("star-on")||"fa fa-fw fa-star text-warning",click:function(a,t){}})})};return{init:function(){a()}}}();jQuery(function(){BeCompRating.init()});
