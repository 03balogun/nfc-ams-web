<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [
    'as' => 'login',
    'uses' => 'Auth\LoginController@index'
]);

Route::get('/login', [
    'uses' => 'Auth\LoginController@index'
]);

Route::post('/login', [
    'uses' => 'Auth\LoginController@signIn',
    'as' => 'login.post'
]);

Route::group(['middleware' => ['SentinelAuth']], function () {

    Route::get('/logout', [
        'uses' => 'Auth\LoginController@logOut',
        'as' => 'logout'
    ]);

    Route::resource('dashboard', 'DashboardController');


    //------- DEPARTMENTS ROUTE ------------------//
    Route::resource('departments', 'DepartmentsController');
    Route::get('/ajax/departments/records', [
        'uses' => 'DataTablesController@departmentsRecords',
        'as' => 'ajax.departments.records'
    ]);

    Route::get('/ajax/departments/get/{id?}', [
        'uses' => 'DepartmentsController@getDepartment',
        'as' => 'ajax.departments.get'
    ]);
    //------- DEPARTMENTS ROUTE ENDS -------------//

    //------- STUDENTS ROUTE ------------------//
    Route::resource('students', 'StudentsController');
    Route::get('/ajax/students/records', [
        'uses' => 'DataTablesController@studentsRecords',
        'as' => 'ajax.students.records'
    ]);

    Route::get('/ajax/students/get/{id?}', [
        'uses' => 'StudentsController@getStudent',
        'as' => 'ajax.students.get'
    ]);
    //------- STUDENTS ROUTE ENDS -------------//


    //-------LECTURERS ROUTE ------------------//

    Route::resource('lecturers', 'LecturersController');
    Route::get('/ajax/lecturers/records', [
        'uses' => 'DataTablesController@lecturersRecords',
        'as' => 'ajax.lecturers.records'
    ]);

    Route::get('/ajax/lecturers/get/{id?}', [
        'uses' => 'LecturersController@getLecturer',
        'as' => 'ajax.lecturers.get'
    ]);

    //-------LECTURERS ROUTE ENDS -------------//

    //-------COURSES ROUTE ------------------//
    Route::resource('courses', 'CoursesController');
    Route::get('/ajax/courses/records', [
        'uses' => 'DataTablesController@coursesRecords',
        'as' => 'ajax.courses.records'
    ]);

    Route::get('/ajax/courses/students/{id?}', [
        'uses' => 'CoursesController@getCourseStudent',
        'as' => 'ajax.courses.get.students'
    ]);

    Route::get('/ajax/courses/get/{id?}', [
        'uses' => 'CoursesController@getCourse',
        'as' => 'ajax.courses.get'
    ]);
    //-------COURSES ROUTE ENDS -------------//

    //-------TIMETABLE ROUTE ------------------//
    Route::resource('timetables', 'TimeTablesController');

    Route::get('/ajax/timetables/visual/records/{department_id?}/{level?}', [
        'uses' => 'TimeTablesController@timetablesRecords',
        'as' => 'ajax.timetables.visual.records'
    ]);

    Route::get('/ajax/timetables/records', [
        'uses' => 'DataTablesController@timeTableRecords',
        'as' => 'ajax.timetables.records'
    ]);

    Route::get('/ajax/timetables/get/{id?}', [
        'uses' => 'TimeTablesController@getTimeTable',
        'as' => 'ajax.timetables.get'
    ]);
    //-------TIMETABLE ROUTE ENDS -------------//

    //-------ATTENDANCES ROUTE ------------------//
    Route::resource('attendances', 'AttendancesController');

    Route::get('/ajax/attendances/visual/records/{department_id?}/{level?}', [
        'uses' => 'AttendancesController@attendancesRecords',
        'as' => 'ajax.attendances.visual.records'
    ]);

    Route::get('/ajax/attendances/records', [
        'uses' => 'DataTablesController@attendanceRecords',
        'as' => 'ajax.attendances.records'
    ]);

    Route::get('/ajax/attendances/chart-records/{department?}/{course?}/{date?}', [
        'uses' => 'AttendancesController@chartRecords',
        'as' => 'ajax.attendances.chart-records'
    ]);

    Route::get('/ajax/attendances/get/{id?}', [
        'uses' => 'AttendancesController@getTimeTable',
        'as' => 'ajax.attendances.get'
    ]);
//-------ATTENDANCES ROUTE ENDS -------------//

//-------STUDENT REPORT ROUTE ------------------//
    Route::resource('student_reports', 'StudentReportsController');

    Route::get('/ajax/student_reports/visual/records/{student?}/{date_from?}/{date_to?}', [
        'uses' => 'StudentReportsController@student_reportsVisual',
        'as' => 'ajax.student_reports.visual.records'
    ]);

    Route::get('/ajax/student_reports/records/{student?}/{date_from?}/{date_to?}', [
        'uses' => 'StudentReportsController@student_reportRecords',
        'as' => 'ajax.student_reports.records'
    ]);

    Route::get('/ajax/student_reports/chart-records/{department?}/{course?}/{date?}', [
        'uses' => 'StudentReportsController@chartRecords',
        'as' => 'ajax.student_reports.chart-records'
    ]);

    Route::get('/ajax/student_reports/get/{id?}', [
        'uses' => 'StudentReportsController@getTimeTable',
        'as' => 'ajax.student_reports.get'
    ]);
//-------STUDENT REPORT ROUTE ENDS -------------//


});