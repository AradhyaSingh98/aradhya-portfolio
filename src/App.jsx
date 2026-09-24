const projects = [
  {
    title: "Fashion Recommendation System",
    category: "Machine Learning • KAN",
    description:
      "A personalized fashion recommendation system using Kolmogorov-Arnold Networks, MLP and ConvKAN with image-based similarity.",
    tech: ["Python", "PyTorch", "KAN", "ResNet50", "Streamlit"],
    github: "#",
  },
  {
    title: "Airbnb MERN Clone",
    category: "Full Stack • MERN",
    description:
      "A full-stack Airbnb-inspired application built with React, Node.js, Express and MongoDB, focusing on real-world web development.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
  },
  {
    title: "Recipe Finder",
    category: "Full Stack • MERN",
    description:
      "A recipe management application with CRUD functionality, category-based organization and MongoDB-backed data storage.",
    tech: ["React", "Express", "MongoDB", "Axios"],
    github: "#",
  },
];

const skills = [
  "C++",
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Machine Learning",
  "Deep Learning",
  "PyTorch",
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Aradhya<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#education" className="transition hover:text-cyan-400">
              Education
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
      >
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Hero Text */}
          <div>
            <p className="mb-5 font-mono text-sm text-cyan-400">
              HELLO, I'M ARADHYA 👋
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Full Stack Developer
              <span className="block text-cyan-400">
                & ML Enthusiast.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build modern, scalable web applications using the MERN stack
              and explore Machine Learning and Deep Learning to create
              intelligent, real-world solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-2 text-sm text-slate-500">
              <span>🎓 B.Tech CSE • BPSMV • 2023–2027</span>
              <span>💼 Machine Learning Intern • NIT Patna</span>
              <span>💻 Open to Full Stack & ML Opportunities</span>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-96 w-80 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 shadow-2xl shadow-cyan-500/10">
                <img
                  src="/profile.jpg"
                  alt="Aradhya Singh"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 rounded-xl border border-white/10 bg-slate-900 px-5 py-3 shadow-xl">
                <span className="text-sm text-slate-300">
                  Building & Learning 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-cyan-400">
            01 — ABOUT
          </p>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">
                Turning ideas into
                <span className="text-cyan-400"> real products.</span>
              </h2>

              <p className="mt-5 text-lg text-slate-400">
                Full Stack Developer & Machine Learning Enthusiast
              </p>
            </div>

            <div className="space-y-5 leading-7 text-slate-400">
              <p>
               I'm Aradhya Singh, a final-year Computer Science and Engineering student
               with a strong interest in Full Stack Development and Machine Learning.
              </p>

              <p>
              I enjoy building practical web applications using the MERN stack and
              exploring Machine Learning and Deep Learning to solve real-world
              problems.
              </p>
              <p>
                Currently, I'm working as a Machine Learning Intern at the National
                Institute of Technology, Patna, where I'm gaining hands-on experience
                in Machine Learning and intelligent systems.
              </p>

              <p>
                My goal is to combine strong software development skills with
                Machine Learning to build useful, scalable and real-world
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="border-t border-white/5 bg-slate-900/40 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-cyan-400">
            02 — EDUCATION
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Academic Background
          </h2>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div>
                <p className="text-sm font-mono text-cyan-400">
                  2023 — 2027
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Bachelor of Technology
                </h3>

                <p className="mt-2 text-lg text-slate-300">
                  Computer Science & Engineering
                </p>

                <p className="mt-3 text-slate-400">
                  Bhagat Phool Singh Mahila Vishwavidyalaya
                </p>
              </div>

              <div className="flex items-start">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                  Final Year Student
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-cyan-400">
            03 — SKILLS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            My Tech Stack
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Technologies and tools I use to build full-stack applications and
            explore Machine Learning solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/5 bg-slate-900/40 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-cyan-400">
            04 — PROJECTS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            A selection of projects I've built while developing my full-stack
            and Machine Learning skills.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl">
                    {index === 0
                      ? "🤖"
                      : index === 1
                        ? "🏠"
                        : "🍲"}
                  </span>

                  <span className="font-mono text-xs text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="mt-6 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-t border-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-cyan-400">
            05 — EXPERIENCE
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Professional Experience
          </h2>

          <div className="mt-10 border-l border-slate-700 pl-8">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-cyan-400" />

              <p className="font-mono text-sm text-cyan-400">
                2026 — PRESENT
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Machine Learning Intern
              </h3>

              <p className="mt-1 text-lg font-medium text-slate-300">
                National Institute of Technology, Patna
              </p>

              <p className="mt-5 max-w-3xl leading-7 text-slate-400">
                Currently working as a Machine Learning Intern at NIT Patna,
                gaining hands-on experience in Machine Learning and Deep
                Learning. Working on practical ML problems, model development,
                data processing and intelligent solutions using Python and
                modern machine learning techniques.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  Python
                </span>

                <span className="rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  Machine Learning
                </span>

                <span className="rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  Deep Learning
                </span>

                <span className="rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  PyTorch
                </span>

                <span className="rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  Data Analysis
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        className="border-t border-white/5 bg-slate-900/40 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-sm text-cyan-400">
            06 — ACHIEVEMENTS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Beyond Projects
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="text-3xl">🏆</div>

              <h3 className="mt-4 font-bold">
                GFG x NPCI
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                60-Day coding challenge
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="text-3xl">💻</div>

              <h3 className="mt-4 font-bold">
                DSA Practice
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Consistent problem solving
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="text-3xl">🚀</div>

              <h3 className="mt-4 font-bold">
                Full Stack
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                MERN applications
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-6">
              <div className="text-3xl">🧠</div>

              <h3 className="mt-4 font-bold">
                Machine Learning
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                KAN-based recommendation system
              </p>
            </div>
          </div>
        </div>
      </section>
      ```jsx
{/* Contact */}
<section
  id="contact"
  className="border-t border-white/5 px-6 py-24"
>
  <div className="mx-auto max-w-4xl text-center">
    <p className="font-mono text-sm text-cyan-400">
      07 — CONTACT
    </p>

    <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
      Let's build something
      <span className="text-cyan-400"> great.</span>
    </h2>

    <p className="mx-auto mt-5 max-w-xl text-slate-400">
      I'm open to full-stack development opportunities, Machine
      Learning opportunities, internships and interesting projects.
    </p>

    {/* Contact Form */}
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
          const response = await fetch(
            "https://aradhya-portfolio-b2qa.onrender.com/api/messages", 
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
              }),
            }
          );

          const data = await response.json();

          if (data.success) {
            alert("Message sent successfully!");
            e.target.reset();
          } else {
            alert(data.message || "Something went wrong.");
          }
        } catch (error) {
          console.error("Contact form error:", error);
          alert("Unable to send message. Please try again.");
        }
      }}
      className="mx-auto mt-10 max-w-2xl space-y-5 text-left"
    >
      {/* Name */}
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
      />

      {/* Email */}
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
      />

      {/* Send Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Send Message
      </button>
    </form>

    {/* Social Links */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {/* Gmail */}
      <a
        href="mailto:singharadhya12098@gmail.com"
        className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
      >
        Email Me
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/AradhyaSingh98"
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
      >
        GitHub
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/aradhya-singh-3a6653322/"
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>
{/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>
            © 2026 Aradhya Singh. Built with React + Tailwind CSS.
          </p>

          <a
            href="#home"
            className="transition hover:text-cyan-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;