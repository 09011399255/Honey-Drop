import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollColorWrapper from './ScrollColorWrapper';

import handImg from '../assets/Hand.webp';
import handgImg from '../assets/Handg.webp';
import halfFaceImg from '../assets/halfface.webp';
import mfImg from '../assets/MFJ.webp';

const Craftsmanship = () => {
    const cards = [
        { title: "The Ring Collection", img: handImg, path: "/shop/LADIES" },
        { title: "Timeless Earrings", img: halfFaceImg, path: "/shop/LADIES" },
        { title: "Diamond Series", img: handgImg, path: "/shop/LADIES" }
    ];

    return (
        <section className="bg-maroon text-cream py-20 relative overflow-hidden">
            {/* Sophisticated Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#E6D3B1 1px, transparent 1px), linear-gradient(90deg, #E6D3B1 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            {/* Aesthetic Light Glows */}
            <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-24 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-serif max-w-4xl uppercase tracking-tight leading-[1.1] text-left"
                    >
                        CRAFTED TO BE WORN, <br />
                        REMEMBERED, AND <br />
                        <span className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '120px' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-12 md:h-20 lg:h-24 overflow-hidden rounded-sm"
                            >
                                <img src={mfImg} alt="Jewelry Detail" className="w-full h-full object-cover scale-150 rotate-12" />
                            </motion.div>
                            PASSED ON
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-cream/60 max-w-sm text-sm md:text-base leading-relaxed font-light text-left"
                    >
                        The finest pieces are not chosen for a moment, they are chosen for a lifetime. Our jewellery is designed to evolve with its wearer.
                    </motion.p>
                </div>

                {/* Product Grid - Optimized for common screen heights and mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[500px] md:h-[700px]">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="relative group overflow-hidden h-[450px] md:h-full cursor-pointer rounded-sm shadow-xl"
                        >
                            <ScrollColorWrapper className="w-full h-full">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                />
                            </ScrollColorWrapper>
                            <div className="absolute inset-0 bg-maroon/30 group-hover:bg-transparent transition-colors duration-700"></div>

                            {/* Button Overlay - Forced Contrast */}
                            <div className="absolute inset-0 flex items-end justify-center pb-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <Link
                                    to={card.path}
                                    className="flex items-center space-x-6 border border-cream/50 bg-maroon/60 backdrop-blur-md px-10 py-5 rounded-none hover:bg-cream transition-all duration-500 group/btn"
                                >
                                    <span className="uppercase tracking-[0.3em] font-bold text-xs text-cream group-hover/btn:text-maroon transition-colors duration-500">
                                        Explore Collection
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-cream group-hover/btn:text-maroon group-hover/btn:translate-x-2 transition-all duration-500" />
                                </Link>
                            </div>

                            {/* Title Overlay */}
                            <div className="absolute top-8 left-8 transition-transform duration-700 group-hover:-translate-y-2">
                                <p className="text-[10px] tracking-[0.5em] font-bold uppercase text-cream/60 mb-2">Heritage Selection</p>
                                <h3 className="text-xl font-serif text-cream uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700">{card.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Craftsmanship;
