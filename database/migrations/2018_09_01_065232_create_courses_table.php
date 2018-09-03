<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code')->unique();
            $table->string('title');
            $table->string('unit');
            $table->string('level');
            $table->integer('department_id')->unsigned();
            $table->integer('lecturer_id')->unsigned();
            $table->timestamps();

            $table->foreign("lecturer_id")->references("id")->on("lecturers")->onDelete('cascade');
            $table->foreign("department_id")->references("id")->on("departments")->onDelete('cascade');;

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
