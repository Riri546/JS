"use strict"

/*
2. Страница просмотра отзывов.
Показывает список всех продуктов, на которые были оставлены отзывы.
Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" (надпись кнопки меняется), при нажатии на которую показываются / скрываются отзывы продукта.
После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв из localstorage и со страницы.
Если удалены все отзывы продукта, то продукта вовсе должены быть удален, как из localstorage, так и со страницы.
*/

const outputRewiew = document.querySelector('.output__rewiew');


for (let index = 0; index < localStorage.length; index++) {

   let product = localStorage.key(index);
   let rewiewList = JSON.parse(localStorage.getItem(product));

   const wrapProduct = document.createElement("div");
   outputRewiew.insertAdjacentElement("beforeend", wrapProduct);

   wrapProduct.insertAdjacentHTML("beforeend", `
      <h2>${product} <button onclick="showRewiew(this)">показать отзывы</button> </h2>`
   );

   const wrapRewiews = document.createElement("div");
   wrapRewiews.hidden = true;
   wrapProduct.insertAdjacentElement("beforeend", wrapRewiews);


   rewiewList.forEach(element => {
      const rewiewItem = document.createElement("div");
      wrapRewiews.insertAdjacentElement("beforeend", rewiewItem);

      const rewiewText = document.createElement("span");
      rewiewText.textContent = element;
      rewiewItem.insertAdjacentElement("beforeend", rewiewText);

      rewiewItem.insertAdjacentHTML("beforeend", " ");

      rewiewItem.insertAdjacentElement("beforeend",
         createdButtonDelete(rewiewText, rewiewList, product));

      rewiewItem.insertAdjacentHTML("beforeend", "<br><br>");
   });
}

function createdButtonDelete (bRewiewText, bRewiewList, bProduct) {

   const btnDelete = document.createElement("button");
   btnDelete.textContent = "Удалить";

   btnDelete.addEventListener("click", () => {
      if (bRewiewList.length > 1) {
         let indexItem = bRewiewList.findIndex((element) => element === bRewiewText.textContent);
         bRewiewList.splice(indexItem, 1);
         localStorage.setItem(bProduct, JSON.stringify(bRewiewList));
      } else {
         localStorage.removeItem(bProduct);
         btnDelete.parentElement.parentElement.parentElement.remove();
      }
      bRewiewText.parentElement.remove();
      btnDelete.remove();
   });

   return btnDelete;
}

function showRewiew (elem) {
   let hiddenElement = elem.parentElement.parentElement.lastChild;
   if (hiddenElement.hidden) {
      hiddenElement.hidden = false;
      elem.textContent = "скрыть отзывы";
   } else {
      hiddenElement.hidden = true;
      elem.textContent = "показать отзывы";
   }
}