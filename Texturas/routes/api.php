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
        //Clientes
        Route::get('clients', 'ClientesController@index');
        Route::post('clients', 'ClientesController@store');
        Route::put('clients/{id}', 'ClientesController@update');
        Route::delete('clients/{id}', 'ClientesController@destroy');
        //Productos
        Route::get('products', 'ProductosController@index');
        Route::post('products', 'ProductosController@store');
        Route::put('products/{id}', 'ProductosController@update');
        Route::delete('products/{id}', 'ProductosController@destroy');
    });
});

