function ProjectCover({ project }) {
  const Icon = project.icon
  const images = project.images || []

  if (images.length === 0) {
    return (
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-ink/25" />
        <div className="relative flex h-full items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
            <Icon className="text-white" size={32} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-48 overflow-hidden bg-dark-800">
      <img
        src={images[0]}
        alt=""
        className="h-full w-full object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      {images.length > 1 && (
        <span className="absolute bottom-2 right-2 rounded-full bg-ink/70 px-2 py-0.5 text-[11px] font-medium text-white">
          {images.length} photos
        </span>
      )}
    </div>
  )
}

export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="group relative h-full">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="glass-card gradient-border flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl text-left transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
      >
        <div
          className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at center, ${project.shadowColor}, transparent 70%)`,
          }}
        />

        <ProjectCover project={project} />

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <span className="inline-flex self-start rounded-full border border-dark-700/50 bg-dark-800 px-3 py-1 text-xs font-medium text-dark-300">
              {project.category}
            </span>
            {project.company && (
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-mono font-medium text-cyan-400">
                {project.company}
              </span>
            )}
          </div>

          <h3 className="mb-2 text-xl font-bold text-fg transition-colors duration-300 group-hover:text-cyan-500">
            {project.name}
          </h3>
          <p className="mb-5 flex-grow text-sm leading-relaxed text-dark-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-dark-700/30 bg-dark-800/80 px-2.5 py-1 font-mono text-xs text-dark-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </button>
    </article>
  )
}
