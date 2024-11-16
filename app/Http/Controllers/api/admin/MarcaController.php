<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\marca;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    
        public function index()
        {
            $marcas = Marca::all();
            return response()->json($marcas, 200);
        }

    
    
    
        // Crear una nueva marca
        public function store(Request $request)
        {
            $request->validate([
                'codigoM' => 'required|string|max:4',
                'nombreM' => 'required|string|max:50',
            ]);
    
            $marca = Marca::create([
                'codigoM' => $request->codigoM,
                'nombreM' => $request->nombreM,
            ]);
    
            return response()->json($marca, 201);
        }

        public function show($id)
        {
            $marca = Marca::find($id);
            if (!$marca) {
                return response()->json(['message' => 'Marca no encontrada'], 404);
            }
            return response()->json($marca, 200);
        }

   
        public function update(Request $request, $id)
        {
            $marca = Marca::find($id);
            if (!$marca) {
                return response()->json(['message' => 'Marca no encontrada'], 404);
            }

            $request->validate([
                'codigoM' => 'sometimes|string|max:4',
                'nombreM' => 'sometimes|string|max:50',
            ]);

            $marca->update($request->only(['codigoM', 'nombreM']));
            return response()->json($marca, 200);
        }

        public function destroy($id)
        {
            $marca = Marca::find($id);
            if (!$marca) {
                return response()->json(['message' => 'Marca no encontrada'], 404);
            }
    
            $marca->delete();
            return response()->json(['message' => 'Marca eliminada con éxito'], 200);
        }
}
