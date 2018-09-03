/*
 *  Document   : op_auth_reminder.js
 *  Author     : pixelcave
 */
var OpAuthReminder=function(){var e=function(){jQuery(".js-validation-reminder").validate({errorClass:"invalid-feedback animated fadeInDown",errorElement:"div",errorPlacement:function(e,r){jQuery(r).parents(".form-group > div").append(e)},highlight:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")},success:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid"),jQuery(e).remove()},rules:{"reminder-credential":{required:!0,minlength:3}},messages:{"reminder-credential":{required:"Please enter a valid credential"}}})};return{init:function(){e()}}}();jQuery(function(){OpAuthReminder.init()});
