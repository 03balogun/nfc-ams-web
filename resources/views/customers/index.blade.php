@extends('layouts.app')
@section('title') Customers @endsection
@section('customers') active @endsection
@section('additional-class')
    page-header-glass
@endsection
@section('page-css')
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/buttons.dataTables.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2-bootstrap.min.css')}}">
    <meta name="_token" content="{{csrf_token()}}">
@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">Customers</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">There are currently {{$all_customers}} customers!</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Students']])
    <div class="content">
        <h2 class="content-heading">Overview</h2>
        <div class="row gutters-tiny">
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow bg-gd-dusk" data-toggle="popover"
                   title="Info!" data-placement="top"
                   data-content="Total Customers saved on this system" href="javascript:void(0)">
                    <div class="block-content block-content-full text-right clearfix">
                        <div class="float-left mt-10">
                            <i class="si si-users fa-3x text-fade"></i>
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo"
                                 data-to="{{$all_customers}}">
                                {{$all_customers}}
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-white">All Customers</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow bg-gd-emerald" title="Info!" data-placement="top"
                   data-content="Total Customers created this month" data-toggle="popover" href="javascript:void(0)">
                    <div class="block-content block-content-full text-right clearfix">
                        <div class="float-left mt-10">
                            <i class="si si-calendar fa-3x text-fade"></i>
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo"
                                 data-to="{{$this_month_customers}}">
                                {{$this_month_customers}}
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-white">Total this Month</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow bg-gd-sea" title="Info!" data-placement="top"
                   data-content="Total Active Customers" data-toggle="popover" href="javascript:void(0)">
                    <div class="block-content block-content-full text-right clearfix">
                        <div class="float-left mt-10">
                            <i class="si si-star fa-3x text-fade"></i>
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo"
                                 data-to="{{$all_active_customers}}">
                                {{$all_active_customers}}
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-white">Active Customers</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-md-3">
                <a class="block block-rounded block-link-shadow create-customer-modal-toggle" title="Info!"
                   data-placement="top"
                   data-content="Add a new customer to the system" data-toggle="popover" href="javascript:;">
                    <div class="block-content block-content-full block-sticky-options">
                        <div class="block-options">
                            <div class="block-options-item">
                                <i class="fa fa-archive fa-2x text-success-light"></i>
                            </div>
                        </div>
                        <div class="py-20 text-center">
                            <div class="font-size-h2 font-w700 mb-0 text-success">
                                <i class="fa fa-user-plus"></i>
                            </div>
                            <div class="font-size-sm font-w600 text-uppercase text-muted">New Customer</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="content-heading">

        </div>

        <div class="block block-rounded">
            <div class="block-content block-content-full">
                <table class="table table-bordered table-striped table-vcenter customers-record-table">
                    <thead>
                    <tr>
                        <th class="text-center">N <span style="text-decoration: underline">o</span></th>
                        <th>Title</th>
                        <th>Gender</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th class="">Email</th>
                        <th class="">Phone</th>
                        <th class="">Date Created</th>
                        <th class="text-center" style="width: 15%;"></th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>


    <div class="modal fade" id="create-customer-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-customer-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                <form action="{{route('customers.store')}}" id="customer-create-form"
                      class="js-validation-bootstrap" enctype="multipart/form-data" method="post">
                    {{csrf_field()}}
                    {!! renderForm($form->group_id) !!}
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">CREATE CUSTOMER</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center notification-bar" id="create-customer-notification-bar">
                            <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...
                            </h4>
                        </div>
                        <div class="block-content">
                            <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                            <div class="row items-push">
                                <div class="col-xl-12">
                                    <div class="row">
                                        <div class="col-md-3 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->title) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-5 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->first_name) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->last_name) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->gender) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-5 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->phone_number) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->email) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-9 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->address) !!}
                                            </div>

                                            <div class="errorMessage mt-15"></div>
                                            <div class="successMessage mt-15"></div>
                                        </div>
                                        {{--<div class="col-md-3 form-group">--}}
                                        {{--<strong class="">Set Avatar</strong>--}}
                                        {{--<div class="avatar-photo">--}}
                                        {{--<img src="{{asset('assets/img/avatars/avatar0.jpg')}}"--}}
                                        {{--data-placeholder="{{asset('assets/img/avatars/avatar0.jpg')}}"--}}
                                        {{--alt="img"--}}
                                        {{--class="img-responsive profile-avatar">--}}
                                        {{--<div class="change-photo-btn mt-2">--}}
                                        {{--<div class="photoUpload">--}}
                                        {{--<button type="button" class="btn btn-sm btn-success">--}}
                                        {{--<label for="customer-avatar">--}}

                                        {{--<span>--}}
                                        {{--<i class="fa fa-upload"></i>--}}
                                        {{--Upload Photo--}}
                                        {{--</span>--}}

                                        {{--</label>--}}
                                        {{--</button>--}}
                                        {{--<button type="button"--}}
                                        {{--class="btn btn-sm btn-danger remove-avatar"--}}
                                        {{--style="display: none">--}}
                                        {{--<span>--}}
                                        {{--<i class="fa fa-remove"></i>--}}
                                        {{--remove--}}
                                        {{--</span>--}}
                                        {{--</button>--}}
                                        {{--<input type="file" style="display: none"--}}
                                        {{--onchange="preview_image(this);" id="customer-avatar"--}}
                                        {{--name="avatar" class="upload">--}}
                                        {{--</div>--}}
                                        {{--</div>--}}
                                        {{--</div>--}}
                                        {{--</div>--}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-alt-danger" data-dismiss="modal">Close</button>
                        <button class="btn btn-lg btn-primary">
                            Save
                            <i class="fa fa-save"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="edit-customer-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-customer-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                {!! form_start($form,['method'=>'PUT','id'=>'customer-update-form',
                'enctype'=>'multipart/form-data','class'=>'js-validation-bootstrap']) !!}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">EDIT CUSTOMER</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="update-customer-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...</h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="row items-push">
                            <div class="col-xl-12">
                                <div class="row">
                                    <div class="col-md-3 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->title) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-5 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->first_name) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->last_name) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->gender) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-5 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->phone_number) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->email) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->address) !!}
                                        </div>

                                        <div class="errorMessage mt-15"></div>
                                        <div class="successMessage mt-15"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-alt-danger" data-dismiss="modal">Close</button>
                    <button class="btn btn-lg btn-primary">
                        Save
                        <i class="fa fa-save"></i>
                    </button>
                </div>
                {!! form_end($form, false) !!}
            </div>
        </div>
    </div>
