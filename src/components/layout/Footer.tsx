export default function Footer() {
    return (
      <footer className="bg-executive-black py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">GANGNAM DALTO</h2>
          <p className="text-gray-500 text-sm mb-10 tracking-wider">
            Private Executive Lounge Service.<br />
            We provide the best hospitality for your business and pleasure.
          </p>
          
          <div className="flex justify-center gap-8 mb-10">
            <span className="w-10 h-[1px] bg-white/20" />
            <span className="text-gold-500 font-script text-2xl">The Manager</span>
            <span className="w-10 h-[1px] bg-white/20" />
          </div>

          <p className="text-xs text-gray-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} DALTO. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
