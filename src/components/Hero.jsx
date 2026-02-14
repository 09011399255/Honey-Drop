import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';

import femaleImg from '../assets/Female.webp';
import mfImg from '../assets/MFJ.webp';
import maleImg from '../assets/Grey.webp';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Individual motion values for hover states
    const hoverRight = useMotionValue(0);
    const hoverLeft = useMotionValue(0);
    const hoverCenter = useMotionValue(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollY } = useScroll();
    
    // Base grayscale from scroll: 100 at top, 0 at 400px down
    const scrollGrayscale = useTransform(scrollY, [0, 400], [100, 0]);

    // Combine scroll and hover: grayscale = scrollGrayscale * (1 - hoverValue)
    const filterRight = useMotionTemplate`grayscale(${useTransform([scrollGrayscale, hoverRight], ([s, h]) => s * (1 - h))}%)`;
    const filterLeft = useMotionTemplate`grayscale(${useTransform([scrollGrayscale, hoverLeft], ([s, h]) => s * (1 - h))}%)`;
    const filterCenter = useMotionTemplate`grayscale(${useTransform([scrollGrayscale, hoverCenter], ([s, h]) => s * (1 - h))}%)`;

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
                                <Link 
                                    to="/shop/NEW-COLLECTION"
                                    className="flex items-center space-x-6 border border-maroon/30 px-8 py-4 sm:px-10 sm:py-5 rounded-none overflow-hidden relative group"
                                >
                                    <span className="absolute inset-0 bg-maroon translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                                    <span className="relative z-10 uppercase tracking-[0.3em] font-bold text-xs sm:text-sm text-maroon group-hover:text-cream transition-colors duration-500">
                                        Explore Collection
                                    </span>
                                    <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-maroon group-hover:text-cream group-hover:translate-x-2 transition-all duration-500" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Main Visual - Overlapping Images */}
                    <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center">

                        {/* Right Video (Woman) - Now shown on mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-0 right-[-5%] sm:right-0 w-3/4 sm:w-3/5 z-0 group"
                            style={{ filter: filterRight }}
                            whileHover={{ zIndex: 30 }}
                            onMouseEnter={() => animate(hoverRight, 1, { duration: 0.5 })}
                            onMouseLeave={() => animate(hoverRight, 0, { duration: 0.5 })}
                        >
                            <div className="relative overflow-hidden shadow-2xl aspect-[4/5]">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                    src="https://res.cloudinary.com/dmfll2dqf/video/upload/v1770877280/Video_Generation_Complete_1_so2l5y.mp4"
                                />
                            </div>
                        </motion.div>

                        {/* Bottom Left Image (Man) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute bottom-0 left-[-5%] sm:left-0 w-1/2 sm:w-2/5 z-20 group"
                            style={{ filter: filterLeft }}
                            whileHover={{ zIndex: 30 }}
                            onMouseEnter={() => animate(hoverLeft, 1, { duration: 0.5 })}
                            onMouseLeave={() => animate(hoverLeft, 0, { duration: 0.5 })}
                        >
                            <div className="relative overflow-hidden shadow-2xl aspect-[3/4] border-4 border-cream/20">
                                <img
                                    src={maleImg}
                                    alt="Men's Finery"
                                    fetchpriority="high"
                                    decoding="async"
                                    className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>

                        {/* Middle Joint Video - Main Focus - Centered on mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[90%] sm:w-2/3 z-10 group cursor-pointer"
                            onClick={() => setIsVideoOpen(true)}
                            style={{ filter: filterCenter }}
                            whileHover={{ zIndex: 30 }}
                            onMouseEnter={() => animate(hoverCenter, 1, { duration: 0.5 })}
                            onMouseLeave={() => animate(hoverCenter, 0, { duration: 0.5 })}
                        >
                            <div className="relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(76,13,2,0.5)] border-[8px] md:border-[12px] border-cream aspect-video">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    fetchpriority="high"
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
                        { name: 'SWEATER', path: '/shop/MEN' },
                        { name: 'PERFUMES', path: '/shop/LADIES' },
                        { name: 'JEWELLERIES', path: '/shop/LADIES' },
                        { name: 'JEANS', path: '/shop/MEN' },
                        { name: 'JACKETS', path: '/shop/MEN' }
                    ].map((cat, idx) => (
                        <Link
                            key={cat.name}
                            to={cat.path}
                            className="relative group cursor-pointer py-2 px-6 sm:px-0 flex-shrink-0"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + (idx * 0.1) }}
                            >
                                <span className="relative z-10 text-base sm:text-xl lg:text-2xl font-serif text-maroon/70 group-hover:text-maroon transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.25em] inline-block">
                                    {cat.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon group-hover:w-full transition-all duration-500 hidden md:block"></span>
                                </span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
