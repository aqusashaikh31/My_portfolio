import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, X } from 'lucide-react';
import { aiStackNodes, aiStackFlow } from '@/data/portfolio';
import { getIcon } from '@/lib/icons';

export function AIStack() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const selected = aiStackNodes.find((n) => n.id === selectedNode);

  return (
    <section id="ai-stack" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">How I Build AI Applications</span>
          </h2>
          <p className="section-subtitle">
            The architecture behind my AI projects. Click any node to learn what
            it does.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-col items-center gap-2">
                {aiStackFlow.map((nodeId, i) => {
                  const node = aiStackNodes.find((n) => n.id === nodeId)!;
                  const Icon = getIcon(node.icon);
                  const isSelected = selectedNode === nodeId;
                  return (
                    <div key={nodeId} className="flex flex-col items-center">
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setSelectedNode(isSelected ? null : nodeId)
                        }
                        className={`relative flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 ${
                          isSelected
                            ? 'bg-ai-500 text-white shadow-lg shadow-ai-500/30'
                            : 'glass hover:bg-ai-500/10 text-gray-200'
                        }`}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">{node.label}</span>
                      </motion.button>
                      {i < aiStackFlow.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + 0.04 }}
                          className="text-ai-500/50 py-0.5"
                        >
                          <ArrowDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-card p-6 sticky top-24"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-ai-500/15 flex items-center justify-center">
                        {(() => {
                          const Icon = getIcon(selected.icon);
                          return <Icon className="w-5 h-5 text-ai-400" />;
                        })()}
                      </div>
                      <h3 className="font-bold text-gray-100">{selected.label}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedNode(null)}
                      aria-label="Close description"
                      className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {selected.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card p-6 sticky top-24 text-center"
                >
                  <p className="text-sm text-gray-500">
                    Click any node in the diagram to see what it does.
                  </p>
                  <p className="text-xs text-gray-600 mt-2 font-mono">
                    This is how AI apps are built — not just prompts.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
