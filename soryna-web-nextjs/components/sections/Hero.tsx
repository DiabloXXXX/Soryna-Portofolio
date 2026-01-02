'use client';

import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';
import { useTheme } from '@/context/ThemeContext';

const stats = [
    { label: 'Proyek Selesai', value: '50+' },
    { label: 'Klien Aktif', value: '25+' },
    { label: 'Kepuasan', value: '98%' },
    { label: 'Tahun Pengalaman', value: '5+' },
];

export default function Hero() {
    const { isDark } = useTheme();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className={`relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 ${isDark ? 'bg-gray-950' : 'bg-white'
                }`}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-gray-900 via-gray-950 to-black' : 'bg-gradient-to-b from-white via-slate-50 to-white'}`} />
                <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.12)'} 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
                <div className={`absolute -left-24 top-1/4 w-[420px] h-[420px] blur-[160px] ${isDark ? 'bg-violet-700/20' : 'bg-violet-300/40'}`} />
                <div className={`absolute -right-10 bottom-0 w-[460px] h-[460px] blur-[190px] ${isDark ? 'bg-cyan-600/20' : 'bg-cyan-300/30'}`} />
            </div>

            <div className="relative z-10 w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.35em] uppercase mb-8">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                            </span>
                            <span className={`${isDark ? 'text-gray-300' : 'text-gray-500'}`}>SORYNA · 2026</span>
                        </div>

                        {/* Heading */}
                        <h1 className={`text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Transformasi Digital untuk<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500">
                                Bisnis Modern Anda
                            </span>
                        </h1>

                        {/* Description */}
                        <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Soryna menghadirkan solusi teknologi inovatif yang menggabungkan kecerdasan buatan,
                            pengembangan web modern, dan automasi bisnis untuk meningkatkan efisiensi dan
                            pertumbuhan perusahaan Anda.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            <button
                                onClick={() => scrollTo('portfolio')}
                                className={`group px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all shadow-lg flex items-center gap-2 ${isDark
                                    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-white/10'
                                    : 'bg-gray-900 text-white hover:bg-black shadow-black/10'
                                    }`}
                            >
                                Lihat Portfolio
                                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollTo('contact')}
                                className={`px-8 py-4 rounded-full font-semibold text-base tracking-wide border transition-all backdrop-blur ${isDark
                                    ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                                    : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="inline-flex items-center gap-2">
                                    <HiSparkles className="text-violet-500" />
                                    Mulai Konsultasi
                                </span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {stats.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className={`p-6 rounded-2xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-100 bg-gray-50'}`}
                                >
                                    <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                                        {stat.value}
                                    </p>
                                    <p className={`text-xs uppercase tracking-widest font-semibold mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
