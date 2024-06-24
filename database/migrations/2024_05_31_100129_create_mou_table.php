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
        Schema::create('mou', function (Blueprint $table) {
            $table->id();
            $table->string('nomor', 50)->unique();
            $table->string('uraian', 100);
            $table->string('pihak_kedua', 100);
            $table->date('tmt_awal');
            $table->date('tmt_akhir');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mou');
    }
};
