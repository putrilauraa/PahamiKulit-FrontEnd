'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function DetailProduk() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] pb-20 min-h-screen overflow-hidden`}
            >
                {/* Breadcrumbs */}
                <nav className="mt-8 ml-8 text-sm space-x-2">
                    <a
                        href="/basic-skincare"
                        className="hover:underline text-[#7092CF]"
                    >
                        Basic Skincare
                    </a>
                    <span>/</span>
                    <a
                        href="/produk-basic-skincare"
                        className="hover:underline text-[#7092CF]"
                    >
                        Produk Basic Skincare
                    </a>
                    <span>/</span>
                    <a
                        href="/detail-produk-cleanser"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Cleanser
                    </a>
                </nav>

                <img
                    src="Holding-Cleanser.png"
                    alt="Mascot"
                    className="absolute w-80 h-auto right-42 pt-17 drop-shadow-[4px_0px_0px_rgba(0,0,0,0.15)]"
                />

                <div
                    className="bg-white rounded-2xl px-6 py-4 mx-45 border-3 border-[#7092CF] mt-15 w-5xl"
                    style={{
                        boxShadow: '8px 8px 0px rgba(185, 203, 232, 1)',
                    }}
                >
                    <div className="flex items-center">
                        <img
                            src="Mousse-Cleanser.jpg"
                            alt="Cleanser"
                            className="w-50 h-auto"
                        />
                        <div className="flex-1 ml-2">
                            <div className="text-sm bg-[#E6EEFC] rounded px-2 inline-block font-medium">
                                Pembersih
                            </div>
                            <div className="text-lg font-bold mt-2">
                                Hyalupure
                            </div>
                            <div className="font-bold text-3xl mb-4">
                                9X Hyaluronic Acid Gentle Cleansing Mousse
                            </div>
                            <div className="bg-white border border-green-400 text-green-400 font-medium py-1 px-2 rounded text-sm inline-block">
                                <div className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="lucide lucide-shield-check-icon lucide-shield-check mr-2"
                                    >
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                    <p>Terdaftar BPOM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-white rounded-2xl p-6 mx-45 border-3 border-[#7092CF] mt-10"
                    style={{
                        boxShadow: '8px 8px 0px rgba(185, 203, 232, 1)',
                    }}
                >
                    <div className="">
                        <div className="bg-[#D5E4FF] rounded-md p-4 h-27">
                            <p className="font-bold mb-1">Cocok Untuk</p>
                            <p>Semua jenis kulit</p>
                        </div>
                        <div className="bg-[#FFD5E9] rounded-md p-4 my-4 h-27">
                            <p className="font-bold mb-1">Bahan Utama</p>
                            <p>3X Ceramide, 9X Hyaluronic Acid, Niacinamide</p>
                        </div>
                        <div className="bg-[#D5E4FF] rounded-md p-4 h-27">
                            <p className="font-bold mb-1">Manfaat</p>
                            <p>
                                Membersihkan wajah dengan lembut, Membersihkan
                                minyak berlebih , Mencegah timbulnya jerawat,
                                Membuat kulit wajah bersih dan lembut
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
