import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function basicSkincare() {
    return (
        <>
            <Navbar />
            <p>Ini page rekomendasi skincare</p>
            <Footer />
        </>
    );
}
