<template>
  <section class="tech">
   <div class="tech__backgrounds">
  <!-- Фоновые изображения -->
  <div class="tech__background tech__background--left">
     <img
       src="@/assets/img/rec-176.png"
       alt="Технологии SINTEC"
       loading="lazy"
       class="tech__bg-image"
     />
   </div>
   <div class="tech__background tech__background--right">
       <img
       src="@/assets/img/rec-188.png"
       alt="Эффект свечения"
       loading="lazy"
       class="tech__light"
                         />
   </div>
 </div>
    
          <div class="tech__content">
           <div class="left_content">
           <h2 class="tech__title">Разработано по передовой технологии </h2>
           <p>UltraSynth</p>
         <div class="red_box">
           <p class="ultrasynth">Усилено РАО и AN  </p> 
           <p class="result">Смотрите результаты лабораторных исследований oli.club</p>
         </div>
         </div>

          <div class="tech__column tech__column--center">
                       <img  src="@/assets/img/sintec5w.png" class="tech__product-image"
         width="200px" />
       </div>
    
        <div class="right_content">
         <div class="pao">
           <img src="@/assets/img/icon_PAO.png" class="img_pao">
           <p class="property"><span class="prop">полиальфаолефины</span> обеспечивают эффективную работу при экстремальных температурах</p>
         </div>
         <div class="an">
           <img src="@/assets/img/icon_AN.png" class="img_an">
           <p class="property"><span class="prop">алкилированные нафталины</span> усиливают действие
           противо — износных присадок, защищают от коррозии, отложений и угара</p>
         </div>
     </div>
   </div>

     <div class="bottom">
     <div class="left_bottom">
       <img src="@/assets/img/Icon_car_shield.png" class="icon_car"> <span class="car">Комплекс PAO + AN в моторных маслах</span><p class="icon">демонстрирует наилучшие характеристики </p>
     </div>  
     <div class="img_bottom"><img src="@/assets/img/graph.png" class="graph"></div>  
     <div class="right_bottom"><img src="@/assets/img/Icon_clock.png" class="icon_clock"> <p class="icon">эффективная работа на больших интервалах </p></div>  
     </div>
  

         
</section>
</template>

<script>

</script>

<style lang="scss" scoped>


.tech__backgrounds{
display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 0px;
 width: 100vh;
 
}

.tech__background{
width: 100vh;
}

.tech__light{
width: 820px;
height: 500px;

} 

.tech__bg-image{
width: 850px;
height: 500px;
}

.tech__content{
margin-top: -500px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 100px;
grid-row-gap: 0px;
margin-left: 150px;
}



.tech__product-image{
margin-top: 120px;
}

h2{
font-family: 'Gotham Pro';
text-transform: uppercase;
font-size: 45px;
font-weight: normal;
color: black;
}

.red_box p {
font-family: 'Gotham Pro';
color: white;
font-weight: normal;
font-size: 12px;
background-color:#CE0F2D;
border: 3px solid #CE0F2D;
border-radius: 10px; 

} 

p{
font-family: 'Gotham Pro';
font-size: 27px;
color: black;
font-weight: bold;
}

.ultrasynth{
width: 170px;
padding: 3px;
}

.result{
padding: 7px;
width: 270px;
margin-top: 100px;
}

.property{
font-family: 'Gotham Pro';
font-weight: normal;
color: white;
margin-left: -150px;
font-size: 15px;


  }
 
.prop{
font-size: 25px;

  }

.an, .pao{
display: grid;
 grid-template-columns: repeat(2, 1fr);
background-color:#A68459;
border: 2px solid   #A68459;
border-radius: 50px; 
padding: 5px;
width: 550px;
}

.pao{
margin-top: 100px;
margin-bottom: 100px;
}
.right_content{
margin-left: -200px;

}

.img_an, .img_pao{
width: 80px;
}

.bottom{
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: repeat(1, 1fr);
 gap: 18px;
 margin-top: -950px;
}

.icon_clock, .icon_car{
margin-top: 50px;
 }
.left_bottom{
 margin-left: 50px;
}
 </style>

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