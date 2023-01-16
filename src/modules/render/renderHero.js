import {createElement} from "../createElement";

export const renderHero = (gender) => {
   const hero = document.querySelector('.hero');

   if (!gender) {
      hero.style.display = 'none';
      return
   }

   hero.style.display = '';
   hero.className = `hero hero__${gender}`;

   const container = createElement('div', {
      className: 'container',
   }, {
      parent: hero,
   });

   createElement('div', {
      className: 'hero__content',
      innerHTML: `
         <h2 class="hero__title">Новая коллекция Бюстгальтер-балконет</h2>
         <a href="#" class="hero__link">Перейти</a>
      `,
   }, {
      parent: container,
   });
};