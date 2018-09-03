<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_courses', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('student_id')->unsigned();
            $table->integer('course_id')->unsigned();
            $table->integer('lecturer_id')->unsigned();
            $table->timestamps();

            $table->unique(['student_id', 'course_id', 'lecturer_id']);

            $table->foreign("student_id")->references("id")->on("students")->onDelete('cascade');;
            $table->foreign("course_id")->references("id")->on("courses")->onDelete('cascade');;
            $table->foreign("lecturer_id")->references("id")->on("lecturers")->onDelete('cascade');;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_courses');
    }
}
