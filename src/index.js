import './index.html';
import './index.scss';

import {router} from "./modules/router";
import { mainPage } from './modules/mainPage/mainPage';
import { renderFooter } from './modules/render/renderFooter';
import { renderHeader } from './modules/render/renderHeader';

import { womenMainPage } from './modules/mainPage/womenMainPage';
import { menMainPage } from './modules/mainPage/menMainPage';

router.on('*', ()=> {
   renderHeader();
   renderFooter();
});
// навешиваем событие (*) – есть в строке адрес, неважно какой,
// то вызываем () => {вложенные функции}

router.on('/', ()=> {
   mainPage();
});
// если адрес начинается с (/), тогда вызываем () => {вложенные функции}

router.on('women', ()=> {
   womenMainPage();
});

router.on('men', ()=> {
   menMainPage();
});
// если страница (men), тогда вызываем соответствующую функцию
// также и с примером выше, страница women

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// setTimeout(() => {
//    router.navigate('men');
// }, 3000);
//
// setTimeout(() => {
//    router.navigate('women');
// }, 6000);
// осуществляем автопереход на соответствующую страницу через 3-6 сек.
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

router.resolve();
// активируем router,
// вызываем функцию resolve() для начала работы.