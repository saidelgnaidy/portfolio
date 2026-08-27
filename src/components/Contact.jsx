import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saeed.ahmed@tigrisnet.tech',
    href: 'mailto:saeed.ahmed@tigrisnet.tech',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/saidelgnaidy',
    href: 'https://github.com/saidelgnaidy',
    color: 'from-gray-400 to-gray-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/saidelgnaidy',
    href: 'https://linkedin.com/in/saidelgnaidy',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Abu Dhabi, UAE',
    href: null,
    color: 'from-emerald-400 to-teal-500',
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
        {/* Section header */}
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
            Have a project in mind? I'd love to hear about it. Let's build something amazing together.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card gradient-border rounded-2xl p-6 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300 block"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-[10px] bg-dark-900 flex items-center justify-center">
                      <contact.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-dark-400 font-medium uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-cyan-300 transition-colors">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass-card gradient-border rounded-2xl p-6 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-[10px] bg-dark-900 flex items-center justify-center">
                      <contact.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-dark-400 font-medium uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="mailto:saeed.ahmed@tigrisnet.tech"
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
