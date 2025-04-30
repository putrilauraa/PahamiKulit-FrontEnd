'use client';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Navbar />

            <header
                className={`${montserrat.className} text-main-pink`}
                style={{
                    background: 'linear-gradient(to right, #B9CEF2, #7092CF)',
                    clipPath: 'ellipse(1300px 375px at center top)',
                }}
            >
                <div className="relative max-w-7xl h-94 py-14 px-4 sm:px-6 lg:px-8 mx-auto">
                    {/* Right images */}
                    <div className="absolute right-9 top-2 hidden md:flex flex-col items-end space-y-4">
                        <img
                            src="/Elements-12.png"
                            alt="Element"
                            className="w-100 h-auto"
                        />
                    </div>
                    <div className="absolute right-62 top-22 hidden md:flex flex-col items-end space-y-4">
                        <img
                            src="/Pink-18.png"
                            alt="Mascot"
                            className="w-100 h-auto mt-4"
                        />
                    </div>

                    {/* Text content */}
                    <div className="text-white max-w-xl mt-8">
                        <div className="font-extrabold text-5xl">
                            Halo, Skincare Explorer!
                        </div>
                        <div className="py-5">
                            Selamat datang di{' '}
                            <span className="font-bold">BasicDulu</span>,
                            tempatmu menjelajahi langkah-langkah paling dasar
                            dalam dunia <span className="italic">skincare</span>
                            . Di sini, kamu bisa mendapatkan pengetahuan
                            mengenai{' '}
                            <span className="italic">basic skincare</span>{' '}
                            supaya kamu nggak salah pilih produk. Yuk, mulai
                            perjalanan kulit sehat kamu di sini!
                        </div>
                    </div>
                </div>
            </header>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}
            >
                <div className="flex text-center justify-center mt-24">
                    <div className="font-extrabold text-3xl">
                        Hal-hal penting yang bisa kamu dapatkan <br /> dengan
                        menjelajahi BasicDulu
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 py-14 px-32 h-1/5">
                    <div className="p-4 flex items-center space-x-4">
                        <img
                            src="/Pink-13.png"
                            alt="Mascot"
                            className="w-60 h-auto"
                        />
                        <div>
                            <h3 className="font-extrabold mb-3 text-2xl">
                                Pentingnya Pengunaan
                                <br />
                                Skincare
                            </h3>
                            <p>
                                Penggunaan skincare yang tepat ini penting
                                banget loh sebagai bentuk mencintai diri dan
                                membangun kepercayaan diri.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center space-x-4">
                        <img
                            src="/Blue-6.png"
                            alt="Mascot"
                            className="w-61 h-auto"
                        />
                        <div>
                            <h3 className="font-extrabold mb-3 text-2xl">
                                Efek Perpaduan Kandungan Skincare
                            </h3>
                            <p>
                                Memadukan kandungan skincare tidak boleh asal
                                loh! Ada beberapa bahan aktif yang tidak boleh
                                digunakan secara bersamaan, apa saja ya?
                            </p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center space-x-4">
                        <img
                            src="/Blue-19.png"
                            alt="Mascot"
                            className="w-60 h-auto"
                        />
                        <div>
                            <h3 className="font-extrabold mb-3 text-2xl">
                                Produk Skincare Lokal yang Bagus
                            </h3>
                            <p>
                                Siapa bilang Skincare bagus itu harus mahal?
                                Banyak kok skincare dari brand lokal yang
                                harganya murah dan terbukti bagus! Cari tahu
                                yuk!
                            </p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center space-x-4">
                        <img
                            src="/Pink-12.png"
                            alt="Mascot"
                            className="w-60 h-auto -scale-x-100"
                        />
                        <div>
                            <h3 className="font-extrabold mb-3 text-2xl">
                                Tes Jenis Kulit
                            </h3>
                            <p>
                                Sebelum cari tahu skincare yang cocok untuk
                                kamu, mending tes jenis kulit kamu dulu yuk!
                            </p>
                            <button className="text-pink-600 border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-pink-600">
                                Tes Sekarang →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <Footer />
            </div>
        </>
    );
}
