<!------>
<template>
  <section class="tech">
    <div class="tech__backgrounds">
      <!-- Фоновые изображения -->
      <div class="tech__background tech__background--left">
        <img
          src="@/assets/img/tech_bg.png"
          alt="Технологии SINTEC"
          loading="lazy"
          class="tech__bg-image"
        />
      </div>
      <div class="tech__background tech__background--right">
        <img
          src="@/assets/img/dots.svg"
          alt="Декоративные элементы"
          loading="lazy"
          class="tech__dots"
        />
        <img
          src="@/assets/img/tech_light.png"
          alt="Эффект свечения"
          loading="lazy"
          class="tech__light"
        />
      </div>
    </div>

    <div class="tech__content">
      <!-- Левая колонка с текстом -->
      <div
        class="tech__column tech__column--left"
        v-observe-visibility="{
          callback: handleVisibility,
          once: true,
          throttle: 300,
          intersection: {
            threshold: 0.5,
          },
        }"
      >
        <div class="tech__header">
          <div class="tech__subtitle">Масла SINTEC OW-XX</div>
          <h2 class="tech__title">Разработаны по новейшим технологиям</h2>
        </div>
        <a href="#" class="tech__button"
          >См. результаты лабораторных<br />исследований oil.club</a
        >
      </div>

      <!-- Центральное изображение -->
      <div class="tech__column tech__column--center">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="@/assets/img/tech_img.png"
          />
          <img
            src="@/assets/img/tech_img_mob.png"
            alt="Продукция SINTEC"
            loading="lazy"
            class="tech__product-image"
          />
        </picture>
        <img
          src="@/assets/img/tech_sqare.png"
          alt="Декоративный элемент"
          loading="lazy"
          class="tech__decor-square"
        />
      </div>

      <!-- Правая колонка с преимуществами -->
      <div
        class="tech__column tech__column--right"
        v-observe-visibility="{
          callback: handleVisibility,
          once: true,
          throttle: 300,
          intersection: {
            threshold: 0.5,
          },
        }"
      >
        <div class="tech__feature">
          <div class="tech__feature-icon">
            <img
              src="@/assets/img/tech_item_1.png"
              alt="Высококачественная синтетическая база"
              loading="lazy"
            />
          </div>
          <div class="tech__feature-text">
            Высококачественная<br />синтетическая база
          </div>
        </div>

        <div class="tech__feature">
          <div class="tech__feature-icon">
            <img
              src="@/assets/img/tech_item_2.png"
              alt="Присадки от мировых лидеров"
              loading="lazy"
            />
          </div>
          <div class="tech__feature-text">Присадки<br />от мировых лидеров</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TechComponent",
  methods: {
    handleVisibility(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add("is-visible");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tech {
  position: relative;
  overflow: hidden;
  padding: 80px 0;

  &__backgrounds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__background {
    position: absolute;
    height: 100%;

    &--left {
      left: 0;
      width: 40%;
    }

    &--right {
      right: 0;
      width: 60%;
      display: flex;
      justify-content: flex-end;
    }
  }

  &__bg-image,
  &__dots,
  &__light,
  &__decor-square {
    position: absolute;
    max-width: 100%;
    height: auto;
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  &__column {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    &--left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &--center {
      position: relative;
      text-align: center;
    }

    &--right {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }

  &__subtitle {
    font-size: 18px;
    color: #b89655; /* золотой цвет */
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  &__title {
    font-size: 32px;
    line-height: 1.2;
    color: #000;
    margin: 0 0 30px 0;
    font-weight: 700;
  }

  &__button {
    display: inline-block;
    padding: 15px 30px;
    background: #0069ff;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: background 0.3s ease;

    &:hover {
      background: darken(#0069ff, 10%);
    }
  }

  &__product-image {
    max-width: 100%;
    height: auto;
    position: relative;
    z-index: 2;
  }

  &__decor-square {
    position: absolute;
    z-index: 1;
    bottom: -20px;
    right: -20px;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__feature-icon {
    flex-shrink: 0;
    width: 60px;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  &__feature-text {
    font-size: 18px;
    line-height: 1.4;
    color: #333;
  }

  @media (max-width: 1024px) {
    &__content {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      gap: 60px;
    }

    &__column {
      &--left,
      &--right {
        align-items: center;
        text-align: center;
      }

      &--center {
        order: -1;
      }
    }

    &__button {
      align-self: center;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    &__title {
      font-size: 28px;
    }

    &__feature {
      flex-direction: column;
      text-align: center;
    }
  }
}
</style>