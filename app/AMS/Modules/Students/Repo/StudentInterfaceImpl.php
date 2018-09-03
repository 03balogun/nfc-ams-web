<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Students\Repo;



//use App\AMS\Modules\Users\Mail\WelcomeMail;
use App\AMS\Modules\Students\Model\Student;
use App\AMS\SystemResponse;
use Cartalyst\Sentinel\Sentinel;
use App\AMS\Modules\AmsSystem;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

Class StudentInterfaceImpl extends AmsSystem implements StudentInterface
{
    public $sentinel,$model;
    public function __construct(Student $student){
        $this->model = $student;
        $this->module_name = 'students';
    }



}