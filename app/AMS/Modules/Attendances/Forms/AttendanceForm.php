<?php

namespace App\AMS\Modules\Attendances\Forms;

use Kris\LaravelFormBuilder\Form;

class AttendanceForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('department_id', 'select', [
                'label' => 'Departments',
                'attr' => [
                    'required',
                    'id' => 'department_id',
                    'class' => 'form-control js-select2',
                ],
                'choices' => $this->getData('departments',[]),
                'empty_value' => [null => '--']
            ])
            ->add('lecturer_id', 'select', [
                'label' => 'Lecturer In Charge',
                'attr' => [
                    'required',
                    'id' => 'lecturer_id',
                    'class' => 'form-control js-select2',
                ],
                'choices' => $this->getData('lecturers',[]),
                'empty_value' => [null => '--']
            ])
            ->add('students', 'select', [
                'label' => 'Search Student',
                'attr' => [
                    'id' => 'students',
                    'class' => 'form-control js-select2',
                ],
                'choices' => $this->getData('students',[]),
                'empty_value' => [null => '--']
            ])
            ->add('course_id', 'select', [
                'label' => 'Courses',
                'attr' => [
                    'required',
                    'id' => 'course_id',
                    'class' => 'form-control js-select2',
                ],
                'choices' => $this->getData('courses',[]),
                'empty_value' => [null => '--']
            ])
            ->add('note', 'textarea',[
                'label' => 'Additional Note',
                'attr' => [
                    'id' => 'attendance_note',
                    'rows' => 5,
                    'class' => 'form-control',
                    'placeholder' => "additional note if any"
                ]
            ])
            ->add('date', 'text', [
                'label' => 'Attendace Date',
                'attr' => [
                    'id' => 'date',
                    'required',
                    'name' => 'date',
                    "data-autoclose"=>"true",
                    "data-today-highlight"=>"true",
                    'class' => 'js-datepicker form-control',
                    'data-date-format' => "yyyy-mm-dd",
                    'placeholder' => "yyyy-mm-dd"
                ]
            ])
            ->add('level', 'number', [
                'label' => 'Course Level',
                'attr' => [
                    'required',
                    'id' => 'level',
                    'class' => 'form-control',
                    'placeholder' => "Enter Level"
                ]
            ]);
    }
}
