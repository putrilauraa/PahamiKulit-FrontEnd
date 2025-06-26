'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/interfaces/User';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
    AlertDialogFooter,
} from '@/components/ui/alert-dialog';

const Signin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true); // new loading state

    const handleLogin = async () => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (data?.token) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
                router.push('/');
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (err) {
            console.error(err);
            alert('Error logging in');
        }
    };

    const fetchData = async () => {
        if (token) {
            try {
                const response = await fetch('/api/user-information', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Server Error');
                }

                const userInfo: User = await response.json();
                setUser(userInfo);
                console.log(userInfo);
            } catch (error) {
                console.log('Error');
                localStorage.removeItem('token');
                router.replace('/');
            }
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
        setLoading(false); // stop loading after checking token
    }, []);

    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, [token]);

    // Optional: Loading spinner
    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-800" />
            </div>
        );
    }

    // If token and user exists: show profile image
    if (token && user) {
        return (
            <img
                src={user.image}
                alt="User Profile"
                className="size-10 ml-2 rounded-full cursor-pointer"
                onClick={() => router.push('/profile')}
            />
        );
    }

    // Else: show login button and modal
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className="text-sm font-medium bg-[#7092CF] hover:bg-[#5a78b5] text-white px-4 py-2 rounded-md ml-2 transition-all">
                    Masuk
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogCancel>x</AlertDialogCancel>
                    <AlertDialogTitle className="mb-1">
                        Selamat Datang!
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-base text-center">
                        Ketahui perawatan kulit dasar bersama PahamiKulit.
                        <br />
                        Mulai dari sini!
                    </AlertDialogDescription>

                    <div className="px-10">
                        <form
                            className="flex flex-col gap-4 mt-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border-2 rounded-md px-3 py-3 mt-1 text-sm focus:outline-none focus:border-[#7092CF]"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border-2 rounded-md px-3 py-3 mt-1 text-sm focus:outline-none focus:border-[#7092CF]"
                            />
                        </form>

                        {/* <div className="text-right text-[#405E93] mt-2 text-sm font-semibold">
                            <a href="">Lupa Kata Sandi?</a>
                        </div> */}

                        <AlertDialogAction onClick={handleLogin}>
                            Masuk
                        </AlertDialogAction>

                        <div className="text-center text-[#405E93] mt-10 text-sm">
                            Belum punya akun?{' '}
                            <a href="/create-account" className="font-semibold">
                                Daftar sekarang
                            </a>
                        </div>
                    </div>
                </AlertDialogHeader>
                <AlertDialogFooter />
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Signin;
