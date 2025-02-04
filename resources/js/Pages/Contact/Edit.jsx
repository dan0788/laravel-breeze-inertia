import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Transition } from '@headlessui/react'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

const Edit = ({ auth, contact }) => {
    const { data, setData, post, errors, recentlySuccessful } = useForm({
        name: contact.name,
        avatar: null,
        phone: contact.phone,
        visibility: contact.visibility,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('contact.update', contact));
    };
    console.log(data);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Actualizar contacto
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
                            <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-green-600">
                                        Updated.
                                    </p>
                                </Transition>
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
                                    <select className='w-full'
                                        name="visibility"
                                        id="visibility"
                                        defaultValue={data.visibility}
                                        onChange={(e) => setData('visibility', e.target.value)}
                                    >
                                        <option disabled>Choose an option...</option>
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

export default Edit