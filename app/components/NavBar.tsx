'use client';

import { useState } from 'react';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                            Cogrea
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <button className="bg-blue-900 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200">
                            Join Waitlist
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="py-4 space-y-4">
                            <ul className="space-y-4">
                                <li>
                                    <a 
                                        href="#" 
                                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200">
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}