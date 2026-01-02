'use client';

import { motion } from 'framer-motion';
import { HiOutlineRocketLaunch, HiOutlineCommandLine, HiOutlineSparkles, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { useTheme } from '@/context/ThemeContext';

const phases = [
    {
        label: 'Fase 1',
        title: 'Perencanaan & Analisis',
        desc: 'Kami mengidentifikasi kebutuhan bisnis Anda, target audiens, dan fitur-fitur penting yang harus ada.',
        stats: 'Minggu 1',
    },
    {
        label: 'Fase 2',
        title: 'Pengembangan Website',
        desc: 'Tim kami membangun website Anda dengan desain modern dan fitur yang sudah disepakati bersama.',
        stats: 'Minggu 2-4',
    },
    {
        label: 'Fase 3',
        title: 'Testing & Peluncuran',
        desc: 'Website di-test secara menyeluruh untuk memastikan semua berjalan lancar sebelum diluncurkan.',
        stats: 'Minggu 5',
    },
];

const tracks = [
    {
        icon: <HiOutlineSparkles />,
        title: 'Desain & Tampilan',
        items: ['Desain modern & menarik', 'Responsive di HP & PC', 'Animasi yang smooth'],
        accent: 'from-fuchsia-500/20 to-violet-500/20',
    },
    {
        icon: <HiOutlineCommandLine />,
        title: 'Teknologi & Fitur',
        items: ['Website cepat & aman', 'Integrasi AI jika dibutuhkan', 'Dashboard analytics'],
        accent: 'from-cyan-500/20 to-blue-500/20',
    },
    {
        icon: <HiOutlineGlobeAlt />,
        title: 'Marketing & Support',
        items: ['Landing page siap iklan', 'Tutorial penggunaan', 'Support & maintenance'],
        accent: 'from-emerald-500/20 to-teal-500/20',
    },
];

const deliverables = [
    'Website siap pakai dengan desain custom',
    'Komponen yang mudah diupdate sendiri',
    'Automasi untuk menghemat waktu kerja',
    'Dokumentasi lengkap cara pakai website',
];

export default function MvpPlanner() {
    const { isDark } = useTheme();

    return (
        <section
            id="mvp"
            className={`relative py-32 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-slate-50'}`}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute inset-x-0 top-0 h-1/2 ${isDark ? 'bg-gradient-to-b from-violet-900/30 via-transparent to-transparent' : 'bg-gradient-to-b from-white via-transparent to-transparent'}`} />
                <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase ${isDark
                        ? 'bg-white/5 border-white/10 text-gray-300'
                        : 'bg-white border-gray-200 text-gray-600'
                        }`}>
                        <HiOutlineRocketLaunch className="text-violet-500" /> Paket Cepat
                    </span>
                    <h2 className={`mt-6 text-3xl md:text-5xl font-semibold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Website jadi dalam 5 minggu,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">siap langsung dipakai!</span>
                    </h2>
                    <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Kami menggabungkan desain menarik, fitur lengkap, dan otomasi cerdas dalam satu paket yang mudah dipahami dan cepat digunakan.
                    </p>
                </div>

                <div className="mt-20 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        className={`p-8 rounded-3xl border ${isDark ? 'bg-gray-900 border-white/5' : 'bg-white border-gray-200'}`}
                    >
                        <div className="flex flex-wrap items-start justify-between gap-6">
                            <div>
                                <p className="text-xs uppercase tracking-widest font-semibold text-violet-400">Yang Anda Dapatkan</p>
                                <h3 className={`mt-3 text-3xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Website + Otomasi Lengkap</h3>
                                <p className={`mt-3 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Satu tim profesional, lima minggu pengerjaan, hasilnya bisa dibuka di HP, tablet, dan komputer. Setiap minggu Anda bisa lihat progressnya.
                                </p>
                            </div>
                            <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-semibold shadow-lg">
                                Waktu Tetap · 5 Minggu
                            </div>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-2">
                            {deliverables.map((deliverable) => (
                                <div
                                    key={deliverable}
                                    className={`flex items-center gap-3 p-4 rounded-2xl border ${isDark ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50'}`}
                                >
                                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                                    <p className={`text-sm font-medium ${isDark ? 'text-gray-100' : 'text-gray-700'}`}>{deliverable}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 grid md:grid-cols-3 gap-4">
                            {tracks.map((track) => (
                                <div
                                    key={track.title}
                                    className={`p-5 rounded-2xl border bg-gradient-to-br ${track.accent} ${isDark ? 'border-white/5 text-white' : 'border-gray-100 text-gray-900'}`}
                                >
                                    <div className="text-2xl mb-4">{track.icon}</div>
                                    <h4 className="text-lg font-semibold mb-3">{track.title}</h4>
                                    <ul className={`space-y-2 text-sm ${isDark ? 'text-gray-100/80' : 'text-gray-600'}`}>
                                        {track.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span className="mt-1 h-1 w-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        className="space-y-4"
                    >
                        {phases.map((phase, idx) => (
                            <div
                                key={phase.label}
                                className={`relative p-6 rounded-3xl border overflow-hidden ${isDark ? 'bg-gray-900 border-white/5' : 'bg-white border-gray-200'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                        {phase.label}
                                    </span>
                                    <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">
                                        {phase.stats}
                                    </span>
                                </div>
                                <h4 className={`mt-4 text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{phase.title}</h4>
                                <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{phase.desc}</p>
                                {idx < phases.length - 1 && (
                                    <div className="absolute left-6 bottom-0 h-4 w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent" />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-3xl border px-8 py-10 shadow-xl backdrop-blur-sm"
                    style={{
                        background: isDark
                            ? 'linear-gradient(120deg, rgba(139,92,246,0.08), rgba(6,182,212,0.08))'
                            : 'linear-gradient(120deg, rgba(196,181,253,0.25), rgba(103,232,249,0.2))',
                        borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(148,163,184,0.4)',
                    }}
                >
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] font-bold text-violet-500">Konsultasi Gratis</p>
                        <h3 className={`mt-3 text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Butuh paket custom atau fitur khusus?
                        </h3>
                        <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Kami bisa sesuaikan dengan kebutuhan Anda, termasuk fitur multi-bahasa, riset mendalam, atau otomasi yang lebih kompleks.
                        </p>
                    </div>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-gray-900/30 transition-colors dark:bg-white dark:text-gray-900"
                    >
                        Tanya Sekarang →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
