<template>
  <div id="app">
    <HeaderComponent />
    <FlagmanComponent />
    <TechComponent />
    <InfoComponent />
    <ResultComponent />
    <SliderCompnent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FlagmanComponent from "@/components/FlagmanComponent.vue";
import TechComponent from "@/components/TechComponent.vue";
import SliderCompnent from "@/components/SliderCompnent.vue";
import ResultComponent from "@/components/ResultComponent.vue";
import InfoComponent from "@/components/InfoComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FlagmanComponent,
    FooterComponent,
    TechComponent,
    SliderCompnent,
    ResultComponent,
    InfoComponent,
  },
};
</script>

<style>
</style>
