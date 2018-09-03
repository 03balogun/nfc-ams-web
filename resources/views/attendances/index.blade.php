@extends('layouts.app')
@section('title') TimeTables @endsection
@section('timetables') active @endsection
@section('additional-class')
    page-header-glass
@endsection
@section('page-css')
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2-bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/fullcalendar/fullcalendar.min.css')}}">
    <style>
        @media print {
            body * {
                visibility: hidden;
            }

            #timetable-section, #timetable-section * {
                visibility: visible;
            }

            #timetable-section {
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
            }

            #timetable-section .block-options {
                visibility: hidden;
            }
        }

    </style>
@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">TimeTables</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">Manage TimeTables</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','TimeTable']])
    <div class="content">
        <h2 class="content-heading">
            <strong> &nbsp;</strong>
            <span class="pull-right">
                <a class="btn btn-primary create-timetable-modal-toggle" title="Info!"
                   data-placement="top"
                   data-content="Add a new timetable to the system" data-toggle="popover" href="javascript:;">
                New TimeTable</a>
            </span>
        </h2>
        <div class="block block-themed">
            <div class="block-header bg-muted">
                <h3 class="block-title" style=""><i class="si si-magnifier"></i> Advance Search</h3>
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
                                        {!! renderForm($form->level,[],true) !!}
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
        <div class="block block-rounded " id="timetable-wrapper-section">
            <div class="block-header block-header-default">
                <h3 class="block-title" style=""><i class="si si-calendar"></i> Week View</h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" onclick="Codebase.helpers('print-page');">
                        <i class="si si-printer"></i> Print TimeTable
                    </button>
                    <button type="button" class="btn-block-option" data-toggle="block-option"
                            data-action="fullscreen_toggle"><i class="si si-size-fullscreen"></i></button>
                    <button type="button" class="btn-block-option" id="reload-table">
                        <i class="si si-refresh"></i>
                    </button>
                    <button type="button" class="btn-block-option" data-toggle="block-option"
                            data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                </div>
            </div>
            <div class="block-content block-content-full" id="timetable-section">
                <h5 class="text-center">Use the search tab above to represent data in week view. Search by Department and Level</h5>
            </div>
        </div>

        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title" style=""><i class="si si-list"></i> Time Table Records</h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option"
                            data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                </div>
            </div>
            <div class="block-content block-content-full">
                <table class="table table-bordered table-striped table-vcenter timetables-record-table">
                    <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Department</th>
                        <th>Level</th>
                        <th>Lecturer</th>
                        <th>Day</th>
                        <th>Duration</th>
                        <th class="text-center" style="width: 15%;"></th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>


    <div class="modal fade" id="create-timetable-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-timetable-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                <form action="{{route('timetables.store')}}" id="timetable-create-form"
                      class="js-validation-bootstrap" enctype="multipart/form-data" method="post">
                    {{csrf_field()}}
                    <div class="block block-themed block-transparent mb-0">
                        <div class="block-header bg-primary-dark">
                            <h3 class="block-title">CREATE TIMETABLE</h3>
                            <div class="block-options">
                                <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i class="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="text-center notification-bar" id="create-timetable-notification-bar">
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
                                                {!! renderForm($form->course_id) !!}
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
                                                {!! renderForm($form->day) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->start_time) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-3 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->end_time) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->note) !!}
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
    <div class="modal fade" id="edit-timetable-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-timetable-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" style="max-width: 1000px;" role="document">
            <div class="modal-content">
                {!! form_start($form,['method'=>'PUT','id'=>'timetable-update-form',
                'enctype'=>'multipart/form-data','class'=>'js-validation-bootstrap']) !!}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">EDIT TIMETABLE</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="update-timetable-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...</h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="row items-push">
                            <div class="col-xl-12">
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->course_id) !!}
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
                                            {!! renderForm($form->day) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-3 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->start_time) !!}
                                        </div>
                                    </div>
                                    <div class="col-md-3 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->end_time) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <div class="form-material">
                                            {!! renderForm($form->note) !!}
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
    <script src="{{asset('assets/js/plugins/select2/select2.full.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/sweetalert/sweetalert.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/moment/moment.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/fullcalendar/fullcalendar.min.js')}}"></script>
    <script>


        let tableConfig = {
            ajax:{url: '{{route('ajax.timetables.records')}}'},
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
                        tableConfig.ajax = {url: '{{route('ajax.timetables.records')}}'};
                        initDataTable(tableConfig);
                    }
                });

                editRecord('{{route('ajax.timetables.get')}}', function ({data}) {
                    $('#timetable-update-form').attr('action', `{{url('timetables/')}}/${data.id}`);
                    $.each(data, (key, value) => {
                        console.log(key);
                        $('#timetable-update-form').find(`#${key}`).val(value).trigger('change');
                    });
                    $('#edit-timetable-modal').modal('show');
                })
            },
            order:{column: "0", dir: "desc"},
            search:{regex:true},
            columns: [
                {data: "course_code"},
                {data: "course_title"},
                {data: "department"},
                {data: "level"},
                {data: "lecturer"},
                {data: "day"},
                {data: "duration"},
                {data: "action", orderable: false}
            ],
        };

        jQuery(function () {
            initDataTable(tableConfig);
            validateForm();
            $('.create-timetable-modal-toggle').click(function () {
                $('#create-timetable-modal').modal('show');
            });
            let formRequestHandler = new FormRequestHandler();
            formRequestHandler.busy_state = $('#create-timetable-notification-bar');
            formRequestHandler.ajaxRequest($('#timetable-create-form'), 'POST', (data) => {
                // $('.remove-avatar').trigger('click');
                $('.errorMessage').html('');
                $('#create-timetable-modal').modal('hide');
                swal("Success", "Record saved successfully", "success");
                initDataTable(tableConfig);
                //refresh table
            });

            let updateFormRequestHandler = new FormRequestHandler();
            updateFormRequestHandler.busy_state = $('#update-timetable-notification-bar');
            updateFormRequestHandler.ajaxRequest($('#timetable-update-form'), 'POST', (data) => {
                $('.errorMessage').html('');
                $('#edit-timetable-modal').modal('hide');
                swal("Success", "Record update successfully", "success");
                initDataTable(tableConfig);
                //refresh table
            });

            Codebase.helpers(['select2', 'datepicker']);
            $('.select2-container').css('width', '100%');
            // fetch_time_table();

            $('#reload-table').click(function () {
                $('#timetable-wrapper-section').addClass('block-mode-loading');
                fetch_time_table("", function () {
                    $('#timetable-wrapper-section').removeClass('block-mode-loading');
                })
            });
            searchTimeTable();
        });

        function fetch_time_table(query = "", callback = null) {
            $.get(`{{route('ajax.timetables.visual.records')}}/${query}`, function (htmlRes) {
                $('#timetable-section').html(htmlRes);
                if (callback) callback();
            });
        }

        function initDataTable(tableConfig) {
            jQuery(".timetables-record-table").dataTable(tableConfig);
        }

        function searchTimeTable() {
            $('#doSearch').submit(function (e) {
                e.preventDefault();
                $('#timetable-wrapper-section').addClass('block-mode-loading');
                const query = `${$('#department_id').val()}/${$('#level').val()}`;
                fetch_time_table(query, ()=>{
                    $('#timetable-wrapper-section').removeClass('block-mode-loading');
                })
            })
        }
    </script>
@endsection