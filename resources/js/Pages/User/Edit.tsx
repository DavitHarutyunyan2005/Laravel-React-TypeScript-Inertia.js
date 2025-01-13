import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Radio from '@/Components/Radio';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { User } from '@/types';
import { Head, useForm, usePoll } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Edit({ roles, user, roleLabels }: { roles: any, user: User, roleLabels: Record<string, string> }) {


    const {
        data,
        setData,
        processing,
        errors,
        put
    } = useForm({
        name: user.name,
        email: user.email,
        roles: user.roles,
    });

    const updateUser: FormEventHandler = (event) => {
        event.preventDefault();

        put(route('user.update', user.id), {
            preserveScroll: true
        })
    };

    const onRoleChange = (ev: any) => {
            setData('roles', [ev.target.value]);
    }
    
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit User <b>"{user.name}"</b>
                </ h2>
            }
        >
            <Head title={'Edit User' + user.name} />

            <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                    <form onSubmit={updateUser} className='w-full'>
                        <div className='mb-8'>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                disabled 
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                isFocused
                                autoComplete="name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div className='mb-8'>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                disabled
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />

                            <InputError className="mt-2" message={errors.email} />
                        </div>

                        <div className='mb-8'>
                        <InputLabel value="Role" className='mb-2'/>
                            {roles.map((role: any) => (
                                <div key={role.id}>
                                    <label className='flex items-center mb-2' key={role.id}>

                                        <Radio
                                            name="roles"
                                            value={role.name}
                                            checked={data.roles.includes(role.name)}
                                            onChange={(ev)=> onRoleChange(ev)}
                                        />
                                        <span className='ms-2 text-sm text-gray-600 dark:text-gray-400'>
                                            {roleLabels[role.name]}
                                        </span>
                                    </label>

                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={processing}>Save</PrimaryButton>
                        </div>

                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}