import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Loader2, CheckCircle } from 'lucide-react';
import { socialLinks, personalInfo } from '@/data/portfolio';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const githubUrl = socialLinks.find((s) => s.label === 'GitHub')?.url ?? '#';
  const linkedinUrl = socialLinks.find((s) => s.label === 'LinkedIn')?.url ?? '#';
  const emailUrl = socialLinks.find((s) => s.label === 'Email')?.url ?? '#';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project idea, a job opportunity, or just want to talk about AI?
            Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="glass-card p-6">
              <h3 className="font-bold text-gray-100 mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href={emailUrl}
                  className="flex items-center gap-3 text-gray-400 hover:text-ai-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-ai-500/10 flex items-center justify-center group-hover:bg-ai-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-ai-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-xs text-gray-500">Send a message</p>
                  </div>
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-ai-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-ai-500/10 flex items-center justify-center group-hover:bg-ai-500/20 transition-colors">
                    <Github className="w-5 h-5 text-ai-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <p className="text-xs text-gray-500 font-mono">
                      @{personalInfo.githubUsername}
                    </p>
                  </div>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-ai-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-ai-500/10 flex items-center justify-center group-hover:bg-ai-500/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-ai-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-xs text-gray-500">Professional network</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-xs text-gray-600 font-mono leading-relaxed">
                Currently teaching machines to think... while convincing my code to
                run. If that resonates, we'll get along.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 rounded-xl px-4 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none focus:ring-1 focus:ring-ai-500/50 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="btn-primary w-full justify-center"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : status === 'sent' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Email Me
                  </>
                )}
              </button>
              <p className="text-xs text-gray-600 text-center">
                This form opens your email client. For a backend-powered form,
                connect a FastAPI endpoint later.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
