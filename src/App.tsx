import { useEffect, useState, useCallback } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CommandPalette, type PaletteCommand } from '@/components/CommandPalette';
import { TerminalMode } from '@/components/TerminalMode';
import { AIChatAssistant } from '@/components/AIChatAssistant';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { AIStack } from '@/sections/AIStack';
import { Projects } from '@/sections/Projects';
import { FeaturedProject } from '@/sections/FeaturedProject';
import { AIPlayground } from '@/sections/AIPlayground';
import { GitHubActivity } from '@/sections/GitHubActivity';
import { Experience } from '@/sections/Experience';
import { Resume } from '@/sections/Resume';
import { Contact } from '@/sections/Contact';
import { socialLinks } from '@/data/portfolio';
import {
  Home,
  User,
  Layers,
  Cpu,
  FolderGit2,
  Play,
  Github,
  FileText,
  Mail,
  Terminal,
} from 'lucide-react';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const githubUrl = socialLinks.find((s) => s.label === 'GitHub')?.url ?? '#';
  const linkedinUrl = socialLinks.find((s) => s.label === 'LinkedIn')?.url ?? '#';

  const commands: PaletteCommand[] = [
    { id: 'home', label: 'Go Home', icon: <Home className="w-4 h-4" />, action: () => scrollTo('home') },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" />, action: () => scrollTo('about') },
    { id: 'skills', label: 'Skills', icon: <Layers className="w-4 h-4" />, action: () => scrollTo('skills') },
    { id: 'ai-stack', label: 'AI Stack', icon: <Cpu className="w-4 h-4" />, action: () => scrollTo('ai-stack') },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" />, action: () => scrollTo('projects') },
    { id: 'playground', label: 'AI Playground', icon: <Play className="w-4 h-4" />, action: () => scrollTo('playground') },
    { id: 'resume', label: 'Resume', icon: <FileText className="w-4 h-4" />, action: () => scrollTo('resume') },
    { id: 'github', label: 'GitHub', icon: <Github className="w-4 h-4" />, action: () => window.open(githubUrl, '_blank') },
    { id: 'linkedin', label: 'LinkedIn', icon: <Github className="w-4 h-4" />, action: () => window.open(linkedinUrl, '_blank') },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" />, action: () => scrollTo('contact') },
    { id: 'terminal', label: 'Open Terminal', icon: <Terminal className="w-4 h-4" />, action: () => setTerminalOpen(true), shortcut: 'T' },
  ];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
      if (e.key.toLowerCase() === 't' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        if (!paletteOpen && !terminalOpen) {
          setTerminalOpen((prev) => !prev);
        }
      }
      if (e.key === 'Escape') {
        setTerminalOpen(false);
      }
    },
    [paletteOpen, terminalOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <div className="min-h-screen relative">
      <Navbar
        onOpenCommandPalette={() => setPaletteOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <AIStack />
        <Projects />
        <FeaturedProject />
        <AIPlayground />
        <GitHubActivity />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <Footer />

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        commands={commands}
      />
      <TerminalMode open={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <AIChatAssistant />
    </div>
  );
}

export default App;
