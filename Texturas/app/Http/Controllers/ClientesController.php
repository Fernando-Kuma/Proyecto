<?php

namespace App\Http\Controllers;

use App\Models\Clientes;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    public function index()
    {
        //
        $clientes = Clientes::all();
        return $clientes;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $clientes = new Clientes();
        $clientes->Nombre = $request->Nombre;
        $clientes->Apellidos = $request->Apellidos;
        $clientes->Correo = $request->Correo;
        $clientes->Contraseña = $request->Contraseña;
        $clientes->Telefono = $request->Telefono;
        $clientes->save();
        return $clientes;
    }

    public function show(Clientes $clientes)
    {
        //
    }

    public function edit(Clientes $clientes)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $clientes = Clientes::findOrFail($request->id);
        $clientes->Nombre = $request->Nombre;
        $clientes->Apellidos = $request->Apellidos;
        $clientes->Correo = $request->Correo;
        $clientes->Contraseña = $request->Contraseña;
        $clientes->Telefono = $request->Telefono;
        $clientes->save();
        return $clientes;
    }

    public function destroy(Request $request)
    {
        //
        $clientes = Clientes::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
