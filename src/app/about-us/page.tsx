import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div className={`${montserrat.className}`}>
                <div className="">
                    <div
                        className="pt-22 pb-30"
                        style={{
                            background:
                                'linear-gradient(to bottom, #7092CF, #B9CEF2)',
                            clipPath: 'ellipse(1300px 340px at center top)',
                        }}
                    >
                        <div className="flex items-center justify-center font-extrabold text-white text-6xl pb-7">
                            Tentang Kami
                        </div>
                        <p className="w-4xl justify-center mx-auto text-center text-xl font-medium text-white">
                            <strong>PahamiKulit</strong> adalah website edukasi
                            skincare untuk membantu remaja yang belum familiar
                            dengan skincare dalam memahami dasar-dasar perawatan
                            kulit.
                        </p>
                    </div>

                    <div className="mx-75">
                        <div className="bg-[#FFF6ED] py-10 px-24 mt-25 rounded-2xl shadow-md">
                            <div className="absolute font-medium left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-12">
                                <p className="bg-[#D64F7E] rounded-full text-white justify-center mx-auto text-center px-12 py-4 shadow font-semibold">
                                    Membantu remaja dalam perjalanan perawatan
                                    kulitnya
                                </p>
                            </div>
                            <p className="text-center text-lg">
                                Kami hadir dengan memberikan fokus pada
                                pengemasan informasi secara{' '}
                                <strong className="text-[#D64F7E]">
                                    sederhana
                                </strong>
                                ,{' '}
                                <strong className="text-[#D64F7E]">
                                    praktis
                                </strong>
                                , dan{' '}
                                <strong className="text-[#D64F7E]">
                                    interaktif
                                </strong>{' '}
                                agar dapat dengan mudah dimengerti bagi remaja
                                sebagai pengguna pemula skincare!
                            </p>
                        </div>

                        <div className="bg-[#7092CF] mt-14 md:h-10 py-6 w-25 md:text-2xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                            Visi
                        </div>
                        <div className="bg-[#E6EEFC] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl py-4 px-10">
                            <div className="flex items-center">
                                <img
                                    className="w-50 h-auto"
                                    src="/Blue-3.png"
                                    alt="Mascot"
                                ></img>
                                <p className="pl-6 text-lg">
                                    Menjadi tempat bagi pengguna skincare pemula
                                    untuk mencari edukasi mengenai skincare yang
                                    terpercaya, serta dapat membantu semua orang
                                    memahami dan merawat kulitnya mulai dari
                                    langkah yang paling dasar.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#7092CF] mt-10 md:h-10 py-6 w-25 md:text-2xl flex items-center text-center justify-center font-semibold text-white rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl">
                            Misi
                        </div>
                        <div className="bg-[#E6EEFC] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl p-10">
                            <div className="flex-item-start text-left">
                                {/* Misi 01 */}
                                <div className="flex items-center">
                                    {/* Illustration */}
                                    <div>
                                        <img
                                            className="w-13 h-auto mr-5"
                                            src="Misi-01.png"
                                            alt="Mascot"
                                        ></img>
                                    </div>
                                    {/* Text */}
                                    <div className="text-lg">
                                        Menyediakan informasi skincare yang
                                        mudah dipahami, terutama bagi remaja
                                    </div>
                                </div>

                                {/* Misi 02 */}
                                <div className="flex items-center">
                                    {/* Illustration */}
                                    <div>
                                        <img
                                            className="w-13 h-auto my-6 mr-5"
                                            src="Misi-01.png"
                                            alt="Mascot"
                                        ></img>
                                    </div>
                                    {/* Text */}
                                    <div className="text-lg">
                                        Mengedukasi pengguna tentang pentingnya
                                        mengenali jenis kulit dan memilih produk
                                        yang tepat
                                    </div>
                                </div>

                                {/* Misi 03 */}
                                <div className="flex items-center">
                                    {/* Illustration */}
                                    <div>
                                        <img
                                            className="w-13 h-auto mr-5"
                                            src="Misi-01.png"
                                            alt="Mascot"
                                        ></img>
                                    </div>
                                    {/* Text */}
                                    <div className="text-lg">
                                        Membantu membangun kepercayaan diri
                                        melalui perawatan kulit yang tepat
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Introduction Section */}
                <div
                    className="flex items-center justify-center p-15 mt-25 mx-auto"
                    style={{
                        background: '#D5E4FF',
                    }}
                >
                    {/* Team Introduction */}
                    <div className="text-left">
                        {/* Title */}
                        <div className="text-3xl font-semibold">
                            Our Development Team
                        </div>

                        {/* Description */}
                        <div className="mt-4 w-3xl pr-10">
                            Tim pengembang kami terdiri dari dua orang dengan
                            preferensi dan presepsi yang berbeda, namun dengan
                            kombinasi hal tersebutlah kami dapat mengembangkan
                            PahamiKulit dengan pertimbangan yang lebih luas.
                        </div>
                    </div>

                    {/* Card Poet */}
                    <div className="">
                        {/* Illustration */}
                        <div>
                            <img
                                className="w-50 h-auto"
                                src="/Profile-Putri.png"
                                alt="Mascot"
                            ></img>
                        </div>
                        {/* Bio */}
                        <div
                            className="text-white w-full h-auto rounded-b-xl rounded-t-none text-left pl-3"
                            style={{ background: '#F38EB1' }}
                        >
                            <div className="pt-2 font-bold">Putri</div>
                            <div className="pb-2">
                                <p>Binus University</p>
                            </div>
                        </div>
                    </div>

                    {/* Card Aten */}
                    <div className="px-4">
                        {/* Illustration */}
                        <div>
                            <img
                                className="w-50 h-auto"
                                src="/Profile-Fatin.png"
                                alt="Mascot"
                            ></img>
                        </div>
                        {/* Bio */}
                        <div
                            className="text-white w-full h-auto rounded-b-xl rounded-t-none text-left pl-3"
                            style={{ background: '#7293D0' }}
                        >
                            <div className="pt-2 font-bold">Fatin</div>
                            <div className="pb-2">
                                <p>Binus University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Footer */}
            <div className="Footer">
                <Footer />
            </div>
        </>
    );
}
