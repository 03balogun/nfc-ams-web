<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Departments\Repo;


use App\AMS\Modules\Departments\Model\Department;
use App\AMS\Modules\AmsSystem;

Class DepartmentInterfaceImpl extends AmsSystem implements DepartmentInterface
{
    public $sentinel, $model;

    public function __construct(Department $department)
    {
        $this->model = $department;
        $this->module_name = 'departments';
    }
}