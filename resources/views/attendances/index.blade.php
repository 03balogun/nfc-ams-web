@extends('layouts.app')
@section('title') Attendances @endsection
@section('attendances') active @endsection
@section('additional-class')
    page-header-glass
@endsection
@section('page-css')
    <link rel="stylesheet" href="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/select2/select2-bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/js/plugins/fullcalendar/fullcalendar.min.css')}}">
    <style>
        @media print {
            body * {
                visibility: hidden;
            }

            #attendance-section, #attendance-section * {
                visibility: visible;
            }

            #attendance-section {
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
            }

            #attendance-section .block-options {
                visibility: hidden;
            }
        }

        .attendance-list {
            max-height: 420px;
            overflow-y: -webkit-paged-y;
        }

        .attendance-list::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }

        .attendance-list::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(25, 25, 25, 0.16);
            border-radius: 10px;
        }

        .attendance-list::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(9, 9, 9, 0.35);
        }

        .error {
            color: #ef5654;
        }
    </style>
@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">Attendances</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">Manage Attendances</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Attendance']])
    <div class="content">
        <h2 class="content-heading">
            <strong> &nbsp;</strong>
            <span class="pull-right">
                <a class="btn btn-primary create-attendance-modal-toggle" title="Info!"
                   data-placement="top"
                   data-content="Add a new attendance to the system" data-toggle="popover" href="javascript:;">
                Take Attendance</a>
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
                <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>
                <div class="row items-push">
                    <div class="col-xl-12">
                        <form action="{{route('ajax.students.records')}}" method="get" id="doSearch">
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <div>
                                        {!! renderForm($form->department_id,['name'=>'department','id'=>'department'],true) !!}
                                    </div>
                                </div>
                                <div class="col-md-4 form-group">
                                    <div>
                                        {!! renderForm($form->course_id,['name'=>'course','id'=>'course'],true) !!}
                                    </div>
                                </div>
                                <div class="col-md-4 form-group">
                                    <div>
                                        {!! renderForm($form->date,['name'=>'attendance_date','id'=>'attendance_date'],true) !!}
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

        <div class="row">
            <div class="col-xl-12">
                <div class="block block-mode-hidden">
                    <div class="block-header block-header-default">
                        <h3 class="block-title"><i class="si si-pie-chart"></i> Chart Representation Of Data</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-toggle="block-option"
                                    data-action="state_toggle" data-action-mode="demo">
                                <i class="si si-refresh"></i>
                            </button>
                            <button type="button" class="btn-block-option" data-toggle="block-option"
                                    data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                        </div>
                    </div>
                    <div class="block-content block-content-full text-center">
                        <canvas class="js-chartjs-pie"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="block block-rounded">
            <div class="block-header block-header-default">
                <h3 class="block-title" style=""><i class="si si-list"></i> Attendance Records</h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" data-toggle="block-option"
                            data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                </div>
            </div>
            <div class="block-content block-content-full">
                <table class="table table-bordered table-striped table-vcenter attendances-record-table">
                    <thead>
                    <tr>
                        <th>Lecturer</th>
                        <th>Student</th>
                        <th>Status</th>
                        <th>Note</th>
                        <th class="text-center" style="width: 15%;"></th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="modal fade" id="create-attendance-modal" tabindex="-1" role="dialog"
         aria-labelledby="create-attendance-modal" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-slideleft" role="document">
            <div class="modal-content">
                {{--<form action="{{route('attendances.store')}}" id="attendance-create-form"--}}
                {{--class="js-validation-bootstrap" enctype="multipart/form-data" method="post">--}}
                {{csrf_field()}}
                <div class="block block-themed block-transparent mb-0">
                    <div class="block-header bg-primary-dark">
                        <h3 class="block-title">Take Attendance</h3>
                        <div class="block-options">
                            <button type="button" class="btn-block-option" data-dismiss="modal" aria-label="Close">
                                <i class="si si-close"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center notification-bar" id="create-attendance-notification-bar">
                        <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record, please wait...
                        </h4>
                    </div>
                    <div class="block-content">
                        <p>NOTE: Fields mark with <span class="text-danger">*</span> are required.</p>

                        <div class="js-wizard-validation-material block">
                            <ul class="nav nav-tabs nav-tabs-alt nav-fill" role="tablist">
                                <li class="nav-item" data-ref="firstTab">
                                    <a class="nav-link active" data-wizard="prev"
                                       href="#wizard-validation-material-step1"
                                       data-toggle="tab">1. Details</a>
                                </li>
                                <li class="nav-item" data-ref="lastTab">
                                    <a class="nav-link" data-wizard="next" href="#wizard-validation-material-step2"
                                       data-toggle="tab">2.
                                        Student Attendance</a>
                                </li>
                            </ul>
                            <form class="js-wizard-validation-material-form"
                                  action="{{route('attendances.store')}}"
                                  id="attendance-create-form"
                                  method="post" novalidate="novalidate">
                                {{csrf_field()}}
                                <div class="block-content block-content-full tab-content" style="min-height: 267px;">
                                    <div class="tab-pane active" id="wizard-validation-material-step1" role="tabpanel">
                                        <div class="col-md-12 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->department_id,['name'=>'department_id','id'=>'department_id']) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->course_id,['name'=>'course_id','id'=>'course_id']) !!}
                                            </div>
                                        </div>
                                        <div class="col-md-12 form-group">
                                            <div class="form-material">
                                                {!! renderForm($form->date,['name'=>'date','id'=>'date']) !!}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="wizard-validation-material-step2" role="tabpanel">
                                        <div class="text-center notification-bar"
                                             id="update-attendance-notification-bar">
                                            <h4 class="text-white"><i class="fa fa-spinner fa-spin"></i> Saving record,
                                                please wait...</h4>
                                        </div>
                                        <p>
                                            {{--<strong class="font-size-h5">Marking Guide:</strong> --}}
                                        </p>
                                        <div class="row">
                                            <div class="col-md-6" style="border-right: 1px solid #cccccc47;
                                            min-height: 200px;">
                                                <div class="form-group">
                                                    <div class="form-material">
                                                        {!! renderForm($form->students) !!}
                                                    </div>
                                                </div>
                                                <div class="form-group mb-15">
                                                    <strong class="text-muted">Status</strong><br/>
                                                    <label class="css-control css-control-primary css-radio">
                                                        <input type="radio" class="css-control-input" value="1"
                                                               name="status">
                                                        <span class="css-control-indicator"></span> P
                                                    </label>
                                                    <label class="css-control css-control-primary css-radio">
                                                        <input type="radio" class="css-control-input" value="2"
                                                               name="status">
                                                        <span class="css-control-indicator"></span> L
                                                    </label>
                                                    <label class="css-control css-control-primary css-radio">
                                                        <input type="radio" class="css-control-input" value="3"
                                                               name="status">
                                                        <span class="css-control-indicator"></span> A,E
                                                    </label>
                                                    <label class="css-control css-control-primary css-radio">
                                                        <input type="radio" class="css-control-input" value="4"
                                                               name="status">
                                                        <span class="css-control-indicator"></span> A,U
                                                    </label>
                                                    <br/>
                                                    <small class="text-danger">P = Present, L = Late, AE =
                                                        Absent,Excused, AU = Absent,Unexcused
                                                    </small>
                                                </div>
                                                <div class="form-group">
                                                    <div class="form-material">
                                                        {!! renderForm($form->note) !!}
                                                        <input type="hidden" id="attendance-record"
                                                               name="attendance-record">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <button class="btn btn-sm btn-danger btn-block" type="button"
                                                            id="mark-btn">Mark Student
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-6 attendance-list">
                                                <div id="initial-message" style="padding:10%;">
                                                    <strong style="font-size:20px;">
                                                        Marked student appears here
                                                    </strong>
                                                </div>
                                                <ul class="list-group push" style="display: none;" id="student-list">

                                                </ul>
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
                                <div class="block-content block-content-sm block-content-full bg-body-light">
                                    <div class="row">
                                        <div class="col-6">
                                            <button type="button" class="btn btn-alt-secondary" data-wizard="prev">
                                                <i class="fa fa-angle-left mr-5"></i> Previous
                                            </button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <button type="button" class="btn btn-alt-secondary" data-wizard="next">
                                                Next <i class="fa fa-angle-right ml-5"></i>
                                            </button>
                                            <button type="submit" style="display: none;"
                                                    class="btn btn-primary wizard-submit-btn" id="form-submit-btn">
                                                <i class="fa fa-check mr-5"></i> Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {{--<div class="modal-footer">--}}
                {{--<button type="button" class="btn btn-alt-danger" data-dismiss="modal">Close</button>--}}
                {{--<button class="btn btn-lg btn-primary">--}}
                {{--Save--}}
                {{--<i class="fa fa-save"></i>--}}
                {{--</button>--}}
                {{--</div>--}}
                {{--</form>--}}
            </div>
        </div>
    </div>
