<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HouseController;
use App\Http\Controllers\GarageController;
use App\Http\Controllers\StoreyController;
use App\Http\Controllers\BedroomController;
use App\Http\Controllers\BathroomController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/houses', HouseController::class);
Route::get('/bedrooms', [BedroomController::class, 'index']);
Route::get('/bathrooms', [BathroomController::class, 'index']);
Route::get('/storeys', [StoreyController::class, 'index']);
Route::get('/garages', [GarageController::class, 'index']);
