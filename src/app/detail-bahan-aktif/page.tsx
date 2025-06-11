import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import {Product} from '@/components/CardProduct';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {

    // Effect List
    const listEfek = [
        {id: 1, name: 'Mencerahkan Kulit', image: '/No1.png'},
        {id: 2, name: 'Memperkuat Skin Barrier', image: '/No2.png'},
        {id: 3, name: 'Mengontrol Minyak Berlebih', image: '/No3.png'},
        {id: 4, name: 'Mencegah Tanda Penuaan', image: '/No4.png'},
        {id: 5, name: 'Mengurangi Peradangan Jerawat', image: '/No5.png'},
    ];

    return (
        <>
            <Navbar />
            <h1>Detail Bahan Aktif</h1>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}
            >
                {/* Card Details */}
                <div className="bg-gradient-to-l from-[#7293D0] to-[#B5CBF0]">
                <div className="bg-gradient-to-r from-[#7293D0] to-[#B5CBF0] text-white px-300 py-5 md:px-5 md:py-10
                                    mr-20 rounded-r-full">
                    
                    <div className="flex mx-4 lg:mx-10 my-10">
                    {/* Left Side */}
                        {/* Ilustrasi */}
                        <div>
                            <img
                                src="/Niacinamide.png"
                                alt="Ilustrasi Bahan Aktif"
                                className="w-90 h-auto -ml-2">
                            </img>
                        </div>

                    {/* Right Side */}
                    <div className="mx-10 lg:mx-6 my-2 flex items-center">
                    <div className="">
                        {/* Title */}
                        <div className="text-4xl font-bold mb-4">
                            Niacinamide
                        </div>

                        {/* Description */}
                        <div className="text-2xl">
                            <p>
                                Niacinamide adalah bentuk turunan dari vitamin B3 (niacin)
                                dan bersifat larut dalam air.
                            </p>
                            <p>
                                Niacinaide bekerja
                                dalam sistem metabolisme tubuh untuk membantu mengontrol
                            </p>
                            <p>
                                peradangan dengan cara menghambat enzim yang terlibat dalam
                                produksi sinyal-sinyal peradangan.
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Manfaat Skincare */}

                    {/* Title */}
                    <div className="text-4xl font-bold text-center mt-12">
                        Manfaat Bahan Aktif
                    </div>

                    {/* Cards */}
                    <div className="my-10 mx-4 lg:mx-25 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {listEfek.map((efekBahan) => {
                                return (
                                    <Link href={`//${efekBahan.id}`}
                                    key={efekBahan.id}
                                    className="flex items-center justify-center text-center hover:text-white bg-[#E6EEFC] hover:bg-[#7092CF] border-[#E6EEFC] border-2 p-5 rounded-2xl"
                                    >
                                        <Image
                                        src={efekBahan.image}
                                            alt={efekBahan.name}
                                            width={40}
                                            height={40}
                                            className="mr-6">
                                        </Image>
                                        <div>{efekBahan.name}</div>
                                    
                                    </Link>
                                );
                            })}

                        </div>
                    </div>
                    

                {/* Rekomendasi Produk */}

                <div>
                    <div className="text-4xl font-bold text-center mt-12">
                        Produk Yang Mengandung Niacinamide
                    </div>

                    

                </div>

            </div>

            <div>
                <product />
            </div>

            {/* Footer */}
            <div className="Footer pt-10">
                <Footer />
            </div>
        </>
    );
}
