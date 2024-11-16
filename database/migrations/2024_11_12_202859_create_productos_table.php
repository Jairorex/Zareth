<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Laravel\Prompts\table;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('codigo',4);
            $table->string("nombrePD",50);
            $table->text("descripcionPD");
            $table->integer("cantidad");
            $table->boolean("estado")->default(0);
            $table->foreignId('laboratorio_id')->references('id')->on('laboratorios')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('estante_id')->references('id')->on('estantes')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('tipo_producto_id')->references('id')->on('tipo_productos')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};


