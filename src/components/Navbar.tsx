import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Command } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '@/hooks/useTheme';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'ai-stack', label: 'AI Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'playground', label: 'Playground' },
  { id: 'github', label: 'GitHub' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = navItems.map((n) => n.id);

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export function Navbar({ onOpenCommandPalette, onOpenTerminal }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/5' : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 font-mono font-bold text-lg"
          >
            <span className="text-ai-400">{'</'}</span>
            <span className="text-gray-100 dark:text-gray-100">Aqusa</span>
            <span className="text-ai-400">{'>'}</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-ai-400 bg-ai-500/10'
                    : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTerminal}
              aria-label="Open terminal"
              className="p-2 rounded-xl glass hover:bg-white/10 transition-colors duration-200"
            >
              <Terminal className="w-5 h-5 text-ai-300" />
            </button>
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open command palette"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl glass hover:bg-white/10 transition-colors duration-200 text-sm text-gray-400"
            >
              <Command className="w-4 h-4" />
              <span className="text-xs font-mono">K</span>
            </button>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="lg:hidden p-2 rounded-xl glass hover:bg-white/10 transition-colors duration-200"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-gray-200" />
              ) : (
                <Menu className="w-5 h-5 text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden glass border-t border-white/10"
          >
            <div className="section-padding py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-3 rounded-lg text-left font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-ai-400 bg-ai-500/10'
                      : 'text-gray-400 hover:text-gray-100 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
