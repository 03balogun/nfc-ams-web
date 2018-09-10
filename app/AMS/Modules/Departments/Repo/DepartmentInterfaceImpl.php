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
use App\AMS\SystemResponse;
use Illuminate\Support\Facades\Log;

Class DepartmentInterfaceImpl extends AmsSystem implements DepartmentInterface
{
    public $sentinel, $model;

    public function __construct(Department $department)
    {
        $this->model = $department;
        $this->module_name = 'departments';
    }

    /**
     * @param array $columns
     * @param null $value
     * @param string $by
     * @return SystemResponse
     */
    function getDepartmentsWithCourses($columns = ['*'], $value = null,$by = 'id'){
        try{
            $data = (!$value) ?
                $this->model->select($columns):
                $this->model->where($by,$value)->select($columns);
            $data = $data->with('courses:id,department_id,title as name,code')->latest()->get();
            return systemResponse()->data($data);
        }catch (\Exception $e){
            Log::critical($e->getMessage());
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason("Operation could not be completed");
        }
    }
}