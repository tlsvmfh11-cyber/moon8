import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 500]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <motion.div style={{ y }} className="w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-executive-black/60 via-executive-black/40 to-executive-black z-10" />
            <img 
              src="/images/hero.jpg" 
              alt="Executive Lounge" 
              className="w-full h-full object-cover object-center" 
            />
        </motion.div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-gold-400/50" />
            <span className="text-gold-400 tracking-[0.3em] text-xs font-bold uppercase">Private Concierge</span>
            <span className="h-[1px] w-12 bg-gold-400/50" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            강남 달토 <span className="text-gold-gradient">담당대표</span> 진행<br />
            <span className="text-gray-400 text-2xl md:text-4xl font-normal">달리는토끼 가격 주대 후기</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            강남 달토·달리는토끼 하이퍼블릭.<br />
            같은 공간, 같은 시스템이라도 <strong className="text-white">누가 진행하느냐</strong>에 따라<br />
            당신의 밤은 완벽히 달라집니다.
          </p>

          <a 
            href="#contact"
            className="inline-block px-12 py-5 border border-gold-400/30 bg-gold-400/10 backdrop-blur-sm text-gold-400 font-bold hover:bg-gold-400 hover:text-black transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Contact Director
          </a>
        </motion.div>
      </div>
    </section>
  );
}