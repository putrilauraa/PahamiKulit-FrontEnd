'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function ProdukBasicSkincare() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div className={`${montserrat.className} overflow-hidden`}>
                {/* Breadcrumbs */}
                <nav className="mt-5 ml-5 lg:ml-8 text-xs lg:text-sm space-x-2">
                    <a href="/basic-skincare" className="hover:underline text-[#7092CF]">
                        Basic Skincare
                    </a>
                    <span>/</span>
                    <a
                        href="/produk-basic-skincare"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Produk Basic Skincare
                    </a>
                </nav>

                {/* Title Section */}
                <div
                    className="hidden lg:block absolute h-80 w-auto mt-3 right-40"
                    style={{
                        clipPath: 'inset(20px 30px 40px 10px)',
                    }}
                >
                    <img
                        src="/Pink-7.png"
                        alt="Mascot"
                        className="w-140 h-auto -mt-5"
                    />
                </div>

                <div className="text-white bg-gradient-to-t from-[#B5CBF0] to-[#7293D0] mx-5 lg:mx-35 mt-7 lg:mt-14 mb-10 lg:mb-60 rounded-2xl px-6 py-6 lg:px-14 lg:py-12">
                    <h1 className="text-xl lg:text-4xl font-bold lg:pb-3">
                        Produk Basic Skincare
                    </h1>
                    <p className="lg:font-semibold text-sm lg:lg:text-lg lg:w-3xl">
                        Nah, kenalan dulu yuk sama produk yang wajib jadi teman
                        sehari-hari kulitmu!
                    </p>
                    <p className="text-xs lg:text-base mt-3 lg:w-3xl">
                        Di halaman ini, kamu bisa cari tahu fungsi masing-masing
                        produk, cara penggunaan, tipe-tipe produk, dan contoh
                        produk lokalnya. Yuk, rawat kulitmu dengan langkah yang
                        tepat dari awal!
                    </p>
                    {/* <p className="text-base mt-1 text-[#ffffff]">
                    </p> */}
                </div>

                {/* Product Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-5 lg:mx-35 mb-10 lg:mb-20">
                    <div
                        className="bg-[#D5E4FF] rounded-xl mt-12 lg:mt-0 h-35 lg:h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-FirstCleanser.png"
                            alt="First Cleanser"
                            className="absolute w-35 lg:w-80 h-auto bottom-108 lg:bottom-46 ml-28 lg:ml-3 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)] lg:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
                        />
                        <button
                            onClick={() =>
                                router.push('/detail-produk-first-cleanser')
                            }
                            className="flex items-center mt-21 lg:mt-43 mx-auto text-white text-sm lg:text-lg lg:font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-30 lg:px-20 transition"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            First Cleanser
                        </button>
                    </div>
                    <div
                        className="bg-[#D5E4FF] rounded-xl mt-20 lg:mt-0 h-35 lg:h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-Cleanser.png"
                            alt="Cleanser"
                            className="absolute w-35 lg:w-80 h-auto bottom-49 lg:bottom-46 ml-28 lg:ml-3 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)] lg:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
                        />

                        <button
                            onClick={() =>
                                router.push('/detail-produk-cleanser')
                            }
                            className="flex items-center mt-21 lg:mt-43 mx-auto text-white text-sm lg:text-lg lg:font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-34 lg:px-26 transition"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            Cleanser
                        </button>
                    </div>
                    <div
                        className="bg-[#D5E4FF] rounded-xl mt-15 lg:mt-0 h-35 lg:h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-Moisturizer.png"
                            alt="Moisturizer"
                            className="absolute w-35 lg:w-80 h-auto -bottom-3 lg:bottom-45 ml-28 lg:ml-3 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)] lg:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
                        />

                        <button
                            onClick={() =>
                                router.push('/detail-produk-moisturizer')
                            }
                            className="flex items-center mt-21 lg:mt-43 mx-auto text-white text-sm lg:text-lg lg:font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-32 lg:px-24 transition"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            Moisturizer
                        </button>
                    </div>
                    <div
                        className="bg-[#D5E4FF] rounded-xl mt-15 lg:mt-0 h-35 lg:h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-Sunscreen.png"
                            alt="SPF"
                            className="absolute w-30 lg:w-65 h-auto -bottom-58 lg:bottom-48 ml-31 lg:ml-10 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)] lg:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
                        />

                        <button
                            onClick={() =>
                                router.push('/detail-produk-sunscreen')
                            }
                            className="flex items-center mt-21 lg:mt-43 mx-auto text-white text-sm lg:text-lg lg:font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-32 lg:px-25 transition"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            Sunscreen
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <Footer />
            </div>
        </>
    );
}
