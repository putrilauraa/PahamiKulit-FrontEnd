'use client';
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function TesJenisKulit() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} min-h-screen bg-[#E6EEFC]`}
            >
                {/* Breadcrumbs */}
                <nav className="pt-4 lg:pt-8 ml-4 lg:ml-8 text-sm space-x-2">
                    <a href="/" className="hover:underline text-[#7092CF]">
                        Beranda
                    </a>
                    <span>/</span>
                    <a
                        href="/tes-jenis-kulit"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Tes Jenis Kulit
                    </a>
                </nav>

                {/* Title Section */}
                <div
                    className="hidden md:hidden lg:block absolute bg-[#FFD5E9] h-50 w-50 mt-15 right-92"
                    style={{
                        clipPath: 'ellipse(100px 100px at center bottom)',
                    }}
                ></div>
                <div className="absolute right-51">
                    <img
                        src="/Pink-11.png"
                        alt="Mascot"
                        className="hidden lg:block w-44 lg:w-97 h-auto ml-47 lg:ml-0 mt-26 lg:-mt-16"
                    />
                </div>
                <div className="text-white bg-gradient-to-b from-[#7293D0] to-[#B5CBF0] mx-5 lg:mx-45 mt-8 lg:mt-12 mb-12 lg:mb-30 rounded-xl p-8 lg:p-17">
                    <h1 className="text-xl lg:text-4xl font-bold pb-1 lg:pb-2">
                        Tes Jenis Kulit
                    </h1>
                    <p className="text-xs lg:text-lg">
                        Jawab beberapa pertanyaan untuk mengetahui jenis
                        kulitmu!
                    </p>
                </div>

                <img
                    src="Elements-27.png"
                    alt="Element"
                    className="hidden lg:block absolute w-47 -mt-15 -ml-2 opacity-70"
                />

                {/* Start Quiz CTA */}
                <div className="flex flex-col items-center justify-center text-center pt-12 lg:pt-0">
                    <p className="text-xl lg:text-4xl font-bold mb-1 lg:mb-3">
                        Cari tahu jenis kulitmu yuk!
                    </p>
                    <p className="w-70 lg:w-lg text-xs lg:text-base">
                        Untuk membantu mengetahui kandungan dan produk skincare
                        yang tepat untuk kondisi kulitmu
                    </p>
                    <button
                        onClick={() => router.push('/quiz')}
                        className="border lg:border-2 border-[#405E93] bg-white hover:bg-[#7092CF] hover:border-[#7092CF] hover:text-white font-semibold text-xs lg:text-lg rounded-full w-30 lg:w-md p-2 lg:p-3 mt-6 lg:mt-8 transition"
                        style={{
                            boxShadow: '0px 4px 0px rgba(112, 146, 207, 1)',
                        }}
                    >
                        Mulai
                    </button>
                </div>

                <img
                    src="Elements-23.png"
                    alt="Element"
                    className="hidden lg:block absolute w-55 ml-365"
                />

                {/* See Skin Profile CTA */}

                {/* style={{
                                boxShadow: '0 5px 0px rgba(213, 228, 255, 1)',
                            }} */}

                <div
                    className="relative h-100 lg:h-84 mt-20 lg:mt-30"
                    style={{
                        background: '#D5E4FF',
                        clipPath: 'ellipse(1000px 312px at center bottom)',
                        boxShadow: '0px 4px 0px rgba(0,0,0,0.15)',
                    }}
                >
                    {/* Login if not yet */}
                    <div className="pt-38 lg:pt-7">
                        <img
                            src="/Blue-3.png"
                            alt="Mascot"
                            className="w-30 lg:w-50 h-auto ml-10 lg:ml-137 -mb-6 lg:-mb-10"
                        />
                        <div
                            className="flex items-center bg-[#FFF6ED] px-8 lg:px-15 py-3 lg:py-6 rounded-full w-80 lg:w-150 mx-auto"
                            style={{
                                boxShadow: '0 5px 0px rgba(255, 231, 213, 1)',
                            }}
                        >
                            <div>
                                <p className="font-semibold text-sm lg:text-xl lg:mb-1">
                                    Profil Kulit
                                </p>
                                <p className="lg:leading-5 text-[10px] lg:text-sm">
                                    Sudah pernah melakukan tes ini? silakan
                                    masuk
                                </p>
                            </div>

                            <button
                                className="bg-[#7092CF] hover:bg-[#405E93] text-white font-medium rounded-full px-4 lg:px-6 py-2 ml-4 lg:ml-8 text-xs lg:text-sm"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(64, 94, 147, 1)',
                                }}
                            >
                                Masuk
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
