const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-menu-toggle]');

const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });
toggle?.addEventListener('click', () => nav?.classList.toggle('is-open'));

const plans = {
  studio: {
    label: 'Yume Studio • 22m²',
    title: 'Compacto, fotogênico e extremamente eficiente.',
    description: 'Ideal para estadias curtas, terrenos menores e operações de Airbnb que precisam de beleza, conforto e giro rápido.',
    image: 'assets/yume-studio-planta.png',
    alt: 'Planta baixa Yume Studio 22m²',
    caption: 'Planta Yume Studio — 22m².',
    features: [
      'Layout integrado com sensação ampla.',
      'Experiência premium em metragem inteligente.',
      'Perfeito para unidades seriadas em operação de hospedagem.'
    ]
  },
  suite: {
    label: 'Yume Suite • 27m²',
    title: 'Mais presença, mais conforto, mais permanência.',
    description: 'Criada para uma experiência superior, com mais respiro interno e percepção de luxo para morar ou hospedar com ticket mais alto.',
    image: 'assets/yume-suite-planta.png',
    alt: 'Planta baixa Yume Suite 27m²',
    caption: 'Planta Yume Suite — 27m².',
    features: [
      'Metragem ampliada para sensação de suíte premium.',
      'Ideal para estadias românticas, long stays ou produto flagship.',
      'Mais espaço para diferenciais de conforto e decoração.'
    ]
  }
};

const tabs = document.querySelectorAll('[data-plan]');
const label = document.querySelector('[data-plan-label]');
const title = document.querySelector('[data-plan-title]');
const desc = document.querySelector('[data-plan-description]');
const features = document.querySelector('[data-plan-features]');
const image = document.querySelector('[data-plan-image]');
const caption = document.querySelector('[data-plan-caption]');

function selectPlan(key) {
  const plan = plans[key];
  if (!plan) return;
  tabs.forEach(tab => {
    const active = tab.dataset.plan === key;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  label.textContent = plan.label;
  title.textContent = plan.title;
  desc.textContent = plan.description;
  features.innerHTML = plan.features.map(item => `<li>${item}</li>`).join('');
  image.classList.remove('is-missing');
  image.src = plan.image;
  image.alt = plan.alt;
  caption.textContent = plan.caption;
}

tabs.forEach(tab => tab.addEventListener('click', () => selectPlan(tab.dataset.plan)));
