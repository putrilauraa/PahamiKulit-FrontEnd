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

                        <div className="border-[#FFD5E9] border-2 px-10 py-10 rounded-2xl hover:text-black hover:bg-[#FFD5E9]">
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
                                <a href="/create-account">
                                <button className="border-[#FFD5E9] border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-[#F38EB1]">
                                    Telusuri →
                                </button>
                                </a>
                                
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="border-[#BDD1F5] border-2 px-10 py-10 rounded-2xl hover:text-black hover:bg-[#BDD1F5]">
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
                                <a href='/mengenal-bahan-aktif'>
                                <button className="border-[#BDD1F5] border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-[#7092CF]">
                                    Telusuri →
                                </button>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="border-[#BDD1F5] border-2 px-10 py-10 rounded-2xl hover:text-black hover:bg-[#BDD1F5]">
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
                                <button className="border-[#BDD1F5] border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-[#7092CF]">
                                    Telusuri →
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="border-[#FFD5E9] border-2 px-10 py-10 rounded-2xl hover:text-black hover:bg-[#FFD5E9]">
                            {/* Title */}
                            <div className="font-semibold mb-3 text-2xl">
                                Produk Skincare Lokal
                            </div>

                            {/* Description */}
                            <p>
                                Dukung kulit sehat sekaligus brand lokal! 
                                Di sini kamu bisa menemukan berbagai rekomendasi 
                                produk skincare buatan Indonesia yang nggak kalah 
                                keren, aman, berkualitas, dan pastinya lebih ramah 
                                di kantong dibandingkan dengan brand skincare luar.
                            </p>

                            <div className="flex justify-end">
                                <button className="border-[#FFD5E9] border-2 px-4 py-1.5 mt-4 rounded-4xl hover:text-white hover:bg-[#F38EB1]">
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



