# DevSphere | Modern Interactive Blog Website

A production-ready, fully responsive, and interactive blog platform built with clean, modern vanilla web technologies (HTML5, CSS3, JavaScript ES6+).

Developed by **Sumathi** as a showcase web development project.

---

## 🌟 Key Features

### 📖 Rich Reading Experience
- **Full Article Modal / Reader**: Click on any card or "Read Story" to open a dedicated, distraction-free reading view with formatted headers, quotes, code blocks, lists, and author profiles.
- **Dynamic Reading Progress Bar**: Real-time reading progress indicator that tracks your scroll depth at the top of the screen.
- **Estimated Reading Times**: Each article displays an estimated read time (e.g. `5 min read`).

### ✍️ Full Post Management (CRUD)
- **"Write New Article" Modal**: Anyone can publish new blog posts with custom titles, authors, categories, excerpt summaries, rich article content, and cover images.
- **Flexible Cover Images**: Choose between local preset images, external URLs, or upload your own file directly from your device.
- **LocalStorage Persistence**: Newly authored posts, likes, comments, and saved bookmarks persist across page reloads.

### 🔍 Live Search & Multi-Topic Filtering
- **Real-Time Global Search**: Instant filtering by keywords across titles, excerpts, content, and authors.
- **Category Filter Pills**: One-click filtering between `All`, `Technology`, `Web Development`, `Travel`, and `Lifestyle & Career` with real-time article count badges.
- **Quick Sorting Options**: Sort articles by *Newest First*, *Oldest First*, *Most Popular (Likes)*, or *Quickest Reads*.

### 💬 Interactive Engagement & Social Features
- **Like / Clap Reactions**: Heart counter for each article that updates dynamically.
- **Bookmarks & Saved Reading List**: Save articles for later reading with a dedicated "Saved Articles" view and badge indicator.
- **Live Comments Section**: Readers can submit comments with their name and thoughts, appearing instantly on the article and saved to storage.
- **One-Click Link Sharing**: Copy shareable links directly to the clipboard with toast feedback.

### 🌓 Dark Mode & Light Mode
- Seamless theme switching between modern dark and crisp light themes.
- Respects system preferences (`prefers-color-scheme`) and remembers user choice in `localStorage`.

### 📱 Responsive & Accessible UI
- Mobile-first architecture with slide-out navigation drawer.
- Glassmorphic sticky navbar with backdrop blur.
- Custom non-intrusive toast notifications for user actions (replaces intrusive `alert()` popups).
- Smooth back-to-top floating button.

### 📬 Complete Contact & Newsletter
- Validated contact form with topic selection, simulated delivery state, and toast feedback.
- Newsletter subscription widget.

---

## 🚀 How to Run the Project

No build step or server dependencies required!

### Option 1: Double-Click
Simply double-click `index.html` in your file explorer to open it in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server (VS Code / IDE)
If using VS Code or another editor with Live Server:
1. Right-click `index.html`
2. Select **"Open with Live Server"**

---

## 🛠️ Built With

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) for accessibility and SEO.
- **CSS3**: Custom properties (CSS variables for theming), Flexbox, CSS Grid, media queries, smooth animations, and glassmorphism.
- **Vanilla JavaScript (ES6+)**: Object-oriented application controller, DOM manipulation, Web Storage API (`localStorage`), Clipboard API, and FileReader.
- **Google Fonts**: *Plus Jakarta Sans* & *Fira Code*.

---

## 📄 License
Created for internship learning and portfolio demonstration. Free to use and customize.
