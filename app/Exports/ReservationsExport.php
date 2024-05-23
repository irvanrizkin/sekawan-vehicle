<?php

namespace App\Exports;

use App\Models\Reservation;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ReservationsExport implements FromCollection, WithMapping, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Reservation::with('vehicle', 'user', 'approver', 'driver')->get();
    }

    public function map($reservation): array
    {
        return [
            $reservation->id,
            $reservation->purpose,
            $reservation->vehicle?->name,
            $reservation->start_date,
            $reservation->end_date,
            $reservation->approval_status,
            $reservation->approver?->name,
            $reservation->driver?->name,
            $reservation->user?->name,
        ];
    }

    public function headings(): array
    {
        return [
            'ID',
            'Purpose',
            'Vehicle',
            'Start Date',
            'End Date',
            'Approval Status',
            'Approver',
            'Driver',
            'User',
        ];
    }
}
