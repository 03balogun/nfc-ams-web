<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendances', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('course_id')->unsigned();
            $table->integer('department_id')->unsigned();
            $table->integer('lecturer_id')->unsigned();
            $table->integer('student_id')->unsigned();
            $table->dateTime('date');
            $table->integer('status')->default(0)->comment = "either 0(absent), 1 present or other future values";
            $table->timestamps();

            $table->foreign("course_id")->references("id")->on("courses")->onDelete('cascade');;
            $table->foreign("department_id")->references("id")->on("departments")->onDelete('cascade');;
            $table->foreign("student_id")->references("id")->on("students")->onDelete('cascade');;
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
        Schema::dropIfExists('attendances');
    }
}
