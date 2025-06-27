import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import DetailProdukClient from '@/components/DetailProdukClient';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

// This is the fallback that will be shown INSTANTLY while the client component loads its data.
// This is a Server Component, so it renders immediately.
const LoadingFallback = () => {
    return (
        <div className="text-center py-20">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7092CF] mx-auto mb-4"></div>
            <p className="text-[#7092CF] text-lg">Loading Product Details...</p>
        </div>
    );
};

export default function DetailProdukPage() {
    return (
        // This is the main page layout
        <>
            <Navbar />
            <div
                className={`${montserrat.className} bg-[#E6EEFC] pb-20 min-h-screen`}
            >
                <div className="relative">
                    <Suspense fallback={<LoadingFallback />}>
                        <DetailProdukClient />
                    </Suspense>
                </div>
            </div>
            <Footer />
        </>
    );
}
