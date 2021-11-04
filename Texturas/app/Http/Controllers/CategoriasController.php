<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use Illuminate\Http\Request;

class CategoriasController extends Controller
{
    public function index()
    {
        //
        $categorias = Categorias::all();
        return $categorias;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $categorias = new Categorias();
        $categorias->Nombre = $request->Nombre;
        $categorias->save();
        return $categorias;
    }

    public function show(Categorias $categorias)
    {
        //
    }

    public function edit(Categorias $categorias)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $categorias = Categorias::findOrFail($request->id);
        $categorias->Nombre = $request->Nombre;
        $categorias->save();
        return $categorias;
    }

    public function destroy(Request $request)
    {
        //
        $categorias = Categorias::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
