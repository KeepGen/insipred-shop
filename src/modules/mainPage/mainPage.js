import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero";
import { renderProduct } from "../render/renderProduct";

export const mainPage = (gender) => {
   renderNavigation(gender);
   // проверяем какой пол указан и выводим соответствующую часть на сайт
   renderHero(gender);
   // первый параметр будет проверять нужен ли render
   renderProduct();
}
