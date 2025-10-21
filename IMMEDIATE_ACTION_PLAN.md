# 🚨 IMMEDIATE ACTION PLAN - Talsky Tonal Site

## Current Status
The build system has network connectivity issues with npm. However, I've completed the analysis and know exactly what needs to be changed.

## What I've Discovered

By comparing the PDFs you provided:
- **Original site (talskytonal.com)**: Has simple hero image with text baked in, logo in header, JotForm, popup
- **Current Bolt version**: Has text overlay hero, text-based header, custom form, no popup, includes Nashville event

## Critical Changes Required

### 1. 🖼️ IMAGES NEEDED (Download from cdn.durable.co BEFORE it closes)

```
HERO IMAGE (homepage):
https://cdn.durable.co/blocks/2fPv3Az4SotU6O0XjRzzfMPxJ4srCSBbEDLZl85L9iKm826ovslR8ieDka1rqYp2.png
→ Save as: public/images/hero-ttc-with-text.webp

LOGO (header/favicon):
https://cdn.durable.co/blocks/a7WQqcZkFX4e7jBUvT171SoMolhH0uWOOxROXwmRWZSkBh0gyRKWpsz8pH09HqPZ.png
→ Save as: public/images/ttc-logo.webp

PAPER PAGE HERO:
https://cdn.durable.co/blocks/34QdAcvMk0jtEbVgYufxTDDWVAV2l0rNuocvjLdwTWSacN594T9f7ib13FdxBAyF.jpg
→ Save as: public/images/paper-hero.webp
```

**URGENT**: Download these NOW before Durable closes! Convert to WebP format.

### 2. 🏠 HOME PAGE CHANGES

**File: `src/pages/Home.tsx`**

Current structure:
```tsx
<TopNotificationBanner />
<HeroTTC />  // ❌ WRONG - has text overlay + Nashville event
<BeyondTechnique />  // ❌ WRONG - centered instead of left-aligned
<OnlineCoursesSection />
<TestimonialsCarousel />
<BringTTCArea />
<LeadCaptureForm />  // ❌ WRONG - custom form instead of JotForm
<ContactBlock />
```

Should be:
```tsx
<TopNotificationBanner />  // ✅ Keep but link to #form
<SimpleHero />  // ✅ NEW - just displays image
<BeyondTechnique />  // ✅ Keep but LEFT-ALIGN
<OnlineCoursesSection />
<TestimonialsCarousel />
<BringTTCArea />
<JotFormEmbed />  // ✅ NEW - replace custom form
<ContactBlock />
```

### 3. 📝 COMPONENT CHANGES NEEDED

#### A. Create JotFormEmbed Component

**File: `src/components/JotFormEmbed.tsx`** (NEW FILE)

```tsx
export default function JotFormEmbed() {
  return (
    <section id="signup-form" className="mx-auto max-w-3xl px-6 py-12 md:py-16 lg:py-20">
      <div className="text-center mb-8">
        <div className="text-3xl md:text-4xl mb-3">👍</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ttc-navy mb-4 font-heading">
          Access Exclusive Content and Stay Informed
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-text-neutral leading-relaxed">
          Sign up below to get notified about seminars and gain access to the Talsky Tonal Paper with Video.
        </p>
      </div>

      <iframe
        id="JotFormIFrame-233045470374150"
        title="TTC SEMINAR NOTIFY"
        onLoad={() => window.scrollTo(0, 0)}
        allowTransparency={true}
        allow="geolocation; microphone; camera"
        src="https://form.jotform.com/233045470374150"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: '539px',
          border: 'none',
        }}
        scrolling="no"
      />

      <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.jotformEmbedHandler("iframe[id='JotFormIFrame-233045470374150']", "https://form.jotform.com/")`
      }} />
    </section>
  );
}
```

#### B. Update SimpleHero Component

**File: `src/components/SimpleHero.tsx`** (ALREADY CREATED)

```tsx
export default function SimpleHero() {
  return (
    <section className="relative w-full">
      <img
        src="/images/hero-ttc-with-text.webp"
        alt="TTC Talsky Tonal Chiropractic Training Workshops"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </section>
  );
}
```

#### C. Update BeyondTechnique Component

**File: `src/components/BeyondTechnique.tsx`**

Change line 3:
```tsx
// FROM:
<div className="text-center">

// TO:
<div className="text-left">
```

#### D. Update Header Component

**File: `src/components/Header.tsx`**

Change the logo area (around line 30):
```tsx
// FROM:
<Link to={LINKS.home} className="flex items-center flex-shrink-0">
  <span className="font-semibold text-ttc-blue text-lg md:text-xl font-heading">
    Talsky Tonal Chiropractic
  </span>
