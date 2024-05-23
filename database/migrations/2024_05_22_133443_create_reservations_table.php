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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->string('purpose');
            $table->foreignId('vehicle_id');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->smallInteger('approval_status')->default(0);
            $table->foreignId('approver_id')->nullable();
            $table->foreignId('driver_id')->nullable();
            $table->foreignId('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
