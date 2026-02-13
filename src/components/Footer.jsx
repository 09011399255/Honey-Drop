import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Twitter, Mail } from 'lucide-react';
import togetherImg from '../assets/Togetherness.webp';

const Footer = () => {
    return (
        <footer className="bg-[#A68966] pt-20 relative overflow-hidden">
            {/* Dramatic Call to Action Section */}
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="bg-maroon rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(76,13,2,0.6)] mb-6 sm:mb-20 relative group">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(#E6D3B1 1px, transparent 1px), linear-gradient(90deg, #E6D3B1 1px, transparent 1px)`,
                            backgroundSize: '30px 30px'
                        }}></div>
                    </div>

                    <div className="flex flex-col items-center text-center py-10 sm:py-24 px-8 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-3xl md:text-6xl lg:text-7xl font-serif text-cream uppercase leading-tight mb-8"
                        >
                            WHERE CRAFT IS LIVED, AND <br />
                            PRESENCE IS EXPERIENCED.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-cream/50 max-w-2xl text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed mb-10 font-light"
                        >
                            Luxury is not fully understood in photographs — it is understood in movement, in texture, in the quiet confidence it brings. These reflections come from individuals who have stepped into Honey Drop and made it part of their everyday expression.
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-6 border border-cream/30 bg-maroon/40 backdrop-blur-xl px-10 py-5 sm:px-12 sm:py-6 rounded-none hover:bg-cream transition-all duration-500 group/btn"
                        >
                            <span className="uppercase tracking-[0.4em] font-bold text-[10px] text-cream group-hover/btn:text-maroon transition-colors duration-500">
                                Explore Collection
                            </span>
                            <ArrowRight className="w-5 h-5 text-cream group-hover/btn:text-maroon group-hover/btn:translate-x-2 transition-all duration-500" />
                        </motion.button>

                        {/* Dramatic Centerpiece Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-8 sm:mt-20 w-full max-w-5xl aspect-video md:aspect-[21/9] overflow-hidden rounded-sm border-4 border-cream/10 shadow-2xl relative"
                        >
                            <img
                                src={togetherImg}
                                alt="The Collective"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s] ease-out scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-maroon/20 mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity duration-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Brand Bar */}
            <div className="bg-maroon text-cream py-10 sm:py-16 px-6 md:px-16 border-t border-cream/5 relative z-10 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12 sm:mb-20 relative">
                        {/* Massive Brand Name - Fixed Tracking and Responsiveness */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full flex justify-center md:justify-start"
                        >
                            <h1 className="text-[14vw] md:text-[10vw] lg:text-[12rem] font-serif uppercase leading-none opacity-90 tracking-[-0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
                                HONEYDROP
                            </h1>
                        </motion.div>

                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 border-t border-cream/10 pt-10">
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-8 lg:gap-x-12 gap-y-6">
                            {['WEBSITE', 'INSTAGRAM', 'TWITTER', 'DRIBBBLE'].map((item) => (
                                <a key={item} href="#" className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold hover:text-gold transition-colors duration-300 group relative">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500"></span>
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right w-full md:w-auto">
                            <div className="flex flex-wrap justify-center md:justify-end gap-6 lg:gap-10 text-[9px] md:text-[10px] tracking-[0.2em] font-light opacity-60 uppercase">
                                <a href="#" className="hover:text-cream transition-colors">Home</a>
                                <a href="#" className="hover:text-cream transition-colors">Men</a>
                                <a href="#" className="hover:text-cream transition-colors">Ladies</a>
                                <a href="#" className="hover:text-cream transition-colors">New Collection</a>
                            </div>
                            <p className="text-[9px] md:text-[10px] tracking-[0.1em] font-light opacity-30 mt-4">
                                © 2026. ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dynamic Background Element */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-maroon z-0"></div>
        </footer>
    );
};

export default Footer;
