'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { HiArrowUpRight, HiSparkles } from 'react-icons/hi2';
import { useTheme } from '@/context/ThemeContext';

export default function Portfolio() {
    const [filter, setFilter] = useState('all');
    const categories = ['all', 'Pengembangan Web', 'Solusi AI/ML', 'Tools & Automasi', 'Undangan Digital'];
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    const { isDark } = useTheme();

    const getColor = (cat: string) => {
        if (cat === 'Pengembangan Web' || cat === 'Web Development') return 'from-violet-500 to-purple-500';
        if (cat === 'Solusi AI/ML' || cat === 'AI/ML Solutions') return 'from-cyan-500 to-blue-500';
        if (cat === 'Undangan Digital') return 'from-pink-500 to-rose-500';
        return 'from-emerald-500 to-teal-500';
    };

    return (
        <section id="portfolio" className={`relative py-32 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 ${isDark
                        ? 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400'
                        : 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-600'
                        }`}>
                        <HiSparkles /> Portfolio Kami
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Proyek yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-500">membuat dampak</span>
                    </h2>
                    <p className={`text-lg max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Temukan karya-karya terbaru kami — dari website modern hingga solusi undangan digital.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? isDark
                                    ? 'bg-white text-gray-900 shadow-lg shadow-white/10'
                                    : 'bg-gray-900 text-white shadow-lg shadow-black/10'
                                : isDark
                                    ? 'bg-white/5 text-gray-400 border border-white/5 hover:bg-white/10 hover:border-white/10'
                                    : 'bg-gray-100 text-gray-600 border border-transparent hover:bg-gray-200'
                                }`}
                        >
                            {cat === 'all' ? 'Semua' : cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, i) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                            >
                                <Link href={p.link} className="group block h-full">
                                    <div className={`h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl group-hover:-translate-y-1 ${isDark
                                        ? 'bg-gray-900 border-white/5 hover:border-white/10 hover:shadow-violet-500/5'
                                        : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-gray-200'
                                        }`}>
                                        {/* Image */}
                                        <div className={`relative h-56 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                            <Image
                                                src={p.image}
                                                alt={p.title}
                                                fill
                                                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 ${isDark ? 'from-gray-900' : 'from-white'
                                                }`} />
                                            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                                                {p.price}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${getColor(p.category)} text-white text-[10px] font-bold uppercase tracking-wider mb-4`}>
                                                {p.category}
                                            </div>
                                            <h3 className={`text-xl font-bold mb-2 group-hover:text-violet-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {p.title}
                                            </h3>
                                            <p className={`text-sm line-clamp-3 mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {p.description}
                                            </p>

                                            <div className={`flex items-center justify-between pt-4 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                                                <span className={`text-sm font-medium transition-colors ${isDark ? 'text-gray-500 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'}`}>Lihat Detail</span>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isDark
                                                    ? 'bg-white/5 group-hover:bg-white group-hover:text-black text-gray-400'
                                                    : 'bg-gray-100 group-hover:bg-gray-900 group-hover:text-white text-gray-500'
                                                    }`}>
                                                    <HiArrowUpRight />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
