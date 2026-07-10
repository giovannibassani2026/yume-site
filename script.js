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
    plan: 'assets/cabana-suite-deck-22m.jpg',
    planAlt: 'Planta YUME Studio 22m²',
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
    plan: 'assets/cabana-completa-deck-27m.jpg',
    planAlt: 'Planta YUME Suite 27m²',
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

function selectModel(key) {
  const model = models[key];
  if (!model) return;
  activeModelKey = key;
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
  showCarouselSlide(0);
}

tabs.forEach(tab => tab.addEventListener('click', () => selectModel(tab.dataset.model)));

let activeModelKey = 'studio';

const carouselSlides = {
  studio: [
    {
      src: 'assets/carrossel-modelos/yume-carrossel-01-externa.jpg',
      alt: 'Vista externa YUME Studio 1',
      label: 'Imagem 01',
      title: 'Studio • parte externa'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-02-externa.jpg',
      alt: 'Vista externa YUME Studio 2',
      label: 'Imagem 02',
      title: 'Studio • parte externa'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-03-externa.jpg',
      alt: 'Vista externa YUME Studio 3',
      label: 'Imagem 03',
      title: 'Studio • parte externa'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-04-externa.jpg',
      alt: 'Vista externa YUME Studio 4',
      label: 'Imagem 04',
      title: 'Studio • parte externa'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-05-interna.jpg',
      alt: 'Vista externa YUME Studio 5',
      label: 'Imagem 05',
      title: 'Studio • parte externa'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-06-interna.jpg',
      alt: 'Interior YUME Studio 2',
      label: 'Imagem 06',
      title: 'Studio • interior'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-07-interna.jpg',
      alt: 'Interior YUME Studio 3',
      label: 'Imagem 07',
      title: 'Studio • interior'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-08-interna.jpg',
      alt: 'Interior YUME Studio 4',
      label: 'Imagem 08',
      title: 'Studio • interior'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-09-interna.jpg',
      alt: 'Interior YUME Studio 5',
      label: 'Imagem 09',
      title: 'Studio • interior'
    },
    {
      src: 'assets/carrossel-modelos/yume-carrossel-10-interna.jpg',
      alt: 'Interior YUME Studio 6',
      label: 'Imagem 10',
      title: 'Studio • interior'
    }
  ],
  suite: [
    {
      src: 'assets/carrossel-suite-27m/yume-suite-01-externa.jpg',
      alt: 'Vista externa YUME Suite 27m² 1',
      label: 'Imagem 01',
      title: 'Suite 27m² • parte externa'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-02-externa.jpg',
      alt: 'Vista externa YUME Suite 27m² 2',
      label: 'Imagem 02',
      title: 'Suite 27m² • parte externa'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-03-externa.jpg',
      alt: 'Vista externa YUME Suite 27m² 3',
      label: 'Imagem 03',
      title: 'Suite 27m² • parte externa'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-04-externa.jpg',
      alt: 'Vista externa YUME Suite 27m² 4',
      label: 'Imagem 04',
      title: 'Suite 27m² • parte externa'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-05-interna.jpg',
      alt: 'Vista externa YUME Suite 27m² 5',
      label: 'Imagem 05',
      title: 'Suite 27m² • parte externa'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-06-interna.jpg',
      alt: 'Interior YUME Suite 27m² 2',
      label: 'Imagem 06',
      title: 'Suite 27m² • interior'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-07-interna.jpg',
      alt: 'Interior YUME Suite 27m² 3',
      label: 'Imagem 07',
      title: 'Suite 27m² • interior'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-08-interna.jpg',
      alt: 'Interior YUME Suite 27m² 4',
      label: 'Imagem 08',
      title: 'Suite 27m² • interior'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-09-interna.jpg',
      alt: 'Interior YUME Suite 27m² 5',
      label: 'Imagem 09',
      title: 'Suite 27m² • interior'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-10-interna.jpg',
      alt: 'Interior YUME Suite 27m² 6',
      label: 'Imagem 10',
      title: 'Suite 27m² • interior'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-11-extra.jpg',
      alt: 'YUME Suite 27m² imagem complementar 1',
      label: 'Imagem 11',
      title: 'Suite 27m² • detalhes'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-12-extra.jpg',
      alt: 'YUME Suite 27m² imagem complementar 2',
      label: 'Imagem 12',
      title: 'Suite 27m² • detalhes'
    },
    {
      src: 'assets/carrossel-suite-27m/yume-suite-13-extra.jpg',
      alt: 'YUME Suite 27m² imagem complementar 3',
      label: 'Imagem 13',
      title: 'Suite 27m² • detalhes'
    }
  ]
};

const carousel = document.querySelector('[data-model-carousel]');
const carouselImage = document.querySelector('[data-carousel-image]');
const carouselLabel = document.querySelector('[data-carousel-label]');
const carouselTitle = document.querySelector('[data-carousel-title]');
const carouselPrev = document.querySelector('[data-carousel-prev]');
const carouselNext = document.querySelector('[data-carousel-next]');
const carouselDots = document.querySelector('[data-carousel-dots]');
let carouselIndex = 0;

function getActiveCarouselSlides() {
  return carouselSlides[activeModelKey] || carouselSlides.studio;
}

function renderCarouselDots() {
  if (!carouselDots) return;
  const slides = getActiveCarouselSlides();
  carouselDots.innerHTML = slides.map((slide, index) => (
    `<button class="carousel-dot${index === carouselIndex ? ' active' : ''}" type="button" aria-label="Mostrar ${slide.label}" data-carousel-dot="${index}"></button>`
  )).join('');
}

function showCarouselSlide(index) {
  const slides = getActiveCarouselSlides();
  if (!carouselImage || !slides.length) return;
  carouselIndex = (index + slides.length) % slides.length;
  const slide = slides[carouselIndex];
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
showCarouselSlide(0);
