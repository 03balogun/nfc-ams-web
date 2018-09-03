@extends('layouts.app')
@section('title') Lecturers @endsection
@section('lecturers') active @endsection
@section('additional-class')
    page-header-glass
@endsection
@section('page-css')
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.css')}}">
@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">Lecturers</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">Manage Lecturers</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Lecturer']])
    <div class="content">
        <div class="row pull-right">
            <a class="btn btn-primary create-lecturer-modal-toggle" title="Info!"
               data-placement="top"
               data-content="Add a new lecturer to the system" data-toggle="popover" href="javascript:;">
                New Lecturer
            </a>
        </div>

        <h2 class="content-heading">Records
        </h2>
        <div class="block block-rounded">
            <div class="block-content block-content-full">
                <p>
                    <small class="text-danger">Kindly note that deleting a lecturer will delete all his related records i.e courses</small>
                </p>
                <table class="table table-bordered table-striped table-vcenter lecturers-record-table">
                    <thead>
                    <tr>
                        <th>Lecturer ID</th>
                        <th>Name</th>
                        <th>Date Created</th>
                        <th class="text-center" style="width: 15%;"></th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>


    <div class="modal fade" id="create-lecturer-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-lecturer-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                <form action="{{route('lecturers.store')}}" id="lecturer-create-form"
                      class="js-validation-bootstrap" enctype="multipart/form-data" method="post">
                    {{csrf_field()}}
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">CREATE LECTURER</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center notification-bar" id="create-lecturer-notification-bar">
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
                                                {!! renderForm($form->lecturer_id) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->name) !!}
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

    <div class="modal fade" id="edit-lecturer-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-lecturer-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                {!! form_start($form,['method'=>'PUT','id'=>'lecturer-update-form',
                'enctype'=>'multipart/form-data','class'=>'js-validation-bootstrap']) !!}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">EDIT LECTURER</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="update-lecturer-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...</h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->lecturer_id) !!}
                                    </div>
                                </div>
                                <div class="col-md-6 form-group">
                                    <div class="form-material">
                                        {!! renderForm($form->name) !!}
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
    <script src="{{asset('assets/js/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/sweetalert/sweetalert.min.js')}}"></script>

    <script>

        let tableConfig = {
            processing: true,
            serverSide: true,
            destroy: true,
            pagingType: "full_numbers",
            columnDefs: [
                // {targets: [1, 2], visible: false}
            ],
            pageLength: 10,
            lengthMenu: [[5, 8, 15, 20], [5, 8, 15, 20]],
            autoWidth: !1,
            drawCallback: function () {
                deleteRecord('{{csrf_token()}}', function (isDeleted) {
                    if (isDeleted) {
                        tableConfig.ajax = {url: '{{route('ajax.lecturers.records')}}'};
                        initDataTable(tableConfig);
                    }
                });

                editRecord('{{route('ajax.lecturers.get')}}', function ({data}) {
                    $('#lecturer-update-form').attr('action', `{{url('lecturers/')}}/${data.id}`);
                    $.each(data, (key, value) => {
                        $('#lecturer-update-form').find(`#${key}`).val(value).trigger('change');
                    });
                    $('#edit-lecturer-modal').modal('show');
                })
            },
            order:{column: "0", dir: "desc"},
            search:{regex:true},
            columns: [
                {data: "lecturer_id"},
                {data: "name"},
                {data: "created_at",},
                {data: "action", orderable: false}
            ],
        };

        function initDataTable(tableConfig) {
            jQuery(".lecturers-record-table").DataTable(tableConfig);
        }

        $('.create-lecturer-modal-toggle').click(function () {
            $('#create-lecturer-modal').modal('show');
        });


        jQuery(function () {
            tableConfig.ajax = {url: '{{route('ajax.lecturers.records')}}'};
            initDataTable(tableConfig);
            validateForm();

            let formRequestHandler = new FormRequestHandler();
            formRequestHandler.busy_state = $('#create-lecturer-notification-bar');
            formRequestHandler.ajaxRequest($('#lecturer-create-form'), 'POST', (data) => {
                // $('.remove-avatar').trigger('click');
                $('.errorMessage').html('');
                $('#create-lecturer-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.lecturers.records')}}'};
                initDataTable(tableConfig);
                swal("Success", "Lecturer record saved successfully", "success");
            });

            let updateFormRequestHandler = new FormRequestHandler();
            updateFormRequestHandler.busy_state = $('#update-lecturer-notification-bar');
            updateFormRequestHandler.ajaxRequest($('#lecturer-update-form'), 'POST', (data) => {
                $('.errorMessage').html('');
                $('#edit-lecturer-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.lecturers.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                swal("Success", "Lecturer record update successfully", "success");
            });
        })
    </script>
@endsection