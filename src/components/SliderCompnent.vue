<template>
  <div class="slider">
    <div class="slider-container">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(slide, id) in slides" :key="id">
          <img
            :src="require(`@/assets/img/sliderimg/${slide.image}`)"
            :alt="'Slide ' + index"
            class="slide-image"
          />
          <h3>Premium 9000 0W-30A5/B5, SP</h3>
        </swiper-slide>

        <!-- Добавляем пагинацию (точки) 
        <div class="swiper-pagination" slot="pagination"></div>-->

        <!-- Добавляем кнопки навигации (стрелки) 
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "SliderComponent",
  data() {
    return {
      slides: [
        { id: 0, image: "slider1.png", text: "11111" },
        { id: 1, image: "slider2.png", text: "11111" },
        { id: 2, image: "slider3.png", text: "11111" },
        { id: 3, image: "slider3.png", text: "11111" },
        { id: 4, image: "slider3.png", text: "11111" },
        { id: 5, image: "slider3.png", text: "11111" },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: false, // Бесконечная прокрутка
        //autoplay: {
        //  delay: 3000, // Автопрокрутка каждые 3 секунды
        //  disableOnInteraction: false,
        //},
        spaceBetween: 10,
        slidesPerView: "auto", // или число (например, 3)
        slidesOffsetBefore: 0, // убирает отступ в начале
        slidesOffsetAfter: 0, // убирает отступ в конце
        breakpoints: {
          // Адаптивные настройки
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.slider {
  width: 100%;
  height: 400px;
  margin: 0;
  padding: 20px 0;
}
.slider-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.slide-image {
  width: 200px;
  height: auto;
}
.swiper-slide {
  padding-top: 40px;
  width: 416px !important; /* Фиксированная ширина */
  /* Или */
  max-width: 100%; /* Для адаптивности */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0; /* ну хз*/
  background-color: #eff1f3;
  border: 2px solid #e3e3e3;
  color: black;
  border-radius: 8px;
}
</style>