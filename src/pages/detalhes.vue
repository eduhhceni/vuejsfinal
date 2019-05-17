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
                    @click="minus()"
                  >&minus;</button>
                </div>-todo-
                <input
                  type="text"
                  class="form-control text-center"
                  :value="quantity"
                  placeholder
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                >
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-primary js-btn-plus"
                    type="button"
                    @click="plus()"
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
  name: "ListaCarrinho",
  props: ["quantity"],
  data: function() {
    return {
      proId: this.$route.params.Pid,
      produtos: []
    };
  },
  async created() {
    const { data } = await api.get(`/produtos`);
    this.produtos = data;
  },
  methods: {
    // TODO plus e minus faltam alterar no banco e limitar > 0 e < itens disponíveis
    plus() {
      this.quantity = this.quantity + 1;
      this.total = parseFloat(this.price) * parseFloat(this.quantity);
    },
    minus() {
      this.quantity = this.quantity - 1;
      this.total = parseFloat(this.price) * parseFloat(this.quantity);
    }
  }
};
</script>
