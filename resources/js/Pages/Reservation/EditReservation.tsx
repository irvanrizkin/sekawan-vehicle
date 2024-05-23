import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import statusString from '@/helpers/statusString';
import { EditReservationProps } from "@/types";
import { Head, router } from '@inertiajs/react';
import { useState } from "react";

export default function EditReservation({ auth, reservation, drivers, approvers }: EditReservationProps) {
    const [values, setValues] = useState({
        driver_id: reservation.driver_id || '',
        approver_id: reservation.approver_id || '',
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
        router.patch(route('reservations.update', reservation.id), {
            approval_status: 1,
            ...values
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Reservation</h2>}
        >
            <Head title="Edit Reservation" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='text-xl font-bold mb-3'>Reservation Detail</div>
                            <table className='w-full border-separate border-spacing-y-3'>
                                <tbody>
                                    <tr className=''>
                                        <td className="font-bold">Purpose</td>
                                        <td>{reservation.purpose}</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="font-bold">Vehicle</td>
                                        <td>{reservation.vehicle.name}</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="font-bold">Start Date</td>
                                        <td>{reservation.start_date}</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="font-bold">End Date</td>
                                        <td>{reservation.end_date}</td>
                                    </tr>
                                    <tr className=''>
                                        <td className="font-bold">Status</td>
                                        <td>{statusString(reservation.approval_status)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6 text-gray-900">
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="driver_id"
                                    >
                                        Driver
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="driver_id"
                                        onChange={handleChange}
                                        value={values.driver_id}
                                    >
                                        <option value="">Select Driver</option>
                                        {drivers.map(driver => (
                                            <option key={driver.id} value={driver.id}>
                                                {driver.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="approver_id"
                                    >
                                        Approver
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="approver_id"
                                        onChange={handleChange}
                                        value={values.approver_id}
                                    >
                                        <option value="">Select Approver</option>
                                        {approvers.map(approver => (
                                            <option key={approver.id} value={approver.id}>
                                                {approver.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Assign
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
