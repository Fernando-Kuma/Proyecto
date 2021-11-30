<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::group(['namespace' => 'App\Http\Controllers', 'prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::middleware('auth.jwt')->group(function () {
        Route::post('refresh', 'AuthController@refresh');
        Route::post('logout', 'AuthController@logout');
        Route::get('me', 'AuthController@me');
        Route::get('categorias', 'CategoriasController@index');
        //Usuarios
        Route::get('users', 'UserController@index');
        Route::post('users', 'UserController@store');
        Route::put('users/{id}', 'UserController@update');
        Route::delete('users/{id}', 'UserController@destroy');
    });
});


/*Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('register', 'App\Http\Controllers\AuthController@register');
    
    Route::get('categorias', 'App\Http\Controllers\CategoriasController@index');
    Route::get('users', 'App\Http\Controllers\UserController@index');
});*/
/*Route::prefix('auth')->group(function () {
    
});*/


