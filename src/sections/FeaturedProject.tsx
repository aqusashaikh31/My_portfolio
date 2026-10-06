import { motion } from 'framer-motion';
import { ArrowDown, Target, Lightbulb, Puzzle, Star, BookOpen, CheckCircle } from 'lucide-react';
import { projects } from '@/data/portfolio';

export function FeaturedProject() {
  const featured = projects.find((p) => p.featured);
  if (!featured || !featured.caseStudy) return null;

  const cs = featured.caseStudy;

  return (
    <section id="featured" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-ai-400 mb-2 uppercase tracking-wider">
            Case Study
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Featured Project</span>
          </h2>
          <p className="section-subtitle">
            A deep dive into {featured.name} — how it works and what I learned.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-ai-400" />
                <h3 className="font-bold text-gray-100">Problem</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{cs.problem}</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-5 h-5 text-ai-400" />
                <h3 className="font-bold text-gray-100">Solution</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{cs.solution}</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Puzzle className="w-5 h-5 text-ai-400" />
                <h3 className="font-bold text-gray-100">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cs.techStack.map((tech) => (
                  <span key={tech} className="tag bg-ai-500/10 text-ai-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-ai-400" />
                <h3 className="font-bold text-gray-100">Key Features</h3>
              </div>
              <ul className="space-y-2">
                {cs.keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-ai-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-ai-400" />
                <h3 className="font-bold text-gray-100">What I Learned</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{cs.whatILearned}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <h3 className="text-sm font-mono text-ai-400 mb-6 uppercase tracking-wider text-center">
            Architecture
          </h3>
          <div className="glass-card p-6 sm:p-8">
            <div className="flex flex-col items-center gap-1">
              {cs.architecture.map((step, i) => (
                <div key={step} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="px-5 py-2.5 rounded-xl glass text-sm font-mono text-gray-200 hover:bg-ai-500/10 hover:text-ai-300 transition-colors cursor-default"
                  >
                    {step}
                  </motion.div>
                  {i < cs.architecture.length - 1 && (
                    <ArrowDown className="w-4 h-4 text-ai-500/40 py-0.5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
