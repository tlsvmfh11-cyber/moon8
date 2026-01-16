import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-40%", "40%"]);

  return (
    <section id="contact" ref={containerRef} className="py-32 bg-executive-black relative overflow-hidden flex items-center min-h-[80vh]">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
            <motion.div style={{ y }} className="w-full h-full">
                <img src="/images/contact.jpg" alt="Contact BG" className="w-full h-full object-cover opacity-30" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-executive-black via-executive-black/80 to-transparent z-10" />
        </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
                픽업 서비스 · 예약 안내
            </h2>
            
            <p className="text-xl text-gray-200 font-medium mb-12 leading-relaxed break-keep max-w-3xl mx-auto">
                강남 달토는 담당이 있는 구조라 픽업이나 예약 문의도 중간에 헷갈릴 일이 없습니다. 
                어떤 경우든 처음 문의한 담당이 끝까지 책임지고 안내합니다.
            </p>

            <div className="bg-white/5 backdrop-blur-md p-8 rounded border border-white/10 inline-block mb-12">
                <ul className="flex flex-col md:flex-row gap-8 text-white font-bold text-lg">
                    <li>혼자 방문</li>
                    <li className="hidden md:block text-gold-400">|</li>
                    <li>첫 방문</li>
                    <li className="hidden md:block text-gold-400">|</li>
                    <li>지인 모임</li>
                </ul>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                <a 
                    href="tel:01023033778"
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-gold-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors min-w-[240px]"
                >
                    <Phone size={18} /> 전화 걸기
                </a>
                <a 
                    href="sms:01023033778"
                    className="flex items-center justify-center gap-3 px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors min-w-[240px]"
                >
                    <MessageSquare size={18} /> 문자 문의
                </a>
                <a 
                    href="https://t.me/hscompanyshs"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-10 py-5 border border-[#0088cc]/50 bg-[#0088cc]/10 backdrop-blur-md text-[#0088cc] font-bold uppercase tracking-widest hover:bg-[#0088cc] hover:text-white transition-colors min-w-[240px]"
                >
                    <Send size={18} /> 텔레그램
                </a>
            </div>

            <div className="border-t border-white/10 pt-10">
                <p className="text-gray-400 text-lg font-medium leading-relaxed break-keep">
                    구조는 누구나 흉내 낼 수 있지만, 담당이 책임지고 진행하는 방식은 쉽게 흉내 낼 수 없습니다. <br />
                    그래서 강남 달토, 달리는토끼, 런닝레빗은 처음 온 분보다 다시 연락 주는 분이 많습니다.
                </p>
                <p className="text-gold-400 mt-6 font-bold">
                    궁금하면 오기 전에 물어보세요. 담당이 있는 곳인지 아닌지, 그 차이부터 느껴보셔도 됩니다.
                </p>
            </div>

        </motion.div>
      </div>
    </section>
  );
}