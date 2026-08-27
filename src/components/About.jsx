import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats, skills } from '../data/projects'
import { Code2, Smartphone, Shield, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Smartphone,
    title: 'Native Android',
    description: 'Expert in Kotlin, Jetpack Compose, and the full Android SDK ecosystem.',
  },
  {
    icon: Shield,
    title: 'Biometric Systems',
    description: 'Specialized in liveness detection, face matching, and eKYC solutions.',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'MVVM, Hilt DI, Coroutines/Flow, and industry best practices.',
  },
  {
    icon: Zap,
    title: 'Enterprise Grade',
    description: 'Building scalable solutions for ADNOC, government, and private sector.',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Turning Ideas into{' '}
            <span className="gradient-text">Powerful Apps</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-lg leading-relaxed">
            A passionate Android developer with 5+ years of experience building production-grade
            mobile applications across biometrics, enterprise, and public service domains.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl sm:text-4xl font-black gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-dark-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card gradient-border rounded-2xl p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center mb-4 group-hover:from-cyan-500/20 group-hover:to-violet-500/20 transition-all duration-300">
                <item.icon className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-dark-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-dark-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.05, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
