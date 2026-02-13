import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import halffaceImg from '../assets/halfface.webp';
import jeanImg from '../assets/Jean.webp';
import cargoImg from '../assets/Cargo.webp';
import handgImg from '../assets/Handg.webp';

const Testimonials = () => {
    const testimonials = [
        {
            text: "The fit is intentional, the materials feel substantial, and the finish is immaculate. It's rare to find a brand that blends heritage and contemporary design so seamlessly.",
            author: "Zara T.",
            img: halffaceImg,
            delay: 0
        },
        {
            text: "What impressed me most was the balance, refined yet strong, modern yet rooted. I've worn luxury brands before, but this feels different. It feels personal, almost like it was created with me in mind.",
            author: "Daniel O.",
            img: jeanImg,
            delay: 0.2
        },
        {
            text: "There's something powerful about how understated the designs are. They don't try too hard, yet they completely command attention.",
            author: "Kofi A.",
            img: cargoImg,
            delay: 0.4
        },
        {
            text: "From the moment I unboxed it, I could feel the difference. The structure, the fabric, the detailing, everything felt deliberate. It's not just clothing; it feels like wearing intention.",
            author: "Adaeze M.",
            img: handgImg,
            delay: 0.6
        }
    ];

    return (
        <section className="bg-maroon text-cream py-32 relative z-40 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#E6D3B1 1px, transparent 1px), linear-gradient(90deg, #E6D3B1 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}></div>
            </div>

            <div className="container mx-auto px-8 lg:px-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif max-w-4xl uppercase tracking-tighter leading-none mb-32"
                >
                    VOICES FROM THOSE <br />
                    WHO KNOW THE <br />
                    DIFFERENCE.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
                    {testimonials.map((t, idx) => (
                        <TestimonialCard key={idx} testimonial={t} index={idx} />
                    ))}
                </div>

                <div className="mt-40 flex justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-right"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif uppercase tracking-tighter leading-none">
                            THE STANDARD <br />
                            <span className="text-gold italic">SPEAKS FOR ITSELF.</span>
                        </h2>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: testimonial.delay, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col gap-8 group ${index % 2 === 0 ? 'mt-0' : 'lg:mt-32'}`}
        >
            {/* Continuous Floating Animation Container */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: index % 2 === 0 ? [0, 1, 0] : [0, -1, 0]
                }}
                transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative aspect-[3/4] overflow-hidden shadow-2xl border border-white/5 cursor-pointer"
            >
                <motion.img
                    src={testimonial.img}
                    alt={testimonial.author}
                    initial={{ grayscale: 1, brightness: 0.7 }}
                    whileInView={{ grayscale: 0, brightness: 1 }}
                    viewport={{ margin: "-150px" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />

                {/* Micro-Interaction Highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
                <div className="absolute top-4 right-4 text-[8px] tracking-[0.5em] text-cream/40 opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">
                    Ref 00{index + 1}
                </div>

                {/* Mobile-Friendly "Glow" indicator */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-gold/30 transition-colors duration-500"></div>
            </motion.div>

            {/* Testimonial Text */}
            <div className="flex flex-col gap-6 relative">
                <p className="text-sm md:text-base text-cream/70 font-light leading-relaxed italic border-l border-gold/30 pl-6 group-hover:text-cream transition-colors duration-500">
                    "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pl-6">
                    <div className="h-px w-8 bg-gold/50"></div>
                    <span className="text-sm font-serif uppercase tracking-widest text-gold">{testimonial.author}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonials;
