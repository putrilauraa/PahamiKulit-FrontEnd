import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} h-64`}
                style={{
                    background: '#D5E4FF',
                    color: '#405E93',
                }}
            >
                <div className="justify-between text-sm py-6 px-4 sm:px-6 lg:px-8 z-0">
                    [navigation]
                </div>
                <header
                    className="relative h-100 py-14 px-4 sm:px-6 lg:px-8 mx-auto"
                    style={{
                        background: '#E6EEFC',
                        clipPath: 'ellipse(1400px 395px at center bottom)',
                    }}
                >
                    <div className="absolute right-40 top-14 hidden md:flex flex-col items-end">
                        <img
                            src="/Elements-15.png"
                            alt="Element"
                            className="w-70 h-auto"
                        />
                    </div>
                    <div className="absolute right-76 top-19 hidden md:flex flex-col items-end">
                        <img
                            src="/Blue-1.png"
                            alt="Mascot"
                            className="w-90 h-auto mt-4"
                        />
                    </div>
                    <div className="max-w-xl mt-10 md:mt-20 ml-16 md:ml-38">
                        <div className="font-extrabold text-5xl">
                            Selamat Datang di Dunia Basic Skincare!
                        </div>
                        <div className="text-md py-5">
                            Di sini, kamu bisa menemukan langkah-langkah
                            perawatan kulit yang simpel namun efektif. Kamu juga
                            akan belajar mengenali kebutuhan kulitmu dan memilih
                            produk yang tepat untuk bisa tampil lebih sehat dan
                            percaya diri setiap harinya!
                        </div>
                    </div>
                </header>
            </div>

            {/* <div className="relative mt-6">
                <Footer />
            </div> */}
        </>
    );
}
