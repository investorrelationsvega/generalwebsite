# Hosting This Website on Wix

This is a complete static business website (HTML, CSS, JS) designed to work with Wix. Below are your options for getting it onto Wix.

---

## Option 1: Wix HTML Embed (Easiest)

Use Wix's **HTML iframe** widget to embed the entire site or individual sections.

1. Log in to your Wix account and open your site editor
2. Click **Add (+)** > **Embed Code** > **Embed HTML**
3. Paste the contents of `index.html` into the code box
4. For the CSS and JS, you have two approaches:
   - **Inline**: Copy the CSS into a `<style>` tag and JS into a `<script>` tag directly in the HTML
   - **External hosting**: Upload `styles.css` and `script.js` to a CDN (e.g., GitHub Pages, Netlify, or Wix Media Manager) and reference them with full URLs

### Creating a single-file version

Combine everything into one HTML file by:
- Replacing `<link rel="stylesheet" href="styles.css">` with `<style>` + contents of `styles.css` + `</style>`
- Replacing `<script src="script.js"></script>` with `<script>` + contents of `script.js` + `</script>`

---

## Option 2: Recreate in Wix Editor (Most Native)

Use this code as a **design reference** and recreate the layout in Wix's drag-and-drop editor:

1. **Pages**: Create pages matching each section (Home, About, Services, Team, Contact)
2. **Sections**: Use Wix strips/sections for each content block
3. **Styling**: Match the color scheme from `styles.css`:
   - Primary blue: `#1a56db`
   - Accent yellow: `#f4b740`
   - Text dark: `#1f2937`
   - Text light: `#6b7280`
   - Background alt: `#f9fafb`
   - Font: Inter (available in Wix fonts)
4. **Contact form**: Use Wix's built-in form builder, which includes email handling

---

## Option 3: Wix Custom Code (Header/Body)

For adding custom code globally across your Wix site:

1. Go to **Settings** > **Custom Code** (or **Advanced** > **Custom Code**)
2. Add the CSS in the **Head** section wrapped in `<style>` tags
3. Add the JS in the **Body - End** section wrapped in `<script>` tags
4. Add HTML elements using Wix's editor or embed widgets

---

## Customizing the Content

### Text & Branding
- Replace "CompanyName" with your actual company name (appears in nav, footer, and title)
- Update the hero title, subtitle, and all section text
- Change contact info (address, email, phone)
- Update team member names, roles, and descriptions
- Modify testimonials with real client feedback

### Colors
Edit the CSS variables at the top of `styles.css`:
```css
--color-primary: #1a56db;      /* Main brand color */
--color-primary-dark: #1544b0;  /* Hover state */
--color-accent: #f4b740;        /* Accent/highlight */
```

### Images
- Replace the SVG placeholder icons in the team section with actual photos
- Add a background image to the hero section if desired

### Contact Form
The form currently shows a success message client-side only. To make it functional on Wix:
- Use Wix's built-in form/contact widgets, OR
- Connect it to a service like Formspree, Netlify Forms, or EmailJS

---

## File Structure

```
index.html    - Main HTML structure with all sections
styles.css    - Complete responsive stylesheet
script.js     - Navigation, animations, form handling
```
