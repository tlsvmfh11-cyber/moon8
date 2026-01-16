import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-executive-gray">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden aspect-video"
            >
                <img src="/images/pricing.jpg" alt="Pricing" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 border border-gold-400/20" />
            </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-serif text-white mb-8">
                    가격에서<br />
                    담당이 중요한 이유
                </h2>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                    강남 달토의 가격은 요일이나 시간대에 따라 유동적입니다.<br />
                    그래서 "보통 이쯤 나와요"라는 애매한 말은 위험합니다.<br />
                    <strong className="text-white">담당이 직접 현재 기준으로 설명해야 정확합니다.</strong>
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="bg-white/5 p-6 border-l-2 border-gold-400">
                        <p className="text-white font-bold mb-1">Time-based</p>
                        <p className="text-sm text-gray-500">현재 시간대 기준 적용</p>
                    </div>
                    <div className="bg-white/5 p-6 border-l-2 border-gold-400">
                        <p className="text-white font-bold mb-1">Capacity</p>
                        <p className="text-sm text-gray-500">현재 인원/상황 기준</p>
                    </div>
                </div>

                <p className="text-gold-400 font-serif italic text-lg">
                    "달리는토끼 시절부터 이어온 투명한 원칙,<br />
                    정해진 기준에서 절대 벗어나지 않습니다."
                </p>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
