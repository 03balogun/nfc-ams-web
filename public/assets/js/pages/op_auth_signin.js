/*
 *  Document   : op_auth_signin.js
 *  Author     : pixelcave
 */
var OpAuthSignIn=function(){var e=function(){jQuery(".js-validation-signin").validate({errorClass:"invalid-feedback animated fadeInDown",errorElement:"div",errorPlacement:function(e,n){jQuery(n).parents(".form-group > div").append(e)},highlight:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")},success:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid"),jQuery(e).remove()},rules:{"login-username":{required:!0,minlength:3},"login-password":{required:!0,minlength:5}},messages:{"login-username":{required:"Please enter a username",minlength:"Your username must consist of at least 3 characters"},"login-password":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long"}}})};return{init:function(){e()}}}();jQuery(function(){OpAuthSignIn.init()});
