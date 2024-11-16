
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->string("codCompra",10);
            $table->dateTime("fecha");
            $table->integer("cantidad");
            $table->double("PrecioC");
            $table->text("descripcion");
            $table->foreignId('producto_id')->references('id')->on('productos')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('proveedores_id')->references('id')->on('proveedores')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compras');
    }
};
