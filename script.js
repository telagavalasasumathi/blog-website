/**
 * ==============================================================================
 * DevSphere Modern Blog - Complete Interactive Application Logic
 * Author: Sumathi | Internship Learning Project
 * ==============================================================================
 */

// -----------------------------------------------------------------------------
// 1. Initial Seed Data (Articles with rich formatted content)
// -----------------------------------------------------------------------------
const SEED_POSTS = [
    {
        id: "1",
        title: "Travel Adventures: Exploring the Hidden Gems of the World",
        category: "Travel",
        image: "blog1.jpg",
        readTime: "5 min read",
        author: "Sumathi",
        date: "Nov 12, 2026",
        likes: 24,
        excerpt: "From serene mountain ranges to vibrant coastal towns, join me on an unforgettable journey through breathtaking landscapes, local cultures, and peaceful retreats.",
        content: `
Traveling is more than merely visiting new destinations on a map—it is a transformative experience that challenges our perspectives, renews our curiosity, and grounds us in the beauty of our planet.

### 1. The Magic of Stepping Outside Comfort Zones
When we step away from familiar surroundings, we awaken all our senses. Navigating winding cobblestone alleys, smelling the rich aromas of local spices, and listening to dialects we don't fully understand teaches us adaptability and humility. Some of the most memorable moments happen when travel plans deviate: an unexpected detour to a hidden waterfall, a warm conversation with a café owner, or watching the sunset over quiet valleys.

### 2. Immersive Cultural Experiences
True exploration is about connection. Taking time to respect and engage with local traditions reveals shared human values across borders. Whether it is enjoying home-cooked meals at regional markets or observing ancient architecture, travel enriches our personal story in ways no textbook ever could.

> "To travel is to discover that everyone is wrong about other countries." — Aldous Huxley

### Essential Travel Takeaways for Explorers:
- **Pack lightly:** Freedom of movement makes travel 10x more enjoyable.
- **Support local businesses:** Dine at family-run eateries and purchase handmade crafts.
- **Practice digital mindfulness:** Put down the camera often to simply absorb the present moment.
- **Keep an open itinerary:** Leave room for spontaneous discoveries and serendipitous encounters.
        `,
        comments: [
            { author: "Sarah Jenkins", date: "2 days ago", text: "Such an inspiring and vivid read! Adding that mountain trail idea to my travel bucket list." },
            { author: "Rohit Verma", date: "1 day ago", text: "Loved the packing tips! Traveling light makes all the difference." }
        ]
    },
    {
        id: "2",
        title: "Technology Trends: Emerging AI & The Future of Software Development",
        category: "Technology",
        image: "blog2.jpg",
        readTime: "6 min read",
        author: "Sumathi",
        date: "Nov 10, 2026",
        likes: 48,
        excerpt: "How artificial intelligence, agentic workflows, edge runtimes, and modern developer tooling are fundamentally transforming software engineering in 2026.",
        content: `
The software landscape is experiencing one of the most profound paradigm shifts in computational history. As machine intelligence becomes deeply integrated into development environments, the role of a software engineer is rapidly evolving from manual syntax writing to architectural orchestrator and systems thinker.

### The Rise of Agentic Development Workflows
Modern developer assistants are no longer basic auto-complete tools. They reason through entire codebases, write unit tests, verify types, and refactor complex architectures. Engineers can now focus higher on business logic, user experience design, and security modeling while automated pipelines handle boilerplate tasks.

### Edge Computing and Instant Compute
With the explosion of edge functions and serverless platforms, code executes geographically closer to the end user than ever before. This architecture dramatically cuts down latency, providing instantaneous response times for worldwide users without bulky centralized infrastructure.

> "The true measure of developer tooling is not how complex it is, but how effortlessly it unlocks human creativity and problem-solving."

### Core Architectural Pillars in 2026:
- **Hybrid AI Interfaces:** Integrating neural models directly with deterministic backend services.
- **Zero-Trust Security by Default:** Granular access boundaries across microservices and APIs.
- **Local-First Software:** Applications designed to work offline flawlessly and synchronize data smoothly.
        `,
        comments: [
            { author: "David Chen", date: "3 days ago", text: "The breakdown of agentic workflows is spot on. Developer tooling has accelerated so much." },
            { author: "Elena Rostova", date: "Yesterday", text: "Local-first software is definitely the future. Users expect instantaneous responsiveness." }
        ]
    },
    {
        id: "3",
        title: "Web Development: Building Responsive Modern Apps with Clean Architecture",
        category: "Web Development",
        image: "blog3.jpg",
        readTime: "7 min read",
        author: "Sumathi",
        date: "Nov 08, 2026",
        likes: 62,
        excerpt: "A beginner-to-pro guide on mastering modern frontend foundations: semantic HTML5, fluid responsive CSS with Flexbox and Grid, and modular vanilla JavaScript.",
        content: `
Before jumping into heavy frontend frameworks and endless build tools, mastering the foundational triad—HTML, CSS, and modern JavaScript—is the greatest investment any developer can make. A rock-solid understanding of standard web APIs provides lasting resilience throughout your engineering career.

### 1. Semantic HTML5: The Bedrock of Accessibility
Semantic tags like \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, and \`<footer>\` aren't just cosmetic choices; they provide critical structure for screen readers, search engines, and browser accessibility trees. Writing clean, meaningful HTML ensures your application is usable by everyone, regardless of ability or device.

### 2. CSS Grid & Modern Responsive Principles
Gone are the days of brittle float hacks and heavy styling libraries. Modern CSS provides native responsive superpowers through Flexbox, CSS Grid, and \`clamp()\`:

\`\`\`css
/* Clean responsive card grid without media queries */
.modern-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}
\`\`\`

### 3. Modular Vanilla JavaScript
JavaScript ES6+ provides native modules, async/await, and expressive array methods that make third-party libraries optional for many interactive projects. When state management and DOM updates are designed thoughtfully, vanilla JavaScript runs blazingly fast with zero compile overhead.

> "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
        `,
        comments: [
            { author: "Ananya Sharma", date: "5 days ago", text: "This guide is gold for anyone preparing for frontend internship interviews! Clear and practical." },
            { author: "Marcus Vance", date: "4 days ago", text: "Vanilla JS is so underrated. Mastering DOM APIs first makes learning frameworks 10x easier." }
        ]
    },
    {
        id: "4",
        title: "Mastering CSS Grid and Flexbox: The Ultimate Layout Guide",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        readTime: "4 min read",
        author: "Sumathi",
        date: "Nov 05, 2026",
        likes: 39,
        excerpt: "Stop guessing alignment properties! Learn how Flexbox and CSS Grid complement each other to build bulletproof responsive layouts with ease.",
        content: `
One of the most common questions beginners face in CSS is: "Should I use Flexbox or CSS Grid?" The short answer is: they are not competitors; they are partners designed for different layout dimensions.

### The Mental Model: 1D vs 2D
- **Flexbox is 1-Dimensional:** It arranges items along a single axis (either a row or a column). It excels at alignment within navigation bars, button groups, and fluid item stacks.
- **CSS Grid is 2-Dimensional:** It controls rows and columns simultaneously. It is the premier choice for full-page scaffolding, card galleries, and complex dashboard layouts.

### Alignment Cheatsheet:
- \`justify-content\`: Aligns items along the main axis.
- \`align-items\`: Aligns items along the cross axis.
- \`place-items: center\`: A one-line shorthand in CSS Grid to perfectly center any content horizontally and vertically!

Master both tools and responsive layouts will transform from a source of frustration into a creative superpower.
        `,
        comments: [
            { author: "Kavita Rao", date: "1 week ago", text: "The 1D vs 2D explanation finally made it click for me. Thank you!" }
        ]
    },
    {
        id: "5",
        title: "From Learner to Developer: My Internship Journey & Reflections",
        category: "Lifestyle & Career",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        readTime: "5 min read",
        author: "Sumathi",
        date: "Oct 28, 2026",
        likes: 51,
        excerpt: "Key takeaways from building real-world projects, overcoming imposter syndrome, and setting up an effective daily routine for continuous tech growth.",
        content: `
Starting a journey in web development can feel overwhelming with the sheer volume of tutorials, frameworks, and changing trends. As an intern developing this blog project, here are the most impactful lessons I have learned along the way:

### 1. Build Real Things Early
Watching video courses creates the illusion of competence. Real growth happens the moment you open an empty code editor and struggle through your first broken CSS layout or undefined JavaScript error. Building this blog from scratch taught me more than dozens of passive lectures.

### 2. Embrace the Debugging Mindset
Bugs are not signs of personal failure; they are simply puzzles waiting to be solved. Using browser DevTools, reading error stack traces, and testing hypotheses methodically are the true hallmarks of an engineer.

### 3. Share Your Work Publicly
Documenting what you learn—whether through blog posts, GitHub repositories, or sharing with peers—solidifies your own understanding while creating a valuable portfolio that showcases your genuine passion.
        `,
        comments: [
            { author: "Deepak Nair", date: "2 weeks ago", text: "Incredibly relatable. The tip about building small projects consistently was a game changer for me too." }
        ]
    },
    {
        id: "6",
        title: "The Rise of Sustainable & Fast Web: Performance First Mindset",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        readTime: "4 min read",
        author: "Sumathi",
        date: "Oct 20, 2026",
        likes: 33,
        excerpt: "Why web performance is an essential feature, not an afterthought. Practical steps to slash bundle sizes and achieve 100 on Google PageSpeed.",
        content: `
Every millisecond counts on the modern web. Research consistently proves that page load times directly correlate with user engagement, bounce rates, and overall accessibility. Furthermore, lightweight websites consume significantly less energy across data centers and client devices.

### Practical Performance Strategies:
1. **Optimize Images:** Convert heavy assets to modern WebP or AVIF formats and use responsive \`srcset\` attributes.
2. **Minimize Render-Blocking Resources:** Load non-critical CSS asynchronously and defer external scripts.
3. **Audit Core Web Vitals:** Focus on Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).

Fast websites delight users and leave a lighter digital footprint.
        `,
        comments: []
    }
];

