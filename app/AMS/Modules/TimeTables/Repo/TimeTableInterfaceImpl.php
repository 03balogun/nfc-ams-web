<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\TimeTables\Repo;



use App\AMS\Modules\TimeTables\Model\TimeTable;
use App\AMS\Modules\AmsSystem;

Class TimeTableInterfaceImpl extends AmsSystem implements TimeTableInterface
{
    public $sentinel,$model;
    public function __construct(TimeTable $student){
        $this->model = $student;
        $this->module_name = 'time_tables';
    }



}