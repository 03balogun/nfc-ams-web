<?php

namespace App\AMS\Modules\Courses\Model;

use Illuminate\Database\Eloquent\Model;

class StudentCourses extends Model
{
    protected $table = 'student_courses';


    function lecturer()
    {
        return $this->hasOne('App\AMS\Modules\Lecturers\Model\Lecturer',
            'id','lecturer_id');
    }

    function student()
    {
        return $this->belongsTo('App\AMS\Modules\Students\Model\Student',
            'id','student_id');
    }

    function course()
    {
        return $this->hasOne('App\AMS\Modules\Courses\Model\Course',
            'id','course_id');
    }

    function deleteRelatedStudentCourses($order_id){
        $this->where('student_id',$order_id)->delete();
    }

}
