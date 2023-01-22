<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExpensesDetailsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return $request->user()->currentAccessToken();
    });
    Route::post('/logout', [AuthController::class, 'Logout']);
    Route::prefix('expenses')->group(function () {
        Route::get('/', [ExpensesDetailsController::class, 'index']);
        Route::get('/{expense}', [ExpensesDetailsController::class, 'show']);
        Route::post('/', [ExpensesDetailsController::class, 'store']);
        Route::delete('/{expense}', [ExpensesDetailsController::class, 'destroy']);
    });
});
Route::post('/signup', [AuthController::class, 'SignUp']);
Route::post('/login', [AuthController::class, 'Login']);
