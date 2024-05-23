<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::withCount([
            'reservations' => function (Builder $query) {
                $query->where('approval_status', 2);
            },
        ])->get();

        return Inertia::render('Dashboard', [
            'vehiclesCount' => $vehicles,
        ]);
    }
}
