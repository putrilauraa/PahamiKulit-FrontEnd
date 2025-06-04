import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {
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
            <h1>Mengenal Bahan Aktif Page</h1>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}
            >
                {/* Card 1 */}
                <div className="mx-4 lg:mx-30 my-10">
                    {/* Border */}
                    <div className="border-2 rounded-2xl flex items-center justify-center py-5 px-5">
                        {/* Ilustrasi */}
                        <div>
                            <img
                                className="w-120 h-auto"
                                src="mba-page.png"
                                alt="Mascot"
                            ></img>
                        </div>
                        <div className="ml-10">
                            {/* Title */}
                            <div className="font-semibold text-4xl">
                                Yuk Mengenal Bahan Aktif Skincare!
                            </div>

                            {/* Description */}
                            <div>
                                <p className="py-5">
                                    Bahan aktif skincare adalah kandungan utama
                                    dalam produk skincare yang berfungsi
                                    langsung untuk memberikan manfaat spesifik
                                    pada kulit, seperti mengatasi masalah atau
                                    meningkatkan kondisi kulit.
                                </p>
                                Biasanya, bahan aktif skincare digunakan untuk
                                menjadi fokus utama dari produk dan bekerja
                                secara efektif untuk mencapai hasil yang
                                diinginkan.
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center justify-center text-center">
                    <div className="px-30 py-10 rounded-2xl w-5xl mx-30 bg-[#7293D0]">
                        <div className="font-bold text-3xl text-white">
                            Cari Tahu Kombinasi Bahan Aktif yang Aman
                        </div>
                        <div className="font-medium text-1xl my-2 text-white">
                            Dengan Cara Mix & Match Bahan Aktif
                        </div>

                        {/* Button */}
                        <a href="/" className="">
                            <button className="border-2 mt-5 py-2 px-10 rounded-3xl bg-white">
                                Coba
                            </button>
                        </a>
                    </div>
                </div>

                {/* Bahan Aktif dinamis */}
                <div className="my-10 mx-4 lg:mx-25">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {listBahanAktif.map((bahanAktif) => {
                            return (
                                <Link
                                    href={`/bahan-aktif/${bahanAktif.id}`}
                                    key={bahanAktif.id}
                                    className="items-center justify-center text-center hover:text-white hover:bg-[#7092CF] border-[#E6EEFC] border-2 p-5 rounded-2xl"
                                >
                                    <div>{bahanAktif.name}</div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="Footer pt-10">
                <Footer />
            </div>
        </>
    );
}
