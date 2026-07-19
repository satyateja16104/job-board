# Nimbus Job Board

Nimbus is a polished, responsive job board for finding meaningful work and sharing thoughtful opportunities.

## What users can do

- Browse a curated feed with role, company, location, work style, experience, salary, skills, and posted date.
- Search across titles, companies, descriptions, and skills, then combine category, job-type, experience, and location filters.
- Sort the feed by newest role or salary range.
- Open a dedicated job detail page with a full overview, requirements, essentials, and share action.
- Save jobs to a persistent personal shortlist.
- Post a new role through a complete form; it appears in the feed immediately and persists locally.
- Apply through a focused application flow with name, email, resume link, and optional note.
- Use the app comfortably on desktop and mobile, with mobile filters and responsive navigation.
- Switch between light and dark themes.
- Receive useful empty states for saved jobs, no search results, and unavailable listings.

## Run locally

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run lint
npm run build
```

## Tech stack

- React + Vite
- React Router DOM
- Tailwind CSS utilities with a custom visual system
- Lucide icons
- Browser `localStorage` for posted jobs, saved roles, applications, and theme preference

## Architecture

```
src/
  components/   Shared navigation, filter, card, and modal UI
  data/         Seed job listings and filter vocabulary
  lib/          localStorage read/write helpers
  pages/        Feed, detail, saved-jobs, and post-job routes
  App.jsx       Routes and application state orchestration
```

## Deployment

The GitHub Actions workflow runs linting and a production build on every push to `main`, then uses the official Vercel CLI to deploy its prebuilt output. Configure these repository secrets before the first deployment: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.

## AI assistance

This project was built with AI assistance using OpenAI Codex.
"# job-board" 
