// pages/api/produk-basic-skincare/product/[productTypeId].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { LOCAL_API_URL } from '@/configs/app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { productId } = req.query;

    console.log('received from hasil-rekomendasi')

    if (!productId || Array.isArray(productId)) {
        return res.status(400).json({ message: 'Invalid product type ID' });
    }

    try {
        const response = await fetch(
            `${LOCAL_API_URL}/products/${productId}`,
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        res.setHeader('Cache-Control', 'no-store');
        res.status(200).json(data);
    } catch (err) {
        console.error('API Error:', err);
        res.status(500).json({ message: 'Error fetching product details' });
    }
}
