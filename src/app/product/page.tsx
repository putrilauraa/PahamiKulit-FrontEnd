'use client';

import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LOCAL_API_URL } from '@/configs/app';

const API_URL = LOCAL_API_URL;

export default function Product() {
    const router = useRouter();
    const [users, setUsers] = useState<Array<User>>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${API_URL}/users/`);

            if (!response.ok) throw new Error('Failed to fetch users');

            const data = await response.json();
            setUsers(data.data);
        } catch (err) {
            setError('Error fetching data');
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <Navbar />
            <h1>Product Page</h1>

            <div>
                <h1>List of Users</h1>
                {error ? (
                    <p>{error}</p>
                ) : (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <strong>{user.username}</strong> – {user.email}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
