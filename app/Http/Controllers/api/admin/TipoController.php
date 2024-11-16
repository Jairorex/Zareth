<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\tipoProducto;

use Illuminate\Http\Request;

class TipoController extends Controller
{
    public function index()
    {
        $tipo = tipoProducto::all();
        return response()->json($tipo, 200);
    }




    
    public function store(Request $request)
    {
        $request->validate([
            'nombreTP' => 'required|string|max:100',
            'descripcionTP' => 'required|string|max:200',
        ]);

        $tipo = tipoProducto::create([
            'nombreTP' => $request->nombreTP,
            'descripcionTP' => $request->descripcionTP,
        ]);

        return response()->json($tipo, 201);
    }

    public function show($id)
    {
        $tipo = tipoProducto::find($id);
        if (!$tipo) {
            return response()->json(['message' => 'Este Tipo de Producto no existe'], 404);
        }
        return response()->json($tipo, 200);
    }


    public function update(Request $request, $id)
    {
        $tipo = tipoProducto::find($id);
        if (!$tipo) {
            return response()->json(['message' => 'Tipo de Producto no encontrado'], 404);
        }

        $request->validate([
            'nombreTP' => 'required|string|max:100',
            'descripcionTP' => 'sometimes|string|max:200',
        ]);

        $tipo->update($request->only(['nombreTP', 'descripcionTP']));
        return response()->json($tipo, 200);
    }

    public function destroy($id)
    {
        $tipo = tipoProducto::find($id);
        if (!$tipo) {
            return response()->json(['message' => 'Tipo de Producto no encontrado'], 404);
        }

        $tipo->delete();
        return response()->json(['message' => 'Tipo de Producto eliminado con éxito'], 200);
    }
}


