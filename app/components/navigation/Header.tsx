'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GripHorizontal, Menu } from 'lucide-react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setIsVisible(false);
            } else { // if scroll up show the navbar
                setIsVisible(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 navbar bg-amber-400 text-gray-800 shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4">
                <div className="flex-1">
                    <Link href="/" className="flex items-center hover:text-amber-700 transition-colors duration-200">
                        <GripHorizontal className="w-6 h-6 mr-2" />
                        <span className="text-xl font-bold">Congro</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;