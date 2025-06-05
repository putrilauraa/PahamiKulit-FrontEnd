'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function basicSkincare() {
    const [skinType, setSkinType] = useState('');
    const [skinProblem, setSkinProblem] = useState('');
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] min-h-screen pt-22`}
            >
                <div className="absolute bg-[#D64F7E] text-white text-lg font-semibold py-2 px-4 rounded-full ml-63 top-33">
                    Produk Lokal
                </div>
                <div className="bg-white mx-55 p-12 rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl w-3xl">
                    <h1 className="text-4xl font-bold mb-4">
                        Rekomendasi Skincare
                    </h1>
                    <p>
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
                    className="absolute right-70 w-95 h-auto -scale-x-100 top-66"
                />

                <div className="relative flex w-full justify-center items-center">
                    <div
                        className="absolute bg-[#FFF6ED] rounded-xl border-3 border-[#7092CF] px-12 py-20 mt-145"
                        style={{
                            boxShadow: '6px 6px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <div className="flex flex-col md:flex-row gap-6 mb-8 w-full justify-center">
                            <div className="relative flex flex-col w-full">
                                {/* Jenis Kulit */}
                                <label className="text-center font-semibold mb-2 text-xl">
                                    Jenis Kulit
                                </label>
                                <select
                                    value={skinType}
                                    onChange={(e) =>
                                        setSkinType(e.target.value)
                                    }
                                    className={`appearance-none w-xl border-2 border-[#B9CBE8]] bg-white rounded-md px-4 py-3 focus:outline-none
    ${skinType === '' ? 'text-gray-400' : 'text-black'}`}
                                >
                                    <option value="">Pilih jenis kulit</option>
                                    <option value="kering">Kering</option>
                                    <option value="berminyak">Berminyak</option>
                                    <option value="kombinasi">Kombinasi</option>
                                    <option value="normal">Normal</option>
                                </select>
                                {/* Chevron Icon */}
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 pt-10">
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
                                <label className="text-center font-semibold mb-2 text-xl">
                                    Masalah Kulit
                                </label>
                                <select
                                    value={skinProblem}
                                    onChange={(e) =>
                                        setSkinProblem(e.target.value)
                                    }
                                    className={`appearance-none  w-xl border-2 border-[#B9CBE8]] bg-white rounded-md px-4 py-3 focus:outline-none
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
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-16 pb-16">
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
                        <div className="flex justify-center font-semibold pt-6">
                            <button
                                // type="submit"
                                onClick={() => alert('Lanjut')}
                                className="bg-[#7092CF] text-white px-12 py-3 rounded-full hover:bg-[#405E93] transition"
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
