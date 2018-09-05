@extends('layouts.app')
@section('title') Student Reports @endsection
@section('student_reports') active @endsection
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

            #student_report-section, #record-header, #student_report-section * {
                visibility: visible !important;
            }

            #student_report-section {
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
            }

            #student_report-section .block-options {
                visibility: hidden;
            }

            #record-header{
                margin-bottom: 25px;
                padding-top: 40px;
                padding-bottom: 8px;

            }
        }

        .student_report-list {
            max-height: 420px;
            overflow-y: -webkit-paged-y;
        }

        .student_report-list::-webkit-scrollbar {
            width: 4px;
            height: 4px;
        }

        .student_report-list::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(25, 25, 25, 0.16);
            border-radius: 10px;
        }

        .student_report-list::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(9, 9, 9, 0.35);
        }

        .error {
            color: #ef5654;
        }

        #record-header{
            visibility: hidden;
            padding: 0;
            margin: 0;
        }
    </style>
@endsection
@section('content')
    <div class="bg-image" style="background-image: url('{{asset('assets/img/photos/photo15@2x.jpg')}}');">
        <div class="bg-black-op-75">
            <div class="content content-top content-full text-center">
                <div class="py-20">
                    <h1 class="h2 font-w700 text-white mb-10">Student Reports</h1>
                    <h2 class="h4 font-w400 text-white-op mb-0">Manage Student Reports</h2>
                </div>
            </div>
        </div>
    </div>
    @include('shared.breadcomb',['histories'=>['Dashboard','Student Reports']])
    <div class="content">
        <h2 class="content-heading">
            <strong> &nbsp;</strong>
            <span class="pull-right"></span>
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
                        <form action="{{route('ajax.student_reports.records')}}" method="get" id="doSearch">
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <div>
                                        {!! renderForm($form->department_id,[],true) !!}
                                    </div>
                                </div>
                                <div class="col-md-4 form-group">
                                    <div>
                                        {!! renderForm($form->students,['required'],true) !!}
                                    </div>
                                </div>
                                <div class="col-md-4 form-group">
                                    <label class="col-12 pl-0" for="example-daterange1">Date Range </label>
                                    <div class="input-daterange input-group" data-date-format="yyyy/mm/dd"
                                         data-week-start="1" data-autoclose="true" data-today-highlight="true">
                                        <input type="text"  class="form-control" id="date_from"
                                               name="date_from" placeholder="From" data-week-start="1"
                                               data-autoclose="true" data-today-highlight="true" />
                                        <div class="input-group-prepend input-group-append">
                                            <span class="input-group-text font-w600">to</span>
                                        </div>
                                        <input type="text" class="form-control" id="date_to"
                                               name="date_to" placeholder="To" data-week-start="1"
                                               data-autoclose="true" data-today-highlight="true" />
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
        <h2 class="content-heading">
            <span class="student-name">--</span>
            <span class="record-date-range pull-right">
                <span class="date-from"></span> - <span class="date-to"></span>
            </span>
        </h2>
        <div class="row">
            <div class="col-xl-12">

                <div class="block">
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
                        <div id="chart-record">
                            <h4 class="text-center text-muted">Kindly use the search above to filter student record</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block block-rounded" id="student-report-table">
            <div class="block-header block-header-default">
                <h3 class="block-title" style=""><i class="si si-list"></i> Student Attendance Records</h3>
                <div class="block-options">
                    <button type="button" class="btn-block-option" onclick="Codebase.helpers('print-page');">
                        <i class="si si-printer"></i> Print Record
                    </button>
                    <button type="button" class="btn-block-option" data-toggle="block-option"
                            data-action="content_toggle"><i class="si si-arrow-up"></i></button>
                </div>
            </div>
            <div class="block-content block-content-full" id="student_report-section">
                <h4 class="text-center text-muted">Kindly use the search above to filter student record</h4>
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

    <script src="{{asset('assets/js/plugins/bootstrap-wizard/jquery.bootstrap.wizard.js')}}"></script>
    <script src="{{asset('assets/js/plugins/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('assets/js/plugins/jquery-validation/additional-methods.min.js')}}"></script>

    <script src="{{asset('assets/js/plugins/sparkline/jquery.sparkline.min.js')}}"></script>
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

        jQuery(function () {

            Codebase.helpers(['select2', 'datepicker']);
            $('.select2-container').css('width', '100%');

            $('.sparkline').sparkline('html',{
                type: 'pie',
                width: '80px',
                height: '80px',
                sliceColors: ['#9ccc64','#fecb46', '#ef5350','#e6e6e6'],
                highlightLighten: 1.1,
                tooltipPrefix: '',
                tooltipSuffix: ' time(s)',
                tooltipFormat: '@{{prefix}}@{{value}}@{{suffix}}',
            });

            $('#doSearch').submit(function (e) {
                e.preventDefault();
                if ($(this).valid()) {
                    $('#student-report-table').addClass('block-mode-loading');
                    const studentField = $('#students');
                    // const departmentField = $('#department_id');

                    const date_fromField = $('#date_from').val();
                    const date_toField = $('#date_to').val();

                    // const department_id = departmentField.val();
                    const studentName = studentField.find("option:selected").text();
                    const student_id = studentField.val();


                    $('.student-name').text(studentName);
                    $('.date-from').text(date_fromField);
                    $('.date-to').text(date_toField);
                    const url = "{{route('ajax.student_reports.records')}}";

                    const date_range = (date_fromField && date_toField) ?
                        `/${date_fromField.split('/').join('-')}/${date_toField.split('/').join('-')}` : '';

                    $.get(`${url}/${student_id}${date_range}`,
                        function (resHTML) {
                        $('#student-report-table').removeClass('block-mode-loading');
                        $('#student_report-section').html(resHTML);
                    });

                    const reportUrl = "{{route('ajax.student_reports.visual.records')}}";
                    $.get(`${reportUrl}/${student_id}${date_range}`,
                        function (chartHTML) {
                        $('#chart-record').html(chartHTML);
                            $('.sparkline').sparkline('html',{
                                type: 'pie',
                                width: '80px',
                                height: '80px',
                                sliceColors: ['#9ccc64','#fecb46', '#ef5350','#e6e6e6'],
                                highlightLighten: 1.1,
                                tooltipPrefix: '',
                                tooltipSuffix: ' time(s)',
                                tooltipFormat: '@{{prefix}}@{{value}}@{{suffix}}',
                            });
                    })
                }

            })
        });

    </script>
@endsection