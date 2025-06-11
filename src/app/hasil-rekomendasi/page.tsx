'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import CardProduct from '@/components/CardProduct';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

type Product = {
    id: number;
    name: string;
    image: string;
    suitable_for: string;
    key_ingredient: string;
    benefit: string;
    skor: number;
    brand: { name: string };
    product_category: { description: string };
};

export default function HasilRekomendasi() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('recommendation');
        if (stored) {
            setProducts(JSON.parse(stored));
        }
    }, []);

    return (
        <div
            className={`min-h-screen bg-[var(--color-background)] ${montserrat.className}`}
        >
            <Navbar />

            {/* Upper */}
            <div className="flex justify-center">
                <div>
                    {/* Hasil Rekomendasi */}
                    <div className="flex justify-center">
                        <div className="flex gap-2 mb-4 mt-6 sm:mt-8">
                            <div className="px-6 sm:px-6 py-2 rounded-full font-bold text-[#405E93] bg-[#D5E4FF]">
                                Hasil
                            </div>
                            <div className="px-6 sm:px-6 py-2 rounded-full font-bold text-[#405E93] bg-[#FFD5E9]">
                                Rekomendasi
                            </div>
                        </div>
                    </div>

                    {/* Rekomendasi Skincare Intro */}
                    <div className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-2xl bg-[#B9CBE8] text-[#405E93] px-4 sm:px-8 md:px-16 py-6 sm:py-8text-[#405E93] flex flex-col items-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">
                            Rekomendasi Skincare
                        </h1>
                        <p className="text-center text-sm sm:text-base md:text-lg opacity-90">
                            Berikut ini rekomendasi produk yang diberikan
                            berdasarkan informasi jenis kulit dan permasalahan
                            kulit yang kamu masukkan. Hasil rekomendasi bersifat
                            umum dan tidak menggantikan saran dari ahli
                            dermatologi.
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
                    style={
                        {
                            // clipPath: 'ellipse(1200px 1500px at center bottom)',
                        }
                    }
                >
                    {/* Product List */}
                    <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8 pb-100 sm:pb-10">
                        {products.map((product, idx) => (
                            <CardProduct
                                key={idx}
                                cardKey={idx}
                                productName={product.name}
                                image={product.image}
                                tags={[product.product_category.description]}
                                approvedByDoct={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
