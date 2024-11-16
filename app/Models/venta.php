<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class venta extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;

    public function producto()
    {
        return $this->belongsTo(producto::class);
    }
}


