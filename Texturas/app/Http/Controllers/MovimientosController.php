<?php

namespace App\Http\Controllers;

use App\Models\Movimientos;
use Illuminate\Http\Request;

class MovimientosController extends Controller
{
    public function index()
    {
        //
        $movimientos = Movimientos::all();
        return $movimientos;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $movimientos = new Movimientos();
        $movimientos->Tipo_de_movimiento = $request->Tipo_de_movimiento;
        $movimientos->Producto_id = $request->Producto_id;
        $movimientos->Cantidad = $request->Cantidad;
        $movimientos->Usuario_id = $request->Usuario_id;
        $movimientos->save();
        return $movimientos;
    }

    public function show(Movimientos $movimientos)
    {
        //
    }

    public function edit(Movimientos $movimientos)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $movimientos = Movimientos::findOrFail($request->id);
        $movimientos->Tipo_de_movimiento = $request->Tipo_de_movimiento;
        $movimientos->Producto_id = $request->Producto_id;
        $movimientos->Cantidad = $request->Cantidad;
        $movimientos->Usuario_id = $request->Usuario_id;
        $movimientos->save();
        return $movimientos;
    }

    public function destroy(Request $request)
    {
        //
        $movimientos = Movimientos::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
