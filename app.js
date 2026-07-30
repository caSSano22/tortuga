/* ==========================================================================
   TORTUGA ESTATE — INSTITUTIONAL-GRADE REAL WORLD ASSETS ON BLOCKCHAIN
   Interactive Script Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initRwaCalculator();
  initRoadmapInteractivity();
});

// 1. Interactive RWA Yield Calculator Simulator
function initRwaCalculator() {
  const slider = document.getElementById('rwaInvestSlider');
  const txtAmount = document.getElementById('txtInvestAmount');
  const txtYieldYear = document.getElementById('txtYieldYear');
  const txtYieldMonth = document.getElementById('txtYieldMonth');

  if (!slider || !txtAmount) return;

  const updateCalc = () => {
    const val = parseInt(slider.value, 10);
    txtAmount.textContent = '$' + val.toLocaleString('en-US');

    // 8.4% fixed annual APY yield
    const annual = Math.round(val * 0.084);
    const monthly = Math.round(annual / 12);

    if (txtYieldYear) txtYieldYear.textContent = '$' + annual.toLocaleString('en-US');
    if (txtYieldMonth) txtYieldMonth.textContent = '$' + monthly.toLocaleString('en-US');
  };

  slider.addEventListener('input', updateCalc);
  updateCalc();
}

// 2. Interactive Roadmap Timeline Controller
function initRoadmapInteractivity() {
  const cards = document.querySelectorAll('.phase-card-tortuga');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const phaseNum = card.getAttribute('data-phase');
      showTortugaToast(`📍 Viewing Phase ${phaseNum} Deliverables on Robinhood Chain`);
    });
  });
}

// Global UI Handlers
function toggleMobileMenuTortuga() {
  const drawer = document.getElementById('mobileMenuDrawerTortuga');
  if (drawer) drawer.classList.toggle('open');
}

function showTortugaToast(msg) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 32px; right: 32px; z-index: 1000;
    background: #141418; color: #d5c3ab; border: 1px solid rgba(213, 195, 171, 0.3);
    padding: 14px 24px; border-radius: 9999px; font-family: var(--font-mono);
    font-size: 0.85rem; box-shadow: 0 15px 40px rgba(0,0,0,0.8);
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4500);
}