@endsection
@section('page-js')
    <script src="{{asset('assets/js/plugins/select2/select2.full.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/sweetalert/sweetalert.min.js')}}"></script>

    <script src="{{asset('assets/js/plugins/datatables/dataTables.buttons.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/buttons.colVis.min.js')}}"></script>
    <script>
        jQuery(function () {
            Codebase.helpers(['select2']);
            $('.select2-container').css('width', '100%');
        });
    </script>
    <script>

        let tableConfig = {
            processing: true,
            serverSide: true,
            destroy: true,
            pagingType: "full_numbers",
            columnDefs: [
                {targets: [1, 2], visible: false}
            ],
            pageLength: 10,
            lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
            autoWidth: !1,
            dom: 'Bfrtip',
            stateSave: true,
            buttons: [
                'colvis'
            ],
            drawCallback: function () {
                deleteRecord('{{csrf_token()}}', function (isDeleted) {
                    if (isDeleted) {
                        tableConfig.ajax = {url: '{{route('ajax.customers.records')}}'};
                        initDataTable(tableConfig);
                    }
                });

                editRecord('{{route('ajax.customers.get')}}', function ({data}) {
                    $('#customer-update-form').attr('action', `{{url('customers/')}}/${data.id}`);
                    $.each(data, (key, value) => {
                        $('#customer-update-form').find(`#${key}`).val(value).trigger('change');
                    });
                    $('#edit-customer-modal').modal('show');
                })
            },
            columns: [
                {data: "id"},
                {data: "title", visibility: false},
                {data: "gender"},
                {data: "first_name"},
                {data: "last_name"},
                {data: "email"},
                {data: "phone_number"},
                {data: "created_at"},
                {data: "action", orderable: false}
            ],
        };

        function initDataTable(tableConfig) {
            jQuery(".customers-record-table").dataTable(tableConfig);
        }

        $('.create-customer-modal-toggle').click(function () {
            $('#create-customer-modal').modal('show');
        });


        jQuery(function () {
            tableConfig.ajax = {url: '{{route('ajax.customers.records')}}'};
            initDataTable(tableConfig);
            validateForm();

            let formRequestHandler = new FormRequestHandler();
            formRequestHandler.busy_state = $('#create-customer-notification-bar');
            formRequestHandler.ajaxRequest($('#customer-create-form'), 'POST', (data) => {
                // $('.remove-avatar').trigger('click');
                $('.errorMessage').html('');
                $('#create-customer-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.customers.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                //TODO goto detail page
                swal("Success", "Student record saved successfully", "success").then(()=>console.log(data));
            });

            let updateFormRequestHandler = new FormRequestHandler();
            updateFormRequestHandler.busy_state = $('#update-customer-notification-bar');
            updateFormRequestHandler.ajaxRequest($('#customer-update-form'), 'POST', (data) => {
                $('.errorMessage').html('');
                $('#edit-customer-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.customers.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                swal("Success", "Student record update successfully", "success");
            });
        })
    </script>
@endsection