<template>
  <div class="slider">
    <div class="slider-container">
      <h3 class="slider-title">ассортимент линейки premium</h3>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(slide, id) in slides" :key="id">
          <div class="cardbox">
            <div class="cardbox__image">
              <img
                :src="require(`@/assets/img/sliderimg/${slide.image}`)"
                :alt="'Slide ' + index"
                class="slide-image"
              />
            </div>
            <div class="cardbox__title">
              <h3>Premium 9000 0W-30</h3>
            </div>
            <div class="cardbox__subtitle">A5/B5, SP</div>
            <div class="cardbox__buttons">
              <div class="btn btn_active">
                Официальныйдопуск MERCEDES-BENZ 229.6
              </div>
              <div class="btn">Соответствия и одобрения автопроизводителей</div>
            </div>
          </div>
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
<style lang="scss" scoped>
.slider {
  width: 100%;
  margin: 0;
  padding: 20px 0;
}
.slider-title {
  margin: 0;
  margin-bottom: 30px;
  font-family: Gotham Pro Medium;
  font-size: 50px;
  line-height: 1.2;
  color: black;
  text-transform: uppercase;
}

.slider-container {
  max-width: 1320px;
  margin: 0 auto;
  overflow: hidden;
}

.slide-image {
  width: 200px;
  height: auto;
}

.swiper-slide {
  padding-top: 40px;
  width: 427px !important; /* Фиксированная ширина */
  /* Или */
  max-width: 100%; /* Для адаптивности */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  background-color: #eff1f3;
  border: 2px solid #e3e3e3;
  color: black;
  border-radius: 8px;
}

.cardbox {
  margin: 0;
  padding: 20px;
  width: 427px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Gotham Pro Medium;
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;

  &__title {
    margin: 0;
    padding: 0;
    letter-spacing: 0%;
    text-transform: uppercase;

    h3 {
      margin: 0;
      padding: 0;
    }
  }

  &__subtitle {
    color: #828080;
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn {
      width: 194px;
      margin: 0 0 30px 0;
      padding: 10px 20px;
      font-family: Gotham Pro;
      font-size: 14px;
      line-height: 1.2;
      border: 1px solid red;
      border-radius: 8px;
      text-align: center;

      &:not(:last-child) {
        margin-right: 10px; 
      }

      &_active {
        background-color: red;
        color: #eff1f3;
      }
    }
  }
}
</style>
