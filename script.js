const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-menu-toggle]');
const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
setHeader();
window.addEventListener('scroll', setHeader, { passive: true });
toggle?.addEventListener('click', () => nav?.classList.toggle('is-open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));

const models = {
  studio: {
    label: 'YUME Studio • 22m²',
    title: 'O essencial elevado ao máximo.',
    description: 'Uma unidade compacta para quem quer impacto visual, operação simples e experiência premium em metragem inteligente.',
    render: 'assets/model-studio.png',
    renderAlt: 'Render externo YUME Studio',
    plan: 'assets/yume-studio-planta.jpg',
    planAlt: 'Planta YUME Studio 22m²',
    caption: 'Planta YUME Studio — 22m².',
    features: [
      'Planta otimizada para hospedagens e terrenos menores.',
      'Deck integrado para ampliar a sensação de espaço.',
      'Ideal para operações com múltiplas unidades.'
    ]
  },
  suite: {
    label: 'YUME Suite • 27m²',
    title: 'Mais espaço para transformar estadia em ritual.',
    description: 'A versão com presença ampliada: suíte, estar e cozinha integrados para uma experiência mais confortável, íntima e memorável.',
    render: 'assets/model-suite.png',
    renderAlt: 'Render externo YUME Suite',
    plan: 'assets/yume-suite-planta.png',
    planAlt: 'Planta YUME Suite 27m²',
    caption: 'Planta YUME Suite — 27m².',
    features: [
      'Suíte com estar e cozinha integrados.',
      'Mais conforto para long stays, casal ou produto flagship.',
      'Percepção premium para tarifa e posicionamento superiores.'
    ]
  }
};

const tabs = document.querySelectorAll('[data-model]');
const label = document.querySelector('[data-model-label]');
const title = document.querySelector('[data-model-title]');
const description = document.querySelector('[data-model-description]');
const features = document.querySelector('[data-model-features]');
const render = document.querySelector('[data-model-render]');
const plan = document.querySelector('[data-model-plan]');
const caption = document.querySelector('[data-model-caption]');

function selectModel(key) {
  const model = models[key];
  if (!model) return;
  tabs.forEach(tab => {
    const active = tab.dataset.model === key;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  label.textContent = model.label;
  title.textContent = model.title;
  description.textContent = model.description;
  features.innerHTML = model.features.map(item => `<li>${item}</li>`).join('');
  render.src = model.render;
  render.alt = model.renderAlt;
  plan.src = model.plan;
  plan.alt = model.planAlt;
  caption.textContent = model.caption;
}

tabs.forEach(tab => tab.addEventListener('click', () => selectModel(tab.dataset.model)));
