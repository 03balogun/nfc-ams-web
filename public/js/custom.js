/**
 * Created by PhpStorm.
 * User: Balogun Wahab
 * Date: 7/17/18
 * Time: 11:40 PM
 */

$(document).ready(function () {
    /** Dynamically add asterisk to indicate required fields */
    $('input[required]').parent().find('label').append(' <span class="text-danger">*</span>');
    $('select[required]').parent().find('label').append(' <span class="text-danger">*</span>');
    $('textarea[required]').parent().find('label').append(' <span class="text-danger">*</span>');

    //Remove avatar
    let imageDiv = $('.profile-avatar');
    let removeAvi = $('.remove-avatar');
    removeAvi.click(function () {
        imageDiv.attr('src', imageDiv.attr('data-placeholder'));
        $('#customer-avatar')[0].files.length = 0;
        $(this).hide();
        $('.errorMessage').html('');
    });

});


function validateForm() {
    jQuery(".js-validation-bootstrap").validate({
        ignore: [],
        errorClass: "invalid-feedback animated fadeInDown",
        errorElement: "div",
        errorPlacement: function (e, a) {
            jQuery(a).parents(".form-group > div").append(e)
        },
        highlight: function (e) {
            jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
        },
        success: function (e) {
            jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
        }
    });
}


function preview_image(elem) {
    let imageDiv = $('.profile-avatar');
    let removeAvi = $('.remove-avatar');
    let errDiv = $('.errorMessage');
    errDiv.html('');
    if (elem.files.length > 0 && elem.files[0].type.includes('image')) {
        imageDiv.attr('src', URL.createObjectURL(elem.files[0]));
        imageDiv.css({'width': '220px', 'height': '150px'});
        removeAvi.show();
    } else {
        // removeAvi.trigger('change');
        errDiv.html('<strong class="text-danger">Error: <br/>The file selected is not an image file</strong>')
    }


}

function deleteRecord(token, callback) {
    //requires https://sweetalert.js.org/docs/
    $('.deleteBtn').click(function () {
        let url = $(this).attr('data-href');
        swal(`Are you sure?`, {
            icon: "warning",
            buttons: {
                cancel: "Cancel",
                yes: {
                    text: 'Yes'
                },
            },
        }).then(value => {
            switch (value) {
                case "yes":
                    $.ajax({
                        url,
                        type: 'DELETE',
                        success: function (data) {
                            if (data.status) {
                                swal("Deleted", "Record was deleted successfully", "success").then((e) => callback(data.status));
                                return;
                            }
                            console.log(data);
                            swal("Error", (data.reason !== '') ? data.reason || "something happened" : "Whoops! Record could not be deleted", "error");
                        },
                        data: {_token: token}
                    });
                    break;
                default:
                    console.log("Canceled Delete");
            }
        });
    })
}

function editRecord(route, callback) {
    $('.editBtn').click(function () {
        let record_id = $(this).attr('data-ref');
        $.get(`${route}/${record_id}`, function (data) {
            if (data.status) {
                callback(data);
                return;
            }
            swal("Whoops!", "Record could not be retrieved", "error");
        })
    });
}


function notifyPop(options) {
    jQuery.notify({
        icon: options.icon || "",
        message: options.message
    }, {
        element: "body",
        type: options.type || "info",
        allow_dismiss: !0,
        newest_on_top: !0,
        showProgressbar: !1,
        placement: {from: options.from || "top", align: options.align || "right"},
        offset: 20,
        spacing: 10,
        z_index: 1033,
        delay: 5e3,
        timer: 1e3,
        template: '<div data-notify="container" class="col-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
        animate: {enter: "animated fadeIn", exit: "animated fadeOutDown"}
    })
}

function FormRequestHandler() {
    this.busy_state = $('.busy_state');
    this.errorMessage = $('.errorMessage');
    this.successMessage = $('.successMessage');
    this.submitBtn = null;
}

FormRequestHandler.prototype.ajaxRequest = function (formElem, method, callback, msg = 'Please Wait...') {
    formElem.submit(e => {
        e.preventDefault();
        this.successMessage.hide();
        this.busy_state.slideToggle();
        if (this.submitBtn) this.submitBtn.attr('disabled', true);
        let data = new FormData(formElem[0]);
        $.ajax({
            url: e.currentTarget.action,
            type: method,
            processData: false,
            contentType: false,
            async: true,
            dataType: 'JSON',
            data,
            success: data => {
                if (this.submitBtn) this.submitBtn.attr('disabled', false);
                this.errorMessage.html("");
                this.busy_state.slideToggle();
                if (data.status) {
                    formElem[0].reset();
                    $('select').trigger('change');
                    callback(data);
                } else {
                    return this.showErrorInList(data.data || data.reason);
                }
            },
            error: err => {
                if (this.submitBtn) this.submitBtn.attr('disabled', false);
                this.busy_state.hide();
                return (err.status === 422)
                    ? this.showErrorInList(err.responseJSON.errors) :
                    this.networkError();
            }
        });
    });
};

FormRequestHandler.prototype.showErrorInList = function (msg) {
    let errors = msg;
    let errorText = "<strong class='text-danger'>ERROR:</strong>";
    if (errors instanceof Array || errors instanceof Object) {
        errorText += "<ul>";
        for (let error in errors) {
            if (errors.hasOwnProperty(error)) {
                errorText += "<li class='text-danger'>" + errors[error][0] + "</li>";
                notifyPop({message: errors[error][0], type: 'danger'});
            }
        }
        errorText += "</ul>"
    } else {
        notifyPop({message: msg, type: 'danger'});
        errorText = "<span class='text-danger'>" + msg + "</span>";
    }
    this.errorMessage.html(errorText);
    this.errorMessage.show();
};

FormRequestHandler.prototype.networkError = function () {
    this.busy_state.hide();
    let msg = "A network error occurred, Please check your network or refresh your browser and re-try. If error persist kindly report the issue.";
    notifyPop({message: msg, type: 'danger'});
    this.errorMessage.show();
    this.errorMessage.html('<span class="text-danger">' + msg + '</span>');
    //TODO:: Help user auto refresh browser after too much error with token :)
};

function doSearch(url,callback) {
    $('#doSearch').submit(function (e) {
        e.preventDefault();
        const sv = $(this);
        const selectInput = sv.find('select');
        const textInput = sv.find('input');
        let fields = {};
        if (selectInput) {
            [].forEach.call(selectInput, function (e) {
                fields[e.name] = e.value;
            });
        }
        if (textInput) {
            [].forEach.call(textInput, function (e) {
                fields[e.name] = e.value;
            });
        }
        tableConfig.ajax = {
            url,
            data: function (d) {
                for (let val in fields) if (fields.hasOwnProperty(val)) d[val] = fields[val];
            }
        };
        callback(tableConfig);
    });
}
