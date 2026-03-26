# Deployment Guide for FormAI Landing Page

## Prerequisites

Before deploying, you need:
1. A PostgreSQL database (see options below)
2. A Vercel account (recommended) or another hosting platform

## Database Setup Options

### Option 1: Vercel Postgres (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Create a new Postgres database
3. Copy the connection string
4. Add it to your environment variables as `DATABASE_URL`

### Option 2: Supabase

1. Create a free account at [Supabase](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string (use the "Connection pooling" one)
5. Add it to your environment variables as `DATABASE_URL`

### Option 3: Railway

1. Create account at [Railway](https://railway.app)
2. Create a new PostgreSQL database
3. Copy the connection string
4. Add it to your environment variables as `DATABASE_URL`

### Option 4: Neon

1. Create account at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add it to your environment variables as `DATABASE_URL`

## Deployment Steps

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: FormAI landing page"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Add Environment Variables**
   - In Vercel project settings, go to "Environment Variables"
   - Add: `DATABASE_URL` with your PostgreSQL connection string

4. **Run Database Migrations**
   
   After first deployment, run migrations:
   ```bash
   # Install Vercel CLI if you haven't
   npm i -g vercel

   # Login to Vercel
   vercel login

   # Link your project
   vercel link

   # Run migrations
   vercel env pull .env.local
   npx prisma migrate deploy
   ```

   Or use Vercel's terminal in the dashboard.

5. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Alternative: Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add `DATABASE_URL`
4. **Note**: You'll need to set up serverless functions for API routes

## Post-Deployment

### 1. Run Database Migrations

Connect to your deployment and run:
```bash
npx prisma migrate deploy
```

### 2. Generate Prisma Client

This happens automatically during build, but if needed:
```bash
npx prisma generate
```

### 3. Test the Waitlist Form

1. Visit your deployed site
2. Scroll to the waitlist section
3. Submit a test email
4. Check your database to confirm the entry was created

### 4. Set Up Custom Domain (Optional)

In Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Environment Variables

Required for production:

```env
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
```

## Monitoring

### Check Logs

In Vercel:
- Go to your project
- Click on "Deployments"
- Select a deployment
- View "Functions" logs to see API route activity

### Database Monitoring

Use your database provider's dashboard to:
- Monitor connection count
- Check query performance
- View stored data

## Troubleshooting

### Build Fails

1. Check that all dependencies are installed
2. Verify `DATABASE_URL` is set correctly
3. Check build logs for specific errors

### Database Connection Issues

1. Verify connection string format
2. Check if database allows connections from Vercel IPs
3. Ensure SSL is configured if required

### API Routes Not Working

1. Check function logs in Vercel
2. Verify Prisma Client is generated
3. Ensure migrations are run

## Performance Optimization

The landing page is already optimized with:
- ✅ Static generation where possible
- ✅ Image optimization (when you add images)
- ✅ Code splitting
- ✅ CSS optimization with Tailwind
- ✅ Framer Motion animations

### Lighthouse Score Tips

To achieve 90+ Lighthouse score:
1. Add proper meta tags (already done)
2. Optimize any images you add (use Next.js Image component)
3. Minimize third-party scripts
4. Use font-display: swap (already configured)

## Scaling

As your waitlist grows:

1. **Database**: Upgrade your database plan if needed
2. **Caching**: Consider adding Redis for count caching
3. **Rate Limiting**: Add rate limiting to prevent spam
4. **Email Notifications**: Set up email notifications for new signups

## Security

Current security measures:
- ✅ Email validation
- ✅ Unique email constraint
- ✅ Environment variables for secrets
- ✅ SQL injection protection (Prisma)

Consider adding:
- Rate limiting
- CAPTCHA for form submission
- Email verification

## Backup

Set up automatic backups for your database:
- Vercel Postgres: Automatic backups included
- Supabase: Automatic backups on paid plans
- Railway: Configure backup schedule
- Neon: Automatic backups included

## Support

If you encounter issues:
1. Check the logs in your hosting platform
2. Review the README.md for setup instructions
3. Verify all environment variables are set correctly
4. Check that database migrations have run successfully

---

**Ready to launch!** 🚀

Your FormAI landing page is production-ready and optimized for the Russian market.
