import React from 'react';
import Link from 'next/link';
import { GripHorizontal, Menu } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 navbar bg-amber-400 text-gray-800 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex-1">
                    <Link href="/" className="flex items-center hover:text-amber-700 transition-colors duration-200">
                        <GripHorizontal className="w-6 h-6 mr-2" />
                        <span className="text-xl font-bold">Congro</span>
                    </Link>
                </div>
                {/* <div className="flex-none md:hidden">
                    <button className="btn btn-square btn-ghost">
                        <Menu className="w-6 h-6" />
                    </button>
                </div> */}
            </div>
        </header>
    );
};

export default Header;