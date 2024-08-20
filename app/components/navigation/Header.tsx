'use client';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="flex items-center">
                    <span className="text-xl font-semibold">Congro</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;