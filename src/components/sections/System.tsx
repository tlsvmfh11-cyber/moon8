import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const systems = [
    {
        step: "01",
        title: "문의 단계부터 담당이 개입합니다",
        desc: "강남 달토에서는 문의 단계부터 담당이 직접 응대합니다. 이때 가장 먼저 보는 건 손님이 뭘 원하는지가 아니라 뭘 싫어하는지(시끄러운 분위기, 가벼운 분위기, 긴 초이스 시간 등)입니다. 이걸 먼저 알아야 출근 인원이 많은 하이퍼블릭 구조를 쓸데없이 낭비하지 않습니다."
    },
    {
        step: "02",
        title: "입실 전부터 흐름을 잡습니다",
        desc: "도착 전에 이미 대략적인 그림을 그려놓습니다. 몇 조 정도 볼지, 빠르게 갈지, 천천히 볼지, 분위기를 어디까지 가져갈지. 이걸 안 잡고 들어가면 사람만 많이 보고 피곤해지는 구조가 됩니다."
    },
    {
        step: "03",
        title: "초이스에서 담당 역할이 가장 큽니다",
        desc: "강남 달토 하이퍼블릭의 초이스는 선택지가 많다는 게 장점입니다. 하지만 이건 담당이 있을 때 장점이지, 없으면 단점이 됩니다. 담당이 없으면 안 맞는 조 계속 보게 되고 눈치 보게 되고 선택 타이밍을 놓치게 됩니다. 강남 달토에서는 담당이 옆에서 흐름을 정리해줍니다."
    }
];

export default function System() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="system" ref={containerRef} className="py-32 bg-executive-black relative overflow-hidden">
        {/* Parallax Background - Right Aligned & More Visible */}
        <div className="absolute right-0 top-0 w-1/2 md:w-1/3 h-[120%] -top-[10%] overflow-hidden pointer-events-none opacity-40">
            <motion.div style={{ y }} className="w-full h-full">
                <img 
                    src="/images/system.jpg" 
                    alt="System BG" 
                    className="w-full h-full object-cover object-[80%_center]" 
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-executive-black/50 to-executive-black z-10" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                강남 달토 하이퍼블릭,<br />
                <span className="text-gold-400">담당이 개입하는 실제 방식</span>
            </h2>
            <p className="text-gray-400 mt-6 font-medium">
                강남 달토 시스템은 겉으로 보면 단순해 보일 수 있습니다.<br />
                하지만 안쪽에서는 담당이 계속 개입하면서 흐름을 잡습니다.
            </p>
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
                        <p className="text-gray-400 leading-relaxed max-w-3xl font-medium break-keep">
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