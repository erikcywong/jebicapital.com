/**
 * JEBI CAPITAL — Shared components (navbar, footer, modal, language switcher)
 * Injected into every page. Depends on i18n.js being loaded first.
 */

/* ---------- Category meta ---------- */
const CATEGORIES = [
  { key: 'aeroponic',    icon: '🌱', color: '#00ba7c' },
  { key: 'processing',   icon: '⚙️', color: '#1d9bf0' },
  { key: 'roasting',     icon: '🔥', color: '#ff7a00' },
  { key: 'distribution', icon: '🚛', color: '#9c27b0' },
  { key: 'cafe',         icon: '☕', color: '#795548' },
  { key: 'carbon',       icon: '🌍', color: '#00ba7c' },
  { key: 'financial',    icon: '💰', color: '#1d9bf0' },
  { key: 'technology',   icon: '🔬', color: '#9c27b0' }
];

/* ---------- Navbar HTML ---------- */
function navbarHTML() {
  return `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">JEBI<span class="logo-accent"> CAPITAL</span><span class="logo-dot"></span></a>

      <div class="nav-items" id="navItems">
        <div class="nav-item">
          <span class="nav-link" data-i18n="nav.discover">Discover
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
          <div class="nav-dropdown">
            <a href="discover.html?filter=trending" data-i18n="navDiscover.trending">Trending Now</a>
            <a href="discover.html?filter=endingSoon" data-i18n="navDiscover.endingSoon">Ending Soon</a>
            <a href="discover.html?filter=mostFunded" data-i18n="navDiscover.mostFunded">Most Funded</a>
            <a href="discover.html?filter=newest" data-i18n="navDiscover.newProjects">New Projects</a>
            <a href="discover.html" data-i18n="navDiscover.allCategories">All Categories</a>
          </div>
        </div>

        <div class="nav-item">
          <span class="nav-link" data-i18n="nav.start">Start a Project
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
          <div class="nav-dropdown">
            <a href="start.html" data-i18n="navStart.guidelines">Creator Guidelines</a>
            <a href="start.html" data-i18n="navStart.carbonKit">Carbon Toolkit</a>
            <a href="start.html" data-i18n="navStart.eligibility">Eligibility Check</a>
            <a href="how-it-works.html#fees" data-i18n="navStart.pricing">Fees & Pricing</a>
          </div>
        </div>

        <div class="nav-item">
          <span class="nav-link" data-i18n="nav.howItWorks">How It Works
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
          <div class="nav-dropdown">
            <a href="how-it-works.html#creators" data-i18n="navHow.creators">For Creators</a>
            <a href="how-it-works.html#backers" data-i18n="navHow.backers">For Backers</a>
            <a href="how-it-works.html#verification" data-i18n="navHow.verification">Carbon Verification</a>
            <a href="how-it-works.html#fees" data-i18n="navHow.fees">Fee Structure</a>
          </div>
        </div>

        <div class="nav-item">
          <span class="nav-link" data-i18n="nav.financial">Financial
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
          <div class="nav-dropdown">
            <a href="financial.html#carbon-credits" data-i18n="navFinancial.carbonCredits">Carbon Credits</a>
            <a href="financial.html#green-bonds" data-i18n="navFinancial.greenBonds">Green Bonds</a>
            <a href="financial.html#impact-funds" data-i18n="navFinancial.impactFunds">Impact Funds</a>
            <a href="financial.html#coffee-futures" data-i18n="navFinancial.coffeeFutures">Coffee Futures</a>
          </div>
        </div>

        <div class="nav-item">
          <span class="nav-link" data-i18n="nav.about">About
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
          <div class="nav-dropdown">
            <a href="about.html#mission" data-i18n="navAbout.mission">Our Mission</a>
            <a href="about.html#team" data-i18n="navAbout.team">Team</a>
            <a href="about.html#partners" data-i18n="navAbout.partners">Partners</a>
            <a href="about.html#methodology" data-i18n="navAbout.methodology">Carbon Methodology</a>
            <a href="about.html#impact" data-i18n="navAbout.impact">Impact Report</a>
          </div>
        </div>
      </div>

      <div class="nav-right">
        <div class="nav-search">
          <input type="text" data-i18n-attr="placeholder:nav.search" placeholder="Search projects…">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>

        <div class="lang-switch" id="langSwitch">
          <button class="lang-btn">
            <svg class="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            <span class="lang-current">EN</span>
          </button>
          <div class="lang-menu" id="langMenu">
            ${LANG_LIST.map(l => `<button data-lang="${l.code}" onclick="setLang('${l.code}')">${l.label}<span class="lang-code">${l.flag}</span></button>`).join('')}
          </div>
        </div>

        <button class="nav-btn nav-btn-ghost" data-i18n="nav.signIn">Sign In</button>
        <button class="nav-btn nav-btn-primary" data-i18n="nav.signUp">Sign Up</button>

        <button class="nav-toggle" id="navToggle" onclick="document.getElementById('navItems').classList.toggle('mobile-open')">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;
}

/* ---------- Footer HTML ---------- */
function footerHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">JEBI<span class="logo-accent"> CAPITAL</span></a>
          <p data-i18n="footer.about">JEBI Capital is the world's first crowdfunding platform dedicated to zero-carbon coffee.</p>
          <div class="footer-newsletter">
            <h4 data-i18n="footer.newsletter">Stay Updated</h4>
            <p style="font-size:13px;color:var(--text-2);margin-top:6px;" data-i18n="footer.newsletterText">Get the latest zero-carbon coffee projects and impact reports.</p>
            <form onsubmit="event.preventDefault(); this.querySelector('button').textContent = t('footer.subscribed');">
              <input type="email" data-i18n-attr="placeholder:footer.emailPlaceholder" placeholder="Your email address" required>
              <button type="submit" data-i18n="footer.subscribe">Subscribe</button>
            </form>
          </div>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer.explore">Explore</h4>
          <a href="discover.html" data-i18n="nav.discover">Discover</a>
          <a href="discover.html?filter=trending" data-i18n="navDiscover.trending">Trending Now</a>
          <a href="discover.html?filter=mostFunded" data-i18n="navDiscover.mostFunded">Most Funded</a>
          <a href="financial.html" data-i18n="nav.financial">Financial</a>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer.creators">Creators</h4>
          <a href="start.html" data-i18n="nav.start">Start a Project</a>
          <a href="start.html" data-i18n="footer.creatorHub">Creator Hub</a>
          <a href="start.html" data-i18n="footer.guidelines">Guidelines</a>
          <a href="how-it-works.html#fees" data-i18n="footer.fees">Fees & Pricing</a>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer.resources">Resources</h4>
          <a href="how-it-works.html" data-i18n="nav.howItWorks">How It Works</a>
          <a href="about.html#methodology" data-i18n="footer.carbonMethod">Carbon Methodology</a>
          <a href="about.html#impact" data-i18n="footer.impactReport">Impact Report</a>
          <a href="#" data-i18n="footer.careers">Careers</a>
        </div>

        <div class="footer-col">
          <h4 data-i18n="footer.legal">Legal</h4>
          <a href="#" data-i18n="footer.terms">Terms of Use</a>
          <a href="#" data-i18n="footer.privacy">Privacy Policy</a>
          <a href="#" data-i18n="footer.cookiePolicy">Cookie Policy</a>
          <a href="#" data-i18n="footer.disclaimer">Risk Disclaimer</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="disclaimer-text" data-i18n="footer.disclaimerText">Investments carry risk. JEBI Capital is a platform facilitator, not a registered investment advisor.</span>
        <div class="footer-legal">
          <span>© 2026 JEBI Capital. <span data-i18n="footer.rights">All rights reserved.</span></span>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ---------- Language Modal HTML ---------- */
function modalHTML() {
  return `
  <div class="modal-overlay" id="langModal">
    <div class="modal-box">
      <div class="modal-logo">JEBI<span class="logo-accent"> CAPITAL</span></div>
      <h2 class="modal-title" data-i18n="modal.title">Choose Your Language</h2>
      <p class="modal-subtitle" data-i18n="modal.subtitle">Select your preferred language for the JEBI Capital experience.</p>

      <div class="lang-options">
        <div class="lang-option" data-lang="en" onclick="selectModalLang('en')">
          <div class="lang-flag en">EN</div>
          <div class="lang-info">
            <div class="lang-name">English</div>
            <div class="lang-native">English</div>
          </div>
        </div>
        <div class="lang-option" data-lang="zh" onclick="selectModalLang('zh')">
          <div class="lang-flag zh">中</div>
          <div class="lang-info">
            <div class="lang-name" data-i18n="modal.chinese">简体中文</div>
            <div class="lang-native">Mandarin Chinese</div>
          </div>
        </div>
        <div class="lang-option" data-lang="ar" onclick="selectModalLang('ar')">
          <div class="lang-flag ar">ع</div>
          <div class="lang-info">
            <div class="lang-name" data-i18n="modal.arabic">العربية</div>
            <div class="lang-native">Saudi Arabic</div>
          </div>
        </div>
      </div>

      <button class="modal-continue" id="modalContinue" disabled data-i18n="modal.continue" onclick="confirmModalLang()">Continue</button>
      <p class="modal-note" data-i18n="modal.changeLater">You can change this anytime in the navigation bar.</p>
    </div>
  </div>`;
}

/* ---------- Modal logic ---------- */
let modalSelectedLang = null;

function selectModalLang(code) {
  modalSelectedLang = code;
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.lang === code);
  });
  // apply translations immediately for preview
  applyI18n(code);
  document.getElementById('modalContinue').disabled = false;
}

function confirmModalLang() {
  if (!modalSelectedLang) return;
  setLang(modalSelectedLang);
  document.getElementById('langModal').classList.remove('active');
  document.body.style.overflow = '';
}

function showLangModal() {
  const modal = document.getElementById('langModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/* ---------- Init ---------- */
function initShared(opts = {}) {
  const isIndex = opts.isIndex || false;

  // Inject navbar at top of body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML());

  // Inject modal (only on index, or when no language set)
  if (isIndex || !localStorage.getItem(LANG_KEY)) {
    document.body.insertAdjacentHTML('beforeend', modalHTML());
  }

  // Inject footer at bottom
  document.body.insertAdjacentHTML('beforeend', footerHTML());

  // Apply saved language (or default)
  const savedLang = getLang();
  applyI18n(savedLang);

  // Update lang menu active state
  function updateLangMenu() {
    const current = getLang();
    document.querySelectorAll('#langMenu button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === current);
    });
  }
  updateLangMenu();
  window.addEventListener('langChanged', updateLangMenu);

  // Show modal if needed
  if (isIndex || !localStorage.getItem(LANG_KEY)) {
    // Small delay for smooth entrance
    setTimeout(showLangModal, 400);
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Close lang menu on outside click
  document.addEventListener('click', (e) => {
    const sw = document.getElementById('langSwitch');
    if (sw && !sw.contains(e.target)) {
      sw.classList.remove('open');
    }
  });
}
