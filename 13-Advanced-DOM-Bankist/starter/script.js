'use strict';

///////////////////////////////////////
// DOM Elements

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

sectionElement.forEach(secELm => {
  secELm.classList.add('section--hidden');
  observerSection.observe(secELm);
});

const observerFeaturesImgs = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
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

slideElms.forEach((slideElm, i) => {
  if (i === 0) {
    slideElm.style.transform = 'translateX(0%)';
  } else if (i === 1) {
    slideElm.style.transform = 'translateX(100%)';
  } else if (i === 2) {
    slideElm.style.transform = 'translateX(200%)';
  }
});

slideBtnRight.addEventListener('click', () => {
  if (slideElms[0].style.transform === 'translateX(0%)') {
    slideElms[0].style.transform = 'translateX(-100%)';
    slideElms[1].style.transform = 'translateX(0%)';
    slideElms[2].style.transform = 'translateX(100%)';
    dotBtns.forEach(dotBtn => {
      dotBtn.classList.remove('dots__dot--active');
    });
    dotBtns[1].classList.add('dots__dot--active');
  } else if (slideElms[0].style.transform === 'translateX(-100%)') {
    slideElms[0].style.transform = 'translateX(-200%)';
    slideElms[1].style.transform = 'translateX(-100%)';
    slideElms[2].style.transform = 'translateX(0%)';
    dotBtns.forEach(dotBtn => {
      dotBtn.classList.remove('dots__dot--active');
    });
    dotBtns[2].classList.add('dots__dot--active');
  } else if (slideElms[0].style.transform === 'translateX(-200%)') {
    slideElms[0].style.transform = 'translateX(0%)';
    slideElms[1].style.transform = 'translateX(100%)';
    slideElms[2].style.transform = 'translateX(200%)';
    dotBtns.forEach(dotBtn => {
      dotBtn.classList.remove('dots__dot--active');
    });
    dotBtns[0].classList.add('dots__dot--active');
  }
});

slideBtnLeft.addEventListener('click', () => {
  if (slideElms[0].style.transform === 'translateX(0%)') {
    slideElms[0].style.transform = 'translateX(-200%)';
    slideElms[1].style.transform = 'translateX(-100%)';
    slideElms[2].style.transform = 'translateX(0%)';
    dotBtns.forEach(dotBtn => {
      dotBtn.classList.remove('dots__dot--active');
    });
    dotBtns[2].classList.add('dots__dot--active');
  } else if (slideElms[0].style.transform === 'translateX(-100%)') {
    slideElms[0].style.transform = 'translateX(0%)';
    slideElms[1].style.transform = 'translateX(100%)';
    slideElms[2].style.transform = 'translateX(200%)';
    dotBtns.forEach(dotBtn => {
      dotBtn.classList.remove('dots__dot--active');
    });
    dotBtns[0].classList.add('dots__dot--active');
  } else if (slideElms[0].style.transform === 'translateX(-200%)') {
    slideElms[0].style.transform = 'translateX(-100%)';
    slideElms[1].style.transform = 'translateX(0%)';
    slideElms[2].style.transform = 'translateX(100%)';
    dotBtns.forEach(dotBtn => {
      dotBtn.classList.remove('dots__dot--active');
    });
    dotBtns[1].classList.add('dots__dot--active');
  }
});
