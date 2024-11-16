<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class estante extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;
    /*relacion con producto */
    public function producto()
    {
        return $this->hasMany(producto::class);
    }
}