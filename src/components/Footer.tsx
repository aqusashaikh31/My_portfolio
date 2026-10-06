import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';
import { socialLinks, personalInfo, easterEggs } from '@/data/portfolio';

export function Footer() {
  const githubUrl = socialLinks.find((s) => s.label === 'GitHub')?.url ?? '#';
  const linkedinUrl = socialLinks.find((s) => s.label === 'LinkedIn')?.url ?? '#';
  const emailUrl = socialLinks.find((s) => s.label === 'Email')?.url ?? '#';

  const egg = easterEggs[Math.floor(Math.random() * easterEggs.length)];

  return (
    <footer className="border-t border-white/5 py-12 mt-12">
      <div className="section-padding">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl glass hover:bg-ai-500/10 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl glass hover:bg-ai-500/10 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href={emailUrl}
              aria-label="Email"
              className="p-2.5 rounded-xl glass hover:bg-ai-500/10 transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-400" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
            <span>Designed & built by {personalInfo.name}</span>
          </div>

          <p className="text-xs text-gray-600 font-mono max-w-md">{egg}</p>

          <div className="flex items-center gap-1.5 text-xs text-gray-700">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-ai-500/50" />
            <span>React</span>
            <Coffee className="w-3 h-3 text-ai-500/50" />
            <span>Tailwind</span>
            <Heart className="w-3 h-3 text-ai-500/50" />
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
