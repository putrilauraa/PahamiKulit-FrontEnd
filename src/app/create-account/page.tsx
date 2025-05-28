import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <h1>Halaman Create Account</h1>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}
            >
                <div className="mt-6">
                    {/* Title */}
                    <div className="text-center">
                        <div className="text-4xl font-extrabold">
                            Daftarkan Akun Kamu
                        </div>
                        {/* Description */}
                        <div className="mt-4">
                            <p>Lorem ipsum dolor sit amet dengan BasicDulu.</p>
                            <p>Ayo mulai!</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="flex items-center justify-center">
                        <div className="px-10 py-4">
                            {/* email */}
                            <div className="">
                                <label htmlFor="email">Email address</label>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="pr-40 py-1.5 border-2 border-[#B3B3B3] p-2 rounded-md focus:outline-none focus:border-[#7092CF]"
                                    ></input>
                                </div>
                            </div>

                            {/* username */}
                            <div className="mt-2">
                                <label htmlFor="username">Username</label>
                                <div>
                                    <input
                                        type="username"
                                        name="username"
                                        id="username"
                                        required
                                        className="pr-40 py-1.5 border-2 border-[#B3B3B3] p-2 rounded-md focus:outline-none focus:border-[#7092CF]"
                                    ></input>
                                </div>
                            </div>

                            {/* password */}
                            <div className="mt-2">
                                <label htmlFor="password">Password</label>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        required
                                        className="pr-40 py-1.5 border-2 border-[#B3B3B3] p-2 rounded-md focus:outline-none focus:border-[#7092CF]"
                                    ></input>
                                </div>
                            </div>

                            {/* gender */}
                            <div className="mt-2">
                                <label htmlFor="gender">Gender</label>
                                <div>
                                    <select
                                        className="px-35 py-1.5 border-2 border-[#B3B3B3] p-2 rounded-md focus:outline-none focus:border-[#7092CF]"
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
                    <div className="flex justify-center">
                        <div className="text-white px-40 py-1.5 rounded-md text-center mb-2 bg-[#7092CF]">
                            {/* <a
                    href="/">
                        Daftar
                    </a> */}
                            <button type="submit">Daftar</button>
                        </div>
                    </div>

                    {/* Button Sudah punya akun */}
                    <div className="text-center">
                        <a href="/">Sudah punya akun?</a>
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
