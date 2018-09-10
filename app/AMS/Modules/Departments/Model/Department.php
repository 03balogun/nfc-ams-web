<?php

namespace App\AMS\Modules\Departments\Model;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    function courses (){
        return $this->hasMany('App\AMS\Modules\Courses\Model\Course');
    }

}
