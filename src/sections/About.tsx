import { motion } from 'framer-motion';
import { getIcon } from '@/lib/icons';
import { stats, personalInfo } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="section-subtitle">
            AI Engineer by training, builder by choice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I am an{' '}
              <span className="text-ai-400 font-medium">
                Artificial Intelligence & Data Science
              </span>{' '}
              graduate focused on building practical AI and Generative AI applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My interests include AI Engineering, Generative AI, LLM applications,
              RAG, AI Agents, Machine Learning, and Data Analytics. I like turning
              AI concepts into actual applications rather than leaving them inside
              notebooks.
            </p>
            <p className="text-gray-400 leading-relaxed italic border-l-2 border-ai-500/50 pl-4">
              "I like turning AI concepts into actual applications rather than
              leaving them inside notebooks."
            </p>
            <p className="text-gray-500 text-sm font-mono pt-2">
              {personalInfo.secondaryTagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = getIcon(stat.icon);
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card p-5 text-center"
                >
                  <Icon className="w-7 h-7 text-ai-400 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-gray-100 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
