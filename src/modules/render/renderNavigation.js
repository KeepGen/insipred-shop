import {createElement} from "../createElement";
import {dataNavigation} from "../navigation";

export const renderNavigation = (gender = 'women') => {
   const navigation = document.querySelector('.navigation');

   navigation.textContent = '';
   // очищаем содержимое каждый раз когда переключаемся между категориями
   // потому что у каждой категории совй класс

   const container = createElement('div', {
      className: 'container',
   }, {
      parent: navigation,
   });

   const genderList = createElement('ul', {
      className: 'navigation__gender gender',
   }, {
      parent: container,
   });

   for (const genderName in dataNavigation) {
      // перебираем полученные данные из dataNavigation
      // в нашем случае первые ключи (women или men)
      createElement('a', {
         className: `gender__link
            ${gender === genderName ? 'gender__link_active' : ''}`,
         // создаем элемент A
         // проверяем, если при клике в меню был выбран соотвествующий пол
         // если совпадает, добавить класс active, если нет – ничего не добавлять
         href: `#/${genderName}`,
         // зависит от genderName. При наличии # в ссылке, страница не будет перезагружаться
         textContent: dataNavigation[genderName].title,
      }, {
         parent: createElement('li', {
            className: 'gender__item',
         }, {
            parent: genderList,
         }),
      });
   };

   const categoryElems = dataNavigation[gender].list.map((item) =>
      createElement('li', {
         className: 'category__item',
      }, {
         append: createElement('a', {
            className: 'category__link',
            textContent: item.title,
            href: `#/${gender}/${item.slug}`,
         }, {
            cb(elem) {
               elem.addEventListener('click', () => {
                  document.querySelector('.category__link_active')?.classList.remove('category__link_active');
                  // ищем на странице элемент с классом active. Если находим — удаляем класс active
                  elem.classList.add('category__link_active');
                  // а на элемент на который кликнули, мы добавляем
               })
            }
            // создаём callback с условием — если был клик на элементе
         }),

      })
   );
   // создаём на основе dataNavigation с ключом "gender" и обращаемся к свойству "list"
   // map для того, чтобы возвращать данные
   //

   createElement('ul', {
      className: 'navigation__category category',
   }, {
      parent: container,
      appends: categoryElems,
   });
};