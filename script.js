/* ══════════════════════════════════════════
   INJO'S BIRTHDAY — JavaScript
   Confetti · Gallery · Carousel · Lightbox
   Scroll Reveal · Nav Dots · Music
════════════════════════════════════════════ */

// ── ALL PHOTOS (154 images) ──────────────────────────────────
const ALL_PHOTOS = [
  "photo_2025-07-07_08-53-52.jpg",
  "photo_2025-07-07_08-53-53 (2).jpg",
  "photo_2025-07-07_08-53-53.jpg",
  "photo_2025-07-07_08-53-54.jpg",
  "photo_2025-07-07_08-53-56.jpg",
  "photo_2025-07-07_08-53-57 (2).jpg",
  "photo_2025-07-07_08-53-57.jpg",
  "photo_2025-07-07_08-53-58.jpg",
  "photo_2025-07-07_08-53-59.jpg",
  "photo_2025-07-07_08-54-00.jpg",
  "photo_2025-07-07_08-54-01.jpg",
  "photo_2025-07-07_08-54-02.jpg",
  "photo_2025-07-07_08-54-03.jpg",
  "photo_2025-07-07_08-54-04.jpg",
  "photo_2025-07-07_08-54-05.jpg",
  "photo_2025-07-07_08-54-06.jpg",
  "photo_2025-07-07_08-54-07 (2).jpg",
  "photo_2025-07-07_08-54-07.jpg",
  "photo_2025-07-07_08-54-08.jpg",
  "photo_2025-07-07_08-54-09 (2).jpg",
  "photo_2025-07-07_08-54-09.jpg",
  "photo_2025-07-07_08-54-11 (2).jpg",
  "photo_2025-07-07_08-54-11.jpg",
  "photo_2025-07-07_08-54-12.jpg",
  "photo_2025-07-07_08-54-13.jpg",
  "photo_2025-07-07_08-54-14.jpg",
  "photo_2025-07-07_08-54-15.jpg",
  "photo_2025-07-07_08-54-16 (2).jpg",
  "photo_2025-07-07_08-54-16.jpg",
  "photo_2025-07-07_08-54-17.jpg",
  "photo_2025-07-07_08-54-18.jpg",
  "photo_2025-07-07_08-54-20.jpg",
  "photo_2025-07-07_08-54-22.jpg",
  "photo_2025-07-07_08-54-24.jpg",
  "photo_2025-07-07_08-54-25.jpg",
  "photo_2025-07-07_08-54-26.jpg",
  "photo_2025-07-07_08-54-28.jpg",
  "photo_2025-07-07_08-54-29.jpg",
  "photo_2025-07-07_08-54-30.jpg",
  "photo_2025-07-07_08-54-31.jpg",
  "photo_2025-07-07_08-54-32.jpg",
  "photo_2025-07-07_08-54-33.jpg",
  "photo_2025-07-07_08-54-34.jpg",
  "photo_2025-07-07_08-54-35 (2).jpg",
  "photo_2025-07-07_08-54-35.jpg",
  "photo_2025-07-07_08-54-36.jpg",
  "photo_2025-07-07_08-54-37.jpg",
  "photo_2025-07-07_08-54-38.jpg",
  "photo_2025-07-07_08-54-39.jpg",
  "photo_2025-07-07_08-54-40.jpg",
  "photo_2025-07-07_08-54-42.jpg",
  "photo_2025-07-07_08-54-43.jpg",
  "photo_2025-07-07_08-54-44.jpg",
  "photo_2025-07-07_08-54-45 (2).jpg",
  "photo_2025-07-07_08-54-45.jpg",
  "photo_2025-07-07_08-54-46.jpg",
  "photo_2025-07-07_08-54-47 (2).jpg",
  "photo_2025-07-07_08-54-47.jpg",
  "photo_2025-07-07_08-54-48 (2).jpg",
  "photo_2025-07-07_08-54-48 (3).jpg",
  "photo_2025-07-07_08-54-48.jpg",
  "photo_2025-07-07_08-54-49 (2).jpg",
  "photo_2025-07-07_08-54-49.jpg",
  "photo_2025-07-07_08-54-50.jpg",
  "photo_2025-07-07_08-54-51.jpg",
  "photo_2025-07-07_08-54-52.jpg",
  "photo_2025-07-07_08-54-53.jpg",
  "photo_2025-07-07_08-54-54.jpg",
  "photo_2025-07-07_08-54-55.jpg",
  "photo_2025-07-07_08-54-57.jpg",
  "photo_2025-07-07_08-55-06.jpg",
  "photo_2025-07-07_08-55-07.jpg",
  "photo_2025-07-07_08-55-08 (2).jpg",
  "photo_2025-07-07_08-55-08.jpg",
  "photo_2025-07-07_08-55-09.jpg",
  "photo_2025-07-07_08-55-10 (2).jpg",
  "photo_2025-07-07_08-55-10.jpg",
  "photo_2025-07-07_08-55-11 (2).jpg",
  "photo_2025-07-07_08-55-11.jpg",
  "photo_2025-07-07_08-55-12.jpg",
  "photo_2025-07-07_08-55-13.jpg",
  "photo_2025-07-07_08-55-14.jpg",
  "photo_2025-07-07_08-55-15.jpg",
  "photo_2025-07-07_08-55-16 (2).jpg",
  "photo_2025-07-07_08-55-16.jpg",
  "photo_2025-07-07_08-55-17.jpg",
  "photo_2025-07-07_08-55-18.jpg",
  "photo_2025-07-07_08-55-19.jpg",
  "photo_2025-07-07_08-55-20.jpg",
  "photo_2025-07-07_08-55-21.jpg",
  "photo_2025-07-07_08-55-22.jpg",
  "photo_2025-07-07_08-55-23.jpg",
  "photo_2025-07-07_08-55-25.jpg",
  "photo_2025-07-07_08-55-39.jpg",
  "photo_2025-07-07_09-12-41.jpg",
  "photo_2025-07-07_09-12-43.jpg",
  "photo_2025-07-07_09-12-44.jpg",
  "photo_2025-07-07_09-12-51.jpg",
  "photo_2025-07-07_09-12-52.jpg",
  "photo_2025-07-07_09-12-53 (2).jpg",
  "photo_2025-07-07_09-12-53.jpg",
  "photo_2025-07-07_09-12-54.jpg",
  "photo_2025-07-07_09-12-55.jpg",
  "photo_2025-07-07_09-13-05.jpg",
  "photo_2025-07-07_09-13-06.jpg",
  "photo_2025-07-07_09-13-15.jpg",
  "photo_2025-07-07_09-13-16.jpg",
  "photo_2025-07-07_09-13-17 (2).jpg",
  "photo_2025-07-07_09-13-17.jpg",
  "photo_2025-07-07_09-13-36.jpg",
  "photo_2025-07-07_09-13-37.jpg",
  "photo_2025-07-07_09-14-00.jpg",
  "photo_2025-07-07_09-14-02.jpg",
  "photo_2025-07-07_09-15-40.jpg",
  "photo_2025-07-07_09-15-59 (2).jpg",
  "photo_2025-07-07_09-15-59.jpg",
  "photo_2025-07-07_09-16-00.jpg",
  "photo_2025-07-07_09-16-01.jpg",
  "photo_2025-07-07_09-16-05 (2).jpg",
  "photo_2025-07-07_09-16-05.jpg",
  "photo_2025-07-07_09-16-06.jpg",
  "photo_2025-07-07_09-16-07.jpg",
  "photo_2025-07-07_09-16-08.jpg",
  "photo_2025-07-07_09-16-09.jpg",
  "photo_2025-07-07_09-16-10.jpg",
  "photo_2025-07-07_09-16-11.jpg",
  "photo_2025-07-07_09-16-12.jpg",
  "photo_2025-07-07_09-16-13 (2).jpg",
  "photo_2025-07-07_09-16-13.jpg",
  "photo_2025-07-07_09-16-14.jpg",
  "photo_2025-07-07_09-16-15.jpg",
  "photo_2025-07-07_09-16-16 (2).jpg",
  "photo_2025-07-07_09-16-16.jpg",
  "photo_2025-07-07_09-16-17.jpg",
  "photo_2025-07-07_09-16-18 (2).jpg",
  "photo_2025-07-07_09-16-18.jpg",
  "photo_2025-07-07_09-16-19.jpg",
  "photo_2025-07-07_09-16-20 (2).jpg",
  "photo_2025-07-07_09-16-20.jpg",
  "photo_2025-07-07_09-16-21.jpg",
  "photo_2025-07-07_09-16-38.jpg",
  "photo_2025-07-07_09-16-39 (2).jpg",
  "photo_2025-07-07_09-16-39.jpg",
  "photo_2025-07-07_09-16-41 (2).jpg",
  "photo_2025-07-07_09-16-41.jpg",
  "photo_2025-07-07_09-16-42.jpg",
  "photo_2025-07-07_09-16-43 (2).jpg",
  "photo_2025-07-07_09-16-43.jpg",
  "photo_2025-07-07_09-16-44 (2).jpg",
  "photo_2025-07-07_09-16-44.jpg",
  "photo_2025-07-07_09-16-45 (2).jpg",
  "photo_2025-07-07_09-16-45.jpg",
  "photo_2025-07-07_09-16-46 (2).jpg",
  "photo_2025-07-07_09-16-46.jpg",
];

