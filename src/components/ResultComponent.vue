<template>
  <section class="result">
    <div class="result__container">
      <header class="result__head">
        <span class="result__title">УСПЕШНЫЕ РЕЗУЛЬТАТЫ ТЕСТОВ</span>
        <p class="result__subtitle" v-if="subtitle">{{ subtitle }}</p>
      </header>
      <div class="result__body">
        <ul class="result__list">
          <li
            class="result__item"
            v-for="(item, index) in results"
            :key="index"
          >
            <div class="result__item-box">
              <div class="text-wrapper">{{ item.number }}</div>
              <div class="overlap-wrapper">
                <div class="overlap-wrapper-title">
                  {{ item.text }}
                </div>
                <div class="overlap-wrapper-frame">
                  <div class="overlap-wrapper-frame__txt">
                    <p>Результат:</p>
                    <div class="overlap-wrapper-subtitle">
                      {{ item.description }}
                    </div>
                  </div>
                  <div class="overlap-wrapper-frame__btn">
                    <div class="button button-desk">Результат теста</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultComponent",
  data() {
    return {
      subtitle: "",
      results: [
        {
          number: "01",
          text: "На такси",
          description:
            "Высокие свойства проб масла на всем периоде эксплуатации",
        },
        {
          number: "02",
          text: " На китайских авто",
          description:
            "Высокие свойства проб масла на всем периоде эксплуатации",
        },
        {
          number: "03",
          text: "От независимых экспертов OIL.CLUB",
          description: "Все показатели в норме",
        },
      ],
    };
  },
};
//Доделать скрипт со стилями завтра наверное
//Анимации отдельным файлом сделать и импортировать их суда
//Надо ввести переменные и миксины
</script>

<style lang="scss" scoped>
.result {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: black;
  background: #fff;

  &__container {
    margin: 0 auto;
    padding: 8.75rem 1.25rem 4.375rem;
    max-width: 82.5rem;
  }

  &__head {
    margin-bottom: 2.5rem;
  }

  &__title {
    margin: 0;
    font-size: 50px;
    opacity: 1;
    translate: 0 0;
    line-height: 1.2;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 1.25rem;
    color: #666;
    margin: 0;
  }

  &__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    font-size: 90px;
    font-weight: 400;
    line-height: 1.2;
    background: #fff;
    padding: 0;
    color: grey;
  }
}
.result__item-box {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text-wrapper {
  width: 50%;
  padding: 20px;
  border-top: 1px solid grey;
}
.overlap-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  height: 152px; //Это временно!!
  margin: 0;
  padding: 20px;
  background-color: rgba(239, 241, 243, 1);
  border-radius: 10px;
  &-title {
    /*margin-bottom: 20px;*/
    font-size: 22px;
    text-transform: uppercase;
    color: rgb(40, 40, 40);
  }
  &-subtitle {
    font-size: 16px;
    line-height: 19.2px;
    letter-spacing: normal;
    color: grey;
  }
  & p {
    font-size: 16px;
    color: rgb(40, 40, 40);
  }
}
.overlap-wrapper-frame{
  display: flex;
  align-items: flex-end;
  align-self: stretch;
  width: 100%;
  gap: 20px;
  flex: 0 0 auto;
  &__txt{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    flex: 1 1 0%;
    & p{
      margin: 0;
    }
  }
  &__btn{
    display: flex;
    width: 225px;
    height: 45px;
    align-items: center;
    justify-content: center;
    background-color: rgba(206, 15, 45, 1);
    padding: 8px 20px;
    border-radius: 8px;
    color:#fff;
    cursor: pointer;
  }
}
.button-desk{
  width: fit-content;
  font-size: 14px;
  line-height: 16.8px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
}
</style>
