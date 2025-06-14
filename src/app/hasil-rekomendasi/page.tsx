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
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] overflow-hidden min-h-screen`}
            >
                <div className='mt-15'>
                    <div className="bg-[#D5E4FF] text-[#405E93] flex justify-center mx-auto w-20 font-semibold px-4 py-2 rounded-full mt-8 lg:mt-10 text-xs lg:text-lg">
                        Hasil
                    </div>

                    <div className="absolute text-[#405E93] mt-6 lg:mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD5E9] font-semibold px-6 py-2 rounded-full text-xs lg:text-lg">
                        Rekomendasi Skincare
                    </div>
                    <img
                        src="/Elements-48.png"
                        alt="Element"
                        className="hidden lg:block absolute right-62 w-42 h-auto top-33 rotate-25"
                    />
                    <div className="text-white bg-[#B9CBE8] rounded-2xl mt-6 lg:mt-9 mx-5 lg:mx-45 px-7 lg:px-10 py-7 lg:py-14 text-center">
                        <h1 className="text-xl lg:text-4xl font-bold">
                            Rekomendasi Skincare
                        </h1>
                        <p className="mt-1 lg:mt-3 text-xs lg:text-lg lg:w-3xl flex mx-auto lg:leading-6">
                            Berikut ini rekomendasi produk yang diberikan
                            berdasarkan informasi jenis kulit dan permasalahan
                            kulit yang kamu masukkan. Hasil rekomendasi bersifat
                            umum dan tidak menggantikan saran dari ahli
                            dermatologi.
                        </p>
                    </div>
                    <img
                        src="/Elements-40.png"
                        alt="Element"
                        className="hidden lg:block absolute left-62 w-42 h-auto top-90"
                    />
                </div>

                {/* Product List */}
                <div className="my-25">
                    <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8">
                        {products.map((product, idx) => (
                            <CardProduct
                                key={idx}
                                cardKey={idx}
                                brand={product.brand.name}
                                productName={product.name}
                                image={product.image}
                                tags={[product.product_category.description]}
                                approvedByDoct={true}
                                href={`/detail-produk?id=${product.id}`}
                            />
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
