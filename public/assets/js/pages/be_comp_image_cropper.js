/*
 *  Document   : be_comp_image_cropper.js
 *  Author     : pixelcave
 */
var BeCompImageCropper=function(){var e=function(){var e=document.getElementById("js-img-cropper");Cropper.setDefaults({aspectRatio:4/3,preview:".js-img-cropper-preview"});var a=new Cropper(e,{crop:function(e){}});jQuery('[data-toggle="cropper"]').on("click",function(){var e=jQuery(this),r=e.data("method")||!1,t=e.data("option")||!1;switch(r){case"zoom":a.zoom(t);break;case"setDragMode":a.setDragMode(t);break;case"rotate":a.rotate(t);break;case"scaleX":a.scaleX(t),e.data("option",-t);break;case"scaleY":a.scaleY(t),e.data("option",-t);break;case"setAspectRatio":a.setAspectRatio(t);break;case"crop":a.crop();break;case"clear":a.clear()}})};return{init:function(){e()}}}();jQuery(function(){BeCompImageCropper.init()});
                                