// -----------------------------------------------------------------------------
// 2. Application State & Storage
// -----------------------------------------------------------------------------
class BlogApp {
    constructor() {
        this.STORAGE_KEYS = {
            POSTS: "devsphere_posts",
            LIKES: "devsphere_likes",
            BOOKMARKS: "devsphere_bookmarks",
            THEME: "devsphere_theme"
        };

        // State initialization
        this.posts = this.loadPosts();
        this.likedPostIds = this.loadLikes();
        this.bookmarkedPostIds = this.loadBookmarks();
        this.activeCategory = "all";
        this.searchQuery = "";
        this.activeSort = "latest";
        this.activeView = "all"; // 'all' or 'saved'
        this.activeModalPostId = null;

        // Initialize DOM Elements & Event Listeners
        this.initDOMElements();
        this.initTheme();
        this.initEventListeners();
        this.render();
    }

    // Load posts from localStorage or initialize with seed data
    loadPosts() {
        const stored = localStorage.getItem(this.STORAGE_KEYS.POSTS);
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Error parsing stored posts:", e);
            }
        }
        localStorage.setItem(this.STORAGE_KEYS.POSTS, JSON.stringify(SEED_POSTS));
        return SEED_POSTS;
    }

    savePosts() {
        localStorage.setItem(this.STORAGE_KEYS.POSTS, JSON.stringify(this.posts));
    }

    loadLikes() {
        const stored = localStorage.getItem(this.STORAGE_KEYS.LIKES);
        return stored ? JSON.parse(stored) : {};
    }

    saveLikes() {
        localStorage.setItem(this.STORAGE_KEYS.LIKES, JSON.stringify(this.likedPostIds));
    }

    loadBookmarks() {
        const stored = localStorage.getItem(this.STORAGE_KEYS.BOOKMARKS);
        return stored ? JSON.parse(stored) : [];
    }

    saveBookmarks() {
        localStorage.setItem(this.STORAGE_KEYS.BOOKMARKS, JSON.stringify(this.bookmarkedPostIds));
    }

    // -------------------------------------------------------------------------
    // 3. DOM Cache
    // -------------------------------------------------------------------------
    initDOMElements() {
        this.dom = {
            // Theme
            themeToggle: document.getElementById("theme-toggle"),
            themeIconSun: document.getElementById("theme-icon-sun"),
            themeIconMoon: document.getElementById("theme-icon-moon"),
            
            // Navigation & Mobile Drawer
            mobileMenuBtn: document.getElementById("mobile-menu-btn"),
            mobileDrawer: document.getElementById("mobile-drawer"),
            scrollProgress: document.getElementById("scroll-progress"),
            backToTopBtn: document.getElementById("back-to-top"),
            
            // Search & Filters
            globalSearch: document.getElementById("global-search"),
            clearSearchBtn: document.getElementById("clear-search"),
            categoryFilters: document.getElementById("category-filters"),
            sortSelect: document.getElementById("sort-select"),
            viewAllBtn: document.getElementById("view-all-btn"),
            viewSavedBtn: document.getElementById("view-saved-btn"),
            savedCounter: document.getElementById("saved-counter"),
            bookmarkBadge: document.getElementById("bookmark-badge"),
            bookmarksQuickBtn: document.getElementById("bookmarks-btn"),
            filterStatusBar: document.getElementById("filter-status-bar"),
            filterStatusText: document.getElementById("filter-status-text"),
            resetFilterBtn: document.getElementById("reset-filter-btn"),
            
            // Counts & Grids
            totalArticlesCount: document.getElementById("total-articles-count"),
            featuredCard: document.getElementById("featured-article-card"),
            blogGrid: document.getElementById("blog-grid"),
            emptyState: document.getElementById("empty-state"),
            emptyResetBtn: document.getElementById("empty-reset-btn"),
            
            // Reader Modal Elements
            readerModal: document.getElementById("reader-modal"),
            closeReaderBtn: document.getElementById("close-reader-btn"),
            closeReaderX: document.getElementById("close-reader-x"),
            modalCoverImg: document.getElementById("modal-cover-img"),
            modalCategoryBadge: document.getElementById("modal-category-badge"),
            modalReadTime: document.getElementById("modal-read-time"),
            modalArticleTitle: document.getElementById("modal-article-title"),
            modalAuthorName: document.getElementById("modal-author-name"),
            modalAuthorAvatar: document.getElementById("modal-author-avatar"),
            modalPublishedDate: document.getElementById("modal-published-date"),
            modalArticleBody: document.getElementById("modal-article-body"),
            modalLikeBtn: document.getElementById("modal-like-btn"),
            modalLikeCount: document.getElementById("modal-like-count"),
            modalBookmarkBtn: document.getElementById("modal-bookmark-btn"),
            modalCopyLinkBtn: document.getElementById("modal-copy-link-btn"),
            modalCommentsCount: document.getElementById("modal-comments-count"),
            modalCommentsList: document.getElementById("modal-comments-list"),
            newCommentForm: document.getElementById("new-comment-form"),
            commentAuthorInput: document.getElementById("comment-author-input"),
            commentTextInput: document.getElementById("comment-text-input"),

            // Create Post Modal Elements
            createModal: document.getElementById("create-modal"),
            openCreateBtn: document.getElementById("open-create-modal"),
            mobileCreateBtn: document.getElementById("mobile-create-btn"),
            closeCreateBtn: document.getElementById("close-create-modal"),
            cancelCreateBtn: document.getElementById("cancel-create-btn"),
            createPostForm: document.getElementById("create-post-form"),
            postTitleInput: document.getElementById("post-title-input"),
            postAuthorInput: document.getElementById("post-author-input"),
            postCategorySelect: document.getElementById("post-category-select"),
            postExcerptInput: document.getElementById("post-excerpt-input"),
            postContentInput: document.getElementById("post-content-input"),
            postImageUrl: document.getElementById("post-image-url"),
            postImageFile: document.getElementById("post-image-file"),
            imagePresetPicker: document.getElementById("image-preset-picker"),
            imageUrlGroup: document.getElementById("image-url-group"),
            imageFileGroup: document.getElementById("image-file-group"),

            // Forms & Footer
            contactForm: document.getElementById("contact-form"),
            contactName: document.getElementById("contact-name"),
            contactEmail: document.getElementById("contact-email"),
            contactSubject: document.getElementById("contact-subject"),
            contactMessage: document.getElementById("contact-message"),
            newsletterForm: document.getElementById("newsletter-form"),
            newsletterEmail: document.getElementById("newsletter-email"),
            toastContainer: document.getElementById("toast-container")
        };
    }

    // -------------------------------------------------------------------------
    // 4. Theme & Layout Management
    // -------------------------------------------------------------------------
    initTheme() {
        const savedTheme = localStorage.getItem(this.STORAGE_KEYS.THEME);
        const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const activeTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

        this.applyTheme(activeTheme);
    }

    applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem(this.STORAGE_KEYS.THEME, theme);

        if (theme === "dark") {
            this.dom.themeIconSun.classList.add("hidden");
            this.dom.themeIconMoon.classList.remove("hidden");
        } else {
            this.dom.themeIconSun.classList.remove("hidden");
            this.dom.themeIconMoon.classList.add("hidden");
        }
    }

    toggleTheme() {
        const currentTheme = document.body.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        this.applyTheme(newTheme);
        this.showToast(`Switched to ${newTheme} mode`, newTheme === "dark" ? "🌙" : "☀️");
    }

    // -------------------------------------------------------------------------
    // 5. Event Listeners Setup
    // -------------------------------------------------------------------------
    initEventListeners() {
        // Theme toggle
        this.dom.themeToggle.addEventListener("click", () => this.toggleTheme());

        // Mobile drawer toggle
        this.dom.mobileMenuBtn.addEventListener("click", () => {
            this.dom.mobileDrawer.classList.toggle("open");
        });

        // Close mobile drawer on link click
        document.querySelectorAll(".mobile-nav-link").forEach(link => {
            link.addEventListener("click", () => {
                this.dom.mobileDrawer.classList.remove("open");
            });
        });

        // Scroll listener for progress bar and back to top
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progressPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            this.dom.scrollProgress.style.width = `${progressPercent}%`;

            if (scrollTop > 350) {
                this.dom.backToTopBtn.classList.remove("hidden");
            } else {
                this.dom.backToTopBtn.classList.add("hidden");
            }
        });

        this.dom.backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Search Input
        this.dom.globalSearch.addEventListener("input", (e) => {
            this.searchQuery = e.target.value.trim().toLowerCase();
            if (this.searchQuery) {
                this.dom.clearSearchBtn.classList.remove("hidden");
            } else {
                this.dom.clearSearchBtn.classList.add("hidden");
            }
            this.render();
        });

        this.dom.clearSearchBtn.addEventListener("click", () => {
            this.dom.globalSearch.value = "";
            this.searchQuery = "";
            this.dom.clearSearchBtn.classList.add("hidden");
            this.render();
        });

        // Trending topic tags
        document.querySelectorAll(".topic-tag").forEach(tagBtn => {
            tagBtn.addEventListener("click", () => {
                const targetTag = tagBtn.getAttribute("data-tag");
                this.activeCategory = targetTag;
                this.activeView = "all";
                this.updateCategoryPillsUI();
                this.render();
                document.getElementById("articles").scrollIntoView({ behavior: "smooth" });
            });
        });

        // Category pills
        this.dom.categoryFilters.addEventListener("click", (e) => {
            const pill = e.target.closest(".cat-pill");
            if (!pill) return;
            this.activeCategory = pill.getAttribute("data-category");
            this.updateCategoryPillsUI();
            this.render();
        });

        // Footer category links
        document.querySelectorAll(".footer-cat-link").forEach(link => {
            link.addEventListener("click", (e) => {
                const cat = link.getAttribute("data-cat");
                if (cat) {
                    this.activeCategory = cat;
                    this.activeView = "all";
                    this.updateCategoryPillsUI();
                    this.render();
                }
            });
        });

        // Sort dropdown
        this.dom.sortSelect.addEventListener("change", (e) => {
            this.activeSort = e.target.value;
            this.render();
        });

        // View toggle (All vs Saved)
        this.dom.viewAllBtn.addEventListener("click", () => {
            this.activeView = "all";
            this.dom.viewAllBtn.classList.add("active");
            this.dom.viewSavedBtn.classList.remove("active");
            this.render();
        });

        this.dom.viewSavedBtn.addEventListener("click", () => {
            this.activeView = "saved";
            this.dom.viewSavedBtn.classList.add("active");
            this.dom.viewAllBtn.classList.remove("active");
            this.render();
        });

        // Quick Bookmarks button in navbar
        this.dom.bookmarksQuickBtn.addEventListener("click", () => {
            this.activeView = "saved";
            this.dom.viewSavedBtn.classList.add("active");
            this.dom.viewAllBtn.classList.remove("active");
            this.render();
            document.getElementById("articles").scrollIntoView({ behavior: "smooth" });
        });

        // Reset Filter Buttons
        this.dom.resetFilterBtn.addEventListener("click", () => this.resetAllFilters());
        this.dom.emptyResetBtn.addEventListener("click", () => this.resetAllFilters());

        // Reader Modal Close Actions
        this.dom.closeReaderBtn.addEventListener("click", () => this.closeReaderModal());
        this.dom.closeReaderX.addEventListener("click", () => this.closeReaderModal());
        this.dom.readerModal.addEventListener("click", (e) => {
            if (e.target === this.dom.readerModal) this.closeReaderModal();
        });

        // Reader Modal Interactive Actions (Like, Bookmark, Copy Link)
        this.dom.modalLikeBtn.addEventListener("click", () => {
            if (this.activeModalPostId) this.toggleLike(this.activeModalPostId);
        });

        this.dom.modalBookmarkBtn.addEventListener("click", () => {
            if (this.activeModalPostId) this.toggleBookmark(this.activeModalPostId);
        });

        this.dom.modalCopyLinkBtn.addEventListener("click", () => {
            this.copyCurrentArticleLink();
        });

        // New Comment Form Submission
        this.dom.newCommentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleAddComment();
        });

        // Create Modal Open & Close
        this.dom.openCreateBtn.addEventListener("click", () => this.openCreateModal());
        this.dom.mobileCreateBtn.addEventListener("click", () => {
            this.dom.mobileDrawer.classList.remove("open");
            this.openCreateModal();
        });
        this.dom.closeCreateBtn.addEventListener("click", () => this.closeCreateModal());
        this.dom.cancelCreateBtn.addEventListener("click", () => this.closeCreateModal());
        this.dom.createModal.addEventListener("click", (e) => {
            if (e.target === this.dom.createModal) this.closeCreateModal();
        });

        // Image source radio buttons in create modal
        document.querySelectorAll('input[name="image-source-type"]').forEach(radio => {
            radio.addEventListener("change", (e) => {
                const type = e.target.value;
                this.dom.imagePresetPicker.classList.toggle("hidden", type !== "preset");
                this.dom.imageUrlGroup.classList.toggle("hidden", type !== "url");
                this.dom.imageFileGroup.classList.toggle("hidden", type !== "file");
            });
        });

        // Preset image option click styling
        document.querySelectorAll(".preset-option").forEach(label => {
            label.addEventListener("click", () => {
                document.querySelectorAll(".preset-option").forEach(l => l.classList.remove("active"));
                label.classList.add("active");
            });
        });

        // Create Post Form Submission
        this.dom.createPostForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleCreatePost();
        });

        // Contact Form
        this.dom.contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleContactSubmit();
        });

        // Newsletter Form
        this.dom.newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleNewsletterSubmit();
        });

        // Escape Key Closes Modals
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                this.closeReaderModal();
                this.closeCreateModal();
            }
        });
    }

    // -------------------------------------------------------------------------
    // 6. Filtering, Sorting & Rendering Logic
    // -------------------------------------------------------------------------
    resetAllFilters() {
        this.activeCategory = "all";
        this.searchQuery = "";
        this.activeSort = "latest";
        this.activeView = "all";
        this.dom.globalSearch.value = "";
        this.dom.clearSearchBtn.classList.add("hidden");
        this.dom.sortSelect.value = "latest";
        this.dom.viewAllBtn.classList.add("active");
        this.dom.viewSavedBtn.classList.remove("active");
        this.updateCategoryPillsUI();
        this.render();
    }

    updateCategoryPillsUI() {
        document.querySelectorAll(".cat-pill").forEach(pill => {
            const cat = pill.getAttribute("data-category");
            if (cat === this.activeCategory) {
                pill.classList.add("active");
            } else {
                pill.classList.remove("active");
            }
        });
    }

    updateCategoryCounts() {
        const counts = {
            all: this.posts.length,
            Technology: 0,
            "Web Development": 0,
            Travel: 0,
            "Lifestyle & Career": 0
        };

        this.posts.forEach(p => {
            if (counts[p.category] !== undefined) {
                counts[p.category]++;
            }
        });

        const countAll = document.getElementById("count-all");
        const countTech = document.getElementById("count-tech");
        const countWeb = document.getElementById("count-web");
        const countTravel = document.getElementById("count-travel");
        const countLifestyle = document.getElementById("count-lifestyle");

        if (countAll) countAll.textContent = counts.all;
        if (countTech) countTech.textContent = counts["Technology"] || 0;
        if (countWeb) countWeb.textContent = counts["Web Development"] || 0;
        if (countTravel) countTravel.textContent = counts["Travel"] || 0;
        if (countLifestyle) countLifestyle.textContent = counts["Lifestyle & Career"] || 0;

        // Bookmark counter badge
        const savedCount = this.bookmarkedPostIds.length;
        this.dom.savedCounter.textContent = savedCount;
        this.dom.bookmarkBadge.textContent = savedCount;
        this.dom.totalArticlesCount.textContent = `${this.posts.length}+`;
    }

    getFilteredAndSortedPosts() {
        let filtered = [...this.posts];

        // View filter (Saved vs All)
        if (this.activeView === "saved") {
            filtered = filtered.filter(p => this.bookmarkedPostIds.includes(p.id));
        }

        // Category filter
        if (this.activeCategory !== "all") {
            filtered = filtered.filter(p => p.category.toLowerCase() === this.activeCategory.toLowerCase());
        }

        // Search Query filter (matches title, excerpt, content, or author)
        if (this.searchQuery) {
            filtered = filtered.filter(p => {
                const inTitle = p.title.toLowerCase().includes(this.searchQuery);
                const inExcerpt = p.excerpt.toLowerCase().includes(this.searchQuery);
                const inContent = p.content.toLowerCase().includes(this.searchQuery);
                const inAuthor = p.author.toLowerCase().includes(this.searchQuery);
                const inCategory = p.category.toLowerCase().includes(this.searchQuery);
                return inTitle || inExcerpt || inContent || inAuthor || inCategory;
            });
        }

        // Sorting
        filtered.sort((a, b) => {
            if (this.activeSort === "latest") {
                return (b.id - a.id) || (new Date(b.date) - new Date(a.date));
            } else if (this.activeSort === "oldest") {
                return (a.id - b.id) || (new Date(a.date) - new Date(b.date));
            } else if (this.activeSort === "popular") {
                return (b.likes || 0) - (a.likes || 0);
            } else if (this.activeSort === "readtime") {
                const parseMin = (s) => parseInt(s) || 5;
                return parseMin(a.readTime) - parseMin(b.readTime);
            }
            return 0;
        });

        return filtered;
    }

    render() {
        this.updateCategoryCounts();
        this.renderFeaturedArticle();

        const filteredPosts = this.getFilteredAndSortedPosts();

        // Update Filter Status Bar
        const isFiltered = this.activeCategory !== "all" || this.searchQuery !== "" || this.activeView === "saved";
        if (isFiltered) {
            let label = `Showing ${filteredPosts.length} article${filteredPosts.length === 1 ? "" : "s"}`;
            if (this.activeCategory !== "all") label += ` in "${this.activeCategory}"`;
            if (this.searchQuery) label += ` matching "${this.searchQuery}"`;
            if (this.activeView === "saved") label += ` from Saved Bookmarks`;

            this.dom.filterStatusText.textContent = label;
            this.dom.filterStatusBar.classList.remove("hidden");
        } else {
            this.dom.filterStatusBar.classList.add("hidden");
        }

        // Check empty state
        if (filteredPosts.length === 0) {
            this.dom.blogGrid.innerHTML = "";
            this.dom.emptyState.classList.remove("hidden");
            return;
        }

        this.dom.emptyState.classList.add("hidden");
        this.dom.blogGrid.innerHTML = filteredPosts.map(post => this.createCardHTML(post)).join("");

        // Attach event listeners to card interactive elements
        this.attachCardEventListeners();
    }

    renderFeaturedArticle() {
        if (!this.dom.featuredCard) return;
        
        // Pick the post with the highest likes or the first post
        const featured = this.posts.reduce((prev, curr) => ((curr.likes || 0) > (prev.likes || 0) ? curr : prev), this.posts[0]);
        if (!featured) return;

        const isLiked = !!this.likedPostIds[featured.id];
        const isSaved = this.bookmarkedPostIds.includes(featured.id);
        const categoryClass = this.getCategoryBadgeClass(featured.category);

        this.dom.featuredCard.innerHTML = `
            <div class="featured-img-wrap" onclick="blogApp.openReaderModal('${featured.id}')" style="cursor: pointer;">
                <img src="${featured.image}" alt="${featured.title}" onerror="this.src='blog1.jpg'">
            </div>
            <div class="featured-content">
                <div class="featured-meta-row">
                    <span class="badge ${categoryClass}">${featured.category}</span>
                    <span class="read-time-pill">${featured.readTime}</span>
                </div>
                <h3 class="featured-title" onclick="blogApp.openReaderModal('${featured.id}')" style="cursor: pointer;">
                    ${featured.title}
                </h3>
                <p class="featured-excerpt">
                    ${featured.excerpt}
                </p>
                <div class="featured-footer">
                    <div class="author-chip">
                        <div class="author-avatar-sm">${featured.author ? featured.author[0].toUpperCase() : "S"}</div>
                        <div class="author-info-text">
                            <span class="name">${featured.author}</span>
                            <span class="date">${featured.date}</span>
                        </div>
                    </div>
                    <button class="btn btn-primary btn-sm" onclick="blogApp.openReaderModal('${featured.id}')">
                        Read Story →
                    </button>
                </div>
            </div>
        `;
    }

    createCardHTML(post) {
        const isLiked = !!this.likedPostIds[post.id];
        const isSaved = this.bookmarkedPostIds.includes(post.id);
        const categoryClass = this.getCategoryBadgeClass(post.category);

        return `
            <article class="blog-card" data-post-id="${post.id}">
                <div class="card-img-wrap" onclick="blogApp.openReaderModal('${post.id}')" style="cursor: pointer;">
                    <span class="card-floating-badge badge ${categoryClass}">${post.category}</span>
                    <span class="card-floating-readtime">${post.readTime}</span>
                    <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='blog1.jpg'">
                </div>

                <div class="card-body">
                    <div class="card-meta-top">
                        <span>${post.date}</span>
                        <span>By ${post.author}</span>
                    </div>

                    <h3 class="card-title" onclick="blogApp.openReaderModal('${post.id}')">
                        ${post.title}
                    </h3>

                    <p class="card-excerpt">
                        ${post.excerpt}
                    </p>

                    <div class="card-footer">
                        <div class="card-actions">
                            <button class="btn-card-action ${isLiked ? 'liked' : ''}" onclick="blogApp.toggleLike('${post.id}')" title="Like post">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                                <span>${post.likes || 0}</span>
                            </button>

                            <button class="btn-card-action ${isSaved ? 'saved' : ''}" onclick="blogApp.toggleBookmark('${post.id}')" title="Save post">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </button>
                        </div>

                        <button class="btn-text" onclick="blogApp.openReaderModal('${post.id}')">
                            Read More →
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    attachCardEventListeners() {
        // Event delegation can also be used, but inline handlers invoke blogApp directly
    }

    getCategoryBadgeClass(category) {
        switch (category) {
            case "Technology": return "badge-tech";
            case "Web Development": return "badge-web";
            case "Travel": return "badge-travel";
            case "Lifestyle & Career": return "badge-career";
            default: return "badge-tech";
        }
    }

    // -------------------------------------------------------------------------
    // 7. Full Article Reading Modal
    // -------------------------------------------------------------------------
    openReaderModal(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        this.activeModalPostId = postId;

        // Populate modal data
        this.dom.modalCoverImg.src = post.image;
        this.dom.modalCoverImg.onerror = () => { this.dom.modalCoverImg.src = 'blog1.jpg'; };
        this.dom.modalCategoryBadge.textContent = post.category;
        this.dom.modalCategoryBadge.className = `badge ${this.getCategoryBadgeClass(post.category)}`;
        this.dom.modalReadTime.textContent = post.readTime;
        this.dom.modalArticleTitle.textContent = post.title;
        this.dom.modalAuthorName.textContent = post.author;
        this.dom.modalAuthorAvatar.textContent = post.author ? post.author[0].toUpperCase() : "S";
        this.dom.modalPublishedDate.textContent = post.date;

        // Render parsed article body
        this.dom.modalArticleBody.innerHTML = this.parseMarkdownToHTML(post.content);

        // Update action buttons inside reader
        this.updateModalActionsUI(post);

        // Render Comments
        this.renderCommentsList(post);

        // Display modal
        this.dom.readerModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    closeReaderModal() {
        this.dom.readerModal.classList.add("hidden");
        document.body.style.overflow = "";
        this.activeModalPostId = null;
    }

    updateModalActionsUI(post) {
        const isLiked = !!this.likedPostIds[post.id];
        const isSaved = this.bookmarkedPostIds.includes(post.id);

        this.dom.modalLikeCount.textContent = post.likes || 0;
        this.dom.modalLikeBtn.classList.toggle("liked", isLiked);
        this.dom.modalBookmarkBtn.classList.toggle("saved", isSaved);
    }

    parseMarkdownToHTML(text) {
        if (!text) return "";

        const lines = text.trim().split("\n");
        let html = "";
        let inCodeBlock = false;
        let codeContent = "";
        let inList = false;

        lines.forEach(line => {
            const trimmed = line.trim();

            // Code blocks ```
            if (trimmed.startsWith("```")) {
                if (inCodeBlock) {
                    html += `<pre><code>${this.escapeHTML(codeContent.trim())}</code></pre>`;
                    codeContent = "";
                    inCodeBlock = false;
                } else {
                    inCodeBlock = true;
                }
                return;
            }

            if (inCodeBlock) {
                codeContent += line + "\n";
                return;
            }

            // Headings ###
            if (trimmed.startsWith("### ")) {
                if (inList) { html += "</ul>"; inList = false; }
                html += `<h3>${trimmed.replace("### ", "")}</h3>`;
                return;
            }

            // Blockquotes >
            if (trimmed.startsWith("> ")) {
                if (inList) { html += "</ul>"; inList = false; }
                html += `<blockquote>${trimmed.replace("> ", "")}</blockquote>`;
                return;
            }

            // Bullet Lists -
            if (trimmed.startsWith("- ")) {
                if (!inList) {
                    html += "<ul>";
                    inList = true;
                }
                const itemContent = trimmed.substring(2)
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.*?)\*/g, "<em>$1</em>");
                html += `<li>${itemContent}</li>`;
                return;
            }

            // Close list if line is not a list item
            if (inList && trimmed !== "") {
                html += "</ul>";
                inList = false;
            }

            // Regular paragraphs
            if (trimmed.length > 0) {
                const formatted = trimmed
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.*?)\*/g, "<em>$1</em>")
                    .replace(/`([^`]+)`/g, "<code>$1</code>");
                html += `<p>${formatted}</p>`;
            }
        });

        if (inList) html += "</ul>";
        return html;
    }

    escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }

    // -------------------------------------------------------------------------
    // 8. Comments System
    // -------------------------------------------------------------------------
    renderCommentsList(post) {
        const comments = post.comments || [];
        this.dom.modalCommentsCount.textContent = comments.length;

        if (comments.length === 0) {
            this.dom.modalCommentsList.innerHTML = `
                <p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 15px;">
                    No comments yet. Be the first to share your perspective!
                </p>
            `;
            return;
        }

        this.dom.modalCommentsList.innerHTML = comments.map(c => `
            <div class="comment-item">
                <div class="comment-header">
                    <div class="commenter-info">
                        <div class="commenter-avatar">${c.author ? c.author[0].toUpperCase() : "U"}</div>
                        <span class="commenter-name">${c.author}</span>
                    </div>
                    <span class="comment-date">${c.date}</span>
                </div>
                <p class="comment-body">${this.escapeHTML(c.text)}</p>
            </div>
        `).join("");
    }

    handleAddComment() {
        if (!this.activeModalPostId) return;

        const author = this.dom.commentAuthorInput.value.trim();
        const text = this.dom.commentTextInput.value.trim();

        if (!author || !text) {
            this.showToast("Please enter your name and comment", "⚠️");
            return;
        }

        const post = this.posts.find(p => p.id === this.activeModalPostId);
        if (!post) return;

        if (!post.comments) post.comments = [];
        post.comments.unshift({
            author: author,
            date: "Just now",
            text: text
        });

        this.savePosts();
        this.renderCommentsList(post);
        this.dom.commentTextInput.value = "";
        this.showToast("Comment posted successfully!", "💬");
    }

    // -------------------------------------------------------------------------
    // 9. Likes & Bookmarks Interactions
    // -------------------------------------------------------------------------
    toggleLike(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const isCurrentlyLiked = !!this.likedPostIds[postId];

        if (isCurrentlyLiked) {
            delete this.likedPostIds[postId];
            post.likes = Math.max(0, (post.likes || 1) - 1);
            this.showToast("Removed like", "🤍");
        } else {
            this.likedPostIds[postId] = true;
            post.likes = (post.likes || 0) + 1;
            this.showToast("Liked article!", "❤️");
        }

        this.saveLikes();
        this.savePosts();
        this.render();

        if (this.activeModalPostId === postId) {
            this.updateModalActionsUI(post);
        }
    }

    toggleBookmark(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const index = this.bookmarkedPostIds.indexOf(postId);
        if (index > -1) {
            this.bookmarkedPostIds.splice(index, 1);
            this.showToast("Removed from bookmarks", "🔖");
        } else {
            this.bookmarkedPostIds.push(postId);
            this.showToast("Article saved to bookmarks!", "⭐");
        }

        this.saveBookmarks();
        this.render();

        if (this.activeModalPostId === postId) {
            this.updateModalActionsUI(post);
        }
    }

    copyCurrentArticleLink() {
        const link = `${window.location.origin}${window.location.pathname}#article-${this.activeModalPostId}`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(link).then(() => {
                this.showToast("Article link copied to clipboard!", "📋");
            }).catch(() => {
                this.showToast("Link: " + link, "📋");
            });
        } else {
            this.showToast("Link copied!", "📋");
        }
    }

    // -------------------------------------------------------------------------
    // 10. Create New Blog Post Logic (CRUD)
    // -------------------------------------------------------------------------
    openCreateModal() {
        this.dom.createModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
        this.dom.postTitleInput.focus();
    }

    closeCreateModal() {
        this.dom.createModal.classList.add("hidden");
        document.body.style.overflow = "";
    }

    handleCreatePost() {
        const title = this.dom.postTitleInput.value.trim();
        const author = this.dom.postAuthorInput.value.trim() || "Sumathi";
        const category = this.dom.postCategorySelect.value;
        const excerpt = this.dom.postExcerptInput.value.trim();
        const content = this.dom.postContentInput.value.trim();

        if (!title || !excerpt || !content) {
            this.showToast("Please fill in all required fields", "⚠️");
            return;
        }

        // Determine Image Source
        const sourceType = document.querySelector('input[name="image-source-type"]:checked').value;
        let imageUrl = "blog1.jpg";

        if (sourceType === "preset") {
            const selectedPreset = document.querySelector('input[name="preset-img"]:checked');
            if (selectedPreset) imageUrl = selectedPreset.value;
        } else if (sourceType === "url") {
            const urlVal = this.dom.postImageUrl.value.trim();
            if (urlVal) imageUrl = urlVal;
        } else if (sourceType === "file") {
            const fileInput = this.dom.postImageFile;
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.finalizeCreatePost(title, author, category, excerpt, content, e.target.result);
                };
                reader.readAsDataURL(fileInput.files[0]);
                return;
            }
        }

        this.finalizeCreatePost(title, author, category, excerpt, content, imageUrl);
    }

    finalizeCreatePost(title, author, category, excerpt, content, imageUrl) {
        // Estimate read time based on word count
        const wordCount = content.split(/\s+/).length;
        const readMinutes = Math.max(1, Math.ceil(wordCount / 180));
        const readTime = `${readMinutes} min read`;

        const newPost = {
            id: String(Date.now()),
            title: title,
            category: category,
            image: imageUrl,
            readTime: readTime,
            author: author,
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            likes: 0,
            excerpt: excerpt,
            content: content,
            comments: []
        };

        this.posts.unshift(newPost);
        this.savePosts();

        // Reset form & close modal
        this.dom.createPostForm.reset();
        this.closeCreateModal();

        // Show toast notification
        this.showToast("Article published successfully! 🎉", "🚀");

        // Rerender and scroll to articles
        this.render();
        document.getElementById("articles").scrollIntoView({ behavior: "smooth" });
    }

    // -------------------------------------------------------------------------
    // 11. Contact & Newsletter Handlers
    // -------------------------------------------------------------------------
    handleContactSubmit() {
        const name = this.dom.contactName.value.trim();
        const email = this.dom.contactEmail.value.trim();
        const subject = this.dom.contactSubject.value;
        const message = this.dom.contactMessage.value.trim();

        if (!name || !email || !message) {
            this.showToast("Please fill in all contact fields", "⚠️");
            return;
        }

        const submitBtn = document.getElementById("contact-submit-btn");
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Sending Message...</span>`;
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            this.dom.contactForm.reset();
            this.showToast(`Thank you, ${name}! Your message has been received.`, "✉️", 5000);
        }, 700);
    }

    handleNewsletterSubmit() {
        const email = this.dom.newsletterEmail.value.trim();
        if (!email) return;

        this.dom.newsletterForm.reset();
        this.showToast("Welcome! You're subscribed to DevSphere updates.", "📬", 4000);
    }

    // -------------------------------------------------------------------------
    // 12. Toast Notification Component
    // -------------------------------------------------------------------------
    showToast(message, icon = "✨", duration = 3500) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-content">${message}</span>
        `;

        this.dom.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("removing");
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 300);
        }, duration);
    }
}

// -----------------------------------------------------------------------------
// Initialize App on DOM Load
// -----------------------------------------------------------------------------
let blogApp;
document.addEventListener("DOMContentLoaded", () => {
    blogApp = new BlogApp();
});
