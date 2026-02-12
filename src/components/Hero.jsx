import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';

import femaleImg from '../assets/Femalej.png';
import mfImg from '../assets/MFJ.png';
import maleImg from '../assets/Malej.png';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const { scrollY } = useScroll();
    const yLeft = useTransform(scrollY, [0, 800], [0, 150]);
    const yRight = useTransform(scrollY, [0, 800], [0, -150]);
    const yCenter = useTransform(scrollY, [0, 800], [0, 50]);

    const categories = ['SWEATER', 'PERFUMES', 'JEWELLERIES', 'JEANS', 'JACKETS'];

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
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-maroon leading-[1.1] tracking-tight">
                                MODERN <br className="hidden sm:block" />
                                <span className="sm:hidden">AFRICAN LUXURY,</span>
                                <span className="hidden sm:inline">AFRICAN <span className="text-gold italic">LUXURY</span>,</span> <br className="hidden sm:block" />
                                THOUGHTFULLY <br className="hidden sm:block" />
                                CRAFTED
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="mt-8 text-lg md:text-xl text-maroon/80 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
                            >
                                HoneyDrop Finery creates timeless pieces across jewelry, fashion, and fragrance—designed to endure.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="mt-10 md:mt-12 flex justify-center lg:justify-start"
                            >
                                <button className="flex items-center space-x-6 border border-maroon/30 px-8 py-4 sm:px-10 sm:py-5 rounded-none overflow-hidden relative group">
                                    <span className="absolute inset-0 bg-maroon translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                                    <span className="relative z-10 uppercase tracking-[0.3em] font-bold text-xs sm:text-sm text-maroon group-hover:text-cream transition-colors duration-500">
                                        Explore Collection
                                    </span>
                                    <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-maroon group-hover:text-cream group-hover:translate-x-2 transition-all duration-500" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Main Visual - Overlapping Images */}
                    <div className="w-full lg:w-1/2 relative mt-20 lg:mt-0 h-[500px] sm:h-[700px] lg:h-[800px]">

                        {/* Right Video (Woman) */}
                        <motion.div
                            style={{ y: yRight }}
                            initial={{ opacity: 0, scale: 1.1, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-0 right-0 w-3/4 md:w-3/5 z-0 group"
                        >
                            <div className="relative overflow-hidden shadow-2xl aspect-[4/5]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    src="https://res.cloudinary.com/dmfll2dqf/video/upload/v1770877280/Video_Generation_Complete_1_so2l5y.mp4"
                                />
                                <div className="absolute inset-0 bg-maroon/20 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700"></div>
                            </div>
                        </motion.div>

                        {/* Bottom Left Image (Man) */}
                        <motion.div
                            style={{ y: yLeft }}
                            initial={{ opacity: 0, scale: 0.9, x: -50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -bottom-10 left-0 w-2/3 md:w-2/5 z-20 group"
                        >
                            <div className="relative overflow-hidden shadow-2xl aspect-[3/4] border-4 border-cream/20">
                                <img
                                    src={maleImg}
                                    alt="Men's Finery"
                                    className="w-full h-full object-cover sepia-[0.3] hover:sepia-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gold/10 mix-blend-overlay opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>
                            </div>
                        </motion.div>

                        {/* Middle Joint Video - Main Focus */}
                        <motion.div
                            style={{ y: yCenter }}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-1/4 left-1/4 w-3/4 md:w-2/3 z-10 group cursor-pointer"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <div className="relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(76,13,2,0.5)] border-[8px] md:border-[12px] border-cream aspect-video">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
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
                    </div>
                </div>
            </div>

            {/* Category Bottom Bar with Scrollable Interface on Mobile */}
            <div className="absolute bottom-0 left-0 w-full bg-gold/95 backdrop-blur-xl py-6 sm:py-10 border-t border-maroon/10 z-40">
                <div className="flex flex-nowrap overflow-x-auto sm:overflow-visible sm:justify-around items-center px-4 sm:px-8 max-w-[1400px] mx-auto scrollbar-hide">
                    {[
                        { name: 'SWEATER', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=400' },
                        { name: 'PERFUMES', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400' },
                        { name: 'JEWELLERIES', img: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=400' },
                        { name: 'JEANS', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400' },
                        { name: 'JACKETS', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400' }
                    ].map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + (idx * 0.1) }}
                            className="relative group cursor-pointer py-2 px-6 sm:px-0 flex-shrink-0"
                        >
                            <span className="relative z-10 text-base sm:text-xl lg:text-2xl font-serif text-maroon/70 group-hover:text-maroon transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.25em] inline-block">
                                {cat.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon group-hover:w-full transition-all duration-500 hidden md:block"></span>
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
