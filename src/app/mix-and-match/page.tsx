'use client';
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

type BahanAktif = {
    id: number;
    name: string;
    type: 'lembut' | 'keras';
};

const listBahanAktif: BahanAktif[] = [
    { id: 1, name: 'Niacinamide', type: 'lembut' },
    { id: 2, name: 'Hyaluronic Acid', type: 'lembut' },
    { id: 3, name: 'Ceramide', type: 'lembut' },
    { id: 4, name: 'Bakuchiol', type: 'lembut' },
    { id: 5, name: 'AHA', type: 'keras' },
    { id: 6, name: 'BHA', type: 'keras' },
    { id: 7, name: 'PHA', type: 'keras' },
    { id: 8, name: 'Alpha Arbutin', type: 'lembut' },
    { id: 9, name: 'Panthenol', type: 'lembut' },
    { id: 10, name: 'Squalane', type: 'lembut' },
    { id: 11, name: 'Allantoin', type: 'lembut' },
    { id: 12, name: 'Centella Asiatica', type: 'lembut' },
    { id: 13, name: 'Tranexamic Acid', type: 'keras' },
    { id: 14, name: 'Peptide', type: 'lembut' },
    { id: 15, name: 'Vitamin C', type: 'keras' },
    { id: 16, name: 'Propolis', type: 'lembut' },
    { id: 17, name: 'Glycerin', type: 'lembut' },
    { id: 18, name: 'Aloe Vera', type: 'lembut' },
    { id: 19, name: 'Mugwort', type: 'lembut' },
    { id: 20, name: 'Oat', type: 'lembut' },
];

export default function MixMatchPage() {
    const [selectedBahan1, setSelectedBahan1] = useState<BahanAktif | null>(
        null,
    );
    const [selectedBahan2, setSelectedBahan2] = useState<BahanAktif | null>(
        null,
    );

    const handleCardClick = (bahan: BahanAktif) => {
        if (!selectedBahan1) {
            setSelectedBahan1(bahan);
        } else if (!selectedBahan2 && bahan.id !== selectedBahan1.id) {
            setSelectedBahan2(bahan);
        }
    };

    const handleReset = () => {
        setSelectedBahan1(null);
        setSelectedBahan2(null);
    };

    const getResult = () => {
        if (selectedBahan1 && selectedBahan2) {
            if (
                selectedBahan1.type === 'keras' &&
                selectedBahan2.type === 'keras'
            ) {
                return 'Tidak Disarankan';
            } else {
                return 'Aman';
            }
        }
        return '';
    };

    const getResultStyle = () => {
        const result = getResult();
        if (result === 'Aman') {
            return 'border-3 border-solid border-green-500 bg-green-50';
        } else if (result === 'Tidak Disarankan') {
            return 'border-3 border-solid border-red-500 bg-red-50';
        } else {
            return 'border-4 border-dashed border-gray-400 bg-white';
        }
    };

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} min-h-screen pb-20 bg-[#E6EEFC] pt-8`}
            >
                {/* Breadcrumbs */}
                <nav className="ml-8 text-sm space-x-2">
                    <a
                        href="/mengenal-bahan-aktif"
                        className="hover:underline text-[#7092CF]"
                    >
                        Mengenal Bahan Aktif
                    </a>
                    <span>/</span>
                    <a
                        href="/mix-and-match"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Mix and Match
                    </a>
                </nav>

                <div className="mx-45">
                    <div
                        className="bg-[#FFF6ED] my-13 px-14 py-12 rounded-2xl border-3 border-black"
                        style={{
                            boxShadow: '8px 8px 0px rgba(185, 203, 232, 1)',
                        }}
                    >
                        <h1 className="text-4xl font-extrabold mb-2 text-center">
                            Mix & Match Bahan Aktif Skincare
                        </h1>

                        <p className="text-center text-xl font-medium">
                            Klik bahan aktif yang ingin kamu kombinasikan
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
                            <div className="flex-1 border-4 border-dashed border-[#D64F7E] rounded-lg p-6 min-h-[100px] flex items-center justify-center bg-white">
                                {selectedBahan1 ? (
                                    <span className="text-xl font-semibold">
                                        {selectedBahan1.name}
                                    </span>
                                ) : (
                                    <span className="text-gray-500">
                                        Pilih bahan pertama
                                    </span>
                                )}
                            </div>

                            <div className="flex-1 border-4 border-dashed border-[#D64F7E] rounded-lg p-6 min-h-[100px] flex items-center justify-center bg-white">
                                {selectedBahan2 ? (
                                    <span className="text-xl font-semibold">
                                        {selectedBahan2.name}
                                    </span>
                                ) : (
                                    <span className="text-gray-500">
                                        Pilih bahan kedua
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center justify-center font-bold text-2xl">
                                =
                            </div>

                            <div
                                className={`flex-1 rounded-lg p-6 min-h-[100px] flex items-center justify-center transition-all duration-300 ${getResultStyle()}`}
                            >
                                <AnimatePresence>
                                    {selectedBahan1 && selectedBahan2 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="text-center"
                                        >
                                            <p className="text-2xl font-bold">
                                                {/* Hasil kombinasi:{' '} */}
                                                <span
                                                    className={
                                                        getResult() === 'Aman'
                                                            ? 'text-green-600'
                                                            : 'text-red-600'
                                                    }
                                                >
                                                    {getResult()}
                                                </span>
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="flex justify-center mt-7">
                            <button
                                onClick={handleReset}
                                className="flex items-center bg-[#F38EB1] hover:bg-[#D64F7E] text-white mt-2 px-8 py-3 rounded-full font-semibold transition"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(214, 79, 126, 1)',
                                }}
                            >
                                Atur Ulang{' '}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-refresh-ccw-icon lucide-refresh-ccw ml-2"
                                >
                                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                    <path d="M16 16h5v5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                        {listBahanAktif.map((bahan) => {
                            const isSelected =
                                selectedBahan1?.id === bahan.id ||
                                selectedBahan2?.id === bahan.id;
                            return (
                                <div
                                    key={bahan.id}
                                    onClick={() => handleCardClick(bahan)}
                                    className={`relative cursor-pointer border-2 rounded-lg p-4 text-center font-medium transition transform hover:scale-105 hover:shadow-lg ${
                                        isSelected
                                            ? 'bg-green-100 border-green-400'
                                            : 'bg-white border-[#B9CBE8]'
                                    }`}
                                >
                                    {bahan.name}
                                    {isSelected && (
                                        <div className="absolute top-2 right-2 text-green-400 text-xl">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-circle-check-big-icon lucide-circle-check-big"
                                            >
                                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                <path d="m9 11 3 3L22 4" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
