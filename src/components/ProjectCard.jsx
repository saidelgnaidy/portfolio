import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
  </svg>
)

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.308-1.944-3.348-2.16-4.068-2.22-1.86-.156-3.372 1.032-4.248 1.032zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z" />
  </svg>
)

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
      <div
        className="glass-card gradient-border rounded-2xl p-6 h-full flex flex-col transition-all duration-500 group-hover:shadow-xl"
        style={{ '--shadow-color': project.shadowColor }}
      >
        {/* Hover glow effect */}
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{
            background: `radial-gradient(circle at center, ${project.shadowColor}, transparent 70%)`,
          }}
        />

        {/* Header: Icon + Company badge */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5`}
          >
            <div className="w-full h-full rounded-[10px] bg-dark-900 flex items-center justify-center">
              <Icon className="text-white" size={24} />
            </div>
          </div>
          {project.company && (
            <span className="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.company}
            </span>
          )}
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
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-dark-800/80 text-dark-300 border border-dark-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Store links */}
        {project.links && (
          <div className="flex items-center gap-2 pt-3 border-t border-dark-700/30">
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <PlayStoreIcon />
                Play Store
              </a>
            )}
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <AppStoreIcon />
                App Store
              </a>
            )}
          </div>
        )}

        {/* Bottom gradient line */}
        <div
          className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  )
}
