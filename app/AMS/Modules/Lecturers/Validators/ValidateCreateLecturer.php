<?php

namespace App\AMS\Modules\Lecturers\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateCreateLecturer extends FormRequest
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
            'lecturer_id' => 'required|unique:lecturers|string|max:255',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string'
        ];
    }

    public function messages()
    {
        return [
            'name.unique' => "The Lecturer you're trying to create ALREADY EXIST",
        ];
    }

}
