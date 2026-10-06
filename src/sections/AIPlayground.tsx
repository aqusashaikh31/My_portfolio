import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Send, Sparkles, Loader2 } from 'lucide-react';
import { playgroundDemos } from '@/data/portfolio';
import { getIcon } from '@/lib/icons';

type DemoType = 'prompt-generator' | 'rag-demo' | 'chat' | 'summarizer' | 'dev-assistant';

export function AIPlayground() {
  const [activeDemo, setActiveDemo] = useState<DemoType | null>(null);

  return (
    <section id="playground" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">AI Playground</span>
          </h2>
          <p className="section-subtitle">
            AI Playground — where I let the LLM do the talking. These demos run in
            mock mode. They're structured to connect to a FastAPI + LLM backend later.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {playgroundDemos.map((demo, i) => {
            const Icon = getIcon(demo.icon);
            const isActive = activeDemo === demo.type;
            return (
              <motion.button
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => setActiveDemo(isActive ? null : demo.type)}
                className={`glass-card p-5 text-left transition-all duration-200 ${
                  isActive ? 'ring-2 ring-ai-500/50' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-ai-500/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-ai-400" />
                </div>
                <h3 className="font-bold text-gray-100 text-sm mb-1">
                  {demo.title}
                </h3>
                <p className="text-xs text-gray-500 leading-snug">
                  {demo.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeDemo && (
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <DemoContainer type={activeDemo} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function DemoContainer({ type }: { type: DemoType }) {
  switch (type) {
    case 'prompt-generator':
      return <PromptGenerator />;
    case 'rag-demo':
      return <RAGDemo />;
    case 'chat':
      return <ChatDemo />;
    case 'summarizer':
      return <SummarizerDemo />;
    case 'dev-assistant':
      return <DevAssistantDemo />;
  }
}

function DemoWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-ai-400" />
        <h3 className="font-mono text-sm text-ai-300">{title}</h3>
        <span className="ml-auto text-xs text-gray-600 font-mono">demo mode</span>
      </div>
      {children}
    </div>
  );
}

function PromptGenerator() {
  const [topic, setTopic] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = () => {
    if (!topic.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setOutput(
        `You are an expert assistant specializing in ${topic}.\n\nTask: Provide a comprehensive, accurate, and well-structured response.\n\nContext: The user is looking for practical, actionable information.\n\nFormat: Use clear headings, bullet points, and examples where appropriate.\n\nTone: Professional yet accessible.\n\nConstraints: If you are unsure, say so. Do not fabricate information.`
      );
      setLoading(false);
    }, 800);
  };

  return (
    <DemoWrapper title="Prompt Generator">
      <p className="text-sm text-gray-400 mb-4">
        Enter a topic and get a structured system prompt template.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. data science, RAG, code review..."
          className="flex-1 bg-white/5 rounded-xl px-3 py-2 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50"
        />
        <button onClick={generate} disabled={loading} className="btn-primary text-sm">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Generate'}
        </button>
      </div>
      {output && (
        <pre className="text-xs font-mono text-gray-300 bg-black/30 rounded-xl p-4 whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </DemoWrapper>
  );
}

function RAGDemo() {
  const [step, setStep] = useState(0);
  const [query, setQuery] = useState('');
  const steps = [
    { label: 'Document Loading', desc: 'Loading documents from the source...' },
    { label: 'Text Chunking', desc: 'Splitting text into manageable chunks...' },
    { label: 'Embedding Generation', desc: 'Converting chunks into vector embeddings...' },
    { label: 'Vector Store', desc: 'Storing embeddings in the vector database...' },
    { label: 'Retrieval', desc: `Finding relevant chunks for: "${query || 'your query'}"...` },
    { label: 'LLM Generation', desc: 'Generating answer using retrieved context...' },
    { label: 'Answer', desc: 'RAG answer: Based on the retrieved documents, here is a grounded response with source citations.' },
  ];

  const runRAG = () => {
    if (!query.trim()) return;
    setStep(0);
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
  };

  return (
    <DemoWrapper title="RAG Pipeline Demo">
      <p className="text-sm text-gray-400 mb-4">
        Enter a question and watch the RAG pipeline retrieve and generate an answer.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e. What is RAG?"
          className="flex-1 bg-white/5 rounded-xl px-3 py-2 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50"
        />
        <button onClick={runRAG} className="btn-primary text-sm">
          Run RAG
        </button>
      </div>
      {step > 0 || query ? (
        <div className="space-y-2">
          {steps.slice(0, step + 1).map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-ai-400 font-mono text-xs">
                {String(i + 1).padStart(2, '0')}
              </span>
              <ArrowDown className="w-3 h-3 text-ai-500/40 rotate-[-90deg]" />
              <span className="text-gray-300 font-medium">{s.label}</span>
              <span className="text-gray-500 text-xs">— {s.desc}</span>
            </motion.div>
          ))}
        </div>
      ) : null}
    </DemoWrapper>
  );
}

function ChatDemo() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: input },
      {
        role: 'assistant',
        content: `[Demo Mode] I received your message: "${input}". When connected to a FastAPI + LLM backend, I would generate a real AI response here.`,
      },
    ]);
    setInput('');
  };

  return (
    <DemoWrapper title="AI Chat Interface">
      <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm px-3 py-2 rounded-xl ${
              m.role === 'user'
                ? 'bg-accent-500/15 text-gray-100 ml-8'
                : 'glass text-gray-300 mr-8'
            }`}
          >
            {m.content}
          </div>
        ))}
        {messages.length === 0 && (
          <p className="text-xs text-gray-600 text-center py-4">
            Start chatting — responses are simulated in demo mode.
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Type a message..."
          className="flex-1 bg-white/5 rounded-xl px-3 py-2 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50"
        />
        <button onClick={send} className="btn-primary text-sm">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </DemoWrapper>
  );
}

