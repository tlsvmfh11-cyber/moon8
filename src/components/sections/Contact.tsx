import { motion } from 'framer-motion';
import { Phone, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-executive-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
            <img src="/images/contact.jpg" alt="Contact BG" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-executive-black via-executive-black/80 to-transparent" />
        </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <span className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                Direct Contact
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
                Ready for Service?
            </h2>
            
            <p className="text-xl text-gray-300 font-light mb-12 leading-relaxed">
                구조는 흉내 낼 수 있어도,<br />
                책임감 있는 진행 방식은 쉽게 흉내 낼 수 없습니다.<br />
                제대로 된 담당의 차이를 직접 느껴보세요.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                <a 
                    href="tel:01023033778"
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-gold-400 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors min-w-[240px]"
                >
                    <Phone size={18} /> Call Director
                </a>
                <a 
                    href="sms:01023033778"
                    className="flex items-center justify-center gap-3 px-10 py-5 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors min-w-[240px]"
                >
                    <MessageSquare size={18} /> Message
                </a>
                <a 
                    href="https://t.me/hscompanyshs"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-10 py-5 border border-[#0088cc]/50 bg-[#0088cc]/10 backdrop-blur-md text-[#0088cc] font-bold uppercase tracking-widest hover:bg-[#0088cc] hover:text-white transition-colors min-w-[240px]"
                >
                    <Send size={18} /> Telegram
                </a>
            </div>

            <div className="border-t border-white/10 pt-10">
                <p className="text-gray-500 text-sm">
                    혼자 방문 / 첫 방문 / 지인 모임<br />
                    어떤 경우든 처음 문의한 담당이 끝까지 책임집니다.
                </p>
            </div>

        </motion.div>
      </div>
    </section>
  );
}
