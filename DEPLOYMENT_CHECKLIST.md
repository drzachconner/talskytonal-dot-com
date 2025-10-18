# Deployment Checklist - Cultivate Wellness Chiropractic

## Pre-Deployment Configuration

### 1. Business Information (src/data/site.ts)
- [ ] Update business name (if different)
- [ ] Update phone number with real clinic number
- [ ] Update email address
- [ ] Update physical address
- [ ] Update geographic coordinates (latitude/longitude) - Get from Google Maps
- [ ] Update hours of operation
- [ ] Update Jane App booking URL
- [ ] Verify social media links (Instagram, Facebook)
- [ ] Update price range if needed

### 2. Content Updates

#### Images
- [ ] Replace all placeholder images with actual photos:
  - [ ] Logo/brand assets (`/public/images/shared/`)
  - [ ] Team photos (`/public/images/about-us/`)
  - [ ] Service page images (pediatric, prenatal, family)
  - [ ] Hero images for each page
  - [ ] Open Graph images for social sharing (`/public/images/og/`)
- [ ] Optimize all images (convert to WebP, compress, max 1600px width)
- [ ] Add proper alt text to all images
- [ ] Create/add favicon.ico (replace placeholder)
- [ ] Add apple-touch-icon.png

#### Team Information (src/data/team.ts)
- [ ] Update Dr. Sarah's bio and credentials
- [ ] Add photos for team members
- [ ] Add additional team members if needed

#### Testimonials (src/data/testimonials.ts)
- [ ] Replace with real patient testimonials
- [ ] Ensure proper consent for using testimonials
- [ ] Add more testimonials if available

### 3. Contact Form Setup

#### Option A: Resend Email Service (Recommended)
- [ ] Create Resend account at https://resend.com
- [ ] Verify sender domain
- [ ] Configure SPF records in DNS
- [ ] Configure DKIM records in DNS
- [ ] Get API key from Resend dashboard
- [ ] Create serverless function/API endpoint
- [ ] Update ContactForm.tsx to call real API
- [ ] Test email delivery thoroughly

#### Option B: Alternative Email Service
- [ ] Choose provider (SendGrid, Mailgun, etc.)
- [ ] Follow provider setup instructions
- [ ] Implement backend endpoint
- [ ] Test thoroughly

#### Environment Variables (Set in hosting platform)
```
RESEND_API_KEY=your_api_key_here
CONTACT_FROM=noreply@cultivatewellnesschiro.com
CONTACT_TO=admin@cultivatewellnesschiro.com
CONTACT_BCC=team@cultivatewellnesschiro.com (optional)
```

### 4. Domain Configuration
- [ ] Search and replace `cultivatewellnesschiro.com` with actual domain
- [ ] Update in `src/data/site.ts`
- [ ] Update in `public/robots.txt`
- [ ] Update in `public/sitemap.xml`
- [ ] Update Open Graph URLs

### 5. Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Add tracking code to index.html
- [ ] Configure conversion tracking
- [ ] Test analytics are working

## Deployment Steps

### 1. Choose Hosting Platform

