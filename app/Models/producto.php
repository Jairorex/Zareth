<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class producto extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;

    public function laboratorio()
    {
        return $this->belongsTo(laboratorio::class);
    }
    public function tipoProducto()
    {
        return $this->belongsTo(tipoProducto::class);
    }
    public function estante()
    {
        return $this->belongsTo(estante::class);
    }
   
    /*relacion con venta */
    public function venta()
    {
        return $this->hasMany(venta::class);
    }

    /*relacion con compra */
    public function compra()
    {
        return $this->hasMany(compra::class);
    }
}
