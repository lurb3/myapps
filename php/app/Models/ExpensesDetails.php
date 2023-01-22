<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpensesDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'amount',
        'is_recurrent',
        'user_id'
    ];
}
