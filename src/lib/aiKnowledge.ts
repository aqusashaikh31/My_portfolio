import { personalInfo } from '@/data/portfolio';

interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ['project', 'projects', 'built', 'build', 'work', 'portfolio'],
    response: `Here are Aqusa's key projects:\n\n1. NeuroMind AI — Alzheimer's detection from MRI images using Deep Learning & ResNet.\n2. Alter – ATS Resume Analyzer — AI-powered resume analysis and job-description matching.\n3. Movie Recommendation System — Personalized recommendations using ML.\n4. Invoice Intelligence System — AI-powered document processing with LLMs.\n5. Traditional RAG Pipeline — End-to-end RAG with LangChain & vector databases.\n6. Velora Beauty — AI-assisted e-commerce app built with Cursor AI.\n\nCheck the Projects section for details!`,
  },
  {
    keywords: ['technology', 'technologies', 'tech', 'stack', 'tools', 'use', 'using'],
    response: `Aqusa's tech stack includes:\n\n• Programming: Python, JavaScript, C\n• AI/ML: Machine Learning, Deep Learning, Pandas, NumPy, Matplotlib, Seaborn\n• Generative AI: LLMs, LangChain, LangGraph, RAG, Embeddings, Vector Databases, AI Agents, Tool Calling\n• Backend: FastAPI, REST APIs\n• Database: PostgreSQL\n• Frontend: React, Tailwind CSS\n• Tools: Git, GitHub, VS Code, Cursor AI, Postman, Jupyter\n• Deployment: Vercel, Streamlit\n• AI Ecosystem: Hugging Face, Gemini APIs, Open-source models`,
  },
  {
    keywords: ['genai', 'generative', 'rag', 'langchain', 'llm', 'agent'],
    response: `Aqusa's GenAI experience includes:\n\n• Building LLM applications with LangChain & LangGraph\n• RAG pipelines — document loading, chunking, embeddings, retrieval, and generation\n• AI Agents with tool/function calling\n• Prompt engineering for production use cases\n• Integration with Gemini APIs and open-source models from Hugging Face\n\nHer featured project is a Traditional RAG Pipeline that demonstrates the full RAG architecture end-to-end.`,
  },
  {
    keywords: ['rag', 'retrieval'],
    response: `Aqusa built a Traditional RAG Pipeline project that demonstrates:\n\nDocument → Loader → Text Splitter → Embeddings → Vector Store → Retriever → LLM → Answer\n\nThis project shows how to ground LLM responses in real data by retrieving relevant document chunks before generating an answer. Built with Python, LangChain, and a Vector Database.`,
  },
  {
    keywords: ['about', 'who', 'background', 'education', 'graduate', 'student'],
    response: `Aqusa Shaikh is an AI & Data Science graduate focused on building practical AI and Generative AI applications.\n\nHer interests include AI Engineering, Generative AI, LLM applications, RAG, AI Agents, Machine Learning, and Data Analytics.\n\nShe likes turning AI concepts into actual applications rather than leaving them inside notebooks.`,
  },
  {
    keywords: ['contact', 'email', 'reach', 'connect', 'linkedin', 'github'],
    response: `You can reach Aqusa through:\n\n• GitHub: github.com/aqusashaikh31\n• LinkedIn: Check the Contact section\n• Email: Check the Contact section\n\nFeel free to reach out about AI projects, collaborations, or just to talk about LLMs!`,
  },
  {
    keywords: ['skill', 'skills', 'know', 'learned'],
    response: `Aqusa's skills are grouped into:\n\n• Programming: Python, JavaScript, C\n• AI/ML: Machine Learning, Deep Learning, Pandas, NumPy, Matplotlib, Seaborn\n• Generative AI: LLMs, LangChain, LangGraph, RAG, Embeddings, Vector Databases, AI Agents, Tool Calling\n• Backend: FastAPI, REST APIs\n• Database: PostgreSQL\n• Developer Tools: Git, GitHub, VS Code, Cursor AI, Postman, Jupyter\n• Deployment: Vercel, Streamlit\n• AI Ecosystem: Hugging Face, Gemini APIs, Open-source models`,
  },
  {
    keywords: ['experience', 'work', 'job', 'career'],
    response: `Aqusa's learning journey:\n\nAI & Data Science Graduate → Machine Learning → Deep Learning → Generative AI → LangChain → RAG → AI Agents → AI Engineering\n\nShe's currently building AI-powered applications and is open to opportunities in AI Engineering and Generative AI roles.`,
  },
  {
    keywords: ['resume', 'cv', 'download'],
    response: `You can download Aqusa's resume from the Resume section of this portfolio. Look for the "Download Resume" button!`,
  },
  {
    keywords: ['playground', 'demo', 'try'],
    response: `The AI Playground section has interactive demos including a Prompt Generator, RAG Demo, AI Chat Interface, Text Summarizer, and Developer Assistant. They run in demo mode — ready to connect to a FastAPI + LLM backend later!`,
  },
];

const fallbackResponse = `I'm Aqusa's portfolio AI assistant! I can tell you about:\n\n• Her projects (NeuroMind AI, Alter ATS, RAG Pipeline, and more)\n• Her tech stack (Python, LangChain, RAG, AI Agents, etc.)\n• Her GenAI experience\n• How to contact her\n\nTry asking: "What projects has Aqusa built?" or "Tell me about her RAG experience."`;

export function getAIResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  for (const entry of knowledgeBase) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }

  return fallbackResponse;
}

export function getTerminalResponse(command: string): string {
  const cmd = command.trim().toLowerCase();

  switch (cmd) {
    case 'help':
      return `Available commands:\n  help        — Show this help message\n  about       — About Aqusa\n  skills       — List skills\n  projects     — List projects\n  contact      — Contact info\n  github       — GitHub profile\n  clear        — Clear terminal\n  whoami       — Who am I?`;
    case 'about':
      return `Aqusa Shaikh\nAI Engineer | Generative AI Engineer\n\nAI & Data Science Graduate\nBuilding AI-powered applications with LLMs, RAG, AI Agents & ML.`;
    case 'skills':
      return `Skills:\n  Python, JavaScript, C\n  Machine Learning, Deep Learning\n  LLMs, LangChain, LangGraph, RAG\n  AI Agents, Tool Calling, Embeddings\n  FastAPI, PostgreSQL\n  React, Tailwind CSS`;
    case 'projects':
      return `Projects:\n  1. NeuroMind AI — Alzheimer's Detection (Deep Learning)\n  2. Alter ATS — Resume Analyzer (LLM)\n  3. Movie Recommendation System (ML)\n  4. Invoice Intelligence System (LLM)\n  5. Traditional RAG Pipeline (LangChain)\n  6. Velora Beauty — E-commerce (React, Cursor AI)`;
    case 'contact':
      return `Contact:\n  GitHub: github.com/aqusashaikh31\n  LinkedIn: See contact section\n  Email: See contact section`;
    case 'github':
      return `GitHub: github.com/${personalInfo.githubUsername}\n\nType 'projects' to see what she's built.`;
    case 'whoami':
      return `You are a curious visitor exploring Aqusa's portfolio. Nice to meet you! 👋`;
    case '':
      return '';
    default:
      return `Command not found: ${command}\nType 'help' for available commands.`;
  }
}
