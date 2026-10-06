import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-title">
            <span className="gradient-text">Resume</span>
          </h2>
          {/* <p className="section-subtitle mx-auto">
            Download or view my resume. Replace the file at{' '}
            <span className="font-mono text-ai-400">/public/resume.pdf</span> to
            update.
          </p> */}
          <p className="section-subtitle mx-auto">
            Download or view my resume.
          </p>

          <div className="glass-card p-8 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-ai-500/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-ai-400" />
            </div>
            <h3 className="font-bold text-gray-100 mb-1">Aqusa Shaikh — Resume</h3>
            <p className="text-sm text-gray-500 mb-6">
              AI Engineer & Generative AI Engineer
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Eye className="w-4 h-4" />
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
