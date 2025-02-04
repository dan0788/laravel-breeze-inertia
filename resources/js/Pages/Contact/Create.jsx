import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

const Create = ({ auth }) => {

    const { data, setData, post, errors } = useForm({
        name: "",
        avatar: null,
        phone: "",
        visibility: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('contact.store'));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                    <Link href={route('contact.index')}>
                        Contactos
                    </Link>
                </div>
            }
        >
            <Head title="Create" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className='space-y-3'>
                                <div>
                                    <InputLabel htmlFor="name" value="Name:" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                    <InputLabel htmlFor="phone" value="Phone:" />
                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('phone', e.target.value)}
                                    />
                                    <InputError message={errors.phone} className="mt-2" />
                                    <InputLabel htmlFor="avatar" value="Avatar:" />
                                    <TextInput
                                        id="avatar"
                                        type="file"
                                        name="avatar"
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('avatar', e.target.files[0])}
                                    />
                                    <InputError message={errors.avatar} className="mt-2" />
                                    <InputLabel htmlFor="visibility" value="Visibility:" />
                                    <select name="visibility"
                                        id="visibility"
                                        className='w-full'
                                        defaultValue="Public"
                                        onChange={(e) => setData('visibility', e.target.value)}
                                    >
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                    </select>
                                    <InputError message={errors.visibility} className="mt-2" />
                                </div>
                                <div className="flex justify-center mt-4">
                                    <PrimaryButton>
                                        Submit
                                    </PrimaryButton>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Create