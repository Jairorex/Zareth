<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tipoProducto extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;
    /*relacion con producto */
    public function productos()
    {
        return $this->hasMany(producto::class);
    }
}
