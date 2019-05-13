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
                  <router-link to="/shop" class="btn btn-sm btn-primary">Comprar</router-link>
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
            <router-link to="/shop" class="block-2-item">
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
            <router-link to="/shop" class="block-2-item">
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
            <router-link to="/shop" class="block-2-item">
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
            <carousel :per-page="3" class="carousel">
              <slide class="slide">
                <div class="block-4 text-center">
                  <figure class="block-4-image">
                    <img
                      src="https://img.olx.com.br/images/08/088922038129681.jpg"
                      alt="Image placeholder"
                      class="img-fluid momento"
                    >
                  </figure>
                  <div class="block-4-text p-4">
                    <h3>
                      <router-link to="#">Corsair Void RGB Wireless</router-link>
                    </h3>
                    <p class="mb-0">Headset</p>
                    <p class="text-primary font-weight-bold">R$ 660,00</p>
                  </div>
                </div>
              </slide>
              <slide class="slide">
                <div class="block-4 text-center">
                  <figure class="block-4-image">
                    <img
                      src="https://gzhls.at/i/08/74/1850874-n8.jpg"
                      alt="Image placeholder"
                      class="img-fluid momento"
                    >
                  </figure>
                  <div class="block-4-text p-4">
                    <h3>
                      <router-link to="#">Hyper X Fury S Speed</router-link>
                    </h3>
                    <p class="mb-0">Mouse Pad</p>
                    <p class="text-primary font-weight-bold">R$ 170,00</p>
                  </div>
                </div>
              </slide>
              <slide class="slide">
                <div class="block-4 text-center">
                  <figure class="block-4-image">
                    <img
                      src="https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/07/Razer-Mamba-stand.jpg"
                      alt="Image placeholder"
                      class="img-fluid momento"
                    >
                  </figure>
                  <div class="block-4-text p-4">
                    <h3>
                      <router-link to="#">Razer Mamba</router-link>
                    </h3>
                    <p class="mb-0">Mouse</p>
                    <p class="text-primary font-weight-bold">R$ 650,00</p>
                  </div>
                </div>
              </slide>
              <slide class="slide">
                <div class="block-4 text-center">
                  <figure class="block-4-image">
                    <img
                      src="https://static.mercadoshops.com/mouse-bungee-benq-zowie-camade-suporte-para-mouse-com-fio_iZ1029143031XvZxXpZ1XfZ243325154-97835138259-6.jpgXsZ243325154xIM.jpg"
                      alt="Image placeholder"
                      class="img-fluid momento"
                    >
                  </figure>
                  <div class="block-4-text p-4">
                    <h3>
                      <router-link to="#">Ben-Q ZOWIE</router-link>
                    </h3>
                    <p class="mb-0">Mouse Bungee</p>
                    <p class="text-primary font-weight-bold">R$ 220</p>
                  </div>
                </div>
              </slide>
              <slide class="slide">
                <div class="block-4 text-center" style="max-height:382px;">
                  <figure class="block-4-image">
                    <img
                      src="https://www.virginmegastore.ae/medias/sys_master/root/hfd/h44/9100951846942/Razer-BlackWidow-X-Tournament-Edition-Chroma-USB-Black-keyboard-694448-Gal-2-Detail.jpg"
                      alt="Image placeholder"
                      class="img-fluid momento"
                    >
                  </figure>
                  <div class="block-4-text p-4">
                    <h3>
                      <router-link to="#">Razer Blackwidow Tournament Edition Chroma Black</router-link>
                    </h3>
                    <p class="mb-0">Telado Mecânico</p>
                    <p class="text-primary font-weight-bold">R$ 899,90</p>
                  </div>
                </div>
              </slide>
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
            <router-link to="/shop">
              <img
                src="https://i.rtings.com/images/reviews/headphones/articles/best/best-gaming-headsets-under-100-medium.jpg"
                alt="Image placeholder"
                class="img-fluid rounded"
              >
            </router-link>
          </div>
          <div class="col-md-12 col-lg-5 text-center pl-md-5">
            <h2>
              <router-link to="/shop">20% de desconto em todos os headsets da loja</router-link>
            </h2>
            <p class="post-meta mb-4">
              Por
              <router-link to="/about">Vue Periféricos</router-link>
              <span class="block-8-sep">&bullet;</span> 3 de maio de 2019
            </p>
            <p>Todos os headsets da loja estão com 20% de desconto, marcas como: razer, logitech, corsair, hyperx.</p>
            <p>
              <router-link to="/shop" class="btn btn-primary btn-sm">Comprar</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