@endsection
@section('page-js')
    <script src="{{asset('assets/js/plugins/select2/select2.full.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/jquery.dataTables.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/datatables/dataTables.bootstrap4.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/sweetalert/sweetalert.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/moment/moment.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/fullcalendar/fullcalendar.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/chartjs/Chart.bundle.min.js')}}"></script>

    <script src="{{asset('assets/js/plugins/bootstrap-wizard/jquery.bootstrap.wizard.js')}}"></script>
    <script src="{{asset('assets/js/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/jquery-validation/additional-methods.min.js')}}"></script>
    <script src="{{asset('js/attendance_wizard.js')}}"></script>
    <script>
        jQuery("#doSearch").validate({
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
        let attendances = [];
        const statusVal = {
            1: 'P',
            2: 'L',
            3: 'A,E',
            4: 'A,U'
        };

        let tableConfig = {
            ajax: {url: '{{route('ajax.attendances.records')}}'},
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
                        tableConfig.ajax = {url: '{{route('ajax.attendances.records')}}'};
                        initDataTable(tableConfig);
                    }
                });

                editRecord('{{route('ajax.attendances.get')}}', function ({data}) {
                    $('#attendance-update-form').attr('action', `{{url('attendances/')}}/${data.id}`);
                    $.each(data, (key, value) => {
                        console.log(key);
                        $('#attendance-update-form').find(`#${key}`).val(value).trigger('change');
                    });
                    $('#edit-attendance-modal').modal('show');
                })
            },
            order: {column: "0", dir: "desc"},
            search: {regex: true},
            columns: [
                {data: "lecturer"},
                {data: "student"},
                {data: "status"},
                {data: "note"},
                {data: "action", orderable: false}
            ],
        };

        jQuery(function () {
            // initDataTable(tableConfig);
            // validateForm();
            $('.create-attendance-modal-toggle').click(function () {
                $('#create-attendance-modal').modal('show');
            });
            let formRequestHandler = new FormRequestHandler();
            formRequestHandler.busy_state = $('#create-attendance-notification-bar');
            formRequestHandler.ajaxRequest($('#attendance-create-form'), 'POST', (data) => {
                // $('.remove-avatar').trigger('click');
                $('.errorMessage').html('');
                $('#create-attendance-modal').modal('hide');
                swal("Success", "Record saved successfully", "success");
                attendances.length = 0;
                $('#initial-message').show();
                $('#student-list').hide();
                $('li[id*=item_]').remove();
                $('button[data-wizard="prev"]').trigger('click');
                // initDataTable(tableConfig);
                //refresh table
            });

            let updateFormRequestHandler = new FormRequestHandler();
            updateFormRequestHandler.busy_state = $('#update-attendance-notification-bar');
            updateFormRequestHandler.ajaxRequest($('#attendance-update-form'), 'POST', (data) => {
                $('.errorMessage').html('');
                $('#edit-attendance-modal').modal('hide');
                swal("Success", "Record update successfully", "success");
                // initDataTable(tableConfig);
                //refresh table
            });

            Codebase.helpers(['select2', 'datepicker']);
            $('.select2-container').css('width', '100%');

            $('#reload-table').click(function () {
                $('#attendance-wrapper-section').addClass('block-mode-loading');
            });
            markAttendance();
            initChart();
            initDataTable(tableConfig);
            doSearch("{{route('ajax.attendances.records')}}", function (tableConfig) {
                initDataTable(tableConfig);
                const url = "{{url('/ajax/attendances/chart-records/')}}";
                $.get(`${url}/${$('#department_id').val()}/${$('#course_id').val()}/${$('#date').val()}`, function (data) {
                    initChart(data);
                });
            });
        });

        function initDataTable(tableConfig) {
            jQuery(".attendances-record-table").dataTable(tableConfig);
        }

        function markAttendance() {
            $('#mark-btn').click(function () {
                const studentField = $('#students');
                const noteField = $('#attendance_note');

                let dept = $('#department_id').val();
                let course = $('#course_id').val();
                let date = $('#date').val();
                let student = studentField.val();
                let studentName = studentField.find("option:selected").text();
                let status = $('input[name="status"]:checked').val();
                let note = $('#attendance_note').val();

                const errMsg = $('.errorMessage');
                if (!(dept !== '' && course !== '' && date !== '' && student !== '' && status !== undefined)) {
                    errMsg.html(`
                    <strong class="text-danger">Kindly make sure all required fields are selected.</strong>`);
                    return;
                }
                errMsg.html('');

                let attObj = {
                    dept,
                    course,
                    student,
                    status,
                    note,
                    date,
                };

                let checkIfStudentAlreadyMarked = attendances
                    .filter(obj => obj.student === student).length;
                if (checkIfStudentAlreadyMarked) {
                    errMsg.html(`
                    <strong class="text-danger">This student has already been marked, kindly remove<br/> student from marked list if you would to make update.</strong>`);
                    return;
                }

                attendances.push(attObj);
                $('#attendance-record').val(JSON.stringify(attendances));

                let objIndex = attendances.indexOf(attObj);
                let htmlList = `<li id="item_${objIndex}"
                                class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="badge badge-pill badge-success">${statusVal[status]}</span>
                                ${studentName}
                                <button class="btn btn-sm btn-danger removeStudentFromAttendance_${objIndex}"
                                data-ref="${objIndex}"
                                 type="button" title="remove"><i class="si si-trash"></i></button>
                                </li>`;
                $('#initial-message').hide();
                let studentList = $('#student-list');
                studentList.append(htmlList);
                studentList.show();
                studentField.val("").trigger('change');
                noteField.val("");
                $(`.removeStudentFromAttendance_${objIndex}`).click(function () {
                    const data_ref = $(this).attr('data-ref');
                    attendances.splice(data_ref, 1);
                    $(`#item_${data_ref}`).remove();
                    if (attendances.length < 1) {
                        $('#initial-message').show();
                        $('#student-list').hide();
                    }
                });

            });

        }

        function initChart(data = [0, 0, 0, 0]) {
            let chartPolarPieDonutData = {
                labels: [
                    'P - Present',
                    'L - Late',
                    'A,E - Absent Excused',
                    'A,U - Absent Unexcused'
                ],
                datasets: [{
                    data,
                    backgroundColor: [
                        'rgba(156,204,101,1)',
                        'rgba(255,202,40,1)',
                        'rgba(239,83,80,1)'
                    ],
                    hoverBackgroundColor: [
                        'rgba(156,204,101,.5)',
                        'rgba(255,202,40,.5)',
                        'rgba(239,83,80,.5)'
                    ]
                }]
            };
            let chartPieCon = $('.js-chartjs-pie');
            if (chartPieCon.length) {
                new Chart(chartPieCon, {type: 'pie', data: chartPolarPieDonutData});
            }
        }
    </script>
@endsection