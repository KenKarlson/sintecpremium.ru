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
                :alt="'Slide ' + slide.id"
                class="slide-image"
              />
            </div>
            <div class="cardbox__title">
              <h3>{{ slide.text_title }}</h3>
            </div>
            <div class="cardbox__subtitle">{{ slide.text_subtitle }}</div>

            <div class="cardbox__buttons">
              <div
                class="btn btn_active"
                v-if="shouldShowActiveButton(slide.text_btn_active)"
              >
                {{ slide.text_btn_active }}
              </div>
              <div
                class="btn"
                :style="{
                  width: shouldShowActiveButton(slide.text_btn_active)
                    ? '194px'
                    : '100%',
                }"
              >
                {{ slide.text_btn }}
              </div>
            </div>

            <!-- <div class="cardbox__buttons">
              <div class="btn btn_active" v-if="slide.text_btn_active && slide.text_btn_active.trim() !== ''">
                {{ slide.text_btn_active }}
              </div>
              <div class="btn">{{ slide.text_btn }}</div>
            </div> -->
          </div>
        </swiper-slide>
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
        {
          id: 0,
          image: "slider1.png",
          text_title: "Premium 9000 0W-30",
          text_subtitle: "A5/B5, SP",
          text_btn: "Соответствия и одобрения автопроизводителей",
          text_btn_active: "Официальный допуск MERCEDES-BENZ 229.6",
        },
        {
          id: 1,
          image: "slider2.png",
          text_title: "Premium 9000 5W-30",
          text_subtitle: "C3, SN",
          text_btn: "Соответствия и одобрения автопроизводителей",
          text_btn_active: "Официальный допуск MERCEDES-BENZ 229.6",
        },
        {
          id: 2,
          image: "slider3.png",
          text_title: "PREMIUM 9000 0W-40",
          text_subtitle: "A3/B4 SP/CF",
          text_btn: "Соответствия и одобрения автопроизводителей",
          text_btn_active: "",
        },
        {
          id: 3,
          image: "slider3.png",
          text_title: "Premium 9000 5W-30",
          text_subtitle: "A3/B4, SL/CF",
          text_btn: "Соответствия и одобрения автопроизводителей",
          text_btn_active: "",
        },
        {
          id: 4,
          image: "slider3.png",
          text_title: "Premium 9000 5W-30",
          text_subtitle: "A5/B5, SL/CF",
          text_btn: "Соответствия и одобрения автопроизводителей",
          text_btn_active: "",
        },
        {
          id: 5,
          image: "slider3.png",
          text_title: "Premium 9000 5W-40",
          text_subtitle: "A3/B4, SN/CF",
          text_btn: "Соответствия и одобрения автопроизводителей",
          text_btn_active: "",
        },
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
  methods: {
    shouldShowActiveButton(text) {
      return text && text.trim() !== "";
    },
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
  margin-right: 30px;
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
      height: 76px;
      margin: 0 0 30px 0;
      padding: 20px 6px;
      display: flex;
      align-items: center;
      font-family: Gotham Pro;
      font-size: 14px;
      line-height: 1.2;
      border: 1px solid red;
      border-radius: 8px;
      text-align: center;
      cursor: pointer;

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
