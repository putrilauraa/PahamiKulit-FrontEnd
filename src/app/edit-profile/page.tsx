'use client';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
// import { Display } from '@geist-ui/react';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Profile() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} min-h-screen`}
                style={{
                    // color: '#405E93',
                    background: '#E6EEFC',
                }}
            >
                {/* Breadcrumb */}
                <p className="text-[#6B7280] text-sm py-5 ml-8">Profile</p>

                <div className="mx-45">
                    {/* Heading */}
                    <h1 className="flex text-[#405E93] text-4xl font-bold my-10">
                        Profil Saya
                    </h1>

                    {/* Card Container */}
                    <div className="bg-white rounded-2xl shadow-md p-10 flex gap-8 mx-auto">
                        {/* Avatar Section */}
                        <div className="justify-center items-center">
                            <div className="w-55 h-55 bg-[#7092CF] rounded-full flex items-center justify-center mx-15 mt-5">
                                <img
                                    src="/Expression-Mascot-07.png"
                                    alt="Avatar"
                                    className="w-50 h-auto"
                                />
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block w-px bg-gray-200"></div>

                        {/* Form Section */}
                        <form className="flex-1 space-y-6 mx-6">
                            <div>
                                <label className="block text-xl font-semibold my-4 text-gray-600 mb-3">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="w-2xl text-lg border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#7092CF]"
                                    defaultValue="Johnny"
                                />
                            </div>

                            <div>
                                <label className="block text-xl font-semibold text-gray-600 mb-3">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-2xl text-lg border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#7092CF]"
                                    defaultValue="johnnyjohnny@yespapa.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xl font-semibold text-gray-600 mb-3">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-2xl text-lg border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#7092CF]"
                                    defaultValue="•••••••"
                                />
                            </div>

                            <div className="flex justify-end text-lg font-semibold pt-5">
                                <button
                                    onClick={() => router.push('/profile')}
                                    type="submit"
                                    className="bg-[#7092CF] text-white px-6 py-3 rounded-full hover:bg-[#405E93] transition"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
