'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function ProfilKulit() {
    const router = useRouter();

    return (
        <>
            <Navbar />

            <div className={`${montserrat.className} overflow-hidden`}>
                <div className="mt-5 ml-8">[Navigation]</div>
                <div className="bg-[#D5E4FF] flex justify-center mx-auto w-20 font-semibold px-4 py-2 rounded-full mt-10 text-lg">
                    Hasil
                </div>

                {/* Header Section */}
                <div className="absolute mt-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD5E9] font-semibold px-6 py-2 rounded-full text-lg">
                    Tes Jenis Kulit
                </div>
                <img
                    src="/Elements-48.png"
                    alt="Element"
                    className="absolute right-62 w-42 h-auto top-38 rotate-25"
                />
                <div className="text-white bg-[#B9CBE8] rounded-2xl mt-9 mx-45 px-10 py-14 text-center">
                    <h1 className="text-4xl font-bold">Profil Kulit</h1>
                    <p className="mt-3 text-lg w-2xl flex mx-auto leading-6">
                        Ini dia hasil tes jenis kulit hanya untuk kamu, beserta
                        tips untuk menjaga jenis kulit yang sesuai dengan
                        kondisi kulitmu
                    </p>
                </div>
                <img
                    src="/Elements-40.png"
                    alt="Element"
                    className="absolute left-62 w-42 h-auto top-90"
                />

                {/* Ellips Background */}
                <div
                    className="h-80 mt-20 relative"
                    style={{
                        background: '#E6EEFC',
                        clipPath: 'ellipse(1000px 200px at center bottom)',
                    }}
                ></div>

                <div className="bg-[#E6EEFC] min-h-screen pb-15">
                    {/* Judul - Profil Kulit */}
                    <div className="relative z-20 -top-70">
                        <div
                            className="mx-45 bg-white border border-black flex items-center rounded-xl md:rounded-2xl p-6 mb-4 md:mb-6"
                            style={{
                                boxShadow: '0px 4px 0px rgba(112, 146, 207, 1)',
                            }}
                        >
                            <div className="bg-[#D5E4FF] aspect-square w-50 rounded-xl">
                                <img
                                    src="/Men-Oily.png"
                                    alt="Avatar Kulit Berminyak"
                                    className="absolute w-55 h-auto -ml-2"
                                />
                            </div>
                            <div className="md:w-lg lg:w-3xl mx-10">
                                <p className="font-semibold text-lg">
                                    Username
                                </p>
                                <h2 className="text-3xl font-bold mt-3">
                                    Kulit Berminyak
                                </h2>
                                <p className="text-[#333] text-base mt-3">
                                    Kulit berminyak sering ditemukan pada kaum
                                    muda. Jenis kulit ini memproduksi minyak
                                    berlebih. Kulit berminyak dapat disebabkan
                                    oleh ketidakseimbangan hormon, pubertas,
                                    stres, antibiotik terpapar panas, dan
                                    terpapar udara terlalu lembap.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ciri-ciri */}
                    <div className="absolute mx-45 -mt-60">
                        <h3 className="font-bold text-3xl mb-6">Ciri-ciri</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                'Wajah sering terlihat mengilap, terutama di area T-zone (dahi, hidung, dagu)',
                                'Pori-pori besar dan terlihat jelas',
                                'Rentan terhadap jerawat, komedo, dan whiteheads',
                                'Produksi sebum (minyak alami) berlebih',
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center bg-white border-2 border-[#7092CF] rounded-lg px-6 py-8 text-center"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(185, 203, 232, 1)',
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Do's & Dont's */}
                    <div className="mx-45 mt-10">
                        <h3 className="font-bold text-3xl mb-6">
                            Do's & Dont's
                        </h3>
                        <div
                            className="bg-[#FFF6ED] border-2 border-[#7092CF] rounded-xl px-10 py-10"
                            style={{
                                boxShadow: '0px 4px 0px rgba(185, 203, 232, 1)',
                            }}
                        >
                            <div className="flex items-start gap-4 w-4xl text-lg">
                                <div className="bg-green-300 opacity-70 rounded-full p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FFF6ED"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-check-icon lucide-check"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <p>
                                    <strong>Pastikan Gizimu Seimbang:</strong>{' '}
                                    Konsumsi makanan yang kaya akan buah, sayur,
                                    serta protein tanpa lemak karena nutrisi
                                    yang baik itu penting untuk kulit yang
                                    sehat.
                                </p>
                            </div>
                            <div className="flex items-start gap-4 w-4xl mt-6">
                                <div className="bg-red-300 opacity-70 rounded-full p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FFF6ED"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x-icon lucide-x"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </div>
                                <p>
                                    <strong>Jangan Skip Pelembap:</strong>{' '}
                                    Biarpun kulitmu berminyak, nggak pakai
                                    pelembap bisa bikin kulitmu dehidrasi dan
                                    memperparah masalah tekstur kulitmu.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rekomendasi Kandungan */}
                    <div className="mx-45 mt-15">
                        <h3 className="font-bold text-3xl mb-6">
                            Rekomendasi Kandungan
                        </h3>
                        <div
                            className="flex bg-white border-2 border-[#7092CF] rounded-xl px-10 py-10 justify-between"
                            style={{
                                boxShadow: '0px 4px 0px rgba(185, 203, 232, 1)',
                            }}
                        >
                            <p className="text-lg w-sm">
                                Berikut ini bahan-bahan yang cocok untuk jenis
                                kulitmu
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Niacinamide', 'AHA', 'BHA'].map(
                                    (item, idx) => (
                                        <button
                                            key={idx}
                                            className="bg-[#7092CF] w-50 h-20 px-5 py-2 rounded-lg font-medium text-white hover:bg-[#405E93] transition-all"
                                            style={{
                                                boxShadow:
                                                    '0px 4px 0px rgba(64, 94, 147, 1)',
                                            }}
                                        >
                                            {item}
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className='mx-45 mt-17'>
                        <strong>Disclaimer:</strong> Hasil tes ini ditujukan sebagai
                        panduan awal untuk mengenali jenis kulitmu secara umum.
                        Tes ini bukan diagnosis medis dan tidak dapat
                        menggantikan pemeriksaan langsung oleh dokter kulit atau
                        profesional di bidang kecantikan.
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
