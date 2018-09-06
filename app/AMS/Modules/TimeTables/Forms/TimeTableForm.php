<?php

namespace App\AMS\Modules\TimeTables\Forms;

use Kris\LaravelFormBuilder\Form;

class TimeTableForm extends Form
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
            ->add('level', 'select', [
                'label' => 'Course Level',
                'attr' => [
                    'required',
                    'id' => 'level',
                    'class' => 'form-control js-select2',
//                    'placeholder' => "Enter Course Level"
                ],
                'choices' => levels(),
                'empty_value' => [null => '--']
            ])
            ->add('day', 'select', [
                'label' => 'Day of Week',
                'attr' => [
                    'required',
                    'name' => 'day',
                    'id' => 'day',
                    'class' => 'form-control js-select2',
                ],
                'choices' => daysOfWeek(),
                'empty_value' => [null => '--']
            ])
            ->add('start_time', 'time', [
                'label' => 'Lecture Star Time',
                'attr' => [
                    'required',
                    'name' => 'start_time',
                    'id' => 'start_time',
                    'class' => 'form-control',
                ]
            ])
            ->add('end_time', 'time', [
                'label' => 'Lecture End Time',
                'attr' => [
                    'required',
                    'name' => 'end_time',
                    'id' => 'end_time',
                    'class' => 'form-control',
                ]
            ])
            ->add('note', 'textarea',[
                'label' => 'Additional Note',
                'attr' => [
                    'id' => 'note',
                    'rows' => 5,
                    'class' => 'form-control',
                    'placeholder' => "Additional for lecture i.e location e.t.c"
                ]
            ]);
    }
}
