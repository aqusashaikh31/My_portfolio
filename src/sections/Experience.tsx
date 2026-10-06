import { motion } from 'framer-motion';
import { getIcon } from '@/lib/icons';
import { timeline, personalInfo } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="section-subtitle">
            Still learning. Still building. Still occasionally asking why the code
            worked yesterday.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-ai-500/50 via-ai-500/20 to-transparent sm:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = getIcon(item.icon);
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative flex items-center gap-6 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-8 h-8 rounded-full bg-ai-500/20 border border-ai-500/40 flex items-center justify-center z-10 shrink-0">
                    <Icon className="w-4 h-4 text-ai-400" />
                  </div>
                  <div className={`flex-1 pl-14 sm:pl-0 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="glass-card p-4">
                      <h3 className="font-bold text-sm text-gray-100 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-600 font-mono mt-10"
        >
          {personalInfo.funnyTagline}
        </motion.p>
      </div>
    </section>
  );
}
