<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:00 AM
 */

namespace App\AMS;


use App\AMS\Modules\Attendances\Repo\AttendanceInterface;
use App\AMS\Modules\Courses\Repo\CourseInterface;
use App\AMS\Modules\Departments\Repo\DepartmentInterface;
use App\AMS\Modules\Lecturers\Repo\LecturerInterface;
use App\AMS\Modules\TimeTables\Repo\TimeTableInterface;
use App\AMS\Modules\Users\Repo\UserInterface;
use App\AMS\Modules\Students\Repo\StudentInterface;

interface Ams{

    /**
     * @return UserInterface
     */
    function user();

    /**
     * @return StudentInterface
     */
    function students();

    /**
     * @return LecturerInterface
     */
    function lecturers();

    /**
     * @return DepartmentInterface
     */
    function departments();

    /**
     * @return CourseInterface
     */
    function courses();

    /**
     * @return AttendanceInterface
     */
    function attendances();

    /**
     * @return TimeTableInterface
     */
    function timetables();

}