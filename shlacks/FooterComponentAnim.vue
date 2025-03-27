<template>
  <footer
    ref="footer"
    class="footer"
    :class="{ 'is-visible': isVisible }"
    data-watch
    data-watch-once
    :data-watch-threshold="threshold"
  >
    <div class="footer__container">
      <div class="footer__col">
        <a href="tel:88002014040">8 800 201-40-40</a>
        <span>(24/7) | Бесплатный звонок по РФ</span>
      </div>
      <div class="footer__logo">
        <img src="@/assets/img/logo/logo.png" alt="logo_footer" />
      </div>
      <div class="footer__col">
        <p>© 2020–2025</p>
        <p>Рекламодатель ООО «Синтек Лубрикантс»</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      isVisible: false,
      threshold: 0.5,
    };
  },
  mounted() {
    this.initIntersectionObserver();
  },
  methods: {
    initIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible = true;
              // Если нужно одноразовое срабатывание
              if (this.$refs.footer.hasAttribute("data-watch-once")) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: this.threshold,
        }
      );

      if (this.$refs.footer) {
        observer.observe(this.$refs.footer);
      }
    },
  },
};
</script>

<style scoped>
.footer {
  border: none;
  border-radius: 15px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  background-color: #ce0f2d;
  color: #f5f5f5;
}

.footer.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.footer__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__logo img {
  height: 40px;
  width: auto;
}

@media (max-width: 768px) {
  .footer__container {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>