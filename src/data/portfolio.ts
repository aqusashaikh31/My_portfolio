import type {
  Project,
  SkillGroup,
  AIStackNode,
  TimelineItem,
  SocialLink,
  PlaygroundDemo,
} from '@/types';

/* ============================================================
   EDIT THIS FILE to update your portfolio content.
   Everything below is data — no need to touch the UI components.
   ============================================================ */

export const personalInfo = {
  name: 'Aqusa Shaikh',
  title: 'AI Engineer | Generative AI Engineer',
  tagline: 'AI Engineer • GenAI Builder • Vibe Coder',
  description:
    'I build AI-powered applications using LLMs, RAG, AI Agents, Machine Learning and modern developer tools.',
  funnyTagline:
    'AI Engineer in progress → powered by Python, LLMs & a slightly unhealthy amount of debugging.',
  secondaryTagline:
    'AI Engineer by day. Prompt Engineer by night. Professional bug negotiator 24/7.',
  resumeUrl: '/resume.pdf',
  githubUsername: 'aqusashaikh31',
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/aqusashaikh31', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/aqusa-shaikh-8a2922252/', icon: 'linkedin' },
  { 
  label: 'Email', 
  url: 'https://mail.google.com/mail/?view=cm&fs=1&to=aqusashaikh31@gmail.com', 
  icon: 'mail' 
},
];

