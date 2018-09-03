<?php

namespace App\AMS\Modules\TimeTables\Model;

use Illuminate\Database\Eloquent\Model;

class TimeTable extends Model{


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    function lecturer(){
        return $this->belongsTo('App\AMS\Modules\Lecturers\Model\Lecturer');
    }

    function course(){
        return $this->belongsTo('App\AMS\Modules\Courses\Model\Course')->with('lecturer','department');
    }


}
