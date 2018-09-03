/*
 *  Document   : op_auth_lock.js
 *  Author     : pixelcave
 */
var OpAuthLock=function(){var e=function(){jQuery(".js-validation-lock").validate({errorClass:"invalid-feedback animated fadeInDown",errorElement:"div",errorPlacement:function(e,r){jQuery(r).parents(".form-group > div").append(e)},highlight:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")},success:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid"),jQuery(e).remove()},rules:{"lock-password":{required:!0,minlength:3}},messages:{"lock-password":{required:"Please enter your valid password"}}})};return{init:function(){e()}}}();jQuery(function(){OpAuthLock.init()});
