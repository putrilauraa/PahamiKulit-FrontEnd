import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function AboutUs() {
    return (
        <>
        <Navbar/>
            <h1>Mengenal Bahan Aktif Page</h1>

            <div
                className={`${montserrat.className}`}
                style={{
                    color: '#405E93',
                }}></div>

                {/* Footer */}
                <div className="Footer">
                                <Footer />
                            </div>
            

        </>   
        
    );
}