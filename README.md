# Template Gallery

A unified Next.js application showcasing 4 complete website templates, ready to customize and deploy.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the gallery.

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the button above or connect your repository to Vercel
2. Vercel will automatically detect the Next.js configuration
3. Deploy!

## Templates Included

### 1. Luna Solaris - Wellness & Coaching
- Holistic wellness and healing coach template
- Purple/pink spiritual aesthetic
- 1-on-1 booking system, group events, testimonials
- Route: `/personal-template-1`

### 2. Sunny Days Studio - Creative & Arts
- Warm and playful creative arts template
- Sunflower aesthetic with cursive fonts
- Art therapy services, kids workshops, events calendar
- Route: `/personal-template-2`

### 3. Solar Crane - Tech & Business
- Minimal tech-forward systems architect template
- Dark aesthetic with amber-to-crimson gradient accents
- Course modules with video placeholders, newsletter section
- Route: `/personal-template-3`

### 4. The Mycocosm - Community Platform
- Community ecosystem inspired by mycelial networks
- Emerald/teal nature-inspired design
- Mission/vision/values, team profiles, community events
- Route: `/community-template`

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- tRPC
- Prisma
- React Hook Form
- Zod validation

## Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:push      # Push database schema changes
npm run db:studio    # Open Prisma Studio
```

## Adding New Templates

1. Create a new route directory: `app/[your-template-name]/`
2. Add your template page component
3. Update `app/page.tsx` to add the new template card to the gallery
4. Customize the design and content

## License

Each template may have its own license. Check individual template directories for details.
