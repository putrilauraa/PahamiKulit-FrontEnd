import type { NextApiRequest, NextApiResponse } from 'next';
import { LOCAL_API_URL } from '@/configs/app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { userId } = req.query;
        const { score } = req.body;
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization token required' });
        }

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        if (score === undefined || score === null) {
            return res.status(400).json({ message: 'Score is required' });
        }

        const response = await fetch(`${LOCAL_API_URL}/users/${userId}/skin-test`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authHeader
            },
            body: JSON.stringify({ score }),
        });

        const data = await response.json();
        if (response.ok) {
            return res.status(200).json(data);
        } else {
            return res.status(response.status).json(data);
        }
    } catch (error) {
        console.error('Skin test API error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}