#### Recommended: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod
```

**Configuration**:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

#### Alternative: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Alternative: Cloudflare Pages
- Connect GitHub repository
- Set build command: `npm run build`
- Set output directory: `dist`

### 2. DNS Configuration
- [ ] Point domain to hosting provider
- [ ] Configure apex domain (non-www)
- [ ] Set up www → apex redirect
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Verify SSL certificate is issued

### 3. SSL/HTTPS
- [ ] Enable HTTPS (usually automatic)
- [ ] Test HTTPS is working
- [ ] Add HSTS header after HTTPS is confirmed:
  ```
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  ```

## Post-Deployment Verification

### 1. Functionality Testing
- [ ] Test all pages load correctly
- [ ] Test all navigation links
- [ ] Test mobile menu works
- [ ] Test contact form submission
- [ ] Verify form validation works
- [ ] Test rate limiting (submit 4+ times quickly)
- [ ] Test honeypot spam protection
- [ ] Verify email notifications arrive
- [ ] Test Jane App booking links
- [ ] Test social media links
- [ ] Test phone/email links (click-to-call/email)

### 2. Mobile Testing
- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Test on tablet
- [ ] Verify touch targets are large enough
- [ ] Test mobile menu
- [ ] Test forms on mobile
- [ ] Test all CTAs work on mobile

### 3. Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### 4. Accessibility Testing
- [ ] Test with keyboard navigation (Tab, Enter, Escape)
- [ ] Test skip link (Tab once from top of page)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Run axe DevTools browser extension
- [ ] Verify color contrast passes
- [ ] Test focus indicators are visible

### 5. SEO Verification

#### Google Search Console
- [ ] Add property in Google Search Console
- [ ] Verify ownership (HTML tag or DNS)
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for homepage
- [ ] Monitor for crawl errors

#### Structured Data Testing
- [ ] Test with Google Rich Results Test:
  - https://search.google.com/test/rich-results
- [ ] Verify Chiropractor schema passes
- [ ] Verify BreadcrumbList schema passes
- [ ] Check for errors or warnings

#### Technical SEO
- [ ] Verify robots.txt is accessible
- [ ] Verify sitemap.xml is accessible
- [ ] Check meta tags with browser inspector
- [ ] Verify canonical URLs are correct
- [ ] Test Open Graph with Facebook Debugger
- [ ] Test Twitter Cards with Card Validator

### 6. Performance Testing

#### Lighthouse Audit (Chrome DevTools)
- [ ] Run audit on homepage
- [ ] Target scores:
  - Performance: 80+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] Run audit on key pages (about, services, contact)
- [ ] Address any critical issues

#### PageSpeed Insights
- [ ] Test mobile: https://pagespeed.web.dev/
- [ ] Test desktop
- [ ] Check Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### 7. Security Verification
- [ ] Check SSL certificate is valid (padlock in browser)
- [ ] Verify security headers with securityheaders.com
- [ ] Test CSP doesn't break functionality
- [ ] Verify contact form rate limiting works
- [ ] Test external links open in new tab
- [ ] Verify no console errors on any page

## Business Setup

### 1. Google Business Profile
- [ ] Verify NAP (Name, Address, Phone) matches website exactly
- [ ] Same format, same capitalization, same abbreviations
- [ ] Update website URL in profile
- [ ] Add photos to profile
- [ ] Update hours to match website

### 2. Local SEO
- [ ] Ensure NAP consistency across:
  - Website footer
  - Contact page
  - JSON-LD structured data
  - Google Business Profile
  - Any directory listings
- [ ] Add business to relevant directories:
  - Yelp
  - Healthgrades
  - WebMD
  - Local chamber of commerce

### 3. Social Media
- [ ] Update social media bios with website URL
- [ ] Add UTM parameters to social links if tracking needed
- [ ] Post announcement about new website
- [ ] Pin website link in profiles

## Monitoring & Maintenance

### Set Up Monitoring
- [ ] Configure uptime monitoring (UptimeRobot, Pingdom, etc.)
- [ ] Set up Google Alerts for brand name
- [ ] Monitor Google Search Console weekly for:
  - Indexing issues
  - Mobile usability issues
  - Core Web Vitals
  - Manual actions

### Regular Maintenance
- [ ] Weekly: Check for form submissions
- [ ] Weekly: Review analytics
- [ ] Monthly: Run Lighthouse audit
- [ ] Monthly: Check for broken links
- [ ] Quarterly: Update content as needed
- [ ] Yearly: Review and update:
  - Team information
  - Testimonials
  - Services
  - Privacy policy

## Emergency Contacts

**Hosting Support**:
- Platform: _________________
- Account: _________________

**Domain Registrar**:
- Registrar: _________________
- Account: _________________

**Email Service**:
- Provider: _________________
- Account: _________________

**DNS Provider**:
- Provider: _________________
- Account: _________________

## Launch Day Tasks

### Final Checks (Morning of Launch)
- [ ] Run full build one more time
- [ ] Clear browser cache
- [ ] Test contact form end-to-end
- [ ] Verify all images load
- [ ] Check all links work
- [ ] Confirm Jane App booking works

### Launch
- [ ] Deploy to production
- [ ] Verify deployment succeeded
- [ ] Test live site immediately
- [ ] Monitor error logs for first hour
- [ ] Watch for contact form submissions

### Announcement
- [ ] Update old website (if any) with redirect
- [ ] Post on social media
- [ ] Email patient list (if applicable)
- [ ] Update business cards/marketing materials
- [ ] Notify staff of new website

## Post-Launch (First Week)

- [ ] Monitor analytics daily
- [ ] Check for any errors in console
- [ ] Review contact form submissions
- [ ] Monitor Google Search Console for issues
- [ ] Address any user-reported issues
- [ ] Collect feedback from staff/patients

## Success Metrics

Track these KPIs:
- Website visits
- Contact form submissions
- Appointment bookings via Jane App
- Time on site
- Pages per session
- Mobile vs desktop traffic
- Top landing pages
- Search rankings for key terms

---

**Deployment Date**: _________________
**Deployed By**: _________________
**Live URL**: _________________

**All checks completed**: ☐

**Site is live and operational**: ☐
