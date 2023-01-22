<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExpensesDetails;
use App\Http\Requests\ExpenseDetailsRequest;

class ExpensesDetailsController extends Controller
{
    public function index()
    {
        return ExpensesDetails::where('user_id', auth()->user()->id)->get();
    }

    public function show(ExpensesDetails $expense)
    {
        return $expense;
    }

    public function store(ExpenseDetailsRequest $request)
    {
        return ExpensesDetails::create($request->validated());
    }

    public function destroy(ExpensesDetails $expense)
    {
        return $expense->delete();
    }
}
