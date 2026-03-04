import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Project5() {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black font-inter">
      {/* Back to Dashboard */}
      <Link to="/#dashboard" className="fixed top-24 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
        ← Dashboard
      </Link>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260223_060517_9feec9ab-18e4-477a-b034-de5903a67e91.mp4"
            type="video/mp4"
          />
        </video>

        {/* Navbar */}
        <nav className="absolute top-0 w-full flex items-start justify-between px-[36px] pt-[32px] pb-[20px] z-20 bg-black/0">
          <div className="flex h-[36px] items-center">
            <svg className="h-[36px] w-auto brightness-0 invert" viewBox="0 0 100 36" fill="currentColor">
              <text x="0" y="26" fontSize="24" fontWeight="bold" fontFamily="Inter">Framelix</text>
            </svg>
          </div>

          <div className="hidden md:flex gap-[64px]">
            <div className="flex flex-col gap-1 text-[16px] text-white/90 hover:text-white transition-colors">
              <a href="#" className="hover:opacity-80">Reels</a>
              <a href="#" className="hover:opacity-80">Services</a>
            </div>
            <div className="flex flex-col gap-1 text-[16px] text-white/90 hover:text-white transition-colors">
              <a href="#" className="hover:opacity-80">Projects</a>
              <a href="#" className="hover:opacity-80">Pipeline</a>
            </div>
            <div className="flex flex-col gap-1 text-[16px] text-white/90 hover:text-white transition-colors">
              <a href="#" className="hover:opacity-80">Careers</a>
              <a href="#" className="hover:opacity-80">Get In Touch</a>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="relative w-[27px] h-[30px] flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform">
              <svg width="27" height="30" viewBox="0 0 27 30" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute inset-0">
                <path d="M4 1C2.34315 1 1 2.34315 1 4V9C2.65685 9 4 10.3431 4 12C4 13.6569 2.65685 15 1 15V26C1 27.6569 2.34315 29 4 29H23C24.6569 29 26 27.6569 26 26V15C24.3431 15 23 13.6569 23 12C23 10.3431 24.3431 9 26 9V4C26 2.34315 24.6569 1 23 1H4Z" />
                <line x1="1" y1="12" x2="26" y2="12" strokeDasharray="2 2" />
              </svg>
              <span className="relative z-10 text-[12px] font-medium leading-none -mt-1">0</span>
            </div>
          </div>
        </nav>

        {/* Hero Top Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[140px] w-full flex flex-col items-center text-center px-4 z-10 pointer-events-none"
        >
          <div className="text-[26px] font-medium mb-1 tracking-tight">
            Framelix<sup className="text-[14px] ml-[2px]">3D</sup>
          </div>
          <h1 className="text-[clamp(2rem,6vw,68px)] font-medium leading-none tracking-tight max-w-4xl mx-auto">
            Cinematic Motion Studios
          </h1>
        </motion.div>

        {/* Hero Bottom Overlay CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-[12%] w-full flex flex-col items-center gap-3 px-4 z-10"
        >
          <button className="bg-white text-black font-medium text-[22px] rounded-full px-14 py-4 hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl">
            Explore Reel
          </button>
          <span className="text-white/60 text-[15px] font-medium tracking-wide">
            Ready in 24-48 hours
          </span>
        </motion.div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-[#A6A4FF] text-black py-[14px] overflow-hidden whitespace-nowrap flex font-medium text-[16px]">
        <div className="animate-marquee flex gap-[60px] whitespace-nowrap min-w-max">
          {Array(6).fill("New! 3D^OS V1.2.1 out now!").map((text, i) => (
            <span key={`a-${i}`}>{text}</span>
          ))}
          {Array(6).fill("New! 3D^OS V1.2.1 out now!").map((text, i) => (
            <span key={`b-${i}`}>{text}</span>
          ))}
        </div>
      </div>

      {/* Shipping Section */}
      <section className="w-full bg-[#EAEAEA] text-black rounded-b-[40px] flex flex-col items-center pt-[64px]">
        <div className="text-center px-4">
          <div className="text-[20px] font-medium mb-2 tracking-tight">
            Framelix<sup className="text-[11px] ml-[2px]">3D</sup>
          </div>
          <h2 className="text-[clamp(2rem,5vw,52px)] font-bold tracking-tight leading-tight">
            Shipping Now
          </h2>
        </div>

        <div className="w-full max-w-[800px] h-[800px] -my-[96px] relative z-10 flex justify-center items-center pointer-events-none">
          <video autoPlay loop muted playsInline className="w-full h-full object-contain rounded-2xl">
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260223_063954_03a5f7ec-5f10-4acb-ba8d-dce4815217db.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="w-full pb-[128px] flex flex-col items-center gap-4 relative z-20">
          <button className="bg-black text-white font-medium text-[18px] rounded-full px-[46px] py-[12px] hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl">
            Buy Now
          </button>
          <span className="text-black text-[20px] font-medium tracking-tight cursor-pointer hover:underline underline-offset-4">
            Explore now
          </span>
        </div>
      </section>
    </div>
  );
}
