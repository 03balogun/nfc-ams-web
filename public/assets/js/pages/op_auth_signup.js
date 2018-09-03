/*
 *  Document   : op_auth_signup.js
 *  Author     : pixelcave
 */
var OpAuthSignUp=function(){var e=function(){jQuery(".js-validation-signup").validate({errorClass:"invalid-feedback animated fadeInDown",errorElement:"div",errorPlacement:function(e,s){jQuery(s).parents(".form-group > div").append(e)},highlight:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")},success:function(e){jQuery(e).closest(".form-group").removeClass("is-invalid"),jQuery(e).remove()},rules:{"signup-username":{required:!0,minlength:3},"signup-email":{required:!0,email:!0},"signup-password":{required:!0,minlength:5},"signup-password-confirm":{required:!0,equalTo:"#signup-password"},"signup-terms":{required:!0}},messages:{"signup-username":{required:"Please enter a username",minlength:"Your username must consist of at least 3 characters"},"signup-email":"Please enter a valid email address","signup-password":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long"},"signup-password-confirm":{required:"Please provide a password",minlength:"Your password must be at least 5 characters long",equalTo:"Please enter the same password as above"},"signup-terms":"You must agree to the service terms!"}})};return{init:function(){e()}}}();jQuery(function(){OpAuthSignUp.init()});
