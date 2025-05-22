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
                <div className="relative  md:max-w-7xl h-94 py-6 px-7 md:px-10 lg:px-8 mx-auto">
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
                <div className="grid grid-cols-4 gap-x-5 md:max-w-7xl px-6 md:py-4 md:px-10 lg:max-w-screen lg:py-14 lg:px-32">
                    <div className="col-span-4 flex text-left mt-8 md:mt-10 mb-4 md:mb-8">
                        <div className="font-extrabold md:text-2xl lg:text-3xl">
                            <span className="text-[#D64F7E] font-extrabold">
                                |{' '}
                            </span>
                            Apa saja fitur yang tersedia?
                        </div>
                    </div>

                    {/* Feature 1 */}
                    <div
                        className="col-span-4 bg-[#FFF6ED] flex items-center rounded-xl md:rounded-3xl px-6 py-6 md:px-9 md:py-8 lg:px-18 lg:py-16 mb-4 md:mb-6"
                        style={{
                            boxShadow: '4px 4px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        <div
                            className="hidden md:hidden lg:block absolute bg-[#FFD5E9] h-70 w-70 mt-7 right-54"
                            style={{
                                clipPath:
                                    'ellipse(140px 140px at center bottom)',
                            }}
                        ></div>
                        <div className="md:w-lg lg:w-2xl">
                            <h3 className="font-extrabold text-sm md:text-2xl lg:text-4xl">
                                Pahami Jenis Kulit Kamu
                            </h3>
                            <p className="font-medium md:font-semibold my-2 md:my-3 text-xs md:text-sm lg:text-lg">
                                Sebelum cari tahu skincare yang cocok untuk
                                kamu, mending cobain tes jenis kulit dulu, yuk!
                                supaya kamu gak salah pilih produk
                            </p>
                            <button
                                className="bg-[#F38EB1] text-white hover:bg-[#D64F7E] text-xs md:text-sm lg:text-lg font-semibold rounded-4xl px-5 py-3 mt-2"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(214, 79, 126, 1)',
                                }}
                            >
                                Tes Sekarang →
                            </button>
                        </div>
                        <div className="absolute md:right-7 lg:right-74">
                            <img
                                src="/Pink-12.png"
                                alt="Mascot"
                                className="w-27 md:w-58 lg:w-88 h-auto ml-55 md:ml-0 mt-24 md:mt-8"
                            />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div
                        className="col-span-4 md:col-span-2 bg-[#FFF6ED] flex items-center rounded-xl md:rounded-3xl px-6 py-6 mb-4 md:mb-0 md:py-8"
                        style={{
                            boxShadow: '4px 4px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        <div className="lg:flex items-center md:w-lg lg:w-2xl">
                            <img
                                src="/Blue-10.png"
                                alt="Mascot"
                                className="hidden md:block w-27 md:w-40 md:-scale-x-100 lg:w-55 h-auto md:mx-auto lg:mx-0 lg:mr-4"
                            />
                            <div>
                                <h3 className="font-extrabold text-sm md:text-xl lg:text-3xl">
                                    Mix & Match Bahan Aktif
                                </h3>
                                <p className="font-medium md:font-semibold md:w-80 lg:w-sm my-2 lg:my-3 text-xs md:text-sm lg:text-md">
                                    Eits! jangan asal campur skincare, pahami
                                    dulu yuk tentang kandungan aktif apa saja
                                    yang boleh digunakan secara bersamaan
                                </p>
                                <button
                                    className="bg-[#7092CF] text-white hover:bg-[#405E93] font-semibold rounded-3xl md:flex md:mx-auto lg:mx-0 px-5 py-3 mt-2 md:mt-5 lg:mt-2 text-xs md:text-sm"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                >
                                    Coba Sekarang →
                                </button>
                            </div>
                            <div className="absolute md:right-7 lg:right-74">
                                <img
                                    src="/Blue-10.png"
                                    alt="Mascot"
                                    className="block md:hidden w-26 ml-55 -mt-18"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div
                        className="col-span-4 md:col-span-2 bg-[#FFF6ED] flex items-center rounded-xl md:rounded-3xl px-6 py-6 md:py-8"
                        style={{
                            boxShadow: '4px 4px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        <div className="lg:flex items-center w-2xl">
                            <img
                                src="/Blue-18.png"
                                alt="Mascot"
                                className="hidden md:block md:w-40 lg:w-55 h-auto md:mx-auto lg:mx-0 lg:mr-4"
                            />
                            <div>
                                <h3 className="font-extrabold text-sm md:text-xl lg:text-3xl">
                                    Rekomendasi Skincare
                                </h3>
                                <p className="font-medium md:font-semibold md:w-80 lg:w-sm my-2 lg:my-3 text-xs md:text-sm lg:text-md">
                                    Sebelum coba pakai skincare, ayo cari tahu
                                    dulu rekomendasi skincare apa saja yang
                                    tepat sesuai dengan kebutuhan kulit kamu
                                </p>
                                <button
                                    className="bg-[#7092CF] text-white hover:bg-[#405E93] font-semibold rounded-3xl md:flex md:mx-auto lg:mx-0 px-5 py-3 mt-2 md:mt-5 lg:mt-2 text-xs md:text-sm"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                >
                                    Coba Sekarang →
                                </button>
                            </div>
                            <div className="absolute md:right-7 lg:right-74">
                                <img
                                    src="/Blue-18.png"
                                    alt="Mascot"
                                    className="block md:hidden w-28 ml-55 -mt-18"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Title section 2 */}
                    <div className="col-span-4 flex text-left mt-10 md:mt-16 lg:mt-25 mb-4 md:mb-8">
                        <div className="font-extrabold md:text-2xl lg:text-3xl">
                            <span className="text-[#405E93] font-extrabold">
                                |{' '}
                            </span>
                            Manfaat menjelajahi Aplikasi PahamiKulit
                        </div>
                    </div>

                    {/* Benefit 1 */}
                    <div className="col-span-4 md:col-span-2 lg:col-span-1 mb-4 md:mb-0">
                        <div className="bg-[#7092CF] h-8 md:h-10 py-2 w-12 md:w-15 md:text-xl flex items-center text-center justify-center font-semibold md:font-extrabold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-xl md:rounded-tl-xl">
                            #1
                        </div>
                        <div
                            className="bg-[#E6EEFC] md:h-85 lg:h-100 items-center rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl px-6 lg:px-8 py-6 md:py-8 lg:py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(213, 228, 255, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-2 lg:mb-3 md:text-xl lg:text-2xl">
                                    Pentingnya Pengunaan Skincare
                                </h3>
                                <p className="text-xs md:text-sm lg:text-md">
                                    Penggunaan skincare yang tepat itu penting
                                    banget lho sebagai bentuk mencintai diri dan
                                    membangun kepercayaan diri.
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Blue-19.png"
                                    alt="Mascot"
                                    className="hidden md:block w-55 h-auto md:ml-35 lg:ml-33 lg:mt-7"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="col-span-4 md:col-span-2 lg:col-span-1 mb-4 md:mb-0">
                        <div className="bg-[#F38EB1] h-8 md:h-10 py-2 w-12 md:w-15 md:text-xl flex items-center text-center justify-center font-semibold md:font-extrabold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-xl md:rounded-tl-xl">
                            #2
                        </div>
                        <div
                            className="bg-[#FFEDF7] md:h-85 lg:h-100 items-center rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl px-6 lg:px-8 py-6 md:py-8 lg:py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(255, 213, 233, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-2 lg:mb-3 md:text-xl lg:text-2xl">
                                    Perpaduan Kandungan Skincare
                                </h3>
                                <p className="text-xs md:text-sm lg:text-md">
                                    Memadukan kandungan skincare tidak boleh
                                    asal lho! Ada beberapa bahan aktif yang
                                    tidak boleh digunakan secara bersamaan, apa
                                    saja ya?
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Pink-13.png"
                                    alt="Mascot"
                                    className="hidden md:block w-60 h-auto ml-30 lg:mt-7"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="col-span-4 md:col-span-2 lg:col-span-1 mb-4 md:mb-0 md:mt-13 lg:mt-0">
                        <div className="bg-[#7092CF] h-8 md:h-10 py-2 w-12 md:w-15 md:text-xl flex items-center text-center justify-center font-semibold md:font-extrabold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-xl md:rounded-tl-xl">
                            #3
                        </div>
                        <div
                            className="bg-[#E6EEFC] md:h-85 lg:h-100 items-center rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl px-6 md:px-8 py-6 md:py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(213, 228, 255, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-2 lg:mb-3 md:text-xl lg:text-2xl">
                                    Rekomendasi Sesuai Kondisi Kulit
                                </h3>
                                <p className="text-xs md:text-sm lg:text-md">
                                    Kamu akan dibantu untuk membuat keputusan
                                    dalam memilih skincare yang tepat untuk
                                    kondisi kulitmu, supaya kulit kamu ga
                                    ngambek.
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Blue-6.png"
                                    alt="Mascot"
                                    className="hidden md:block w-62 h-auto ml-30 lg:mt-7"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="col-span-4 md:col-span-2 lg:col-span-1 md:mt-13 lg:mt-0">
                        <div className="bg-[#F38EB1] h-8 md:h-10 py-2 w-12 md:w-15 md:text-xl flex items-center text-center justify-center font-semibold md:font-extrabold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-xl md:rounded-tl-xl">
                            #4
                        </div>
                        <div
                            className="bg-[#FFEDF7] md:h-85 lg:h-100 items-center rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl px-6 md:px-8 py-6 md:py-10"
                            style={{
                                boxShadow: '4px 4px 0px rgba(255, 213, 233, 1)',
                            }}
                        >
                            <div>
                                <h3 className="font-extrabold mb-2 lg:mb-3 md:text-xl lg:text-2xl">
                                    Produk Basic Skincare Lokal yang Berkualitas
                                </h3>
                                <p className="text-xs md:text-sm lg:text-md">
                                    Siapa bilang Skincare bagus itu harus mahal?
                                    Banyak kok skincare dari brand lokal yang
                                    harganya murah dan terbukti bagus, cari tahu
                                    yuk!
                                </p>
                            </div>
                            <div className="absolute drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/Pink-15.png"
                                    alt="Mascot"
                                    className="hidden md:block w-60 h-auto ml-30 lg:mt-7"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 mx-6 md:mx-10 lg:mx-22 py-10 md:py-16 lg:px-10 md:my-8">
                    {/* Left Column */}

                    <div className="flex flex-col gap-5 md:gap-10 lg:gap-16 relative">
                        {/* Title section 3 */}
                        <div className="font-extrabold md:text-xl lg:text-3xl">
                            <span className="text-[#D64F7E] font-extrabold">
                                |{' '}
                            </span>
                            Peta Perjalanan Memahami Kulit <br />
                            <span className="text-sm md:text-lg lg:text-xl font-light md:font-normal lg:font-medium ml-3 lg:ml-5">
                                Kalau kamu ingin ikut menjelajah!
                            </span>
                        </div>

                        {/* Vertical Dashed Line */}
                        <div className="absolute left-4 md:left-6 lg:left-7 top-6 -bottom-5 md:bottom-12 lg:bottom-7 border-l-2 border-dashed border-[#F38EB1] z-0 mt-12 md:mt-30"></div>

                        {/* Step 1 */}
                        <div className="relative z-10 flex items-start gap-3 md:gap-6">
                            <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-full border-2 border-[#F38EB1] text-pink-500 flex items-center justify-center font-bold bg-white">
                                01
                            </div>
                            <div>
                                <h3 className="font-bold text-sm md:text-lg lg:text-xl">
                                    Tes Jenis Kulit
                                </h3>
                                <p className="mt-1 text-xs md:text-sm lg:text-md">
                                    Mulai perjalanan penggunaan skincare kamu
                                    dengan mengetahui jenis kulit kamu, coba
                                    dari tes jenis kulit dulu ya!
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 flex items-start gap-3 md:gap-6">
                            <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-full border-2 border-[#F38EB1] text-pink-500 flex items-center justify-center font-bold bg-white">
                                02
                            </div>
                            <div>
                                <h3 className="font-bold text-sm md:text-lg lg:text-xl">
                                    Memahami Basic Skincare
                                </h3>
                                <p className="mt-1 text-xs md:text-sm lg:text-md">
                                    Fokus pada langkah awal dalam penggunaan
                                    skincare dengan mengenal dan memahami basic
                                    skincare
                                </p>
                            </div>
                        </div>

                        <div className="lg:hidden relative z-10 flex items-start gap-3 md:gap-6">
                            <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-full border-2 border-[#F38EB1] text-pink-500 flex items-center justify-center font-bold bg-white">
                                03
                            </div>
                            <div>
                                <h3 className="font-bold text-sm md:text-lg lg:text-xl">
                                    Memahami Kandungan Aktif
                                </h3>
                                <p className="mt-1 text-xs md:text-sm lg:text-md">
                                    Ketahui apa yang kamu gunakan di kulitmu dan
                                    bagaimana cara penggunaan yang tepat
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-5 md:gap-10 lg:gap-16 relative md:mt-25 lg:mt-0">
                        {/* <!-- Vertical Dashed Line --> */}
                        <div className="absolute left-4 md:left-6 lg:left-7 top-6 bottom-12 md:bottom-54 lg:bottom-6 border-l-2 border-dashed border-[#F38EB1] z-0"></div>

                        {/* Step 3 */}
                        <div className="relative hidden lg:flex z-10 items-start gap-6">
                            <div className="flex-shrink-0 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-full border-2 border-[#F38EB1] text-pink-500 flex items-center justify-center font-bold bg-white">
                                03
                            </div>
                            <div>
                                <h3 className="font-bold  md:text-lg lg:text-xl">
                                    Memahami Kandungan Aktif
                                </h3>
                                <p className="mt-1 md:text-sm lg:text-md">
                                    Ketahui apa yang kamu gunakan di kulitmu dan
                                    bagaimana cara penggunaan yang tepat
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative z-10 flex items-start gap-3 md:gap-6">
                            <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-full border-2 border-[#F38EB1] text-pink-500 flex items-center justify-center font-bold bg-white">
                                04
                            </div>
                            <div>
                                <h3 className="font-bold text-sm md:text-lg lg:text-xl">
                                    Cari Rekomendasi Skincare
                                </h3>
                                <p className="mt-1 text-xs md:text-sm lg:text-md">
                                    Kami akan bantu kamu untuk menentukan
                                    skincare yang sesuai dengan kondisi kulit
                                    kamu
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative z-10 flex items-start gap-3 md:gap-6">
                            <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 lg:w-15 lg:h-15 rounded-full border-2 border-pink-300 text-pink-500 flex items-center justify-center font-bold bg-white">
                                05
                            </div>
                            <div>
                                <h3 className="font-bold text-sm md:text-lg lg:text-xl">
                                    Mengetahui Jenis-jenis Produk Basic Skincare
                                </h3>
                                <p className="mt-1 text-xs md:text-sm lg:text-md">
                                    Ketahui jenis-jenis produk basic skincare
                                    untuk menyesuaikan dengan kebutuhan kulit
                                    kamu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 md:mt-0 lg:mt-12">
                <Footer />
            </div>
        </>
    );
}
