<template>
  <div id="app">
    <HeaderComponent />
    <FlagmanComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FlagmanComponent from "@/components/FlagmanComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, FlagmanComponent, FooterComponent },
};
</script>

<style>
</style>
