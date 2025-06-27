'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { LOCAL_API_URL } from '@/configs/app';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

const API_URL = `${LOCAL_API_URL}/users/register`;

export default function Regist() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        const requestData = {
            email,
            username,
            password,
            gender,
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();

            if (response.ok) {
                // use 'succes' instead of 'success' due to api response is 'succes' not 'success' :>
                if (data.succes) {
                    setMessage(`User ${data.user} successfully registered!`);
                    console.log('Redirecting to home...');
                    router.push('/'); // Ensure you're calling it after the API succeeds
                } else {
                    setMessage(
                        data.message ||
                            'Registration failed. Please try again.',
                    );
                }
            } else {
                setMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            setMessage('Error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // const handleRoutePush = () => {
    //     if (message.includes('failed')) {
    //         setMessage('');
    //     } else {
    //         router.push('/');
    //     }
    // };

    return (
        <>
            <Navbar />

            <div className={`${montserrat.className} min-h-screen`}>
                <div className="my-15 lg:my-25">
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="text-2xl lg:text-5xl font-extrabold">
                            Daftarkan Akun Kamu
                        </h1>
                        {/* Description */}
                        <div className="text-xs lg:text-xl mt-2 lg:mt-4">
                            <p>Memahami basic skincare bersama PahamiKulit.</p>
                            <p>Ayo mulai!</p>
                        </div>
                    </div>

                    <img
                        src="Elements-05.png"
                        alt="Element"
                        className="hidden lg:block absolute -left-48 mt-35"
                    />

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center justify-center mt-10 lg:mt-14 mx-5 lg:mx-45"
                    >
                        <div className="space-y-2 lg:space-y-4">
                            {/* username */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="username"
                                    className="font-semibold"
                                >
                                    Nama Pengguna
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        required
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                    />
                                </div>
                            </div>

                            {/* email */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="email"
                                    className="font-semibold"
                                >
                                    Email
                                </label>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                    />
                                </div>
                            </div>

                            {/* password */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="password"
                                    className="font-semibold"
                                >
                                    Kata Sandi
                                </label>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                    />
                                </div>
                            </div>

                            {/* gender */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="gender"
                                    className="font-semibold"
                                >
                                    Jenis Kelamin
                                </label>
                                <div>
                                    <select
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                        id="gender"
                                        name="gender"
                                        value={gender}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                        required
                                    >
                                        <option value=""></option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            {message && (
                                <div className="text-center text-sm text-red-500 mt-3">
                                    {message}
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="flex justify-center mt-6 lg:mt-10">
                                <button
                                    type="submit"
                                    className="w-xs lg:w-xl text-white p-3 rounded-md text-center mb-2 bg-[#7092CF] text-sm lg:text-lg font-semibold hover:bg-[#405E93]"
                                    style={{
                                        boxShadow:
                                            '0 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading...' : 'Daftar'}
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Button Sudah punya akun */}
                    <div className="text-xs lg:text-base text-center mt-2 lg:mt-4">
                        <p>
                            Sudah punya akun?{' '}
                            <a
                                href="/"
                                className="font-semibold text-[#7092CF]"
                            >
                                Masuk sekarang
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-5 lg:pt-10">
                <Footer />
            </div>
        </>
    );
}