function SummarizerDemo() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarize = () => {
    if (!text.trim()) return;
    setLoading(true);
    setTimeout(() => {
      const words = text.split(' ').slice(0, 5).join(' ');
      setSummary(
        `[Demo Mode] Summary: ${words}... \n\nKey points:\n• This is a simulated summary\n• When connected to an LLM API, this would return a real AI-generated summary\n• The backend would use a summarization chain or map-reduce strategy`
      );
      setLoading(false);
    }, 800);
  };

  return (
    <DemoWrapper title="Text Summarizer">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text to summarize..."
        rows={4}
        className="w-full bg-white/5 rounded-xl px-3 py-2 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50 mb-3 resize-none"
      />
      <button onClick={summarize} disabled={loading} className="btn-primary text-sm mb-4">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Summarize'}
      </button>
      {summary && (
        <pre className="text-xs font-mono text-gray-300 bg-black/30 rounded-xl p-4 whitespace-pre-wrap">
          {summary}
        </pre>
      )}
    </DemoWrapper>
  );
}

function DevAssistantDemo() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const ask = () => {
    if (!question.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setAnswer(
        `[Demo Mode] Question: "${question}"\n\nAnswer: When connected to a FastAPI backend with an LLM, this assistant would provide real code examples, explanations, and debugging help. The backend would use a coding-focused prompt template with tool-calling capabilities for tasks like code execution or documentation lookup.`
      );
      setLoading(false);
    }, 800);
  };

  return (
    <DemoWrapper title="Developer Assistant">
      <p className="text-sm text-gray-400 mb-4">
        Ask a coding question and get an AI-style answer (demo mode).
      </p>
      <div className="flex gap-2 mb-4">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && ask()}
          placeholder="e. How do I create a RAG pipeline?"
          className="flex-1 bg-white/5 rounded-xl px-3 py-2 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50"
        />
        <button onClick={ask} disabled={loading} className="btn-primary text-sm">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Ask'}
        </button>
      </div>
      {answer && (
        <pre className="text-xs font-mono text-gray-300 bg-black/30 rounded-xl p-4 whitespace-pre-wrap">
          {answer}
        </pre>
      )}
    </DemoWrapper>
  );
}
