'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function produkBasicSkincare() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div className="bg-[#E6EEFC]">
                <div className="pt-5 ml-9">[Navigation]</div>
                {/* Title Section */}
                <div className="mt-16">
                    <div
                        className="hidden md:hidden lg:block absolute bg-[#FFF6ED] h-70 w-70 top-37 right-72"
                        style={{
                            clipPath: 'ellipse(140px 140px at center bottom)',
                        }}
                    ></div>
                    <div className="absolute right-67 top-30">
                        <img
                            src="/Product-Moisturizer.png"
                            alt="Mascot"
                            className="w-81 h-auto"
                        />
                    </div>
                    <div className="text-white bg-gradient-to-r from-[#B5CBF0] to-[#7293D0] mx-45 mb-16 rounded-2xl py-10 px-14">
                        <h1 className="text-4xl font-bold pb-2">Moisturizer</h1>
                        <p className="text-2xl w-sm">
                            Keeps your skin hydrated!
                        </p>
                        <p className="text-lg w-3xl mt-2">
                            Moisturizer atau pelembab adalah produk perawatan
                            kulit yang menghidrasi kulit dengan menyerap air.
                            Pelembap membantu menjaga fungsi lapisan kulit,
                            memperbaiki tekstur, dan melindungi dari kerusakan
                            lingkungan{' '}
                        </p>
                    </div>
                </div>

                <div className="mx-45">
                    <div className="bg-[#7092CF] h-8 md:h-10 py-7 w-34 md:text-2xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                        Manfaat
                    </div>
                    <div className="bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-10 px-12">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Image Stack */}
                            <div className="relative w-40 h-40">
                                {/* Swirl (background) */}
                                <img
                                    src="/Elements-20.png"
                                    alt="Swirl"
                                    className="absolute w-50 h-auto"
                                />

                                {/* Mascot (foreground) */}
                                <img
                                    src="/Pink-3.png"
                                    alt="Mascot"
                                    className="absolute w-50 h-auto -scale-x-100"
                                />
                            </div>

                            {/* Benefit List */}
                            <div className="flex flex-col gap-4 w-xl text-lg right-5">
                                {[
                                    'Melembabkan kulit',
                                    'Melindungi lapisan kulit',
                                    'Memperbaiki tekstur kulit',
                                    'Mempersiapkan kulit untuk tabir surya',
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#D5E4FF] text-black px-6 py-3 rounded-full"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
