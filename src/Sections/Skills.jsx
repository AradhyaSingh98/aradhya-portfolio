const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Python',
  'C++',
  'Machine Learning',
  'Git',
  'GitHub',
]

function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-cyan-400">
          Skills
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills