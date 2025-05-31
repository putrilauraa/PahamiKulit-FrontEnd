import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Display } from '@geist-ui/react';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Profile() {
    return (
        <>
            <Navbar />

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                    background: '#E6EEFC',
                }}
            >
                {/* Title */}
                <div className="">
                    <div className="font-bold text-3xl ml-8 pt-4">
                        Profile Saya
                    </div>
                </div>

                {/* Card Details */}
                <div className="mt-6 pb-10 px-30">
                    <div className="py-2 bg-white rounded-4xl grid grid-cols-2 gap-4">
                        {/* Left Side */}
                        <div className="pr-10">
                            {/* Illustration */}
                            <div className="flex justify-center">
                                <img
                                    className="w-50 h-auto"
                                    src="Profile-Fatin.png"
                                    alt="Mascot"
                                ></img>
                            </div>

                            {/* Button Detail Akun */}
                            <div className="py-2 px-2 mx-10 font-medium rounded-md text-white bg-[#7092CF]">
                                <a>
                                    <div>Detail Akun</div>
                                </a>
                            </div>

                            {/* Button Profile Kulit */}
                            <div className="py-2 px-2 mx-10 my-2 rounded-md hover:text-white hover:bg-[#7092CF]">
                                <a>
                                    <div>Profil Kulit</div>
                                </a>
                            </div>
                        </div>

                        {/* Center Side */}
                        <div className="px-4 py-4">
                            {/* Edit button */}
                            <div className="flex justify-end ml-10">
                                <a>
                                    <button className="py-1 px-6 border-2 rounded-3xl hover:text-white hover:bg-[#7092CF]">
                                        Edit
                                    </button>
                                </a>
                            </div>

                            {/* Nama */}
                            <div className="my-3">
                                {/* Title */}
                                <div className="text-[#808080]">Nama</div>
                                {/* Form */}
                                <div>
                                    <label htmlFor="Username">
                                        <div>Johnny</div>
                                    </label>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="my-3">
                                {/* Title */}
                                <div className="text-[#808080]">Email</div>
                                {/* Form */}
                                <div>Johnnyjohnny@gmail.com</div>
                            </div>
                            {/* Gender */}
                            <div className="my-3">
                                {/* Title */}
                                <div className="text-[#808080]">Gender</div>
                                {/* Form */}
                                <div>Pria</div>
                            </div>
                        </div>
                    </div>

                    {/* Button Keluar */}
                    <div className="flex justify-end mt-4">
                        <a>
                            <div className="py-2 px-6 rounded-4xl bg-[#7092CF] font-bol text-white text-end">
                                Keluar
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="Footer">
                <Footer />
            </div>
        </>
    );
}
