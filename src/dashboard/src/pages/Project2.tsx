import { Link } from 'react-router-dom';

export default function Project2() {
  return (
    <div className="relative w-full min-h-screen bg-[#f3f3f3] overflow-hidden font-barlow text-[#222]">
      {/* Back to Dashboard */}
      <Link to="/" className="fixed top-24 left-6 z-50 bg-black/10 hover:bg-black/20 backdrop-blur-md border border-black/10 text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
        ← Dashboard
      </Link>

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Floating Navbar */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-20">
        <nav className="bg-white/95 backdrop-blur-md rounded-[16px] px-8 py-4 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#222] rounded-lg"></div>
            <span className="text-xl font-bold tracking-tight uppercase">Tushankar</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-[14px] font-medium hover:text-black/60 transition-colors">About</a>
            <a href="#" className="text-[14px] font-medium hover:text-black/60 transition-colors">Works</a>
            <a href="#" className="text-[14px] font-medium hover:text-black/60 transition-colors">Services</a>
            <a href="#" className="text-[14px] font-medium hover:text-black/60 transition-colors">Testimonial</a>
          </div>

          <button className="bg-[#222] text-white px-6 py-3 rounded-full flex items-center gap-3 group hover:bg-black transition-all">
            <span className="text-[14px] font-medium">Book A Free Meeting</span>
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
            </div>
          </button>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
        <h1 className="flex flex-col gap-2">
          <span className="text-5xl md:text-[80px] lg:text-[110px] font-bold tracking-[-4px] leading-none text-black">
            Agency that makes your
          </span>
          <span className="font-instrument italic text-5xl md:text-[90px] lg:text-[120px] leading-tight text-black mt-[-10px]">
            videos & reels viral
          </span>
        </h1>

        <div className="mt-12 flex flex-col items-center gap-10">
          <p className="text-black text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Boost your brands with organic views and followers using our proven short-form content strategy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-[#222] text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 active:scale-95 transition-transform shadow-2xl">
              Check Our Results
            </button>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/40 backdrop-blur-md rounded-full border border-white/20">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-white"></div>
              </div>
              <span className="text-sm font-bold text-black/80">70+ Creators trust us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
