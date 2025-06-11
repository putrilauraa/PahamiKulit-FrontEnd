'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

type ProductType = {
    id: number;
    name: string;
};

type ProductTypeDetail = {
    id: number;
    description: string;
    product_type: ProductType;
};

type SkincareCategory = {
    id: number;
    name: string;
    image: string;
    product_type_details: ProductTypeDetail[];
};

export default function ProdukBasicSkincare() {
    const router = useRouter();
    const [categories, setCategories] = useState<SkincareCategory[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/produk-basic-skincare');
            const json = await res.json();
            setCategories(json.data);
        };
        fetchData();
        console.log(categories);
    }, []);

    return (
        <>
            <Navbar />

            <div className={`${montserrat.className} overflow-hidden`}>
                {/* Breadcrumbs */}
                <nav className="mt-5 ml-5 lg:ml-8 text-xs lg:text-sm space-x-2">
                    <a
                        href="/basic-skincare"
                        className="hover:underline text-[#7092CF]"
                    >
                        Basic Skincare
                    </a>
                    <span>/</span>
                    <a
                        href="/produk-basic-skincare"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Produk Basic Skincare
                    </a>
                </nav>

                {/* Title Section */}
                <div
                    className="hidden lg:block absolute h-80 w-auto mt-3 right-40"
                    style={{
                        clipPath: 'inset(20px 30px 40px 10px)',
                    }}
                >
                    <img
                        src="/Pink-7.png"
                        alt="Mascot"
                        className="w-140 h-auto -mt-5"
                    />
                </div>

                <div className="text-white bg-gradient-to-t from-[#B5CBF0] to-[#7293D0] mx-5 lg:mx-35 mt-7 lg:mt-14 mb-10 lg:mb-68 rounded-2xl px-6 py-6 lg:px-14 lg:py-12">
                    <h1 className="text-xl lg:text-4xl font-bold lg:pb-3">
                        Produk Basic Skincare
                    </h1>
                    <p className="lg:font-semibold text-sm lg:lg:text-lg lg:w-3xl">
                        Nah, kenalan dulu yuk sama produk yang wajib jadi teman
                        sehari-hari kulitmu!
                    </p>
                    <p className="text-xs lg:text-base mt-3 lg:w-3xl">
                        Di halaman ini, kamu bisa cari tahu fungsi masing-masing
                        produk, cara penggunaan, tipe-tipe produk, dan contoh
                        produk lokalnya. Yuk, rawat kulitmu dengan langkah yang
                        tepat dari awal!
                    </p>
                    {/* <p className="text-base mt-1 text-[#ffffff]">
                    </p> */}
                </div>

                {/* Product Categories */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-5 lg:mx-35 mb-10 lg:mb-20">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-[#D5E4FF] rounded-xl mt-12 lg:mt-0 h-35 lg:h-60 relative"
                            style={{
                                boxShadow: '4px 4px 0px rgba(185, 203, 232, 1)',
                            }}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="absolute w-35 lg:w-80 h-auto bottom-10 lg:bottom-20 ml-28 lg:ml-3 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)] lg:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
                            />
                            <button
                                onClick={() =>
                                    router.push(
                                        `/produk-basic-skincare/${category.id}`,
                                    )
                                }
                                className="flex items-center mt-21 lg:mt-43 mx-auto text-white text-sm lg:text-lg lg:font-semibold rounded-full bg-[#F38EB1] hover:bg-[#D64F7E] py-2 px-10 transition"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(214, 79, 126, 1)',
                                }}
                            >
                                {category.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-5">
                <Footer />
            </div>
        </>
    );
}
