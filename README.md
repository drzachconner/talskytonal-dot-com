# Cultivate Wellness Chiropractic Website

A modern, accessible, and SEO-optimized chiropractic clinic website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Structured data (JSON-LD), meta tags, sitemap, and robots.txt
- **Accessibility**: WCAG compliant with skip links, ARIA labels, and semantic HTML
- **Security**: Security headers, CSP, rate limiting, and PII protection
- **Contact Form**: Accessible form with validation, honeypot spam protection, and rate limiting
- **Performance**: Optimized images, lazy loading, and efficient routing

## Routes

- `/` - Home page
- `/about-us` - About Us and team
- `/new-patient-center` - New patient information
- `/new-patient-forms` - Patient forms portal
- `/request-an-appointment` - Appointment booking
- `/pediatric` - Pediatric chiropractic services
- `/prenatal` - Prenatal chiropractic services
- `/family` - Family wellness services
- `/contact-us` - Contact page with form
- `/privacy` - Privacy policy
- `/thanks` - Thank you page (after form submission)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Configuration

### Site Settings

All site configuration is centralized in `src/data/site.ts`:

- Business name, contact info, address
- Social media links
- Hours of operation
- Jane App booking URL

### Environment Variables

For production deployment with real email functionality, add these to your hosting platform:

- `RESEND_API_KEY` - Resend API key for email
- `CONTACT_FROM` - From email address
- `CONTACT_TO` - Admin email address
- `CONTACT_BCC` - Optional BCC email

## Architecture

### Single Source of Truth

The `SITE` configuration in `src/data/site.ts` is used throughout the application:
- Contact information in footer and contact page
- JSON-LD structured data
- Meta tags and SEO
- All external links (Jane App)

### Security Features

- Content Security Policy (CSP)
- Security headers (X-Content-Type-Options, Referrer-Policy, etc.)
- Rate limiting on contact form (3 requests per minute per IP)
- PII-aware logging (redacts email, phone, message from logs)
- Honeypot field for spam protection
- Input validation and sanitization

### Accessibility Features

- Skip to main content link
- Semantic HTML throughout
- ARIA labels and roles where appropriate
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

### SEO Features

- Structured data (Chiropractor, BreadcrumbList schemas)
- Dynamic meta tags per page
- Canonical URLs
- Open Graph and Twitter Card tags
- XML sitemap
- Robots.txt
- Descriptive alt text for images

## Technical Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Forms**: Native HTML5 with validation
- **SEO**: Custom hooks and JSON-LD

## Production Deployment

### Before Deploying

1. Update business information in `src/data/site.ts`
2. Replace placeholder images with actual photos
3. Set up Resend account for contact form emails
4. Configure environment variables
5. Update domain name in all files (search for `cultivatewellnesschiro.com`)
6. Verify Google Business Profile NAP consistency

### Recommended Hosting

- Netlify, Vercel, or Cloudflare Pages
- All support static hosting with edge functions for the contact form

### Post-Launch

1. Submit sitemap to Google Search Console
2. Verify structured data with Google Rich Results Test
3. Set up Google Analytics (optional)
4. Monitor Core Web Vitals
5. Test contact form thoroughly

## Contact Form Implementation

The current implementation uses a mock API (`src/lib/mock-contact-api.ts`) that logs submissions to the console. For production:

1. Set up Resend account and verify sender domain
2. Create an API endpoint (serverless function or backend)
3. Update `ContactForm.tsx` to call the real API
4. Implement email sending using the Resend SDK
5. Test thoroughly with real email addresses

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ support required
- Mobile browsers fully supported

## License

All rights reserved - Cultivate Wellness Chiropractic

## Support

For technical support or questions, contact the development team.
