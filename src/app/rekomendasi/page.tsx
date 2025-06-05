import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

{
    /* Back End masuk disini ya ibu */
}
const products = Array(9).fill({
    name: "For Skin's Sake Weightless Sunscreen",
    tags: ['SPF', 'Pelembab', 'Pembersih'],
    approved: true,
});

export default function RekomendasiSkincare() {
    return (
        <div className={`min-h-screen bg-[var(--color-background)] ${montserrat.className}`}>
            <Navbar />
            
            {/* Upper */}
            <div className="flex justify-center">
                <div>
            {/* Hasil Rekomendasi */}
            <div className="flex justify-center">
            <div className="flex gap-2 mb-4 mt-6 sm:mt-8">
                    <div className="px-6 sm:px-6 py-2 rounded-full font-bold text-[#405E93] bg-[#D5E4FF]">Hasil</div>
                    <div className="px-6 sm:px-6 py-2 rounded-full font-bold text-[#405E93] bg-[#FFD5E9]">Rekomendasi</div>
            </div>
            </div>

            {/* Rekomendasi Skincare Intro */}
                <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-2xl bg-[#B9CBE8] text-[#405E93] px-4 sm:px-8 md:px-16 py-6 sm:py-8text-[#405E93] flex flex-col items-center">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">
                        Rekomendasi Skincare
                    </h1>
                    <p className="text-center text-sm sm:text-base md:text-lg opacity-90">
                        Berikut ini rekomendasi produk yang diberikan
                        berdasarkan informasi jenis kulit dan permasalahan kulit
                        yang kamu masukkan. Hasil rekomendasi bersifat umum dan
                        tidak menggantikan saran dari ahli dermatologi.
                    </p>
                </div>
            </div>
            </div>


            <div
                    className="h-80 relative"
                    style={{
                        background: '#E6EEFC',
                        clipPath: 'ellipse(1000px 200px at center bottom)',
                    }}
                ></div>


            {/* Products*/}
            <div>
            <div
                className="w-full bg-[#E6EEFC]"
                style={{
                    // clipPath: 'ellipse(1200px 1500px at center bottom)',
                }}
            >

                {/* Product List */}
                <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8 pb-100 sm:pb-10">
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow px-2 py-2 md:py-4 flex flex-col min-h-[320px]"
                        >
                            {/* Placeholder Image */}
                            <div className="bg-[#FAF6F3] border border-[#F2EEEB] rounded-xl h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 w-full" />
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-2 text-black">
                                {product.tags.map((tag: string, i: number) => (
                                    <span
                                        key={i}
                                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                                            tag === 'SPF'
                                                ? 'bg-[#F5E2C7]'
                                                : tag === 'Pelembab'
                                                ? 'bg-[#FFEDF3]'
                                                : 'bg-[#E6EEFC]'
                                        }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {/* Product Name */}
                            <div className="font-semibold text-sm sm:text-base md:text-lg mb-2">
                                {product.name}
                            </div>
                            {/* Approved Badge */}
                            {product.approved && (
                                <span className="flex items-center mt-2 px-3 py-1 rounded-md border-2 border-[#84CDA8] text-[#3CB371] text-xs font-medium">
                                    <img
                                    src="/Check.png"
                                    alt="Checked"
                                    className="w-5 h-auto mr-2">
                                    </img>
                                    Approved by BPOM
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}