<template>
  <div id="app">
    <HeaderComponent />
    <FlagmanComponent />
    <TechComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FlagmanComponent from "@/components/FlagmanComponent.vue";
import TechComponent from "@/components/TechComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    FlagmanComponent,
    FooterComponent,
    TechComponent,
  },
};
</script>

<style>
</style>
