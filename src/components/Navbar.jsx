function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <a href="#" className="text-xl font-bold">
          Aradhya<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-slate-300 hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="text-sm text-slate-300 hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="text-sm text-slate-300 hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="text-sm text-slate-300 hover:text-cyan-400">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar