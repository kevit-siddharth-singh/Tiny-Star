// ===== CHATBOT LOGIC =====
const chatPanel = document.getElementById('chatPanel');
const chatMessages = document.getElementById('chatMessages');
const chatBadge = document.getElementById('chatBadge');
const chatInput = document.getElementById('chatInput');
const fabIcon = document.getElementById('fabIcon');
let chatOpen = false;
let badgeCount = 1;

const chatReplies = {
  'Tell me about programs': "We have two year-round programs:\n\n📝 **After-School Class** — 8 structured lessons where children go from idea to a professionally published book.\n\n📖 **Create A Book Workshop** — A 120-minute hands-on intro session, perfect to try first! Would you like to register for one?",
  'Summer camp info': "Our **Young Author Lab Summer Camp** is a fun, immersive 5-day experience! ☀️\n\nChildren write, illustrate, and publish their very own book. It runs at all 4 locations: Weston, Wellesley, Wayland & Belmont.\n\nSpots fill up quickly — want me to take you to the registration page?",
  'How do I register?': "Great question! Here's how to register:\n\n1. Choose your program (camp, after-school, or workshop)\n2. Select your location\n3. Pick your session dates\n\nShall I take you to the registration page now?",
  'Publishing service': "Our publishing service helps children and families turn their stories into **real, globally distributed books on Amazon** 🌍\n\nIt's a 7-step guided process — we handle design, formatting, and global publishing. You keep full ownership! Want to learn more?",
};

