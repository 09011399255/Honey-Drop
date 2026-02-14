import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';

import femaleImg from '../assets/Female.webp';
import mfImg from '../assets/MFJ.webp';
import maleImg from '../assets/Grey.webp';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const { scrollY } = useScroll();
    const yLeft = useTransform(scrollY, [0, 800], [0, 150]);
    const yRight = useTransform(scrollY, [0, 800], [0, -150]);
    const yCenter = useTransform(scrollY, [0, 800], [0, 50]);

    return (
        <div className="relative min-h-screen bg-cream overflow-hidden pt-40 pb-20">
            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

            {/* Aesthetic Background Elements */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-maroon/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-maroon leading-[1.1] tracking-tight">
                                MODERN <br className="hidden sm:block" />
                                <span className="sm:hidden">AFRICAN <span className="text-gold italic">LUXURY,</span></span>
                                <span className="hidden sm:inline">AFRICAN <span className="text-gold italic">LUXURY</span>,</span> <br className="hidden sm:block" />
                                REIMAGINED.
                            </h1>

                            <div className="flex flex-col sm:flex-row items-center lg:items-center gap-8 mt-12">
                                <Link
                                    to="/shop/MEN"
                                    className="group flex items-center space-x-6 border border-maroon/20 hover:border-maroon px-10 py-5 transition-all duration-700 relative overflow-hidden"
                                >
                                    <span className="relative z-10 uppercase tracking-[0.4em] font-bold text-[10px] group-hover:text-cream transition-colors duration-500">
                                        Shop New Season
                                    </span>
                                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:text-cream group-hover:translate-x-2 transition-all duration-500" />
                                    <div className="absolute inset-0 bg-maroon translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </Link>

                                <div className="flex items-center gap-12">
                                    <div className="text-left">
                                        <p className="text-[10px] tracking-[0.3em] font-bold text-maroon/40 uppercase mb-1">Established</p>
                                        <p className="text-lg font-serif text-maroon">© 2026</p>
                                    </div>
                                    <div className="h-10 w-px bg-maroon/10"></div>
                                    <div className="text-left">
                                        <p className="text-[10px] tracking-[0.3em] font-bold text-maroon/40 uppercase mb-1">Collection</p>
                                        <p className="text-lg font-serif text-maroon">HONEY DROP</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Interactive Image Grid */}
                    <div className="w-full lg:w-1/2 relative h-[600px] md:h-[700px] mt-12 lg:mt-0">
                        {/* Center Video Piece */}
                        <motion.div
                            style={{ y: yCenter }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 aspect-[3/4] z-20 group cursor-pointer"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-sm border-4 border-white/10">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                                    src="https://res.cloudinary.com/dmfll2dqf/video/upload/v1770877280/Video_Generation_Complete_1_so2l5y.mp4"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="bg-maroon/20 backdrop-blur-md p-4 sm:p-8 rounded-full border border-white/20">
                                        <Play className="text-cream fill-cream w-8 h-8 sm:w-12 sm:h-12" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Decorative Images */}
                        <motion.div
                            style={{ y: yLeft }}
                            className="absolute top-10 left-0 w-40 md:w-56 aspect-[3/4] rounded-sm overflow-hidden shadow-xl border border-white/10 z-10 hidden sm:block"
                        >
                            <img src={femaleImg} alt="Luxury Detail" className="w-full h-full object-cover scale-110" />
                        </motion.div>

                        <motion.div
                            style={{ y: yRight }}
                            className="absolute bottom-10 right-0 w-40 md:w-56 aspect-[3/4] rounded-sm overflow-hidden shadow-xl border border-white/10 z-10 hidden sm:block"
                        >
                            <img src={maleImg} alt="Heritage Piece" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Category Bottom Bar with Scrollable Interface on Mobile */}
            <div className="absolute bottom-0 left-0 w-full bg-gold/95 backdrop-blur-xl py-6 sm:py-10 border-t border-maroon/10 z-40">
                <div className="flex flex-nowrap overflow-x-auto sm:overflow-visible sm:justify-around items-center px-4 sm:px-8 max-w-[1400px] mx-auto scrollbar-hide">
                    {[
                        { name: 'SWEATER', path: '/shop/MEN' },
                        { name: 'PERFUMES', path: '/shop/NEW-COLLECTION' },
                        { name: 'JEWELLERIES', path: '/shop/LADIES' },
                        { name: 'JEANS', path: '/shop/MEN' },
                        { name: 'JACKETS', path: '/shop/MEN' }
                    ].map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + (idx * 0.1) }}
                            className="relative group py-2 px-6 sm:px-0 flex-shrink-0"
                        >
                            <Link to={cat.path} className="relative z-10 text-base sm:text-xl lg:text-2xl font-serif text-maroon/70 group-hover:text-maroon transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.25em] inline-block">
                                {cat.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon group-hover:w-full transition-all duration-500 hidden md:block"></span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
