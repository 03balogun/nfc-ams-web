@extends('layouts.app')
@section('title') Students @endsection
@section('students') active @endsection
@section('additional-class')
    page-header-glass
@endsection
@section('page-css')
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/buttons.dataTables.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2-bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css')}}">
    <meta name="_token" content="{{csrf_token()}}">
    <style>
        .select2-container--default .select2-selection--multiple .select2-selection__choice{
            background-color: #353a40;
            border: none;
        }
        .select2-container--default.select2-container--focus .select2-selection--multiple{
            border: none;
            border-bottom: solid 1px #dcdfe3;
        }
    </style>
@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">Students</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">There are currently {{$all_students}} students!</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Students']])
    <div class="content">
        <h2 class="content-heading">Overview</h2>
        <div class="row gutters-tiny" style="float:right">
            <a class="btn btn-primary create-student-modal-toggle" title="Info!"
               data-placement="top"
               data-content="Add a new student to the system" data-toggle="popover" href="javascript:;">
                New Student
            </a>
        </div>
        <div class="content-heading">

        </div>

        <div class="block block-themed block-mode-hidden">
            <div class="block-header bg-muted">
                <h3 class="block-title" style="">Advance Search <i class="si si-magnifier"></i></h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option"
                            data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                </div>
            </div>
            <div class="block-content">
                <div class="row items-push">
                    <div class="col-xl-12">
                        <form action="{{route('ajax.students.records')}}" method="get" id="doSearch">
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <div>
                                        {!! renderForm($form->department_id,[],true) !!}
                                    </div>
                                </div>
                                <div class="col-md-4 form-group">
                                    <div>
                                        {!! renderForm($form->gender,[],true) !!}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-right">
                                    <button class="btn btn-primary">Search <i class="fa fa-filter"></i></button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

        <div class="block block-rounded">
            <div class="block-content block-content-full">
                <table class="table table-bordered table-striped table-vcenter students-record-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Registration Num</th>
                        <th>Gender</th>
                        <th>Dob</th>
                        <th class="">Department</th>
                        <th class="">Date Created</th>
                        <th class="text-center" style="width: 15%;"></th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>


    <div class="modal fade" id="create-student-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-student-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                <form action="{{route('students.store')}}" id="student-create-form"
                      class="js-validation-bootstrap" enctype="multipart/form-data" method="post">
                    {{csrf_field()}}
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">CREATE STUDENT</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center notification-bar" id="create-student-notification-bar">
                            <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...
                            </h4>
                        </div>
                        <div class="block-content">
                            <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                            <div class="row items-push">
                                <div class="col-xl-12">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->department_id) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->name) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->registration_num) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->courses) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->gender) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->dob) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-9 form-group">
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
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="edit-student-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-student-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                {!! form_start($form,['method'=>'PUT','id'=>'student-update-form',
                'enctype'=>'multipart/form-data','class'=>'js-validation-bootstrap']) !!}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">EDIT STUDENT</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="update-student-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...</h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="row items-push">
                            <div class="col-xl-12">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->department_id) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->name) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->registration_num) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->courses) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->gender) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->dob) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 form-group">
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
    <script src="{{asset('assets/js/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/dataTables.buttons.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/buttons.colVis.min.js')}}"></script>
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
                        tableConfig.ajax = {url: '{{route('ajax.students.records')}}'};
                        initDataTable(tableConfig);
                    }
                });

                editRecord('{{route('ajax.students.get')}}', function ({data}) {
                    $('#student-update-form').attr('action', `{{url('students/')}}/${data.id}`);
                    $.each(data, (key, value) => {
                        if (key === 'courses'){
                            let course_vals = [];
                            $.each(value,(i,val)=>course_vals.push(val.course_id));
                            $('#student-update-form').find(`#${key}`).val(course_vals).trigger('change')
                        }else{
                            $('#student-update-form').find(`#${key}`).val(value).trigger('change');
                        }
                    });
                    $('#edit-student-modal').modal('show');
                })
            },
            columns: [
                {data: "name"},
                {data: "registration_num"},
                {data: "gender"},
                {data: "dob"},
                {data: "department"},
                {data: "created_at"},
                {data: "action", orderable: false}
            ],
        };

        function initDataTable(tableConfig) {
            jQuery(".students-record-table").dataTable(tableConfig);
        }

        $('.create-student-modal-toggle').click(function () {
            $('#create-student-modal').modal('show');
        });


        jQuery(function () {
            tableConfig.ajax = {url: '{{route('ajax.students.records')}}'};
            initDataTable(tableConfig);
            validateForm();

            let formRequestHandler = new FormRequestHandler();
            formRequestHandler.busy_state = $('#create-student-notification-bar');
            formRequestHandler.ajaxRequest($('#student-create-form'), 'POST', (data) => {
                // $('.remove-avatar').trigger('click');
                $('.errorMessage').html('');
                $('#create-student-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.students.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                //TODO goto detail page
                swal("Success", "Student record saved successfully", "success").then(() => console.log(data));
            });

            let updateFormRequestHandler = new FormRequestHandler();
            updateFormRequestHandler.busy_state = $('#update-student-notification-bar');
            updateFormRequestHandler.ajaxRequest($('#student-update-form'), 'POST', (data) => {
                $('.errorMessage').html('');
                $('#edit-student-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.students.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                swal("Success", "Student record update successfully", "success");
            });

            doSearch("{{route('ajax.students.records')}}",initDataTable);
            Codebase.helpers(['select2', 'datepicker']);
            $('.select2-container').css('width', '100%');
        })
    </script>
@endsection