<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\venta;
use Illuminate\Http\Request;

class VentaController extends Controller
{
    public function index()
    {
        $ventas = Venta::with('producto')->get();
        return response()->json($ventas, 200);
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'codVenta' => 'required|string|max:10',
            'fecha' => 'required|date',
            'cantidad' => 'required|integer',
            'PrecioV' => 'required|numeric',
            'descripcion' => 'required|string',
            'producto_id' => 'required|exists:productos,id',
        ]);

        $venta = Venta::create($request->all());
        return response()->json($venta, 201);
    }

    
    public function show($id)
    {
        $venta = Venta::with('producto')->find($id);
        if (!$venta) {
            return response()->json(['message' => 'Venta no encontrada'], 404);
        }
        return response()->json($venta, 200);
    }

  
    public function update(Request $request, $id)
    {
        $venta = Venta::find($id);
        if (!$venta) {
            return response()->json(['message' => 'Venta no encontrada'], 404);
        }

        $request->validate([
            'codVenta' => 'sometimes|string|max:10',
            'fecha' => 'sometimes|date',
            'cantidad' => 'sometimes|integer',
            'PrecioV' => 'sometimes|numeric',
            'descripcion' => 'sometimes|string',
            'producto_id' => 'sometimes|exists:productos,id',
        ]);

        $venta->update($request->all());
        return response()->json($venta, 200);
    }

    
    public function destroy($id)
    {
        $venta = Venta::find($id);
        if (!$venta) {
            return response()->json(['message' => 'Venta no encontrada'], 404);
        }

        $venta->delete();
        return response()->json(['message' => 'Venta eliminada con éxito'], 200);
    }
}

