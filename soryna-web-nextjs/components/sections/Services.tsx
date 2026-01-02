'use client';

import { motion } from 'framer-motion';
import { HiCodeBracket, HiCpuChip, HiCommandLine, HiChatBubbleLeftRight, HiChartBar, HiCloud } from 'react-icons/hi2';
import { useTheme } from '@/context/ThemeContext';

const services = [
    { icon: <HiCodeBracket />, title: 'Pengembangan Web', desc: 'Aplikasi web modern dengan Next.js, React, dan teknologi terkini', gradient: 'from-violet-500 to-purple-500', large: true },
    { icon: <HiCpuChip />, title: 'AI & Machine Learning', desc: 'Solusi kecerdasan buatan untuk prediksi dan automasi cerdas', gradient: 'from-cyan-500 to-blue-500', large: true },
    { icon: <HiChatBubbleLeftRight />, title: 'Chatbot & Bot', desc: 'Bot WhatsApp, Telegram, Discord, dan platform messaging lainnya', gradient: 'from-emerald-500 to-teal-500' },
    { icon: <HiChartBar />, title: 'Analitik & Dashboard', desc: 'Visualisasi data dan dashboard interaktif untuk business intelligence', gradient: 'from-orange-500 to-amber-500' },
    { icon: <HiCommandLine />, title: 'Automasi & Tools', desc: 'Web scraping, automasi proses, dan integrasi API custom', gradient: 'from-rose-500 to-pink-500' },
    { icon: <HiCloud />, title: 'Cloud & Deployment', desc: 'Infrastruktur cloud yang scalable dan deployment profesional', gradient: 'from-indigo-500 to-violet-500' }
];

export default function Services() {
    const { isDark } = useTheme();

    return (
        <section id="services" className={`relative py-32 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className={`inline-block px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 ${isDark
                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                        : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                        }`}>
                        Layanan Kami
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Semua yang Anda butuhkan untuk
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
                            membangun & mengembangkan bisnis
                        </span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Dari konsep hingga deployment, kami menangani seluruh siklus pengembangan dengan presisi dan dedikasi tinggi.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className={`group relative p-8 rounded-3xl border transition-all duration-300 ${isDark
                                ? 'bg-gray-900 border-white/5 hover:border-white/10 hover:bg-gray-800/50'
                                : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-xl'
                                } ${s.large ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                        >
                            {/* Icon */}
                            <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${s.gradient} text-white text-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                {s.icon}
                            </div>

                            <h3 className={`font-bold mb-3 ${s.large ? 'text-2xl' : 'text-xl'} ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {s.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className={`px-8 py-3.5 rounded-full border font-semibold text-sm transition-colors backdrop-blur-sm ${isDark
                            ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                            : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50 shadow-sm'
                            }`}
                    >
                        Diskusikan Proyek Anda →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
