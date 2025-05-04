import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function SkinCare() {
    return (
        <>
            <Navbar />


            <div className={'${montserrat.className}'}
                style={{
                    color: '#000000',
                }}
            >

                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2 py-14 px-32 h-1/5">
                    {/* Column */}
                    <div className="flex items-center">

                        <div className="border-pink-200 border-2 px-10 py-10 rounded-4xl hover:text-black hover:bg-pink-200">
                            {/* Title */}
                            <div className="font-semibold mb-3 text-2xl">
                                Panduan Basic Skincare
                            </div>

                            {/* Description */}
                            <p>
                                Pelajari langkah-langkah dasar perawatan kulit,
                                mulai dari cara membersihkan, melembapkan,
                                hingga melindungi kulit.
                                Cocok untuk pemula yang ingin mulai
                                merawat kulit dengan cara yang tepat.
                            </p>

                            <div className="flex justify-end">
                                <button className="border-pink-200 border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-pink-300">
                                    Telusuri →
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="border-blue-200 border-2 px-10 py-10 rounded-4xl hover:text-black hover:bg-blue-200">
                            {/* Title */}
                            <div className="font-semibold mb-3 text-2xl">
                                Mengenal Bahan Aktif
                            </div>

                            {/* Description */}
                            <p>
                                Memadukan kandungan skincare tidak boleh asal loh!
                                Ada beberapa bahan aktif skincare yang tidak boleh
                                digunakan secara bersamaan, apa aja ya kira-kira?
                                Yuk cari tahu disini!
                            </p>

                            <div className="flex justify-end">
                                <button className="border-blue-200 border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-blue-300">
                                    Telusuri →
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="border-blue-200 border-2 px-10 py-10 rounded-4xl hover:text-black hover:bg-blue-200">
                            {/* Title */}
                            <div className="font-semibold mb-3 text-2xl">
                                Rekomendasi Skincare
                            </div>

                            {/* Description */}
                            <p>
                                Dapatkan rekomendasi skincare terbaik untuk jenis
                                kulitmu. Mulai dari yang berminyak, kering, sensitif,
                                sampai berjerawat. Nggak perlu repot tebak-tebakan
                                lagi, semua info disajikan dengan jelas, praktis,
                                dan gampang dipahami.
                            </p>

                            <div className="flex justify-end">
                                <button className="border-blue-200 border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-blue-300">
                                    Telusuri →
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="border-pink-200 border-2 px-10 py-10 rounded-4xl hover:text-black hover:bg-pink-200">
                            {/* Title */}
                            <div className="font-semibold mb-3 text-2xl">
                                Rekomendasi Skincare
                            </div>

                            {/* Description */}
                            <p>
                                Dapatkan rekomendasi skincare terbaik untuk jenis
                                kulitmu. Mulai dari yang berminyak, kering, sensitif,
                                sampai berjerawat. Nggak perlu repot tebak-tebakan
                                lagi, semua info disajikan dengan jelas, praktis,
                                dan gampang dipahami.
                            </p>

                            <div className="flex justify-end">
                                <button className="border-pink-200 border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-pink-300">
                                    Telusuri →
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="mt-12">
                <Footer />
            </div>

        </>


    );
}



