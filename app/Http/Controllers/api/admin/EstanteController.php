<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\estante;
use Illuminate\Http\Request;

class EstanteController extends Controller
{
    public function index()
        {
            $estante = estante::all();
            return response()->json($estante, 200);
        }

    
    
    
        
        public function store(Request $request)
        {
            $request->validate([
                'codigoE' => 'required|string|max:4',
                'descripcionE' => 'required|string|max:200',
            ]);
    
            $estante = estante::create([
                'codigoE' => $request->codigoE,
                'descripcionE' => $request->descripcionE,
            ]);
    
            return response()->json($estante, 201);
        }

        public function show($id)
        {
            $estante = estante::find($id);
            if (!$estante) {
                return response()->json(['message' => 'El estante no existe'], 404);
            }
            return response()->json($estante, 200);
        }

   
        public function update(Request $request, $id)
        {
            $estante = estante::find($id);
            if (!$estante) {
                return response()->json(['message' => 'Estante no encontrado'], 404);
            }

            $request->validate([
                'codigoE' => 'sometimes|string|max:4',
                'descripcionE' => 'sometimes|string|max:200',
            ]);

            $estante->update($request->only(['codigoE', 'descripcionE']));
            return response()->json($estante, 200);
        }

        public function destroy($id)
        {
            $estante = estante::find($id);
            if (!$estante) {
                return response()->json(['message' => 'Estante no encontrado'], 404);
            }
    
            $estante->delete();
            return response()->json(['message' => 'Estante eliminado con éxito'], 200);
        }
}
