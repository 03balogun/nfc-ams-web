<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AmsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {


        $this->app->bind(
            'App\AMS\Modules\Attendances\Repo\AttendanceInterface',
            'App\AMS\Modules\Attendances\Repo\AttendanceInterfaceImpl'
        );

        $this->app->bind(
            'App\AMS\Modules\Courses\Repo\CourseInterface',
            'App\AMS\Modules\Courses\Repo\CourseInterfaceImpl'
        );

        $this->app->bind(
            'App\AMS\Modules\Departments\Repo\DepartmentInterface',
            'App\AMS\Modules\Departments\Repo\DepartmentInterfaceImpl'
        );

        $this->app->bind(
            'App\AMS\Modules\Lecturers\Repo\LecturerInterface',
            'App\AMS\Modules\Lecturers\Repo\LecturerInterfaceImpl'
        );

        $this->app->bind(
            'App\AMS\Modules\Students\Repo\StudentInterface',
            'App\AMS\Modules\Students\Repo\StudentInterfaceImpl'
        );

        $this->app->bind(
            'App\AMS\Modules\Users\Repo\UserInterface',
            'App\AMS\Modules\Users\Repo\UserInterfaceImpl'
        );


        $this->app->bind(
            'App\AMS\Modules\TimeTables\Repo\TimeTableInterface',
            'App\AMS\Modules\TimeTables\Repo\TimeTableInterfaceImpl'
        );

        $this->app->bind(
            'App\AMS\Ams',
            'App\AMS\AmsImpl');

        $this->app->singleton('Ams', 'App\AMS\AmsImpl');

    }
}
