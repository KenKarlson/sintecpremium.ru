<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__container">
      <!-- Верхняя часть с кнопкой Ozon -->
      <div class="footer__top">
        <h2 class="footer__ozon-title">купить на ozon прямо сейчас</h2>
        <a
          href="https://www.ozon.ru/category/motornye-masla-8517/sintec-146249702/?saeviscos=68495%2C68496%2C68497&amp;seller=7780&amp;utm_content=undefined"
          target="_blank"
          class="footer__ozon-button"
          rel="noopener noreferrer nofollow noindex"
        >
          купить на&nbsp;OZON
        </a>
      </div>
    </div>
    <!-- Нижняя часть с контактами -->
    <div class="footer__bottom">
      <div class="footer__grid">
        <!-- Колонка с телефоном -->
        <div class="footer__col footer__col--contacts">
          <a href="tel:88002014040" class="footer__phone"
            >8&nbsp;800&nbsp;201-40-40</a
          >
          <span class="footer__phone-description"
            >(24/7) | Бесплатный звонок по РФ</span
          >
        </div>

        <!-- Логотип по центру -->
        <div class="footer__col footer__col--logo">
          <img
            src="@/assets/img/logo/logo.png"
            alt="Логотип Sintec Premium"
            width="140"
            height="70"
            loading="lazy"
            class="footer__logo"
          />
        </div>

        <!-- Колонка с копирайтом (надо будет исправить)-->
        <div class="footer__col footer__col--info">
          <p class="footer__copyright">© 2020–2025</p>
          <p class="footer__company">Рекламодатель ООО «Синтек Лубрикантс»</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: linear-gradient(90deg, #01419b 0%, #0069ff 100%);
  color: #fff;
  font-family: "Gotham Pro", Arial, sans-serif;
  overflow: hidden;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;

  &__container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  /* Верхний блок */
  &__top {
    padding: 30px 20px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      padding: 40px 20px 80px;
    }
  }

  &__ozon-title {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    color: #fff;

    @media (min-width: 768px) {
      font-size: 32px;
      margin-right: 80px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }
  }

  &__ozon-button {
    display: inline-block;
    padding: 12px 24px;
    background: #fff;
    border-radius: 6px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    text-decoration: none;
    color: #0069ff;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
    }

    @media (min-width: 768px) {
      font-size: 28px;
      padding: 14px 28px;
    }

    @media (min-width: 1024px) {
      font-size: 32px;
      padding: 16px 32px;
    }
  }

  /* Нижний блок */
  &__bottom {
    width: 100%;
    background-color: #ce0f2d;
    border-radius: 20px 20px 0 0;
    padding: 40px 20px;

    @media (min-width: 768px) {
      padding: 60px 40px;
      border-radius: 20px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 20px;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
      align-items: flex-start;
      text-align: left;

      &--logo {
        align-items: center;
      }
    }
  }

  &__phone {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    text-decoration: none;
    transition: opacity 0.3s;
    margin-bottom: 8px;

    &:hover {
      opacity: 0.9;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  &__phone-description {
    font-size: 14px;
    line-height: 1.4;
    opacity: 0.9;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  &__logo {
    max-width: 100%;
    height: auto;
    display: block;
  }

  &__copyright,
  &__company {
    margin: 4px 0;
    font-size: 14px;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  /* Адаптация для очень маленьких экранов, доделать в выхи! */
  @media (max-width: 375px) {
    &__ozon-title {
      font-size: 24px;
    }

    &__ozon-button {
      font-size: 20px;
      padding: 10px 20px;
    }

    &__phone {
      font-size: 18px;
    }
  }
}
</style>