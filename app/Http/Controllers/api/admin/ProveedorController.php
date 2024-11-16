<?php



namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\proveedores;
use Illuminate\Http\Request;


class ProveedorController extends Controller
{
    
    public function index()
    {
        $proveedores = Proveedores::all();
        return response()->json($proveedores, 200);
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'codigo' => 'required|string|max:4',
            'nombre' => 'required|string|max:50',
            'ruc' => 'required|string|max:50|unique:proveedores,ruc',
            'telefono' => 'required|integer',
            'direccion' => 'required|string',
           
        ]);

        $proveedor = Proveedores::create($request->all());
        return response()->json($proveedor, 201);
    }

    public function show($id)
    {
        $proveedor = Proveedores::find($id);
        if (!$proveedor) {
            return response()->json(['message' => 'Proveedor no encontrado'], 404);
        }
        return response()->json($proveedor, 200);
    }

   
    public function update(Request $request, $id)
    {
        $proveedor = Proveedores::find($id);
        if (!$proveedor) {
            return response()->json(['message' => 'Proveedor no encontrado'], 404);
        }

        $request->validate([
            'codigo' => 'sometimes|string|max:4',
            'nombre' => 'sometimes|string|max:50',
            'ruc' => 'sometimes|string|max:50|unique:proveedores,ruc,' . $proveedor->id,
            'telefono' => 'sometimes|integer',
            'direccion' => 'sometimes|string',
            
        ]);

        $proveedor->update($request->all());
        return response()->json($proveedor, 200);
    }

    
    public function destroy($id)
    {
        $proveedor = Proveedores::find($id);
        if (!$proveedor) {
            return response()->json(['message' => 'Proveedor no encontrado'], 404);
        }

        $proveedor->delete();
        return response()->json(['message' => 'Proveedor eliminado con éxito'], 200);
    }
}


