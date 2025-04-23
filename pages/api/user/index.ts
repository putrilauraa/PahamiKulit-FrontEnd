// pages/api/users/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '@/configs/app';

const EXTERNAL_API_URL = `${API_URL}/user`

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

    const response = await fetch(EXTERNAL_API_URL, {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch users' });
    }

    const data = await response.json();

    // Assuming your API returns: { users: [...] }
    const users = data.users || [];

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
}