function addMessage(text, isBot) {
  const msg = document.createElement('div');
  msg.className = `chatmsg chatmsg--${isBot ? 'bot' : 'user'}`;
  const html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  msg.innerHTML = isBot
    ? `<div class="chatmsg__avatar"><img src="assets/brand/tinystar-logo.png" alt="Tiny Star" style="width:24px;height:24px;object-fit:contain;display:block;"></div><div class="chatmsg__bubble">${html}</div>`
    : `<div class="chatmsg__bubble">${html}</div>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'chatmsg chatmsg--bot';
  typing.id = 'typingIndicator';
  typing.innerHTML = `<div class="chatmsg__avatar"><img src="assets/brand/tinystar-logo.png" alt="Tiny Star" style="width:24px;height:24px;object-fit:contain;display:block;"></div><div class="chat-typing"><span></span><span></span><span></span></div>`;
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  const t = document.getElementById('typingIndicator');
  if (t) t.remove();
}

function chatQuick(q) {
  addMessage(q, false);
  document.getElementById('quickReplies').style.display = 'none';
  showTyping();
  setTimeout(() => {
    hideTyping();
    const reply = chatReplies[q] || "Thanks for asking! A Tiny Star team member will follow up with you. In the meantime, feel free to browse our programs or register at thetinystar.com!";
    addMessage(reply, true);
  }, 1200);
}

function sendChat() {
  const val = chatInput.value.trim();
  if (!val) return;
  addMessage(val, false);
  chatInput.value = '';
  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage("Thanks for your message! Our team will get back to you shortly. You can also reach us at hello@thetinystar.com or visit thetinystar.com to register directly.", true);
  }, 1400);
}

const FAB_LOGO = '<img src="assets/brand/tinystar-logo.png" alt="Tiny Star">';
const FAB_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
const chatFab = document.getElementById('chatFab');

function toggleChat() {
  chatOpen = !chatOpen;
  chatPanel.classList.toggle('open', chatOpen);
  fabIcon.innerHTML = chatOpen ? FAB_CLOSE : FAB_LOGO;
  chatFab.style.background = chatOpen ? '#0E1650' : 'transparent';
  if (chatOpen) { chatBadge.style.display = 'none'; badgeCount = 0; }
}

document.getElementById('chatClose').addEventListener('click', () => {
  chatOpen = false;
  chatPanel.classList.remove('open');
  fabIcon.innerHTML = FAB_LOGO;
  chatFab.style.background = 'transparent';
});


  // ===== (continued) =====

// ===== GSAP REGISTRATION =====
if (typeof gsap !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }

// ===== STARS GENERATION =====
(function() {
  const c = document.getElementById('heroStars');
  if (!c) return;
  for (let i = 0; i < 100; i++) {
    const s = document.createElement('div');
    s.className = 'hero__star';
    const sz = Math.random() * 2.5 + 0.5;
    const x = Math.random() * 100, y = Math.random() * 100;
    const dur = (Math.random() * 4 + 2).toFixed(1);
    const delay = (Math.random() * 5).toFixed(1);
    const opMin = (Math.random() * 0.15 + 0.05).toFixed(2);
    const opMax = (Math.random() * 0.5 + 0.4).toFixed(2);
    s.style.cssText = `width:${sz}px;height:${sz}px;left:${x}%;top:${y}%;--dur:${dur}s;--delay:${delay}s;--opacity-min:${opMin};--opacity-max:${opMax};opacity:${opMin};`;
    c.appendChild(s);
  }
})();

// ===== SCROLL PROGRESS =====
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  if (progressBar) progressBar.style.width = pct + '%';
}, { passive: true });

// ===== CUSTOM CURSOR =====
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
if (dot) dot.style.opacity = '0';
if (ring) ring.style.opacity = '0';

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (dot) { dot.style.opacity = '1'; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
  if (ring) ring.style.opacity = '1';
});

document.querySelectorAll('a, button, .btn, .camp-card, .program-card, .book-card, .partner-tile').forEach(el => {
  el.addEventListener('mouseenter', () => ring && ring.classList.add('hovering'));
  el.addEventListener('mouseleave', () => ring && ring.classList.remove('hovering'));
});

(function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
  requestAnimationFrame(animateRing);
})();

// ===== NAV SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== MOBILE NAV =====
document.getElementById('hamburger').addEventListener('click', () => document.getElementById('mobileNav').classList.add('open'));
document.getElementById('mobileClose').addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open'));
function closeMobile() { document.getElementById('mobileNav').classList.remove('open'); }

// ===== AURORA PARALLAX =====
const auroraOrbs = document.querySelectorAll('.aurora__orb');
window.addEventListener('scroll', () => {
  const hero = document.getElementById('home');
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
  auroraOrbs.forEach((orb, i) => {
    const speed = 0.12 + i * 0.07;
    orb.style.transform = `translateY(${progress * speed * 150}px)`;
  });
}, { passive: true });

// ===== SCROLL REVEAL + COUNTERS (IntersectionObserver — primary) =====
// Per spec, IO is the PRIMARY mechanism so content still reveals when GSAP
// is blocked. Content is visible by default in CSS; the .js flag (added by
// an inline head script) hides it only until .visible is added here.
const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

(function setupRevealAndCounters() {
  try {
    if (REDUCE_MOTION) {
      // Respect reduced-motion: show everything at once, skip counting.
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    // Count-up stat numbers (0 -> target, ease-out cubic, ~2.2s).
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.getAttribute('data-count'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const DURATION = 2200;
        const start = performance.now();
        const tick = now => {
          const p = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(tick);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));
  } catch (err) {
    // Guarantee: a failure can NEVER leave content hidden.
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }
})();

// ===== GSAP ENHANCEMENTS (opt-in — never blocks the page) =====
// Only the hero entrance and the journey connector draw-in. These target
// elements that are NOT .reveal, so they cannot conflict with the
// IntersectionObserver reveal above. Fully wrapped so any error is harmless.
if (!REDUCE_MOTION && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  try {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance timeline
    gsap.timeline({ delay: 0.15 })
      .from('.hero__badge',    { opacity: 0, y: 24, duration: 0.65, ease: 'power3.out' })
      .from('.hero__headline', { opacity: 0, y: 48, duration: 0.85, ease: 'power3.out' }, '-=0.4')
      .from('.hero__sub',      { opacity: 0, y: 30, duration: 0.75, ease: 'power3.out' }, '-=0.5')
      .from('.hero__ctas',     { opacity: 0, y: 20, duration: 0.65, ease: 'power3.out' }, '-=0.45')
      .from('.hero__cta-hint', { opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero__locations',{ opacity: 0, y: 10, duration: 0.5 }, '-=0.3')
      .from('.hero__book', {
        opacity: 0, scale: 0.65, y: 40, duration: 0.75,
        stagger: 0.15, ease: 'back.out(1.7)',
        clearProps: 'transform' /* hand control back to the CSS float animation */
      }, '-=0.6');

    // Journey connector draw-in (connectors are not .reveal elements)
    gsap.from('.journey__connector', {
      scrollTrigger: { trigger: '.journey__path', start: 'top 82%', once: true },
      scaleX: 0, transformOrigin: 'left', duration: 1.4,
      stagger: 0.1, ease: 'power2.inOut', delay: 0.3
    });
  } catch (err) {
    if (window.console) console.warn('GSAP enhancement skipped:', err);
  }
}

// ===== CARD 3D TILT =====
document.querySelectorAll('.tilt-card, .program-card, .camp-card, .testi-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    card.style.transform = `perspective(900px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg) translateY(-6px) scale(1.02)`;
    card.style.transition = 'transform 0.1s ease';
    const shine = card.querySelector('.tilt-shine');
    if (shine) {
      const px = ((e.clientX - r.left) / r.width) * 100;
      const py = ((e.clientY - r.top) / r.height) * 100;
      shine.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.15), transparent 60%)`;
      shine.style.opacity = '1';
    }
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
    const shine = card.querySelector('.tilt-shine');
    if (shine) shine.style.opacity = '0';
  });
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.magnetic-wrap').forEach(wrap => {
  const btn = wrap.querySelector('.btn');
  if (!btn) return;
  wrap.addEventListener('mousemove', e => {
    const r = wrap.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) * 0.28;
    const dy = (e.clientY - r.top - r.height / 2) * 0.28;
    btn.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  wrap.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// ===== HIGHLIGHT UNDERLINE =====
const hlObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.5 });
document.querySelectorAll('.highlight-underline').forEach(el => hlObs.observe(el));

// ===== SUBSCRIBE FORM =====
function handleSubscribe(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✅ You are in! Welcome to Tiny Star!';
  btn.style.background = '#16A34A';
  btn.disabled = true;
  e.target.querySelectorAll('input').forEach(i => i.disabled = true);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

// ===== CHATBOT NUDGE =====
setTimeout(() => {
  const badge = document.getElementById('chatBadge');
  if (badge && !chatOpen) { badge.textContent = '?'; badge.style.background = '#FF4F3B'; }
}, 9000);

