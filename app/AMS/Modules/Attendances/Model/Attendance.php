<?php

namespace App\AMS\Modules\Attendances\Model;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    function lecturer(){
        return $this->belongsTo('App\AMS\Modules\Lecturers\Model\Lecturer');
    }

    function student()
    {
        return $this->belongsTo('App\AMS\Modules\Students\Model\Student');
    }

    function course()
    {
        return $this->belongsTo('App\AMS\Modules\Courses\Model\Course');
    }


}
