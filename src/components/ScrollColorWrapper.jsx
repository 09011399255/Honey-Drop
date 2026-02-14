import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

const ScrollColorWrapper = ({ children, className = "" }) => {
    const ref = useRef(null);
    const hoverVal = useMotionValue(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const scrollGrayscale = useTransform(
        scrollYProgress,
        [0, 0.4],
        [100, 0]
    );

    // Combine scroll and hover: grayscale = scrollGrayscale * (1 - hoverValue)
    const filter = useMotionTemplate`grayscale(${useTransform([scrollGrayscale, hoverVal], ([s, h]) => s * (1 - h))}%)`;

    return (
        <motion.div
            ref={ref}
            onMouseEnter={() => animate(hoverVal, 1, { duration: 0.5 })}
            onMouseLeave={() => animate(hoverVal, 0, { duration: 0.5 })}
            style={{ filter }}
            className={`relative overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default ScrollColorWrapper;
