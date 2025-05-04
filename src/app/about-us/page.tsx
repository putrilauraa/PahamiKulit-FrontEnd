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
                    color: '#000000',
                }}>

            
<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-2 py-14 px-32 h-1/5">
            {/* About Us */}
            <div className="flex items-center">
                    <div className="border-pink-200 bg-pink-200 border-2 px-10 py-10 rounded-4xl">
                {/* Ilustrasi 1 */}
                <div className="p-4 flex items-center space-x-4">
                    <img
                        className="w-100 h-auto mt-4"
                        src="/Pink-11.png"
                        alt="Mascot"
                        >
                    </img>
                </div>
                
                {/* Tile */}
                <div className="font-semibold mb-3 text-2xl">
                    About Us
                </div>

                {/* Description */}
                <p>
                BasicDulu adalah website edukasi skincare 
                untuk membantu masyarakat yang masih awam 
                dengan skincare dalam memahami dasar-dasar 
                perawatan kulit. Kami hadir dengan memfokuskan 
                pengemasan informasi secara simpel, praktis, 
                dan mudah dipahami agar dapat dengan mudah 
                dimengerti bagi pemula.
                </p>
                

                    


                <div>
                    <p>Hello sucker</p>
                </div>
                    
                </div>
            </div>

            {/* Visi */}
            <div className="Card">

            </div>

            </div>
            {/* Misi */}

            {/* Footer Introduction */}


            </div>

            <div className="mt-6">
                <Footer />
            </div>

        </>   
        
    );
}