</Link>

// TO:
<Link to={LINKS.home} className="flex items-center flex-shrink-0">
  <img
    src="/images/ttc-logo.webp"
    alt="Talsky Tonal Chiropractic"
    className="h-12 md:h-14 w-auto"
  />
</Link>
```

#### E. Update TopNotificationBanner Component

**File: `src/components/TopNotificationBanner.tsx`**

Change content area to make it clickable:
```tsx
<a
  href="#signup-form"
  className="flex-1 text-center hover:text-ttc-blue transition-colors"
  onClick={() => {
    const form = document.getElementById('signup-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  <p className="text-sm md:text-base text-text-dark">
    <span className="font-semibold">Get notified about upcoming seminars</span>
    {' '}and gain access to exclusive Talsky Tonal resources
  </p>
</a>
```

### 4. 📄 PAPER PAGE CHANGES

**File: `src/pages/Paper.tsx`** (or the-talsky-tonal-paper page)

Add hero at top:
```tsx
<section className="relative w-full">
  <img
    src="/images/paper-hero.webp"
    alt="The Talsky Tonal Paper with Video"
    className="w-full h-auto object-cover"
    loading="eager"
  />
</section>

<div className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-3xl md:text-4xl font-bold text-ttc-navy mb-4">
    Talsky Tonal Chiropractic, by Asher Nadler, D.C. & Marvin Talsky, D.C.
  </h1>

  <p className="text-lg text-text-neutral mb-6 leading-relaxed">
    This heavily cited overview of Talsky Tonal Chiropractic by Asher Nadler, D.C.
    and Marvin Talsky, D.C. is one of the most important documents in chiropractic.
  </p>

  <p className="text-lg text-text-neutral mb-8 leading-relaxed">
    The included video is a reading of the paper along with clips for further deepening.
  </p>

  <button className="px-8 py-3 bg-ttc-blue hover:bg-ttc-blue-hover text-white font-semibold rounded-lg transition">
    Access Content
  </button>
</div>
```

### 5. 🎭 POPUP MODAL

**File: `index.html`** (in public folder or main HTML)

Add before closing `</body>` tag:
```html
<script id="pixel-script-poptin" src="https://cdn.popt.in/pixel.js?id=635cab4995b1f" async></script>
```

### 6. 🎨 FAVICON

Replace these files in `/public/`:
- favicon.ico (convert logo to ico)
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png

## IMPLEMENTATION ORDER

1. ✅ **FIRST**: Download the 3 images immediately (before Durable closes!)
2. ✅ Convert to WebP and place in `/public/images/`
3. ✅ Create JotFormEmbed.tsx component
4. ✅ Update Home.tsx to use SimpleHero and JotFormEmbed
5. ✅ Update BeyondTechnique.tsx (text-left)
6. ✅ Update Header.tsx (logo image)
7. ✅ Update TopNotificationBanner.tsx (clickable link)
8. ✅ Update Paper page
9. ✅ Add Poptin script
10. ✅ Replace favicon files
11. ✅ Run `npm run build`
12. ✅ Test everything

## FILES THAT NEED CHANGES

| File | Change |
|------|--------|
| `src/components/JotFormEmbed.tsx` | CREATE NEW |
| `src/components/SimpleHero.tsx` | ALREADY CREATED |
| `src/components/BeyondTechnique.tsx` | text-center → text-left |
| `src/components/Header.tsx` | text → logo image |
| `src/components/TopNotificationBanner.tsx` | Add link to #signup-form |
| `src/pages/Home.tsx` | Replace HeroTTC with SimpleHero, LeadCaptureForm with JotFormEmbed |
| `src/pages/Paper.tsx` | Add paper hero image |
| `public/index.html` | Add Poptin script |
| `public/images/` | Add 3 WebP images |
| `public/favicon.ico` | Replace with logo |

## QUICK TEST CHECKLIST

After changes:
- [ ] Homepage shows hero image with text (not overlay)
- [ ] Header shows logo image (not text)
- [ ] No Nashville event section
- [ ] Beyond Technique is left-aligned
- [ ] JotForm appears and is functional
- [ ] Popup modal appears (Poptin)
- [ ] Paper page has correct hero
- [ ] Favicon is TTC logo
- [ ] All images load (no 404s)
- [ ] Mobile responsive works

## ⚠️ CRITICAL WARNING

The cdn.durable.co URLs will expire when you close Durable. You MUST download all 3 images NOW and store them in your repository. Do not rely on the CDN URLs in production.
