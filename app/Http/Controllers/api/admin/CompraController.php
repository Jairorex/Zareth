<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\compra;
use Illuminate\Http\Request;

class CompraController extends Controller
{
    public function index()
    {
        $compra = Compra::with(['producto', 'proveedores'])->get();
        return response()->json($compra, 200);
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'codCompra' => 'required|string|max:10',
            'fecha' => 'required|date',
            'cantidad' => 'required|integer',
            'PrecioC' => 'required|numeric',
            'descripcion' => 'required|string',
            'producto_id' => 'required|exists:productos,id',
            'proveedores_id' => 'required|exists:proveedores,id',
        ]);

        $compra = Compra::create($request->all());
        return response()->json($compra, 201);
    }

 
    public function show($id)
    {
        $compra = Compra::with(['producto', 'proveedor'])->find($id);
        if (!$compra) {
            return response()->json(['message' => 'Compra no encontrada'], 404);
        }
        return response()->json($compra, 200);
    }


    public function update(Request $request, $id)
    {
        $compra = Compra::find($id);
        if (!$compra) {
            return response()->json(['message' => 'Compra no encontrada'], 404);
        }

        $request->validate([
            'codCompra' => 'sometimes|string|max:10',
            'fecha' => 'sometimes|date',
            'cantidad' => 'sometimes|integer',
            'PrecioC' => 'sometimes|numeric',
            'descripcion' => 'sometimes|string',
            'producto_id' => 'sometimes|exists:productos,id',
            'proveedores_id' => 'sometimes|exists:proveedores,id',
        ]);

        $compra->update($request->all());
        return response()->json($compra, 200);
    }

    public function destroy($id)
    {
        $compra = Compra::find($id);
        if (!$compra) {
            return response()->json(['message' => 'Compra no encontrada'], 404);
        }

        $compra->delete();
        return response()->json(['message' => 'Compra eliminada con éxito'], 200);
    }
}
