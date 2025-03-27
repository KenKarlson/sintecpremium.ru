<template>
  <div id="app">
    <HeaderComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, FooterComponent },
};
</script>

<style>
</style>
