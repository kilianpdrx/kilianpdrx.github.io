// Slide-from-right project drawer.
// Intercepts clicks on .project-card links, fetches the project page,
// extracts the article content, and displays it in an overlay drawer.
// Direct URLs to /projects/... still work as a fallback.

(function () {
  const drawer = document.getElementById('project-drawer');
  if (!drawer) return;

  const panel    = drawer.querySelector('.drawer__panel');
  const body     = drawer.querySelector('.drawer__body');
  const backdrop = drawer.querySelector('.drawer__backdrop');
  const closeBtn = drawer.querySelector('.drawer__close');
  const titleEl  = drawer.querySelector('.drawer__title');
  const metaEl   = drawer.querySelector('.drawer__meta');

  let previousFocus = null;
  let cache = new Map();

  function open() {
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
    previousFocus = document.activeElement;
    // focus close button so Esc/Tab works
    setTimeout(() => closeBtn.focus(), 50);
  }

  function close() {
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    if (previousFocus && previousFocus.focus) previousFocus.focus();
    // clear after animation finishes to free DOM
    setTimeout(() => {
      if (drawer.getAttribute('aria-hidden') === 'true') {
        body.innerHTML = '';
        titleEl.textContent = '';
        metaEl.textContent = '';
      }
    }, 400);
  }

  async function loadProject(url, card) {
    // Prime header immediately from card metadata
    const cardTitle  = card?.querySelector('.project-card__title')?.textContent?.trim() || '';
    const cardDate   = card?.querySelector('.project-card__date')?.textContent?.trim() || '';
    const cardPeriod = card?.querySelector('.project-card__period')?.textContent?.trim() || '';
    titleEl.textContent = cardTitle;
    metaEl.textContent  = [cardDate, cardPeriod].filter(Boolean).join(' · ');
    body.innerHTML = '<div class="drawer__loading">Loading…</div>';
    panel.scrollTop = 0;
    open();

    try {
      let html;
      if (cache.has(url)) {
        html = cache.get(url);
      } else {
        const res = await fetch(url, { credentials: 'same-origin', cache: 'no-cache' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        html = await res.text();
        cache.set(url, html);
      }

      const doc = new DOMParser().parseFromString(html, 'text/html');
      const base = new URL(url, location.href);

      // Resolve relative URLs against the source page so images load correctly
      doc.querySelectorAll('img[src], a[href]').forEach(el => {
        const attr = el.tagName === 'IMG' ? 'src' : 'href';
        const val  = el.getAttribute(attr);
        if (!val) return;
        if (/^(https?:|mailto:|tel:|data:|#|\/\/)/i.test(val)) return;
        try { el.setAttribute(attr, new URL(val, base).pathname); } catch (e) {}
      });
      // Lazy-load images for smoother pop-in
      doc.querySelectorAll('img').forEach(img => { img.loading = 'lazy'; });

      const article = doc.querySelector('.project-page') || doc.querySelector('article') || doc.body;
      body.innerHTML = article.innerHTML;
    } catch (err) {
      body.innerHTML = '<div class="drawer__error">Could not load project. <a href="' + url + '">Open page directly →</a></div>';
      console.error('Drawer load error:', err);
    }
  }

  // Intercept project-card clicks
  document.addEventListener('click', function (e) {
    const card = e.target.closest('.project-card');
    if (!card) return;
    // let modifier-clicks (open in new tab) pass through
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const url = card.getAttribute('href');
    if (!url) return;
    e.preventDefault();
    loadProject(url, card);
  });

  // Close handlers
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') close();
  });
})();
