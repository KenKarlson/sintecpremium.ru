<template>
  <div class="info">
    <div class="info__container">
      <div class="info__wrapper">
        <div class="info__wrapper__title">
          <span>{{ title }}</span>
        </div>
        <div class="info__wrapper__cards">
          <div class="info__wrapper__cards--top">
            <div class="card" v-for="card in cards" :key="card.id">
              <img :src="card.icon" :alt="card.title" class="card__icon" />
              <div class="card__number">{{ card.number }}</div>
              <h3 class="card__title">{{ card.title }}</h3>
            </div>
          </div>
        </div>
        <div class="info__wrapper__box"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfoComponent",
  data() {
    return {
      title: "Моторное масло SINTEC это -",
      cards: [
        { id: 1, icon: "icon1.png", number: "01", title: "Text" },
        { id: 2, icon: "icon2.png", number: "02", title: "Text" },
        { id: 3, icon: "icon3.png", number: "03", title: "Text" },
        { id: 4, icon: "icon4.png", number: "04", title: "Text" },
      ],
      boxs: [
        {
          title: "Для кого",
          subtitle:
            "Кто ищет качественное премиальное масло для своего автомобиля",
        },
        {
          title: "Для каких авто",
          subtitle:
            "Для высокофорсированных современных двигателей. Для силовых агрегатов с турбонаддувом",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.info {
  margin: 0;
  padding: 0;
  background-color: rgba(239, 241, 243, 1);
  color: black;
  &__container {
    margin: 0 auto;
    padding: 8.75rem 1.25rem 4.375rem;
    max-width: 82.5rem;
  }
  &__wrapper {
    display: flex;
    /*align-items: center;*/
    justify-content: start;
    flex-direction: column;
    &__title {
      margin: 0;
      font-size: 50px;
      opacity: 1;
      translate: 0 0;
      line-height: 1.2;
      text-transform: uppercase;
    }
    &__cards{
      margin: 0;
      padding: 0;
      &--top{
        display: flex;
        align-items: flex-start;
        align-self: stretch;
        flex: 0 0 auto;
        gap: 15px; //Итак сайдет
      }
    }
  }
}
.card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 16px;
}
</style>
