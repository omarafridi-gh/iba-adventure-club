// app.js

// Force browser to always start at the top on fresh reload
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Clear hash anchor if page was loaded with #council-section
if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname + window.location.search);
}

// 1. Mount Modular Page Templates into index.html
function initApp() {
  document.getElementById('page-home-root').innerHTML = window.HOME_PAGE_TEMPLATE || '';
  document.getElementById('page-scuba-root').innerHTML = window.SCUBA_PAGE_TEMPLATE || '';
  document.getElementById('page-journal-root').innerHTML = window.JOURNAL_PAGE_TEMPLATE || '';

  showPage('home');
}

// 2. Navigation Switcher
function showPage(pageId) {
  document.querySelectorAll('.page-view').forEach(function(el) {
    el.classList.add('hidden');
  });
  const active = document.getElementById('page-' + pageId);
  if (active) active.classList.remove('hidden');

  // Lock root HTML & Body overflow to completely eliminate scrollbars on Journal
  const footer = document.getElementById('globalFooter');
  if (pageId === 'journal') {
    if (footer) footer.classList.add('hidden');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  } else {
    if (footer) footer.classList.remove('hidden');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    // Gently pause journal lo-fi music if moving to another page
    const audio = document.getElementById('journalAudio');
    if (audio && !audio.paused) {
      audio.pause();
      const btnText = document.getElementById('musicStatusText');
      const waves = document.getElementById('musicWaves');
      const icon = document.getElementById('musicDiscIcon');
      if (btnText) btnText.innerText = "Play Lo-fi Beats ♪";
      if (waves) waves.classList.add('hidden');
      if (icon) icon.classList.remove('animate-spin');
    }
  }

  // Update Desktop Navigation Tabs
  document.querySelectorAll('.nav-tab').forEach(function(btn) {
    btn.classList.remove('bg-scrap-charcoal', 'text-white', 'shadow');
    btn.classList.add('text-scrap-charcoal');
  });
  const activeTab = document.getElementById('tab-' + pageId);
  if (activeTab) {
    activeTab.classList.add('bg-scrap-charcoal', 'text-white', 'shadow');
    activeTab.classList.remove('text-scrap-charcoal');
  }

  // Update Mobile Navigation Tabs
  document.querySelectorAll('.nav-tab-m').forEach(function(btn) {
    btn.classList.remove('text-scrap-charcoal');
    btn.classList.add('text-scrap-ink/70');
  });
  const activeTabM = document.getElementById('tab-' + pageId + '-m');
  if (activeTabM) {
    activeTabM.classList.add('text-scrap-charcoal');
    activeTabM.classList.remove('text-scrap-ink/70');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2b. Smooth Scroll to Council Section (Accounts for 64px sticky navbar)
function scrollToCouncil() {
  const council = document.getElementById('council-section');
  if (!council) return;
  const headerOffset = 70; // 64px header + small breathing margin
  const elementPosition = council.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// 3. 3D Journal Spreads Data & Preloader
const masterJournalSpreads = [
  {
    category: "Expedition 01 • Marine Recon",
    title: "Chasing Blue: Charna Island & Mubarak",
    left: {
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      date: "CHARNA REEF • 12 METERS DEPTH",
      heading: "The Silence Beneath the Swell",
      note: "First breath underwater feels unnatural until the coral shelf opens up. Yellowtail snappers circled our descent line. Pure calm. ♡"
    },
    right: {
      img: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=900&q=80",
      date: "MUBARAK VILLAGE • CLIFF RECON",
      heading: "The 20ft Leap of Faith",
      note: "No hesitation allowed. Count to three and leap straight into the turquoise swell while the whole boat cheers."
    }
  },
  {
    category: "Expedition 02 • Northern Crossing",
    title: "Karakoram Cathedrals: Passu & Hunza",
    left: {
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
      date: "PASSU CONES • 2,500M ALTITUDE",
      heading: "Pinnacles Piercing the Dawn",
      note: "Stepping out of the coaster into crisp glacial wind. The granite cones look completely painted against the morning sky."
    },
    right: {
      img: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=80",
      date: "BORIT SUSPENSION BRIDGE",
      heading: "Testing Campus Nerves",
      note: "Narrow wooden slats over roaring glacial torrents. Shaky knees, high fives at the far end, and memories for life."
    }
  },
  {
    category: "Expedition 03 • Sindh Altitude Camp",
    title: "Night Sky Over the Kirthar Ridge",
    left: {
      img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=900&q=80",
      date: "GORAKH HILLS • 5,688 FEET",
      heading: "Milky Way at 2:00 AM",
      note: "Freezing Sindh winds, heavy jackets, and looking straight up into an uninterrupted sea of stars over our camp tents."
    },
    right: {
      img: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=900&q=80",
      date: "BASECAMP BONFIRE & STRINGS",
      heading: "Doodh Patti & Shared Shawls",
      note: "Woodsmoke in your hair, hot chai in tin cups, and 30 voices singing old melodies until the sun crested the ridge. ♡"
    }
  },
  {
    category: "Expedition 04 • Balochistan Coastal Trail",
    title: "Wind, Salt & Uncharted Canyons",
    left: {
      img: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=900&q=80",
      date: "HINGOL NATIONAL PARK",
      heading: "Ancient Natural Sculptures",
      note: "Carved over centuries by the Arabian sea gusts. Golden dust on boots and limitless desert horizons."
    },
    right: {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      date: "THE RETURN COASTER RIDE",
      heading: "New Faces, Same Wild Spirit",
      note: "Exhausted coaster nap on the Makran Highway. Sunburned cheeks, salty smiles, and already counting days to the next trail."
    }
  }
];

// Preload photos
masterJournalSpreads.forEach(sp => {
  const imgL = new Image(); imgL.src = sp.left.img;
  const imgR = new Image(); imgR.src = sp.right.img;
});

let currentSpreadIdx = 0;
let isFlipping = false;

// 4. Modal Open & Flip Flow
function openMasterBookModal() {
  const modal = document.getElementById('journalModal');
  const spreadArea = document.getElementById('bookSpreadTouchArea');
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  currentSpreadIdx = 0;
  renderCurrentSpread();

  spreadArea.classList.remove('anim-pov-zoom');
  void spreadArea.offsetWidth;
  spreadArea.classList.add('anim-pov-zoom');

  const audio = document.getElementById('journalAudio');
  if (audio && audio.paused) {
    toggleJournalMusic();
  }
}

function closeMasterBookModal() {
  const modal = document.getElementById('journalModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  
  const homeVisible = !document.getElementById('page-home').classList.contains('hidden');
  const scubaVisible = !document.getElementById('page-scuba').classList.contains('hidden');
  
  if (homeVisible || scubaVisible) {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  } else {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
}

function handleBackdropClick(e) {
  if (e.target && e.target.id === 'journalModal') {
    closeMasterBookModal();
  }
}

function renderCurrentSpread() {
  const sp = masterJournalSpreads[currentSpreadIdx];
  document.getElementById('modalCategory').innerText = sp.category;
  document.getElementById('modalTitle').innerText = sp.title;

  document.getElementById('modalLeftImg').src = sp.left.img;
  document.getElementById('modalLeftDate').innerText = sp.left.date;
  document.getElementById('modalLeftHeading').innerText = sp.left.heading;
  document.getElementById('modalLeftNote').innerText = sp.left.note;
  document.getElementById('modalLeftPageNum').innerText = `Page ${currentSpreadIdx * 2 + 1}`;

  document.getElementById('modalRightImg').src = sp.right.img;
  document.getElementById('modalRightDate').innerText = sp.right.date;
  document.getElementById('modalRightHeading').innerText = sp.right.heading;
  document.getElementById('modalRightNote').innerText = sp.right.note;
  document.getElementById('modalRightPageNum').innerText = `Page ${currentSpreadIdx * 2 + 2}`;

  document.getElementById('modalSpreadTracker').innerText = `Spread ${currentSpreadIdx + 1} of ${masterJournalSpreads.length}`;
  document.getElementById('btnPrevModal').disabled = (currentSpreadIdx === 0);
  document.getElementById('btnNextModal').disabled = (currentSpreadIdx >= masterJournalSpreads.length - 1);
}

function nextSpread() {
  if (isFlipping || currentSpreadIdx >= masterJournalSpreads.length - 1) return;
  isFlipping = true;

  const leaf = document.getElementById('turningPageLeaf');
  const leafContent = document.getElementById('turningLeafContent');
  leafContent.innerHTML = document.getElementById('rightPageContent').innerHTML;

  leaf.className = 'turn-page-slow-forward';

  setTimeout(() => {
    currentSpreadIdx++;
    renderCurrentSpread();
  }, 440);

  setTimeout(() => {
    leaf.className = '';
    leafContent.innerHTML = '';
    isFlipping = false;
  }, 880);
}

function prevSpread() {
  if (isFlipping || currentSpreadIdx <= 0) return;
  isFlipping = true;

  const leaf = document.getElementById('turningPageLeaf');
  const leafContent = document.getElementById('turningLeafContent');
  leafContent.innerHTML = document.getElementById('leftPageContent').innerHTML;

  leaf.className = 'turn-page-slow-backward';

  setTimeout(() => {
    currentSpreadIdx--;
    renderCurrentSpread();
  }, 440);

  setTimeout(() => {
    leaf.className = '';
    leafContent.innerHTML = '';
    isFlipping = false;
  }, 880);
}

// 5. Lo-Fi Ambient Audio Controls
function toggleJournalMusic() {
  const audio = document.getElementById('journalAudio');
  const btnText = document.getElementById('musicStatusText');
  const waves = document.getElementById('musicWaves');
  const icon = document.getElementById('musicDiscIcon');
  if (!audio) return;

  if (audio.paused) {
    audio.volume = 0.45;
    audio.play().then(() => {
      if (btnText) btnText.innerText = "Playing Room Beats ♪";
      if (waves) waves.classList.remove('hidden');
      if (icon) icon.classList.add('animate-spin');
    }).catch(err => {
      console.log("Audio playback waiting for interaction:", err);
    });
  } else {
    audio.pause();
    if (btnText) btnText.innerText = "Play Lo-fi Beats ♪";
    if (waves) waves.classList.add('hidden');
    if (icon) icon.classList.remove('animate-spin');
  }
}

// Touch swipe gestures
let touchStartX = 0;
let touchEndX = 0;
const touchArea = document.getElementById('bookSpreadTouchArea');

touchArea.addEventListener('touchstart', function(e) {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

touchArea.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const threshold = 45;
  if (touchEndX < touchStartX - threshold) {
    nextSpread();
  } else if (touchEndX > touchStartX + threshold) {
    prevSpread();
  }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
  const modalOpen = !document.getElementById('journalModal').classList.contains('hidden');
  if (modalOpen) {
    if (event.key === 'ArrowRight' || event.key === ' ') {
      nextSpread();
    } else if (event.key === 'ArrowLeft') {
      prevSpread();
    } else if (event.key === 'Escape') {
      closeMasterBookModal();
    }
  } else if (event.key === 'Escape') {
    closeLightbox();
  }
});

// Checklist counter
function updateChecklist() {
  const checkboxes = document.querySelectorAll('.pack-item');
  let checked = 0;
  checkboxes.forEach(function(cb) {
    if (cb.checked) checked++;
  });
  const el = document.getElementById('packProgress');
  if (el) el.innerText = checked + '/' + checkboxes.length + ' Ready';
}

// Registration manifest
function handleRegistration(e) {
  e.preventDefault();
  const code = '#IAC-SCUBA-' + Math.floor(100 + Math.random() * 900);
  const codeEl = document.getElementById('bookingCode');
  if (codeEl) codeEl.innerText = code;
  const succEl = document.getElementById('formSuccess');
  if (succEl) succEl.classList.remove('hidden');
  const form = document.getElementById('scubaForm');
  if (form) form.reset();
}

// Lightbox
function openLightbox(url, title) {
  if (!url) return;
  document.getElementById('lightboxImg').src = url;
  document.getElementById('lightboxCaption').innerText = title || '';
  const lb = document.getElementById('lightbox');
  lb.classList.remove('hidden');
  lb.classList.add('flex');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.add('hidden');
  lb.classList.remove('flex');
  document.getElementById('lightboxImg').src = '';
}

document.getElementById('lightbox').addEventListener('click', function(event) {
  if (event.target === this) closeLightbox();
});

// Start app on load
window.addEventListener('DOMContentLoaded', initApp);
