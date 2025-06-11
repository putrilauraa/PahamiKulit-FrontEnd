import React from 'react';
import {
    Card,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"
import Image from 'next/image';

interface iCardProduct {
    key: number,
    productName: string,
    image: string,
    tags: string[],
    approvedByDoct: string
}

const CardProduct: React.FC<iCardProduct> = ({ key, productName, tags, image, approvedByDoct }) => {
    return (
        <Card key={key}>


            <CardDescription>
                <div className='p-4'>
                    <div className="relative w-full h-64 mb-10">
                        <Image key={key} src={image} alt={productName} className="object-cover rounded-lg" fill />
                    </div>
                    <div className='mt-5 flex flex-row gap-2'>
                        {
                            tags.map((item, index) => (
                                <span key={index} className={`px-3 py-1 rounded-2xl text-black ${item === 'SPF'
                                        ? 'bg-[#F5E2C7]'
                                        : item === 'Pelembab'
                                            ? 'bg-[#FFEDF3]'
                                            : 'bg-[#E6EEFC]'} `}>
                                    {item}
                                </span>
                            ))
                        }
                    </div>
                    <div className='mt-2 font-bold text-xl text-black'>{productName}</div>
                </div>

            </CardDescription>

            <CardFooter>
                {approvedByDoct && (
                    <span className="flex items-center px-3 py-1 rounded-md border-2 border-[#84CDA8] text-[#3CB371] text-xs font-medium">
                        <img
                            src="/Check.png"
                            alt="Checked"
                            className="w-5 h-auto mr-2">
                        </img>
                        BPOM Registered
                    </span>
                )}
            </CardFooter>
        </Card>
    );
}

export default CardProduct