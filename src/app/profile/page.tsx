import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {
    return (
        <>
        <Navbar/>
            <h1>Profile Saya</h1>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}>

                {/* Title */}
                <div className=''>
                    <div>
                        Profile Saya
                    </div>
                </div>
                
                {/* Card Details */}
                <div className=''>

                    {/* Left Side */}
                    <div>
                        {/* Illustration */}
                        <div>
                            <img className=''
                            src=""
                            alt="Illust">
                            </img>
                        </div>

                        {/* Button Detail Akun */}
                        <div>
                            <a>
                                <div>Detail Akun</div>
                            </a>
                        </div>

                        {/* Button Profile Kulit */}
                        <div>
                            <a>
                                <div>Detail Akun</div>
                            </a>
                        </div>


                    </div>

                    {/* Center Side */}
                    <div>
                        {/* Nama */}
                            <div>
                                {/* Title */}
                                <div>Nama</div>
                                {/* Form */}
                                <div>

                                </div>
                            </div>
                        {/* Email */}
                            <div>
                                {/* Title */}
                                <div>Email</div>
                                {/* Form */}
                            </div>
                        {/* Gender */}
                            <div>
                                {/* Title */}
                                <div>Gender</div>
                                {/* Form */}
                            </div>
                    </div>


                    {/* Right Side */}
                    <div>
                        Edit
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