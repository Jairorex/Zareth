<?php


use App\Http\Controllers\api\admin\CompraController;
use App\Http\Controllers\api\admin\EstanteController;
use App\Http\Controllers\api\admin\LabController;
use App\Http\Controllers\api\admin\MarcaController;
use App\Http\Controllers\api\admin\ProductoController;
use App\Http\Controllers\api\admin\ProveedorController;
use App\Http\Controllers\api\admin\TipoController;
use App\Http\Controllers\api\admin\UserController;
use App\Http\Controllers\api\admin\VentaController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function(){
    // Public Routes
    

    // Admin Routes sin middleware
    Route::apiResource('/admin/user', UserController::class);
    Route::apiResource('/admin/laboratorio', LabController::class);
    Route::apiResource('/admin/marca', MarcaController::class);
    Route::apiResource('/admin/tipo', TipoController::class);
    Route::apiResource('/admin/estante', EstanteController::class);
    Route::apiResource('/admin/producto', ProductoController::class);
    Route::apiResource('/admin/proveedor', ProveedorController::class);
    Route::apiResource('/admin/compra', CompraController::class);
    Route::apiResource('/admin/venta', VentaController::class);
});



