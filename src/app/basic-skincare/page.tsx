'use client';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function BasicSkincare() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} overflow-hidden`}
                style={{
                    background: '#D5E4FF',
                }}
            >
                <div className="text-[#D5E4FF] justify-between text-xs md:text-sm lg:text-base py-6 sm:px-6 px-4 lg:px-8 z-0">
                    [navigation]
                </div>
                <header
                    className="relative lg:h-100 pt-10 md:pt-0 md:py-14 lg:py-22 px-4 sm:px-6 lg:px-8 mx-auto"
                    style={{
                        background: '#E6EEFC',
                        clipPath: 'ellipse(1400px 400px at center bottom)',
                    }}
                >
                    <div className="absolute md:right-10 lg:right-52 md:top-12 lg:top-14 hidden md:flex flex-col items-end">
                        <img
                            src="/Elements-15.png"
                            alt="Element"
                            className="w-30 md:w-50 lg:w-70 h-auto"
                        />
                    </div>
                    <div className="absolute md:right-18 lg:right-88 md:top-28 lg:top-19 hidden md:flex flex-col items-end">
                        <img
                            src="/Blue-1.png"
                            alt="Mascot"
                            className="w-30 md:w-60 lg:w-90 h-auto lg:mt-4"
                        />
                    </div>
                    <div className="max-w-2xl md:mt-6 lg:mt-20 mx-2 md:mx-6 lg:mx-38">
                        <div className="font-extrabold text-xl md:text-3xl lg:text-5xl md:leading-9 lg:leading-15 w-2xs md:w-sm lg:w-xl">
                            Selamat Datang di Dunia Basic Skincare!
                        </div>
                        <div className="text-xs lg:text-base md:text-md py-2 md:py-4 md:w-md lg:w-2xl">
                            Kamu bisa menemukan langkah-langkah perawatan kulit
                            yang simpel dan efektif di sini. Kamu juga akan
                            belajar mengenali kebutuhan kulitmu dan memilih
                            produk yang tepat untuk bisa tampil lebih sehat dan
                            percaya diri setiap harinya!
                        </div>
                    </div>
                </header>

                <div
                    className="pt-6 md:pt-0 lg:pt-18 md:px-10 lg:px-44"
                    style={{ background: '#E6EEFC' }}
                >
                    <div
                        className="bg-white rounded-3xl h-80 md:h-62 lg:h-78 mx-6 md:mx-0"
                        style={{
                            boxShadow: '0 5px 0px rgba(213, 228, 255, 1)',
                        }}
                    >
                        <div className="absolute ml-30 md:ml-8 lg:ml-14 mt-6 md:mt-6">
                            <img
                                src="/Elements-02.png"
                                alt="Element"
                                className="w-24 md:w-34 lg:w-44 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="absolute ml-32 md:ml-10 lg:ml-26 mt-7 md:mt-12 lg:mt-14">
                            <img
                                src="/Pink-10.png"
                                alt="Mascot"
                                className="w-36 md:w-50 lg:w-62 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="max-w-4xl lg:mt-0 mx-6 md:mx-10 md:ml-62 lg:ml-94">
                            <div className="pt-41 md:pt-10 lg:pt-19 text-base md:text-2xl lg:text-3xl font-extrabold">
                                {' '}
                                Kenapa Harus Pakai Skincare?
                            </div>
                            <div className="py-1 md:py-3 lg:py-4 text-[10px] md:text-sm lg:text-base">
                                Skincare itu bukan cuma buat gaya-gayaan, lho!
                                Merawat kulit secara rutin sebenarnya penting
                                banget buat jaga kesehatan kulit kamu dan
                                meminimalisir potensi kerusakan kulit. Misalnya
                                nih, skincare bisa bantu ngusir jerawat, bikin
                                wajah nggak kusam, dan mencegah penuaan
                                dini—biar kulitmu tetap kece sampai nanti. Gak
                                cuma itu, skincare juga jadi tameng dari polusi
                                dan sinar matahari. Kulit yang dirawat bakal
                                kelihatan lebih bersih, segar, dan pastinya
                                makin percaya diri!
                            </div>
                        </div>
                    </div>

                    <div className=" font-extrabold text-center">
                        <p className="text-lg md:text-3xl lg:text-4xl mt-8 md:mt-14 lg:mt-22">
                            Hal Penting yang Perlu Diperhatikan
                        </p>
                        <p className="md:text-2xl lg:text-3xl md:mt-3">
                            Ketika Memilih Skincare
                        </p>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 py-4 md:py-8 lg:py-12 mx-6 md:mx-0">
                        <img
                            src="/Elements-41.png"
                            alt="Element"
                            className="absolute inset-0 w-50 md:w-135 h-auto object-cover z-0 -scale-x-100 -ml-24 md:-ml-68 -mt-18 md:-mt-48"
                        />
                        <div
                            className="bg-[#FFF6ED] shadow-lg p-2 md:p-4 flex items-center space-x-2 md:space-x-4 rounded-3xl md:h-40 lg:h-auto z-30"
                            style={{
                                boxShadow: '0 4px 0px rgba(255, 231, 213, 1)',
                            }}
                        >
                            <img
                                src="/Jenis-Kulit.png"
                                alt="Jenis Kulit"
                                className="w-30 md:w-29 lg:w-54 h-auto"
                            />
                            <div className="mr-2 md:mr-4">
                                <h3 className="font-extrabold mb-2 md:mb-3 text-xs md:text-base lg:text-2xl">
                                    Kenali Terlebih Dahulu Jenis Kulitmu
                                </h3>
                                <p className="text-[10px] md:text-xs lg:text-base">
                                    Mengetahui jenis kulitmu membantu memilih
                                    produk yang tepat dan merawat kulit dengan
                                    lebih efektif.
                                </p>
                            </div>
                        </div>
                        <div
                            className="bg-[#FFF6ED] shadow-lg p-2 md:p-4 flex items-center space-x-2 md:space-x-4 rounded-3xl md:h-40 lg:h-auto"
                            style={{
                                boxShadow: '0 4px 0px rgba(255, 231, 213, 1)',
                            }}
                        >
                            <img
                                src="/Kandungan-Edited.png"
                                alt="Kandungan Skincare"
                                className="w-30 md:w-29 lg:w-54 h-auto"
                            />
                            <div className="mr-2 md:mr-4">
                                <h3 className="font-extrabold mb-2 md:mb-3 text-xs md:text-base lg:text-2xl">
                                    Cermati Bahan dalam Produk Skincare
                                </h3>
                                <p className="text-[10px] md:text-xs lg:text-base">
                                    Perhatikan kandungan produk agar sesuai
                                    dengan kebutuhan dan aman untuk kulitmu.
                                </p>
                            </div>
                        </div>
                        <div
                            className="bg-[#FFF6ED] shadow-lg p-2 md:p-4 flex items-center space-x-2 md:space-x-4 rounded-3xl md:h-40 lg:h-auto"
                            style={{
                                boxShadow: '0 4px 0px rgba(255, 231, 213, 1)',
                            }}
                        >
                            <img
                                src="/Masalah-Kulit.png"
                                alt="Masalah Kulit"
                                className="w-30 md:w-29 lg:w-54 h-auto"
                            />
                            <div className="mr-2 md:mr-4">
                                <h3 className="font-extrabold mb-2 md:mb-3 text-xs md:text-base lg:text-2xl">
                                    Sesuaikan dengan Masalah Kulitmu
                                </h3>
                                <p className="text-[10px] md:text-xs lg:text-base">
                                    Pilih produk yang diformulasikan khusus
                                    untuk mengatasi masalah kulit yang kamu
                                    alami.
                                </p>
                            </div>
                        </div>
                        <div
                            className="bg-[#FFF6ED] shadow-lg p-2 md:p-4 flex items-center space-x-2 md:space-x-4 rounded-3xl md:h-40 lg:h-auto"
                            style={{
                                boxShadow: '0 4px 0px rgba(255, 231, 213, 1)',
                            }}
                        >
                            <img
                                src="/Nomor-BPOM.png"
                                alt="Nomor BPOMt"
                                className="w-30 md:w-29 lg:w-54 h-auto"
                            />
                            <div className="mr-2 md:mr-4">
                                <h3 className="font-extrabold mb-2 md:mb-3 text-xs md:text-base lg:text-2xl">
                                    Cek Nomor BPOM
                                </h3>
                                <p className="text-[10px] md:text-xs lg:text-base">
                                    Pastikan produk terdaftar di BPOM untuk
                                    menjamin keamanan dan legalitasnya.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-3xl shadow-xl h-90 md:h-62 lg:h-78 mt-8 lg:mt-18 mx-6 md:mx-0"
                        style={{
                            boxShadow: '0 5px 0px rgba(213, 228, 255, 1)',
                        }}
                    >
                        <div className="absolute right-32 md:right-10 lg:right-57 py-4 md:py-6 items-end">
                            <img
                                src="/Elements-03.png"
                                alt="Element"
                                className="w-24 md:w-34 lg:w-50 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="absolute right-34 md:right-17 lg:right-73 py-8 md:py-12 lg:py-16 items-end">
                            <img
                                src="/Blue-16.png"
                                alt="Mascot"
                                className="w-34 md:w-50 lg:w-62 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="max-w-4xl md:mt-0 mx-6 md:mx-10 lg:mx-15">
                            <div className="pt-41 md:pt-9 lg:pt-13 text-base md:text-2xl lg:text-3xl font-extrabold">
                                {' '}
                                Apa itu Basic Skincare?
                            </div>
                            <div className="text-[10px] md:text-xs lg:text-base md:py-4 lg:py-6 md:w-md lg:w-4xl">
                                Basic skincare adalah rutinitas perawatan kulit
                                dasar yang terdiri dari langkah-langkah
                                sederhana & penting. Yaitu{' '}
                                <span className="text-[#D34E7C]">
                                    membersihkan
                                </span>
                                ,<span className="text-white">,</span>
                                <span className="text-[#D34E7C]">
                                    melembabkan
                                </span>
                                , dan{' '}
                                <span className="text-[#D34E7C]">
                                    melindungi
                                </span>{' '}
                                kulit dari sinar matahari.
                                <br />
                                <br />
                                Tujuan dari basic skincare sendiri adalah untuk
                                menjaga kebersihan, kelembapan, dan kesehatan
                                kulit sehari-hari. Basic skincare sangat cocok
                                untuk pemula karena dapat membantu membentuk
                                fondasi yang kuat sebelum mencoba perawatan
                                kulit yang lebih kompleks.
                            </div>
                        </div>
                    </div>
                    <div className="font-extrabold text-center">
                        <p className="text-lg md:text-3xl lg:text-4xl md:pt-18 mt-10 md:mt-0 lg:mt-16 md:mb-8 lg:mb-12">
                            Bagaimana Urutan Basic Skincare?
                        </p>
                        <img
                            src="/Elements-43.png"
                            alt="Element"
                            className="absolute w-20 md:w-45 lg:w-80 h-auto object-cover z-0 -ml-7 md:-ml-24 lg:-ml-70 -mt-12 md:-mt-25 lg:-mt-40"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-1 md:gap-4 lg:gap-6 py-6 px-4 rounded-md">
                        <div className="flex flex-col items-center mr-4 md:mr-13 lg:mr-25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#405E93"
                                className="size-8 md:size-14"
                            >
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>

                            <p className="font-extrabold text-sm md:text-xl text-[#405E93]">
                                AM
                            </p>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-18 h-18 md:w-28 md:h-28 lg:w-48 lg:h-48 mr-2 md:mr-3 lg:mr-4 rounded-full bg-white flex items-center justify-center"
                                    style={{
                                        boxShadow:
                                            '4px 4px 0px rgba(185, 203, 232, 1)',
                                    }}
                                >
                                    <img
                                        src="/Face-Wash.png"
                                        alt="Face Wash"
                                        className="w-15 md:w-26 lg:w-38 h-auto object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                                    />
                                </div>
                                <p className="text-xs md:text-base font-medium md:font-extrabold mt-3 md:mt-4">
                                    Cleanser
                                </p>
                            </div>
                            <div className="text-base md:text-3xl lg:text-5xl mx-1 md:mx-2 lg:mx-10 mb-5 md:mb-8 lg:mb-0 text-[#7092CF]">
                                →
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-18 h-18 md:w-28 md:h-28 lg:w-48 lg:h-48 mr-2 md:mr-3 lg:mr-4 rounded-full bg-white flex items-center justify-center"
                                    style={{
                                        boxShadow:
                                            '4px 4px 0px rgba(185, 203, 232, 1)',
                                    }}
                                >
                                    <img
                                        src="/Moisturizer.png"
                                        alt="Moisturizer"
                                        className="w-15 md:w-26 lg:w-38 h-auto object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                                    />
                                </div>
                                <p className="text-xs md:text-base font-medium md:font-extrabold mt-3 md:mt-4">
                                    Moisturizer
                                </p>
                            </div>
                            <div className="md:text-3xl lg:text-5xl mx-1 md:mx-2 lg:mx-10 mb-5 md:mb-8 lg:mb-0 text-[#7092CF]">
                                →
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                className="w-18 h-18 md:w-28 md:h-28 lg:w-48 lg:h-48 md:mr-3 lg:mr-4 rounded-full  bg-white flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        '4px 4px 0px rgba(185, 203, 232, 1)',
                                }}
                            >
                                <img
                                    src="/Sunscreen.png"
                                    alt="SPF"
                                    className="w-13 md:w-21 lg:w-33 h-auto object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                                />
                            </div>
                            <p className="text-xs md:text-base font-medium md:font-extrabold mt-3 md:mt-4">
                                Sunscreen
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-1 md:gap-4 lg:gap-6 py-6 px-4 rounded-md">
                        <div className="flex flex-col items-center mr-4 md:mr-13 lg:mr-25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#405E93"
                                className="size-6 md:size-11"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <p className="font-extrabold text-sm md:text-xl text-[#405E93]">
                                PM
                            </p>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-18 h-18 md:w-28 md:h-28 lg:w-48 lg:h-48 mr-2 md:mr-3 lg:mr-4 rounded-full bg-white flex items-center justify-center"
                                    style={{
                                        boxShadow:
                                            '4px 4px 0px rgba(185, 203, 232, 1)',
                                    }}
                                >
                                    <img
                                        src="/First-Cleanser.png"
                                        alt="First Cleanser"
                                        className="w-15 md:w-26 lg:w-38 h-auto object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                                    />
                                </div>
                                <p className="text-xs md:text-base font-medium md:font-extrabold mt-3 md:mt-4">
                                    First Cleanser
                                </p>
                            </div>
                            <div className="md:text-3xl lg:text-5xl mx-1 md:mx-3 lg:mx-10 mb-5 md:mb-8 lg:mb-0 text-[#7092CF]">
                                →
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className="w-18 h-18 md:w-28 md:h-28 lg:w-48 lg:h-48 mr-2 md:mr-3 lg:mr-4 rounded-full bg-white flex items-center justify-center"
                                    style={{
                                        boxShadow:
                                            '4px 4px 0px rgba(185, 203, 232, 1)',
                                    }}
                                >
                                    <img
                                        src="/Face-Wash.png"
                                        alt="Face Wash"
                                        className="w-15 md:w-26 lg:w-38 h-auto object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                                    />
                                </div>
                                <p className="text-xs md:text-base font-medium md:font-extrabold mt-3 md:mt-4">
                                    Cleanser
                                </p>
                            </div>
                            <div className="md:text-3xl lg:text-5xl mx-1 md:mx-2 lg:mx-10 mb-5 md:mb-8 lg:mb-0 text-[#7092CF]">
                                →
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                className="w-18 h-18 md:w-28 md:h-28 lg:w-48 lg:h-48 md:mr-3 lg:mr-4 rounded-full bg-white flex items-center justify-center"
                                style={{
                                    boxShadow:
                                        '4px 4px 0px rgba(185, 203, 232, 1)',
                                }}
                            >
                                <img
                                    src="/Moisturizer.png"
                                    alt="Moisturizer"
                                    className="w-15 md:w-26 lg:w-38 h-auto object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] md:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                                />
                            </div>
                            <p className="text-xs md:text-base font-medium md:font-extrabold mt-3 md:mt-4">
                                Moisturizer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative pt-25 md:pt-50 bg-[#E6EEFC]">
                    <div
                        className="relative h-15 md:h-45"
                        style={{
                            background: '#FFD5E9',
                            clipPath: 'ellipse(1000px 175px at center bottom)',
                        }}
                    ></div>

                    <img
                        src="/Elements-47-2.png"
                        alt="Element"
                        className="absolute w-12 md:w-23 lg:w-45 h-auto object-cover z-0 right-0 top-0 md:top-3 lg:top-5"
                    />
                    <div className="absolute px-4 h-9 md:px-7 md:h-15 flex items-center justify-center bg-white rounded-tr-xl rounded-tl-xl rounded-br-xl ml-32 md:ml-65 lg:ml-105 -mt-35 md:-mt-70 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.10)]">
                        <p className="font-semibold text-[10px] md:text-base">
                            Ayo ikut aku!
                        </p>
                    </div>
                    <img
                        src="/Revised.png"
                        alt="Mascot"
                        className="absolute w-35 md:w-70 lg:w-77 h-auto object-cover lg:left-35 top-8 md:top-31 lg:top-25 -scale-x-100"
                    />
                    <div className="absolute bg-[#D64F7E] rounded-tr-xl rounded-tl-xl top-32 md:top-82 left-1/2 transform -translate-x-1/2">
                        <p className="text-white text-semibold text-xs md:text-lg lg:text-xl px-4 md:px-6 py-2 md:py-3">
                            Perjalanan Selanjutnya
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-[#FFF6ED] h-43 md:h-75 lg:h-85">
                        <div className="text-center">
                            <p className="pt-7 md:pt-15 lg:pt-19 text-sm md:text-2xl lg:text-3xl font-extrabold">
                                Mengenal Apa Saja Produk Basic Skincare
                            </p>
                            <p className="pt-1 md:pt-2 lg:pt-3 text-[10px] md:text-lg lg:text-xl w-xs md:w-lg lg:w-xl mx-auto">
                                Mengetahui produk apa saja yang disebut dengan
                                basic skincare beserta jenis-jenisnya
                            </p>
                            <button
                                onClick={() =>
                                    router.push('/produk-basic-skincare')
                                }
                                className="mt-3 md:mt-7 lg:mt-10 text-white bg-[#F38EB1] hover:bg-[#D64F7E] w-3xs md:w-lg lg:w-xl p-2 md:p-4 font-semibold text-xs md:text-lg lg:text-xl rounded-full transition"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(214, 79, 126, 1)',
                                }}
                            >
                                Telusuri
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <Footer />
            </div>
        </>
    );
}
