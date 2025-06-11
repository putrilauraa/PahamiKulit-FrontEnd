import type { NextApiRequest, NextApiResponse } from 'next';
import { LOCAL_API_URL } from '@/configs/app';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { skin_test_result_id, skin_problem_id } = req.body;

        const response = await fetch(`${LOCAL_API_URL}/recommendation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ skin_test_result_id, skin_problem_id }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Request failed');
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Recommendation error:', error);
        res.status(500).json({ message: 'Server error during recommendation fetch' });
    }
}
