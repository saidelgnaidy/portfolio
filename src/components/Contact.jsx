import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send, Phone, FileDown } from 'lucide-react'
import { cvPath, profile } from '../data/projects'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/saidelgnaidy',
    href: profile.github,
    color: 'from-gray-400 to-gray-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/saidelgnaidy',
    href: profile.linkedin,
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: FileDown,
    label: 'CV',
    value: 'Download PDF',
    href: cvPath,
    color: 'from-violet-400 to-purple-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
    color: 'from-amber-400 to-orange-500',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto text-lg">
            Building biometric, hardware, or enterprise mobile products? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') || contact.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') || contact.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                  className="glass-card gradient-border rounded-2xl p-5 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300 block h-full"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${contact.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-[10px] bg-dark-900 flex items-center justify-center">
                      <contact.icon className="text-white" size={18} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-dark-400 font-medium uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors truncate">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass-card gradient-border rounded-2xl p-5 flex items-center gap-4 h-full">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${contact.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-[10px] bg-dark-900 flex items-center justify-center">
                      <contact.icon className="text-white" size={18} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-dark-400 font-medium uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white text-sm font-medium">{contact.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            <Send size={20} />
            Send me a message
          </a>
        </motion.div>
      </div>
    </section>
  )
}
