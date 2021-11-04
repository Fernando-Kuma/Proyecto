<?php

namespace App\Http\Controllers;

use App\Models\Detalle_venta;
use Illuminate\Http\Request;

class DetalleVentaController extends Controller
{
    public function index()
    {
        //
        $detalle = Detalle_venta::all();
        return $detalle;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
        $detalle = new Detalle_venta();
        $detalle->Producto_id = $request->Producto_id;
        $detalle->Cantidad = $request->Cantidad;
        $detalle->Costo = $request->Costo;
        $detalle->Venta_id = $request->Venta_id;
        $detalle->save();
        return $detalle;
    }

    public function show(Detalle_venta $detalle)
    {
        //
    }

    public function edit(Detalle_venta $detalle)
    {
        //
    }

    public function update(Request $request)
    {
        //
        $detalle = Detalle_venta::findOrFail($request->id);
        $detalle->Producto_id = $request->Producto_id;
        $detalle->Cantidad = $request->Cantidad;
        $detalle->Costo = $request->Costo;
        $detalle->Venta_id = $request->Venta_id;
        $detalle->save();
        return $detalle;
    }

    public function destroy(Request $request)
    {
        //
        $detalle = Detalle_venta::destroy($request->id);
        return response()->json(['Mensaje'=>'Registro eliminado'],200); 
        
    }
}
