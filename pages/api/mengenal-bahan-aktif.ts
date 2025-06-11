// pages/api/produk-basic-skincare.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { LOCAL_API_URL } from '@/configs/app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch(`${LOCAL_API_URL}/ingredients`);
        const data = await response.json();

        res.setHeader('Cache-Control', 'no-store');
        res.status(200).json(data);
    } catch (err) {
        console.error('API Error:', err);
        res.status(500).json({ message: 'Error fetching skincare ingredients' });
    }
}