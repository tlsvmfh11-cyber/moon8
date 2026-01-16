import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section id="pricing" ref={containerRef} className="py-32 bg-executive-gray">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden aspect-video">
                <motion.div style={{ y, scale: 1.2 }} className="w-full h-full absolute inset-0">
                    <img src="/images/pricing.jpg" alt="Pricing" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
                <div className="absolute inset-0 border border-gold-400/20 z-10 pointer-events-none" />
            </div>
        </div>

        <div className="w-full lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                    가격에서<br />
                    <span className="text-gold-400">담당이 중요한 이유</span>
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg font-medium leading-relaxed break-keep">
                    <p>
                        강남 달토 가격, 달토 주대는 요일이나 시간대에 따라 달라질 수 있습니다. 
                        그래서 더더욱 담당이 중요합니다.
                    </p>
                    <p>
                        담당이 없는 구조에서는 “이 정도일 거예요”, “보통 이쯤 나와요” 같은 애매한 말이 나옵니다.
                    </p>
                    <p className="text-white font-bold">
                        강남 달토에서는 담당이 직접 현재 기준으로 설명합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                    <div className="bg-white/5 p-4 border-l-2 border-gold-400">
                        <p className="text-white font-bold text-sm">지금 시간대 기준</p>
                    </div>
                    <div className="bg-white/5 p-4 border-l-2 border-gold-400">
                        <p className="text-white font-bold text-sm">지금 인원 기준</p>
                    </div>
                    <div className="bg-white/5 p-4 border-l-2 border-gold-400">
                        <p className="text-white font-bold text-sm">오늘 상황 기준</p>
                    </div>
                </div>

                <p className="text-gray-300 font-medium leading-relaxed">
                    이렇게 설명하고 그 기준에서 벗어나지 않게 진행합니다. 
                    그래서 달리는토끼, 런닝레빗 시절부터 가격 문제로 불편해지는 경우가 거의 없었습니다.
                </p>
            </motion.div>
        </div>

      </div>
    </section>
  );
}