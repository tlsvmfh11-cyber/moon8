import { motion } from 'framer-motion';

const systems = [
    {
        step: "01",
        title: "Pre-Consultation",
        desc: "문의 단계부터 개입합니다. 단순히 예약을 받는 게 아닙니다. 무엇을 원하고, 무엇을 싫어하는지(소음, 분위기 등)를 파악하여 낭비 없는 시간을 설계합니다."
    },
    {
        step: "02",
        title: "Flow Design",
        desc: "입실 전부터 흐름을 잡습니다. 몇 조 정도 볼지, 빠르게 갈지 천천히 볼지. 대략적인 그림을 그리고 들어가야 피곤하지 않습니다."
    },
    {
        step: "03",
        title: "Curated Choice",
        desc: "가장 중요한 단계입니다. 담당이 옆에서 '이쪽은 아닐 것 같다', '이 조는 보자' 조언하며 결정 장애를 없애고 최적의 타이밍을 잡습니다."
    }
];

export default function System() {
  return (
    <section id="system" className="py-32 bg-executive-black relative">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <img src="/images/system.jpg" alt="System BG" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-executive-black to-transparent" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <span className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2 block">Workflow</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Director's Intervention</h2>
        </div>

        <div className="space-y-12">
            {systems.map((sys, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex flex-col md:flex-row gap-8 border-b border-white/10 pb-12 last:border-0"
                >
                    <div className="text-5xl font-serif text-white/20 md:w-24 shrink-0">
                        {sys.step}
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-white mb-4">{sys.title}</h3>
                        <p className="text-gray-400 leading-relaxed max-w-3xl">
                            {sys.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
