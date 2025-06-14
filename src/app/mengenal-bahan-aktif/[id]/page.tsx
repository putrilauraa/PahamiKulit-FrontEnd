'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import CardProduct from '@/components/CardProduct';
// import { hr } from 'framer-motion/client';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

type Products = {
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

type IngredientType = {
    id: number;
    name: string;
};

type IngredientDetail = {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredient_type: IngredientType;
    benefits: string;
    products: Products[];
};

export default function DetailBahanAktif() {
    const params = useParams();
    const router = useRouter();
    const [ingredientDetail, setIngredientDetail] =
        useState<IngredientDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!params?.id) return;

            try {
                setLoading(true);
                const res = await fetch(
                    `/api/mengenal-bahan-aktif/${params.id}`,
                );

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                const json = await res.json();

                if (json.success) {
                    setIngredientDetail(json.data);
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

    // Helper function to split text by commas
    const formatTextToList = (text: string | string[]): string[] => {
        if (Array.isArray(text)) {
            return text
                .map((item) => item.trim())
                .filter((item) => item.length > 0);
        }

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

    if (error || !ingredientDetail) {
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
                            onClick={() => router.push('/mengenal-bahan-aktif')}
                            className="bg-[#7092CF] text-white px-6 py-2 rounded-lg hover:bg-[#5a7bc4] transition"
                        >
                            Back to Previous Page
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
            <div className={`${montserrat.className}`}>
                {/* Breadcrumbs */}
                <nav className="my-4 lg:my-8 ml-4 lg:ml-8 text-xs lg:text-sm space-x-2">
                    <a
                        href="/mengenal-bahan-aktif"
                        className="hover:underline text-[#7092CF]"
                    >
                        Mengenal Bahan Aktif
                    </a>
                    <span>/</span>
                    <span className="font-bold text-[#7092CF]">
                        {ingredientDetail.name}
                    </span>
                </nav>

                {/* Card Details */}
                <div className="bg-gradient-to-l from-[#7293D0] to-[#B5CBF0]">
                    <div
                        className="bg-gradient-to-r from-[#7293D0] to-[#B5CBF0] text-white py-5 md:px-5 md:py-10
                                    md:mr-20 md:rounded-r-full"
                    >
                        <div className="flex mx-4 sm:py-4 lg:mx-10">
                            {/* Left Side */}
                            <div className="bg-white lg:p-6 rounded-2xl">
                                <img
                                    src={ingredientDetail.image}
                                    alt={ingredientDetail.name}
                                    className="hidden lg:block w-90 h-auto"
                                ></img>
                            </div>

                            {/* Right Side */}
                            <div className="mx-4 lg:mx-6 my-2 flex items-center">
                                <div className="lg:ml-4">
                                    {/* Title */}
                                    <div className="text-lg lg:text-4xl font-bold mb-2 lg:mb-4">
                                        {ingredientDetail.name}
                                    </div>

                                    {/* Description */}
                                    <div className="text-xs lg:text-lg">
                                        {ingredientDetail.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manfaat Skincare */}
                <div className="text-lg lg:text-3xl font-bold text-center mt-8 lg:mt-15">
                    Manfaat {ingredientDetail.name}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 mx-5 lg:mx-60 my-4 lg:my-10">
                    {formatTextToList(ingredientDetail.benefits).map(
                        (benefit, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-[#E6EEFC] p-2 lg:p-4 rounded-xl"
                            >
                                <div className="bg-[#7092CF] text-white font-bold w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-md mr-4">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <p className="text-sm lg:text-xl font-medium">{benefit}</p>
                            </div>
                        ),
                    )}
                </div>

                {/* Cards Produk */}
                <div>
                    <div className="text-lg lg:text-3xl font-bold text-center mt-10 lg:mt-20 mb-6 lg:mb-10">
                        Produk dengan Kandungan {ingredientDetail.name}
                    </div>
                    {/* Product List */}
                    <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8 sm:pb-10">
                        {ingredientDetail.products.map((product, idx) => (
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

                {/* Back Button */}
                <div className="mx-5 lg:mx-45 mt-8 text-center">
                    <button
                        onClick={() => router.push('/mengenal-bahan-aktif')}
                        className="bg-[#7092CF] hover:bg-[#5a7bc4] text-white font-semibold py-3 px-8 rounded-full transition text-xs lg:text-lg"
                        style={{
                            boxShadow: '0px 4px 0px rgba(90, 123, 196, 1)',
                        }}
                    >
                        Kembali ke Daftar Bahan Aktif
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="Footer pt-10 lg:pt-15">
                <Footer />
            </div>
        </>
    );
}
