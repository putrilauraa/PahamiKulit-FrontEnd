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

            <div
                className={`${montserrat.className} bg-[#E6EEFC] pb-20 overflow-hidden`}
            >
                {/* Breadcrumbs */}
                <nav className="mt-8 ml-8 text-sm space-x-2">
                    <a href="/basic-skincare" className="hover:underline text-[#7092CF]">
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

                {/* Title Section */}
                <div className="mt-16">
                    <div
                        className="hidden md:hidden lg:block absolute bg-[#FFF6ED] h-70 w-70 top-39 right-72"
                        style={{
                            clipPath: 'ellipse(140px 140px at center bottom)',
                        }}
                    ></div>
                    <div className="absolute right-77 top-47">
                        <img
                            src="/Product-Cleanser.png"
                            alt="Cleanser"
                            className="w-61 h-auto drop-shadow-[5px_5px_0px_rgba(0,0,0,0.15)]"
                        />
                    </div>
                    <div className="text-white bg-gradient-to-r from-[#7293D0] to-[#B5CBF0] mx-45 mb-16 rounded-2xl py-10 px-14">
                        {/* Title */}
                        <h1 className="text-4xl font-bold pb-2">Cleanser</h1>
                        {/* Slogan */}
                        <p className="text-2xl w-sm">Clear Skin Starts Here!</p>
                        {/* Product Description */}
                        <p className="text-lg w-3xl mt-2">
                            Sabun cuci muka adalah produk yang penting dalam
                            rutinitas skincare, berfungsi untuk membersihkan,
                            melindungi, dan merawat kulit wajah, serta mencegah
                            berbagai masalah kulit seperti jerawat.
                        </p>
                    </div>
                </div>

                {/* Benefit Section */}
                <div className="mx-45">
                    <div className="bg-[#7092CF] h-8 md:h-10 py-7 w-34 md:text-xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                        Manfaat
                    </div>
                    <div className="bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-8 px-10">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Swirl Element */}
                            <img
                                src="/Elements-20.png"
                                alt="Swirl"
                                className="absolute w-76 h-auto left-42 pb-30"
                            />

                            {/* Mascot */}
                            <img
                                src="/Pink-3.png"
                                alt="Mascot"
                                className="absolute w-79 h-auto -scale-x-100 pt-32 left-57"
                            />

                            {/* Benefit List */}
                            <div className="flex flex-col gap-4 w-4xl text-lg ml-88">
                                {[
                                    'Membersihkan dan menghilangkan kotoran di kulit',
                                    'Mencegah jerawat dengan menjaga pori-pori tetap bersih',
                                    'Mempersiapkan kulit untuk produk skincare selanjutnya',
                                    'Membantu menciptakan kulit yang lebih sehat',
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#D5E4FF] text-black px-8 py-4 rounded-full"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to Use Section */}
                <div className="mx-45 mt-16">
                    <div className="bg-[#7092CF] h-8 md:h-10 py-7 w-60 md:text-xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                        Cara Penggunaan
                    </div>
                    <div className="bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-12 px-10">
                        <div className="relative">
                            {/* Dashed vertical line */}
                            <div className="absolute top-[30px] left-[24px] h-[calc(100%-40px)] border-l-2 border-dashed border-[#7092CF] z-0"></div>

                            {/* Steps */}
                            <div className="flex flex-col gap-6 relative z-10">
                                {[
                                    'Pastikan cuci tangan terlebih dahulu untuk menghindari perpindahan kotoran atau bakteri ke wajah',
                                    'Basahi wajah dan aplikasikan produk ke wajah — termasuk leher, hindari menggosok kulit dengan kasar',
                                    'Bilas wajah dengan air, pastikan semua sisa sabun cuci muka sudah hilang',
                                    'Tepuk-tepuk wajah hingga kering dengan handuk yang kering, bersih, dan lembut',
                                ].map((text, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="min-w-[50px] min-h-[50px] border-2 border-[#7092CF] rounded-full flex items-center justify-center text-[#7293D0] text-lg font-bold bg-white z-10">
                                            {(i + 1)
                                                .toString()
                                                .padStart(2, '0')}
                                        </div>
                                        <p className="text-[#333] pt-2 pl-2 text-lg">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mascot Image */}
                        <img
                            src="/Blue-2.png"
                            alt="Mascot"
                            className="absolute bottom-4 right-66 top-290 w-68 h-auto -scale-x-100"
                        />
                        <img
                            src="/Elements-49.png"
                            alt="Mascot"
                            className="absolute bottom-4 right-62 top-276 w-38 h-auto"
                        />
                    </div>
                </div>

                {/* Product Type List */}
                <div className="flex flex-col gap-3 mx-45 mt-16">
                    <h2 className="text-3xl font-bold">Tipe Moisturizer</h2>

                    {[
                        {
                            title: 'Gel Cleanser',
                            desc: 'Cocok untuk kulit berminyak atau sensitif karena tidak mengandung minyak dan mudah dibilas tanpa meninggalkan residu berat di kulit.',
                            link: '/produk/gel-moisturizer',
                        },
                        {
                            title: 'Cream Cleanser',
                            desc: 'Sabun cuci muka dengan tekstur krim yang berfungsi untuk membersihkan wajah secara lembut, cocok untuk berbagai jenis kulit, terutama kulit kering.',
                            link: '/produk/cream-moisturizer',
                        },
                        {
                            title: 'Foaming Cleanser',
                            desc: 'Memberikan pembersihan yang lembut namun efektif, sehingga cocok untuk semua jenis kulit, terutama kulit sensitif.',
                            link: '/produk/oil-based-moisturizer',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#FFF6ED] rounded-[20px] shadow-[0px_4px_0px_#f1dcc1] px-10 py-8 mt-2"
                            style={{
                                boxShadow: '0px 4px 0px rgba(255, 231, 213, 1)',
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[#333] mb-5">{item.desc}</p>
                            <a
                                href={item.link}
                                className="inline-block bg-white hover:bg-[#405E93] hover:text-white hover:border-[#405E93] border-black font-semibold text-xs px-4 py-2 rounded-full border-2 transition"
                                style={{
                                    boxShadow: '0 4px 0px rgba(64, 94, 147, 1)',
                                }}
                            >
                                Lihat contoh produk →
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
