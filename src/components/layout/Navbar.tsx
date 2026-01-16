import { useState, useEffect } from 'react';
import { Menu, X, Phone, Send } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Introduction', href: '#intro' },
    { name: 'Manager Role', href: '#role' },
    { name: 'System', href: '#system' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-executive-black/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col">
          <span className="text-2xl font-serif font-bold text-white tracking-widest">DALTO</span>
          <span className="text-[10px] text-gold-400 tracking-[0.3em] uppercase">Executive Lounge</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-400 hover:text-gold-400 transition-colors text-xs font-bold uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <div className="w-[1px] h-4 bg-white/20" />
          <a href="https://t.me/hscompanyshs" target="_blank" className="text-white hover:text-[#0088cc] transition-colors">
            <Send size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-executive-gray border border-white/10 rounded-sm p-6 shadow-2xl flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-serif text-center text-gray-300 hover:text-gold-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-[1px] bg-white/10 w-full" />
            <div className="flex justify-center gap-6">
                <a href="tel:01023033778" className="flex items-center gap-2 text-white">
                    <Phone size={18} className="text-gold-400" /> Call
                </a>
                <a href="https://t.me/hscompanyshs" target="_blank" className="flex items-center gap-2 text-white">
                    <Send size={18} className="text-[#0088cc]" /> Telegram
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
