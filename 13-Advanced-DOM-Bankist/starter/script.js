'use strict';

///////////////////////////////////////
// DOM Elements

const navLogo = document.querySelector('.nav__logo');
const navItems = document.querySelectorAll('.nav__link');
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// FUNCTIONS AND EVENT LISTENERS
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

window.addEventListener('load', () => {
  console.log('page is fully loaded');
  navLogo.classList.add('nav__logo_big');
});

navItems.forEach((nav, i) => {
  nav.addEventListener('mouseenter', () => {
    navItems.forEach((navOthers, ni) => {
      if (ni != i) {
        navOthers.style.opacity = '0.5';
      }
      navLogo.style.opacity = '0.5';
    });
  });
});

navItems.forEach((nav, i) => {
  nav.addEventListener('mouseleave', () => {
    navItems.forEach((navOthers, ni) => {
      if (ni != i) {
        navOthers.style.opacity = '1';
      }
      navLogo.style.opacity = '1';
    });
  });
});

const observerSection = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.remove('section--hidden');
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  }
);

const sectionElement = document.querySelectorAll('.section');

sectionElement.forEach(secELm => {
  secELm.classList.add('section--hidden');
  observerSection.observe(secELm);
});

const featuresImgs = document.querySelectorAll('.features__img');

const observerFeaturesImgs = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        if (entry.target.dataset.src) {
          entry.target.src = entry.target.dataset.src;
          entry.target.removeAttribute('data-src');
          entry.target.classList.remove('lazy-img');
        }
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }
);

featuresImgs.forEach(featureImg => {
  observerFeaturesImgs.observe(featureImg);
});
