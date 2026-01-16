import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="py-32 bg-executive-black relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
        
        {/* Image Frame */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-4 left-4 w-full h-full border border-white/10 z-0" />
          <div className="relative z-10 aspect-[3/4] overflow-hidden">
            <img 
                src="/images/intro.jpg" 
                alt="Director" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-snug">
                    <span className="text-gold-400 font-script text-5xl mr-2">Why</span><br />
                    ‘담당’이 왜 중요한가?
                </h2>
                
                <div className="space-y-8 text-gray-400 leading-relaxed font-light">
                    <p>
                        “하이퍼블릭이면 다 비슷한 거 아니냐”, “인원 많으면 알아서 잘 돌아가는 거 아니냐”.
                        현장에서 보면 이 생각 때문에 첫 방문에서 만족을 못 느끼는 경우가 꽤 많습니다.
                    </p>
                    <p>
                        강남 달토의 장점인 높은 출근율과 많은 룸 개수. 
                        하지만 <strong className="text-white">그 장점을 어떻게 쓰느냐</strong>는 전혀 다른 문제입니다.
                    </p>
                    <div className="pl-6 border-l border-gold-400 py-2">
                        <p className="text-white italic text-lg">
                            "150명의 출근 인원도<br />
                            제대로 된 큐레이팅이 없으면<br />
                            그저 피곤한 과정일 뿐입니다."
                        </p>
                    </div>
                    <p>
                        그래서 강남 달토는 운영 기준 자체를 ‘담당 중심’으로 잡았습니다.
                        누가 어떻게 추려주고, 어떤 순서로 보여주고, 언제 정리해주느냐.
                        그 디테일의 차이를 경험해보세요.
                    </p>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
