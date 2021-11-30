<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserController extends Controller
{
    public function index()
    {
        //
        $usuarios = User::all();
        return $usuarios;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nombre' => 'required',
            'Apellidos' => 'required',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'Telefono' => 'required',
            'Rol_id' => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }
        $user = User::create(array_merge(
            $validator->validate(),
            ['password' => bcrypt($request->password),
            'Creado_por' => JWTAuth::user()->id ]

        ));
        return response()->json([
            'message' => '¡Usuario registrado exitosamente!',
            'user' => $user
        ], 201);
    }

    public function show(User $usuarios)
    {
        //
    }

    public function edit(User $usuarios)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $usuarios = User::findOrFail($request->id);
        $usuarios->Nombre = $request->Nombre;
        $usuarios->Apellidos = $request->Apellidos;
        $usuarios->Correo = $request->Correo;
        $usuarios->Contraseña = $request->Contraseña;
        $usuarios->Telefono = $request->Telefono;
        $usuarios->Rol_id = $request->Rol_id;
        $usuarios->Creado_por = $request->Creado_por;
        $usuarios->save();
        return $usuarios;
    }

    public function destroy(Request $request)
    {
        //
        $usuarios = User::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
