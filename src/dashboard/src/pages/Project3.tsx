import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Project3() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col font-rubik text-white p-6 md:p-8 lg:p-12">
      {/* Back to Dashboard */}
      <Link to="/" className="fixed top-24 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
        ← Dashboard
      </Link>

      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Header Navigation */}
      <nav className="relative z-20 w-full flex items-center justify-between mb-16 lg:mb-24 px-0 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white clip-diagonal flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-black"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight uppercase">targo</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <a href="#" className="hover:text-white/80 transition-colors">Home</a>
          <a href="#" className="hover:text-white/80 transition-colors">About</a>
          <a href="#" className="hover:text-white/80 transition-colors">Contact Us</a>
        </div>

        {/* Nav CTA */}
        <button className="bg-[#EE3F2C] text-white h-10 px-5 text-[14px] font-semibold clip-diagonal hover:bg-[#d53523] transition-colors uppercase tracking-wide">
          Contact Us
        </button>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto">
        <h1 className="text-[42px] md:text-[70px] lg:text-[100px] font-bold uppercase tracking-[-0.04em] leading-[1.05] mb-10 max-w-4xl drop-shadow-md">
          Swift and Simple <br /> Transport
        </h1>

        <button className="bg-[#EE3F2C] text-white h-16 px-10 text-[18px] font-bold clip-diagonal hover:bg-[#d53523] transition-colors uppercase tracking-wide shadow-lg">
          Get Started
        </button>
      </main>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Bottom Consultation Widget */}
      <div className="relative z-20 mt-auto max-w-7xl mx-auto w-full">
        <div className="relative inline-flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 md:p-10 clip-diagonal
          bg-white/5 backdrop-blur-[40px] saturate-[180%] 
          border border-white/12 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
        >
          <div className="flex flex-col max-w-[320px]">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Expert Logistics Planning</h3>
            <p className="text-[15px] text-white/80 leading-relaxed font-light">
              Speak with our transport specialists to streamline your supply chain today.
            </p>
          </div>

          <button className="bg-white text-black h-16 px-8 text-[16px] font-bold clip-diagonal hover:bg-white/90 transition-colors uppercase tracking-wide flex items-center gap-3 shrink-0 shadow-xl">
            <Phone size={20} strokeWidth={2.5} className="text-[#EE3F2C]" />
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
}
