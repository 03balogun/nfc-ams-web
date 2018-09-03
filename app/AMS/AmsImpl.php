<?php
/**
 * Created by PhpStorm.
 * User: balo
 * Date: 10/26/17
 * Time: 11:11 AM
 */

namespace App\AMS;


use App\AMS\Modules\Departments\Repo\DepartmentInterface;
use App\AMS\Modules\Students\Repo\StudentInterface;
use App\AMS\Modules\Attendances\Repo\AttendanceInterface;
use App\AMS\Modules\Courses\Repo\CourseInterface;
use App\AMS\Modules\Lecturers\Repo\LecturerInterface;
use App\AMS\Modules\TimeTables\Repo\TimeTableInterface;
use App\AMS\Modules\Users\Repo\UserInterface;

class AmsImpl implements Ams
{
    protected $user, $students, $department, $lecturer, $course, $attendance, $timetable;

    public function __construct(UserInterface $user,
                                StudentInterface $students,
                                CourseInterface $course,
                                AttendanceInterface $attendance,
                                DepartmentInterface $department,
                                TimeTableInterface $timetable,
                                LecturerInterface $lecturer)
    {
        $this->user = $user;
        $this->students = $students;
        $this->lecturer = $lecturer;
        $this->course = $course;
        $this->attendance = $attendance;
        $this->department = $department;
        $this->timetable = $timetable;
    }

    /**
     * @return UserInterface
     */
    function user()
    {
        return $this->user;
    }

    /**
     * @return StudentInterface
     */
    function students()
    {
        return $this->students;
    }

    /**
     * @return LecturerInterface
     */
    function lecturers()
    {
        return $this->lecturer;
    }

    /**
     * @return DepartmentInterface
     */
    function departments()
    {
        return $this->department;
    }

    /**
     * @return CourseInterface
     */
    function courses()
    {
        return $this->course;
    }

    /**
     * @return AttendanceInterface
     */
    function attendances()
    {
        return $this->attendance;
    }

    /**
     * @return TimeTableInterface
     */
    function timetables()
    {
        return $this->timetable;
    }

}