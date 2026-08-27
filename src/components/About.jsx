import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats, skills, experience } from '../data/projects'
import { Code2, Smartphone, Shield, Zap, Briefcase, MapPin, GraduationCap } from 'lucide-react'

const highlights = [
  {
    icon: Smartphone,
    title: 'Flutter & Native Android',
    description: 'Expert in Flutter, Dart, Kotlin, Java, Jetpack Compose, and the full mobile SDK ecosystem.',
  },
  {
    icon: Shield,
    title: 'Biometric & eKYC',
    description: 'Face recognition, OCR, liveness detection, and Morpho/ID Screen device integration.',
  },
  {
    icon: Zap,
    title: 'Hardware Integration',
    description: 'BLE, NFC (MIFARE/DESFire), POS systems, fingerprint tablets, and attendance hardware.',
  },
  {
    icon: Code2,
    title: 'Architecture & Leadership',
    description: 'MVVM, Clean Architecture, Bloc/GetX, CI/CD, team mentoring, and agile methodologies.',
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
          <p className="text-dark-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Mobile Developer and Team Leader with 6+ years of experience designing and building
            advanced mobile applications using Flutter, Dart, and native Android. Expert in
            integrating complex hardware systems including BLE, NFC, biometric devices, and POS systems.
            Deep understanding of AI-enhanced systems such as face recognition and OCR for eKYC.
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

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-2xl p-8 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-cyan-400" size={24} />
            <h3 className="text-xl font-bold text-white">Experience</h3>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                    exp.current
                      ? 'border-cyan-400 bg-cyan-400/20'
                      : 'border-dark-500 bg-dark-800'
                  }`} />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h4 className="text-white font-semibold text-lg">{exp.company}</h4>
                      <p className="text-cyan-400 text-sm font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-dark-400">
                      <span className="font-mono">{exp.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-dark-400 leading-relaxed flex gap-2">
                        <span className="text-dark-600 mt-1 flex-shrink-0">&#9656;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-8 pt-6 border-t border-dark-700/50">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="text-violet-400" size={20} />
              <h4 className="text-white font-semibold">Education</h4>
            </div>
            <p className="text-dark-300 text-sm pl-8">
              <span className="font-medium text-dark-200">Faculty of Computer and Information Systems</span>
              <span className="text-dark-500"> — </span>
              Zagazig University, Egypt
              <span className="text-dark-500"> | </span>
              <span className="font-mono text-dark-400">2016 – 2020</span>
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
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
