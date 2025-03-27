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
        масел — HC, PAO, AN.
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
    margin: 0 0 30px 0;
    max-width: 900px;
  }

  &__title-accent {
    color: #b89655; /* Золотой цвет для PREMIUM 9000 */
    font-weight: 400; /* Сохраняем Regular */
  }

  &__description {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
    max-width: 700px;
    margin: 0;
  }

  /* Адаптация для мобильных устройств */
  @media (max-width: 768px) {
    padding: 50px 15px;

    &__title {
      font-size: 32px;
      margin-bottom: 20px;
    }

    &__description {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    &__title {
      font-size: 28px;
    }
  }
}
</style>