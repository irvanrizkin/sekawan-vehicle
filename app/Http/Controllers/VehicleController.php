<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
{
    public function create()
    {
        return Inertia::render('Vehicle/CreateVehicle');
    }

    public function store()
    {
        request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'license_plate' => ['required', 'string', 'max:255'],
        ]);

        Vehicle::create([
            'name' => request('name'),
            'license_plate' => request('license_plate'),
        ]);

        return redirect()->route('vehicles.index');
    }

    public function index()
    {
        $vehicles = Vehicle::all();

        return Inertia::render('Vehicle/IndexVehicle', [
            'vehicles' => $vehicles,
            'can' => [
                'create' => request()->user()->can('create-vehicle'),
            ],
        ]);
    }
}
