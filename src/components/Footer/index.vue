<template>
  <!-- footer/rodapé do site -->
  <footer class="site-footer border-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="row">
            <div class="col-md-12">
              <h3 class="footer-heading mb-4">Navegação</h3>
            </div>
            <div class="col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li>
                  <router-link to="/shop">Categorias</router-link>
                </li>
                <li>
                  <router-link to="/cart">Carrinho</router-link>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-4">
              <ul class="list-unstyled">
                <li>
                  <router-link to="/about">Origem</router-link>
                </li>
                <li>
                  <router-link to="/contact">Desenvolvedor</router-link>
                </li>
                <li>
                  <router-link to="/about">Desenvolvimento do site</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h3 class="footer-heading mb-4">Promoções</h3>
          <router-link to="/shop" class="block-6">
            <img
              src="https://thegamingsetup.com/wp-content/uploads/bb-plugin/cache/differentmouseshapes-panorama.jpg"
              alt="Image placeholder"
              class="img-fluid rounded mb-4"
            >
            <h3 class="font-weight-light mb-0">Encontrando seu mouse perfeito</h3>
            <p>Promoção &mdash; 5, 2019</p>
          </router-link>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="block-5 mb-5">
            <h3 class="footer-heading mb-4">Informações de Contato</h3>
            <ul class="list-unstyled">
              <li class="address">Guarapuava, Santa Cruz, Coronel Saldanha, 3018</li>
              <li class="phone">
                <a href="tel://42991459293">42 991459293</a>
              </li>
              <li class="email">eduhhceni@gmail.com</li>
            </ul>
          </div>

          <div class="block-7">
            <form action="#" method="post">
              <label for="email_subscribe" class="footer-heading">Receber E-mails</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control py-4"
                  id="email_subscribe"
                  placeholder="Email"
                >
                <input type="submit" class="btn btn-sm btn-primary" value=">" disabled>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row pt-5 mt-5 text-center">
        <div class="col-md-12">
          <p></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
