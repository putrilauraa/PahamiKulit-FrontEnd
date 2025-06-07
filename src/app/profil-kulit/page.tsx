'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

const profilKulit: Record<
    string,
    {
        avatarBg: string;
        avatarImg: string;
        title: string;
        description: string;
        characteristics: string[];
        dos: { title: string; text: string };
        donts: { title: string; text: string };
        ingredients: string[];
    }
> = {
    berminyak: {
        avatarBg: 'bg-[#D6FFDB]',
        avatarImg: '/Men-Oily.png',
        title: 'Kulit Berminyak',
        description:
            'Kulit berminyak tampak halus dan mengilap akibat jenis kulit ini memproduksi minyak berlebih pada kulit. Faktor yang memengaruhi kulit berminyak adalah genetika, perubahan hormon, pubertas, stres, terpapar panas, atau terpapar udara yang terlalu lembap.',
        characteristics: [
            'Terlihat mengkilap terutama di daerah T-zone (dahi, hidung, dan dagu)',
            'Pori-pori besar dan nampak jelas',
            'Rentan terhadap keluhan jerawat atau komedo',
            'Produksi sebum (minyak alami) berlebih',
        ],
        dos: {
            title: 'Perhatikan keterangan produk skincare,',
            text: 'gunakan produk perawatan kulit dengan keterangan non-comedogenic sehingga tidak menyebabkan sumbatan.',
        },
        donts: {
            title: 'Jangan lupa pakai pelembap,',
            text: 'namun hindari produk yang mengandung komponen atau pelembab krim yang berat.',
        },
        ingredients: ['Niacinamide', 'BHA', 'Centella Asiatica'],
    },

    kombinasi: {
        avatarBg: 'bg-[#FFD9DDFF]',
        avatarImg: '/Men-Combi.png',
        title: 'Kulit Kombinasi',
        description:
            'Kulit kombinasi merupakan gabungan antara kulit berminyak dan kering. Jenis kulit kombinasi dipengaruhi oleh perkembangan pubertas dan hormon. Untuk itu, perawatan kulit kombinasi harus mampu mengurangi kadar minyak di bagian T tetapi juga melembabkan pipi.',
        characteristics: [
            'Berminyak di bagian T-zone (dahi, hidung, dagu)',
            'Bagian pipi cenderung kering atau normal',
            'Perubahan kondisi kulit sesuai cuaca',
            'Pori-pori lebih besar di area T-zone',
        ],
        dos: {
            title: 'Sesuaikan perawatan dengan area kulit,',
            text: 'area kering dapat menggunakan pelembab lebih banyak, sementara area berminyak menggunakan produk yang menyerap minyak berlebih.',
        },
        donts: {
            title: 'Jangan pakai produk yang terlalu keras,',
            text: 'hindari pembersih yang terlalu keras yang bisa memperparah ketidakseimbangan kulit.',
        },
        ingredients: ['Hyaluronic Acid', 'Niacinamide', 'AHA'],
    },

    kering: {
        avatarBg: 'bg-[#F1D6FFFF]',
        avatarImg: '/Men-Dry.png',
        title: 'Kulit Kering',
        description:
            'Kulit kering umumnya tampak kasar dan terkadang mengelupas halus akibat rendahnya kadar air pada kulit. Keluhan pada jenis kulit kering pada umumnya adalah kulit tampak kusam. Hal tersebut dapat dipengaruhi oleh perubahan hormon, efek samping obat-obatan, paparan sinar matahari, dan pengaruh cuaca dingin.',
        characteristics: [
            'Memiliki pori-pori kecil yang bahkan tidak terlihat',
            'Tekstur kulit cenderung kasar dan bersisik',
            'Terasa dehidrasi dan mungkin menyebabkan rasa gatal atau iritasi',
            'Kurang elastis dan garis-garis lebih terlihat',
        ],
        dos: {
            title: 'Selalu pakai pelembap,',
            text: 'gunakan pelembap setiap hari pada wajah, leher, dan juga kulit di sekitar mata sebagai antisipasi untuk mencegah timbulnya keriput dini.',
        },
        donts: {
            title: 'Jangan cuci muka dengan air panas,',
            text: 'hindari penggunaan produk pembersih yang terlalu keras serta mencuci muka dengan air yang terlalu panas karena dapat menghilangkan minyak alami kulit.',
        },
        ingredients: ['Hyaluronic Acid', 'Ceramide', 'AHA'],
    },

    normal: {
        avatarBg: 'bg-[#D8ECFFFF]',
        avatarImg: '/Men-Normal.png',
        title: 'Kulit Normal',
        description:
            'Kandungan air dan minyak pada kulit seimbang sehingga kulit tampak halus, kenyal, tidak terlalu kering atau terlalu berminyak. Biasanya jenis kulit normal memiliki keluhan wajah yang minim dan mudah dirawat dibandingkan dengan jenis kulit lainnya.',
        characteristics: [
            'Memiliki pori-pori yang kecil',
            'Tekstur kulit halus',
            'Tidak terasa terlalu kering atau berminyak',
            'Cenderung terbebas dari masalah jerawat',
        ],
        dos: {
            title: 'Tetap jaga keseimbangan kulit,',
            text: 'gunakan produk ringan untuk mempertahankan kondisi kulit yang baik.',
        },
        donts: {
            title: 'Jangan lupa pakai sunscreen,',
            text: 'meskipun kulit normal — sunscreen tetap wajib dipakai setiap hari untuk menghindari kerusakan kulit akibat sinar UV.',
        },
        ingredients: [' Hyaluronic Acid', 'Niacinamide', 'AHA'],
    },
};

