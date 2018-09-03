<?php

namespace App\AMS\Modules\Users\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateUpdateUser extends FormRequest
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
            'full_name' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'dob' => 'required|string|max:255',
            'mobile_no' => 'required|string|max:255',
            'bio' => 'max:255',
            'avatar' => 'file|image',
        ];
    }
}
