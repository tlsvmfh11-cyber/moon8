import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function Role() {
  return (
    <section id="role" className="py-32 bg-executive-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-white mb-4">The Difference</h2>
            <p className="text-gray-400">담당이 있을 때와 없을 때의 결정적 차이</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without Manager */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-executive-black p-10 border border-white/5 opacity-70 hover:opacity-100 transition-opacity"
            >
                <div className="flex items-center gap-3 mb-8 text-gray-500">
                    <X size={24} />
                    <h3 className="text-2xl font-serif">Without Director</h3>
                </div>
                <ul className="space-y-6 text-gray-400">
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        설명이 중간중간 끊기고 흐름이 루즈함
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        가격 구조를 정확히 모른 채 불안한 진행
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        무의미하게 길어지는 초이스 시간
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full" />
                        계산 시 예상치 못한 금액 발생
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
                    <h3 className="text-2xl font-serif">With DALTO Director</h3>
                </div>
                <ul className="space-y-6 text-gray-200">
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        <strong>처음부터 끝까지</strong> 한 사람이 전담 케어
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        입실 전 <strong>가격·주대 명확한 브리핑</strong>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        손님 성향 파악 후 <strong>맞춤형 큐레이팅</strong>
                    </li>
                    <li className="flex gap-4 items-start">
                        <span className="w-1.5 h-1.5 bg-gold-400 mt-2 rounded-full" />
                        불필요한 과정 생략으로 <strong>피로도 최소화</strong>
                    </li>
                </ul>
            </motion.div>
        </div>
        
        {/* Full Image Banner */}
        <div className="mt-20 relative h-[300px] overflow-hidden">
            <img src="/images/service.jpg" alt="Service Mood" className="w-full h-full object-cover opacity-40 grayscale" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <p className="text-3xl md:text-5xl font-serif text-white italic">"Experience the curated nightlife."</p>
            </div>
        </div>

      </div>
    </section>
  );
}
