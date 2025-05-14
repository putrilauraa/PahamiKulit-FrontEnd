import Navbar from "@/components/Navbar"
import { Footer } from '@/components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });


export default function AboutUs() {
    return (
        <>
        <Navbar/>
            <h1>AboutUs Page</h1>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}>

            
<div className="py-5"
style={{
        color:'#405E93'
                    }}>
{/* grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2 py-14 px-32 h-1/5 */}

            {/* About Us */}
                <div className="">
                {/* Title */}
                    <div className="flex items-center justify-center font-extrabold text-5xl"
                    >
                        About Us
                    </div>
                
                {/* Description */}
                    <div className="py-5 px-32 text-center">
                        <p className="py-3">
                        BasicDulu adalah website edukasi skincare 
                        untuk membantu masyarakat yang masih awam dengan 
                        skincare dalam memahami dasar-dasar perawatan kulit.
                        </p>

                        <p className="py-3">
                        Kami hadir dengan memfokuskan pengemasan informasi secara 
                        simpel, praktis, dan mudah dipahami agar dapat dengan mudah 
                        dimengerti bagi pemula.
                        </p>
                    </div>
                </div>

            {/* Visi */}
            <div className={`${montserrat.className} text-main-black`}
            style={{
                background: '#E6EEFC'
            }}>
                <div className="flex items-center justify-center">
                    {/* Illustration */}
                    <div className="flex items-center ml-10">
                        <img
                            className="w-125 h-auto"
                            src="/Blue-2.png"
                            alt="Mascot">
                        </img>

                    </div>

                    {/* Desc */}
                    <p className="px-10">
                        Menjadi tempat bagi pengguna skincare pemula untuk mencari 
                        edukasi mengenai skincare yang terpercaya, serta dapat membantu 
                        semua orang memahami dan merawat kulitnya mulai dari langkah paling dasar. 
                    </p>

                    <div className="">
                    {/* Title */}
                    <div className="text-white flex items-center justify-center px-30 py-20 rounded-l-full sm:4px md:6px lg:8px"
                        style={{background:'#7293D0'}}>
                        <div className="text-white font-bold text-4xl">
                            Visi
                        </div>
                    </div>

                    </div>
                </div>

            </div>

            </div>

            {/* Misi */}
            <div>
                <div className="flex items-center">
                    
                    {/* Title */}
                    <div className="flex items-center justify-center h-40 rounded-r-full px-30 py-20 text-2xl font-semibold text-white"
                        style={{
                        background: '#7293D0'
                    }}>
                        Misi
                    </div>

                    {/* Description */}
                    <div className="flex-item-start text-left">
                    {/* Misi 01 */}
                        <div className="flex items-center">
                        {/* Illustration */}
                            <div>
                                <img
                                className="w-20 h-auto mx-20 my-5"
                                src="Misi-01.png"
                                alt="Mascot">
                                </img>
                            </div>
                            {/* Text */}
                            <div className="text-2xl">
                            Menyediakan informasi skincare yang
                            mudah dipahami, terutama bagi pemula.
                            </div>
                        </div>

                    {/* Misi 02 */}
                    <div className="flex items-center">
                        {/* Illustration */}
                            <div>
                                <img
                                className="w-20 h-auto mx-20 my-5"
                                src="Misi-01.png"
                                alt="Mascot">
                                </img>
                            </div>
                            {/* Text */}
                            <div className="text-2xl">
                            Mengedukasi pengguna tentang pentingnya mengenali
                            jenis kulit dan memilih produk yang tepat.
                            </div>
                        </div>

                    {/* Misi 03 */}
                    <div className="flex items-center">
                        {/* Illustration */}
                            <div>
                                <img
                                className="w-20 h-auto mx-20 my-5"
                                src="Misi-01.png"
                                alt="Mascot">
                                </img>
                            </div>
                            {/* Text */}
                            <div className="text-2xl">
                            Membantu membangun kepercayaan diri
                            melalui perawatan kulit yang tepat.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="bg-blue-300 flex text-center justify-end"
            style={{
                background: '#E6EEFC'
            }}>

                {/* Team Introduction */}
                    <div className="px-30 py-20 text-left">
                    {/* Title */}
                    <div className="text-3xl font-semibold">
                        Our Development Team
                    </div>

                    {/* Description */}
                    <div className="">
                        Tim pengembang kami terdiri dari dua orang dengan 
                        preferensi dan presepsi berbeda, namun dengan kombinasi 
                        hal tersebutlah kami dapat mengembangkan BasicDulu dengan 
                        pertimbangan yang lebih luas.
                    </div>

                    </div>

                {/* Profile */}

                    {/* Card Aten */}
                    <div className="Card">
                        {/* Illustration */}
                        <div>
                            <img
                            className="w-100 h-auto mt-4"
                            src="/Profile-Fatin.png"
                            alt="Mascot">
                            </img>
                        </div>
                        {/* Bio */}
                        <div className="text-white w-full h-auto rounded-b-xl rounded-t-none text-left pl-3"
                        style={{background:'#7293D0'}}>
                            <div className="pt-2">
                                Fatin
                            </div>
                            <div className="pb-2">
                                <p>
                                Binus University
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card Poet */}
                    <div className="px-4">
                        {/* Illustration */}
                        <div>
                            <img
                            className="w-100 h-auto mt-4"
                            src="/Profile-Putri.png"
                            alt="Mascot">
                            </img>
                        </div>
                        {/* Bio */}
                        <div className="text-white w-full h-auto rounded-b-xl rounded-t-none text-left pl-3"
                        style={{background:'#F38EB1'}}>
                            <div className="pt-2">
                                Putri
                            </div>
                            <div className="pb-2">
                                <p>
                                Binus University
                                </p>
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


