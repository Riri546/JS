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
    <section class="top__info" v-for="info in top__info" :key="info.id">
      <div class="top__info_content">
        <h1 class="top__info_title">{{ info.title }}</h1>
        <p class="top__info_text">{{ info.text }}</p>
        <div class="button">
          <button class="button__top__info">{{ info.button_name }}<span class="button__img"><svg
                xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                  stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              </svg></span>
          </button>
        </div>
      </div>
    </section>
    <header class="products" v-for="product in products" :key="product.id">
      <h1 class="products__title">{{ product.title }}</h1>
      <p class="products__text">{{ product.text }}</p>
    </header>
    <section class="catalog">
      <figure class="element" v-for="element in elements" :key="element.id">
        <img :class="element.class" src="../assets/img/catalog/Photo.jpg" :alt="alt">
        <figcaption class="catalog__about">
          <div class="catalog__about__link">
            <div class="about">
              <h2 class="catalog__title">{{ element.title }}</h2>
              <p class="catalog__text">{{ element.text }}</p>
            </div>
            <div class="link">
              <a class="catalog__link" :href="element.link"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                  viewBox="0 0 70 70" fill="none">
                  <circle class="catalog__link_color" cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg></a>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
<section class="company">
      <article class="item" v-for="item in items" :key="item.id">
        <h2 class="company__title">{{ item.title }}</h2>
        <p class="company__text">{{ item.text }}</p>
      </article>

      <article class="item">
        <h2 class="company__title">15</h2>
        <p class="company__text"></p>
      </article>
      <article class="item item__none">
        <h2 class="company__title">95</h2>
        <p class="company__text"></p>
      </article>
    </section>
        <!-- <section class="blog">
      <h2 class="blog__title">
        Articles & News
      </h2>
      <p class="blog__text">
        It is a long established fact that a reader will be distracted by the of readable content of a page when
        lookings at its layouts the points of using.
      </p>
      <div class="blog__items">
        <div class="blog__item">
          <img src="../assets/img/Image_blog1.svg" alt="photo" class="blog__item_img">
          <a href="blog.html" class="blog__item_tag">Kitchan Design</a>
          <p class="blog__item_text">
            Let’s Get Solution For Building Construction Work
          </p>
          <div class="blog__item_content">
            <div class="blog__item_content-date">26 December,2022 </div>
            <a href="blog.html" class="blog__item_content-elem">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div class="blog__item">
          <img src="../assets/img/Image_blog2.svg" alt="photo" class="blog__item_img">
          <a href="blog.html" class="blog__item_tag">Living Design</a>
          <p class="blog__item_text">
            Low Cost Latest Invented Interior Designing
            Ideas.
          </p>
          <div class="blog__item_content">
            <div class="blog__item_content-date">22 December,2022 </div>
            <a href="blog.html" class="blog__item_content-elem">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div class="blog__item">
          <img src="../assets/img/Image_blog3.svg" alt="photo" class="blog__item_img">
          <a href="blog.html" class="blog__item_tag">Interior Design</a>
          <p class="blog__item_text">
            Best For Any Office & Business Interior
            Solution
          </p>
          <div class="blog__item_content">
            <div class="blog__item_content-date">25 December,2022 </div>
            <a href="blog.html" class="blog__item_content-elem">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    <footer class="foot">
      <section class="foot__about">
        <a href="index.html" class="foot__logo"><svg width="178" height="50" viewBox="0 0 178 50" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M45.38 39V38.6L46.18 38.28C46.7133 38.0933 47.06 37.84 47.22 37.52C47.4067 37.2 47.5 36.7733 47.5 36.24V15.36C47.5 14.8267 47.42 14.4 47.26 14.08C47.1 13.76 46.74 13.5067 46.18 13.32L45.38 13V12.6H55.66V13L54.86 13.32C54.3267 13.5067 53.9667 13.76 53.78 14.08C53.62 14.4 53.54 14.8267 53.54 15.36V36.24C53.54 36.7733 53.62 37.2 53.78 37.52C53.9667 37.8133 54.3267 38.0667 54.86 38.28L55.66 38.6V39H45.38ZM57.3313 39V38.6L57.8913 38.44C58.8246 38.1733 59.2913 37.52 59.2913 36.48V23.96C59.2913 23.3733 59.1979 22.9467 59.0113 22.68C58.8246 22.3867 58.4646 22.1867 57.9313 22.08L57.3313 21.92V21.52L64.1713 19.2L64.5713 19.6L64.8913 22C65.8246 21.1733 66.8779 20.4933 68.0513 19.96C69.2246 19.4267 70.3846 19.16 71.5313 19.16C73.2913 19.16 74.6379 19.64 75.5713 20.6C76.5313 21.56 77.0113 23.0267 77.0113 25V36.52C77.0113 37.56 77.5179 38.2133 78.5313 38.48L78.8913 38.6V39H69.4513V38.6L69.9713 38.44C70.9046 38.1467 71.3713 37.4933 71.3713 36.48V23.72C71.3713 22.0133 70.5179 21.16 68.8113 21.16C67.6379 21.16 66.3579 21.7467 64.9713 22.92V36.52C64.9713 37.56 65.4379 38.2133 66.3713 38.48L66.7313 38.6V39H57.3313ZM87.8609 39.6C86.1543 39.6 84.8209 39.1733 83.8609 38.32C82.9276 37.4667 82.4609 36.1067 82.4609 34.24V20.56H79.7009V20.16L80.6609 20C81.4876 19.8133 82.1943 19.5467 82.7809 19.2C83.3943 18.8533 83.9943 18.3867 84.5809 17.8L87.8609 14.16H88.2609L88.1409 19.76H92.6209V20.56H88.1009V34.96C88.1009 35.8933 88.3009 36.6 88.7009 37.08C89.1276 37.56 89.6609 37.8 90.3009 37.8C90.8609 37.8 91.3543 37.6667 91.7809 37.4C92.2076 37.1067 92.6343 36.72 93.0609 36.24L93.4609 36.64C92.9276 37.5467 92.1943 38.2667 91.2609 38.8C90.3276 39.3333 89.1943 39.6 87.8609 39.6ZM104.637 19.16C106.37 19.16 107.85 19.52 109.077 20.24C110.304 20.9333 111.237 21.8933 111.877 23.12C112.544 24.32 112.877 25.6933 112.877 27.24C112.877 27.5333 112.864 27.84 112.837 28.16C112.81 28.4533 112.757 28.72 112.677 28.96H100.757C100.784 31.84 101.29 33.92 102.277 35.2C103.29 36.4533 104.784 37.08 106.757 37.08C108.09 37.08 109.17 36.8667 109.997 36.44C110.824 36.0133 111.597 35.3867 112.317 34.56L112.717 34.92C111.89 36.3867 110.784 37.5333 109.397 38.36C108.037 39.1867 106.397 39.6 104.477 39.6C102.584 39.6 100.904 39.2 99.4369 38.4C97.9702 37.5733 96.8235 36.4 95.9969 34.88C95.1702 33.36 94.7569 31.5467 94.7569 29.44C94.7569 27.2533 95.2369 25.4 96.1969 23.88C97.1569 22.3333 98.3835 21.16 99.8769 20.36C101.397 19.56 102.984 19.16 104.637 19.16ZM104.517 19.96C103.744 19.96 103.077 20.2 102.517 20.68C101.984 21.1333 101.557 21.96 101.237 23.16C100.944 24.3333 100.784 26 100.757 28.16H107.597C107.864 25.2533 107.757 23.16 107.277 21.88C106.797 20.6 105.877 19.96 104.517 19.96ZM114.87 39V38.6L115.47 38.44C116.004 38.28 116.364 38.04 116.55 37.72C116.764 37.4 116.87 36.9867 116.87 36.48V23.96C116.87 23.3733 116.764 22.9467 116.55 22.68C116.364 22.3867 116.004 22.1867 115.47 22.08L114.87 21.92V21.52L121.75 19.2L122.15 19.6L122.51 23.04V23.36C122.884 22.6133 123.364 21.9333 123.95 21.32C124.564 20.68 125.23 20.16 125.95 19.76C126.697 19.36 127.43 19.16 128.15 19.16C129.164 19.16 129.937 19.44 130.47 20C131.004 20.56 131.27 21.2667 131.27 22.12C131.27 23.0267 131.004 23.7333 130.47 24.24C129.964 24.72 129.35 24.96 128.63 24.96C127.51 24.96 126.524 24.4 125.67 23.28L125.59 23.2C125.324 22.8267 125.017 22.6267 124.67 22.6C124.324 22.5467 124.004 22.7067 123.71 23.08C123.444 23.32 123.217 23.6133 123.03 23.96C122.87 24.28 122.71 24.6533 122.55 25.08V36.24C122.55 37.3067 123.017 37.9733 123.95 38.24L125.23 38.6V39H114.87ZM132.527 39V38.6L133.087 38.44C134.02 38.1733 134.487 37.52 134.487 36.48V23.96C134.487 23.3733 134.393 22.9467 134.207 22.68C134.02 22.3867 133.66 22.1867 133.127 22.08L132.527 21.92V21.52L139.367 19.2L139.767 19.6L140.087 22C141.02 21.1733 142.073 20.4933 143.247 19.96C144.42 19.4267 145.58 19.16 146.727 19.16C148.487 19.16 149.833 19.64 150.767 20.6C151.727 21.56 152.207 23.0267 152.207 25V36.52C152.207 37.56 152.713 38.2133 153.727 38.48L154.087 38.6V39H144.647V38.6L145.167 38.44C146.1 38.1467 146.567 37.4933 146.567 36.48V23.72C146.567 22.0133 145.713 21.16 144.007 21.16C142.833 21.16 141.553 21.7467 140.167 22.92V36.52C140.167 37.56 140.633 38.2133 141.567 38.48L141.927 38.6V39H132.527ZM165.772 39.6C163.745 39.6 161.985 39.1867 160.492 38.36C158.998 37.5067 157.838 36.3067 157.012 34.76C156.212 33.2133 155.812 31.4 155.812 29.32C155.812 27.24 156.238 25.44 157.092 23.92C157.972 22.4 159.158 21.2267 160.652 20.4C162.172 19.5733 163.878 19.16 165.772 19.16C167.665 19.16 169.358 19.5733 170.852 20.4C172.345 21.2 173.518 22.36 174.372 23.88C175.252 25.4 175.692 27.2133 175.692 29.32C175.692 31.4267 175.278 33.2533 174.452 34.8C173.652 36.32 172.505 37.5067 171.012 38.36C169.545 39.1867 167.798 39.6 165.772 39.6ZM165.772 38.8C166.705 38.8 167.452 38.5333 168.012 38C168.572 37.4667 168.972 36.52 169.212 35.16C169.478 33.8 169.612 31.88 169.612 29.4C169.612 26.8933 169.478 24.96 169.212 23.6C168.972 22.24 168.572 21.2933 168.012 20.76C167.452 20.2267 166.705 19.96 165.772 19.96C164.838 19.96 164.078 20.2267 163.492 20.76C162.932 21.2933 162.518 22.24 162.252 23.6C162.012 24.96 161.892 26.8933 161.892 29.4C161.892 31.88 162.012 33.8 162.252 35.16C162.518 36.52 162.932 37.4667 163.492 38C164.078 38.5333 164.838 38.8 165.772 38.8Z"
              fill="#292F36" />
            <path
              d="M0.5 42.0003H13.9588V32.499C13.9588 30.4853 15.5898 28.8543 17.6035 28.8543C19.6172 28.8543 21.2482 30.4853 21.2482 32.499V42.0003H34.4975V8C15.7211 8 0.5 23.2211 0.5 42.0003Z"
              fill="#CDA274" />
          </svg>
        </a>
        <p class="foot__text">It is a long established fact that a reader will be distracted lookings.</p>
        <div class="foot__social">
          <a href="#" class="foot__icon"><svg width="19" height="16" viewBox="0 0 19 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path class="foot__social_icon"
                d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
                fill="#292F36" />
            </svg>
          </a>
          <a href="#" class="foot__icon"><svg width="17" height="16" viewBox="0 0 17 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path class="foot__social_icon"
                d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
                fill="#292F36" />
            </svg>
          </a>
        </div>
      </section>
      <section class="foot__navigation">
        <h2 class="foot__title">Pages</h2>
        <nav>
          <a href="index.html" class="foot__link">Home</a>
        </nav>
        <nav>
          <a href="prodject.html" class="foot__link">Project</a>
        </nav>
        <nav>
          <a href="blog.html" class="foot__link">Blog</a>
        </nav>
      </section>
      <sectionc class="foot__contact">
        <h2 class="foot__title">Contact</h2>
        <article class="foot__info">
          <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        </article>
        <article class="foot__info">
          <a class="foot__link" href="#">contact@interno.com</a>
        </article>
        <article class="foot__info">
          <p>(123) 456 - 7890</p>
        </article>
      </sectionc>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data() {
    return {
      head__logo: [
        { link: 'HomePage.vue', img: "../assets/img/logo.svg", alt: 'logo' }],
      head__icons: [
        { link: 'HomePage.vue', name: 'Home' },
        { link: 'HomePage.vue', name: 'Project' },
        { link: 'HomePage.vue', name: 'Blog' }],
      top__info: [{
        title: 'Let Your Home Be Unique',
        text: 'There are many variations of the passages of lorem Ipsum fromavailable,majority.',
        button_name: 'Get Started'
      }],
      products: [{
        title: 'Follow Our Projects',
        text: 'It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.'
      }],
      elements: [
        { class: 'catalog__img1', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', },
        { class: 'catalog__img2', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', },
        { class: 'catalog__img3', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', },
        { class: 'catalog__img4', alt: 'photo catalog', title: 'Modern Kitchan', text: 'Decor / Artchitecture', link: 'prodject.html', }],
        items: [
          {title: '12', text:'Years Of Experiance'},
          {title: '85', text:'Success Project'},
          {title: '15', text:'Active Project'},
          {title: '95', text:'Happy CUstomers'}]

    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.catalog__link_color {
  transition: 0.7s;
}

.catalog__link:hover {
  stroke: #292F36;
}

.catalog__link_color:hover {
  fill: #FFF;
}
</style>
