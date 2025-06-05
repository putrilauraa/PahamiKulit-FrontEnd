'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function basicSkincare() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div className={`${montserrat.className} overflow-hidden`}>
                <div className="mt-5 ml-9">[Navigation]</div>

                {/* Title Section */}
                <div
                    className="hidden md:hidden lg:block absolute h-80 w-auto mt-10 right-40"
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

                <div className="text-white bg-gradient-to-t from-[#B5CBF0] to-[#7293D0] mx-35 mt-14 mb-60 rounded-2xl px-14 py-12">
                    <h1 className="text-4xl font-bold pb-3">
                        Produk Basic Skincare
                    </h1>
                    <p className="text-lg w-3xl">
                        Nah, kenalan dulu yuk sama empat produk basic skincare
                        yang wajib jadi teman sehari-hari kulitmu. Di halaman
                        ini, kamu bisa cari tahu fungsi masing-masing produk,
                        cara penggunaan, tipe-tipe produk, dan contoh produk
                        lokalnya.
                    </p>
                    <p className="font-semibold text-lg mt-1 text-[#ffffff]">
                        Yuk, rawat kulitmu dengan langkah yang tepat dari awal!
                    </p>
                </div>

                {/* Product Categories */}
                <div className="grid grid-cols-4 gap-4 mx-35 mb-20">
                    <div
                        className="bg-[#D5E4FF] rounded-xl h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-FirstCleanser.png"
                            alt="First Cleanser"
                            className="absolute w-80 h-auto bottom-50 ml-3"
                        />
                        <button
                            className="flex items-center mt-43 mx-auto text-white text-lg font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-20"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            First Cleanser
                        </button>
                    </div>
                    <div
                        className="bg-[#D5E4FF] rounded-xl h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-Cleanser.png"
                            alt="Cleanser"
                            className="absolute w-80 h-auto bottom-50 ml-3"
                        />

                        <button
                            className="flex items-center mt-43 mx-auto text-white text-lg font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-26"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            Cleanser
                        </button>
                    </div>
                    <div
                        className="bg-[#D5E4FF] rounded-xl h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-Moisturizer.png"
                            alt="Moisturizer"
                            className="absolute w-80 h-auto bottom-50 ml-3"
                        />

                        <button
                            onClick={() =>
                                router.push('/detail-produk-basic-skincare')
                            }
                            className="flex items-center mt-43 mx-auto text-white text-lg font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-24"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            Moisturizer
                        </button>
                    </div>
                    <div
                        className="bg-[#D5E4FF] rounded-xl h-60"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <img
                            src="/Product-Sunscreen.png"
                            alt="SPF"
                            className="absolute w-65 h-auto bottom-52 ml-10"
                        />

                        <button
                            className="flex items-center mt-43 mx-auto text-white text-lg font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-30"
                            style={{
                                boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)',
                            }}
                        >
                            SPF
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
