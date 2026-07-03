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
  plan.src = model.plan;
  plan.alt = model.planAlt;
  caption.textContent = model.caption;
}

tabs.forEach(tab => tab.addEventListener('click', () => selectModel(tab.dataset.model)));

const carouselSlides = [
  {
    src: 'assets/carrossel-modelos/yume-carrossel-01-externa.jpg',
    alt: 'Vista externa YUME 1',
    label: 'Imagem 01',
    title: 'Parte externa'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-02-externa.jpg',
    alt: 'Vista externa YUME 2',
    label: 'Imagem 02',
    title: 'Parte externa'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-03-externa.jpg',
    alt: 'Vista externa YUME 3',
    label: 'Imagem 03',
    title: 'Parte externa'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-04-externa.jpg',
    alt: 'Vista externa YUME 4',
    label: 'Imagem 04',
    title: 'Parte externa'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-05-interna.jpg',
    alt: 'Interior YUME 1',
    label: 'Imagem 05',
    title: 'Interior'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-06-interna.jpg',
    alt: 'Interior YUME 2',
    label: 'Imagem 06',
    title: 'Interior'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-07-interna.jpg',
    alt: 'Interior YUME 3',
    label: 'Imagem 07',
    title: 'Interior'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-08-interna.jpg',
    alt: 'Interior YUME 4',
    label: 'Imagem 08',
    title: 'Interior'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-09-interna.jpg',
    alt: 'Interior YUME 5',
    label: 'Imagem 09',
    title: 'Interior'
  },
  {
    src: 'assets/carrossel-modelos/yume-carrossel-10-interna.jpg',
    alt: 'Interior YUME 6',
    label: 'Imagem 10',
    title: 'Interior'
  }
];

const carousel = document.querySelector('[data-model-carousel]');
const carouselImage = document.querySelector('[data-carousel-image]');
const carouselLabel = document.querySelector('[data-carousel-label]');
const carouselTitle = document.querySelector('[data-carousel-title]');
const carouselPrev = document.querySelector('[data-carousel-prev]');
const carouselNext = document.querySelector('[data-carousel-next]');
const carouselDots = document.querySelector('[data-carousel-dots]');
let carouselIndex = 0;

function renderCarouselDots() {
  if (!carouselDots) return;
  carouselDots.innerHTML = carouselSlides.map((slide, index) => (
    `<button class="carousel-dot${index === carouselIndex ? ' active' : ''}" type="button" aria-label="Mostrar ${slide.label}" data-carousel-dot="${index}"></button>`
  )).join('');
}

function showCarouselSlide(index) {
  if (!carouselImage || !carouselSlides.length) return;
  carouselIndex = (index + carouselSlides.length) % carouselSlides.length;
  const slide = carouselSlides[carouselIndex];
  carousel?.classList.add('is-changing');
  window.setTimeout(() => carousel?.classList.remove('is-changing'), 260);
  carouselImage.src = slide.src;
  carouselImage.alt = slide.alt;
  if (carouselLabel) carouselLabel.textContent = slide.label;
  if (carouselTitle) carouselTitle.textContent = slide.title;
  renderCarouselDots();
}

carouselPrev?.addEventListener('click', () => showCarouselSlide(carouselIndex - 1));
carouselNext?.addEventListener('click', () => showCarouselSlide(carouselIndex + 1));
carouselDots?.addEventListener('click', event => {
  const dot = event.target.closest('[data-carousel-dot]');
  if (!dot) return;
  showCarouselSlide(Number(dot.dataset.carouselDot));
});
carousel?.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') showCarouselSlide(carouselIndex - 1);
  if (event.key === 'ArrowRight') showCarouselSlide(carouselIndex + 1);
});
renderCarouselDots();
