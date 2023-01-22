<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\ExpensesDetails;

class ExpenseDetailsRequest extends FormRequest
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

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => auth()->user()->id,
            'amount' => number_format((float)$this->amount, 2, '.', ''),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'max: 255',
                'min: 3',
                $this->expense ?
                    Rule::unique('expenses_details')->ignore($this->expense->id, 'id')
                : Rule::unique('expenses_details')
            ],
            'amount' => 'required|max:999999|min: 0|decimal:2',
            'user_id' => 'required',
            'is_recurrent' => 'nullable',
        ];
    }

    public function expectsJson()
    {
        return true;
    }
}
