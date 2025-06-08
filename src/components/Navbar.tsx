'use client';

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { User } from "next-auth";
import { Button } from './ui/button';

const Navbar = () => {
    const { data: session } = useSession();
    const user: User = session?.user as User;

    // Extract avatar character from username
    const avatar = user?.username ? user.username[0].toUpperCase() : '👤';

    return (
        <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className="text-xl font-bold mb-4 md:mb-0">
                    Your Secret Box
                </Link>
                

                <div className="flex flex-row justify-end items-end gap-5">
                    {session ? (
                        <>
                           <Link href="/about">
                                 <Button className="w-full md:w-auto bg-gray-900 text-white" variant={'link'}>About</Button>
                             </Link>
                            <Link href="/dashboard">
                                <Button className="w-full md:w-auto bg-gray-900 text-white" variant={'link'}>My Dashboard</Button>
                            </Link>
                            <Link href={`/user/${user.username}`}>
                                <Button className="w-full md:w-auto bg-gray-900 text-white" variant={'link'}>My Profile</Button>
                            </Link>
                            <Button onClick={() => signOut()} className="w-full md:w-auto bg-gray-900 text-white" variant='outline'>
                                Logout
                            </Button>

                            {/* Avatar circle */}
                            <div
                                className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm"
                                title={user.username}
                            >
                                {avatar}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button className="w-full md:w-auto bg-gray-900 text-white" variant={'outline'}>Login</Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="w-full md:w-auto bg-gray-900 text-white" variant={'outline'}>Sign up</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