export const stats = [
  { label: 'AI & Data Science Graduate', value: '✓', icon: 'graduation-cap' },
  { label: 'AI/GenAI Projects', value: '6+', icon: 'brain' },
  { label: 'Technologies Learned', value: '20+', icon: 'layers' },
  { label: 'GitHub Projects', value: '↗', icon: 'github' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: 'code', category: 'Programming', description: 'Primary language for AI/ML & backend development' },
      { name: 'JavaScript', icon: 'code', category: 'Programming', description: 'Frontend interactivity & web applications' },
      { name: 'C', icon: 'code', category: 'Programming', description: 'Fundamentals of systems & memory management' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'layout', category: 'Frontend', description: 'Semantic page structure & accessibility' },
      { name: 'CSS', icon: 'palette', category: 'Frontend', description: 'Styling, layout & responsive design' },
      { name: 'JavaScript', icon: 'code', category: 'Frontend', description: 'Dynamic UI & DOM manipulation' },
      // { name: 'React', icon: 'atom', category: 'Frontend', description: 'Component-based UI development' },
      { name: 'Tailwind CSS', icon: 'wind', category: 'Frontend', description: 'Utility-first CSS framework' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Machine Learning', icon: 'brain', category: 'AI / ML', description: 'Supervised & unsupervised learning models' },
      { name: 'Deep Learning', icon: 'network', category: 'AI / ML', description: 'Neural networks with TensorFlow/Keras' },
      { name: 'Natural Language Processing ', icon: 'network', category: 'AI / ML', description: 'Text processing, sentiment analysis & LLMs' },
      { name: 'Pandas', icon: 'table', category: 'AI / ML', description: 'Data manipulation & analysis' },
      { name: 'NumPy', icon: 'table', category: 'AI / ML', description: 'Numerical computing & arrays' },
      { name: 'Matplotlib', icon: 'bar-chart', category: 'AI / ML', description: 'Data visualization & plotting' },
      { name: 'Seaborn', icon: 'bar-chart', category: 'AI / ML', description: 'Statistical data visualization' },
    ],
  },
  {
    category: 'Generative AI',
    skills: [
      { name: 'LLMs', icon: 'sparkles', category: 'Generative AI', description: 'Large Language Model application development' },
      { name: 'Prompt Engineering', icon: 'message-square', category: 'Generative AI', description: 'Crafting effective prompts for LLMs' },
      { name: 'LangChain', icon: 'link', category: 'Generative AI', description: 'LLM application framework' },
      { name: 'LangGraph', icon: 'git-branch', category: 'Generative AI', description: 'Stateful multi-actor agent orchestration' },
      { name: 'RAG', icon: 'search', category: 'Generative AI', description: 'Retrieval-Augmented Generation pipelines' },
      { name: 'Embeddings', icon: 'vector', category: 'Generative AI', description: 'Vector representations of text' },
      { name: 'Vector Databases', icon: 'database', category: 'Generative AI', description: 'Storing & retrieving embeddings' },
      { name: 'AI Agents', icon: 'bot', category: 'Generative AI', description: 'Autonomous LLM-powered systems' },
      { name: 'Tool Calling', icon: 'wrench', category: 'Generative AI', description: 'Function/tool calling with LLMs' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', icon: 'server', category: 'Backend', description: 'Python API framework for AI backends' },
      { name: 'REST APIs', icon: 'globe', category: 'Backend', description: 'Designing & consuming REST endpoints' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: 'database', category: 'Database', description: 'Relational database management' },
      { name: 'MongoDB', icon: 'database', category: 'Database', description: 'NoSQL document database & flexible schema' },

    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git', icon: 'git-branch', category: 'Developer Tools', description: 'Version control & collaboration' },
      { name: 'GitHub', icon: 'github', category: 'Developer Tools', description: 'Code hosting & project management' },
      { name: 'VS Code', icon: 'code', category: 'Developer Tools', description: 'Primary code editor' },
      { name: 'Cursor AI', icon: 'mouse-pointer', category: 'Developer Tools', description: 'AI-assisted code editor' },
      { name: 'Postman', icon: 'send', category: 'Developer Tools', description: 'API testing & development' },
      { name: 'Jupyter', icon: 'book', category: 'Developer Tools', description: 'Interactive notebooks for ML' },
    ],
  },
  {
    category: 'Deployment',
    skills: [
      { name: 'Vercel', icon: 'cloud', category: 'Deployment', description: 'Frontend deployment platform' },
      { name: 'Streamlit', icon: 'monitor', category: 'Deployment', description: 'Python web apps for ML demos' },
    ],
  },
  {
    category: 'AI Ecosystem',
    skills: [
      { name: 'Hugging Face', icon: 'huggingface', category: 'AI Ecosystem', description: 'Open-source models & datasets' },
      { name: 'Gemini APIs', icon: 'sparkles', category: 'AI Ecosystem', description: 'Google Gemini LLM API integration' },
      { name: 'Open-source Models', icon: 'box', category: 'AI Ecosystem', description: 'Llama, Mistral & community models' },
      { name: 'Cloud API', icon: 'cloud-lightning', category: 'AI Ecosystem', description: 'Cloud-hosted AI models & serverless API endpoints' },

    ],
  },
];

export const aiStackNodes: AIStackNode[] = [
  { id: 'user', label: 'User', icon: 'user', description: 'The person interacting with the AI application — asks a question or gives a task.' },
  { id: 'frontend', label: 'Frontend', icon: 'monitor', description: 'React, Streamlit, or any UI that captures user input and displays the AI response.' },
  { id: 'backend', label: 'FastAPI / Backend', icon: 'server', description: 'The API layer that receives requests, orchestrates the AI pipeline, and returns responses.' },
  { id: 'agent', label: 'AI Agent / LangChain', icon: 'bot', description: 'LLM-powered systems that decide which tools or actions to use. LangChain/LangGraph orchestrate the flow.' },
  { id: 'rag', label: 'RAG / Tools / APIs', icon: 'search', description: 'Retrieves relevant information before asking the LLM to generate an answer. Also handles tool/function calling.' },
  { id: 'llm', label: 'LLM', icon: 'sparkles', description: 'The Large Language Model that generates the final response — could be GPT, Gemini, Llama, or an open-source model.' },
  { id: 'database', label: 'PostgreSQL / Vector DB', icon: 'database', description: 'Stores structured data (PostgreSQL) and embeddings (Vector Database) for retrieval.' },
  { id: 'response', label: 'Response', icon: 'check-circle', description: 'The final answer sent back to the user through the frontend.' },
];

