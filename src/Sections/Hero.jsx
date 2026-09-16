function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-20">
      <div className="mx-auto w-full max-w-6xl">

        <p className="mb-4 text-lg text-cyan-400">
          Hi, I'm
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Aradhya Singh
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
          Full Stack Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I build modern, scalable web applications using
          MERN stack, Python, and Machine Learning.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero