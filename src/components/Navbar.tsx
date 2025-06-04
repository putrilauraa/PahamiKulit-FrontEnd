'use client';
import React, { useState } from 'react';
import { Bai_Jamjuree } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Signin from './Signin';


const bai_jamjuree = Bai_Jamjuree({ weight: '500', subsets: ['latin'] });

export function Navbar() {
    const router = useRouter();
    const pathName = usePathname();

    const [isClick, setisCLick] = useState(false);
    const toggleNavbar = () => {
        setisCLick(!isClick);
    };

    const toggleLoginModal = () =>{

    }

    return (
        <>
            <nav className="relative bg-white border-b border-black">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={`${bai_jamjuree.className} flex items-center justify-between h-16`}
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link
                                    href="/"
                                    className="text-black text-lg lg:text-2xl font-semibold"
                                >
                                    PahamiKulit
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Beranda
                                </Link>
                                <Link
                                    href="/basic-skincare"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Basic Skincare
                                </Link>
                                <Link
                                    href="/mengenal-bahan-aktif"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Bahan Aktif
                                </Link>
                                <Link
                                    href="/rekomendasi"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Rekomendasi
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Tentang Kami
                                </Link>

                                <Link href="/components/Navbar.tsx">
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1"
                                        stroke="currentColor"
                                        className="size-10 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg> */}
                                    {/* <Signin/> */}
                                </Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavbar}
                            >
                                {isClick ? (
                                    <svg
                                        className="h-6 w-6 text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6 text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                className="text-black block hover:bg-gray-100 py-5 px-1"
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/basic-skincare"
                                className="text-black block hover:bg-gray-100 py-5 px-1"
                            >
                                Basic Skincare
                            </Link>
                            <Link
                                href="/mengenal-bahan-aktif"
                                className="text-black block hover:bg-gray-100 py-5 px-1"
                            >
                                Bahan Aktif
                            </Link>
                            <Link
                                href="/about-us"
                                className="text-black block hover:bg-gray-100 py-5 px-1"
                            >
                                Tentang Kami
                            </Link>
                            <Link
                                href="/profile"
                                className="text-black block hover:bg-gray-100 py-5 px-1"
                            >
                                Profil Saya
                            </Link>
                            <div
                                onClick={toggleLoginModal}
                                className="text-black block hover:bg-gray-100 py-5 px-1"
                            >
                                My Profile
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
