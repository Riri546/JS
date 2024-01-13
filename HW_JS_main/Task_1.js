"use strict"

/*
1. Страница добавления отзыва о продукте.
Должна содержать форму с полем для ввода названия продукта и текстовое поле для текста отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
Необходимо реализовать проверку, оба поля должны быть заполнены, если это не так, необходимо выводить ошибку пользователю.
*/

const inputProduct = document.querySelector('.input__product');
const inputRewiew = document.querySelector('.input__rewiew');
const buttonSubmit = document.querySelector('.button__submit');
const messageError = document.querySelector('.message__error');

buttonSubmit.addEventListener("click", () => {
   const product = inputProduct.value;
   const rewiew = inputRewiew.value;
   if (product !== "" && rewiew !== "") {
      let store = JSON.parse(localStorage.getItem(product));
      if (store === null) {
         store = []
      }
      store.push(rewiew);
      localStorage.setItem(product, JSON.stringify(store));
   } else {
      messageError.textContent = "Введены не все поля ввода"
   }
});