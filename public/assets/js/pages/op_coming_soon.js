/*
 *  Document   : op_coming_soon.js
 *  Author     : pixelcave
 */
var OpComingSoon=function(){var t=function(){jQuery(".js-countdown").countdown((new Date).getFullYear()+1+"/02/01",function(t){jQuery(this).html(t.strftime('<div class="row items-push text-center"><div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%-D</div><div class="font-size-xs font-w700 text-white-op">DAYS</div></div><div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%H</div><div class="font-size-xs font-w700 text-white-op">HOURS</div></div><div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%M</div><div class="font-size-xs font-w700 text-white-op">MINUTES</div></div><div class="col-6 col-sm-3"><div class="font-size-h1 font-w700 text-white">%S</div><div class="font-size-xs font-w700 text-white-op">SECONDS</div></div></div>'))})};return{init:function(){t()}}}();jQuery(function(){OpComingSoon.init()});
