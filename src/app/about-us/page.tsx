import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div className={`${montserrat.className}`}>
                <div className="pt-20">
                    <div className="">
                        {/* Title */}
                        <div className="text-[#405E93] flex items-center justify-center font-extrabold text-5xl">
                            Tentang Kami
                        </div>

                        {/* Description */}
                        <p className="w-4xl justify-center mx-auto text-center mt-8 text-xl">
                            <strong>PahamiKulit</strong> adalah website edukasi
                            skincare untuk membantu remaja yang belum familiar
                            dengan skincare dalam memahami dasar-dasar perawatan
                            kulit.
                        </p>
                        <div className="py-10 mt-8 ml-9">
                            <p className="text-3xl font-bold">
                                <strong className="text-[#7092CF]">| </strong>
                                Membantu remaja dalam perjalanan perawatan
                                kulitnya
                            </p>

                            <p className="ml-5 w-4xl mt-3 text-lg">
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
                    </div>

                    {/* Visi */}
                    <div className="mt-6">
                        <div
                            className={`${montserrat.className} py-10`}
                            style={{
                                background: '#E6EEFC',
                            }}
                        >
                            <div className="absolute left-0 text-white font-bold text-4xl bg-[#7293D0] flex px-30 py-15 top-138 rounded-r-full sm:4px md:6px lg:8px">
                                Visi
                            </div>
                            <div className="flex items-center ml-100">
                                {/* Desc */}
                                <p className="w-3xl text-lg">
                                    Menjadi tempat bagi pengguna skincare pemula
                                    untuk mencari edukasi mengenai skincare yang
                                    terpercaya, serta dapat membantu semua orang
                                    memahami dan merawat kulitnya mulai dari
                                    langkah yang paling dasar.
                                </p>
                                {/* Illustration */}
                                <div className="absolute right-10 -mt-10">
                                    <img
                                        className="w-85 h-auto"
                                        src="/Blue-3.png"
                                        alt="Mascot"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Misi */}
                <div>
                    <div className="flex items-center py-14">
                        {/* Title */}
                        <div className="left-0 text-white font-bold text-4xl bg-[#7293D0] flex px-30 py-15 rounded-r-full sm:4px md:6px lg:8px">
                            Misi
                        </div>

                        {/* Description */}
                        <div className="flex-item-start text-left">
                            {/* Misi 01 */}
                            <div className="flex items-center">
                                {/* Illustration */}
                                <div>
                                    <img
                                        className="w-15 h-auto ml-22 my-4 mr-5"
                                        src="Misi-01.png"
                                        alt="Mascot"
                                    ></img>
                                </div>
                                {/* Text */}
                                <div className="text-xl">
                                    Menyediakan informasi skincare yang mudah
                                    dipahami, terutama bagi remaja
                                </div>
                            </div>

                            {/* Misi 02 */}
                            <div className="flex items-center">
                                {/* Illustration */}
                                <div>
                                    <img
                                        className="w-15 h-auto ml-22 my-4 mr-5"
                                        src="Misi-01.png"
                                        alt="Mascot"
                                    ></img>
                                </div>
                                {/* Text */}
                                <div className="text-xl">
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
                                        className="w-15 h-auto ml-22 my-4 mr-5"
                                        src="Misi-01.png"
                                        alt="Mascot"
                                    ></img>
                                </div>
                                {/* Text */}
                                <div className="text-xl">
                                    Membantu membangun kepercayaan diri melalui
                                    perawatan kulit yang tepat
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Introduction Section */}
                <div
                    className="bg-blue-300 flex items-center justify-center p-15 mx-auto"
                    style={{
                        background: '#E6EEFC',
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
