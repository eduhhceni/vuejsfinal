<template>
  <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
    <div class="block-4 text-center border produto">
      <figure class="block-4-image">
        <transition name="fade" mode="out-in" appear>
          <a @click="goTodetail(id)">
            <img :src="image1" alt="Image placeholder" class="img-fluid shop-image">
          </a>
        </transition>
      </figure>
      <div class="block-4-text p-4">
        <a @click="goTodetail(id)">
          <h3>{{ title }}</h3>
        </a>
        <p class="mb-0">{{ info }}</p>
        <p class="text-primary font-weight-bold">R$ {{ price }}</p>
      </div>
    </div>
  </div>
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