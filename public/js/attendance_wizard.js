/**
 * Created by PhpStorm.
 * User: Balogun Wahab
 * Date: 9/3/18
 * Time: 7:01 PM
 */

amsWizard = function () {
    var a = function () {
            jQuery.fn.bootstrapWizard.defaults.tabClass = "nav nav-tabs";
            jQuery.fn.bootstrapWizard.defaults.nextSelector = '[data-wizard="next"]';
            jQuery.fn.bootstrapWizard.defaults.previousSelector = '[data-wizard="prev"]';
            jQuery.fn.bootstrapWizard.defaults.firstSelector = '[data-wizard="first"]';
            jQuery.fn.bootstrapWizard.defaults.lastSelector = '[data-wizard="last"]';
            jQuery.fn.bootstrapWizard.defaults.finishSelector = '[data-wizard="finish"]';
            jQuery.fn.bootstrapWizard.defaults.backSelector = '[data-wizard="back"]';
        },
        e = function () {
            var a = jQuery(".js-wizard-validation-classic-form"),
                i = jQuery(".js-wizard-validation-material-form");
            a.add(i).on("keyup keypress", function (a) {
                var i = a.keyCode || a.which;
                return 13 === i ? (a.preventDefault(), !1) : void 0
            });
            var r = i.validate({
                errorClass: "invalid-feedback animated fadeInDown",
                errorElement: "div",
                errorPlacement: function (a, i) {
                    jQuery(i).parents(".form-group").append(a)
                },
                highlight: function (a) {
                    jQuery(a).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
                },
                success: function (a) {
                    jQuery(a).closest(".form-group").removeClass("is-invalid"), jQuery(a).remove()
                }
            });
            jQuery(".js-wizard-validation-material").bootstrapWizard({
                tabClass: "",
                onTabShow: function (a, i, e) {
                    var r = (e + 1) / i.find("li").length * 100,
                        t = i.parents(".block").find('[data-wizard="progress"] > .progress-bar');
                    t.length && t.css({width: r + 1 + "%"})
                }, onNext: function (a, e, t) {
                    return i.valid() ? void 0 : (r.focusInvalid(), !1)
                }, onTabClick: function (a, i, e) {
                    return jQuery("a", i).blur(), !1
                },
                onTabChange: function (e) {
                    let prevTab = e[0];
                    let submitBtn = $('.wizard-submit-btn');
                    let nextBtn = $('button[data-wizard="next"]');
                    if(prevTab !== undefined && prevTab.getAttribute('data-ref') === 'firstTab'){
                        submitBtn.show();
                        nextBtn.hide()
                    }else{
                        nextBtn.show();
                        submitBtn.hide();
                    }
                }
            })
        };
    return {
        init: function () {
            a(), e()
        }
    }
}();
jQuery(function () {
    amsWizard.init()
});