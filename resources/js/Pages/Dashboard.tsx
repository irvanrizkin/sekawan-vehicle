import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { DashboardProps, PageProps } from '@/types';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

export default function Dashboard({ auth, vehiclesCount }: DashboardProps) {
    const data = {
        labels: vehiclesCount.map((vehicle) => vehicle.name),
        datasets: [
            {
                label: 'Reservations',
                data: vehiclesCount.map((vehicle) => vehicle.reservations_count),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Vehicle Usage Rate</div>
                        <div className="p-6">
                            <Bar data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
