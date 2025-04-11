<template>
  <div class="info">
    <div class="info__container">
      <div class="info__wrapper">
        <div class="info__wrapper__title">
          <span>{{ title }}</span>
        </div>
        <div class="info__wrapper__cards">
          <div class="cards-grid">
            <div class="card" v-for="card in cards" :key="card.id">
              <div class="card__header">
                <img
                  :src="require(`@/assets/img/icons/${card.icon}`)"
                  :alt="card.title"
                  class="card__icon"
                />
                <div class="card__number">{{ card.number }}</div>
              </div>
              <div class="card__body">
                <h3 class="card__title">{{ card.title }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="info__wrapper__box">
          <div class="box" v-for="(box, index) in boxs" :key="index">
            <h3 class="box__title">{{ box.title }}</h3>
            <p class="box__subtitle">{{ box.subtitle }}</p>
          </div>
        </div>
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
        {
          id: 1,
          icon: "icon_01.png",
          number: "01",
          title: "Повышенная защита деталей двигателя",
        },
        {
          id: 2,
          icon: "icon_02.png",
          number: "02",
          title: "Увеличенный запас эксплуатационных свойств",
        },
        {
          id: 3,
          icon: "icon_03.png",
          number: "03",
          title: "Максимальная стойкость к окислению и угару",
        },
        {
          id: 4,
          icon: "icon_04.png",
          number: "04",
          title:
            "Полное соответствие современным требованиям европейских автопроизводителей",
        },
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
    flex-direction: column;

    &__title {
      margin: 0 0 3rem 0;
      font-size: 50px;
      line-height: 1.2;
      text-transform: uppercase;
    }

    &__cards {
      margin-bottom: 3rem;

      .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }
    }

    &__box {
      display: flex;
      align-items: center;
      align-content: space-between;
      justify-content: space-between;
      //flex: 1 1;
      
      gap: 20px;
    }
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  &__icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  &__number {
    font-size: 22px;
    font-weight: 500;
    color: rgba(165, 166, 165, 1);
  }

  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    
  }

  &__title {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3;
  }
}

.box {
  //padding: 20px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background:linear-gradient(219deg, rgb(229, 206, 172) 0%, rgb(181, 142, 92) 100%) ;


  &__title {
    margin-top: 0;
    padding: 20px 20px 0 20px;
    margin-bottom: 10px;
    font-family: "Gotham Pro Medium";
    font-size: 18px;
    font-weight: normal;
    line-height: 21.6px;
    letter-spacing: -0.36px;
    color:#fff;
    text-transform: uppercase;
  }

  &__subtitle {
    margin: 0;
    padding: 20px;
    font-size: 16px;
    line-height: 1.4;
    color: #555;
    background-color: #fff;
    border-radius: 16px;
  }
}
</style>
