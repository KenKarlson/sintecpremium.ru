<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="ozon__container">
        <div class="ozon__title">купить на&nbsp;ozon прямо сейчас</div>
        <a
          href="https://www.ozon.ru/category/motornye-masla-8517/sintec-146249702/?saeviscos=68495%2C68496%2C68497&amp;seller=7780&amp;utm_content=undefined"
          target="_blank"
          class="ozon__button _ozonbtn _ozonbtn-white"
          rel="nofollow, noindex"
        >
          <span>купить на&nbsp;OZON</span>
        </a>
      </div>
      <div class="info__container">
        <div class="footer__col">
          <p>
            <a href="tel:88002014040">8&nbsp;800&nbsp;201-40-40</a>
          </p>
          <span>(24/7) | Бесплатный звонок по&nbsp;РФ</span>
        </div>
        <div class="footer__logo">
          <img src="../assets/img/logo/logo.png" alt="logo_footer" />
        </div>
        <div class="footer__col">
          <p>© 2020–2025</p>
          <p>Рекламодатель ООО «Синтек Лубрикантс»</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer {
  border: none;
  border-radius: 20px;
  opacity: 1;
  background-color: #0069ff;
  background: linear-gradient(to right, #01419b, #0069ff);
  color: #fff;

  /* на всю ширину */
  width: 100%;
  box-sizing: border-box;
}
.footer__container {
  width: 100%;
  margin: 0 auto; /* Центрируем */
}
.footer__col {
  font-family: Gotham Pro;
  font-size: 16px; /* Размер шрифта */
  line-height: 0.4;
}
.footer__col a {
  text-decoration: none;
  font-size: 24px;
  color: #fff;
}
.ozon__container {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  gap: 1rem; /* Отступ между элементами */
}
.ozon__title {
  margin-right: 80px;
  font-family: Gotham Pro;
  text-transform: uppercase;
  font-size: 32px; /* Размер шрифта */
  line-height: 1.3;
  color: #fff; /* Цвет текста */
  font-weight: bold;
}
.ozon__button {
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  font-family: Gotham Pro;
  text-transform: uppercase;
  color: #0069ff;
  font-size: 32px; /* Размер шрифта */
  line-height: 1.3;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    /*background: #0069ff;*/
    color: red;
  }
}
.info__container {
  width: 100%;
  padding: 80px 20px 120px 20px;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  justify-content: space-between;
  border: none;
  border-radius: 20px;
  background-color: #ce0f2d;
}
</style>