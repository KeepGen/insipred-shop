export const renderProduct = () => {
   const products = document.querySelector('.goods');

   products.innerHTML = `
      <div class="container">
         <h2 class="goods__title">новинки</h2>

         <ul class="goods__list">
            <li class="goods__item">
               <article class="product">
                  <a href="#" class="product__link">
                     <img src="img/product01.png" alt="Бюстгальтер-Балконет Bien из Микрофибры" class="product__image">
                     <h3 class="product__title">Бюстгальтер-Балконет Bien из Микрофибры</h3>
                  </a>

                  <div class="product__row">
                     <p class="product__price">руб 1799</p>
                     <button class="product__btn-favorite product__btn-favorite_active" aria-label="Добавить в избранное"></button>
                  </div><!-- /.product__row -->

                  <ul class="product__color-list">
                     <li class="product__color-item">
                        <div class="color color_red color_check"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_brown"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_black"></div>
                     </li><!-- /.product__color-item-->
                  </ul>
               </article>
            </li><!-- /.goods__item -->

            <li class="goods__item">
               <article class="product">
                  <a href="#" class="product__link">
                     <img src="img/product02.jpg" alt="Бюстгальтер-Балконет Bien из Микрофибры" class="product__image">
                     <h3 class="product__title">Бюстгальтер-Балконет Bien из Микрофибры</h3>
                  </a>

                  <div class="product__row">
                     <p class="product__price">руб 1799</p>
                     <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
                  </div><!-- /.product__row -->

                  <ul class="product__color-list">
                     <li class="product__color-item">
                        <div class="color color_red color_check"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_brown"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_black"></div>
                     </li><!-- /.product__color-item-->
                  </ul>
               </article>
            </li><!-- /.goods__item -->

            <li class="goods__item">
               <article class="product">
                  <a href="#" class="product__link">
                     <img src="img/product01.png" alt="Бюстгальтер-Балконет Bien из Микрофибры" class="product__image">
                     <h3 class="product__title">Бюстгальтер-Балконет Bien из Микрофибры</h3>
                  </a>

                  <div class="product__row">
                     <p class="product__price">руб 1799</p>
                     <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
                  </div><!-- /.product__row -->

                  <ul class="product__color-list">
                     <li class="product__color-item">
                        <div class="color color_red color_check"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_brown"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_black"></div>
                     </li><!-- /.product__color-item-->
                  </ul>
               </article>
            </li><!-- /.goods__item -->

            <li class="goods__item">
               <article class="product">
                  <a href="#" class="product__link">
                     <img src="img/product02.jpg" alt="Бюстгальтер-Балконет Bien из Микрофибры" class="product__image">
                     <h3 class="product__title">Бюстгальтер-Балконет Bien из Микрофибры</h3>
                  </a>

                  <div class="product__row">
                     <p class="product__price">руб 1799</p>
                     <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
                  </div><!-- /.product__row -->

                  <ul class="product__color-list">
                     <li class="product__color-item">
                        <div class="color color_red color_check"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_brown"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_black"></div>
                     </li><!-- /.product__color-item-->
                  </ul>
               </article>
            </li><!-- /.goods__item -->

            <li class="goods__item">
               <article class="product">
                  <a href="#" class="product__link">
                     <img src="img/product01.png" alt="Бюстгальтер-Балконет Bien из Микрофибры" class="product__image">
                     <h3 class="product__title">Бюстгальтер-Балконет Bien из Микрофибры</h3>
                  </a>

                  <div class="product__row">
                     <p class="product__price">руб 1799</p>
                     <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
                  </div><!-- /.product__row -->

                  <ul class="product__color-list">
                     <li class="product__color-item">
                        <div class="color color_red color_check"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_brown"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_black"></div>
                     </li><!-- /.product__color-item-->
                  </ul>
               </article>
            </li><!-- /.goods__item -->

            <li class="goods__item">
               <article class="product">
                  <a href="#" class="product__link">
                     <img src="img/product02.jpg" alt="Бюстгальтер-Балконет Bien из Микрофибры" class="product__image">
                     <h3 class="product__title">Бюстгальтер-Балконет Bien из Микрофибры</h3>
                  </a>

                  <div class="product__row">
                     <p class="product__price">руб 1799</p>
                     <button class="product__btn-favorite" aria-label="Добавить в избранное"></button>
                  </div><!-- /.product__row -->

                  <ul class="product__color-list">
                     <li class="product__color-item">
                        <div class="color color_red color_check"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_brown"></div>
                     </li><!-- /.product__color-item-->
                     <li class="product__color-item">
                        <div class="color color_black"></div>
                     </li><!-- /.product__color-item-->
                  </ul>
               </article>
            </li><!-- /.goods__item -->
         </ul>
      </div><!-- /.container -->
   `;
}