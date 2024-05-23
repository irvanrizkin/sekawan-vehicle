import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { IndexVehicleProps } from "@/types";
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateReservation({ auth, vehicles }: IndexVehicleProps) {
    const [values, setValues] = useState({
        purpose: '',
        vehicle_id: '',
        start_date: '',
        end_date: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.post(route('reservations.store'), values);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Reservation</h2>}
        >
            <Head title="Create Reservation" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="p-6 text-gray-900">
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="purpose"
                                    >
                                        Purpose
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="purpose"
                                        type="text"
                                        placeholder="Purpose"
                                        onChange={handleChange}
                                        value={values.purpose}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="vehicle_id"
                                    >
                                        Vehicle
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="vehicle_id"
                                        onChange={handleChange}
                                        value={values.vehicle_id}
                                    >
                                        <option value="">Select Vehicle</option>
                                        {vehicles.map(vehicle => (
                                            <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="start_date"
                                    >
                                        Start Date
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="start_date"
                                        type="date"
                                        onChange={handleChange}
                                        value={values.start_date}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="end_date"
                                    >
                                        End Date
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="end_date"
                                        type="date"
                                        onChange={handleChange}
                                        value={values.end_date}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
