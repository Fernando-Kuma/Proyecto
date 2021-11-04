<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    public function index()
    {
        //
        $usuarios = Usuarios::all();
        return $usuarios;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $usuarios = new Usuarios();
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

    public function show(Usuarios $usuarios)
    {
        //
    }

    public function edit(Usuarios $usuarios)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $usuarios = Usuarios::findOrFail($request->id);
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
        $usuarios = Usuarios::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
