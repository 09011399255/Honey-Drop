import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            >
                <motion.button
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-8 right-8 text-cream hover:text-gold z-[110]"
                    onClick={onClose}
                >
                    <X size={40} />
                </motion.button>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative w-full max-w-6xl aspect-video bg-maroon shadow-[0_0_100px_rgba(176,141,87,0.3)] overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <video
                        autoPlay
                        controls
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dmfll2dqf/video/upload/v1770877280/Video_Generation_Complete_1_so2l5y.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute inset-0 pointer-events-none border-[1px] border-gold/20"></div>

                    <div className="absolute bottom-6 left-6 text-cream/50 text-[10px] tracking-[0.4em] uppercase">
                        HoneyDrop Finery | Film Series 01
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default VideoModal;
