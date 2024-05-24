import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { IndexLogProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function IndexLog({ auth, logs }: IndexLogProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Logs</h2>}
        >
            <Head title="Logs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Scope</th>
                                        <th className="px-4 py-2">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {logs.map(log => (
                                        <tr key={log.id}>
                                            <td className="border px-4 py-2">{log.scope}</td>
                                            <td className="border px-4 py-2">{log.message}</td>
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