export default function ProfilKulit() {
    const [skinType, setSkinType] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Ambil result dari localStorage
        const result = localStorage.getItem('skinQuizResult');
        if (!result) {
            // Kalau belum ada result, redirect ke quiz
            router.push('/tes-jenis-kulit');
        } else {
            // Ubah format result supaya match sama profile (contoh: 'Kulit Berminyak' → 'berminyak')
            let type = '';
            if (result.includes('Berminyak')) type = 'berminyak';
            else if (result.includes('Kombinasi')) type = 'kombinasi';
            else if (result.includes('Kering')) type = 'kering';
            else if (result.includes('Normal')) type = 'normal';

            setSkinType(type);
        }
    }, [router]);

    if (!skinType) {
        // Bisa kasih loading spinner
        return <p className="text-center mt-10">Loading...</p>;
    }

    const profile = profilKulit[skinType];

    if (!profile) {
        return (
            <div className="text-center mt-10 text-xl text-red-500">
                Profil kulit tidak ditemukan.
            </div>
        );
    }

    return (
        <>
            <Navbar />

            <div className={`${montserrat.className} overflow-hidden`}>
                {/* Breadcrumbs */}
                <nav className="mt-8 ml-8 text-sm space-x-2">
                    <a href="/" className="hover:underline text-[#7092CF]">
                        Beranda
                    </a>
                    <span>/</span>
                    <a
                        href="/tes-jenis-kulit"
                        className="hover:underline text-[#7092CF]"
                    >
                        Tes Jenis Kulit
                    </a>
                    <span>/</span>
                    <a
                        href="/profil-kulit"
                        className="font-bold hover:underline text-[#7092CF]"
                    >
                        Profil Kulit
                    </a>
                </nav>

                <div className="bg-[#D5E4FF] text-[#405E93] flex justify-center mx-auto w-20 font-semibold px-4 py-2 rounded-full mt-10 text-lg">
                    Hasil
                </div>

                {/* Header Section */}
                <div className="absolute text-[#405E93] mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD5E9] font-semibold px-6 py-2 rounded-full text-lg">
                    Tes Jenis Kulit
                </div>
                <img
                    src="/Elements-48.png"
                    alt="Element"
                    className="absolute right-62 w-42 h-auto top-38 rotate-25"
                />
                <div className="text-white bg-[#B9CBE8] rounded-2xl mt-9 mx-45 px-10 py-14 text-center">
                    <h1 className="text-4xl font-bold">Profil Kulit</h1>
                    <p className="mt-3 text-lg w-2xl flex mx-auto leading-6">
                        Ini dia hasil tes jenis kulit hanya untuk kamu, beserta
                        tips untuk menjaga jenis kulit yang sesuai dengan
                        kondisi kulitmu
                    </p>
                </div>
                <img
                    src="/Elements-40.png"
                    alt="Element"
                    className="absolute left-62 w-42 h-auto top-90"
                />

                {/* Ellips Background */}
                <div
                    className="h-80 mt-20 relative"
                    style={{
                        background: '#E6EEFC',
                        clipPath: 'ellipse(1000px 200px at center bottom)',
                    }}
                ></div>

                {/* Skin Profile Header */}
                <div className="bg-[#E6EEFC] min-h-screen pb-12">
                    <div className="relative z-20 -top-70">
                        <div
                            className="mx-45 bg-white border border-black flex items-center rounded-xl md:rounded-2xl p-6 mb-4 md:mb-6"
                            style={{
                                boxShadow: '0px 4px 0px rgba(112, 146, 207, 1)',
                            }}
                        >
                            <div className="">
                                {/* Avatar Background Color */}
                                <div className={`${profile.avatarBg} aspect-square w-55 rounded-xl`}>
                                    {/* Skin Type Avatar */}
                                    <img
                                        src={profile.avatarImg}
                                        alt={`Avatar ${profile.title}`}
                                        className="absolute w-55 h-auto aspect-square rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="md:w-lg lg:w-4xl mx-10">
                                <p className="font-semibold text-lg">
                                    Username
                                </p>
                                {/* Skin Type Title */}
                                <h2 className="text-3xl font-bold mt-3">
                                    {profile.title}
                                </h2>
                                {/* Skin Type Description */}
                                <p className="text-[#333] text-base mt-3">
                                    {profile.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skin Type Characteristics */}
                    <div className="absolute mx-45 -mt-60">
                        <h3 className="font-bold text-3xl mb-6">Ciri-ciri</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                            {profile.characteristics.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center bg-white border-2 border-[#7092CF] rounded-lg px-6 py-8 text-center"
                                    style={{
                                        boxShadow:
                                            '0px 4px 0px rgba(185, 203, 232, 1)',
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Do's & Dont's */}
                    <div className="mx-45 mt-10">
                        <h3 className="font-bold text-3xl mb-6">
                            Do's & Dont's
                        </h3>
                        <div
                            className="bg-[#FFF6ED] border-2 border-[#7092CF] rounded-xl px-10 py-10"
                            style={{
                                boxShadow: '0px 4px 0px rgba(185, 203, 232, 1)',
                            }}
                        >
                            <div className="flex items-start gap-4 w-7xl text-lg">
                                <div className="bg-green-300 opacity-70 rounded-full p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FFF6ED"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-check-icon lucide-check"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                {/* Do's */}
                                <p>
                                    <strong>{profile.dos.title}</strong>{' '}
                                    {profile.dos.text}
                                </p>
                            </div>
                            <div className="flex items-start gap-4 w-7xl mt-6 text-lg">
                                <div className="bg-red-300 opacity-70 rounded-full p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#FFF6ED"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x-icon lucide-x"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </div>
                                {/* Dont's */}
                                <p>
                                    <strong>{profile.donts.title}</strong>{' '}
                                    {profile.donts.text}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ingredients Recommendation */}
                    <div className="mx-45 mt-15">
                        <h3 className="font-bold text-3xl mb-6">
                            Rekomendasi Kandungan
                        </h3>
                        <div
                            className="flex bg-white border-2 border-[#7092CF] rounded-xl px-10 py-10 justify-between"
                            style={{
                                boxShadow: '0px 4px 0px rgba(185, 203, 232, 1)',
                            }}
                        >
                            <p className="text-lg w-sm">
                                Berikut ini bahan-bahan yang cocok untuk jenis
                                kulitmu
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {profile.ingredients.map(
                                    (item, idx) => (
                                        <button
                                            key={idx}
                                            className="bg-[#7092CF] w-50 h-20 px-5 py-2 rounded-lg font-medium text-white hover:bg-[#405E93] transition-all"
                                            style={{
                                                boxShadow:
                                                    '0px 4px 0px rgba(64, 94, 147, 1)',
                                            }}
                                        >
                                            {item}
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mx-45 mt-15">
                        <strong>Disclaimer:</strong> Hasil tes ini ditujukan
                        sebagai panduan awal untuk mengenali jenis kulitmu
                        secara umum. Tes ini bukan diagnosis medis dan tidak
                        dapat menggantikan pemeriksaan langsung oleh dokter
                        kulit atau profesional di bidang kecantikan.
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
