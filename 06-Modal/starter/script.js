'use strict';
const showModalButtons = document.querySelectorAll('.show-modal');
const closeModalButtons = document.querySelectorAll('.close-modal, .overlay');
const modals = document.querySelectorAll('.modal, .overlay');

const openModal = function () {
  modals.forEach(modal => {
    modal.classList.remove('hidden');
  });
};

const closeModal = function () {
  modals.forEach(modal => {
    modal.classList.add('hidden');
  });
};

showModalButtons.forEach(showModalBtn => {
  showModalBtn.addEventListener('click', openModal);
});

closeModalButtons.forEach(closeModalBtn => {
  closeModalBtn.addEventListener('click', closeModal);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});