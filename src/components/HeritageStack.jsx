import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import handImg from '../assets/Hand.png';
import halfFaceImg from '../assets/halfface.png';
import ladyImg from '../assets/Ladyj.png';
import mfImg from '../assets/MFJ.png';

const HeritageStack = () => {
    const cards = [
        {
            title: "Elevated Craftsmanship That Honors Tradition",
            description: "At Honey Drop, craftsmanship begins long before a piece is worn. It begins in selection: premium fabrics, sculpted metals, intentional textures. It continues in construction: measured cuts, balanced proportions, finishes completed by steady hands.",
            img: handImg,
            bgColor: "bg-[#2A0701]",
            textColor: "text-cream",
            hoverTextColor: "text-maroon",
            btnBg: "bg-cream",
            id: "craftsmanship"
        },
        {
            title: "Strength Rooted in Heritage and Identity",
            description: "Our inspiration is drawn from the depth of African culture — its resilience, elegance, and unwavering spirit. We do not replicate tradition; we reinterpret it. Honey Drop is created for individuals who move with certainty. Those who understand that power is not noise, but composure.",
            img: halfFaceImg,
            bgColor: "bg-[#E6C18B]",
            textColor: "text-maroon",
            hoverTextColor: "text-cream",
            btnBg: "bg-maroon",
            id: "heritage"
        },
        {
            title: "Designed Beyond Seasons and Trends",
            description: "Each piece is made to outlast the cycle of fashion — crafted with durability, relevance, and timeless proportion. As seasons change, the integrity remains. These are garments and jewelry meant to move with you through years of growth, milestones, and reinvention. Pieces that gather meaning over time.",
            img: ladyImg,
            bgColor: "bg-[#3D0A02]",
            textColor: "text-cream",
            hoverTextColor: "text-maroon",
            btnBg: "bg-cream",
            id: "longevity"
        }
    ];

    return (
        <section className="relative bg-[#A68966] z-30 py-20">
            {/* Header Section - Standardized Spacing */}
            <div className="container mx-auto px-8 lg:px-16 pb-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-maroon/10 pb-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white uppercase leading-[1.1] tracking-tighter"
                        >
                            THE HERITAGE <br />
                            <span className="text-white italic">COLLECTION.</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* Sticky Cards Container */}
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-0 relative z-10 flex flex-col gap-10">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        className="sticky top-24 md:top-32 w-full origin-top"
                        style={{
                            height: "auto",
                            marginBottom: idx === cards.length - 1 ? "0" : "40vh"
                        }}
                    >
                        <div className={`w-full min-h-[60vh] md:h-[80vh] ${card.bgColor} rounded-sm shadow-2xl overflow-hidden border border-white/5 flex flex-col lg:flex-row relative group`}>
                            {/* Visual Side */}
                            <div className="w-full lg:w-1/2 h-[300px] md:h-auto overflow-hidden relative">
                                <motion.img
                                    initial={{ scale: 1.2 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 2 }}
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-maroon/10 mix-blend-multiply opacity-50`}></div>
                            </div>

                            {/* Content Side */}
                            <div className={`w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center gap-6 md:gap-10 relative ${card.textColor}`}>
                                <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif leading-[1.1] uppercase tracking-tighter">
                                    {card.title}
                                </h3>

                                <p className="text-xs md:text-sm lg:text-base opacity-70 max-w-md leading-relaxed uppercase tracking-widest font-light">
                                    {card.description}
                                </p>

                                {/* Fixed Button Logic - Explicit Hover Colors */}
                                <button className={`w-fit flex items-center gap-6 border px-10 py-5 transition-all duration-700 group/btn relative overflow-hidden ${card.textColor === "text-cream" ? "border-cream/20 hover:border-cream" : "border-maroon/20 hover:border-maroon"}`}>
                                    <span className={`uppercase text-[10px] tracking-[0.5em] font-bold relative z-10 transition-colors duration-500 ${card.textColor === "text-cream" ? "text-cream group-hover/btn:text-maroon" : "text-maroon group-hover/btn:text-cream"}`}>
                                        Explore Collection
                                    </span>
                                    <ArrowRight className={`w-5 h-5 transition-all duration-500 relative z-10 group-hover/btn:translate-x-2 ${card.textColor === "text-cream" ? "text-cream group-hover/btn:text-maroon" : "text-maroon group-hover/btn:text-cream"}`} />
                                    <div className={`absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ${card.textColor === "text-cream" ? "bg-cream" : "bg-maroon"}`}></div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HeritageStack;
