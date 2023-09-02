// const content = document.querySelector('.content');
// content.classList.add('center');

// const contentItems = document.createElement('div');
// contentItems.classList.add('content__items');
// content.append(contentItems);

// let count = 0;

// setTimeout(function getData() {

//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(dog => {
//             const contentItem = document.createElement('div');
//             contentItem.classList.add('item');
//             contentItems.append(contentItem);

//             const contentImage = document.createElement('img');
//             contentImage.classList.add('item__image');
//             contentImage.setAttribute('src', 'alt');
//             contentImage.src = `${dog.message}`;
//             contentImage.alt = 'item photo';
//             contentItem.append(contentImage);
//         })
//         .catch((error) => console.log(error.message));

//     count++;

//     if (count < 10) {
//         setTimeout(getData, 3000);
//     }
// }, 3000);

