<?php

namespace App\AMS\Modules\TimeTables\Validators;

use Illuminate\Foundation\Http\FormRequest;

class ValidateUpdateTimeTable extends FormRequest
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
            'course_id' => 'required|exists:courses,id|string|max:255',
            'level' => 'required|string|max:255',
            'day' => 'required|string|max:30',
            'start_time' => 'required|time',
            'end_time' => 'required|time',
        ];
    }
}
