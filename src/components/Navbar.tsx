'use client';

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from './ui/button';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const { data: session } = useSession();
    const user: User = session?.user as User;
    const avatar = user?.username ? user.username[0].toUpperCase() : '👤';
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-4 shadow-md bg-gray-900 text-white">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    Your Secret Box
                </Link>

                {/* Mobile menu toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Menu items */}
                <div
                    className={`w-full md:flex md:items-center md:gap-5 md:w-auto ${
                        isOpen ? 'block mt-4' : 'hidden md:block'
                    }`}
                >
                    {session ? (
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <Link href="/about">
                                <Button className="bg-gray-900 text-white" variant={'link'}>About</Button>
                            </Link>
                            <Link href="/dashboard">
                                <Button className="bg-gray-900 text-white" variant={'link'}>My Dashboard</Button>
                            </Link>
                            <Link href={`/user/${user.username}`}>
                                <Button className="bg-gray-900 text-white" variant={'link'}>My Profile</Button>
                            </Link>
                            <Button onClick={() => signOut()} className="bg-gray-900 text-white" variant='outline'>
                                Logout
                            </Button>
                            <div
                                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm"
                                title={user.username}
                            >
                                {avatar}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <Link href="/login">
                                <Button className="bg-gray-900 text-white" variant={'outline'}>Login</Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="bg-gray-900 text-white" variant={'outline'}>Sign up</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
