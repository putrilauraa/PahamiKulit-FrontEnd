import type { NextApiRequest, NextApiResponse } from 'next';
import { jwtDecode } from 'jwt-decode';
import { LOCAL_API_URL } from '@/configs/app';
import { User } from '@/interfaces/User';

interface DecodedToken {
    user_id: number;
    user_name: string;
    exp: number;
    [key: string]: any;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

      const decoded: DecodedToken = jwtDecode(token);
      const userId = decoded.user_id;

      const response = await fetch(`${LOCAL_API_URL}/users/${userId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }

      const raw = await response.json();
      const userInfo: User = raw.data;

      console.log(userInfo);

      return res.status(200).json(userInfo);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching user data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}