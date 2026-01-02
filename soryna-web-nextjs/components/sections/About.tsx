'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiCheckBadge, HiArrowTrendingUp, HiCog6Tooth, HiLightBulb } from 'react-icons/hi2';
import { useTheme } from '@/context/ThemeContext';

const features = [
    { icon: <HiArrowTrendingUp />, title: 'Pengiriman Cepat', desc: 'Peluncuran dalam hitungan minggu, bukan bulan' },
    { icon: <HiCog6Tooth />, title: 'Solusi Custom', desc: 'Disesuaikan dengan kebutuhan bisnis Anda' },
    { icon: <HiLightBulb />, title: 'Teknologi Terkini', desc: 'Dibangun dengan framework dan tools modern' },
    { icon: <HiCheckBadge />, title: 'Hasil Terbukti', desc: '50+ proyek sukses dengan klien puas' }
];

export default function About() {
    const { isDark } = useTheme();

    return (
        <section id="about" className={`relative py-32 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className={`inline-block px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 ${isDark
                        ? 'bg-violet-500/10 border-violet-500/20 text-violet-400'
                        : 'bg-violet-50 border-violet-200 text-violet-600'
                        }`}>
                        Tentang Kami
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Kami tidak hanya membangun software.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                            Kami membangun pengalaman.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Soryna</span> adalah partner teknologi strategis Anda.
                            Kami menggabungkan keahlian teknis dengan wawasan bisnis untuk menciptakan solusi yang mentransformasi operasional perusahaan.
                        </p>
                        <p className={`mb-12 leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            Dari automasi cerdas hingga pengalaman web yang memukau, kami telah membantu 50+ bisnis
                            mempercepat transformasi digital mereka dan mencapai pertumbuhan yang terukur.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-5 rounded-2xl border transition-colors ${isDark
                                        ? 'bg-white/5 border-white/5 hover:border-white/10'
                                        : 'bg-gray-50 border-gray-100 hover:border-gray-200'
                                        }`}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white text-lg mb-4 shadow-lg shadow-violet-500/20">
                                        {f.icon}
                                    </div>
                                    <h4 className={`font-bold text-sm mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{f.title}</h4>
                                    <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className={`relative p-2 rounded-3xl border ${isDark
                            ? 'bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border-white/5'
                            : 'bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border-gray-200'
                            }`}>
                            <div className={`relative aspect-square rounded-2xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="Team"
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80 ${isDark ? 'from-gray-950' : 'from-white'
                                    }`} />

                                {/* Float Stats */}
                                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                                    <div className={`flex-1 p-4 rounded-xl backdrop-blur-md border ${isDark
                                        ? 'bg-gray-900/80 border-white/10'
                                        : 'bg-white/90 border-gray-200'
                                        }`}>
                                        <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>5+</div>
                                        <div className="text-xs text-gray-500 font-medium uppercase">Tahun Pengalaman</div>
                                    </div>
                                    <div className={`flex-1 p-4 rounded-xl backdrop-blur-md border ${isDark
                                        ? 'bg-gray-900/80 border-white/10'
                                        : 'bg-white/90 border-gray-200'
                                        }`}>
                                        <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>50+</div>
                                        <div className="text-xs text-gray-500 font-medium uppercase">Proyek Sukses</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
