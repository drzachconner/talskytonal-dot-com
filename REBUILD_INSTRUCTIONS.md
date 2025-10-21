# Talsky Tonal Site - Complete Rebuild Instructions

## STEP 1: DOWNLOAD REQUIRED IMAGES

Download these images from the original Durable site and convert to WebP format:

###  Critical Images to Download:

1. **Homepage Hero** (TTC with text baked in)
   - URL: `https://cdn.durable.co/blocks/2fPv3Az4SotU6O0XjRzzfMPxJ4srCSBbEDLZl85L9iKm826ovslR8ieDka1rqYp2.png`
   - Save as: `/public/images/hero-ttc-with-text.webp`
   - Note: This image has the TTC text, "Talsky Tonal Chiropractic", and "TRAINING WORKSHOPS" already in it

2. **Logo** (for header and favicon)
   - URL: `https://cdn.durable.co/blocks/a7WQqcZkFX4e7jBUvT171SoMolhH0uWOOxROXwmRWZSkBh0gyRKWpsz8pH09HqPZ.png`
   - Save as: `/public/images/ttc-logo.webp`
   - Also create favicon versions: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`

3. **Paper Page Hero**
   - URL: `https://cdn.durable.co/blocks/34QdAcvMk0jtEbVgYufxTDDWVAV2l0rNuocvjLdwTWSacN594T9f7ib13FdxBAyF.jpg`
   - Save as: `/public/images/paper-hero.webp`
   - This shows "THE TALSKY TONAL PAPER WITH VIDEO" text on it

4. **Additional Images** (if not already present):
   - Background images: Check the original site for any other images
   - Convert ALL images to WebP format for performance

### How to Convert to WebP:

```bash
# Using ImageMagick
convert input.png -quality 90 output.webp

# Using cwebp
cwebp -q 90 input.png -o output.webp

# Online tool
# https://cloudconvert.com/png-to-webp
```

---

## STEP 2: UPDATE HOMEPAGE STRUCTURE

### Remove These Sections:
1. ❌ Nashville, TN / Oct 10-12, 2025 event box (no upcoming seminars)
2. ❌ Current HeroTTC component with text overlay

### Keep These Sections (in order):
1. ✅ Top Notification Banner (update with link)
2. ✅ Simple Hero (just the image)
3. ✅ Beyond Technique (make left-aligned)
4. ✅ Online Courses Section
5. ✅ Testimonials Carousel
6. ✅ Bring TTC to Your Area
7. ✅ JotForm Embed (replace custom form)
8. ✅ Contact Block

---

## STEP 3: JOTFORM IMPLEMENTATION

### JotForm ID: `233045470374150`

Replace the custom LeadCaptureForm with this JotForm embed:

```html
<iframe
  id="JotFormIFrame-233045470374150"
  title="TTC SEMINAR NOTIFY"
  onload="window.parent.scrollTo(0,0)"
  allowtransparency="true"
  allowfullscreen="true"
  allow="geolocation; microphone; camera"
  src="https://form.jotform.com/233045470374150"
  frameborder="0"
  style="min-width:100%;max-width:100%;height:539px;border:none;"
  scrolling="no"
>
</iframe>
```

Add the JotForm script to handle iframe resizing:

```html
<script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
<script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-233045470374150']", "https://form.jotform.com/")</script>
```

---

## STEP 4: POPUP MODAL

Add this Poptin script for the popup modal (goes in the HTML head or before closing body tag):

```html
<script id="pixel-script-poptin" src="https://cdn.popt.in/pixel.js?id=635cab4995b1f" async></script>
```

---

## STEP 5: COMPONENT UPDATES

### A. Update TopNotificationBanner

The banner should link to a registration/form page:

```tsx
<div className="flex-1 text-center">
  <a href="#signup-form" className="text-sm md:text-base text-text-dark hover:text-ttc-blue transition">
    <span className="font-semibold">Get notified about upcoming seminars</span>
    {' '}and gain access to exclusive Talsky Tonal resources
  </a>
</div>
```

### B. Update Header

Replace text with logo image:

```tsx
<Link to={LINKS.home} className="flex items-center flex-shrink-0">
  <img
    src="/images/ttc-logo.webp"
    alt="Talsky Tonal Chiropractic"
    className="h-12 md:h-14 w-auto"
  />
</Link>
```

### C. Update Beyond Technique (Left-Align)

Change text alignment from center to left:

```tsx
<section className="mx-auto max-w-5xl px-6 py-12 md:py-16 lg:py-20">
  <div className="text-left">  {/* Changed from text-center */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ttc-navy mb-6 md:mb-8 font-heading">
      Beyond Technique
    </h2>

    <div className="space-y-4 md:space-y-5 text-base md:text-lg text-text-neutral leading-relaxed">
      {/* Content stays the same */}
    </div>
  </div>
  {/* Rest stays the same */}
</section>
```

### D. Replace Hero Component

Use SimpleHero instead of HeroTTC in Home.tsx:

```tsx
import SimpleHero from '../components/SimpleHero';

// In the return statement:
<SimpleHero />
```

---

## STEP 6: PAPER PAGE UPDATES

### Create New Hero for Paper Page:

```tsx
// src/components/PaperHero.tsx
export default function PaperHero() {
  return (
    <section className="relative w-full">
      <img
        src="/images/paper-hero.webp"
        alt="The Talsky Tonal Paper with Video"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </section>
  );
}
```

### Update Paper Page Content:

```tsx
<PaperHero />

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

<!-- Add JotForm here too -->
```

---

## STEP 7: FAVICON UPDATE

Replace these files with the logo:

```
/public/favicon.ico
/public/favicon-16x16.png
/public/favicon-32x32.png
/public/apple-touch-icon.png
```

Update index.html head:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

---

## STEP 8: FINAL CHECKLIST

- [ ] All images downloaded and converted to WebP
- [ ] Hero image (with text) in place
- [ ] Logo in header (not text)
- [ ] Favicon updated
- [ ] Nashville event section removed
- [ ] Notification banner links to form
- [ ] Beyond Technique is left-aligned
- [ ] JotForm embed implemented (ID: 233045470374150)
- [ ] Poptin popup script added
- [ ] Paper page hero image updated
- [ ] All pages tested on mobile and desktop
- [ ] Build runs successfully
- [ ] No 404 errors for images

---

## KEY DIFFERENCES FROM CURRENT VERSION

| Element | Current | Should Be |
|---------|---------|-----------|
| Hero | Text overlay with TTC text | Image with text baked in |
| Header Logo | Text "Talsky Tonal Chiropractic" | Logo image |
| Event Section | Nashville, TN Oct 10-12 box | None (removed) |
| Beyond Technique | Center-aligned | Left-aligned |
| Form | Custom React form | JotForm iframe |
| Popup | None | Poptin modal |
| Favicon | Generic or wrong | TTC logo |
| Paper Hero | Missing/wrong | Specific image with "PAPER" text |

---

## DEPLOYMENT NOTES

After all changes:

1. Run `npm run build`
2. Test all pages
3. Verify all images load
4. Test JotForm submission
5. Test popup appears
6. Verify mobile responsiveness
7. Check all links work
8. Deploy to production

**IMPORTANT**: Once deployed, test the live site to ensure cdn.durable.co images are NOT being used anywhere - all should be from your /public/images/ directory.
