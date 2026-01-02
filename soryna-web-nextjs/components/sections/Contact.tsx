'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiEnvelope, HiPhone, HiMapPin, HiPaperAirplane } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const { isDark } = useTheme();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Halo soryna, saya ${form.name} (${form.email}). ${form.message}`;
        window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section id="contact" className={`relative py-32 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className={`inline-block px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 ${isDark
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                            : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                        }`}>
                        Get in Touch
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">amazing</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Ready to transform your ideas into reality? We'd love to hear from you.
                    </p>
                </motion.div>

                {/* Content Grid - Centered */}
                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-8 mb-12">
                            {[
                                { icon: <HiEnvelope />, label: 'Email', value: 'contact@soryna.com' },
                                { icon: <HiPhone />, label: 'Phone', value: '+62 812-3456-7890' },
                                { icon: <HiMapPin />, label: 'Location', value: 'Indonesia' }
                            ].map((item) => (
                                <div key={item.label} className="flex items-start gap-5 group">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 ${isDark
                                            ? 'bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:bg-violet-500 group-hover:text-white'
                                            : 'bg-violet-50 border border-violet-100 text-violet-600 group-hover:bg-violet-600 group-hover:text-white'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className={`text-sm font-medium mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{item.label}</div>
                                        <div className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp Card */}
                        <div className={`p-8 rounded-2xl border ${isDark
                                ? 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/20'
                                : 'bg-emerald-50 border-emerald-100'
                            }`}>
                            <h4 className={`font-bold text-lg mb-2 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                <FaWhatsapp className="text-emerald-500 text-2xl" /> Quick Response
                            </h4>
                            <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Need a faster reply? Chat with our team directly on WhatsApp. We usually reply within minutes.
                            </p>
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
                            >
                                <FaWhatsapp className="text-lg" /> Chat Now
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`p-8 rounded-3xl border shadow-2xl ${isDark
                                ? 'bg-gray-900 border-white/5'
                                : 'bg-white border-gray-100 shadow-gray-200'
                            }`}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-all font-medium ${isDark
                                            ? 'bg-gray-950 border-white/10 text-white placeholder-gray-600 focus:border-emerald-500 focus:ring-emerald-500'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500'
                                        }`}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-all font-medium ${isDark
                                            ? 'bg-gray-950 border-white/10 text-white placeholder-gray-600 focus:border-emerald-500 focus:ring-emerald-500'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500'
                                        }`}
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className={`w-full px-4 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-all font-medium resize-none ${isDark
                                            ? 'bg-gray-950 border-white/10 text-white placeholder-gray-600 focus:border-emerald-500 focus:ring-emerald-500'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500'
                                        }`}
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                            >
                                <HiPaperAirplane className="text-lg" /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
