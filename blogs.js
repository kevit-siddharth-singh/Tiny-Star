// ===== BLOG DATA =====
const blogPosts = [
  {
    id: 1,
    category: "young-authors",
    title: "5 Secret Writing Tricks Used by Our Young Authors",
    excerpt:
      "Learn how Kiaan and Aanya wrote their bestselling books. Simple tricks you can use today!",
    content:
      "Discover the writing techniques that helped our young authors create bestselling stories. From creating memorable characters to building exciting plots...",
    author: "Joy Meng",
    date: "2 min read",
    image: "assets/Gallery/blog-teddy-success.png",
    icon: "✏️",
    gradient: "linear-gradient(135deg, var(--gold), var(--orange))",
  },
  {
    id: 2,
    category: "young-authors",
    title: "How Emma's Dream Book Got Published",
    excerpt:
      "From idea to Amazon bestseller in just 8 weeks. Emma's incredible journey!",
    content:
      "Emma came to us with just an idea and a dream. Eight weeks later, her book was published and available worldwide...",
    author: "Emma Lu",
    date: "4 min read",
    image: "assets/Gallery/blog-author-emma.png",
    icon: "📚",
    gradient: "linear-gradient(135deg, var(--lavender), var(--purple))",
  },
  {
    id: 3,
    category: "news",
    title: "A Day in the Life of Our Young Authors",
    excerpt:
      "See what happens during our After-School Program. Photos & fun moments included!",
    content:
      "Ever wondered what happens behind the scenes? Follow us through a typical day at Tiny Star...",
    author: "Tiny Star Team",
    date: "3 min read",
    image: "assets/Gallery/blog-behind-scenes.png",
    icon: "🎬",
    gradient: "linear-gradient(135deg, var(--mint), var(--teal))",
  },
  {
    id: 4,
    category: "parents",
    title: "Where Do Story Ideas Come From?",
    excerpt:
      "Discover creative writing exercises that spark amazing story ideas for your book!",
    content:
      "Brainstorming is essential for every writer. Here are some creative exercises that work...",
    author: "Alex Han",
    date: "5 min read",
    image: "assets/Gallery/blog-inspiration.png",
    icon: "💡",
    gradient: "linear-gradient(135deg, var(--coral), var(--coral-light))",
  },
  {
    id: 5,
    category: "young-authors",
    title: "How to Draw Amazing Pictures for Your Book",
    excerpt:
      "Simple drawing techniques that make your book illustrations stand out beautifully!",
    content:
      "Illustrations bring your story to life. Learn these simple techniques to enhance your book...",
    author: "Lucas Zhang",
    date: "3 min read",
    image: "assets/Gallery/blog-drawing-tips.png",
    icon: "🎨",
    gradient: "linear-gradient(135deg, var(--blue-light), var(--blue))",
  },
  {
    id: 6,
    category: "young-authors",
    title: "From Shy to Star: Teddy's Publishing Journey",
    excerpt:
      "How Teddy overcame his fears and became a published author. You can too!",
    content:
      "Teddy was nervous about sharing his story. Now it's inspiring thousands of readers worldwide...",
    author: "Teddy Lo",
    date: "4 min read",
    image: "assets/Gallery/blog-teddy-success.png",
    icon: "🏆",
    gradient: "linear-gradient(135deg, var(--gold-light), var(--gold))",
  },
  {
    id: 7,
    category: "young-authors",
    title: "Character Development 101",
    excerpt:
      "Create characters your readers will never forget using these proven techniques.",
    content:
      "Strong characters are the heart of any great story. Learn how to develop them properly...",
    author: "Aanya Galappatty",
    date: "3 min read",
    image: "assets/Gallery/blog-character-dev.png",
    icon: "👤",
    gradient: "linear-gradient(135deg, var(--coral), var(--orange))",
  },
  {
    id: 8,
    category: "young-authors",
    title: "From Idea to Published: Lisa's Success Story",
    excerpt:
      "Lisa turned her love for animals into a bestselling children's book.",
    content:
      "What started as a simple idea became a book that children everywhere love reading...",
    author: "Lisa Guo",
    date: "4 min read",
    image: "assets/Gallery/blog-writing-tips.png",
    icon: "🌟",
    gradient: "linear-gradient(135deg, var(--purple), var(--blue))",
  },
  {
    id: 9,
    category: "parents",
    title: "Overcoming Writer's Block: Simple Strategies",
    excerpt: "Get unstuck with these creative techniques that actually work!",
    content:
      "Every writer faces writer's block. Here's how to break through and keep writing...",
    author: "Adora Dai",
    date: "2 min read",
    image: "assets/Gallery/blog-inspiration.png",
    icon: "🔓",
    gradient: "linear-gradient(135deg, var(--gold), var(--gold-light))",
  },
  {
    id: 10,
    category: "news",
    title: "Publishing Process Explained Simply",
    excerpt:
      "Walk through the journey from manuscript to published book step by step.",
    content:
      "Curious about what happens after you finish writing? Let's walk through the publishing process...",
    author: "Joy Meng",
    date: "5 min read",
    image: "assets/Gallery/blog-behind-scenes.png",
    icon: "📖",
    gradient: "linear-gradient(135deg, var(--mint), var(--lavender))",
  },
  {
    id: 11,
    category: "young-authors",
    title: "Awards and Recognition: Celebrating Our Authors",
    excerpt:
      "Meet the young authors who've won prestigious writing competitions!",
    content:
      "Our authors have been recognized at national and international writing competitions...",
    author: "Tiny Star Team",
    date: "3 min read",
    image: "assets/Gallery/blog-teddy-success.png",
    icon: "🎖️",
    gradient: "linear-gradient(135deg, var(--gold-light), var(--orange))",
  },
  {
    id: 12,
    category: "young-authors",
    title: "Dialogue Writing: Making Characters Talk Realistically",
    excerpt:
      "Tips for writing natural-sounding conversations that bring your story alive.",
    content:
      "Great dialogue can make your story sparkle. Learn how to write conversations that feel real...",
    author: "Arjo Chakravarty",
    date: "4 min read",
    image: "assets/Gallery/blog-character-dev.png",
    icon: "💬",
    gradient: "linear-gradient(135deg, var(--blue), var(--teal))",
  },
];

