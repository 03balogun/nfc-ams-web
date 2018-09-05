<?php

namespace App\AMS\Modules\Students\Model;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Student extends Model{


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    function department(){
        return $this->belongsTo('App\AMS\Modules\Departments\Model\Department');
    }

    function courses(){
        return $this->hasManyThrough('App\AMS\Modules\Courses\Model\Course',
            'App\AMS\Modules\Courses\Model\StudentCourses','student_id','id','course_id','id');
    }

    function attendance(){
        return $this->belongsTo('App\AMS\Modules\Attendances\Model\Attendance');
    }

    function total(){
        return $this->count();
    }

    function thisMonth(){
        $today = Carbon::today();
        return $this->raw('select * from '.$this->getTable().' where `created_at`
 between '.$today->startOfMonth().' and '.$today->endOfMonth().' and '.$this->getTable().'.`deleted_at` is null')->count();
    }

}
