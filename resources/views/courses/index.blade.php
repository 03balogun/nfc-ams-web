@extends('layouts.app')
@section('title') Courses @endsection
@section('courses') active @endsection
@section('additional-class')
    page-header-glass
@endsection
@section('page-css')
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/buttons.dataTables.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2-bootstrap.min.css')}}">
@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">Courses</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">Manage Courses</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Course']])
    <div class="content">
        <div class="row pull-right">
            <a class="btn btn-primary create-course-modal-toggle" title="Info!"
               data-placement="top"
               data-content="Add a new course to the system" data-toggle="popover" href="javascript:;">
                New Course
            </a>
        </div>

        <h2 class="content-heading">Records</h2>
        <div class="block block-rounded">
            <div class="block-content block-content-full">
                <table class="table table-bordered table-striped table-vcenter courses-record-table">
                    <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Title</th>
                        <th>Unit</th>
                        <th>Level</th>
                        <th>Lecturer</th>
                        <th>Department</th>
                        <th>Date Created</th>
                        <th class="text-center" style="width: 15%;"></th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>


    <div class="modal fade" id="create-course-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-course-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                <form action="{{route('courses.store')}}" id="course-create-form"
                      class="js-validation-bootstrap" enctype="multipart/form-data" method="post">
                    {{csrf_field()}}
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">CREATE COURSE</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center notification-bar" id="create-course-notification-bar">
                            <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...
                            </h4>
                        </div>
                        <div class="block-content">
                            <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                            <div class="row items-push">
                                <div class="col-xl-12">
                                    <div class="row">
                                        <div class="col-md-4 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->code) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-8 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->title) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->unit) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->level) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->department_id) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->lecturer_id) !!}
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

    <div class="modal fade" id="edit-course-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-course-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                {!! form_start($form,['method'=>'PUT','id'=>'course-update-form',
                'enctype'=>'multipart/form-data','class'=>'js-validation-bootstrap']) !!}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">EDIT COURSE</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="update-course-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...</h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->code) !!}
                                    </div>
                                </div>
                                <div class="col-md-8 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->title) !!}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->unit) !!}
                                    </div>
                                </div>
                                <div class="col-md-6 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->level) !!}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->department_id) !!}
                                    </div>
                                </div>
                                <div class="col-md-6 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->lecturer_id) !!}
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-alt-danger" data-dismiss="modal">Close</button>
                    <button class="btn btn-lg btn-primary">
                        Save
                        <i class="fa fa-save"></i>
                    </button>
                </div>
                {!! form_end($form,false) !!}
            </div>
        </div>
    </div>
@endsection
@section('page-js')
    <script src="{{asset('assets/js/plugins/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/select2/select2.full.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/sweetalert/sweetalert.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/dataTables.buttons.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/buttons.colVis.min.js')}}"></script>
    <script>

        let tableConfig = {
            processing: true,
            serverSide: true,
            destroy: true,
            pagingType: "full_numbers",
            stateSave: true,
            buttons: [
                'colvis'
            ],
            pageLength: 10,
            lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
            autoWidth: !1,
            drawCallback: function () {
                deleteRecord('{{csrf_token()}}', function (isDeleted) {
                    if (isDeleted) {
                        tableConfig.ajax = {url: '{{route('ajax.courses.records')}}'};
                        initDataTable(tableConfig);
                    }
                });

                editRecord('{{route('ajax.courses.get')}}', function ({data}) {
                    $('#course-update-form').attr('action', `{{url('courses/')}}/${data.id}`);
                    $.each(data, (key, value) => {
                        $('#course-update-form').find(`#${key}`).val(value).trigger('change');
                    });
                    $('#edit-course-modal').modal('show');
                })
            },
            order:{column: "0", dir: "desc"},
            search:{regex:true},
            columns: [
                {data: "code"},
                {data: "title"},
                {data: "unit",visible: false},
                {data: "level"},
                {data: "lecturer_id"},
                {data: "department_id"},
                {data: "created_at",},
                {data: "action", orderable: false}
            ],
        };

        function initDataTable(tableConfig) {
            jQuery(".courses-record-table").dataTable(tableConfig);
        }

        $('.create-course-modal-toggle').click(function () {
            $('#create-course-modal').modal('show');
        });


        jQuery(function () {
            tableConfig.ajax = {url: '{{route('ajax.courses.records')}}'};
            Codebase.helpers(['select2', 'datepicker']);
            $('.select2-container').css('width', '100%');

            initDataTable(tableConfig);
            validateForm();

            let formRequestHandler = new FormRequestHandler();
            formRequestHandler.busy_state = $('#create-course-notification-bar');
            formRequestHandler.ajaxRequest($('#course-create-form'), 'POST', (data) => {
                // $('.remove-avatar').trigger('click');
                $('.errorMessage').html('');
                $('#create-course-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.courses.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                swal("Success", "Course record saved successfully", "success");
            });

            let updateFormRequestHandler = new FormRequestHandler();
            updateFormRequestHandler.busy_state = $('#update-course-notification-bar');
            updateFormRequestHandler.ajaxRequest($('#course-update-form'), 'POST', (data) => {
                $('.errorMessage').html('');
                $('#edit-course-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.courses.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                swal("Success", "Course record update successfully", "success");
            });
        })
    </script>
@endsection