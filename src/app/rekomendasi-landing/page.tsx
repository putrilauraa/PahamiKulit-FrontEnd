'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

const skinTypeMap: Record<string, number> = {
    berminyak: 1,
    kombinasi: 2,
    kering: 3,
    normal: 4,
};

const skinProblemMap: Record<string, number> = {
    jerawat: 1,
    iritasi: 2,
    kusam: 3,
};

export default function RekomendasiSkincare() {
    const [skinType, setSkinType] = useState('');
    const [skinProblem, setSkinProblem] = useState('');
    const router = useRouter();

    const handleSubmit = async () => {
        const skin_test_result_id = skinTypeMap[skinType];
        const skin_problem_id = skinProblemMap[skinProblem];

        if (!skin_test_result_id || !skin_problem_id) {
            alert('Mohon pilih jenis dan masalah kulit terlebih dahulu.');
            return;
        }

        try {
            const res = await fetch('/api/recommendation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ skin_test_result_id, skin_problem_id }),
            });

            const data = await res.json();

            if (!res.ok || !Array.isArray(data)) {
                throw new Error('Gagal mendapatkan rekomendasi.');
            }

            // Pass data via query or state (optional); we'll use localStorage here for simplicity
            localStorage.setItem('recommendation', JSON.stringify(data));
            router.push('/hasil-rekomendasi');
        } catch (err) {
            alert('Terjadi kesalahan saat mengambil rekomendasi.');
            console.error(err);
        }
    };

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] min-h-screen pt-13 lg:pt-22`}
            >
                <div className="absolute bg-[#D64F7E] text-white text-xs lg:text-lg font-semibold py-2 px-4 rounded-full ml-35 lg:ml-63 top-25 lg:top-33">
                    Produk Lokal
                </div>
                <div
                    className="bg-white mx-9 lg:mx-55 p-6 lg:p-12 rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl lg:w-3xl"
                    style={{
                        boxShadow: '5px 5px 0px rgba(185, 203, 232)',
                    }}
                >
                    <h1 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4">
                        Rekomendasi Skincare
                    </h1>
                    <p className="text-xs lg:text-base">
                        Yuk, cari tahu produk skincare lokal yang cocok buat
                        kulit kamu lewat fitur rekomendasi ini! Cukup isi info
                        jenis dan masalah kulitmu, dan biarkan sistem kami kasih
                        saran produk yang pas, aman, dan pastinya ramah buat
                        pemula.
                    </p>
                </div>
                <img
                    src="Pink-15.png"
                    alt="Mascot"
                    className="absolute right-22 lg:right-70 w-60 lg:w-95 h-auto -scale-x-100 top-68 lg:top-66"
                />

                <div className="relative flex w-full justify-center items-center">
                    <div
                        className="absolute bg-[#FFF6ED] rounded-xl border-2 lg:border-3 border-[#7092CF] px-6 py-8 lg:px-12 lg:py-20 mt-145"
                        style={{
                            boxShadow: '6px 6px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <div className="flex flex-col md:flex-row gap-6 mb-4 lg:mb-8 lg:w-full justify-center">
                            <div className="relative flex flex-col lg:w-full">
                                {/* Jenis Kulit */}
                                <label className="text-sm text-center font-semibold mb-2 lg:text-xl">
                                    Jenis Kulit
                                </label>
                                <select
                                    value={skinType}
                                    onChange={(e) =>
                                        setSkinType(e.target.value)
                                    }
                                    className={`appearance-none w-2xs text-sm lg:text-base lg:w-xl border-2 border-[#B9CBE8]] bg-white rounded-md px-4 py-3 focus:outline-none
    ${skinType === '' ? 'text-gray-400' : 'text-black'}`}
                                >
                                    <option value="">Pilih jenis kulit</option>
                                    <option value="kering">Kering</option>
                                    <option value="berminyak">Berminyak</option>
                                    <option value="kombinasi">Kombinasi</option>
                                    <option value="normal">Normal</option>
                                </select>
                                {/* Chevron Icon */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 pt-8">
                                    <svg
                                        className="w-6 h-6 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* Masalah Kulit */}
                            <div className="flex flex-col w-full">
                                <label className="text-sm text-center font-semibold mb-2 lg:text-xl">
                                    Masalah Kulit
                                </label>
                                <select
                                    value={skinProblem}
                                    onChange={(e) =>
                                        setSkinProblem(e.target.value)
                                    }
                                    className={`appearance-none w-2xs text-sm lg:text-base lg:w-xl border-2 border-[#B9CBE8]] bg-white rounded-md px-4 py-3 focus:outline-none
    ${skinProblem === '' ? 'text-gray-400' : 'text-black'}`}
                                >
                                    <option value="">
                                        Pilih masalah kulit
                                    </option>
                                    <option value="jerawat">Berjerawat</option>
                                    <option value="kusam">Kusam</option>
                                    <option value="iritasi">Iritasi</option>
                                </select>
                                {/* Chevron Icon */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-10 lg:pr-16 pt-16 lg:pt-0 lg:pb-16">
                                    <svg
                                        className="w-6 h-6 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        {/* Lanjut button */}
                        <div className="flex justify-center font-semibold pt-3 lg:pt-6">
                            <button
                                onClick={handleSubmit}
                                className="bg-[#7092CF] text-white text-xs lg:text-base px-5 lg:px-12 py-2 lg:py-3 rounded-full hover:bg-[#405E93] transition"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(64, 94, 147, 1)',
                                }}
                            >
                                Lanjut
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
