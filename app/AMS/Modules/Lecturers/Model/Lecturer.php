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

    function total(){
        return $this->count();
    }

    function mostExpensive(){
        return $this->count();
    }

    function leastExpensive(){
        return $this->count();
    }


}
