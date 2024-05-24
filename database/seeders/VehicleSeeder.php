<?php

namespace Database\Seeders;

use App\Models\Vehicle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Vehicle::factory()->create([
            'name' => 'Honda Brio',
            'license_plate' => 'N 111 CE',
        ]);

        Vehicle::factory()->create([
            'name' => 'Toyota Avanza',
            'license_plate' => 'B 444 AJA',
        ]);

        Vehicle::factory()->create([
            'name' => 'Daihatsu Gran Max',
            'license_plate' => 'L 444 PAR',
        ]);
    }
}
