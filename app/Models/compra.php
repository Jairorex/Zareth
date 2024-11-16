<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class compra extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;

    public function proveedores()
    {
        return $this->belongsTo(proveedores::class);
    }

    public function producto()
    {
        return $this->belongsTo(producto::class);
    }
}