<template>
  <header class="header">
    <div class="header__container">
      <div class="header-logo">
        <img src="../assets/img/logo/logo.png" alt="Logo" srcset="" />
      </div>
      <div class="header-title">Sintec Premium</div>
      <div class="header-subtitle">Премиальная линейка моторных масел</div>
      <div class="header-description">с технологией UltraSynth</div>
      <div class="header-button">
        <a
          href="https://www.ozon.ru/category/motornye-masla-8517/sintec-146249702/?saeviscos=68495%2C68496%2C68497&amp;seller=7780&amp;utm_content=undefined"
          target="_blank"
          class="ozon__button _ozonbtn _ozonbtn-white"
          rel="nofollow, noindex"
          >Купить на ozon</a
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  padding-top: 35px;
  padding-bottom: 166px;
  background: url("../assets/img/header_bg.png") center center/cover;
}
.header__container {
  margin: 0 auto;
  width: 1090px;
  padding: 0 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header-logo {
  margin-bottom: 35px;
}
.header-title {
  margin-bottom: 30px;
  font-size: 32px;
  line-height: 100%;
  font-weight: 700;
  color: #fff;
}
.header-subtitle {
  margin-bottom: 30px;
  font-size: 55px;
  line-height: 120%;
  letter-spacing: -2%;
  text-align: center;
  text-transform: uppercase;
}
.header-description {
  margin-bottom: 140px;
  padding: 10px 30px;
  background-color: #bc9767;
  border: none;
  border-radius: 30px;
}
.header-button {
  margin: 0;
  padding: 23px 36px;
  font-size: 23px;
  line-height: 130%;
  background-color: #0069ff;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
}
.header-button a {
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
/*делее Исправить по БЭМ + добавить канистру и декор сни зу */
</style>