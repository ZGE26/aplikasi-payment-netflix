import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="flex items-center justify-center w-full h-screen min-h-screen bg-black">
            <Head title="Log in" />
            <div className='flex-1 w-full h-screen bg-white border'>
                <div className="flex flex-wrap h-full -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 w-full h-full py-8 bg-gray-800 rounded-lg shadow-md-col">
                <h2 className="mb-6 text-3xl font-bold text-center text-white">Login Film</h2>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-500">{status}</div>
                )}

                <form onSubmit={submit} className="w-3/4 space-y-4">
                    <div>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            label="Email address"
                            value={data.email}
                            className="mt-1 bg-gray-700 border-gray-600 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />


                        <InputError message={errors.email} className="mt-2 text-red-500" />
                    </div>

                    <div>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            value={data.password}
                            className="block w-full mt-1 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-red-600 focus:outline-none"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2 text-red-500" />
                    </div>

                    <div className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="text-red-600"
                        />
                        <span className="ml-2 text-sm text-gray-400">Remember me</span>
                    </div>

                    <div className="flex flex-col items-center justify-between mt-6 space-y-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-gray-400 underline hover:text-white focus:outline-none"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton
                            className="w-full py-2 text-lg font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:outline-none"
                            disabled={processing}
                        >
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
