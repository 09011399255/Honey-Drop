import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, X, Heart, ShoppingBag, Plus, Minus, ArrowRight, Camera, Maximize2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import ScrollColorWrapper from './ScrollColorWrapper';

// --- STYLED ASSETS IMPORTS ---
import handImg from '../assets/Hand.webp';
import ladyImg from '../assets/Ladyj.webp';
import mfImg from '../assets/MFJ.webp';
import cargoImg from '../assets/Cargo.webp';
import togetherImg from '../assets/Togetherness.webp';
import maleImg from '../assets/Grey.webp';
import blackImg from '../assets/Black.webp';
import jeanImg from '../assets/Jean.webp';
import handgImg from '../assets/Handg.webp';
import jacketImg from '../assets/Jacketj.webp';
import beadImg from '../assets/Bead.webp';
import suitImg from '../assets/suitj.webp';
import twoPieceImg from '../assets/Twopiece.webp';
import hijabiImg from '../assets/Hijabi.webp';
import femaleImg from '../assets/Female.webp';
import halfFaceImg from '../assets/halfface.webp';

// --- ENRICHED PRODUCT DATA ---
const PRODUCTS = {
    MEN: [
        {
            id: 1, name: "Structured Blazer", price: "$450", img: suitImg, category: "Apparel", subCategory: "Outerwear",
            description: "A masterclass in proportions. This structured blazer is crafted from premium wool-blend fabric with a subtle texture. Features clean lines, internal contrast piping, and a tailored silhouette that commands presence.",
            colors: ["#4C0D02", "#1a1a1a", "#2A0701"],
            sizes: ["48", "50", "52", "54"],
            gallery: [suitImg, maleImg, blackImg]
        },
        {
            id: 2, name: "Urban Jean", price: "$180", img: jeanImg, category: "Denim", subCategory: "Jeans",
            description: "Engineered for the modern cityscape. Our Urban Jean combines high-density denim with a comfortable stretch. Deep indigo wash with hand-finished distressing and signature HoneyDrop hardware.",
            colors: ["#000080", "#1a1a1a"],
            sizes: ["30", "32", "34", "36"],
            gallery: [jeanImg, cargoImg]
        },
        { id: 3, name: "Grey Essential", price: "$120", img: maleImg, category: "Core", subCategory: "Shirts", gallery: [maleImg, blackImg] },
        {
            id: 4, name: "Gold Chain Series", price: "$850", img: mfImg, category: "Jewellery", subCategory: "Jewellery",
            description: "Our signature gold-tone chain, inspired by traditional African motifs and modern minimalism. Hand-polished to a brilliant finish.",
            angles: ["Front View", "Side View", "Detail"],
            gallery: [mfImg, handgImg, handImg]
        },
        { id: 5, name: "Heritage Cargo", price: "$220", img: cargoImg, category: "Apparel", subCategory: "Pants", gallery: [cargoImg, jeanImg] },
        { id: 6, name: "Black Silhouette", price: "$150", img: blackImg, category: "Essential", subCategory: "Shirts", gallery: [blackImg, maleImg] },
    ],
    LADIES: [
        {
            id: 7, name: "Bespoke Outerwear", price: "$520", img: ladyImg, category: "Apparel", subCategory: "Outerwear",
            description: "Elegance redefined for the contemporary woman. This bespoke coat features an exaggerated collar and a cinch-waist silhouette.",
            colors: ["#E6D3B1", "#4C0D02", "#B08D57"],
            sizes: ["XS", "S", "M", "L"],
            gallery: [ladyImg, togetherImg]
        },
        { id: 8, name: "Gold Droplets", price: "$320", img: handgImg, category: "Jewellery", subCategory: "Jewellery", gallery: [handgImg, handImg] },
        { id: 9, name: "Silk Expression", price: "$280", img: femaleImg, category: "Lounge", subCategory: "Set", gallery: [femaleImg, twoPieceImg] },
        { id: 10, name: "Two Piece Set", price: "$380", img: twoPieceImg, category: "Ensemble", subCategory: "Set", gallery: [twoPieceImg, femaleImg] },
        { id: 11, name: "Heritage Headpiece", price: "$190", img: hijabiImg, category: "Accessory", subCategory: "Accessory", gallery: [hijabiImg] },
        { id: 12, name: "Crafted Ring", price: "$1,200", img: handImg, category: "Jewellery", subCategory: "Jewellery", gallery: [handImg, handgImg] },
    ],
    "NEW-COLLECTION": [
        { id: 13, name: "Beaded Heritage", price: "$410", img: beadImg, category: "Look 01", subCategory: "Exclusive", gallery: [beadImg] },
        { id: 14, name: "Structured Jacket", price: "$720", img: jacketImg, category: "Look 02", subCategory: "Outerwear", gallery: [jacketImg] },
        { id: 15, name: "Togetherness Silk", price: "$350", img: togetherImg, category: "Ensemble", subCategory: "Set", gallery: [togetherImg] },
        { id: 16, name: "The Gold Drop", price: "$980", img: mfImg, category: "Jewellery", subCategory: "Jewellery", gallery: [mfImg] },
    ]
};

