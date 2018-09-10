<?php

namespace App\Http\Controllers;

use App\AMS\Ams;
use App\AMS\Modules\Students\Validators\ValidateUpdateStudent;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    protected $ams;

    public function __construct(Ams $ams)
    {
        $this->ams = $ams;
    }

    public function getStudent($by, $value, $device_id = null)
    {

        try{
            if ($by == 'registration_num') $value = str_replace('-','/',$value);
            $res = $this->ams->students()->get($value,$by,['*']);
            if ($res->status && $res->data){
                if ($device_id)$res->data->update(['device_id'=>$device_id]);
                //get student details and courses
                $courses = $this->ams->students()->model
                    ->select(['course.id', 'course.title', 'course.code'])
                    ->join('student_courses', 'students.id', '=', 'student_courses.student_id')
                    ->leftJoin('courses AS course', 'student_courses.course_id', '=', 'course.id')
                    ->where('students.id', $res->data->id)
                    ->get();
                $res->data->courses = $courses;
            }

            return response()->json($res);
        }catch (\Exception $e){
            return response()->json(systemResponse()
                ->reason($e->getMessage()))->setStatusCode(500);
        }

    }

    public function getCourses($by = null, $value = null)
    {
        try{
            if ($by && $value){
                $res = $this->ams->courses()->get($value,$by);
            }else{
                $res = $this->ams->courses()->getRecords(['id','code','title']);
            }
            return response()->json($res);
        }catch (\Exception $e){
            return response()->json(systemResponse()
                ->reason("Whoops! Unexpected error happened"))->setStatusCode(500);
        }

    }

    public function getDepartments($by = null, $value = null)
    {
        try {
            if ($by && $value) {
                $responses = $this->ams->departments()->get($value, $by);
            } else {
                $count = 1000;
                $responses = $this->ams->departments()->getDepartmentsWithCourses()->data;
                foreach ($responses as $index => $response){
                    $response->id = $count++;
                    foreach ($response->courses as $item => $course){
                        $course['name'] = $course->name.' - '. $course->code;
                        $responses[$index]['courses'] = $course;
                    }
                }
                return response()->json($responses);
            }
            return response()->json($responses);
        }catch (\Exception $e){
            return response()->json(systemResponse()
                ->reason($e->getMessage()))->setStatusCode(500);
        }
    }

    /**
     * @param Request $request
     */
    public function updateStudentCourses(ValidateUpdateStudent $request, $id){
        try{
            $data = $request->all();
            if (isset($data['registration_num'])){
                $check =
                    $this->ams->students()->get($data['registration_num'],'registration_num')->data;
                if (!$check)return response()->json(systemResponse()->status(false));
            }
            if (!isset($data['courses']) && count(json_decode($data['courses'])) < 1){
                return response()->json(systemResponse()->status(false)->reason('Invalid Course Data'));
            }
            $response = (new StudentsController($this->ams))->update($request,$id);

            return response()->json($response->original);

        }catch (\Exception $e){
            return response()->json(systemResponse()
                ->reason($e->getMessage()))->setStatusCode(500);
        }
    }
}
