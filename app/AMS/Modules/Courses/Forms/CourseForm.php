<?php

namespace App\AMS\Modules\Courses\Forms;

use Kris\LaravelFormBuilder\Form;

class CourseForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('code', 'text', [
                'label' => 'Course Code',
                'attr' => [
                    'required',
                    'id' => 'code',
                    'class' => 'form-control',
                    'placeholder' => "Enter Course Code"
                ]
            ])
            ->add('title', 'text', [
                'label' => 'Course Title',
                'attr' => [
                    'required',
                    'id' => 'title',
                    'class' => 'form-control',
                    'placeholder' => "Enter Course Title"
                ]
            ])
            ->add('unit', 'text', [
                'label' => 'Course Unit',
                'attr' => [
                    'required',
                    'id' => 'unit',
                    'class' => 'form-control',
                    'placeholder' => "Enter Course Unit"
                ]
            ])
            ->add('level', 'number', [
                'label' => 'Course Level',
                'attr' => [
                    'required',
                    'id' => 'level',
                    'class' => 'form-control',
                    'placeholder' => "Enter Course Level"
                ]
            ])
            ->add('department_id', 'select', [
                'label' => 'Departments',
                'attr' => [
                    'required',
                    'id' => 'department_id',
                    'name' => 'department_id',
                    'class' => 'form-control js-select2',
                    'placeholder' => "Select Department"
                ],
                'choices' => $this->getData('departments'),
                'empty_value' => [null => '--']
            ])
            ->add('lecturer_id', 'select', [
                'label' => 'Lecturer In-charge',
                'attr' => [
                    'required',
                    'id' => 'lecturer_id',
                    'name' => 'lecturer_id',
                    'class' => 'form-control js-select2',
                    'placeholder' => "Select Lecturer In-charge"
                ],
                'choices' => $this->getData('lecturers'),
                'empty_value' => [null => '--']
            ]);
    }
}
