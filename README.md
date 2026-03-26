# FormAI Landing Page

AI-конструктор форм для российского бизнеса. Создавай формы, которые разговаривают.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Prisma** (database ORM)
- **PostgreSQL** (database)
- **Lucide React** (icons)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd formai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your PostgreSQL database URL.

4. Set up the database:
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations (when you have a database)
npx prisma migrate dev --name init
```

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Setup

### Option 1: Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database: `createdb formai`
3. Update `.env` with your local connection string
4. Run migrations: `npx prisma migrate dev`

### Option 2: Vercel Postgres (Recommended for deployment)

1. Create a Vercel account
2. Create a new Postgres database in Vercel
3. Copy the connection string to `.env`
4. Run migrations: `npx prisma migrate deploy`

### Option 3: Other providers

You can use any PostgreSQL provider:
- Supabase
- Railway
- Neon
- AWS RDS
- etc.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `DATABASE_URL` - Your PostgreSQL connection string

## 📁 Project Structure

```
formai-landing/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       ├── route.ts          # POST endpoint for waitlist
│   │       └── count/
│   │           └── route.ts      # GET endpoint for count
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Main landing page
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Problem.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── UseCases.tsx
│   │   ├── Pricing.tsx
│   │   ├── Waitlist.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── Header.tsx
├── lib/
│   ├── prisma.ts                 # Prisma client
│   └── utils.ts                  # Utility functions
├── prisma/
│   └── schema.prisma             # Database schema
└── public/                       # Static assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#6C63FF",      // Purple
  secondary: "#00D4FF",    // Cyan
  "bg-dark": "#0A0A1A",    // Dark background
  "bg-card": "#12122A",    // Card background
  // ...
}
```

### Content

All text content is in Russian and located in the component files. Edit the components in `components/sections/` to change the content.

## 📝 Features

- ✅ Fully responsive design
- ✅ Dark theme
- ✅ Smooth animations with Framer Motion
- ✅ Waitlist form with database storage
- ✅ Live counter of signups
- ✅ FAQ accordion
- ✅ Sticky header
- ✅ Mobile menu
- ✅ SEO optimized
- ✅ TypeScript for type safety

## 🔒 Database Schema

```prisma
model WaitlistEntry {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  useCase   String?
  createdAt DateTime @default(now())
}
```

## 📧 API Endpoints

### POST /api/waitlist
Add a new email to the waitlist.

**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "useCase": "Маркетинг"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Вы успешно добавлены в лист ожидания!",
  "id": 1
}
```

### GET /api/waitlist/count
Get the total number of waitlist entries.

**Response:**
```json
{
  "count": 42
}
```

## 🐛 Troubleshooting

### Prisma Client errors

If you see Prisma Client errors, regenerate the client:
```bash
npx prisma generate
```

### Database connection issues

Make sure your `DATABASE_URL` is correct and the database is accessible.

### Build errors

Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

## 📄 License

This project is for the FormAI landing page.

## 🤝 Contributing

This is a private project for FormAI. For questions, contact the team.

---

Made with ❤️ for Russian business
