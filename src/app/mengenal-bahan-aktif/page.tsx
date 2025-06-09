'use client';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function MengenalBahanAktif() {
    const router = useRouter();

    // sample data
    const listBahanAktif = [
        { id: 1, name: 'Niacinamide' },
        { id: 2, name: 'Hyaluronic Acid' },
        { id: 3, name: 'Ceramide' },
        { id: 4, name: 'Bakuchiol' },
        { id: 5, name: 'AHA' },
        { id: 6, name: 'BHA' },
        { id: 7, name: 'PHA' },
        { id: 8, name: 'Alpha Arbutin' },
        { id: 9, name: 'Panthenol' },
        { id: 10, name: 'Squalane' },
        { id: 11, name: 'Allantoin' },
        { id: 12, name: 'Centella Asiatica' },
        { id: 13, name: 'Tranexamic Acid' },
        { id: 14, name: 'Peptide' },
        { id: 15, name: 'Vitamin C' },
        { id: 16, name: 'Propolis' },
        { id: 17, name: 'Glycerin' },
        { id: 18, name: 'Aloe Vera' },
        { id: 19, name: 'Mugwort' },
        { id: 20, name: 'Oat' },
    ];

    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} bg-[#E6EEFC] pt-10 pb-15 min-h-screen`}
            >
                {/* Card 1 */}
                <div className="mx-4 lg:mx-45 my-10">
                    {/* Border */}
                    <div
                        className="bg-white border-3 border-[#7092CF] rounded-2xl flex items-center justify-center px-10 py-4"
                        style={{
                            boxShadow: '4px 4px 0px rgba(185, 203, 232)',
                        }}
                    >
                        {/* Ilustrasi */}
                        <div>
                            <img
                                className="w-75 h-auto"
                                src="mba-page.png"
                                alt="Mascot"
                            ></img>
                        </div>
                        <div className="ml-5">
                            {/* Title */}
                            <h1 className="font-bold text-4xl">
                                Yuk Mengenal Bahan Aktif Skincare!
                            </h1>

                            {/* Description */}
                            <p className="pt-3 pb-5 text-sm">
                                Bahan aktif skincare adalah kandungan utama
                                dalam produk skincare yang berfungsi langsung
                                untuk memberikan manfaat spesifik pada kulit.
                                Biasanya, bahan aktif skincare digunakan untuk
                                menjadi fokus utama dari produk dan bekerja
                                secara efektif untuk mencapai hasil yang
                                diinginkan.
                            </p>
                            <p className='font-bold text-[#D64F7E]'>Klik bahan aktif di bawah ini yang ingin kamu pelajari</p>
                        </div>
                    </div>
                </div>

                {/* Bahan Aktif dinamis */}
                <div className="mx-4 lg:mx-45 mt-15 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {listBahanAktif.map((bahanAktif) => {
                            return (
                                <Link
                                    href={`/bahan-aktif/${bahanAktif.id}`}
                                    key={bahanAktif.id}
                                    className="items-center bg-white justify-center text-center hover:text-white hover:bg-[#7092CF] border-[#B9CBE8] hover:border-[#7092CF] border-2 p-5 rounded-2xl"
                                >
                                    <div>{bahanAktif.name}</div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Card 2 */}
                <div className="mx-4 lg:mx-45 my-5">
                    {/* Border */}
                    <div
                        className="bg-[#FFF6ED] rounded-2xl flex items-center px-10 py-4"
                        style={{
                            boxShadow: '6px 6px 0px rgba(255, 231, 213, 1)',
                        }}
                    >
                        {/* Ilustrasi */}
                        <img
                            className="w-60 h-auto"
                            src="/Blue-10.png"
                            alt="Mascot"
                        ></img>

                        <div className="ml-10">
                            {/* Title */}
                            <h1 className="font-bold text-4xl">
                                Mix & Match Bahan Aktif
                            </h1>

                            {/* Description */}
                            <p className="font-medium my-2 md:my-4 text-xs md:text-sm lg:text-lg ">
                                Eits! jangan asal campur skincare, pahami dulu
                                yuk tentang kandungan aktif apa saja yang boleh
                                digunakan secara bersamaan
                            </p>
                            <button
                                onClick={() => router.push('/mix-and-match')}
                                className="bg-[#7092CF] text-white hover:bg-[#405E93] text-xs md:text-sm lg:text-base font-semibold rounded-4xl px-6 py-3 mt-2 transition"
                                style={{
                                    boxShadow:
                                        '0px 4px 0px rgba(64, 94, 147, 1)',
                                }}
                            >
                                Coba Sekarang →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
