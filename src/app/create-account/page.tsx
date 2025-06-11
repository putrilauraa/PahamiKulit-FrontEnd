import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function Regist() {
    return (
        <>
            <Navbar />

            <div className={`${montserrat.className} min-h-screen`}>
                <div className="my-15 lg:my-25">
                    {/* Title */}
                    <div className="text-center">
                        <h1 className="text-2xl lg:text-5xl font-extrabold">
                            Daftarkan Akun Kamu
                        </h1>
                        {/* Description */}
                        <div className="text-xs lg:text-xl mt-2 lg:mt-4">
                            <p>Memahami basic skincare bersama PahamiKulit.</p>
                            <p>Ayo mulai!</p>
                        </div>
                    </div>

                    <img src="Elements-05.png" alt="Element" className='hidden lg:block absolute -left-48 mt-35'/>

                    {/* Form */}
                    <div className="flex items-center justify-center mt-10 lg:mt-14 mx-5 lg:mx-45">
                        <div className="space-y-2 lg:space-y-4">
                            {/* username */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="username"
                                    className="font-semibold"
                                >
                                    Nama Pengguna
                                </label>
                                <div>
                                    <input
                                        type="username"
                                        name="username"
                                        id="username"
                                        required
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                    ></input>
                                </div>
                            </div>

                            {/* email */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="email"
                                    className="font-semibold"
                                >
                                    Email
                                </label>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                    ></input>
                                </div>
                            </div>

                            {/* password */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="password"
                                    className="font-semibold"
                                >
                                    Kata Sandi
                                </label>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                    ></input>
                                </div>
                            </div>

                            {/* gender */}
                            <div className="text-xs lg:text-lg">
                                <label
                                    htmlFor="gender"
                                    className="font-semibold"
                                >
                                    Jenis Kelamin
                                </label>
                                <div>
                                    <select
                                        className="mt-2 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#7092CF] w-xs lg:w-xl"
                                        id="gender"
                                        name="gender"
                                        required
                                    >
                                        <option value=""></option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Button Daftar */}
                    <div className="flex justify-center mt-6 lg:mt-10">
                        <button
                            type="submit"
                            className="w-xs lg:w-xl text-white p-3 rounded-md text-center mb-2 bg-[#7092CF] text-sm lg:text-lg font-semibold hover:bg-[#405E93]"
                            style={{
                                boxShadow: '0 4px 0px rgba(64, 94, 147, 1)',
                            }}
                        >
                            Daftar
                        </button>
                    </div>

                    {/* Button Sudah punya akun */}
                    <div className="text-xs lg:text-base text-center mt-2 lg:mt-4">
                        <p>
                            Sudah punya akun? <a href="/" className='font-semibold text-[#7092CF]'>Masuk sekarang</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-5 lg:pt-10">
                <Footer />
            </div>
        </>
    );
}
