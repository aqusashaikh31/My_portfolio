import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FolderGit2 } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

const terminalLines = [
  { text: '> initialize_ai_engineer()', delay: 0 },
  { text: '> loading_skills...', delay: 400 },
  { text: '> LLM ✓', delay: 800 },
  { text: '> RAG ✓', delay: 1100 },
  { text: '> Agents ✓', delay: 1400 },
  { text: '> ML ✓', delay: 1700 },
  { text: '> Python ✓', delay: 2000 },
  { text: '> debugging... still running 😄', delay: 2400 },
];

const githubUrl = socialLinks.find((s) => s.label === 'GitHub')?.url ?? '#';
const linkedinUrl = socialLinks.find((s) => s.label === 'LinkedIn')?.url ?? '#';

export function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers = terminalLines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-mono text-gray-400">{personalInfo.tagline}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3"
          >
            <span className="text-gray-100">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-mono mb-4 gradient-text"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-400 mb-2 max-w-xl leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-gray-500 mb-8 max-w-lg italic"
          >
            {personalInfo.funnyTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              <FolderGit2 className="w-4 h-4" />
              View Projects
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <button onClick={() => scrollTo('contact')} className="btn-secondary">
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xs text-gray-600 mt-6 font-mono"
          >
            {personalInfo.secondaryTagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="glass-card overflow-hidden shadow-2xl shadow-ai-500/10">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs font-mono text-gray-500">ai_engineer.py</span>
            </div>
            <div className="p-5 font-mono text-sm min-h-[280px]">
              {terminalLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mb-1.5 ${
                    line.text.includes('✓')
                      ? 'text-green-400'
                      : line.text.includes('debugging')
                        ? 'text-yellow-400'
                        : 'text-ai-300'
                  }`}
                >
                  {line.text}
                </motion.div>
              ))}
              {visibleLines >= terminalLines.length && (
                <span className="inline-block w-2 h-4 bg-ai-400 animate-blink ml-1" />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-ai-400 transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowRight className="w-6 h-6 rotate-90 animate-bounce" />
      </motion.button>
    </section>
  );
}
