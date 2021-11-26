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


Route::group(['namespace' => 'App\Http\Controllers', 'prefix' => 'application'],function () {
    //Usuarios
    Route::get('users', 'UserController@index');
    Route::post('users', 'UserController@store');
    Route::put('users/{id}', 'UserController@update');
    Route::delete('users/{id}', 'UserController@destroy');
    //Categorias
    Route::get('categorias', 'CategoriasController@index');
    Route::post('categorias', 'CategoriasController@store');
    Route::put('categorias/{id}', 'CategoriasController@update');
    Route::delete('categorias/{id}', 'CategoriasController@destroy');

    //Clientes
    Route::get('clientes', 'ClientesController@index');
    Route::post('clientes', 'ClientesController@store');
    Route::put('clientes/{id}', 'ClientesController@update');
    Route::delete('clientes/{id}', 'ClientesController@destroy');

    //Detalles
    Route::get('detalles', 'DetalleVentaController@index');
    Route::post('detalles', 'DetalleVentaController@store');
    Route::put('detalles/{id}', 'DetalleVentaController@update');
    Route::delete('detalles/{id}', 'DetalleVentaController@destroy');

    //Movimientos
    Route::get('movimientos', 'MovimientosController@index');
    Route::post('movimientos', 'MovimientosController@store');
    Route::put('movimientos/{id}', 'MovimientosController@update');
    Route::delete('movimientos/{id}', 'MovimientosController@destroy');

    //Productos
    Route::get('productos', 'ProductosController@index');
    Route::post('productos', 'ProductosController@store');
    Route::put('productos/{id}', 'ProductosController@update');
    Route::delete('productos/{id}', 'ProductosController@destroy');

    //Roles
    Route::get('roles', 'RolesController@index');
    Route::post('roles', 'RolesController@store');
    Route::put('roles/{id}', 'RolesController@update');
    Route::delete('roles/{id}', 'RolesController@destroy');

    //Usuarios
    Route::get('usuarios', 'UsuariosController@index');
    Route::post('usuarios', 'UsuariosController@store');
    Route::put('usuarios/{id}', 'UsuariosController@update');
    Route::delete('usuarios/{id}', 'UsuariosController@destroy');

    //Ventas
    Route::get('ventas', 'VentasController@index');
    Route::post('ventas', 'VentasController@store');
    Route::put('ventas/{id}', 'VentasController@update');
    Route::delete('ventas/{id}', 'VentasController@destroy');
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('register', 'App\Http\Controllers\AuthController@register');

    Route::group(['namespace' => 'App\Http\Controllers'],function () {
        //Usuarios
        Route::get('categorias', 'CategoriasController@index');
        Route::get('users', 'UserController@index');
    });
});


