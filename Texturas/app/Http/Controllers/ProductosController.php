<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;

class ProductosController extends Controller
{
    public function index()
    {
        //
        $productos = Productos::all();
        return $productos;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $productos = new Productos();
        $productos->Nombre = $request->Nombre;
        $productos->Categoria_id = $request->Categoria_id;
        $productos->Precio_individual = $request->Precio_individual;
        $productos->Existencia = $request->Existencia;
        $productos->save();
        return $productos;
    }

    public function show(Productos $productos)
    {
        //
    }

    public function edit(Productos $productos)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $productos = Productos::findOrFail($request->id);
        $productos->Nombre = $request->Nombre;
        $productos->Categoria_id = $request->Categoria_id;
        $productos->Precio_individual = $request->Precio_individual;
        $productos->Existencia = $request->Existencia;
        $productos->save();
        return $productos;
    }

    public function destroy(Request $request)
    {
        //
        $productos = Productos::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
