<?php

namespace App\Http\Controllers;

use App\Models\Ventas;
use Illuminate\Http\Request;
use App\Models\Detalle_venta;

class VentasController extends Controller
{
    public function index()
    {
        //
        $ventas = Ventas::all();
        return $ventas;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $ventas = new Ventas();
        $ventas->Cliente_id = $request->Cliente_id;
        $ventas->Usuario_id = $request->Usuario_id;
        $ventas->Total = $request->Total;
        $ventas->save();
        return $ventas;
    }

    public function show(Ventas $ventas)
    {
        //
    }

    public function edit(Ventas $ventas)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $ventas = Ventas::findOrFail($request->id);
        $ventas->Cliente_id = $request->Cliente_id;
        $ventas->Usuario_id = $request->Usuario_id;
        $ventas->Total = $request->Total;
        $ventas->save();
        return $ventas;
    }

    public function destroy(Request $request)
    {
        //
        $ventas = Ventas::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
