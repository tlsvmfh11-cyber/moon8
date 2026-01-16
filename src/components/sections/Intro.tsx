import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="intro" ref={containerRef} className="py-32 bg-executive-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-20"
        >
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-snug break-keep">
                강남 달토 하이퍼블릭에서<br />
                <span className="text-gold-400">‘담당’이 왜 이렇게 중요하냐고요?</span>
            </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-20 items-start">
            {/* Parallax Image Frame */}
            <div className="w-full md:w-1/2 relative">
                <div className="absolute top-4 left-4 w-full h-full border border-white/10 z-0" />
                <div className="relative z-10 aspect-[3/4] overflow-hidden bg-executive-gray">
                    <motion.div style={{ y, scale: 1.15 }} className="w-full h-full">
                        <img 
                            src="/images/intro.jpg" 
                            alt="Director" 
                            className="w-full h-full object-cover grayscale"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
                <div className="space-y-8 text-gray-300 text-lg font-medium leading-relaxed break-keep">
                    <p>
                        강남 달토를 처음 알아보는 분들 중에는 이렇게 생각하시는 분들도 있습니다.
                    </p>
                    <div className="bg-white/5 p-6 border-l-2 border-gold-400 italic">
                        “하이퍼블릭이면 다 비슷한 거 아니냐”<br />
                        “출근 인원 많으면 알아서 잘 돌아가는 거 아니냐”
                    </div>
                    <p>
                        현장에서 보면, 이 생각 때문에 첫 방문에서 만족을 못 느끼는 경우가 꽤 많습니다.
                    </p>
                    <p>
                        강남 달토, 달리는토끼, 런닝레빗 같은 하이퍼블릭 업종은 출근율이 높고 룸이 많다는 게 장점이지만, 
                        그 장점을 어떻게 쓰느냐는 전혀 다른 문제입니다.
                    </p>
                    <p>
                        하루 평균 150명~200명 수준으로 출근하는 구조에서 담당이 없거나, 진행이 애매하면 오히려 선택이 더 어려워질 수도 있습니다.
                    </p>
                    <p className="text-white font-bold">
                        그래서 강남 달토에서는 하이퍼블릭 구조만큼이나 담당의 역할을 가장 중요하게 봅니다.
                    </p>
                </div>
            </div>
        </div>

        {/* Second Part of Intro */}
        <div className="mt-40 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-snug">
                    현장에서 직접 손님 받으면서<br />
                    <span className="text-gold-400">느낀 이야기입니다</span>
                </h2>
                <div className="space-y-6 text-gray-300 text-lg font-medium leading-relaxed text-left md:text-center">
                    <p>
                        강남 달토에서 문의를 받다 보면 비슷한 얘기를 자주 듣습니다.
                    </p>
                    <p className="text-gray-400 italic">
                        “전에 다른 데 갔는데, 그냥 사람만 많이 보다가 끝났다”<br />
                        “뭐가 좋은지 모르겠고, 선택도 애매했다”<br />
                        “가격은 나중에 알고 기분이 상했다”
                    </p>
                    <p>
                        이경우 대부분을 보면 구조 문제가 아니라 담당 문제입니다.
                    </p>
                    <p>
                        출근 인원이 많아도 누가 어떻게 추려주고, 어떤 순서로 보여주고, 언제 정리해주느냐에 따라 체감은 완전히 달라집니다.
                    </p>
                    <p className="text-white font-bold text-xl">
                        강남 달토는 이걸 너무 많이 봐왔기 때문에<br />
                        아예 운영 기준을 ‘담당 중심’으로 잡았습니다.
                    </p>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}