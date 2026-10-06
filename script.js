const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');
const year = document.querySelector('#year');

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (navToggle && mainNav) {
  const closeNavigation = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation');
    mainNav.classList.remove('open');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mainNav.classList.toggle('open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });
}

const copyButton = document.querySelector('[data-copy-phone]');
const copyStatus = document.querySelector('.copy-status');

if (copyButton && copyStatus) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('(770) 606-4495');
      copyStatus.textContent = 'Number copied.';
    } catch (error) {
      copyStatus.textContent = 'Copy unavailable. Call (770) 606-4495.';
    }
  });
}
