import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '@/lib/icons';
import { skillGroups } from '@/data/portfolio';
import type { SkillCategory } from '@/types';

const categories: SkillCategory[] = skillGroups.map((g) => g.category);

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const filteredGroups =
    activeCategory === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Skills & Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Tools I use to turn AI concepts into working applications. No fake
            percentages — just what I actually work with.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('All')}
            className={`tag transition-all duration-200 ${
              activeCategory === 'All'
                ? 'bg-ai-500 text-white'
                : 'glass text-gray-400 hover:text-ai-300'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`tag transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ai-500 text-white'
                  : 'glass text-gray-400 hover:text-ai-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-10"
          >
            {filteredGroups.map((group, gi) => (
              <div key={group.category}>
                <h3 className="text-sm font-mono text-ai-400 mb-4 uppercase tracking-wider">
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, i) => {
                    const Icon = getIcon(skill.icon);
                    return (
                      <motion.div
                        key={`${group.category}-${skill.name}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: gi * 0.05 + i * 0.03 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="glass-card p-4 flex items-start gap-3 cursor-default group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-ai-500/10 flex items-center justify-center shrink-0 group-hover:bg-ai-500/20 transition-colors">
                          <Icon className="w-5 h-5 text-ai-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-gray-100 text-sm mb-0.5">
                            {skill.name}
                          </p>
                          <p className="text-xs text-gray-500 leading-snug">
                            {skill.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
