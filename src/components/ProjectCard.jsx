import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="glass-card gradient-border rounded-2xl p-6 h-full flex flex-col transition-all duration-500 group-hover:shadow-xl"
        style={{ '--shadow-color': project.shadowColor }}
      >
        {/* Hover glow effect */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{ background: `radial-gradient(circle at center, ${project.shadowColor}, transparent 70%)` }}
        />

        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 mb-5`}>
          <div className="w-full h-full rounded-[10px] bg-dark-900 flex items-center justify-center">
            <Icon className="text-white" size={24} />
          </div>
        </div>

        {/* Category badge */}
        <span className="inline-flex self-start px-3 py-1 text-xs font-medium rounded-full bg-dark-800 text-dark-300 border border-dark-700/50 mb-3">
          {project.category}
        </span>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-dark-400 leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-dark-800/80 text-dark-300 border border-dark-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
      </div>
    </motion.div>
  )
}
