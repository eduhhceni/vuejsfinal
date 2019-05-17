<template>
  <slide class="slide">
    <div class="block-4 text-center">
      <figure class="block-4-image">
        <a @click="goTodetail(id)">
          <img :src="image1" alt="Image placeholder" class="img-fluid momento">
        </a>
      </figure>
      <div class="block-4-text p-4">
        <h3>
          <a @click="goTodetail(id)">{{ title }}</a>
        </h3>
        <p class="text-primary font-weight-bold">R$ {{ price }}</p>
      </div>
    </div>
  </slide>
</template>

<script>
export default {
  name: "ListaProdutos",
  props: ["id", "title", "price", "info", "image1"],
  data: function() {
    return {
      listaProdutos: this.produtos
    };
  },
  methods: {
    goTodetail(prodId) {
      let proId = prodId;
      this.$router.push({ name: "detalhes", params: { Pid: proId } });
    }
  }
};
</script>