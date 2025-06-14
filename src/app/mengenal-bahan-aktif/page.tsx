'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

type brand = {
    id: number;
    name: string;
};

type ProductCategory = {
    id: number;
    description: string;
};

type products = {
    id: number;
    brand: brand;
    name: string;
    image: string;
    product_category: ProductCategory;
};

type IngredientType = {
    id: number;
    name: string;
};

type Ingredient = {
    id: number;
    name: string;
    ingredient_type: IngredientType;
    products: products[];
};

export default function MengenalBahanAktif() {
    const router = useRouter();
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/mengenal-bahan-aktif');
            const json = await res.json();
            setIngredients(json.data);
        };
        fetchData();
        console.log(ingredients);
    }, []);

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] pt-1 lg:pt-10 pb-8 lg:pb-15 min-h-screen`}
            >
                {/* Card 1 */}
                <div className="mx-5 lg:mx-45 my-10">
                    {/* Border */}
                    <div
                        className="bg-white border-3 border-[#B9CBE8] rounded-2xl flex items-center justify-center px-6 py-6 lg:px-10 lg:py-4"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232)',
                        }}
                    >
                        {/* Ilustrasi */}
                        <div>
                            <img
                                className="hidden lg:block w-75 h-auto"
                                src="mba-page.png"
                                alt="Mascot"
                            ></img>
                        </div>
                        <div className="lg:ml-5">
                            <img
                                className="block lg:hidden w-26 h-auto justify-center items-center mx-auto"
                                src="mba-page.png"
                                alt="Mascot"
                            ></img>
                            {/* Title */}
                            <h1 className="font-bold text-xl lg:text-4xl">
                                Yuk Mengenal Bahan Aktif Skincare!
                            </h1>

                            {/* Description */}
                            <p className="py-2 lg:py-3 text-xs lg:text-sm">
                                Bahan aktif skincare adalah kandungan utama
                                dalam produk skincare yang berfungsi langsung
                                untuk memberikan manfaat spesifik pada kulit.
                                Biasanya, bahan aktif skincare digunakan untuk
                                menjadi fokus utama dari produk dan bekerja
                                secara efektif untuk mencapai hasil yang
                                diinginkan.
                            </p>
                            <p className="font-semibold lg:font-bold text-xs lg:text-base text-[#7092CF]">
                                Klik bahan aktif di bawah ini yang ingin kamu
                                pelajari
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bahan Aktif dinamis */}
                <div className="mx-5 lg:mx-45 lg:mt-15 pb-6 lg:pb-10">
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {ingredients.map((ingredient) => {
                            return (
                                <Link
                                    href={`/mengenal-bahan-aktif/${ingredient.id}`}
                                    key={ingredient.id}
                                    className="flex items-center bg-white justify-center text-center hover:text-white hover:bg-[#7092CF] border-[#B9CBE8] hover:border-[#7092CF] border-2 p-5 rounded-2xl"
                                >
                                    <div>{ingredient.name}</div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Card 2 */}
                <div className="mx-5 lg:mx-45 my-5">
                    {/* Border */}
                    <div
                        className="bg-[#FFF6ED] rounded-2xl flex items-center px-6 py-6 lg:px-10 lg:py-4"
                        style={{
                            boxShadow: '6px 6px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        {/* Ilustrasi */}
                        <img
                            className="hidden lg:block w-60 h-auto"
                            src="/Blue-10.png"
                            alt="Mascot"
                        ></img>

                        <div className="lg:ml-10">
                            <img
                                className="block lg:hidden w-30 h-auto justify-center mx-auto mb-1"
                                src="/Blue-10.png"
                                alt="Mascot"
                            ></img>
                            {/* Title */}
                            <h1 className="font-bold text-xl lg:text-4xl">
                                Mix & Match Bahan Aktif
                            </h1>

                            {/* Description */}
                            <p className="font-medium my-1 lg:my-2 md:my-4 text-xs md:text-sm lg:text-lg ">
                                Eits! jangan asal campur skincare, pahami dulu
                                yuk tentang kandungan aktif apa saja yang boleh
                                digunakan secara bersamaan
                            </p>
                            <button
                                onClick={() => router.push('/mix-and-match')}
                                className="bg-[#7092CF] text-white hover:bg-[#405E93] text-xs md:text-sm lg:text-base font-semibold rounded-4xl px-4 lg:px-6 py-2 lg:py-3 mt-2 transition"
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
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
