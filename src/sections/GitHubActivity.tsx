import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Loader2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: string | number;
  topics: string[];
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (!res.ok) throw new Error('Failed to fetch');
        const data: Repo[] = await res.json();
        setRepos(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const profileUrl = `https://github.com/${personalInfo.githubUsername}`;

  return (
    <section id="github" className="py-24 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <p className="section-subtitle">
            Latest repositories from{' '}
            <span className="font-mono text-ai-400">@{personalInfo.githubUsername}</span>
          </p>
        </motion.div>

        <div className="flex items-center gap-3 mb-8">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github className="w-4 h-4" />
            Visit GitHub Profile
          </a>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-8 h-8 text-ai-400 animate-spin" />
          </div>
        ) : error ? (
          <div className="glass-card p-8 text-center">
            <p className="text-gray-400 mb-2">
              Couldn't load GitHub repositories right now.
            </p>
            <p className="text-xs text-gray-600 font-mono">
              The GitHub API may be rate-limited. You can still visit the profile
              directly.
            </p>
          </div>
        ) : repos.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <p className="text-gray-400">No public repositories found yet.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card p-5 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-sm text-gray-100 group-hover:text-ai-300 transition-colors">
                    {repo.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-ai-400 transition-colors shrink-0" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 min-h-[2rem]">
                  {repo.description || 'No description available.'}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-ai-400" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    {repo.forks_count}
                  </span>
                </div>
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="tag bg-ai-500/10 text-ai-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
