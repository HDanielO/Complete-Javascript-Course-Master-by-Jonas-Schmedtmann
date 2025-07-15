'use strict';

///////////////////////////////////////
// DOM Elements

const nav = document.querySelector('.nav');
const navLogo = document.querySelector('.nav__logo');
const navItems = document.querySelectorAll('.nav__link');
const sectionElement = document.querySelectorAll('.section');
const featuresImgs = document.querySelectorAll('.features__img');
const operationTabElms = document.querySelectorAll('.operations__tab');
const operationContentElms = document.querySelectorAll('.operations__content');
const slideElms = document.querySelectorAll('.slide');
const slideBtnLeft = document.querySelector('.slider__btn--left');
const slideBtnRight = document.querySelector('.slider__btn--right');
const dotBtns = document.querySelectorAll('.dots__dot');
const featuresDiv = document.querySelector('#section--1');

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
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  }
);

sectionElement.forEach(secELm => {
  secELm.classList.add('section--hidden');
  observerSection.observe(secELm);
});

const observerFeaturesImgs = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.dataset.src) {
          entry.target.src = entry.target.dataset.src;
          // when we change the src, the image loads so we want the blur filter to be removed after the image has been loaded
          entry.target.addEventListener('load', () => {
            entry.target.removeAttribute('data-src');
            entry.target.classList.remove('lazy-img');
            observer.unobserve(entry.target);
          });
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

operationTabElms.forEach((operationTabElm, i) => {
  operationTabElm.addEventListener('click', () => {
    operationTabElms.forEach(tab =>
      tab.classList.remove('operations__tab--active')
    );
    operationContentElms.forEach(content =>
      content.classList.remove('operations__content--active')
    );
    operationTabElm.classList.add('operations__tab--active');
    operationContentElms[i].classList.add('operations__content--active');
  });
});

let currentSlideELms = 0;

const goToSlide = function (currSli) {
  slideElms.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - currSli)}%)`;
  });
};

goToSlide(currentSlideELms);

const setActiveDotBtn = function (curr) {
  dotBtns.forEach(dotBtn => {
    dotBtn.classList.remove('dots__dot--active');
  });
  dotBtns[curr].classList.add('dots__dot--active');
};

slideBtnRight.addEventListener('click', () => {
  if (currentSlideELms === slideElms.length - 1) {
    currentSlideELms = 0;
  } else {
    currentSlideELms++;
  }

  goToSlide(currentSlideELms);
  setActiveDotBtn(currentSlideELms);
});

slideBtnLeft.addEventListener('click', () => {
  if (currentSlideELms === 0) {
    currentSlideELms = slideElms.length - 1;
  } else {
    currentSlideELms--;
  }

  goToSlide(currentSlideELms);
  setActiveDotBtn(currentSlideELms);
});

dotBtns.forEach((dotBtn, i) => {
  dotBtn.addEventListener('click', () => {
    goToSlide(i);
    setActiveDotBtn(i);
  });
});

// CAM BE MADE BETTER WITH INTERSECTIONOBSERVER API

// YOU JUST NEED IT TO OBSERVE THE HEADER , WITH A THRESHOLD OF 0 BUT WHEN IT IS NOT INTERSECTION SO YOUR ADDING OF STICKY CLASS WILL RUN WHEN THE ISINTERSECTING IS FALSE

document.addEventListener('scroll', () => {
  const featuresDivPosition =
    featuresDiv.getBoundingClientRect().top + window.scrollY;
  if (window.scrollY >= featuresDivPosition) {
    nav.classList.add('sticky');
  } else if (window.scrollY < featuresDivPosition) {
    nav.classList.remove('sticky');
  }
});
