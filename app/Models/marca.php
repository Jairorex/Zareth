<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class marca extends Model
{
    use HasFactory;
    protected $guarded =[];
    public $timestamps = false;

    public function laboratorio(){
        return $this->hasMany(laboratorio::class);
    }
}
