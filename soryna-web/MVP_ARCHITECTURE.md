# Portfolio MVP Architecture Plan

## 1. Goal
Transform the current "mixed" static site into a professional, easy-to-maintain **Portfolio Website** used to showcase Soryna's products (bots/tools) and services.

## 2. Current State Analysis
*   **Format**: Static HTML/CSS/JS.
*   **Content**: `index.html` is a generic agency template with placeholders.
*   **Assets**: `leads-scraper-simple.html`, `bot-store.html`, etc., are actual products but are floating in the root folder.
*   **Problem**: No central way to manage portfolio items; projects are disconnected files; navigation is duplicated or missing on sub-pages.

## 3. Operations Architecture (MVP)
We will keep the **Static Stack** (HTML + Tailwind + Vanilla JS) for speed and simplicity (no build steps required), but we will organize it like a modern app.

### A. Directory Structure
```
soryna-web/
├── index.html              # Main Portfolio (Landing Page)
├── about.html              # (Optional) Detailed About Me
├── contact.html            # (Optional) Dedicated Contact Page
├── assets/                 # Images, icons, etc.
│   ├── images/
│   └── css/                # styles.css
├── js/
│   ├── main.js             # Core logic (mobile menu, animations)
│   ├── data.js             # DATABASE of projects (JSON format)
│   └── components.js       # Shared Header/Footer renderer
└── projects/               # The "Products" go here
    ├── leads-scraper/
    │   └── index.html      # (Formerly leads-scraper-simple.html)
    ├── discord-bot/
    │   └── index.html
    └── ...
```

### B. Core Features (The "MVP" Scope)
1.  **Dynamic Portfolio Grid**:
    *   Instead of hardcoding HTML cards in `index.html`, we use a JavaScript array in `data.js`.
    *   *Benefit*: To add a new project, you just add one line to the JS file, no HTML editing needed.
2.  **Shared Navigation**:
    *   A simple script to inject the Header/Navbar into every page.
    *   *Benefit*: Edit the menu links once, update everywhere.
3.  **Real Project Integration**:
    *   Move the loose HTML files (`leads-scraper-simple.html`, etc.) into the `projects/` folder.
    *   Link them correctly in the Portfolio Grid.

## 4. Step-by-Step Implementation

### Phase 1: Organization
1.  Create folders: `assets/css`, `assets/images`, `js`, `projects`.
2.  Move `styles.css` to `assets/css` (update link in HTML).
3.  Move `app.js`, `script.js` to `js/`.
4.  Move product HTMLs to `projects/<name>/index.html`.

### Phase 2: "Database" Creation
Create `js/data.js`:
```javascript
const projects = [
  {
    title: "Leads Scraper Simple",
    category: "Tools",
    image: "assets/images/scraper.jpg",
    description: "Tools sederhana untuk mengambil data calon pelanggan.",
    link: "/projects/leads-scraper/"
  },
  // Add other bots here
];
```

### Phase 3: Dynamic Rendering
Update `index.html` to remove hardcoded portfolio items and replace with:
```html
<div id="portfolio-grid" class="..."></div>
<script>
  renderPortfolio(projects); // Function defined in main.js
</script>
```

## 5. Why this architecture?
*   **Fast**: No React/Next.js overhead for a simple portfolio.
*   **Scalable**: Adding a 100th project is as easy as adding the 1st.
*   **Professional**: Clean URL structure (`/projects/leads-scraper` vs `leads-scraper-simple.html`).
