<?php

namespace App\Http\Controllers;

use App\Models\Roles;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    public function index()
    {
        //
        $roles = Roles::all();
        return $roles;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $roles = new Roles();
        $roles->Nombre = $request->Nombre;
        $roles->save();
        return $roles;
    }

    public function show(Roles $roles)
    {
        //
    }

    public function edit(Roles $roles)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $roles = Roles::findOrFail($request->id);
        $roles->Nombre = $request->Nombre;
        $roles->save();
        return $roles;
    }

    public function destroy(Request $request)
    {
        //
        $roles = Roles::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