// Lightweight "category" by index grouping for filter buttons
const CATEGORY_MAP = {
  outdoor: [30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,70,71,72,73,74,75,80,81,82,83,84,85,86,87],
  indoor:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],
  closeup: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69],
};

// ── GALLERY STATE ────────────────────────────────────────────
let galleryPage  = 0;
const PAGE_SIZE  = 24;
let currentFilter = 'all';
let filteredPhotos = [...ALL_PHOTOS];
let lightboxIndex = 0;
let visiblePhotos  = [];

// ── SQUAD CAROUSEL STATE ─────────────────────────────────────
let squadIndex = 0;

// ════════════════════════════════════════════════════════════
//   CONFETTI
// ════════════════════════════════════════════════════════════
const canvas  = document.getElementById('confetti-canvas');
const ctx     = canvas.getContext('2d');
let pieces    = [];
let confettiActive = true;

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const COLORS = ['#FFD700','#FFA500','#FF6B35','#FFF','#FF8C00','#FFEC8B','#FF4500','#FFD700'];

function createPiece() {
  return {
    x: Math.random() * canvas.width,
    y: -10,
    size: Math.random() * 8 + 4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    speedX: (Math.random() - 0.5) * 2,
    speedY: Math.random() * 2.5 + 1,
    opacity: Math.random() * 0.6 + 0.4,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 4,
    shape: Math.floor(Math.random() * 3), // 0=rect 1=circle 2=triangle
  };
}

