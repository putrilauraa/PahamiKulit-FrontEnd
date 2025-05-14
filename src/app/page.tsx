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
                <div className="relative max-w-dvh md:max-w-7xl h-94 py-6 px-7 md:px-10 lg:px-8 mx-auto">
                    {/* Right images */}
                    <div className="absolute right-6 md:right-0 lg:right-9 top-48 md:top-36 lg:top-6 items-end space-y-4">
                        <img
                            src="/Elements-12.png"
                            alt="Element"
                            className="w-43 md:w-54 lg:w-100 h-auto"
                        />
                    </div>
                    <div className="absolute right-20 md:right-25 lg:right-61 top-53 md:top-42 lg:top-23 md:flex flex-col items-end space-y-4">
                        <img
                            src="/Pink-18.png"
                            alt="Mascot"
                            className="w-55 md:w-70 lg:w-100 h-auto mt-4"
                        />
                    </div>

                    {/* Text content */}
                    <div className="text-white max-w-xl md:mt-6 lg:mt-8">
                        <div className="font-extrabold pt-4 md:pt-2 lg:pt-0 text-2xl md:text-4xl lg:text-5xl">
                            Halo, Skincare Explorer!
                        </div>
                        <div className="pt-4 md:py-5 text-xs md:text-sm lg:text-lg">
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
                <div className="flex text-center justify-center mt-10 md:mt-12 lg:mt-24">
                    <div className="font-extrabold text-md md:text-xl lg:text-3xl">
                        Hal-hal penting yang bisa kamu dapatkan <br /> dengan
                        menjelajahi BasicDulu
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 lg:gap-4 md:py-7 lg:py-14 md:px-10 md:mr-10 lg:px-32 lg:h-1/5">
                    <div className="h-40 lg:h-65 mt-6 md:mt-0 p-6 flex items-center space-x-2 lg:space-x-4">
                        <img
                            src="/Pink-13.png"
                            alt="Mascot"
                            className="w-35 lg:w-60 h-auto"
                        />
                        <div>
                            <h3 className="font-extrabold mb-1 lg:mb-3 text-sm lg:text-2xl">
                                Pentingnya Pengunaan
                                <br />
                                Skincare
                            </h3>
                            <p className="text-xs lg:text-sm">
                                Penggunaan skincare yang tepat ini penting
                                banget loh sebagai bentuk mencintai diri dan
                                membangun kepercayaan diri.
                            </p>
                        </div>
                    </div>
                    <div className="h-40 lg:h-65 p-6 flex items-center space-x-2 lg:space-x-4">
                        <img
                            src="/Blue-6.png"
                            alt="Mascot"
                            className="w-35 lg:w-60 h-auto"
                        />
                        <div>
                            <h3 className="font-extrabold mb-1 lg:mb-3 text-sm lg:text-2xl">
                                Efek Perpaduan Kandungan Skincare
                            </h3>
                            <p className="text-xs lg:text-sm">
                                Memadukan kandungan skincare tidak boleh asal
                                loh! Ada beberapa bahan aktif yang tidak boleh
                                digunakan secara bersamaan, apa saja ya?
                            </p>
                        </div>
                    </div>
                    <div className="h-40 lg:h-65 p-6 flex items-center space-x-2 lg:space-x-4">
                        <img
                            src="/Blue-19.png"
                            alt="Mascot"
                            className="w-35 lg:w-60 h-auto"
                        />
                        <div>
                            <h3 className="font-extrabold mb-1 lg:mb-3 text-sm lg:text-2xl">
                                Produk Skincare Lokal yang Bagus
                            </h3>
                            <p className="text-xs lg:text-sm">
                                Siapa bilang Skincare bagus itu harus mahal?
                                Banyak kok skincare dari brand lokal yang
                                harganya murah dan terbukti bagus! Cari tahu
                                yuk!
                            </p>
                        </div>
                    </div>
                    <div className="h-40 lg:h-65 p-6 flex items-center space-x-2 lg:space-x-4">
                        <img
                            src="/Pink-12.png"
                            alt="Mascot"
                            className="w-35 lg:w-60 h-auto -scale-x-100"
                        />
                        <div>
                            <h3 className="font-extrabold mb-1 lg:mb-3 text-sm lg:text-2xl">
                                Tes Jenis Kulit
                            </h3>
                            <p className="text-xs lg:text-sm">
                                Sebelum cari tahu skincare yang cocok untuk
                                kamu, mending tes jenis kulit kamu dulu yuk!
                            </p>
                            <button
                                className="text-pink-600 border-black border-1 lg:border-2 px-5 py-1.5 mt-2 lg:mt-4 text-xs lg:text-sm font-bold rounded-4xl hover:text-white hover:bg-[#F38EB1]"
                                style={{
                                    boxShadow: '0px 4px 0px rgba(214, 79, 126, 1)', // x: 0px, y: 4px, blur: 0px, full black opacity
                                }}
                            >
                                Tes Sekarang →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:mt-4 lg:mt-1">
                <Footer />
            </div>
        </>
    );
}
