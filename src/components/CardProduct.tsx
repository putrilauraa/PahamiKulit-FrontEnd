import React from 'react';
import { Card, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface iCardProduct {
    cardKey: number;
    brand: string;
    productName: string;
    image: string;
    tags: string[];
    approvedByDoct: boolean;
    href: string;
}

const CardProduct: React.FC<iCardProduct> = ({
    brand,
    cardKey,
    productName,
    tags,
    image,
    approvedByDoct,
    href,
}) => {
    const router = useRouter();

    const goToProductPage = () => {
        localStorage.setItem('product_received_by', 'hasil-rekomendasi');

        router.push(href);
    };

    return (
        <button
            className="hover:shadow-lg text-left rounded-2xl transition-all duration-300"
            onClick={() => goToProductPage()}
        >
            <Card>
                <CardDescription>
                    <div className="px-6 pt-6">
                        <div className="relative w-full h-70 mb-10">
                            <Image
                                src={image}
                                alt={productName}
                                className="object-cover rounded-lg"
                                fill
                            />
                        </div>
                        <div className="mt-5 flex flex-row gap-2">
                            {tags.map((item, index) => (
                                <span
                                    key={index}
                                    className={`px-3 py-1 rounded-2xl text-black ${
                                        item === 'Sunscreen'
                                            ? 'bg-[#F5E2C7]'
                                            : item === 'Pelembab'
                                            ? 'bg-[#FFEDF3]'
                                            : 'bg-[#E6EEFC]'
                                    }`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="mt-3 font-semibold text-lg text-black">
                            {brand}
                        </div>
                        <div className="text-lg text-black">{productName}</div>
                    </div>
                </CardDescription>

                <CardFooter>
                    {approvedByDoct && (
                        <span className="flex items-center px-2 py-1 mt-3 rounded-md border-2 border-[#84CDA8] text-[#3CB371] text-xs font-medium">
                            <img
                                src="/Check.png"
                                alt="Checked"
                                className="w-5 h-auto mr-1"
                            />
                            BPOM Registered
                        </span>
                    )}
                </CardFooter>
            </Card>
        </button>
    );
};

export default CardProduct;
