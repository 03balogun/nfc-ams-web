<?php

namespace App\AMS\Modules\Lecturers\Forms;

use Kris\LaravelFormBuilder\Form;

class LecturerForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('lecturer_id', 'number', [
                'label' => 'Lecturer ID',
                'attr' => [
                    'required',
                    'id' => 'lecturer_id',
                    'class' => 'form-control',
                    'placeholder' => "Enter Lecturer ID"
                ]
            ])
            ->add('name', 'text', [
                'label' => 'Full Name',
                'attr' => [
                    'required',
                    'id' => 'name',
                    'class' => 'form-control',
                    'placeholder' => "Enter Lecturer Name e.g Suite"
                ]
            ])
            ->add('description', 'textarea',[
                'label' => 'Description',
                'attr' => [
                    'id' => 'description',
                    'rows' => 5,
                    'class' => 'form-control',
                    'placeholder' => "Enter more description of lecturer i.e Bio"
                ]
            ]);
    }
}
