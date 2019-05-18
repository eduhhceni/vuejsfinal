<template>
  <div class="site-section shop-single">
    <div class="container" v-for="(produto,index) in produtos" :key="index">
      <div class="row" v-if="proId == produto.id">
        <div class="col-md-6">
          <carousel :per-page="1">
            <slide>
              <div class="block-6 text-center">
                <figure class="block-6-image">
                  <img :src="produto.image1" alt="Image placeholder" style="width: 538px;">
                </figure>
              </div>
            </slide>
            <slide>
              <div class="block-6 text-center">
                <figure class="block-6-image">
                  <img :src="produto.image2" alt="Image placeholder" style="width: 538px;">
                </figure>
              </div>
            </slide>
            <slide>
              <div class="block-6 text-center">
                <figure class="block-6-image">
                  <img :src="produto.image3" alt="Image placeholder" style="width: 538px;">
                </figure>
              </div>
            </slide>
          </carousel>
        </div>
        <div>
          <div class="col-md-6 tamanho">
            <h2 class="text-black">{{ produto.title }}</h2>
            <p>{{ produto.info }}</p>
            <strong class="text-primary h4">R$ {{ produto.price }}</strong>
            <div class="mb-5">
              <div class="input-group mb-3" style="max-width: 120px;">
                <div class="input-group-prepend">
                  <button
                    class="btn btn-outline-primary js-btn-minus"
                    type="button"
                    @click="quantity > 1 ? minus() : null"
                  >&minus;</button>
                </div>
                <input
                  type="text"
                  class="form-control text-center"
                  :value="quantity"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                >
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary js-btn-plus"
                    type="button"
                    @click="quantity < 9 ? plus() : null"
                  >&plus;</button>
                </div>
              </div>
            </div>
            <p>
              <router-link to="/cart" class="buy-now btn btn-sm btn-primary">Adicionar ao carrinho</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "ListaProdutos",
  data: function() {
    return {
      proId: this.$route.params.Pid,
      produtos: [],
      quantity: 1
    };
  },
  async created() {
    const { data } = await api.get(`/produtos`);
    this.produtos = data;
  },
  methods: {
    plus() {
      this.quantity = this.quantity + 1;
    },
    minus() {
      this.quantity = this.quantity - 1;
    }
  }
};
</script>
