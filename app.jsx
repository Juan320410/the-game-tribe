import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Users, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Grid3X3, 
  TrendingUp, 
  Globe, 
  Mail, 
  Menu, 
  X,
  Target,
  BarChart3
} from 'lucide-react';

// Custom SVG Logo component based on the provided "Final Logos"
const GameTribeLogo = ({ className = "w-32" }) => (
  <svg viewBox="0 0 300 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 10)">
      <path d="M45 15 C45 5, 10 5, 10 15 L10 35 C10 45, 45 45, 45 35 L45 28 L28 28 L28 32 L40 32 L40 35 C40 38, 15 38, 15 35 L15 15 C15 12, 40 12, 40 15 L40 22 L45 22 Z" />
      <path d="M55 42 L78 2 L101 42 L95 42 L78 12 L61 42 Z M70 32 L86 32 L86 36 L70 36 Z" />
      <path d="M110 42 L110 2 L125 2 L135 25 L145 2 L160 2 L160 42 L152 42 L152 10 L138 42 L132 42 L118 10 L118 42 Z" />
      <path d="M170 12 L205 12 L205 16 L170 16 Z M170 22 L205 22 L205 26 L170 26 Z M170 32 L205 32 L205 36 L170 36 Z" />
    </g>
    <g transform="translate(0, 55)">
      <path d="M10 5 L45 5 L45 11 L31 11 L31 42 L24 42 L24 11 L10 11 Z" />
      <path d="M55 42 L55 5 L75 5 C85 5, 90 10, 90 18 C90 25, 85 30, 75 30 L80 30 L90 42 L82 42 L72 30 L62 30 L62 42 Z M62 24 L75 24 C80 24, 82 22, 82 18 C82 14, 80 12, 75 12 L62 12 Z" />
      <path d="M100 5 L108 5 L108 42 L100 42 Z" />
      <path d="M118 42 L118 5 L138 5 C148 5, 153 10, 153 18 C153 22, 150 25, 145 27 C150 29, 155 33, 155 38 C155 42, 150 45, 140 45 L118 45 Z M126 12 L126 21 L138 21 C142 21, 144 19, 144 16 C144 13, 142 12, 138 12 Z M126 28 L126 38 L142 38 C146 38, 148 36, 148 33 C148 30, 146 28, 142 28 Z" />
      <path d="M170 12 L205 12 L205 16 L170 16 Z M170 22 L205 22 L205 26 L170 26 Z M170 32 L205 32 L205 36 L170 36 Z" />
    </g>
  </svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Games', href: '#games' },
    { name: 'Opportunity', href: '#market' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const teamMembers = [
    { name: "Jordan Twiss", role: "Founder", email: "jordan@thegametribe.com" },
    { name: "Max Macdonald", role: "CEO", email: "max@thegametribe.com" },
    { name: "Tom Maynell", role: "COO", email: "tom@thegametribe.com" },
    { name: "Jessie Lea", role: "CTO", email: "jessie@thegametribe.com" },
    { name: "Juan Laffitte", role: "Head of LATAM", email: "juan@thegametribe.com" },
    { name: "Neal Luke", role: "Compliance Consultant", email: "neal@thegametribe.com" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-green-500 selection:text-black">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <GameTribeLogo className="w-24 md:w-32 text-white hover:text-green-400 transition-colors cursor-pointer" />
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-green-400 transition-colors">
                {link.name}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-green-400 transition-colors">
              Get in Touch
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[49] bg-black pt-24 px-6 md:hidden">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="block py-4 text-2xl font-black uppercase tracking-widest border-b border-white/10" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-green-400">
              <Zap size={14} /> The Future of Sports Betting
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              A NEW WAY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">TO BET.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              We are reimagining the gambling experience through gamification, transparency, and innovation. No odds, just skill and strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-green-500 text-black px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 text-xs">
                Discover Pitch Point <ChevronRight size={18} />
              </button>
              <button className="border border-white/20 bg-white/5 backdrop-blur-sm px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-xs">
                Our Mission
              </button>
            </div>
          </div>
          
          <div className="relative group flex justify-center">
            <div className="relative w-64 md:w-80 h-[500px] md:h-[650px] bg-[#0c0c0c] rounded-[3rem] border-8 border-[#1a1a1a] shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black/40" />
              <div className="p-4 space-y-4">
                <div className="flex justify-between items-center opacity-50 text-[10px] font-black tracking-widest">
                  <span>PITCH POINT</span>
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Current Pot</div>
                  <div className="text-lg font-black">£1,235.00</div>
                </div>
                <div className="grid grid-cols-6 gap-1 h-64 border border-green-500/30 rounded-lg p-1 bg-green-950/20">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className={`rounded-sm border border-white/5 ${i === 20 ? 'bg-red-500/40 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-transparent'}`} />
                  ))}
                </div>
                <div className="bg-green-500 text-black text-center py-2 rounded-lg font-black text-xs tracking-widest uppercase">
                  SELECT SQUARE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="py-24 border-y border-white/5 relative bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight uppercase">The Challenge</h2>
              <div className="space-y-6">
                {[
                  { title: "Responsible Gambling Pressure", desc: "Regulation and addiction concerns are rising globally.", icon: <ShieldCheck className="text-green-500" /> },
                  { title: "Trust Deficit", desc: "Players increasingly feel that traditional odds are stacked unfairly against them.", icon: <Users className="text-blue-500" /> },
                  { title: "Outdated Mechanics", desc: "The betting sector lacks the innovation and gamification that Gen Z demands.", icon: <Zap className="text-yellow-500" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all group">
                    <div className="shrink-0 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <h3 className="font-black uppercase tracking-widest text-sm">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-5xl font-black mb-2 tracking-tighter">$711b</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Global Market</div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-5xl font-black mb-2 tracking-tighter">$88b</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Online Sector</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-transparent p-12 rounded-3xl border border-green-500/20 col-span-2">
                <div className="text-6xl font-black mb-2 tracking-tighter">$1.5t</div>
                <div className="text-[10px] uppercase tracking-widest text-green-400 font-black">Staked on Sports Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 relative z-10">
          <div className="col-span-2 space-y-10">
            <GameTribeLogo className="w-40 text-white" />
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
              The Game Tribe is a B2B iGaming provider focused on creating high-engagement, transparent, and risk-free betting products for global operators.
            </p>
          </div>
          <div className="space-y-8">
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-green-400">Headquarters</h4>
            <p className="text-gray-500 text-sm font-bold leading-relaxed">
              thegametribe.com<br />
              London • LATAM • Dubai<br />
              © 2026 The Game Tribe
            </p>
          </div>
          <div className="space-y-8">
            <button className="bg-white text-black w-full py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-green-400 transition-all flex items-center justify-center gap-2">
              Contact Sales <BarChart3 size={14} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
