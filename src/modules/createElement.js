export const createElement = (tag, attr, {append, appends, parent, cb} = {}) => {
   const element = document.createElement(tag);

   if (attr) {
      // проверяем, если есть или передан атрибут
      Object.assign(element, attr);
      // если аттрибут есть, то мы объеденяем элемент с аттрибутом
   }

   if (append && append instanceof HTMLElement) {
      // проверяем, если атрибут является HTML элементом
      element.append(append);
      // вставляем элемент в желаемый "контейнер"
   }

   if (appends && appends.every(item => item instanceof HTMLElement) ) {
      // при добавлении нескольких элементов,
      // проверяем каждый элемент, методом перебора every() является ли он HTML элементом
      // если хотябы один элемент не пройдёт проверку, ничего добавлено не будет
      element.append(...appends);
      // чтобы добавить несколько элементов, нужн оприменить spread оператор
   }

   if (parent && parent instanceof HTMLElement) {
      // проверять необходимо в том числе и parent,
      // чтобы в последствии проект работал нормально без ошибок
      parent.append(element);
   }

   if (cb && typeof cb === 'function')  {
      // проверяем является ли cb(callback) функцией
      cb(element);
      // выполяем фугкцию
   }

   return element;
};