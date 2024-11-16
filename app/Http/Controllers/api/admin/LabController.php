<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\laboratorio;
use Illuminate\Http\Request;

class LabController extends Controller
{
    
    public function index()
    {
        $laboratorios = Laboratorio::with('marca')->get();
        return response()->json($laboratorios, 200);
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'codLab' => 'required|string|max:4',
            'nombreLab' => 'required|string|max:50',
            'direcionLab' => 'required|string|max:50',
            'telefonoLab' => 'required|integer',
            'marca_id' => 'required|exists:marcas,id',
        ]);

        $laboratorio = Laboratorio::create([
            'codLab' => $request->codLab,
            'nombreLab' => $request->nombreLab,
            'direcionLab' => $request->direcionLab,
            'telefonoLab' => $request->telefonoLab,
            'marca_id' => $request->marca_id,
        ]);

        return response()->json($laboratorio, 201);
    }

    
    public function show($id)
    {
        $laboratorio = Laboratorio::with('marca')->find($id);
        if (!$laboratorio) {
            return response()->json(['message' => 'Laboratorio no encontrado'], 404);
        }
        return response()->json($laboratorio, 200);
    }

    public function update(Request $request, $id)
    {
        $laboratorio = Laboratorio::find($id);
        if (!$laboratorio) {
            return response()->json(['message' => 'Laboratorio no encontrado'], 404);
        }

        $request->validate([
            'codLab' => 'sometimes|string|max:4',
            'nombreLab' => 'sometimes|string|max:50',
            'direcionLab' => 'sometimes|string|max:50',
            'telefonoLab' => 'sometimes|integer',
            'marca_id' => 'sometimes|exists:marcas,id',
        ]);

        $laboratorio->update($request->only(['codLab', 'nombreLab', 'direcionLab', 'telefonoLab', 'marca_id']));
        return response()->json($laboratorio, 200);
    }

   
    public function destroy($id)
    {
        $laboratorio = Laboratorio::find($id);
        if (!$laboratorio) {
            return response()->json(['message' => 'Laboratorio no encontrado'], 404);
        }

        $laboratorio->delete();
        return response()->json(['message' => 'Laboratorio eliminado con éxito'], 200);
    }
}
