<?php

namespace App\Http\Controllers;

use App\Exports\ReservationsExport;
use App\Models\Log;
use App\Models\Reservation;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ReservationController extends Controller
{
    public function create()
    {
        $vehicles = Vehicle::all();

        return Inertia::render('Reservation/CreateReservation', [
            'vehicles' => $vehicles,
        ]);
    }

    public function index(Request $request)
    {
        if (Gate::allows('approve-reservation')) {
            $reservations = Reservation::with('approver')->where('approver_id', auth()->id())->get();
        } else if (Gate::allows('assign-reservation')) {
            $reservations = Reservation::with('approver')->get();
        } else {
            $reservations = Reservation::with('approver')->where('user_id', auth()->id())->get();
        }

        return Inertia::render('Reservation/IndexReservation', [
            'reservations' => $reservations,
            'can' => [
                'excel' => $request->user()->can('export-excel'),
                'create' => $request->user()->can('create-reservation'),
            ],
        ]);
    }

    public function store()
    {
        request()->validate([
            'purpose' => ['required', 'string', 'max:255'],
            'vehicle_id' => ['required', 'integer', 'exists:vehicles,id'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date'],
        ]);

        $reservation = Reservation::create([
            'purpose' => request('purpose'),
            'vehicle_id' => request('vehicle_id'),
            'start_date' => request('start_date'),
            'end_date' => request('end_date'),
            'approval_status' => 0,
            'approver_id' => null,
            'driver_id' => null,
            'user_id' => auth()->id(),
        ]);

        Log::create([
            'scope' => 'reservation:create:employee',
            'message' => auth()->user()->name . " created a reservation " . $reservation->id,
        ]);

        return redirect()->route('dashboard');
    }

    public function edit(Request $request,int $id)
    {
        $reservation = Reservation::findOrFail($id);
        $drivers = User::where('role', 'driver')->get();
        $approvers = User::where('role', 'manager')->get();

        return Inertia::render('Reservation/EditReservation', [
            'reservation' => [
                'id' => $reservation->id,
                'purpose' => $reservation->purpose,
                'vehicle_id' => $reservation->vehicle_id,
                'vehicle' => $reservation->vehicle,
                'start_date' => $reservation->start_date,
                'end_date' => $reservation->end_date,
                'approval_status' => $reservation->approval_status,
                'approver_id' => $reservation->approver_id,
                'driver_id' => $reservation->driver_id,
            ],
            'drivers' => $drivers,
            'approvers' => $approvers,
            'can' => [
                'approve' => $request->user()->can('approve-reservation'),
                'assign' => $request->user()->can('assign-reservation'),
            ],
        ]);
    }

    public function update(int $id)
    {
        $reservation = Reservation::findOrFail($id);

        $reservation->update([
            'approval_status' => request('approval_status'),
            'approver_id' => request('approver_id'),
            'driver_id' => request('driver_id'),
        ]);

        if ($reservation->approval_status == 3) {
            Log::create([
                'scope' => 'reservation:update:' . auth()->user()->role,
                'message' => auth()->user()->name . " reject the reservation with ID " . $reservation->id,
            ]);
        } else {
            Log::create([
                'scope' => 'reservation:update:' . auth()->user()->role,
                'message' => auth()->user()->name . " approve the reservation with ID " . $reservation->id,
            ]);
        }

        return redirect()->route('reservations.index');
    }

    public function exportExcel(Request $request)
    {
        if (!$request->user()->can('export-excel')) {
            abort(403);
        }

        return Excel::download(new ReservationsExport, 'reservations.xlsx');
    }
}
