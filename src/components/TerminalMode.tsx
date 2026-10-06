import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, ChevronRight } from 'lucide-react';
import { getTerminalResponse } from '@/lib/aiKnowledge';

interface TerminalLine {
  type: 'input' | 'output';
  text: string;
}

interface TerminalModeProps {
  open: boolean;
  onClose: () => void;
}

export function TerminalMode({ open, onClose }: TerminalModeProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      text: `Aqusa OS v1.0 — Terminal Mode\nType 'help' to see available commands.\n`,
    },
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    if (cmd.trim().toLowerCase() === 'clear') {
      setLines([]);
      return;
    }
    const output = getTerminalResponse(cmd);
    setLines((prev) => [
      ...prev,
      { type: 'input', text: cmd },
      ...(output ? [{ type: 'output' as const, text: output }] : []),
    ]);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl h-[60vh] bg-[#0a0a0f] border border-ai-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-ai-500/10"
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-ai-400" />
                <span className="font-mono text-sm text-gray-300">terminal — aqusa@portfolio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <button onClick={onClose} aria-label="Close terminal">
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-100 transition-colors" />
                </button>
              </div>
            </div>
            <div
              ref={scrollRef}
              className="h-[calc(60vh-3.5rem)] overflow-y-auto p-4 font-mono text-sm"
            >
              {lines.map((line, i) => (
                <div key={i} className="mb-1">
                  {line.type === 'input' ? (
                    <div className="flex items-start gap-2 text-ai-300">
                      <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" />
                      <span className="text-gray-200">{line.text}</span>
                    </div>
                  ) : (
                    <pre className="text-gray-400 whitespace-pre-wrap pl-6">
                      {line.text}
                    </pre>
                  )}
                </div>
              ))}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand(input);
                  setInput('');
                }}
                className="flex items-center gap-2 mt-1"
              >
                <ChevronRight className="w-4 h-4 text-ai-400 shrink-0" />
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none font-mono text-sm text-gray-100 placeholder-gray-600"
                  placeholder="type a command..."
                  aria-label="Terminal input"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
