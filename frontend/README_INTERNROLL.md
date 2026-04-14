# Internroll Frontend

A premium internship platform frontend built with Next.js 14+, TypeScript, and TailwindCSS.

## 🚀 Pages Created

### Home Page (`/`)
- Hero section with value proposition and CTAs
- Trust/Stats section with company logos and key metrics
- Why Internroll features section
- Featured internship categories
- Featured internships grid (4 programs)
- Testimonials from students
- Final CTA section
- Footer with links and contact info

### Internship Listing (`/internships`)
- Search functionality
- Category filter chips
- Sort options (Trending, Newest, Highest Rated)
- Premium internship cards with:
  - Rating and review count
  - Student enrollment numbers
  - Duration and level badges
  - Skills tags
  - Hover effects

### Internship Detail (`/internships/[slug]`)
Comprehensive detail pages for each internship with:
- Hero with key stats and CTAs
- About the internship
- What you'll learn (checklist)
- What's included (benefits cards)
- Expandable curriculum modules
- Mentor profile section
- Student testimonials
- Accordion FAQs
- Related internships sidebar
- Sticky CTA card (desktop)

### Additional Pages
- `/checkout` - Payment and enrollment form
- `/dashboard` - User dashboard with enrolled internships

## 🎨 Design System

### Colors
- Primary: `#1e40af` (Deep Blue)
- Accent: `#0ea5e9` (Sky Blue)
- Background: White and soft off-white
- Text: Slate grays (#0f172a to #94a3b8)

### Components
- **Cards**: `card-premium` - Rounded-xl, subtle shadow, hover lift
- **Buttons**: `btn-primary` (filled gradient), `btn-secondary` (outline)
- **Typography**: Inter font, clear hierarchy

### Animations (Framer Motion)
- FadeIn on scroll
- Stagger animations for lists
- Hover lift effects on cards
- Smooth page transitions

## 📁 File Structure

```
frontend/src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with Inter font
│   ├── globals.css           # Light theme design system
│   ├── internships/
│   │   ├── page.tsx          # Listing page
│   │   └── [slug]/
│   │       └── page.tsx      # Detail page
│   ├── checkout/
│   │   └── page.tsx          # Checkout page
│   └── dashboard/
│       └── page.tsx          # Dashboard page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Navigation with mobile menu
│   │   └── Footer.tsx        # Site footer
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── WhySection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── FeaturedInternships.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── FinalCTA.tsx
│   └── animations/
│       └── FadeIn.tsx        # Reusable animation components
└── lib/
    └── internships.ts        # Data for 6 internship tracks
```

## 🛠️ Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- TailwindCSS 4
- Framer Motion (animations)
- Lucide React (icons)

## 📦 Internship Data

6 complete internship tracks with full content:

1. **Machine Learning** - Build and deploy ML models
2. **DSA** - Master problem solving and coding interviews
3. **Digital Marketing** - SEO, ads, social media, analytics
4. **Python Development** - Apps, APIs, automation
5. **Backend Development** - Scalable APIs, databases, microservices
6. **Accounting & Finance** - Bookkeeping, reporting, analysis

Each includes:
- Title, tagline, description
- Rating, reviews, enrollment count
- Duration, level, category
- 4-6 learning outcomes
- 4-6 curriculum modules
- 4-6 included benefits
- Mentor profile
- 3 testimonials
- 5 FAQs

## 🚀 Getting Started

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:3000`

## 🔗 Backend Integration

The frontend uses the existing API at:
- Base URL: `process.env.NEXT_PUBLIC_API_URL` or defaults to backend
- API helper: `src/lib/api.js`

Backend routes (unchanged):
- `/api/auth` - Authentication
- `/api/courses` - Course management
- `/api/users` - User management
- `/api/payments` - Payments
- `/api/admin` - Admin panel
