import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/HoneyDrop.svg';

const Navbar = ({ onNavigate, activeView }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', id: 'LANDING' },
        { name: 'MEN', id: 'MEN' },
        { name: 'LADIES', id: 'LADIES' },
        { name: 'NEW COLLECTION', id: 'NEW COLLECTION' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled || activeView !== 'LANDING' ? 'bg-cream/80 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-8'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-maroon">
                    {/* Brand Logo */}
                    <div
                        className="flex items-center gap-4 group cursor-pointer"
                        onClick={() => onNavigate('LANDING')}
                    >
                        <img src={logo} alt="Honey Drop Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                        <div className="hidden md:block h-8 w-px bg-maroon/20 group-hover:h-10 transition-all duration-500"></div>
                        <div className="hidden md:block text-xs font-bold tracking-[0.4em] overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="block"
                            >
                                HONEY DROP
                            </motion.span>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => onNavigate(link.id)}
                                className={`text-[10px] font-bold tracking-[0.3em] transition-colors relative group ${activeView === link.id ? 'text-gold' : 'hover:text-gold'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${activeView === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </button>
                        ))}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <button className="hidden sm:block hover:scale-110 transition-transform"><Search size={20} strokeWidth={1.5} /></button>
                        <button className="relative hover:scale-110 transition-transform">
                            <ShoppingBag size={20} strokeWidth={1.5} />
                        </button>
                        <button className="bg-maroon text-cream px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] hover:bg-gold hover:text-maroon transition-all duration-500 hidden sm:block">
                            SIGN UP
                        </button>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[110] bg-maroon text-cream flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-20">
                            <img src={logo} alt="Honey Drop Logo" className="w-10 h-10 object-contain brightness-0 invert" />
                            <button onClick={() => setMobileMenuOpen(false)} className="p-2 border border-cream/20 rounded-full">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                    onClick={() => {
                                        onNavigate(link.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`text-4xl font-serif uppercase tracking-tight text-left hover:text-gold transition-colors ${activeView === link.id ? 'text-gold' : ''}`}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>

                        <div className="mt-auto border-t border-cream/10 pt-12 flex flex-col gap-8">
                            <div className="flex gap-8">
                                <Instagram size={20} className="cursor-pointer hover:text-gold transition-colors" />
                                <Twitter size={20} className="cursor-pointer hover:text-gold transition-colors" />
                                <ShoppingBag size={20} className="cursor-pointer hover:text-gold transition-colors" />
                            </div>
                            <p className="text-[10px] tracking-[0.4em] opacity-50 uppercase">© 2026 HONEY DROP FINERY</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
