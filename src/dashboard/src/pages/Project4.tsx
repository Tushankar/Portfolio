import { Link } from 'react-router-dom';

export default function Project4() {
  return (
    <div className="relative h-screen w-full bg-[#21346e] flex flex-col items-start px-6 md:px-12 lg:px-24 py-6 md:py-8 overflow-hidden font-rubik text-white z-0">
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
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Top Navbar */}
      <nav className="relative z-20 w-full flex items-center justify-between mb-auto max-w-7xl mx-auto">
        <div className="flex items-center gap-2 cursor-pointer">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span className="text-lg font-bold tracking-widest uppercase">Nexus</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-widest uppercase text-white/80">
          <a href="#" className="hover:text-white transition-colors hover:scale-105">Platform</a>
          <a href="#" className="hover:text-white transition-colors hover:scale-105">Solutions</a>
          <a href="#" className="hover:text-white transition-colors hover:scale-105">Company</a>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <a href="#" className="text-[13px] font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors">Login</a>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white h-9 px-5 text-[12px] font-bold tracking-widest uppercase hover:bg-white/20 transition-all rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Schedule Demo
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start w-full max-w-7xl mx-auto pt-8 flex-1">
        <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold uppercase leading-[0.98] tracking-[-2px] md:tracking-[-3px] mb-8 flex flex-col drop-shadow-2xl">
          <span>NEW ERA</span>
          <span>OF DESIGN</span>
          <span>STARTS NOW</span>
        </h1>

        <button className="relative w-[150px] h-[52px] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-300 group overflow-visible focus:outline-none shadow-xl mb-12 text-white">
          <svg
            className="absolute inset-0 w-full h-full text-white drop-shadow-lg"
            viewBox="0 0 150 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M12 0H150V40L138 52H0V12L12 0Z" fill="currentColor" />
          </svg>
          <span className="relative z-10 font-rubik font-bold uppercase text-[16px] text-[#161a20] tracking-wide mt-[2px] group-hover:tracking-widest transition-all duration-300">
            GET STARTED
          </span>
        </button>

        <div className="w-full max-w-[380px] bg-white/5 backdrop-blur-[30px] border border-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] 
          relative overflow-hidden group hover:border-white/20 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="flex items-start justify-between mb-3 relative z-10">
            <h3 className="text-base font-bold uppercase tracking-widest leading-tight">Elevate Your<br />Digital Presence</h3>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
          <p className="text-[13px] text-white/70 font-light leading-relaxed mb-4 relative z-10 break-words">
            Experience unparalleled performance and pixel-perfect aesthetics tailored for industry leaders.
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full border border-white/30 bg-gray-600"></div>
              <div className="w-7 h-7 rounded-full border border-white/30 bg-gray-500"></div>
              <div className="w-7 h-7 rounded-full border border-white/30 bg-gray-400"></div>
            </div>
            <span className="text-[11px] font-medium tracking-wider uppercase text-white/80">Join 10k+ Creators</span>
          </div>
        </div>
      </div>
    </div>
  );
}
