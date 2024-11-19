<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = producto::with(['laboratorio', 'estante', 'tipoProducto'])->get();
        return response()->json($productos, 200);
    }

  
    public function store(Request $request)
    {
        $request->validate([
            'codigo' => 'required|string|max:4',
            'nombrePD' => 'required|string|max:50',
            'descripcionPD' => 'required|string',
            'cantidad' => 'required|integer',
            'estado' => 'boolean',
            'laboratorio_id' => 'required|exists:laboratorios,id',
            'estante_id' => 'required|exists:estantes,id',
            'tipo_producto_id' => 'required|exists:tipo_productos,id',
        ]);

        $producto = producto::create($request->all());
        return response()->json($producto, 201);
    }

    public function show($id)
    {
        $producto = Producto::find($id);
    
        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }
    
        return response()->json($producto, 200);
    }
    
   
  
    public function update(Request $request, $id)
    {
        $producto = producto::find($id);
        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $request->validate([
            'codigo' => 'sometimes|string|max:4',
            'nombrePD' => 'sometimes|string|max:50',
            'descripcionPD' => 'sometimes|string',
            'cantidad' => 'sometimes|integer',
            'estado' => 'boolean',
            'laboratorio_id' => 'sometimes|exists:laboratorios,id',
            'estante_id' => 'sometimes|exists:estantes,id',
            'tipo_producto_id' => 'sometimes|exists:tipo_productos,id',
        ]);

        $producto->update($request->all());
        return response()->json($producto, 200);
    }

   
    public function destroy($id)
    {
        $producto = producto::find($id);
        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $producto->delete();
        return response()->json(['message' => 'Producto eliminado con éxito'], 200);
    }
}


