import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Wealth Management', subtitle: 'Project 1 - Digital Banking', color: 'from-blue-600 to-indigo-700', delay: 0, image: 'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif' },
  { id: 2, title: 'Video Agency', subtitle: 'Project 2 - Content Studio', color: 'from-orange-500 to-red-600', delay: 0.1, image: 'https://motionsites.ai/assets/hero-logoisum-preview-yhpSc7Yy.gif' },
  { id: 3, title: 'Logistics Hub', subtitle: 'Project 3 - Global Transport', color: 'from-red-600 to-rose-700', delay: 0.2, image: 'https://motionsites.ai/assets/hero-targo-preview-BF9qQyMr.gif' },
  { id: 4, title: 'Design Era', subtitle: 'Project 4 - Tech Platform', color: 'from-blue-800 to-slate-900', delay: 0.3, image: 'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif' },
  { id: 5, title: 'Cinematic Studio', subtitle: 'Project 5 - Motion 3D', color: 'from-zinc-800 to-black', delay: 0.4, image: 'https://motionsites.ai/assets/hero-framelix-preview-DsyIImVY.gif' },
  { id: 6, title: 'Web3 Experience', subtitle: 'Project 6 - Web3 Hub', color: 'from-neutral-900 to-neutral-800', delay: 0.5, image: 'https://motionsites.ai/assets/hero-web3-eos-poster-DF0_WdVS.png' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white p-8 md:p-16 font-inter overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase leading-none"
          >
            <span className="premium-shimmer">tushankar</span>
            <span className="text-white/20 block text-xl md:text-2xl mt-1 tracking-[0.3em] font-bold">
              Frontend Works
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-xl max-w-2xl font-medium tracking-tight mx-auto"
          >
            A unified dashboard for navigating through premium React & Tailwind landing page experiments.
          </motion.p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: project.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Link to={`/project${project.id}`}>
                <div className={`relative h-[300px] w-full rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} p-8 flex flex-col justify-end transition-all shadow-2xl`}>
                  {/* Project Image Background */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                  )}

                  {/* Project Label */}
                  <div className="relative z-10">
                    <p className="text-white text-[10px] uppercase tracking-[0.2em] font-medium">{project.subtitle}</p>
                  </div>


                  {/* Icon/Arrow */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 italic text-sm">
          <p>© 2026 tushankar all rights reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Research</a>
            <a href="#" className="hover:text-white transition-colors">Aesthetics</a>
            <a href="#" className="hover:text-white transition-colors">Performance</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
