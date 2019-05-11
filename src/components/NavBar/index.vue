<template>
  <!-- barra de navegação/cabeçalho do site -->
  <header class="site-navbar" role="banner">
    <div class="site-navbar-top">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
            <form action class="site-block-top-search">
              <span class="icon icon-search2"></span>
              <input type="text" class="form-control border-0" placeholder="Pesquisar">
            </form>
          </div>

          <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
            <div class="site-logo">
              <router-link to="/" class="js-logo-clone">PeriféricosVue</router-link>
            </div>
          </div>

          <div class="col-6 col-md-4 order-3 order-md-3 text-right">
            <div class="site-top-icons">
              <ul>
                <li>
                  <router-link to="#">
                    <span class="icon icon-person"></span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <span class="icon icon-heart-o"></span>
                  </router-link>
                </li>
                <li>
                  <router-link to="/cart" class="site-cart">
                    <span class="icon icon-shopping_cart"></span>
                    <span class="count">2</span>
                  </router-link>
                </li>
                <li class="d-inline-block d-md-none ml-md-0">
                  <router-link to="/" class="site-menu-toggle js-menu-toggle">
                    <span class="icon-menu"></span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="site-navigation text-right text-md-center" role="navigation">
      <div class="container">
        <ul class="site-menu js-clone-nav d-none d-md-block">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/shop">Loja</router-link>
          </li>
          <li>
            <router-link to="/about">Sobre</router-link>
          </li>
          <li>
            <a href="style/pdf.pdf">PDF</a>
          </li>
          <li>
            <router-link to="/contact">Contato</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
