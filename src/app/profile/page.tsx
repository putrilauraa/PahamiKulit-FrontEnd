'use client';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
// import { Display } from '@geist-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Profile() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('detail');

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] min-h-screen`}
            >
                {/* Breadcrumb */}
                <p className="text-[#6B7280] text-sm py-5 ml-8">Profile</p>

                <div className="mx-45">
                    {/* Heading */}
                    <h1 className="flex text-[#405E93] text-4xl font-bold my-10">
                        Profil Saya
                    </h1>

                    <div className="bg-white rounded-2xl shadow-md p-10 flex">
                        {/* Left: Avatar + Tabs */}
                        <div className="w-1/3 flex flex-col items-center border-r border-gray-200 pr-15 ml-5">
                            {/* Avatar */}
                            <div className="w-55 h-55 bg-[#7092CF] rounded-full flex items-center justify-center mb-6">
                                <img
                                    src="/Expression-Mascot-07.png"
                                    alt="Avatar"
                                    className="w-50 h-auto"
                                />
                            </div>

                            {/* Tabs */}
                            <div className="space-y-3 w-full mt-4">
                                <button
                                    className={`w-full py-4 rounded-lg font-semibold text-xl transition ${
                                        activeTab === 'detail'
                                            ? 'bg-[#6B8ED6] text-white'
                                            : 'bg-transparent text-[#2C3E50]'
                                    }`}
                                    onClick={() => setActiveTab('detail')}
                                >
                                    Detail Akun
                                </button>
                                {/* <button className="w-full font-semibold text-xl hover:bg-[#7092CF] hover:text-white py-2 rounded-lg">
                                    Profil Kulit
                                </button> */}
                                <button
                                    className={`w-full py-4 rounded-lg font-semibold text-xl transition ${
                                        activeTab === 'profil'
                                            ? 'bg-[#6B8ED6] text-white'
                                            : 'bg-transparent text-[#2C3E50]'
                                    }`}
                                    onClick={() => setActiveTab('profil')}
                                >
                                    Profil Kulit
                                </button>
                            </div>
                        </div>

                        {/* Right: Info + Edit */}
                        <div className="w-2/3 pl-6 relative">
                            {/* Edit Button */}
                            <div className="absolute top-0 right-0">
                                <button
                                    onClick={() => router.push('/edit-profile')}
                                    className="border-2 border-black font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-[#7092CF] hover:border-[#7092CF] hover:text-white transition"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(112, 146, 207, 1)',
                                    }}
                                >
                                    Edit
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="space-y-6 mx-6 mt-2">
                                <div>
                                    <p className="text-xl text-gray-500 mb-1">
                                        Nama
                                    </p>
                                    <p className="text-lg font-semibold text-[#111827]">
                                        Johnny
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xl text-gray-500 mb-1">
                                        Email
                                    </p>
                                    <p className="text-lg font-semibold text-[#111827]">
                                        johnnyjohnny@yespapa.com
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xl text-gray-500 mb-1">
                                        Gender
                                    </p>
                                    <p className="text-lg font-semibold text-[#111827]">
                                        Pria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Logout Button */}
                    <div className="flex justify-end">
                        <button
                            className="bg-[#7092CF] text-white px-6 py-2 font-semibold text-lg rounded-full mt-5 hover:bg-[#405E93] transition"
                            style={{
                                boxShadow: '0px 4px 0px rgba(64, 94, 147, 1)',
                            }}
                        >
                            Keluar
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
