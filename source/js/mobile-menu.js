import {ScrollLock} from './utils/scroll-lock';

const headerElement = document.querySelector('.header__container');
const headerToggleElement = document.querySelector('.header__navigation-toggle');

window.scrollLock = new ScrollLock();

const closeMenu = function () {
  headerElement.classList.add('is-close');
  headerElement.classList.remove('is-open');
  window.scrollLock.enableScrolling();
};

headerToggleElement.addEventListener('click', () => {
  if (headerElement.classList.contains('is-close')) {
    headerElement.classList.toggle('is-close');
    headerElement.classList.toggle('is-open');
    window.scrollLock.disableScrolling();
    if (headerElement.classList.contains('is-open')) {
      const linkElements = document.querySelectorAll('.header__navigation-link');
      linkElements.forEach((link) => {
        link.addEventListener('click', closeMenu);
      });
    }
  } else {
    headerElement.classList.toggle('is-close');
    headerElement.classList.toggle('is-open');
    window.scrollLock.enableScrolling();
  }
});


// headerElement.addEventListener('click', () => {
//   window.scrollLock.enableScrolling();
// })

