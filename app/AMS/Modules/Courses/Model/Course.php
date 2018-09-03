<?php

namespace App\AMS\Modules\Courses\Model;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    function lecturer(){
        return $this->belongsTo('App\AMS\Modules\Lecturers\Model\Lecturer');
    }

    function department(){
        return $this->belongsTo('App\AMS\Modules\Departments\Model\Department');
    }

    function services(){
        return $this->hasMany('App\AMS\Modules\Courses\Model\OrderServices');
    }


}