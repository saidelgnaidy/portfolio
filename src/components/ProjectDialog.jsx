import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
  </svg>
)

const AppStoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.308-1.944-3.348-2.16-4.068-2.22-1.86-.156-3.372 1.032-4.248 1.032zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z" />
  </svg>
)

export default function ProjectDialog({ project, onClose }) {
  const images = project.images || []
  const Icon = project.icon
  const [index, setIndex] = useState(0)
  const closeRef = useRef(null)

  useEffect(() => {
    setIndex(0)
  }, [project.id])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (!images.length) return
      if (event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % images.length)
      }
      if (event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + images.length) % images.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [images.length, onClose])

  const showPrev = () => {
    if (!images.length) return
    setIndex((current) => (current - 1 + images.length) % images.length)
  }

  const showNext = () => {
    if (!images.length) return
    setIndex((current) => (current + 1) % images.length)
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-ink/70"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative z-10 flex max-h-[100dvh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl bg-page shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
      >
        <div className="flex items-center justify-between gap-3 border-b border-dark-700/40 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              {project.company || project.category}
            </p>
            <h2 id="project-dialog-title" className="truncate text-lg font-bold text-fg sm:text-xl">
              {project.name}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-dark-400 transition-colors hover:bg-dark-800 hover:text-fg"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[1.4fr_1fr]">
          <div className="bg-ink">
            {images.length > 0 ? (
              <div className="flex flex-col">
                <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[420px]">
                  <img
                    src={images[index]}
                    alt={`${project.name} screenshot ${index + 1} of ${images.length}`}
                    className="max-h-[70vh] w-full object-contain"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={22} />
                      </button>
                      <p className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-2.5 py-1 text-xs text-white">
                        {index + 1} / {images.length}
                      </p>
                    </>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto p-3">
                    {images.map((src, imageIndex) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setIndex(imageIndex)}
                        className={`h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                          imageIndex === index
                            ? 'border-cyan-400'
                            : 'border-transparent opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`View screenshot ${imageIndex + 1}`}
                        aria-current={imageIndex === index}
                      >
                        <img src={src} alt="" className="h-full w-full object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className={`flex min-h-[220px] items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                  <Icon className="text-white" size={36} />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5 p-5 sm:p-6">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-dark-700/50 bg-dark-800 px-3 py-1 text-xs font-medium text-dark-300">
                {project.category}
              </span>
              {project.company && (
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono font-medium text-cyan-400">
                  {project.company}
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed text-dark-300 sm:text-base">
              {project.description}
            </p>

            <div>
              <h3 className="mb-2 text-xs font-mono uppercase tracking-wider text-dark-400">
                Tech stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-dark-700/30 bg-dark-800/80 px-2.5 py-1 font-mono text-xs text-dark-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links && (
              <div className="mt-auto flex flex-wrap gap-2 border-t border-dark-700/30 pt-4">
                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-dark-800 px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-dark-700"
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
                    className="inline-flex items-center gap-2 rounded-xl bg-dark-800 px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-dark-700"
                  >
                    <AppStoreIcon />
                    App Store
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
