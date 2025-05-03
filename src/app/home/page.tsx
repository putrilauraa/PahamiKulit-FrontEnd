import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className} overflow-hidden`}
                style={{
                    background: '#D5E4FF',
                    color: '#405E93',
                }}
            >
                <div className="justify-between text-sm py-6 px-4 sm:px-6 lg:px-8 z-0">
                    [navigation]
                </div>
                <header
                    className="relative h-100 py-22 md:py-14 px-4 sm:px-6 lg:px-8 mx-auto"
                    style={{
                        background: '#E6EEFC',
                        clipPath: 'ellipse(1400px 400px at center bottom)',
                    }}
                >
                    <div className="absolute right-52 top-14 hidden md:flex flex-col items-end">
                        <img
                            src="/Elements-15.png"
                            alt="Element"
                            className="w-70 h-auto"
                        />
                    </div>
                    <div className="absolute right-88 top-19 hidden md:flex flex-col items-end">
                        <img
                            src="/Blue-1.png"
                            alt="Mascot"
                            className="w-90 h-auto mt-4"
                        />
                    </div>
                    <div className="max-w-2xl mx-14 md:mx-0 md:mt-20 ml-16 md:ml-38">
                        <div className="font-extrabold text-5xl leading-14">
                            Selamat Datang di Dunia Basic Skincare!
                        </div>
                        <div className="text-md py-4">
                            Di sini, kamu bisa menemukan langkah-langkah
                            perawatan kulit yang simpel namun efektif. Kamu juga
                            akan belajar mengenali kebutuhan kulitmu dan memilih
                            produk yang tepat untuk bisa tampil lebih sehat dan
                            percaya diri setiap harinya!
                        </div>
                    </div>
                </header>

                <div
                    className="md:pt-18 px-5 md:px-44"
                    style={{ background: '#E6EEFC' }}
                >
                    <div className="bg-white rounded-3xl shadow-xl h-140 mx-14 md:mx-0 md:h-78">
                        <div className="absolute ml-40 md:ml-14 mt-10">
                            <img
                                src="/Elements-02.png"
                                alt="Element"
                                className="w-45 md:w-44 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="absolute ml-45 md:ml-26 mt-12 md:mt-14">
                            <img
                                src="/Pink-10.png"
                                alt="Mascot"
                                className="w-64 md:w-62 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="max-w-4xl md:mt-0 mx-14 md:ml-94">
                            <div className="pt-75 md:pt-19 text-3xl font-extrabold">
                                {' '}
                                Kenapa Harus Pakai Skincare?
                            </div>
                            <div className="py-5">
                                Tujuan penggunaan skincare secara rutin bukan
                                hanya soal penampilan saja lho, tetapi juga
                                menjaga kesehatan kulit. Skincare dapat membantu
                                mengatasi berbagai masalah kulit seperti
                                jerawat, kusam, bahkan penuaan dini, sekaligus
                                melindungi kulit dari paparan polusi serta sinar
                                matahari. Kulit yang dirawat dengan baik akan
                                tampak lebih bersih, segar, dan bercahaya.
                            </div>
                        </div>
                    </div>

                    <div className=" font-extrabold text-center">
                        <p className="text-2xl md:text-4xl mt-22">
                            Hal Penting yang Perlu Diperhatikan
                        </p>
                        <p className="text-xl md:text-3xl md:mt-3">
                            Ketika Memilih Skincare
                        </p>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 py-12 mx-14 md:mx-0">
                        <img
                            src="/Elements-41.png"
                            alt="Element"
                            className="absolute inset-0 w-135 h-auto object-cover z-0 -scale-x-100 -ml-68 -mt-48"
                        />
                        <div className="bg-[#FFF6ED] border-3 border-white p-4 flex items-center space-x-4 rounded-3xl h-47 md:h-auto z-30">
                            <img
                                src="/Jenis-Kulit.png"
                                alt="Jenis Kulit"
                                className="w-40 md:w-54 h-auto"
                            />
                            <div className="mr-4">
                                <h3 className="font-extrabold mb-3 text-lg md:text-2xl">
                                    Kenali Terlebih Dahulu Jenis Kulitmu
                                </h3>
                                <p className="text-sm md:text-md">
                                    Mengetahui jenis kulitmu membantu memilih
                                    produk yang tepat dan merawat kulit dengan
                                    lebih efektif.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FFF6ED] border-3 border-white p-4 flex items-center space-x-4 rounded-3xl h-47 md:h-auto">
                            <img
                                src="/Kandungan-Edited.png"
                                alt="Kandungan Skincare"
                                className="w-40 md:w-54 h-auto"
                            />
                            <div className="mr-4">
                                <h3 className="font-extrabold mb-3 text-lg md:text-2xl">
                                    Cermati Bahan dalam Produk Skincare
                                </h3>
                                <p className="text-sm md:text-md">
                                    Perhatikan kandungan produk agar sesuai
                                    dengan kebutuhan dan aman untuk kulitmu.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FFF6ED] border-3 border-white p-4 flex items-center space-x-4 rounded-3xl h-47 md:h-auto">
                            <img
                                src="/Masalah-Kulit.png"
                                alt="Masalah Kulit"
                                className="w-40 md:w-54 h-auto"
                            />
                            <div className="mr-4">
                                <h3 className="font-extrabold mb-3 text-lg md:text-2xl">
                                    Sesuaikan dengan Masalah Kulitmu
                                </h3>
                                <p className="text-sm md:text-md">
                                    Pilih produk yang diformulasikan khusus
                                    untuk mengatasi masalah kulit yang kamu
                                    alami.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FFF6ED] border-3 border-white p-4 flex items-center space-x-4 rounded-3xl h-47 md:h-auto">
                            <img
                                src="/Nomor-BPOM.png"
                                alt="Nomor BPOMt"
                                className="w-40 md:w-54 h-auto"
                            />
                            <div className="mr-4">
                                <h3 className="font-extrabold mb-3 text-lg md:text-2xl">
                                    Cek Nomor BPOM
                                </h3>
                                <p className="text-sm md:text-md">
                                    Pastikan produk terdaftar di BPOM untuk
                                    menjamin keamanan dan legalitasnya.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl h-140 mx-14 md:mx-0 md:h-78 my-12">
                        <div className="absolute right-48 py-6 items-end">
                            <img
                                src="/Elements-03.png"
                                alt="Element"
                                className="w-45 md:w-50 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="absolute right-66 py-16 items-end">
                            <img
                                src="/Blue-16.png"
                                alt="Mascot"
                                className="w-64 md:w-62 h-auto -scale-x-100"
                            />
                        </div>
                        <div className="max-w-4xl md:mt-0 mx-14 md:ml-17">
                            <div className="pt-75 md:pt-14 text-3xl font-extrabold">
                                {' '}
                                Apa itu Basic Skincare?
                            </div>
                            <div className="py-6">
                                Basic skincare adalah rutinitas perawatan kulit
                                dasar yang terdiri dari langkah-langkah simpel
                                namun penting, seperti{' '}
                                <span className="font-bold">membersihkan</span>,
                                <span className="font-bold"> melembabkan</span>,
                                dan{' '}
                                <span className="font-bold">melindungi</span>{' '}
                                kulit dari sinar matahari.
                                <br />
                                <br />
                                Tujuan dari basic skincare sendiri adalah untuk
                                menjaga kebersihan, kelembapan, dan kesehatan
                                kulit sehari-hari. Basic skincare sangat cocok
                                untuk pemula karena dapat membantu membentuk
                                fondasi yang kuat sebelum mencoba perawatan
                                kulit yang lebih kompleks.
                            </div>
                        </div>
                    </div>
                    <div className=" font-extrabold text-center">
                        <p className="text-2xl md:text-4xl mt-24 mb-12">
                            Bagaimana Urutan Basic Skincare?
                        </p>
                        <img
                            src="/Elements-43.png"
                            alt="Element"
                            className="absolute w-80 h-auto object-cover z-0 -ml-70 -mt-40"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-6 py-6 px-4 rounded-md">
                        <div className="flex flex-col items-center mr-25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-14"
                            >
                                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                            </svg>

                            <p className="font-extrabold text-xl">AM</p>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-52 h-52 mr-4 rounded-full bg-[#FFEDF3] border-4 border-white flex items-center justify-center">
                                    <img
                                        src="/Face-Wash.png"
                                        alt="Face Wash"
                                        className="w-40 h-auto object-contain"
                                    />
                                </div>
                                <p className="font-extrabold mt-4">Face Wash</p>
                            </div>
                            <div className="text-5xl mx-10 text-[#B9CBE8]">
                                →
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-52 h-52 mr-4 rounded-full bg-[#FFEDF3] border-4 border-white flex items-center justify-center">
                                    <img
                                        src="/Moisturizer.png"
                                        alt="Moisturizer"
                                        className="w-40 h-auto object-contain"
                                    />
                                </div>
                                <p className="font-extrabold mt-4">
                                    Moisturizer
                                </p>
                            </div>
                            <div className="text-5xl mx-10 text-[#B9CBE8]">
                                →
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-52 h-52 mr-4 rounded-full bg-[#FFEDF3] border-4 border-white flex items-center justify-center">
                                <img
                                    src="/Sunscreen.png"
                                    alt="SPF"
                                    className="w-37 h-auto object-contain"
                                />
                            </div>
                            <p className="font-extrabold mt-4">SPF</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 py-6 px-4 rounded-md">
                        <div className="flex flex-col items-center mr-25">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-11"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <p className="font-extrabold text-xl">PM</p>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-52 h-52 mr-4 rounded-full bg-[#FFEDF3] border-4 border-white flex items-center justify-center">
                                    <img
                                        src="/First-Cleanser.png"
                                        alt="First Cleanser"
                                        className="w-40 h-auto object-contain"
                                    />
                                </div>
                                <p className="font-extrabold mt-4">
                                    First Cleanser
                                </p>
                            </div>
                            <div className="text-5xl mx-10 text-[#B9CBE8]">
                                →
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div className="w-52 h-52 mr-4 rounded-full bg-[#FFEDF3] border-4 border-white flex items-center justify-center">
                                    <img
                                        src="/Face-Wash.png"
                                        alt="Face Wash"
                                        className="w-40 h-auto object-contain"
                                    />
                                </div>
                                <p className="font-extrabold mt-4">Face Wash</p>
                            </div>
                            <div className="text-5xl mx-10 text-[#B9CBE8]">
                                →
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-52 h-52 mr-4 rounded-full bg-[#FFEDF3] border-4 border-white flex items-center justify-center">
                                <img
                                    src="/Moisturizer.png"
                                    alt="Moisturizer"
                                    className="w-37 h-auto object-contain"
                                />
                            </div>
                            <p className="font-extrabold mt-4">Moisturizer</p>
                        </div>
                    </div>
                </div>

                <div className="relative pt-55 bg-[#E6EEFC]">
                    <div
                        className="relative h-50"
                        style={{
                            background: '#FFD5E9',
                            clipPath: 'ellipse(1000px 200px at center bottom)',
                        }}
                    ></div>
                    <img
                        src="/Elements-47-2.png"
                        alt="Element"
                        className="absolute w-45 h-auto object-cover z-0 right-0 top-5"
                    />
                    <img
                        src="/Revised.png"
                        alt="Mascot"
                        className="absolute w-77 h-auto object-cover left-35 top-35 -scale-x-100"
                    />
                    <div className="absolute bg-[#F38EB1] rounded-4xl top-98 left-1/2 transform -translate-x-1/2">
                        <p className="text-white text-extrabold text-2xl px-6 py-3">
                            Quiz
                        </p>
                    </div>
                    <div className="bg-[#FFF6ED] h-88">
                        <p className="text-black text-2xl font-extrabold text-center pt-18 pb-10">
                            Apakah kamu tahu fungsi utama moisturizer?
                        </p>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-4 px-44">
                            <div className="bg-white border-2 border-gray-100 hover:border-[#F38EB1] text-black p-5 items-center text-center rounded-xl">
                                <p className="font-bold text-sm md:text-lg">
                                    Membersihkan pori-pori
                                </p>
                            </div>
                            <div className="bg-white border-2 border-gray-100 hover:border-[#F38EB1] text-black p-5 items-center text-center rounded-xl">
                                <p className="font-bold text-sm md:text-lg">
                                    Mengurangi minyak berlebih
                                </p>
                            </div>
                            <div className="bg-white border-2 border-gray-100 hover:border-[#F38EB1] text-black p-5 items-center text-center rounded-xl">
                                <p className="font-bold text-sm md:text-lg">
                                    Melindungi kulit dari sinar UV
                                </p>
                            </div>
                            <div className="bg-white border-2 border-gray-100 hover:border-[#F38EB1] text-black p-5 items-center text-center rounded-xl">
                                <p className="font-bold text-sm md:text-lg">
                                    Menjaga kelembaban kulit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <Footer />
            </div>
        </>
    );
}
