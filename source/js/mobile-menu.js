import {ScrollLock} from './utils/scroll-lock';

const headerNavElement = document.querySelector('.header__navigation');
const headerElement = document.querySelector('.header__container');
const headerToggleElement = document.querySelector('.header__navigation-toggle');
const linkElements = document.querySelectorAll('.header__navigation-link');

window.scrollLock = new ScrollLock();

const closeMenu = function () {
  headerElement.classList.add('is-close');
  headerElement.classList.remove('is-open');
  window.scrollLock.enableScrolling();
};

const closeOnOutBoundaries = function () {
  document.addEventListener('click', (evt) => {
    const withinBoundaries = evt.composedPath().includes(headerNavElement);
    if (!withinBoundaries) {
      closeMenu();
    }
  });
};

headerToggleElement.addEventListener('click', () => {
  if (headerElement.classList.contains('is-close')) {
    headerElement.classList.toggle('is-close');
    headerElement.classList.toggle('is-open');
    window.scrollLock.disableScrolling();
    if (headerElement.classList.contains('is-open')) {
      linkElements.forEach((link) => {
        link.addEventListener('click', closeMenu);
      });
      closeOnOutBoundaries();
    }
  } else {
    headerElement.classList.toggle('is-close');
    headerElement.classList.toggle('is-open');
    window.scrollLock.enableScrolling();
  }
});


