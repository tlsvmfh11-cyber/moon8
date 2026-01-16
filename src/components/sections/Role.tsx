import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { X, Check } from 'lucide-react';

export default function Role() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section id="role" className="py-32 bg-executive-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">담당이 있을 때와 없을 때 차이</h2>
            <p className="text-gray-400 font-medium mt-4">이 부분은 실제로 와보신 분들이 제일 크게 느끼는 부분입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Without Manager */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-executive-black p-10 border border-white/5 opacity-70"
            >
                <div className="flex items-center gap-3 mb-8 text-gray-500">
                    <X size={24} />
                    <h3 className="text-2xl font-serif">담당이 없는 경우</h3>
                </div>
                <ul className="space-y-6 text-gray-400 font-medium">
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        설명이 중간중간 끊김
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        가격 구조를 정확히 모른 채 진행
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        초이스가 길어지고 분위기 애매
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        나중에 계산하면서 기분 상함
                    </li>
                </ul>
            </motion.div>

            {/* With Manager */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-executive-light p-10 border border-gold-400/30 relative shadow-2xl"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-400" />
                <div className="flex items-center gap-3 mb-8 text-gold-400">
                    <Check size={24} />
                    <h3 className="text-2xl font-serif">담당이 있는 경우 (강남 달토 방식)</h3>
                </div>
                <ul className="space-y-6 text-gray-200 font-medium">
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        처음부터 끝까지 한 사람이 진행
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        가격·주대 먼저 설명
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        손님 성향에 맞게 초이스 정리
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        필요 없는 과정 생략
                    </li>
                </ul>
            </motion.div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 text-lg font-medium leading-relaxed">
                같은 강남 달토, 같은 달리는토끼 구조여도<br />
                이 차이 때문에 만족도가 완전히 달라집니다.
            </p>
        </div>

        {/* Full Image Banner Parallax */}
        <div ref={containerRef} className="mt-20 relative h-[300px] overflow-hidden w-full">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[160%] -top-[30%]">
                <img src="/images/service.jpg" alt="Service Mood" className="w-full h-full object-cover opacity-40 grayscale" />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                <p className="text-3xl md:text-5xl font-serif text-white italic drop-shadow-lg text-center px-6">"담당이 결과의 차이를 만듭니다."</p>
            </div>
        </div>

      </div>
    </section>
  );
}