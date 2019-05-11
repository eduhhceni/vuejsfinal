<template>
  <!-- Arquivo que invoca a página de compra realizada -->
  <div class="thankyou">
    <ThankYou msg="Welcome to Your Vue.js ThankYou page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ThankYou from "@/components/pages/thankyou.vue";

export default {
  name: "thankyou",
  components: {
    ThankYou
  }
};
</script>