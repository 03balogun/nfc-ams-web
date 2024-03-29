<?php

namespace App\AMS\Modules\Attendances\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateCreateAttendance extends FormRequest
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
            'department_id'=>'required',
            'course_id'=>'required',
            'date'=>'required',
            'attendance-record'=>'required'
        ];
    }

    public function messages()
    {
        return [];
    }

}
