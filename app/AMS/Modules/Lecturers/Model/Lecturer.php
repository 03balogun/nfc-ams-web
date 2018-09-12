<?php

namespace App\AMS\Modules\Lecturers\Model;

use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    public function courses()
    {
        return $this->hasMany('App\AMS\Modules\Courses\Model\Course','lecturer_id','id')
            ->with('students');
    }

}
