'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';

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

type SkincareDetail = {
    id: number;
    name: string;
    slogan: string;
    description: string;
    image: string;
    benefit: string;
    how_to_use: string;
    product_type_details: ProductTypeDetail[];
};

export default function SkincareDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [categoryDetail, setCategoryDetail] = useState<SkincareDetail | null>(
        null,
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!params?.id) return;

            try {
                setLoading(true);
                const res = await fetch(
                    `/api/produk-basic-skincare/${params.id}`,
                );

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const json = await res.json();

                if (json.success) {
                    setCategoryDetail(json.data);
                } else {
                    throw new Error(json.message || 'Failed to fetch data');
                }
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'Unknown error occurred',
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params?.id]);

    // Navigate to the product page
    const goToProductPage = (productTypeId: number) => {
        router.push(`/detail-produk?id=${productTypeId}`);
    };

    // Helper function to split text by commas
    const formatTextToList = (text: string) => {
        return text
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div
                    className={`${montserrat.className} bg-[#E6EEFC] min-h-screen flex items-center justify-center`}
                >
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7092CF] mx-auto mb-4"></div>
                        <p className="text-[#7092CF] text-lg">Loading...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (error || !categoryDetail) {
        return (
            <>
                <Navbar />
                <div
                    className={`${montserrat.className} bg-[#E6EEFC] min-h-screen flex items-center justify-center`}
                >
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">
                            Error
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {error || 'Category not found'}
                        </p>
                        <button
                            onClick={() =>
                                router.push('/produk-basic-skincare')
                            }
                            className="bg-[#7092CF] text-white px-6 py-2 rounded-lg hover:bg-[#5a7bc4] transition"
                        >
                            Back to Categories
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] pb-20 overflow-hidden`}
            >
                {/* Breadcrumbs */}
                <nav className="mt-8 ml-8 text-sm space-x-2">
                    <a
                        href="/basic-skincare"
                        className="hover:underline text-[#7092CF]"
                    >
                        Basic Skincare
                    </a>
                    <span>/</span>
                    <a
                        href="/produk-basic-skincare"
                        className="hover:underline text-[#7092CF]"
                    >
                        Produk Basic Skincare
                    </a>
                    <span>/</span>
                    <span className="font-bold text-[#7092CF]">
                        {categoryDetail.name}
                    </span>
                </nav>

                {/* Title Section */}
                <div className="mt-16">
                    <div
                        className="hidden md:hidden lg:block absolute bg-[#FFF6ED] h-70 w-70 top-39 right-72"
                        style={{
                            clipPath: 'ellipse(140px 140px at center bottom)',
                        }}
                    ></div>
                    <div className="absolute right-77 top-47">
                        <img
                            src={categoryDetail.image}
                            alt={categoryDetail.name}
                            className="w-61 h-auto drop-shadow-[5px_5px_0px_rgba(0,0,0,0.15)]"
                        />
                    </div>
                    <div className="text-white bg-gradient-to-r from-[#7293D0] to-[#B5CBF0] mx-45 mb-16 rounded-2xl py-10 px-14">
                        {/* Title */}
                        <h1 className="text-4xl font-bold pb-2">
                            {categoryDetail.name}
                        </h1>
                        {/* Slogan */}
                        <p className="text-2xl w-sm">{categoryDetail.slogan}</p>
                        {/* Product Description */}
                        <p className="text-lg w-3xl mt-2">
                            {categoryDetail.description}
                        </p>
                    </div>
                </div>

                {/* Benefit Section */}
                <div className="mx-45">
                    <div className="bg-[#7092CF] h-8 md:h-10 py-7 w-34 md:text-xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                        Manfaat
                    </div>
                    <div className="bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-8 px-10">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            {/* Swirl Element */}
                            <img
                                src="/Elements-20.png"
                                alt="Swirl"
                                className="absolute w-76 h-auto left-42 pb-30"
                            />

                            {/* Mascot */}
                            <img
                                src="/Pink-3.png"
                                alt="Mascot"
                                className="absolute w-79 h-auto -scale-x-100 pt-32 left-57"
                            />

                            {/* Benefit List */}
                            <div className="flex flex-col gap-4 w-4xl text-lg ml-88">
                                {formatTextToList(categoryDetail.benefit).map(
                                    (benefit, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#D5E4FF] text-black px-8 py-4 rounded-full"
                                        >
                                            {benefit}
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to Use Section */}
                <div className="mx-45 mt-16">
                    <div className="bg-[#7092CF] h-8 md:h-10 py-7 w-60 md:text-xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                        Cara Penggunaan
                    </div>
                    <div className="bg-white rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-12 px-10">
                        <div className="relative">
                            {/* Dashed vertical line */}
                            <div className="absolute top-[30px] left-[24px] h-[calc(100%-40px)] border-l-2 border-dashed border-[#7092CF] z-0"></div>

                            {/* Steps */}
                            <div className="flex flex-col gap-6 relative z-10">
                                {formatTextToList(
                                    categoryDetail.how_to_use,
                                ).map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="min-w-[50px] min-h-[50px] border-2 border-[#7092CF] rounded-full flex items-center justify-center text-[#7293D0] text-lg font-bold bg-white z-10">
                                            {(index + 1)
                                                .toString()
                                                .padStart(2, '0')}
                                        </div>
                                        <p className="text-[#333] pt-2 pl-2 text-lg">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mascot Image */}
                        <img
                            src="/Blue-2.png"
                            alt="Mascot"
                            className="absolute bottom-4 right-66 top-290 w-68 h-auto -scale-x-100"
                        />
                        <img
                            src="/Elements-49.png"
                            alt="Elements"
                            className="absolute bottom-4 right-62 top-276 w-38 h-auto"
                        />
                    </div>
                </div>

                {/* Product Type List */}
                <div className="flex flex-col gap-3 mx-45 mt-16">
                    <h2 className="text-3xl font-bold">
                        Tipe {categoryDetail.name}
                    </h2>

                    {categoryDetail.product_type_details.map(
                        (productType, index) => (
                            <div
                                key={productType.id}
                                className="bg-[#FFF6ED] rounded-[20px] shadow-[0px_4px_0px_#f1dcc1] px-10 py-8 mt-2"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(255, 231, 213, 1)',
                                }}
                            >
                                <h3 className="text-2xl font-semibold mb-3">
                                    {productType.product_type.name}
                                </h3>
                                <p className="text-[#333] mb-5">
                                    {productType.description}
                                </p>
                                <button
                                    onClick={() =>
                                        goToProductPage(
                                            productType.product_type.id,
                                        )
                                    }
                                    className="inline-block bg-white hover:bg-[#405E93] hover:text-white hover:border-[#405E93] border-black font-semibold text-xs px-4 py-2 rounded-full border-2 transition"
                                    style={{
                                        boxShadow:
                                            '0 4px 0px rgba(64, 94, 147, 1)',
                                    }}
                                >
                                    Lihat contoh produk →
                                </button>
                            </div>
                        ),
                    )}
                </div>

                {/* Back Button */}
                <div className="mx-45 mt-16 text-center">
                    <button
                        onClick={() => router.push('/produk-basic-skincare')}
                        className="bg-[#7092CF] hover:bg-[#5a7bc4] text-white font-semibold py-3 px-8 rounded-full transition text-lg"
                        style={{
                            boxShadow: '0px 4px 0px rgba(90, 123, 196, 1)',
                        }}
                    >
                        Kembali ke Daftar Produk
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}
