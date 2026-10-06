# Aqusa Shaikh | AI Engineer & Generative AI Engineer — Portfolio

A modern, interactive, AI-themed personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section** — Animated terminal showing AI skills loading, CTA buttons, humorous taglines
- **About** — Background, interests, and stat cards (no fabricated numbers)
- **Skills** — Interactive, filterable skill cards grouped by category (no fake percentages)
- **AI Stack Visualization** — Clickable architecture diagram showing how AI apps are built
- **Projects** — Filterable project cards with GitHub, Live Demo, and LinkedIn buttons
- **Featured Project / Case Study** — Deep dive into the RAG Pipeline project with architecture diagram
- **AI Playground** — Interactive demos: Prompt Generator, RAG Demo, Chat, Summarizer, Dev Assistant (all in demo/mock mode, ready for FastAPI backend)
- **GitHub Activity** — Live GitHub repository cards via GitHub API
- **Learning Journey** — Timeline of skills progression
- **Resume** — Download/View resume buttons
- **Contact** — Contact form + social links
- **AI Chat Assistant** — Floating chat widget with a local knowledge base (ready for LLM + RAG backend)
- **Dark/Light Mode** — Dark by default, saved to localStorage
- **Command Palette** — Ctrl+K to open, navigate to any section
- **Terminal Mode** — Easter egg terminal with commands like `help`, `about`, `skills`, `projects`
- **Easter Eggs** — Subtle humor throughout ("Works on my machine™")
- **Responsive** — Works on desktop, laptop, tablet, and mobile
- **Accessible** — Semantic HTML, keyboard navigation, focus states, reduced motion support
- **SEO** — Proper meta tags, Open Graph, robots.txt, sitemap.xml

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Animations | Framer Motion |
| Build Tool | Vite |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (comes with Node.js)

### Install & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open the browser at the URL shown in terminal (usually http://localhost:5173)
```

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## Customization

All content is in a single file: **`src/data/portfolio.ts`**

Edit this file to update:
- Your name, title, taglines, and description
- Social links (GitHub, LinkedIn, Email)
- Stats cards
- Skills (grouped by category)
- AI Stack nodes and descriptions
- Projects (name, description, technologies, GitHub/Live/LinkedIn URLs)
- Timeline / learning journey
- AI Playground demos
- Easter egg messages

### Updating Resume

Replace the file at `public/resume.pdf` with your actual resume PDF.

### Updating Favicon

Replace `public/favicon.svg` with your own favicon.

## Deployment

### Frontend → Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" and import your repository
4. Vercel auto-detects Vite — no configuration needed
5. Click "Deploy"
6. Your portfolio is live!

### Backend (Optional) → Render or Railway

If you want to connect the AI Playground or Chat Assistant to a real LLM:

1. Create a FastAPI backend (e.g., `main.py` with endpoints like `/api/chat`, `/api/rag`)
2. Deploy to [Render](https://render.com) or [Railway](https://railway.app)
3. Set your LLM API key as an environment variable on the backend
4. Update the frontend demo components to call your API instead of mock responses

### Streamlit Demos → Streamlit Community Cloud

For Streamlit-based AI demos (like NeuroMind AI or Movie Recommender):

1. Push the Streamlit app to a GitHub repository
2. Go to [share.streamlit.io](https://share.streamlit.io)
3. Connect your GitHub and deploy

## Architecture (Simple Explanation)

```
Browser (User)
    ↓
React Frontend (this portfolio)
    ↓
[Optional] FastAPI Backend (for AI Playground / Chat)
    ↓
[Optional] LLM API (Gemini, Open-source models, etc.)
    ↓
[Optional] Vector Database (for RAG)
```

- The **frontend** is this React app — it's all you need for the portfolio itself
- The **FastAPI backend** is optional — only needed if you want real AI responses in the Playground or Chat Assistant
- The **LLM API** lives on the backend — API keys never go in the frontend
- The **Vector Database** is only needed for RAG features

## Project Structure

```
src/
  components/     — Reusable UI components (Navbar, Footer, CommandPalette, etc.)
  sections/       — Full-page sections (Hero, About, Skills, Projects, etc.)
  data/           — All portfolio content (edit portfolio.ts to update)
  hooks/          — Custom React hooks (useTheme, useScrollSpy, useLocalStorage)
  lib/            — Utilities (icon mapping, AI knowledge base)
  types/          — TypeScript type definitions
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Open Command Palette |
| `T` | Toggle Terminal Mode |
| `Esc` | Close overlays |

## License

This is a personal portfolio. Feel free to use the structure as a template for your own.
