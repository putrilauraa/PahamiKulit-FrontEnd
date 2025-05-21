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
                            <span className="font-bold">PahamiKulit</span>,
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

            <div className={`${montserrat.className}`}>
                {/* Title section 1 */}
                <div className="grid grid-cols-4 gap-x-5 py-14 px-32">
                    <div className="col-span-4 flex text-left mt-10 mb-8">
                        <div className="font-extrabold text-3xl">
                            <span className="text-[#D64F7E] font-extrabold">
                                |{' '}
                            </span>
                            Apa saja fitur yang tersedia?
                        </div>
                    </div>

                    {/* Feature 1 */}
                    <div
                        className="col-span-4 bg-[#FFF6ED] flex items-center rounded-3xl px-18 py-16 mb-6"
                        style={{
                            boxShadow: '4px 4px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        <div
                            className="absolute bg-[#FFD5E9] h-70 w-70 mt-6 right-54"
                            style={{
                                clipPath:
                                    'ellipse(140px 140px at center bottom)',
                            }}
                        ></div>
                        <div className="w-2xl">
                            <h3 className="font-extrabold text-4xl">
                                Pahami Jenis Kulit Kamu
                            </h3>
                            <p className="font-semibold my-3 text-lg">
                                Sebelum cari tahu skincare yang cocok untuk
                                kamu, mending cobain tes jenis kulit dulu, yuk!
                                supaya kamu gak salah pilih produk
                            </p>
                            <button
                                className="bg-[#F38EB1] text-white hover:bg-[#D64F7E] font-semibold rounded-3xl px-5 py-3 mt-2"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(214, 79, 126, 1)',
                                }}
                            >
                                Tes Sekarang →
                            </button>
                        </div>
                        <div className="absolute right-74">
                            <img
                                src="/Pink-12.png"
                                alt="Mascot"
                                className="w-88 h-auto mt-8"
                            />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div
                        className="col-span-2 bg-[#FFF6ED] flex items-center rounded-3xl px-6 py-8"
                        style={{
                            boxShadow: '4px 4px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        <div className="flex items-center w-2xl">
                            <img
                                src="/Blue-10.png"
                                alt="Mascot"
                                className="w-55 h-auto mr-4"
                            />
                            <div>
                                <h3 className="font-extrabold text-3xl">
                                    Mix & Match Bahan Aktif
                                </h3>
                                <p className="font-semibold w-sm my-3 text-md">
                                    Sebelum cari tahu skincare yang cocok untuk
                                    kamu, mending cobain tes jenis kulit dulu,
                                    yuk! supaya kamu gak salah pilih produk
                                </p>
                                <button
                                    className="bg-[#7092CF] text-white hover:bg-[#405E93] font-semibold rounded-3xl px-5 py-3 mt-2 text-sm"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                >
                                    Coba Sekarang →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div
                        className="col-span-2 bg-[#FFF6ED] flex items-center rounded-3xl px-6 py-8"
                        style={{
                            boxShadow: '4px 4px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        <div className="flex items-center w-2xl">
                            <img
                                src="/Blue-18.png"
                                alt="Mascot"
                                className="w-55 h-auto mr-4"
                            />
                            <div>
                                <h3 className="font-extrabold text-3xl">
                                    Rekomendasi Skincare
                                </h3>
                                <p className="font-semibold w-sm my-3 text-md">
                                    Sebelum cari tahu skincare yang cocok untuk
                                    kamu, mending cobain tes jenis kulit dulu,
                                    yuk! supaya kamu gak salah pilih produk
                                </p>
                                <button
                                    className="bg-[#7092CF] text-white hover:bg-[#405E93] font-semibold rounded-3xl px-5 py-3 mt-2 text-sm"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                >
                                    Coba Sekarang →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Title section 2 */}
                    <div className="col-span-4 flex text-left mt-25 mb-8">
                        <div className="font-extrabold text-3xl">
                            <span className="text-[#405E93] font-extrabold">
                                |{' '}
                            </span>
                            Manfaat menjelajahi Aplikasi PahamiKulit
                        </div>
                    </div>

                    {/* Benefit 1 */}
                    <div>
                        <div className="bg-[#7092CF] h-10 py-2 w-15 text-xl flex items-center text-center justify-center font-extrabold text-white rounded-tr-xl rounded-tl-xl">
                            #1
                        </div>
                        <div
                            className="bg-[#E6EEFC] h-100 items-center rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-8 py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(213, 228, 255, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-3 text-2xl">
                                    Pentingnya Pengunaan Skincare
                                </h3>
                                <p className="text-md">
                                    Penggunaan skincare yang tepat ini penting
                                    banget loh sebagai bentuk mencintai diri dan
                                    membangun kepercayaan diri.
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Blue-19.png"
                                    alt="Mascot"
                                    className="w-55 h-auto ml-33 mt-7"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div>
                        <div className="bg-[#F38EB1] h-10 py-2 w-15 text-xl flex items-center text-center justify-center font-extrabold text-white rounded-tr-xl rounded-tl-xl">
                            #2
                        </div>
                        <div
                            className="bg-[#FFEDF7] h-100 items-center  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-8 py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(255, 213, 233, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-3 text-2xl">
                                    Efek Perpaduan Kandungan Skincare
                                </h3>
                                <p className="text-md">
                                    Memadukan kandungan skincare tidak boleh
                                    asal loh! Ada beberapa bahan aktif yang
                                    tidak boleh digunakan secara bersamaan, apa
                                    saja ya?
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Pink-13.png"
                                    alt="Mascot"
                                    className="w-60 h-auto ml-30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div>
                        <div className="bg-[#7092CF] h-10 py-2 w-15 text-xl flex items-center text-center justify-center font-extrabold text-white rounded-tr-xl rounded-tl-xl">
                            #3
                        </div>
                        <div
                            className="bg-[#E6EEFC] h-100 items-center  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-8 py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(213, 228, 255, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-3 text-2xl">
                                    Produk Basic Skincare Lokal yang Berkualitas
                                </h3>
                                <p className="text-md">
                                    Siapa bilang Skincare bagus itu harus mahal?
                                    Banyak kok skincare dari brand lokal yang
                                    harganya murah dan terbukti bagus! Cari tahu
                                    yuk!
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Blue-6.png"
                                    alt="Mascot"
                                    className="w-62 h-auto ml-30"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div>
                        <div className="bg-[#F38EB1] h-10 py-2 w-15 text-xl flex items-center text-center justify-center font-extrabold text-white rounded-tr-xl rounded-tl-xl">
                            #4
                        </div>
                        <div
                            className="bg-[#FFEDF7] h-100 items-center  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl px-8 py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(255, 213, 233, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-3 text-2xl">
                                    Efek Perpaduan Kandungan Skincare
                                </h3>
                                <p className="text-md">
                                    Memadukan kandungan skincare tidak boleh
                                    asal loh! Ada beberapa bahan aktif yang
                                    tidak boleh digunakan secara bersamaan, apa
                                    saja ya?
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Pink-15.png"
                                    alt="Mascot"
                                    className="w-60 h-auto ml-30"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-18">
                <Footer />
            </div>
        </>
    );
}
