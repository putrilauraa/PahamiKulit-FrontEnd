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
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    const handleLogout = () => {
        setShowLogoutDialog(true);
    };

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] min-h-screen`}
            >
                {/* Breadcrumb */}
                <p className="text-[#E6EEFC] text-sm lg:py-5 ml-8">Profile</p>

                <div className="mx-5 lg:mx-45">
                    {/* Heading */}
                    <h1 className="flex text-[#405E93] text-2xl lg:text-4xl font-bold my-5 lg:my-10">
                        Profil Saya
                    </h1>

                    <div className="bg-white rounded-2xl shadow-md p-5 lg:p-10 lg:flex">
                        {/* Left: Avatar + Tabs */}
                        <div className="lg:w-1/3 flex flex-col items-center lg:border-r border-gray-200 lg:pr-15 lg:ml-5 p-5 lg:p-0">
                            {/* Avatar */}
                            <div className="w-30 h-30 lg:w-55 lg:h-55 bg-[#7092CF] rounded-full flex items-center justify-center mb-6">
                                <img
                                    src="/Expression-Mascot-07.png"
                                    alt="Avatar"
                                    className="w-30 lg:w-50 h-auto"
                                />
                            </div>

                            {/* Tabs */}
                            <div className="space-y-2 lg:space-y-3 w-full lg:mt-4">
                                <button
                                    className={`w-full py-2 lg:py-4 rounded-lg font-semibold lg:text-xl transition ${
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
                                    className={`w-full py-2 lg:py-4 rounded-lg font-semibold lg:text-xl transition ${
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
                        <div className="lg:w-2/3 lg:pl-6 relative pb-5 lg:pb-0">
                            {/* Edit Button */}
                            <div className="absolute top-64 lg:top-0 right-68 lg:right-0">
                                <button
                                    onClick={() => router.push('/edit-profile')}
                                    className="border-2 border-black font-semibold text-sm bg-white lg:text-base px-6 lg:px-5 py-2 rounded-full shadow-sm hover:bg-[#7092CF] hover:border-[#7092CF] hover:text-white transition"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(112, 146, 207, 1)',
                                    }}
                                >
                                    Edit
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="space-y-4 lg:space-y-6 mx-5 lg:mx-6 lg:mt-2">
                                <div>
                                    <p className="text-sm lg:text-xl text-gray-500 mb-1">
                                        Nama
                                    </p>
                                    <p className="text-lg font-semibold text-[#111827]">
                                        Johnny
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm lg:text-xl text-gray-500 mb-1">
                                        Email
                                    </p>
                                    <p className="text-lg font-semibold text-[#111827]">
                                        johnnyjohnny@yespapa.com
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm lg:text-xl text-gray-500 mb-1">
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
                    <div className="flex justify-end mt-3 lg:mt-0">
                        <button
                            onClick={() => handleLogout()}
                            className="bg-[#7092CF] text-white px-6 py-2 font-semibold text-sm lg:text-lg rounded-full mt-5 hover:bg-[#405E93] transition"
                            style={{
                                boxShadow: '0px 4px 0px rgba(64, 94, 147, 1)',
                            }}
                        >
                            Keluar
                        </button>
                    </div>

                    {showLogoutDialog && (
                        <div className="fixed inset-0 z-50 backdrop-brightness-45 flex items-center justify-center">
                            <div className="relative bg-white p-13 rounded-xl max-w-lg text-center border-1">
                                <h2 className="text-2xl font-bold mb-4">
                                    Yakin mau keluar?
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Kamu akan keluar dari akun ini dan perlu
                                    login kembali untuk mengakses semua fitur
                                </p>

                                <div className="flex justify-center gap-4">
                                    <button
                                        onClick={() =>
                                            setShowLogoutDialog(false)
                                        }
                                        className="bg-white hover:bg-[#405E93] hover:text-white border-black hover:border-[#405E93] px-8 py-2 rounded-lg border-2"
                                        style={{
                                            boxShadow:
                                                '0 4px 0px rgba(64, 94, 147, 1)',
                                        }}
                                    >
                                        Batal
                                    </button>
                                    <button
                                        onClick={() => router.push('/')}
                                        className="bg-[#7092CF] hover:bg-[#405E93] text-white px-8 py-2 rounded-lg"
                                        style={{
                                            boxShadow:
                                                '0 4px 0px rgba(64, 94, 147, 1)',
                                        }}
                                    >
                                        Ya, keluar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
