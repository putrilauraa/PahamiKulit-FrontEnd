import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {
    return (
        <>
        <Navbar/>
            <h1>Detail Bahan Aktif</h1>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}>
                
                {/* Card Details */}
                <div className=''>

                    {/* Left Side */}
                        {/* Ilustrasi */}
                        <div>
                            <img>
                            </img>
                        </div>

                    {/* Right Side */}
                    <div>
                        {/* Title */}
                        <div>
                            Niacinamide
                        </div>

                        {/* Description */}
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida blandit ex vel eleifend. Donec eros ipsum, sagittis sed nibh sed, placerat laoreet justo. Sed gravida risus sit amet eros feugiat dignissim.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Manfaat Skincare */}

                    <div>

                    </div>

                {/* Rekomendasi Produk */}

                    <div>

                    </div>

            </div>
            
            {/* Footer */}
            <div className="Footer pt-10">
                                <Footer />
                            </div>

        </>   
        
    );
}