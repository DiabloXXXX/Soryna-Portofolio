'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi2';
import { FaUniversity, FaWallet, FaQrcode, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Props {
    params: { id: string };
}

export default function ProductPage({ params }: Props) {
    const product = projects.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    const waNumber = "6281234567890";
    const waLink = `https://wa.me/${waNumber}?text=${product.whatsappTemplate}`;

    const getColor = (cat: string) => {
        if (cat === 'Web Development') return 'from-violet-500 to-purple-500';
        if (cat === 'AI/ML Solutions') return 'from-cyan-500 to-blue-500';
        return 'from-emerald-500 to-teal-500';
    };

    return (
        <div className="min-h-screen pt-20 sm:pt-24 pb-16 bg-gray-950">
            {/* Background */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-violet-950/30 via-gray-950 to-cyan-950/30" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Back */}
                <Link
                    href="/#portfolio"
                    className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <HiArrowLeft className="mr-2" />
                    Kembali ke Portfolio
                </Link>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${getColor(product.category)} text-white text-xs font-semibold mb-4`}>
                            {product.category}
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                            {product.title}
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {product.longDescription}
                        </p>

                        {/* Features */}
                        <div className="rounded-2xl p-5 sm:p-6 bg-white/5 border border-white/10 mb-8">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <HiCheckCircle className="text-emerald-400" />
                                Fitur Utama
                            </h3>
                            <ul className="space-y-3">
                                {product.features.map((f, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <HiCheckCircle className="text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-3 mb-8">
                            <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                {product.price}
                            </span>
                            <span className="text-gray-500">{product.priceNote}</span>
                        </div>

                        {/* Payment */}
                        <div className="mb-8">
                            <p className="text-gray-500 text-sm mb-3">Metode Pembayaran:</p>
                            <div className="flex gap-4 text-xl text-gray-500">
                                <FaUniversity className="hover:text-violet-400 transition-colors cursor-pointer" />
                                <FaWallet className="hover:text-cyan-400 transition-colors cursor-pointer" />
                                <FaQrcode className="hover:text-emerald-400 transition-colors cursor-pointer" />
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map((t) => (
                                <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-gray-400 text-xs">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="rounded-3xl overflow-hidden bg-gray-900 border border-white/10">
                            <div className="relative h-52 sm:h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                            </div>
                            <div className="p-6 sm:p-8">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Tertarik dengan produk ini?
                                </h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    Klik tombol di bawah untuk memesan via WhatsApp.
                                </p>
                                <div className="rounded-xl p-4 bg-black/50 border border-white/10 text-xs text-gray-400 font-mono mb-6 overflow-x-auto">
                                    {decodeURIComponent(product.whatsappTemplate)}
                                </div>
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:opacity-90 transition-opacity"
                                >
                                    <FaWhatsapp className="inline mr-2" />
                                    Pesan Sekarang
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
