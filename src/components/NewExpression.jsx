import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import ladyImg from '../assets/Ladyj.png';
import cargoImg from '../assets/Cargo.png';
import maleImg from '../assets/Malej.png';

const NewExpression = () => {
    const collections = [
        { title: "Bespoke Outerwear", img: ladyImg, label: "Heritage 2026" },
        { title: "Structured Silhouettes", img: cargoImg, label: "Modern Fit" },
        { title: "Urban Essential", img: maleImg, label: "Core Series" }
    ];

    return (
        <section className="bg-[#A68966] py-20 relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')`
                }}></div>
            </div>

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-end justify-between mb-24 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/3"
                    >
                        <p className="text-maroon/90 text-lg leading-relaxed font-light italic border-l-2 border-maroon/20 pl-8">
                            At Honey Drop, luxury is not excess — it is intention. Every fabric selected, every silhouette refined, every detail considered. We create pieces that carry presence without noise and power without effort.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-3/5 text-right"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-maroon uppercase leading-none tracking-tighter">
                            A NEW EXPRESSION <br />
                            <span className="text-cream italic block mt-2">OF AFRICAN LUXURY</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Vertical Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {collections.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group aspect-[3/4] overflow-hidden shadow-2xl bg-maroon/5"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105"
                            />

                            {/* Gradient Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>

                            {/* Hover UI */}
                            <motion.div
                                className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center gap-6"
                            >
                                <button className="w-full flex items-center justify-between border border-cream/30 bg-maroon/40 backdrop-blur-xl px-8 py-4 rounded-none hover:bg-cream hover:text-maroon transition-all duration-500 group/link">
                                    <span className="uppercase tracking-[0.4em] font-bold text-[10px] text-cream group-hover/link:text-maroon">
                                        Explore Collection
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-cream group-hover/link:text-maroon group-hover/link:translate-x-2 transition-all duration-500" />
                                </button>
                            </motion.div>

                            {/* Static Metadata */}
                            <div className="absolute top-8 left-8 mix-blend-difference pointer-events-none">
                                <span className="text-[10px] tracking-[0.6em] font-bold text-cream/70 uppercase block mb-2">{item.label}</span>
                                <h3 className="text-2xl font-serif text-cream uppercase">{item.title}</h3>
                            </div>

                            {/* Decorative Edge Glow */}
                            <div className="absolute inset-0 border-[0.5px] border-cream/10 pointer-events-none group-hover:border-cream/30 transition-colors duration-700"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewExpression;