function drawPiece(p) {
  ctx.save();
  ctx.globalAlpha = p.opacity;
  ctx.fillStyle   = p.color;
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation * Math.PI / 180);
  if (p.shape === 0) {
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
  } else if (p.shape === 1) {
    ctx.beginPath();
    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(0, -p.size / 2);
    ctx.lineTo(p.size / 2, p.size / 2);
    ctx.lineTo(-p.size / 2, p.size / 2);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function animateConfetti() {
  if (!confettiActive) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Spawn new pieces
  if (pieces.length < 120 && Math.random() < 0.4) pieces.push(createPiece());
  pieces = pieces.filter(p => p.y < canvas.height + 20 && p.opacity > 0.05);
  pieces.forEach(p => {
    p.x        += p.speedX;
    p.y        += p.speedY;
    p.rotation += p.rotationSpeed;
    p.opacity  -= 0.002;
    drawPiece(p);
  });
  requestAnimationFrame(animateConfetti);
}
animateConfetti();

// Slow down confetti after 8 seconds
setTimeout(() => { confettiActive = false; }, 8000);

// ════════════════════════════════════════════════════════════
//   GALLERY
// ════════════════════════════════════════════════════════════
function buildGallery(photos) {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  visiblePhotos = photos.slice(0, PAGE_SIZE);
  galleryPage = 0;
  renderGalleryItems(visiblePhotos, false);
  updateLoadMoreBtn(photos.length, PAGE_SIZE);
}

function renderGalleryItems(photos, append = true) {
  const grid = document.getElementById('galleryGrid');
  photos.forEach((name, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.src = `Photo/${name}`;
    item.dataset.index = idx;
    item.innerHTML = `<img src="Photo/${name}" alt="${name}" loading="lazy" />`;
    item.addEventListener('click', () => openLightbox(item.dataset.src, visiblePhotos.indexOf(name)));
    grid.appendChild(item);
  });
}

function filterGallery(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = category;

  if (category === 'all') {
    filteredPhotos = [...ALL_PHOTOS];
  } else {
    const indices = CATEGORY_MAP[category] || [];
    filteredPhotos = indices.filter(i => i < ALL_PHOTOS.length).map(i => ALL_PHOTOS[i]);
  }
  buildGallery(filteredPhotos);
}

window.filterGallery = filterGallery;

function loadMorePhotos() {
  galleryPage++;
  const start  = galleryPage * PAGE_SIZE;
  const end    = start + PAGE_SIZE;
  const newPhotos = filteredPhotos.slice(start, end);
  if (newPhotos.length === 0) return;
  visiblePhotos = [...visiblePhotos, ...newPhotos];
  renderGalleryItems(newPhotos, true);
  updateLoadMoreBtn(filteredPhotos.length, visiblePhotos.length);
}
window.loadMorePhotos = loadMorePhotos;

function updateLoadMoreBtn(total, shown) {
  const btn = document.getElementById('loadMoreBtn');
  if (!btn) return;
  if (shown >= total) {
    btn.textContent = 'All photos loaded! 🎉';
    btn.disabled = true;
    btn.style.opacity = '0.4';
    btn.style.cursor  = 'default';
  } else {
    btn.textContent = `Load More Photos 🐾 (${shown}/${total})`;
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor  = 'pointer';
  }
}

// ════════════════════════════════════════════════════════════
//   LIGHTBOX
// ════════════════════════════════════════════════════════════
function openLightbox(src, idx) {
  lightboxIndex = idx;
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.openLightbox = openLightbox;

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
window.closeLightbox = closeLightbox;

function lightboxNav(dir) {
  const photos = currentFilter === 'all' ? ALL_PHOTOS : filteredPhotos;
  lightboxIndex = (lightboxIndex + dir + photos.length) % photos.length;
  document.getElementById('lightbox-img').src = `Photo/${photos[lightboxIndex]}`;
}
window.lightboxNav = lightboxNav;

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') lightboxNav(1);
  if (e.key === 'ArrowLeft')  lightboxNav(-1);
  if (e.key === 'Escape')     closeLightbox();
});

