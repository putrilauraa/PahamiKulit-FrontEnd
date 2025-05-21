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

                


                </div>


            </div>
            
            {/* Footer */}
            <div className="Footer pt-10">
                                <Footer />
                            </div>

        </>   
        
    );
}