// --- SUB-CATEGORIES FOR TABS - NOW DYNAMICALLY SYNCED ---
const SUB_CATEGORIES = {
    MEN: ["All", "Shirts", "Outerwear", "Jeans", "Pants", "Jewellery"],
    LADIES: ["All", "Set", "Outerwear", "Lounge", "Jewellery", "Accessory"],
    "NEW-COLLECTION": ["All", "Exclusive", "Outerwear", "Set", "Jewellery"]
};

const Shop = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [selectedSubCat, setSelectedSubCat] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);

    const onBack = () => navigate('/');

    const products = PRODUCTS[category] || [];
    const filteredProducts = selectedSubCat === "All"
        ? products
        : products.filter(p => p.subCategory === selectedSubCat);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsProductModalOpen(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-cream pt-32 pb-20 overflow-x-hidden"
        >
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-12">
                    <div className="relative">
                        <motion.button
                            onClick={onBack}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-maroon/60 hover:text-maroon mb-8 group transition-colors uppercase tracking-[0.3em] text-[10px] font-bold"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Heritage
                        </motion.button>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-maroon uppercase leading-[0.8] tracking-tighter"
                        >
                            {category?.replace("-", " ").split(" ")[0]} <br />
                            <span className="text-gold italic pl-8 md:pl-20">{category?.replace("-", " ").split(" ")[1] || "SERIES"}</span>
                        </motion.h1>
                    </div>

                    {/* Navigation Tabs - Refined as per user request */}
                    <div className="w-full lg:w-auto overflow-x-auto scrollbar-hide">
                        <div className="flex items-center gap-8 border-b border-maroon/10 pb-4 min-w-max whitespace-nowrap">
                            {SUB_CATEGORIES[category]?.map((sc) => (
                                <button
                                    key={sc}
                                    onClick={() => setSelectedSubCat(sc)}
                                    className={`text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase transition-all relative ${selectedSubCat === sc ? 'text-maroon translate-y-[-2px]' : 'text-maroon/30 hover:text-maroon/60'}`}
                                >
                                    {sc}
                                    {selectedSubCat === sc && (
                                        <motion.div layoutId="tab-underline" className="absolute -bottom-4 left-0 w-full h-[2px] bg-gold" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid - Editorial Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 sm:gap-y-24">
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} onClick={() => handleProductClick(product)} />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="py-40 text-center">
                        <p className="font-serif text-2xl text-maroon/30 italic uppercase tracking-widest">No pieces found in this category.</p>
                    </div>
                )}
            </div>

            {/* Product Detail Modal */}
            <AnimatePresence>
                {isProductModalOpen && selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setIsProductModalOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Aesthetic Background Elements */}
            <div className="fixed top-1/2 left-0 -translate-x-1/2 w-[800px] h-[800px] bg-maroon/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        </motion.div>
    );
};

// --- PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, index, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group cursor-pointer flex flex-col ${index % 2 === 1 ? 'md:mt-20' : ''}`}
            onClick={onClick}
        >
            <div className="relative aspect-[3/4] overflow-hidden bg-maroon/5 mb-8">
                <ScrollColorWrapper className="w-full h-full">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale hover:grayscale-0"
                    />
                </ScrollColorWrapper>

                {/* Product Overlay Tags */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-cream/90 backdrop-blur-md px-3 py-1 text-[8px] font-bold tracking-[0.2em] text-maroon uppercase">
                        {product.subCategory}
                    </span>
                </div>

                <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
                    <div className="bg-cream/10 backdrop-blur-md border border-cream/20 px-8 py-3 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <span className="text-[10px] font-bold tracking-[0.4em] text-cream uppercase whitespace-nowrap">Explore Piece</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl md:text-2xl font-serif text-maroon uppercase tracking-tight mb-2">
                        {product.name}
                    </h3>
                    <p className="text-[10px] tracking-[0.4em] text-maroon/50 uppercase font-bold">Ref. HD-0{product.id}</p>
                </div>
                <span className="text-lg font-light text-maroon/80">{product.price}</span>
            </div>

            <div className="h-px bg-maroon/10 mt-6 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        </motion.div>
    );
};

