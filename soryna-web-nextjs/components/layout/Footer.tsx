'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
    const { isDark } = useTheme();

    return (
        <footer className={`py-12 border-t ${isDark ? 'bg-gray-950 border-white/5' : 'bg-white border-gray-100'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-2 block">
                            <span className={isDark ? "text-white" : "text-gray-900"}>sory</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">na</span>
                        </Link>
                        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            © 2025 soryna. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-sm font-medium">
                        {['Privacy', 'Terms', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={`transition-colors ${isDark
                                        ? 'text-gray-500 hover:text-white'
                                        : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">
                        {[FaGithub, FaLinkedin, FaInstagram, FaTwitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`p-2 rounded-full transition-colors ${isDark
                                        ? 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
