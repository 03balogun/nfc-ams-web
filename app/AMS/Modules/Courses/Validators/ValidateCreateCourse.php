<?php

namespace App\AMS\Modules\Courses\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateCreateCourse extends FormRequest
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
            'code' => 'required|string',
            'title' => 'required|string',
            'unit' => 'required|string',
            'department_id' => 'required|exists:departments,id|string|max:255',
            'lecturer_id' => 'required|exists:lecturers,id|string|max:255'
        ];
    }

}
