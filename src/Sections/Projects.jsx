const projects = [
  {
    title: 'Fashion Recommendation System using KAN',
    description:
      'A machine learning based fashion recommendation system using KAN, MLP and ConvKAN models.',
    technologies: ['Python', 'PyTorch', 'KAN', 'Machine Learning'],
  },
  {
    title: 'Airbnb MERN Clone',
    description:
      'A full stack accommodation platform built with React, Node.js, Express and MongoDB.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Recipe Finder',
    description:
      'A full stack recipe application with CRUD functionality and MongoDB integration.',
    technologies: ['React', 'Express', 'MongoDB', 'Axios'],
  },
]

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-cyan-400">
          Projects
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Things I've built
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-800 px-3 py-1 text-sm text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects