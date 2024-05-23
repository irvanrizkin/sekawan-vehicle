import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { IndexVehicleProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function IndexVehicle({ auth, vehicles, can }: IndexVehicleProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vehicles</h2>}
        >
            <Head title="Vehicles" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-4">
                                {can.create && (
                                    <Link href={route('vehicles.create')}>
                                        <PrimaryButton>
                                            Create Vehicle
                                        </PrimaryButton>
                                    </Link>
                                )}
                            </div>
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">License Plate</th>
                                        <th className="px-4 py-2">Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vehicles.map(vehicle => (
                                        <tr key={vehicle.id}>
                                            <td className="border px-4 py-2">{vehicle.name}</td>
                                            <td className="border px-4 py-2">{vehicle.license_plate}</td>
                                            <td className="border px-4 py-2">{new Date(vehicle.created_at).toLocaleString()}</td>
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