// --- PRODUCT MODAL COMPONENT ---
const ProductModal = ({ product, onClose }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
    const [activeImage, setActiveImage] = useState(product.img);
    const [quantity, setQuantity] = useState(1);

    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'auto'; };
    }, []);

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-0 md:px-4 py-0 md:py-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-maroon/95 backdrop-blur-3xl"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 35, stiffness: 220 }}
                className="relative w-full max-w-7xl h-full md:h-[90vh] bg-cream overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image Side - Now with gallery/angles */}
                <div className="w-full md:w-3/5 h-[400px] md:h-full bg-maroon/5 relative flex flex-col">
                    <div className="flex-1 overflow-hidden relative group">
                        <AnimatePresence mode='wait'>
                            <motion.img
                                key={activeImage}
                                src={activeImage}
                                alt={product.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 to-transparent pointer-events-none"></div>

                        {/* Top Controls */}
                        <div className="absolute top-8 left-8 flex gap-4">
                            <button className="bg-cream/10 backdrop-blur-xl border border-cream/20 p-3 text-cream hover:bg-cream hover:text-maroon transition-all">
                                <Maximize2 size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Gallery / Angles Thumbnails */}
                    {product.gallery && (
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 p-2 bg-cream/10 backdrop-blur-xl border border-cream/20">
                            {product.gallery.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(img)}
                                    className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all ${activeImage === img ? 'border-maroon opacity-100 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}

                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 md:hidden bg-cream p-3 rounded-full text-maroon shadow-2xl z-20"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/5 h-full overflow-y-auto bg-cream p-8 md:p-12 lg:p-16 flex flex-col">
                    <div className="hidden md:flex justify-end mb-12">
                        <button onClick={onClose} className="text-maroon/20 hover:text-maroon transition-colors group">
                            <X size={36} className="group-hover:rotate-90 transition-transform" />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1">
                        {/* Title & Meta */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[10px] tracking-[0.5em] text-maroon/40 font-bold uppercase">{product.category}</span>
                                <div className="h-px w-8 bg-maroon/10"></div>
                                <span className="text-[10px] tracking-[0.5em] text-gold font-bold uppercase">{product.subCategory}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-maroon uppercase tracking-tighter leading-[0.9] mb-8">
                                {product.name}
                            </h2>
                            <p className="text-3xl font-light text-maroon tracking-tight">{product.price}</p>
                        </div>

                        {/* Description */}
                        <p className="text-base text-maroon/70 leading-relaxed font-light mb-12 border-l border-maroon/10 pl-8 italic">
                            {product.description || "A signature HoneyDrop piece, meticulously crafted to endure beyond seasons. This item embodies our commitment to modern luxury and African heritage."}
                        </p>

                        {/* Product Specific Options */}
                        <div className="space-y-12 mb-16">
                            {/* Angles / Gallery Toggle for Jewelry */}
                            {product.category === "Jewellery" && product.angles && (
                                <div>
                                    <p className="text-[10px] tracking-[0.3em] font-bold text-maroon uppercase mb-6 flex items-center gap-2">
                                        <Camera size={14} className="text-gold" /> View Angles
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {product.angles.map((angle, i) => (
                                            <button
                                                key={angle}
                                                onClick={() => setActiveImage(product.gallery[i])}
                                                className={`px-4 py-2 border text-[10px] font-bold tracking-widest uppercase transition-all ${activeImage === product.gallery[i] ? 'bg-maroon text-cream border-maroon' : 'border-maroon/10 text-maroon/40 hover:border-maroon/30'}`}
                                            >
                                                {angle}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Sizes */}
                            {product.sizes && (
                                <div>
                                    <p className="text-[10px] tracking-[0.3em] font-bold text-maroon uppercase mb-6">Select Size</p>
                                    <div className="flex flex-wrap gap-3">
                                        {product.sizes.map(size => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`min-w-[55px] h-[55px] border flex items-center justify-center text-[11px] font-bold transition-all duration-500 ${selectedSize === size ? 'bg-maroon text-cream border-maroon shadow-xl' : 'border-maroon/10 text-maroon hover:border-maroon/40'}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Colors */}
                            {product.colors && (
                                <div>
                                    <p className="text-[10px] tracking-[0.3em] font-bold text-maroon uppercase mb-6">Explore Shades</p>
                                    <div className="flex gap-5">
                                        {product.colors.map(color => (
                                            <button
                                                key={color}
                                                onClick={() => setSelectedColor(color)}
                                                className={`w-12 h-12 rounded-full border-[1px] transition-all p-1 ${selectedColor === color ? 'border-gold scale-110 shadow-[0_0_20px_rgba(0,0,0,0.1)]' : 'border-transparent opacity-40 hover:opacity-100'}`}
                                            >
                                                <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color }}></div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quantity & Actions */}
                        <div className="mt-auto border-t border-maroon/10 pt-12 space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-8 bg-maroon/[0.03] px-6 py-4">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-maroon/40 hover:text-maroon transition-colors"><Minus size={18} /></button>
                                    <span className="text-sm font-bold w-6 text-center">{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)} className="text-maroon/40 hover:text-maroon transition-colors"><Plus size={18} /></button>
                                </div>
                                <button className="flex items-center gap-3 text-[10px] tracking-[0.3em] font-bold text-maroon/40 hover:text-maroon transition-colors group">
                                    <Heart size={18} className="group-hover:fill-maroon transition-all" />
                                    <span className="hidden sm:inline">ADD TO WISHLIST</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button className="bg-maroon text-cream py-7 uppercase tracking-[0.6em] text-[10px] font-bold hover:bg-black transition-all flex items-center justify-center gap-4 group shadow-xl">
                                    <ShoppingBag size={14} className="group-hover:-translate-y-1 transition-transform" />
                                    Add to Bag
                                </button>
                                <button className="border border-maroon text-maroon py-7 uppercase tracking-[0.6em] text-[10px] font-bold hover:bg-maroon hover:text-cream transition-all duration-700">
                                    Buy it Now
                                </button>
                            </div>

                            <p className="text-[9px] text-center text-maroon/30 tracking-[0.2em] font-medium uppercase">Free global shipping on orders above $1,500</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Shop;
