<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class proveedores extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;

    public function compra()
    {
        return $this->hasMany(compra::class);
    }
}
