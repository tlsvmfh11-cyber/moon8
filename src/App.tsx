import { Phone, MessageSquare, Send } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Intro from './components/sections/Intro';
import Role from './components/sections/Role';
import System from './components/sections/System';
import Pricing from './components/sections/Pricing';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import { useProtection } from './hooks/use-protection';

function App() {
  useProtection();

  return (
    <div className="bg-executive-black min-h-screen font-sans text-gray-300">
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <Role />
        <System />
        <Pricing />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {/* Mobile Floating Action Buttons */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex border-t border-white/10">
        <a
          href="tel:01023033778"
          className="flex-1 bg-executive-gray/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-xs uppercase tracking-widest border-r border-white/10 active:bg-gold-400 active:text-black transition-colors"
        >
          <Phone size={16} />
          전화
        </a>
        <a
          href="sms:01023033778"
          className="flex-1 bg-executive-gray/95 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-xs uppercase tracking-widest border-r border-white/10 active:bg-gold-400 active:text-black transition-colors"
        >
          <MessageSquare size={16} />
          문자
        </a>
        <a
          href="https://t.me/hscompanyshs"
          target="_blank"
          className="flex-1 bg-[#0088cc]/90 backdrop-blur-md flex items-center justify-center gap-2 py-4 text-white font-bold text-xs uppercase tracking-widest active:bg-[#0077b3] transition-colors"
        >
          <Send size={16} />
          텔레그램
        </a>
      </div>
    </div>
  );
}

export default App;
