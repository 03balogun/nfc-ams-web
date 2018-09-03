<?php

namespace App\AMS\Modules\Users\Forms;

use Kris\LaravelFormBuilder\Form;

class UserForm extends Form
{
    public function buildForm()
    {
        $this
            ->add('email', 'email', [
                'label' => 'E-mail',
                'attr' => [
                    'required',
                    'id' => 'email',
                    'class' => 'form-control',
                    'placeholder' => "Enter your email"
                ]
            ])
             ->add('username', 'text', [
                'label' => 'Username',
                'attr' => [
                    'required',
                    'id' => 'email',
                    'class' => 'form-control',
                    'placeholder' => "Enter your email"
                ]
            ])
            ->add('password', 'password',[
                'label' => 'password',
                'attr' => [
                    'required',
                    'id' => 'password',
                    'class' => 'form-control',
                    'placeholder' => "Enter your password"
                ]
            ])
            ->add('password_confirmation', 'password',[
                'label' => 'Password Confirmation ',
                'attr' => [
                    'required',
                    'id' => 'password_confirmation',
                    'class' => 'form-control',
                    'placeholder' => "Re-Enter your password"
                ]
            ])
            ->add('full_name', 'text',[
                'label' => 'full_name',
                'attr' => [
                    'required',
                    'id' => 'full_name',
                    'class' => 'form-control',
                    'placeholder' => "Enter your Full name"
                ]
            ])
            ->add('gender', 'select',[
                'label' => 'gender',
                'attr' => [
                    'required',
                    'id' => 'gender',
                    'class' => 'form-control',
                    ],
                'choices' => [
                    'male'=>'Male',
                    'female'=>'Female',
                ],
                'empty_value' => ['null'=>'--Select One--']
            ])
            ->add('dob', 'date',[
                'label' => 'D.O.B',
                'attr' => [
                    'required',
                    'id' => 'dob',
                    'class' => 'form-control calendar',
                    'placeholder' => "Enter your Date Of Birth"
                ]
            ])
            ->add('bio', 'textarea',[
                'label' => 'bio',
                'attr' => [
                    'id' => 'bio',
                    'rows' => 5,
                    'class' => 'form-control',
                    'placeholder' => "Enter Bio, i.e I am Balogun, I love Music+Code"
                ]
            ])
            ->add('preferences', 'checkbox')
            ->add('avatar', 'file')
            ->add('mobile_no', 'text',[
                'label' => 'Mobile Num.',
                'attr' => [
                    'required',
                    'id' => 'mobile_no',
                    'pattern'=>"(0701|0703|0705|0706|0708|0802|0803|0805|0806|0807|0808|0809|0810|0811|0812|0813|0814|0815|0816|0817|0818|0909|0908|0902|0903|0905|0906|0907)[0-9]{7}",
                    "autocomplete"=>"off",
                    'class' => 'form-control',
                    'placeholder'=>"Mobile Number i.e 08130....",
                    'oninvalid'=>"this.setCustomValidity('Mobile No. Format not supported')",
                    'oninput'=>"setCustomValidity('')"
                ]
            ]);
    }
}
