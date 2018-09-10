<?php

namespace App\AMS\Modules\Students\Forms;

use Kris\LaravelFormBuilder\Form;

class StudentForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('name', 'text', [
                'label' => 'Full Name',
                'attr' => [
                    'required',
                    'id' => 'name',
                    'class' => 'form-control',
                    'placeholder' => "Enter Student Name"
                ]
            ])
            ->add('registration_num', 'text', [
                'label' => 'Registration Num',
                'attr' => [
                    'required',
                    'id' => 'registration_num',
                    'class' => 'form-control',
                    'placeholder' => "Enter Registration Num"
                ]
            ])
            ->add('department_id', 'select', [
                'label' => 'Department',
                'attr' => [
                    'required',
                    'id' => 'department_id',
                    'class' => 'form-control js-select2',
                ],
                'choices' => $this->getData('departments',[]),
                'empty_value' => [null => '--']
            ])
            ->add('courses', 'select', [
                'label' => 'Courses',
                'attr' => [
                    'name'=>'courses[]',
                    'multiple',
                    'id' => 'courses',
                    'class' => 'form-control js-select2',
                ],
                'choices' => $this->getData('courses',[]),
            ])
            ->add('gender', 'select', [
                'label' => 'Gender',
                'attr' => [
                    'name' => 'gender',
                    'id' => 'gender',
                    'class' => 'form-control js-select2',
                ],
                'choices' => ['male' => 'Male', 'female' => 'Female'],
                'empty_value' => [null => '--']
            ])
            ->add('dob', 'text', [
                'label' => 'Date Of Birth',
                'attr' => [
                    'id' => 'dob',
                    'name' => 'dob',
                    'class' => 'js-datepicker form-control',
                    'data-date-format' => "yyyy-mm-dd",
                    'placeholder' => "yyyy-mm-dd"
                ]
            ]);
    }
}
