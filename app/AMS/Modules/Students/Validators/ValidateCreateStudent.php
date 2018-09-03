<?php

namespace App\AMS\Modules\Students\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateCreateStudent extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'registration_num' => 'required|unique:students|string|max:255',
            'department_id' => 'required|string',
            'courses' => 'required',
            'gender' => 'nullable|string',
            'dob' => 'nullable|date',
        ];
    }
}
