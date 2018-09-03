<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Attendances\Repo;


use App\AMS\Modules\Attendances\Model\Attendance;
use App\AMS\Modules\AmsSystem;

Class AttendanceInterfaceImpl extends AmsSystem implements AttendanceInterface
{
    public $sentinel,$model;
    public function __construct(Attendance $invoice){
        $this->model = $invoice;
        $this->module_name = 'attendances';
    }



}