# GitHub Codespaces Setup Guide

This guide explains how to run and test the Internroll project in GitHub Codespaces.

## Quick Start

Once you open this repository in GitHub Codespaces, follow these steps:

### 1. Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm install
npm start
```

The backend will start on port 5000.

### 2. Start the Frontend Development Server

Open a **new terminal** (click `+` in terminal panel) and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on port 3000. Click "Open in Browser" when prompted.

## Project Structure

```
interncraft-academy/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── config/internships.js      # 7 internship programs data
│   │   ├── controllers/internshipController.js  # API controllers
│   │   ├── routes/internshipRoutes.js           # API routes
│   │   └── app.js                  # Main Express app
│   └── server.js                  # Server entry point
│
└── frontend/                # Next.js 16 + React + Tailwind
    ├── src/
    │   ├── app/                     # Next.js pages
    │   │   ├── page.tsx            # Homepage (Coursera style)
    │   │   └── internships/
    │   │       └── [slug]/
    │   │           └── page.tsx    # Detail page (Udemy style)
    │   ├── components/home/         # Homepage sections
    │   │   ├── HeroSection.tsx
    │   │   ├── TrustedBy.tsx
    │   │   ├── BenefitsSection.tsx
    │   │   ├── InternshipsSection.tsx
    │   │   ├── TestimonialsSection.tsx
    │   │   └── CTASection.tsx
    │   └── lib/
    │       ├── internshipApi.ts     # API client
    │       └── internships.ts       # Type definitions
    └── package.json
```

## Available Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Coursera-style landing page |
| Internships | `/internships` | Browse all 7 programs |
| Detail | `/internships/[slug]` | Udemy-style detail page |

## Internship Programs (7 Total)

1. **Machine Learning** - `/internships/machine-learning`
2. **Data Structures & Algorithms** - `/internships/dsa`
3. **Digital Marketing** - `/internships/digital-marketing`
4. **Python Development** - `/internships/python-development`
5. **Web Development** - `/internships/web-development`
6. **UI/UX Design** - `/internships/ui-ux-design`
7. **Full Stack Development** - `/internships/full-stack`

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `GET /api/internships` | GET | List all internships |
| `GET /api/internships/:slug` | GET | Get single internship |
| `GET /api/internships/categories` | GET | Get all categories |
| `GET /api/internships/category/:cat` | GET | Filter by category |

## Environment Variables

Create `.env` files if needed:

**Backend (`backend/.env`):**
```env
PORT=5000
FRONTEND_URL=https://your-codespace-url-3000.github.dev
SESSION_SECRET=your-secret-key
```

**Frontend (`frontend/.env.local`):**
```env
NEXT_PUBLIC_API_URL=https://your-codespace-url-5000.github.dev/api
```

## Troubleshooting

### Port Issues
If ports are already in use, kill processes:
```bash
# Find and kill Node processes
npx kill-port 3000 5000
```

### CORS Errors
Backend is configured to accept requests from `FRONTEND_URL`. Update in `backend/src/app.js` if needed.

### Module Not Found
```bash
# Reinstall dependencies
cd backend && rm -rf node_modules && npm install
cd frontend && rm -rf node_modules && npm install
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React 19, TypeScript, Tailwind CSS 4 |
| Backend | Node.js, Express.js |
| Icons | Lucide React |
| Animation | Framer Motion |

## Testing Checklist

- [ ] Homepage loads with Hero section
- [ ] Trusted By section shows company logos
- [ ] 7 internship cards display correctly
- [ ] Clicking internship card goes to detail page
- [ ] Detail page shows all sections (What You'll Learn, Curriculum, Instructor, Reviews)
- [ ] API calls working (check Network tab)
- [ ] Related internships shown in sidebar

## Design Credits

- **Homepage**: Coursera-inspired design
- **Detail Page**: Udemy-inspired design
- **Color Scheme**: Coursera blue (#0056d2) primary

---

For issues, check browser console and terminal logs.
