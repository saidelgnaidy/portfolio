import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-800/50 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-dark-400 text-sm">
          <span>Built with</span>
          <Heart className="text-red-400" size={14} fill="currentColor" />
          <span>by Saeed Ahmed</span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/saidelgnaidy' },
            { icon: Linkedin, href: 'https://linkedin.com/in/saidelgnaidy' },
            { icon: Mail, href: 'mailto:saidelgnaidy@gmail.com' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-white transition-colors duration-300"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-dark-500 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