// ════════════════════════════════════════════════════════════
//   SQUAD CAROUSEL
// ════════════════════════════════════════════════════════════
function changeSquad(dir) {
  const slides = document.querySelectorAll('.squad-slide');
  const dots   = document.querySelectorAll('.sdot');
  slides[squadIndex].classList.remove('active');
  dots[squadIndex].classList.remove('active');
  squadIndex = (squadIndex + dir + slides.length) % slides.length;
  slides[squadIndex].classList.add('active');
  dots[squadIndex].classList.add('active');
}
window.changeSquad = changeSquad;

// Auto-advance squad carousel
setInterval(() => changeSquad(1), 4000);

// Squad dot clicks
document.querySelectorAll('.sdot').forEach((dot, i) => {
  dot.addEventListener('click', () => {
    const delta = i - squadIndex;
    changeSquad(delta === 0 ? 1 : delta);
    squadIndex = i;
    document.querySelectorAll('.squad-slide').forEach((s, j) => s.classList.toggle('active', j === i));
    document.querySelectorAll('.sdot').forEach((d, j) => d.classList.toggle('active', j === i));
  });
});

// ════════════════════════════════════════════════════════════
//   SCROLL REVEAL + NAV DOTS
// ════════════════════════════════════════════════════════════
const sections = document.querySelectorAll('.section');
const navDots  = document.querySelectorAll('.nav-dots .dot');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navDots.forEach(d => d.classList.remove('active'));
      const matchingDot = document.querySelector(`.nav-dots a[href="#${id}"]`);
      if (matchingDot) matchingDot.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.reveal-left, .reveal-right, .reveal-center').forEach(el => {
        el.classList.add('revealed');
      });
    }
  });
}, { threshold: 0.1 });
sections.forEach(s => revealObserver.observe(s));

// ════════════════════════════════════════════════════════════
//   MUSIC BUTTON (plays a fun notification sound via Web Audio)
// ════════════════════════════════════════════════════════════
let audioCtx = null;
let isPlaying = false;
let musicInterval = null;

function playBirthdayNote(freq, start, duration) {
  if (!audioCtx) return;
  const osc  = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type      = 'sine';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime + start);
  gain.gain.setValueAtTime(0.2, audioCtx.currentTime + start);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + start + duration);
  osc.start(audioCtx.currentTime + start);
  osc.stop(audioCtx.currentTime + start + duration + 0.05);
}

