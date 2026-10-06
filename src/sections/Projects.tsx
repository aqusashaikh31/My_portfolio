import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Linkedin } from 'lucide-react';
import { projects, projectFilters } from '@/data/portfolio';
import type { ProjectType } from '@/types';

export function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.type.includes(filter as ProjectType));

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Things I've built — from deep learning to RAG pipelines to AI-assisted
            web apps.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`tag transition-all duration-200 ${
                filter === f
                  ? 'bg-ai-500 text-white'
                  : 'glass text-gray-400 hover:text-ai-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden group flex flex-col"
              >
                <div className="p-5 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-100 group-hover:text-ai-300 transition-colors">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className="tag bg-accent-500/20 text-accent-400">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs font-mono text-gray-600 mb-1.5">
                      Problem:
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tag bg-ai-500/10 text-ai-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.type.map((t) => (
                      <span
                        key={t}
                        className="tag bg-white/5 text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 px-5 py-3 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-ai-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-ai-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-ai-300 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    Post
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-600 font-mono mt-10"
        >
          GitHub / Live / LinkedIn links are placeholders — update them in{' '}
          <span className="text-ai-500">src/data/portfolio.ts</span>
        </motion.p> */}
      </div>
    </section>
  );
}
