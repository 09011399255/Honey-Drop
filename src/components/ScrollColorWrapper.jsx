import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollColorWrapper = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Fade from grayscale(100%) to grayscale(0%) as it enters the viewport
    // We want it to be fully colored by the time it's roughly in the middle of the screen
    const filter = useTransform(
        scrollYProgress,
        [0, 0.4],
        ["grayscale(100%)", "grayscale(0%)"]
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
