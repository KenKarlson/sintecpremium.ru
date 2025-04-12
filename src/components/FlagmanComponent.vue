<template>
  <section class="flagman" aria-labelledby="flagman-title">
    <div class="flagman__container">
      <h2 id="flagman-title" class="flagman__title">
        <span class="flagman__title-accent">PREMIUM 9000</span> — флагманская
        линейка в портфеле бренда SINTEC
      </h2>
      <p class="flagman__description">
        В рецептурах используются исключительно современные импортные пакеты
        присадок и комплекс высококачественных, полностью синтетических базовых
        масел — <span class="flagman__highlight">HC, </span>
        <span class="flagman__highlight">PAO, </span>
        <span class="flagman__highlight">AN.</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "FlagmanComponent",
};
</script>

<style lang="scss" scoped>
.flagman {
  padding: 80px 20px;
  background-color: #fff;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__title {
    font-size: 45px;
    line-height: 1.2; /* 120% */
    letter-spacing: -0.02em; /* -2% */
    font-weight: 400; /* Regular */
    color: #000;
    margin: 0 0 40px 0;
    max-width: 900px;
  }

  &__title-accent {
    color: #b89655;
    font-weight: 400;
  }

  &__description {
    font-size: 32px;
    line-height: 1.3; /* 130% */
    letter-spacing: -0.02em; /* -2% */
    font-weight: 400; /* Regular */
    color: #5a5a5a; /* grey_dark */ /*перевести в перем*/
    max-width: 900px;
    margin: 0;
  }

  &__highlight {
    color: #ff0000; /* red */
    font-weight: 400;
  }

  /* Адаптация для планшетов */
  @media (max-width: 1024px) {
    padding: 60px 20px;

    &__title {
      font-size: 38px;
      margin-bottom: 30px;
    }

    &__description {
      font-size: 28px;
    }
  }

  /* Адаптация для мобильных */
  @media (max-width: 768px) {
    padding: 40px 15px;

    &__title {
      font-size: 32px;
      margin-bottom: 25px;
    }

    &__description {
      font-size: 22px;
      line-height: 1.4;
    }
  }

  /* Маленькие мобильные */
  @media (max-width: 480px) {
    &__title {
      font-size: 28px;
    }

    &__description {
      font-size: 18px;
    }
  }
}
</style>