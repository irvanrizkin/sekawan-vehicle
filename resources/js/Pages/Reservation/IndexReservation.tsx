import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import statusString from '@/helpers/statusString';
import { IndexReservationProps } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

export default function IndexReservation({ auth, reservations, can }: IndexReservationProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Reservations</h2>}
        >
            <Head title="Reservations" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        {can.excel && (
                            <a 
                                href={route('reservations.export')}
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            >Export Excel</a>
                        )}
                        {can.create && (
                            <Link href={route('reservations.create')}>
                                <PrimaryButton>
                                    Create Reservation
                                </PrimaryButton>
                            </Link>
                        )}
                            <table className="table-auto w-full mt-3">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">ID</th>
                                        <th className="px-4 py-2">Purpose</th>
                                        <th className="px-4 py-2">Approval Status</th>
                                        <th className="px-4 py-2">Approver</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map(reservation => (
                                        <tr key={reservation.id}>
                                            <td className="border px-4 py-2">{reservation.id}</td>
                                            <td className="border px-4 py-2">{reservation.purpose}</td>
                                            <td className="border px-4 py-2">{statusString(reservation.approval_status)}</td>
                                            <td className="border px-4 py-2">{reservation.approver?.name}</td>
                                            <td className="border px-4 py-2">
                                                <a href={route('reservations.edit', reservation.id)} className="text-blue-500 hover:text-blue-700">Detail</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
