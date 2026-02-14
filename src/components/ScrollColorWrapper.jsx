import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollColorWrapper = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Dynamic color transition based on scroll position - center of screen is fully colored
    const filter = useTransform(
        scrollYProgress,
        [0, 0.25, 0.75, 1],
        ["grayscale(100%)", "grayscale(0%)", "grayscale(0%)", "grayscale(100%)"]
    );

    return (
        <motion.div
            ref={ref}
            style={{ filter }}
            whileHover={{ filter: "grayscale(0%)", transition: { duration: 0.5 } }}
            className={`relative overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default ScrollColorWrapper;
