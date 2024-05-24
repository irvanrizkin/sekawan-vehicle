<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin Test',
            'email' => 'admin@test.com',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        User::factory()->create([
            'name' => 'Manager 1 Test',
            'email' => 'manager1@test.com',
            'password' => bcrypt('password'),
            'role' => 'manager',
        ]);

        User::factory()->create([
            'name' => 'Manager 2 Test',
            'email' => 'manager2@test.com',
            'password' => bcrypt('password'),
            'role' => 'manager',
        ]);

        User::factory()->create([
            'name' => 'Driver 1 Test',
            'email' => 'driver1@test.com',
            'password' => bcrypt('password'),
            'role' => 'driver',
        ]);

        User::factory()->create([
            'name' => 'Driver 2 Test',
            'email' => 'driver2@test.com',
            'password' => bcrypt('password'),
            'role' => 'driver',
        ]);

        User::factory()->create([
            'name' => 'Employee 1 Test',
            'email' => 'employee1@test.com',
            'password' => bcrypt('password'),
            'role' => 'employee',
        ]);

        User::factory()->create([
            'name' => 'Employee 2 Test',
            'email' => 'employee2@test.com',
            'password' => bcrypt('password'),
            'role' => 'employee',
        ]);

        User::factory()->create([
            'name' => 'Employee 3 Test',
            'email' => 'employee3@test.com',
            'password' => bcrypt('password'),
            'role' => 'employee',
        ]);
    }
}
