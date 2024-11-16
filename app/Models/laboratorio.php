<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class laboratorio extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;
    
    public function marca()
    {
        return $this->belongsTo(marca::class);
    }

   /*relacion con producto */
    public function producto()
    {
        return $this->hasMany(producto::class);
    }
}