export const aiStackFlow = ['user', 'frontend', 'backend', 'agent', 'rag', 'llm', 'database', 'response'];

export const projects: Project[] = [
  {
    id: 'neuromind-ai',
    name: 'NeuroMind AI',
    description: "Alzheimer's Detection using MRI images — a deep learning model that analyzes brain scans to detect signs of Alzheimer's disease.",
    problem: "Early detection of Alzheimer's disease from MRI scans is difficult and requires specialist expertise. This project automates that detection using deep learning.",
    technologies: ['Python', 'Deep Learning', 'ResNet', 'Streamlit'],
    githubUrl: '#',
    liveUrl: '#',
    linkedinUrl: '#',
    type: ['AI', 'Machine Learning'],
    category: 'AI',
  },
  {
    id: 'alter-ats',
    name: 'Alter – ATS Resume Analyzer',
    description: 'AI-powered resume analysis and job-description matching application that scores resumes against job postings.',
    problem: 'Job seekers struggle to tailor their resumes for specific job descriptions. This tool analyzes and scores the match using AI.',
    technologies: ['Python', 'Streamlit', 'LLM', 'PDF Processing', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    linkedinUrl: '#',
    type: ['AI', 'GenAI'],
    category: 'GenAI',
  },
  {
    id: 'movie-recommendation',
    name: 'Movie Recommendation System',
    description: 'Personalized movie recommendation application that suggests films based on user preferences and viewing history.',
    problem: 'Users are overwhelmed by choice. This system narrows down movies using collaborative and content-based filtering.',
    technologies: ['Python', 'Machine Learning', 'Streamlit', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    linkedinUrl: '#',
    type: ['Machine Learning', 'Data Analytics'],
    category: 'Machine Learning',
  },
//   {
//   id: 'churn-analysis',
//   name: 'Customer Churn Analysis',
//   description: 'Data analytics and machine learning system that analyzes customer behavior, identifies churn patterns, and helps predict customers at risk of leaving.',
//   problem: 'Customer churn can lead to revenue loss. This system analyzes customer data to identify churn patterns, key factors, and high-risk customer segments.',
//   technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Machine Learning', 'SQL'],
//   githubUrl: '#',
//   liveUrl: '#',
//   linkedinUrl: '#',
//   type: ['AI', 'Data Analytics', 'Machine Learning'],
//   category: 'Data Analytics',
// },
  {
    id: 'invoice-intelligence',
    name: 'Invoice Intelligence System',
    description: 'AI-powered invoice and document processing system that extracts, analyzes, and structures data from documents.',
    problem: 'Manual invoice processing is slow and error-prone. This system uses AI to extract and structure document data automatically.',
    technologies: ['Python', 'LLM', 'Document Processing'],
    githubUrl: '#',
    liveUrl: '#',
    linkedinUrl: '#',
    type: ['AI', 'GenAI'],
    category: 'GenAI',
  },
  {
    id: 'traditional-rag',
    name: 'Traditional RAG Pipeline',
    description: 'A RAG application demonstrating document loading, chunking, embeddings, retrieval, and generation end-to-end.',
    problem: 'LLMs hallucinate when they lack specific knowledge. RAG solves this by retrieving relevant documents before generating an answer.',
    technologies: ['Python', 'LangChain', 'RAG', 'Vector Database'],
    githubUrl: 'https://github.com/aqusashaikh31/Traditional_RAG_Pipeline.git',
    liveUrl: '#',
    linkedinUrl: '#',
    type: ['RAG', 'GenAI'],
    category: 'RAG',
    featured: true,
    caseStudy: {
      problem: 'LLMs generate confident but incorrect answers when they lack domain-specific knowledge. They also cannot cite their sources.',
      solution: 'A Retrieval-Augmented Generation pipeline that retrieves relevant document chunks from a vector database before passing them as context to the LLM, ensuring grounded, source-backed answers.',
      architecture: [
        'Document',
        'Loader',
        'Text Splitter',
        'Embeddings',
        'Vector Store',
        'Retriever',
        'LLM',
        'Answer',
      ],
      techStack: ['Python', 'LangChain', 'Vector Database', 'Embeddings', 'FastAPI'],
      keyFeatures: [
        'Document loading from multiple file formats',
        'Recursive text chunking with configurable overlap',
        'Embedding generation for semantic search',
        'Vector store for efficient similarity retrieval',
        'Context-aware answer generation',
        'Source citation for every response',
      ],
      whatILearned: 'How to build a complete RAG pipeline from scratch — understanding each stage from document ingestion to answer generation, and why chunking strategy and embedding quality matter.',
    },
  },
  {
    id: 'velora-beauty',
    name: 'Velora Beauty',
    description: 'Modern AI-assisted e-commerce web application built while exploring Cursor AI and AI-assisted development workflows.',
    problem: 'Building a full e-commerce frontend is time-consuming. This project explored how AI-assisted tools like Cursor can accelerate development.',
    technologies: ['React', 'JavaScript/TypeScript', 'CSS', 'Vercel', 'Cursor AI'],
    githubUrl: 'https://github.com/aqusashaikh31/velora-beauty.git',
    liveUrl: 'https://lnkd.in/da9MV-9y',
    linkedinUrl: 'https://lnkd.in/p/d4Bhn8Hg',
    type: ['Web Apps'],
    category: 'Web Apps',
  },
];

export const projectFilters = [
  'All',
  'AI',
  'GenAI',
  'RAG',
  'Machine Learning',
  'Web Apps',
  'Data Analytics',
] as const;

export const timeline: TimelineItem[] = [
  { id: '1', title: 'AI & Data Science Graduate', description: 'Started the formal journey into AI and data science.', icon: 'graduation-cap' },
  { id: '2', title: 'Machine Learning', description: 'Learned supervised and unsupervised learning algorithms.', icon: 'brain' },
  { id: '3', title: 'Deep Learning', description: 'Explored neural networks, CNNs, and transfer learning.', icon: 'network' },
  { id: '4', title: 'Generative AI', description: 'Discovered the world of LLMs and generative models.', icon: 'sparkles' },
  { id: '5', title: 'LangChain', description: 'Started building LLM applications with LangChain framework.', icon: 'link' },
  { id: '6', title: 'RAG', description: 'Built retrieval-augmented generation pipelines.', icon: 'search' },
  { id: '7', title: 'AI Agents', description: 'Explored agentic AI and tool-calling systems.', icon: 'bot' },
  { id: '8', title: 'AI Engineering', description: 'Putting it all together — building end-to-end AI applications.', icon: 'rocket' },
];

export const playgroundDemos: PlaygroundDemo[] = [
  { id: 'prompt-gen', title: 'Prompt Generator', description: 'Generate structured prompts for different use cases.', icon: 'message-square', type: 'prompt-generator' },
  { id: 'rag-demo', title: 'RAG Demo', description: 'See how retrieval-augmented generation works step by step.', icon: 'search', type: 'rag-demo' },
  { id: 'chat', title: 'AI Chat Interface', description: 'Chat with an AI assistant (demo mode).', icon: 'bot', type: 'chat' },
  { id: 'summarizer', title: 'Text Summarizer', description: 'Summarize long text into key points (demo mode).', icon: 'file-text', type: 'summarizer' },
  { id: 'dev-assistant', title: 'Developer Assistant', description: 'Ask coding questions and get AI-style answers (demo mode).', icon: 'code', type: 'dev-assistant' },
];

export const easterEggs = [
  'Powered by Python, caffeine & questionable debugging decisions.',
  'Vibe coding level: professional enough to deploy.',
  "Works on my machine™",
  "AI wrote some of this. I reviewed it. Probably.",
];
