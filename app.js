function showPage(pageId) {
  document.querySelectorAll('.page-view').forEach(function(el) {
    el.classList.add('hidden');
  });
  const active = document.getElementById('page-' + pageId);
  if (active) active.classList.remove('hidden');

  // Keep the footer consistently visible on all pages (Home, Scuba, and Journal)
  const footer = document.getElementById('globalFooter');
  if (footer) {
    footer.classList.remove('hidden');
  }

  // Update Desktop Tabs
  document.querySelectorAll('.nav-tab').forEach(function(btn) {
    btn.classList.remove('bg-scrap-charcoal', 'text-white', 'shadow');
    btn.classList.add('text-scrap-charcoal');
  });
  const activeTab = document.getElementById('tab-' + pageId);
  if (activeTab) {
    activeTab.classList.add('bg-scrap-charcoal', 'text-white', 'shadow');
    activeTab.classList.remove('text-scrap-charcoal');
  }

  // Update Mobile Tabs
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
