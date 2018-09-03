<?php

namespace App\AMS\Modules\Orders\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateUpdateCourse extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return current_user();
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
            'department_id' => 'required',
            'lecturer_id' => 'required'
        ];
    }
}
