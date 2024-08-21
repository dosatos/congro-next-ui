'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GripHorizontal, Menu, X } from 'lucide-react';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-800 shadow-lg transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center text-amber-800 hover:text-amber-900 transition-colors duration-200 group">
                        <GripHorizontal className="w-7 h-7 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                        <span className="text-2xl font-bold font-sans">Congro</span>
                    </Link>
                    <nav className="hidden md:flex space-x-6  
                    text-amber-800 
                    hover:text-amber-900 
                    transition-colors 
                    duration-200 
                    font-semibold 
                    text-lg">
                        <Link href="/" className="border-b-2 border-transparent hover:border-amber-800">
                            Practice
                        </Link>
                        <Link href="/roadmap" className="border-b-2 border-transparent hover:border-amber-800">
                            Roadmap
                        </Link>
                        {/* Add more navigation items here */}
                    </nav>
                    <button
                        className="md:hidden bg-amber-800 text-white p-2 rounded-full hover:bg-amber-900 transition-colors duration-200"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div >
            {/* Mobile menu */}
            {
                isMenuOpen && (
                    <div className="md:hidden bg-gradient-to-r from-amber-400 to-orange-500 shadow-inner">
                        <nav className="px-4 pt-2 pb-4 space-y-2">
                            <Link href="/" className="block text-amber-800 hover:text-amber-900 transition-colors duration-200 font-semibold text-lg py-2">
                                Practice
                            </Link>
                            <Link href="/resources" className="block text-amber-800 hover:text-amber-900 transition-colors duration-200 font-semibold text-lg py-2">
                                Resources
                            </Link>
                            {/* Add more navigation items here */}
                        </nav>
                    </div>
                )
            }
        </header >
    );
};

export default Header;