'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { LOCAL_API_URL } from '@/configs/app';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

const API_URL = LOCAL_API_URL;

interface SkinTestResult {
    success: boolean;
    message: string;
    data: {
        id: number;
        score_range: string;
        name: string;
        description: string;
        characteristicss: string[];
        dos: string;
        donts: string;
        saw_point: number;
        recommend_ingredients: {
            id: number;
            name: string;
            description: string;
            image: string;
            ingredient_type: {
                id: number;
                name: string;
            };
            benefits: string[];
            products: {
                id: number;
                brand: {
                    id: number;
                    name: string;
                };
                name: string;
                image: string;
                product_category: {
                    id: number;
                    description: string;
                };
                suitable_for: string;
                key_ingredient: string;
                benefit: string;
            }[];
        }[];
        image: string;
    };
}

interface DecodedToken {
    user_id: number;
    user_name: string;
    exp: number;
    [key: string]: any;
}

export default function ProfilKulit() {
    const [skinTestResult, setSkinTestResult] = useState<SkinTestResult | null>(
        null,
    );
    const router = useRouter();

    const getProfilKulit = async (token: string) => {
        const decoded: DecodedToken = jwtDecode(token);

        const response = await fetch(
            `${API_URL}/users/${decoded.user_id}/skin-test-result`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        if (response.ok) {
            const data: SkinTestResult = await response.json();

            if (data.success) {
                setSkinTestResult(data);
            } else {
                console.error(data.message);
            }
        } else {
            console.log('Failed to fetch data');
            router.push('/tes-jenis-kulit');
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/tes-jenis-kulit');
        } else {
            getProfilKulit(token);
        }
    }, [router]);

    if (!skinTestResult) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    const { data: profileData } = skinTestResult;

    return (
        <>
            <Navbar />
            <div className={`${montserrat.className} overflow-hidden`}>
                <nav className="mt-4 lg:mt-8 ml-4 lg:ml-8 text-xs lg:text-sm space-x-2">
                    <a href="/" className="hover:underline text-[#7092CF]">
                        Beranda
                    </a>
                    <span>/</span>
                    <a
                        href="/tes-jenis-kulit"
                        className="hover:underline text-[#7092CF]"
                    >
                        Tes Jenis Kulit
                    </a>
                    <span>/</span>
                    <a
                        href="/profil-kulit"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Profil Kulit
                    </a>
                </nav>
                <div className="bg-[#D5E4FF] text-[#405E93] flex justify-center mx-auto w-20 font-semibold px-4 py-2 rounded-full mt-8 lg:mt-10 text-xs lg:text-lg">
                    Hasil
                </div>

                {/* Skin Profile Header */}
                <div className="absolute text-[#405E93] mt-6 lg:mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD5E9] font-semibold px-6 py-2 rounded-full text-xs lg:text-lg">
                    Tes Jenis Kulit
                </div>

                <div className="text-white bg-[#B9CBE8] rounded-2xl mt-6 lg:mt-9 mx-5 lg:mx-45 px-7 lg:px-10 py-7 lg:py-14 text-center">
                    <h1 className="text-xl lg:text-4xl font-bold">
                        Profil Kulit
                    </h1>
                    <p className="mt-1 lg:mt-3 text-xs lg:text-lg lg:w-2xl flex mx-auto lg:leading-6">
                        Ini dia hasil tes jenis kulit hanya untuk kamu, beserta
                        tips untuk menjaga jenis kulit yang sesuai dengan
                        kondisi kulitmu
                    </p>
                </div>

                <div
                    className="h-80 mt-20 relative"
                    style={{
                        background: '#E6EEFC',
                        clipPath: 'ellipse(1000px 200px at center bottom)',
                    }}
                ></div>

                {/* Skin Profile Content */}
                <div className="bg-[#E6EEFC] min-h-screen lg:pb-12">
                    <div className="relative z-20 -top-92 lg:-top-70">
                        <div
                            className="mx-5 lg:mx-45 bg-white border border-black lg:flex items-center rounded-xl md:rounded-2xl p-6 mb-4 md:mb-6"
                            style={{
                                boxShadow: '0px 4px 0px rgba(112, 146, 207, 1)',
                            }}
                        >
                            <div className="">
                                {/* Avatar Background Color */}
                                <div className="bg-[#D8ECFFFF] aspect-square w-35 lg:w-55 rounded-xl">
                                    {/* Skin Type Avatar */}
                                    <img
                                        src={profileData.image}
                                        alt={`Avatar ${profileData.name}`}
                                        className="absolute w-35 lg:w-55 h-auto aspect-square rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="lg:w-4xl mt-4 lg:mt-0 lg:mx-10">
                                {/* Skin Type Title */}
                                <h2 className="lg:text-3xl font-bold mt-1 lg:mt-3">
                                    {profileData.name}
                                </h2>
                                {/* Skin Type Description */}
                                <p className="text-[#333] text-xs lg:text-base mt-1 lg:mt-3">
                                    {profileData.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skin Type Characteristics */}
                    <div className="absolute mx-5 lg:mx-45 -mt-85 lg:-mt-60">
                        <h3 className="font-bold text-xl lg:text-3xl mb-2 lg:mb-6">
                            Ciri-ciri
                        </h3>
                        <div className="grid md:grid-cols-4 gap-3 lg:gap-4">
                            {profileData.characteristicss.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center bg-white border-2 border-[#7092CF] rounded-lg px-6 py-3 lg:py-8 text-center text-sm lg:text-base"
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

                    {/* Dos & Donts */}
                    <div className="mx-5 lg:mx-45 -mt-9 lg:mt-10">
                        <h3 className="font-bold text-xl lg:text-3xl mb-2 lg:mb-6">
                            Do's & Dont's
                        </h3>
                        <div
                            className="bg-[#FFF6ED] border-2 border-[#7092CF] rounded-xl p-4 lg:p-10"
                            style={{
                                boxShadow: '0px 4px 0px rgba(185, 203, 232, 1)',
                            }}
                        >
                            <div className="flex items-start gap-4 lg:w-7xl text-xs lg:text-lg">
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
                                {/* Do's */}
                                <p>
                                    <strong>
                                        Perhatikan Keterangan Produk
                                    </strong>{' '}
                                    Gunakan produk perawatan kulit...
                                </p>
                            </div>
                            <div className="flex items-start gap-4 lg:w-7xl mt-3 lg:mt-6 text-xs lg:text-lg">
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
                                {/* Dont's */}
                                <p>
                                    <strong>
                                        Jangan Cuci Muka Dengan Air Panas
                                    </strong>{' '}
                                    Hindari penggunaan produk pembersih...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ingredients Recommendation */}
                    <div className="mx-5 lg:mx-45 mt-10 lg:mt-15">
                        <h3 className="font-bold text-xl lg:text-3xl mb-2 lg:mb-6">
                            Rekomendasi Kandungan
                        </h3>
                        <div
                            className="lg:flex bg-white border-2 border-[#7092CF] rounded-xl p-4 lg:p-10 justify-between"
                            style={{
                                boxShadow: '0px 4px 0px rgba(185, 203, 232, 1)',
                            }}
                        >
                            <p className="text-xs lg:text-lg lg:w-sm mb-3 lg:mb-0">
                                Berikut ini bahan-bahan skincare yang cocok
                                untuk jenis kulitmu
                            </p>
                            <div className="flex flex-wrap gap-1 lg:gap-3">
                                {/* Display only the first three ingredients */}
                                {profileData.recommend_ingredients
                                    .slice(0, 3)
                                    .map((ingredient) => (
                                        <Link
                                            href={`/mengenal-bahan-aktif/${ingredient.id}`}
                                            key={ingredient.id}
                                            className="flex text-white items-center bg-[#7092CF] justify-center text-center hover:text-white hover:bg-[#405E93] p-5 rounded-2xl"
                                            style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(64, 94, 147, 1)',
                                }}
                                        >
                                            {ingredient.name}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mx-5 lg:mx-45 mt-12 lg:mt-15 text-[10px] lg:text-base">
                        <strong>Disclaimer:</strong> Hasil tes ini ditujukan
                        sebagai panduan awal untuk mengenali jenis kulitmu
                        secara umum. Tes ini bukan diagnosis medis dan tidak
                        dapat menggantikan pemeriksaan langsung oleh dokter
                        kulit atau profesional di bidang kecantikan.
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
