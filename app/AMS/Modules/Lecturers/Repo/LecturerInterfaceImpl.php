<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Lecturers\Repo;


use App\AMS\Modules\Lecturers\Model\Lecturer;
use App\AMS\Modules\AmsSystem;

Class LecturerInterfaceImpl extends AmsSystem implements LecturerInterface
{
    public $sentinel,$model;
    public function __construct(Lecturer $customer){
        $this->model = $customer;
        $this->module_name = 'lecturers';
    }



}