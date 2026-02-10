# Web Layouts - Agent Instructions

## Overview
This project contains web layouts and components built with vanilla HTML, CSS, and JavaScript. All work must follow the guidelines below to maintain consistency and code organization.

## Core Principles

### 1. CSS3 Only
- **MUST use CSS3** for all styling
- **NEVER use TAILWIND CSS** or any utility-first CSS framework
- Write clean, semantic CSS with proper selectors and organization
- Use CSS3 features like Flexbox, CSS Grid, Custom Properties, Transitions, and Animations

### 2. File Separation
All projects **MUST** separate concerns into three distinct file types:

- **HTML Files** (`.html`)
  - Contains semantic HTML structure only
  - No inline styles or scripts
  - Proper accessibility attributes (alt text, ARIA labels, etc.)

- **CSS Files** (`.css`)
  - All styling rules
  - Organized by component or section
  - Use meaningful class names (BEM or similar conventions recommended)
  - No hardcoded styling in HTML

- **JavaScript Files** (`.js`)
  - All functionality and interactivity
  - Event listeners and DOM manipulation
  - No inline scripts in HTML files
  - Proper file linking in HTML via `<script>` tags

### 3. Project Structure Example
```
my-component/
├── index.html
├── styles.css
├── script.js
└── README.md (optional)
```

## Development Guidelines

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Keep markup clean and minimal
- Link external CSS and JS files properly
- Use data attributes for JavaScript hooks when needed

### CSS
- Use meaningful class names (not descriptive of appearance)
- Organize rules logically (layout, components, utilities)
- Use CSS variables for colors **ONLY for main colors** (keep it simple for beginners)
- Include comments for complex rules
- Use Flexbox or CSS Grid for layouts

#### CSS Rules for Beginners (Simplified Approach)
To keep CSS understandable and learner-friendly:

1. **Color Variables - Keep It Simple**
   - Define ONLY 8-10 main colors in `:root`
   - Example: `--primary`, `--secondary`, `--white`, `--dark`, `--gray`, `--border`
   - Avoid excessive color variations like `--color-neutral-50`, `--color-neutral-100`, etc.
   - Use actual hex values like `#0066cc` instead of cryptic names

2. **No Typography Variables**
   - Write font sizes directly: `font-size: 36px;` (not `var(--font-size-xl)`)
   - Set line-height directly: `line-height: 1.6;`
   - This helps beginners see and understand actual values instantly

3. **No Spacing/Spacing Variables**
   - Use direct pixel values: `padding: 16px;`, `margin: 24px;`
   - Don't create variables like `--spacing-md`, `--spacing-lg`
   - Beginners learn better by seeing concrete numbers

4. **No Transition/Shadow Variables**
   - Write: `transition: all 0.3s ease;` (not `var(--transition-normal)`)
   - Write: `box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);` (not `var(--shadow-md)`)
   - Direct values are more educational

5. **Keep Variable Names SHORT & CLEAR**
   - ✅ Good: `--primary`, `--secondary`, `--gray`
   - ❌ Bad: `--color-primary-light`, `--color-neutral-600`

6. **Comment Each Section**
   - Every section should have a clear comment explaining its purpose
   - Example: `/* HERO SECTION - Main attention grabber */`

7. **Use Inline Comments for Complex Rules**
   - Example: `display: grid; /* Creates flexible multi-column layout */`

8. **Realistic Values**
   - Use real, meaningful sizes: `24px`, `36px`, `0.3s`
   - Avoid overly precise values: beginner minds should focus on learning concepts

### JavaScript
- Use vanilla JavaScript (no jQuery or frameworks unless exceptional need)
- Use `const` and `let` (never `var`)
- Add comments for complex logic
- Properly handle events and avoid memory leaks
- Use meaningful function and variable names

## Workflow for Agents

When creating or modifying layouts:

1. **Create the folder structure** with separate HTML, CSS, and JS files
2. **Build semantic HTML** first with proper structure
3. **Add CSS styling** using modern CSS3 features
4. **Implement JavaScript** for interactivity if needed
5. **Test responsiveness** and cross-browser compatibility
6. **Document** the component purpose and usage if complex

## Restrictions

❌ **DO NOT:**
- Use Tailwind CSS or any CSS framework
- Inline styles or scripts in HTML
- Use preprocessors like SASS/SCSS without explicit permission
- Use outdated CSS (floats for layout, vendor prefixes)
- Mix concerns in single files

✅ **DO:**
- Keep files separated and organized
- Write clean, maintainable CSS3
- Use semantic HTML
- Test in multiple browsers
- Follow naming conventions consistently

## Reference Resources

- MDN Web Docs: https://developer.mozilla.org/
- CSS3 Properties: https://www.w3.org/TR/css-flexbox/ | https://www.w3.org/TR/css-grid/
- HTML5 Semantics: https://html.spec.whatwg.org/
- Web Accessibility: https://www.w3.org/WAI/

---

**Last Updated:** February 10, 2026
