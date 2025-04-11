<template>
  <div class="info">
    <div class="info__container">
      <div class="info__wrapper">
        <div class="info__wrapper__title"><span>{{ title }}</span></div>
        <div class="info__wrapper__cards"></div>
        <div class="info__wrapper__box">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: "InfoComponent",
  data(){
    return {
      title: "Моторное масло SINTEC это -",
      cards:[
        {},{},{},{},
      ],
      boxs:[
        {},{}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.info{
  margin: 0;
  padding: 0;
  background-color: rgba(239, 241, 243, 1);
  color: black;
  &__container{
    margin: 0 auto;
    padding: 8.75rem 1.25rem 4.375rem;
    max-width: 82.5rem;
  }
  &__wrapper{
    display: flex;
    /*align-items: center;*/
    justify-content: start;
    flex-direction: column;
    &__title{
      margin: 0;
      font-size: 50px;
      opacity: 1;
      translate: 0 0;
      line-height: 1.2;
      text-transform: uppercase;
    }
  }

}
</style>