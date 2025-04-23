'use client';
import React, { useState } from 'react';
import { Bai_Jamjuree } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const bai_jamjuree = Bai_Jamjuree({ weight: '500', subsets: ['latin'] });

export function Navbar() {
    const router = useRouter();
    const pathName = usePathname();

    const [isClick, setisCLick] = useState(false);
    const toggleNavbar = () => {
        setisCLick(!isClick);
    };

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
                                    className="text-black text-lg lg:text-2xl"
                                >
                                    <span className="font-bold">Basic</span>Dulu
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link
                                    href="/home"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/skincare"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Skincare
                                </Link>
                                <Link
                                    href="/product"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    Product
                                </Link>
                                <Link
                                    href="/about-us"
                                    className="text-black hover:border-b-2 hover:border-black py-5 px-1"
                                >
                                    About Us
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
                                href="/home"
                                className="text-black block hover:border-b-2 hover:border-black py-5 px-1"
                            >
                                Home
                            </Link>
                            <Link
                                href="/skincare"
                                className="text-black block hover:border-b-2 hover:border-black py-5 px-1"
                            >
                                Skincare
                            </Link>
                            <Link
                                href="/product"
                                className="text-black block hover:border-b-2 hover:border-black py-5 px-1"
                            >
                                Product
                            </Link>
                            <Link
                                href="/about-us"
                                className="text-black block hover:border-b-2 hover:border-black py-5 px-1"
                            >
                                About Us
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
