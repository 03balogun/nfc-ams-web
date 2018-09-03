/*
 *  Document   : be_ui_animations.js
 *  Author     : pixelcave
 */
var BeUIAnimations=function(){var n=function(){var n,i,t;jQuery(".js-animation-section button").on("click",function(){i=jQuery(this),n=i.data("animation-class"),t=i.parents(".js-animation-section"),jQuery(".js-animation-preview",t).html(n),jQuery(".js-animation-object",t).removeClass().addClass("js-animation-object animated "+n)})};return{init:function(){n()}}}();jQuery(function(){BeUIAnimations.init()});
