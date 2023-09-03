<template>
    <div class="top">
      <header class="head">
        <nav class="head__navigation">
          <!-- Логотип с сылкой на главную страницу -->
          <div class="head__logo" v-for="head in head__logo" :key="head.id">
            <a :href="head.link"> <img src="../assets/img/logo.svg" :alt="head.alt"></a>
          </div>
  
          <!-- Иконки навигации -->
          <div class="head__icon">
            <div v-for="head__icon in head__icons" :key="head__icon.id">
              <a class="head__icon_link" :href="head__icon.link">{{ head__icon.name }}</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        head__logo: [{ link: './../public/index.html', img: "../assets/img/logo.svg", alt: 'logo' }],
  
        head__icons: [
          { link: 'HomePage.vue', name: 'Home' },
          { link: 'HomePage.vue', name: 'Project' },
          { link: 'HomePage.vue', name: 'Blog' }],
  
        top__info: [{ title: 'Let Your Home Be Unique', text: 'There are many variations of the passages of lorem Ipsum fromavailable,majority.', button_name: 'Get Started' }],
  
        products: [{ title: 'Follow Our Projects', text: 'It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.' }],
  
        elements: [
          { class: 'catalog__img1', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', },
          { class: 'catalog__img2', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', },
          { class: 'catalog__img3', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', },
          { class: 'catalog__img4', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', }],
  
        items: [
          { title: '12', text: 'Years Of Experiance' },
          { title: '85', text: 'Success Project' },
          { title: '15', text: 'Active Project' },
          { class: 'item__none', title: '95', text: 'Happy CUstomers' }],
  
        blogs: [{ title: 'Articles & News', text: 'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.' }],
  
        blog__items: [
          { stc: '../assets/img/Image_blog1.svg', alt: 'photo', link: 'blog.html', tag: 'Kitchan Design', item__text: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
          { stc: '../assets/img/Image_blog2.svg', alt: 'photo', link: 'blog.html', tag: 'Interior Design', item__text: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
          { stc: '../assets/img/Image_blog1.svg', alt: 'photo', link: 'blog.html', tag: 'Kitchan Design', item__text: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' }],
  
        footers: [{ link: 'HomePage.vue', text: 'It is a long established fact that a reader will be distracted lookings.', title: 'Page' }],
  
        foot__title: [{ title: 'Psge' }],
  
        foot__navigations: [
          { link: 'HomePage.vue', link__name: 'Home' },
          { link: 'prodject.html', link__name: 'Project' },
          { link: 'blog.html', link__name: 'Blog' }],
  
        foot__contacts: [{ title: 'Contact', address: '55 East Birchwood Ave. Brooklyn, New York 11201', mail: 'contact@interno.com', tel: '(123) 456 - 7890' }]
      };
    },
  }
  </script>
  
  
  <style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }
  
  body {
    font-family: 'Jost', sans-serif;
    font-family: 'DM Serif Display', serif;
  }
  
  a {
    text-decoration: none;
  }
  
  .head {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    padding-top: 53px;
    padding-bottom: 65px;
  }
  
  .head__navigation {
    font-family: 'Jost', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .head__icon {
    display: flex;
    gap: 40px;
  }
  
  .head__icon_link {
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
    transition: 0.7s;
  }
  
  .head__icon_link:hover {
    color: #CDA274;
  }
  
  .top__info {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
  }
  
  .top__info_content {
    border-radius: 70px;
    background: url(../assets/img/top__info_bac.svg), lightgray 50%/ cover no-repeat;
    padding: 200px 0px 210px 35px;
  }
  
  .top__info_title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 81.25px */
    max-width: 434px;
    padding-bottom: 18px;
  }
  
  .top__info_text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-bottom: 21px;
    letter-spacing: 0.22px;
    max-width: 434px;
  }
  
  .button__top__info {
    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    padding: 26px 49px;
    text-align: center;
    letter-spacing: 0.36px;
    transition: 0.7s;
  }
  
  .button__top__info:hover {
    background: #FFF;
    color: #292F36;
  }
  
  .button__img {
    padding-left: 10px
  }
  
  .products {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    padding-top: 95px;
    display: flex;
    flex-direction: column;
    align-items: center;
  
  
  }
  
  .products__title {
    color: #292F36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 8px;
    text-align: center;
    letter-spacing: 1px;
    max-width: 737px;
  }
  
  .products__text {
    color: #4D5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-bottom: 93px;
    text-align: center;
    letter-spacing: 0.22px;
    max-width: 737px;
  }
  
  .catalog {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    padding-bottom: 95px;
    display: grid;
    grid-template-columns: repeat(2, 552px);
    justify-content: space-between;
    justify-items: center;
    gap: 56px;
  }
  
  .element {
    transition: 1.2s;
  }
  
  .element:hover {
    transform: scale(1.1);
  }
  
  .catalog__img1 {
    border-radius: 0px 70px 0px 0px;
  }
  
  .catalog__img2 {
    border-radius: 70px 0px 0px 0px;
  }
  
  .catalog__img3 {
    border-radius: 0px 0px 70px 0px;
  }
  
  .catalog__img4 {
    border-radius: 0px 0px 0px 70px;
  }
  
  .catalog__about {
    padding-top: 24px;
    max-width: 547px;
  }
  
  .catalog__link {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  
  .catalog__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    padding-bottom: 4px;
    letter-spacing: 0.5px;
  }
  
  .catalog__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    letter-spacing: 0.22px;
  }
  
  .catalog__link {
    transition: 0.7s;
  }
  
  .catalog__about__link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  .catalog__link_color {
    transition: 0.7s;
  }
  
  .catalog__link:hover {
    stroke: #292F36;
  }
  
  .catalog__link_color:hover {
    fill: #FFF;
  }
  
  .company {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    display: grid;
    grid-template-columns: repeat(4, 246px);
    justify-content: space-between;
    padding-top: 151px;
    padding-bottom: 151px;
    background-color: #F4F0EC;
  }
  
  .item {
    border-right: 1px solid #CDA274;
    max-width: 246px;
  }
  
  .item__none {
    border-right: none;
  }
  
  .company__title {
    padding-bottom: 16px;
    max-width: 192px;
    text-align: center;
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 106.25px */
    letter-spacing: 1.7px;
  }
  
  .company__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    letter-spacing: 0.22px;
  }
  
  .blog {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 96px;
    margin-bottom: 96px;
  }
  
  .blog__title {
    color: #292F36;
    text-align: center;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: 1px;
  }
  
  .blog__text {
    color: #4D5053;
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    margin-bottom: 52px;
    width: 811px;
    text-align: center;
    letter-spacing: 0.22px;
  }
  
  .blog__items {
    display: flex;
    flex-direction: row;
    gap: 25px;
    flex-wrap: wrap;
  }
  
  .blog__item {
    position: relative;
    padding: 20px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    transition: 0.7s;
  }
  
  .blog__item_img {
    margin-bottom: 21px;
    border-radius: 60px 60px 0px 0px;
  }
  
  .blog__item_tag {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
    position: absolute;
    width: 124px;
    top: 247px;
    left: 40px;
    letter-spacing: 0.16px;
    background-color: #fff;
    border-radius: 8px 8px 8px 0px;
    padding: 7px 9px 10px 11px;
    transition: 0.7s;
  }
  
  .blog__item_text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    display: flex;
    width: 305px;
    height: 70px;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.5px;
    margin-bottom: 30px;
  }
  
  .blog__item_content {
    display: flex;
    width: 340px;
    align-items: center;
    gap: 65px;
  }
  
  .blog__item_content-date {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
    display: flex;
    width: 223px;
    height: 33px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  
  .circle {
    transition: 0.7s;
  }
  
  .blog__item:hover {
    background: #F4F0EC;
  }
  
  .blog__item:hover circle {
    fill: #fff;
  }
  
  .foot {
    padding-left: calc(50% - 1200px/2);
    padding-right: calc(50% - 1200px/2);
    display: grid;
    grid-template-columns: repeat(3, 340px);
    justify-content: space-between;
    padding-bottom: 134px;
  }
  
  .foot__logo {
    padding-bottom: 18px;
  }
  
  .foot__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-bottom: 31px;
    letter-spacing: 0.22px;
    max-width: 393px;
  }
  
  .foot__navigation {
    padding-left: 80px;
  }
  
  .foot__social {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 54px;
  }
  
  .foot__social_icon {
    transition: 0.7s;
  }
  
  .foot__social_icon:hover {
    fill: #CDA274;
    ;
  }
  
  .foot__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    padding-bottom: 9px;
  }
  
  .foot__link {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 300%;
    /* 66px */
    letter-spacing: 0.22px;
    transition: 0.7s;
  }
  
  .foot__link:hover {
    color: #CDA274;
  }
  
  
  .foot__contact {
    padding-left: 90px;
  }
  
  .foot__info {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-top: 17px;
    letter-spacing: 0.22px;
    max-width: 258px;
  }
  </style>
  