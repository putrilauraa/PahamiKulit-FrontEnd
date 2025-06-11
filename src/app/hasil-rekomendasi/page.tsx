'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';

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
                className={`${montserrat.className} bg-[#E6EEFC] min-h-screen pt-20 px-10`}
            >
                <h1 className="text-3xl font-bold mb-8">
                    Hasil Rekomendasi Produk
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-[#7092CF] rounded-xl shadow-md p-6"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto rounded mb-4"
                            />
                            <p className="text-sm text-gray-500">
                                {product.product_category.description}
                            </p>
                            <h2 className="text-xl font-bold">
                                {product.name}
                            </h2>
                            <p className="text-sm mb-2">
                                Brand: {product.brand.name}
                            </p>
                            <p className="text-sm mb-2">
                                Cocok untuk: {product.suitable_for}
                            </p>
                            <p className="text-sm mb-2">
                                Bahan Utama: {product.key_ingredient}
                            </p>
                            <p className="text-sm mb-2">
                                Manfaat: {product.benefit}
                            </p>
                            <p className="text-sm font-semibold mt-2 text-[#7092CF]">
                                Skor: {product.skor}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