// Happy Birthday melody: C C D C F E | C C D C G F | C C C5 A F E D | Bb Bb A F G F
const MELODY = [
  [261.63,0,0.3],[261.63,0.35,0.15],[293.66,0.5,0.3],[261.63,0.85,0.3],[349.23,1.2,0.3],[329.63,1.55,0.65],
  [261.63,2.3,0.3],[261.63,2.65,0.15],[293.66,2.8,0.3],[261.63,3.15,0.3],[392.00,3.5,0.3],[349.23,3.85,0.65],
  [261.63,4.6,0.3],[261.63,4.95,0.15],[523.25,5.1,0.3],[440.00,5.45,0.3],[349.23,5.8,0.3],[329.63,6.15,0.3],[293.66,6.5,0.45],
  [466.16,7.05,0.3],[466.16,7.4,0.15],[440.00,7.55,0.3],[349.23,7.9,0.3],[392.00,8.25,0.3],[349.23,8.6,0.65],
];
const TOTAL_DURATION = 9.5;

function startMusic() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  function playLoop() {
    if (!isPlaying) return;
    MELODY.forEach(([freq, start, dur]) => playBirthdayNote(freq, start, dur));
    musicInterval = setTimeout(playLoop, TOTAL_DURATION * 1000);
  }
  playLoop();
}

function stopMusic() {
  if (audioCtx) { audioCtx.close(); audioCtx = null; }
  clearTimeout(musicInterval);
}

document.getElementById('music-btn').addEventListener('click', () => {
  const btn = document.getElementById('music-btn');
  isPlaying = !isPlaying;
  if (isPlaying) {
    startMusic();
    btn.textContent = '🔊';
    btn.classList.add('playing');
  } else {
    stopMusic();
    btn.textContent = '🎵';
    btn.classList.remove('playing');
  }
});

// ════════════════════════════════════════════════════════════
//   MASONRY ITEM CLICK → LIGHTBOX
// ════════════════════════════════════════════════════════════
document.querySelectorAll('.masonry-item img').forEach(img => {
  img.parentElement.addEventListener('click', () => {
    const src = img.src.replace(window.location.origin, '').replace(/^\//, '');
    openLightbox(img.src, 0);
    document.getElementById('lightbox-img').src = img.src;
  });
});

// Polaroid click → lightbox
document.querySelectorAll('.polaroid img').forEach(img => {
  img.parentElement.addEventListener('click', () => {
    openLightbox(img.src, 0);
  });
});

// Trait photo click → lightbox
document.querySelectorAll('.trait-photo').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src, 0));
});

// Fav photo click → lightbox
document.querySelectorAll('.fav-photo').forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src, 0));
});

// ════════════════════════════════════════════════════════════
//   CURSOR PAWS TRAIL
// ════════════════════════════════════════════════════════════
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.92) {
    const paw = document.createElement('div');
    paw.textContent = '🐾';
    paw.style.cssText = `
      position:fixed;
      left:${e.clientX - 12}px;
      top:${e.clientY - 12}px;
      pointer-events:none;
      font-size:18px;
      z-index:9998;
      opacity:1;
      transition: opacity 1s, transform 1s;
      transform: rotate(${Math.random()*60-30}deg) scale(1);
    `;
    document.body.appendChild(paw);
    requestAnimationFrame(() => {
      paw.style.opacity = '0';
      paw.style.transform = `rotate(${Math.random()*60-30}deg) scale(0.5) translateY(-30px)`;
    });
    setTimeout(() => paw.remove(), 1100);
  }
});

// ════════════════════════════════════════════════════════════
//   TOUCH SWIPE for SQUAD CAROUSEL
// ════════════════════════════════════════════════════════════
let touchStartX = 0;
const carousel  = document.getElementById('squadCarousel');
if (carousel) {
  carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) changeSquad(dx < 0 ? 1 : -1);
  });
}

// ════════════════════════════════════════════════════════════
//   INIT
// ════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildGallery(ALL_PHOTOS);

  // Staggered entrance for gallery items
  const gObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('.gallery-item');
        items.forEach((item, i) => {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          item.style.transition = `opacity 0.4s ${i * 0.03}s, transform 0.4s ${i * 0.03}s`;
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        });
        gObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  const galleryGrid = document.getElementById('galleryGrid');
  if (galleryGrid) gObs.observe(galleryGrid);
});

// Make favorite bars animate when in view
const favFills = document.querySelectorAll('.fav-fill');
const favObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.5 });
favFills.forEach(f => {
  f.style.animationPlayState = 'paused';
  favObs.observe(f);
});

console.log('%c🐾 Happy Birthday Injo! 🎉', 'font-size:24px; color:#FFD700; font-weight:bold;');
console.log('%cBuilt with 💛 for the world\'s fluffiest troublemaker!', 'font-size:14px; color:#FFA500;');
