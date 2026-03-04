import { Link } from 'react-router-dom';

export default function Project1() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-sans text-white">
      {/* Back to Dashboard */}
      <Link to="/" className="fixed top-24 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all">
        ← Dashboard
      </Link>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-left-top origin-top-left scale-150 transform"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260207_050933_33e2620d-09cd-43a2-80ef-4cdbb42f4194.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 px-6 py-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-black"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">Wealthify</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-white/90 hover:text-white transition-opacity font-medium">
            Features
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <button className="text-white/90 hover:text-white transition-opacity font-medium">Company</button>
          <button className="text-white/90 hover:text-white transition-opacity font-medium">Blogs</button>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:block text-white/90 hover:text-white transition-opacity font-medium">Sign in</button>
          <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-white/90 transition-colors">Get Started</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-48">
        <div className="mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium">
          Real-Time Budget Tracking
        </div>

        <h1 className="text-5xl md:text-[80px] lg:text-[100px] font-extrabold text-center leading-[1.1] tracking-tight max-w-5xl mb-6 drop-shadow-lg">
          Build Wealth That <br className="hidden md:block" /> Lasts Generations
        </h1>

        <p className="text-lg md:text-xl text-white/80 text-center max-w-2xl mb-10 font-medium drop-shadow">
          Transform today's earnings into tomorrow's family fortune with proven wealth-building strategies.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl">
          Start Building Wealth
        </button>
      </div>

      {/* Bottom Features Grid */}
      <div className="absolute bottom-6 md:bottom-12 left-0 w-full px-4 md:px-8 z-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-black/70 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="font-semibold text-lg text-white">Create Your Free Account</h3>
              <p className="text-white/60 text-sm leading-relaxed">Sign up in seconds using your email address or mobile number.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="font-semibold text-lg text-white">Connect Your Bank Accounts</h3>
              <p className="text-white/60 text-sm leading-relaxed">Securely link your bank accounts, cards, or digital wallets with.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="font-semibold text-lg text-white">Set Your Financial Goals</h3>
              <p className="text-white/60 text-sm leading-relaxed">Customize your savings, spending, or investment goals with easy.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-1">
                <span className="text-lg font-bold">4</span>
              </div>
              <h3 className="font-semibold text-lg text-white">Track, Grow, and Optimize</h3>
              <p className="text-white/60 text-sm leading-relaxed">Watch your money work for you in real time—get insights and tips.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
