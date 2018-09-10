<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/students/{by}/{value}/{device_id?}',[
    'uses'=>'ApiController@getStudent'
]);

Route::put('/students/{id}',[
    'uses'=>'ApiController@updateStudentCourses'
]);

Route::get('/courses',[
    'uses'=>'ApiController@getCourses'
]);

Route::get('/departments',[
    'uses'=>'ApiController@getDepartments'
]);