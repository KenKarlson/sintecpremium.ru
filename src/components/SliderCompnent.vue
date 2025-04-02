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
        </swiper-slide>

        <!-- Добавляем пагинацию (точки) -->
        <div class="swiper-pagination" slot="pagination"></div>

        <!-- Добавляем кнопки навигации (стрелки) -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
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
        { id: 0, image: "slider1.jpg" },
        { id: 1, image: "slider2.jpg" },
        { id: 2, image: "slider3.jpg" },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true, // Бесконечная прокрутка
        autoplay: {
          delay: 3000, // Автопрокрутка каждые 3 секунды
          disableOnInteraction: false,
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
  max-width: 800px;
  margin: 0 auto;
}
.slide-image {
  width: 200px;
  height: auto;
}
</style>