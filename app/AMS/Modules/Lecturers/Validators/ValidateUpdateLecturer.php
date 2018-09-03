<?php

namespace App\AMS\Modules\Services\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateUpdateLecturer extends FormRequest
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
            'lecturer_id' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string'
        ];
    }
}
