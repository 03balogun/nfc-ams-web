<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:19 AM
 */

namespace App\AMS\Modules\Courses\Repo;


use App\AMS\Modules\Courses\Model\Course;
use App\AMS\Modules\AmsSystem;
use App\AMS\Modules\Courses\Model\StudentCourses;

Class CourseInterfaceImpl extends AmsSystem implements CourseInterface
{
    public $sentinel, $model, $studentCourses;

    public function __construct(Course $department, StudentCourses $studentCourses)
    {
        $this->model = $department;
        $this->module_name = 'courses';
        $this->studentCourses = $studentCourses;
    }

    function createStudentCourses(array $data)
    {
        try {
            $record = $this->studentCourses->insert($data);
            if ($record) return systemResponse()->data($record);
            return systemResponse()->status(false)->reason($record);
        } catch (\Exception $e) {
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason($e->getMessage());
        }
    }

    function deleteRelatedStudentCourses($department_id){
        try {
            $record = $this->studentCourses->deleteRelatedStudentCourses($department_id);
            if ($record) return systemResponse()->data($record);
            return systemResponse()->status(false)->reason($record);
        } catch (\Exception $e) {
            return systemResponse()
                ->code($e->getCode())
                ->status(false)
                ->reason($e->getMessage());
        }
    }


}