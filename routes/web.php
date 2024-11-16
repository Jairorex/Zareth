<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('app'); // Asegúrate de que el nombre de la vista es correcto.
})->where('any', '.*');
