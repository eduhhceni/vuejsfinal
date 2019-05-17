<template>
  <!-- Página inicial do site -->
  <div>
    <!-- Painel inicial -->
    <div class="site-blocks-cover" data-aos="fade">
      <div
        class="site-blocks-cover"
        style="background-image: url(https://wallpaperplay.com/walls/full/2/9/6/82899.jpg);"
        data-aos="fade"
      >
        <div class="container">
          <div class="row align-items-start align-items-md-center justify-content-end">
            <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
              <h1 class="mb-2 shadowed" style="color: white">Encontrando seu periférico perfeito</h1>
              <div class="intro-text text-center text-md-left">
                <p
                  class="mb-4 shadowed"
                  style="color: white"
                >Aqui você encontra os mais variados tipos de periféricos para qualquer tipo de cliente.</p>
                <p>
                  <router-link to="/shop/1" class="btn btn-sm btn-primary">Comprar</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section site-section-sm site-blocks-1">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
            data-aos="fade-up"
            data-aos-delay
          >
            <!-- informações  -->
            <div class="icon mr-4 align-self-start">
              <span class="icon-truck"></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Frete Grátis</h2>
              <p>Frete grátis para todos os estados do Brasil para compras a cima de R$ 200.</p>
            </div>
          </div>
          <div
            class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="icon mr-4 align-self-start">
              <span class="icon-refresh2"></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Arrependimento</h2>
              <p>Todos os produtos podem ser devolvidos em um período de arrependimento de 1 semana após a chegada do produto.</p>
            </div>
          </div>
          <div
            class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="icon mr-4 align-self-start">
              <span class="icon-help"></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Suporte</h2>
              <p>Suporte acessível 24 horas todos os dias, incluindo fim de semana e feriados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- banners de coleções -->
    <div class="site-section site-blocks-2">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay>
            <router-link to="/shop/1" class="block-2-item">
              <figure class="image">
                <img
                  src="https://d2rormqr1qwzpz.cloudfront.net/photos/2014/04/14/59999-img_0458.jpg"
                  alt
                  class="img-fluid colection"
                >
              </figure>
              <div class="text">
                <span class="text-uppercase">Coleção</span>
                <h3>Mouse</h3>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <router-link to="/shop/1" class="block-2-item">
              <figure class="image">
                <img
                  src="https://wallpaperplay.com/walls/full/b/1/b/55411.jpg"
                  alt
                  class="img-fluid colection"
                >
              </figure>
              <div class="text">
                <span class="text-uppercase">Coleção</span>
                <h3>Teclado</h3>
              </div>
            </router-link>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <router-link to="/shop/1" class="block-2-item">
              <figure class="image">
                <img
                  src="https://cdn.thecoolist.com/wp-content/uploads/2017/03/Razer-ManOWar-7.1-gaming-headset.jpg"
                  alt
                  class="img-fluid colection"
                >
              </figure>
              <div class="text">
                <span class="text-uppercase">Coleção</span>
                <h3>Headset</h3>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- carousel vuejs (utiliza VueCarousel) -->
    <div class="site-section block-3 site-blocks-2 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Produtos do momento</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <carousel :per-page="5" class="carousel">
              <ListaProdutos
                v-for="listaProdutos in produtos"
                :key="listaProdutos.id"
                :title="listaProdutos.title"
                :info="listaProdutos.info"
                :image1="listaProdutos.image1"
                :price="listaProdutos.price"
                :produtos="listaProdutos.produtos"
                :id="listaProdutos.id"
              />
            </carousel>
          </div>
        </div>
      </div>
    </div>

    <!-- área de promoção -->
    <div class="site-section block-8">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Promoção!</h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-12 col-lg-7 mb-5">
            <router-link to="/shop/1">
              <img
                src="https://i.rtings.com/images/reviews/headphones/articles/best/best-gaming-headsets-under-100-medium.jpg"
                alt="Image placeholder"
                class="img-fluid rounded"
              >
            </router-link>
          </div>
          <div class="col-md-12 col-lg-5 text-center pl-md-5">
            <h2>
              <router-link to="/shop/1">20% de desconto em todos os headsets da loja</router-link>
            </h2>
            <p class="post-meta mb-4">
              Por
              <router-link to="/about">Vue Periféricos</router-link>
              <span class="block-8-sep">&bullet;</span> 3 de maio de 2019
            </p>
            <p>Todos os headsets da loja estão com 20% de desconto, marcas como: razer, logitech, corsair, hyperx.</p>
            <p>
              <router-link to="/shop/1" class="btn btn-primary btn-sm">Comprar</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListaProdutos from "../pages/carousel.vue";

import api from "@/api";

export default {
  name: "listaprodutos",
  components: {
    ListaProdutos
  },
  data: function() {
    return {
      produtos: []
    };
  },
  async created() {
    const { data } = await api.get(`/produtos`);
    this.produtos = data.filter(function(u) {
      return u.active;
    });
  }
};
</script>

<style scoped>
</style>