// ===== RENDER BLOG POSTS =====
function renderBlogs(filter = 'all') {
  const grid = document.getElementById('blogsGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  // Render featured post (disabled)
  // renderFeaturedPost(filter);

  filtered.forEach((post, idx) => {
    const card = document.createElement('a');
    card.href = '#';
    card.className = 'blog-card';

    const categoryLabels = {
      'young-authors': 'Young Author Stories',
      'parents': 'For Parents and Partners',
      'news': 'Tiny Star News'
    };
    const categoryLabel = categoryLabels[post.category] || post.category;

    card.innerHTML = `
      <div class="blog-card__image">
        <img src="${post.image}" alt="${post.title}" class="blog-card__img">
      </div>
      <div class="blog-card__content">
        <span class="blog-card__category" style="background: ${post.gradient}; color: white;">${categoryLabel}</span>
        <h3 class="blog-card__title">${post.title}</h3>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <div class="blog-card__meta">
          <span class="blog-card__date">${post.date}</span>
          <span class="blog-card__author">by ${post.author}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', (e) => {
      e.preventDefault();
      showBlogModal(post.id);
    });

    grid.appendChild(card);
  });
}

// ===== BLOG MODAL =====
function showBlogModal(postId) {
  const post = blogPosts.find(p => p.id === postId) || blogPosts.find(p => p.id == postId);
  if (!post) return;

  const categoryLabels = {
    'young-authors': 'Young Author Stories',
    'parents': 'For Parents and Partners',
    'news': 'Tiny Star News'
  };
  const categoryLabel = categoryLabels[post.category] || post.category;

  const modal = document.createElement('div');
  modal.className = 'blog-modal';
  modal.innerHTML = `
    <div class="blog-modal__overlay" onclick="this.parentElement.remove()"></div>
    <div class="blog-modal__content">
      <button class="blog-modal__close" onclick="this.parentElement.parentElement.remove()">✕</button>
      <div class="blog-modal__header">
        <img src="${post.image}" alt="${post.title}" class="blog-modal__img">
      </div>
      <div class="blog-modal__body">
        <span class="blog-card__category" style="background: ${post.gradient}; color: white; display: inline-block;">${categoryLabel}</span>
        <h2>${post.title}</h2>
        <div class="blog-modal__meta">
          <span>by ${post.author}</span>
          <span>${post.date}</span>
        </div>
        <p>${post.excerpt}</p>
        <div class="blog-modal__excerpt-section">
          <h3>💡 Read More</h3>
          <p>${post.content}</p>
          <p style="margin-top: 20px; color: var(--gold); font-weight: 600;">This is a sample article. The full version is coming soon!</p>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  setTimeout(() => modal.classList.add('active'), 10);

  // Close on escape key
  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', closeOnEscape);
    }
  };
  document.addEventListener('keydown', closeOnEscape);
}

// ===== GET URL PARAMS =====
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    category: params.get('category') || 'all',
    postId: params.get('post') ? parseInt(params.get('post'), 10) : null,
  };
}

// ===== INIT BLOGS PAGE =====
function initBlogsPage() {
  const grid = document.getElementById('blogsGrid');
  if (!grid) return;

  const { category, postId } = getUrlParams();

  // Always render all posts so the grid is populated before any modal opens
  renderBlogs('all');

  // Apply category filter if one was passed and it's a valid key
  const validFilters = ['young-authors', 'parents', 'news'];
  if (validFilters.includes(category)) {
    const btn = document.querySelector(`[data-filter="${category}"]`);
    if (btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      renderBlogs(category);
    }
  }

  // If a specific post ID was requested, open its modal once the page has painted
  if (postId) {
    setTimeout(() => showBlogModal(postId), 120);
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      const filter = btn.getAttribute('data-filter');
      renderBlogs(filter);
    });
  });
}

// Try to init immediately for deferred scripts, fallback to DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlogsPage);
} else {
  initBlogsPage();
}
