import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Index = ({ auth, contact }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                    <Link href={route('contact.create')}>
                        Crear contacto
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                Phone
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                Avatar
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                Visibility
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            contact?.map((element) => (
                                                <tr key={element.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                    <th scope="row" className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {element.name}
                                                    </th>
                                                    <td className="px-6 py-4 text-center">
                                                        {element.phone}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        <div className="flex justify-center">
                                                            <img src={`/storage/${element.avatar}`}
                                                                className='w-24' />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {element.visibility}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        <div className='flex justify-between'>
                                                            <Link href={route('contact.edit', [element.id])}>
                                                            Editar
                                                            </Link>
                                                            <Link href={route('contact.delete', [element.id])}
                                                            method='delete'>
                                                            Eliminar
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index