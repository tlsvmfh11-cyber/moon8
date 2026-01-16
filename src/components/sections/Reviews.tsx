import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
    {
        id: 1,
        content: "강남 달토는 담당이 계속 옆에 있어서 흐름이 끊기지 않았습니다. 이게 제일 컸어요.",
        tag: "Responsibility"
    },
    {
        id: 2,
        content: "전에 다른 하이퍼블릭은 사람만 많이 보고 끝났는데, 달토는 정리가 돼서 편했습니다.",
        tag: "Curation"
    },
    {
        id: 3,
        content: "가격 설명을 담당이 먼저 해줘서 계산할 때 불안함이 없었습니다.",
        tag: "Transparency"
    },
    {
        id: 4,
        content: "혼자 방문했는데도 계속 챙겨줘서 어색하지 않았습니다.",
        tag: "Solo Friendly"
    }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-executive-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-10">
            <div>
                <p className="text-gold-400 font-mono text-sm mb-4">Real Testimonials</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tighter">Client Reviews</h2>
            </div>
            <p className="text-gray-500 mt-4 md:mt-0">실제 이용자가 느낀 담당 진행의 차이</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev) => (
                <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-executive-gray p-10 border border-white/5 relative group hover:border-gold-400/30 transition-colors"
                >
                    <Quote className="absolute top-8 right-8 text-gold-400/10 group-hover:text-gold-400/20 transition-colors" size={60} />
                    <span className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.2em] mb-6 block">
                        {rev.tag}
                    </span>
                    <p className="text-xl text-gray-200 leading-relaxed font-light italic">
                        "{rev.content}"
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
