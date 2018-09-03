<?php

namespace App\AMS\Modules\Departments\Forms;

use Kris\LaravelFormBuilder\Form;

class DepartmentForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('name', 'text', [
                'label' => 'Department Name',
                'attr' => [
                    'required',
                    'id' => 'name',
                    'class' => 'form-control',
                    'placeholder' => "Enter Department Name"
                ]
            ]);
    }
}
