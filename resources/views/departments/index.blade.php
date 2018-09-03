@extends('layouts.app')
@section('title') Departments @endsection
@section('departments') active @endsection
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
                    <h1 class="h2 font-w700 text-white mb-10">Departments</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">Manage Departments</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Department']])
    <div class="content">
        <div class="row pull-right">
            <a class="btn btn-primary create-department-modal-toggle" title="Info!"
               data-placement="top"
               data-content="Add a new department to the system" data-toggle="popover" href="javascript:;">
                New Department
            </a>
        </div>

        <h2 class="content-heading">Records</h2>
        <div class="block block-rounded">
            <div class="block-content block-content-full">
                <p>
                    <small class="text-danger">Kindly note that deleting a department will delete all his related records i.e lecturers, courses</small>
                </p>
                <table class="table table-bordered table-striped table-vcenter departments-record-table">
                    <thead>
                    <tr>
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


    <div class="modal fade" id="create-department-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-department-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                <form action="{{route('departments.store')}}" id="department-create-form"
                      class="js-validation-bootstrap" enctype="multipart/form-data" method="post">
                    {{csrf_field()}}
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">CREATE DEPARTMENT</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center notification-bar" id="create-department-notification-bar">
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

    <div class="modal fade" id="edit-department-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-department-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                {!! form_start($form,['method'=>'PUT','id'=>'department-update-form',
                'enctype'=>'multipart/form-data','class'=>'js-validation-bootstrap']) !!}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">EDIT DEPARTMENT</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="update-department-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...</h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="row items-push">
                            <div class="col-xl-12">
                                <div class="row">
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
                {!! form_end($form) !!}
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
                        tableConfig.ajax = {url: '{{route('ajax.departments.records')}}'};
                        initDataTable(tableConfig);
                    }
                });

                editRecord('{{route('ajax.departments.get')}}', function ({data}) {
                    $('#department-update-form').attr('action', `{{url('departments/')}}/${data.id}`);
                    $.each(data, (key, value) => {
                        $('#department-update-form').find(`#${key}`).val(value).trigger('change');
                    });
                    $('#edit-department-modal').modal('show');
                })
            },
            order:{column: "0", dir: "desc"},
            search:{regex:true},
            columns: [
                {data: "name"},
                {data: "created_at",},
                {data: "action", orderable: false}
            ],
        };

        function initDataTable(tableConfig) {
            jQuery(".departments-record-table").dataTable(tableConfig);
        }

        $('.create-department-modal-toggle').click(function () {
            $('#create-department-modal').modal('show');
        });


        jQuery(function () {
            tableConfig.ajax = {url: '{{route('ajax.departments.records')}}'};
            initDataTable(tableConfig);
            validateForm();

            let formRequestHandler = new FormRequestHandler();
            formRequestHandler.busy_state = $('#create-department-notification-bar');
            formRequestHandler.ajaxRequest($('#department-create-form'), 'POST', (data) => {
                // $('.remove-avatar').trigger('click');
                $('.errorMessage').html('');
                $('#create-department-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.departments.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                swal("Success", "Lecturer record saved successfully", "success");
            });

            let updateFormRequestHandler = new FormRequestHandler();
            updateFormRequestHandler.busy_state = $('#update-department-notification-bar');
            updateFormRequestHandler.ajaxRequest($('#department-update-form'), 'POST', (data) => {
                $('.errorMessage').html('');
                $('#edit-department-modal').modal('hide');
                tableConfig.ajax = {url: '{{route('ajax.departments.records')}}'};
                initDataTable(tableConfig);
                //refresh table
                swal("Success", "Lecturer record update successfully", "success");
            });
        })
    </script>
@endsection