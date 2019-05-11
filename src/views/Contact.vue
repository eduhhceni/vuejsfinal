<template>
  <!-- Arquivo que invoca a página de contato -->
  <div class="contact">
    <Contact msg="Welcome to Your Contact page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from "@/components/pages/contact.vue";

export default {
  name: "contact",
  components: {
    Contact
  }
};
</script>