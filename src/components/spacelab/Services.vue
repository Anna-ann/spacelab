<template>
  <section class="services" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>{{ $t('services.title') }}</h1>

          <div class="d-flex justify-content-center flex-wrap">
            <router-link to="/space3d" class="card-link mb-5 mx-3">
              <div class="card custom-card" style="width: 18rem; height: 28rem;">
                <div class="img-container">
                  <img src="/src/assets/space3d.jpg" class="card-img" alt="...">
                </div>
                <div class="card-body">
                  <h3 class="card-title">{{ $t('services.cards.0.title') }}</h3>
                  <p class="card-text">{{ $t('services.cards.0.text') }}</p>
                </div>
              </div>
            </router-link>


            <router-link to="/spaceiot" class="card-link mb-5 mx-3">
              <div class="card custom-card" style="width: 18rem; height: 28rem;">
                <div class="img-container">
                  <img src="/src/assets/spaceiot.jpg" class="card-img" alt="...">
                </div>
                <div class="card-body">
                  <h3 class="card-title">{{ $t('services.cards.1.title') }}</h3>
                  <p class="card-text">{{ $t('services.cards.1.text') }}</p>
                </div>
              </div>
            </router-link>


            <router-link to="/spacecubs" class="card-link mb-5 mx-3">
              <div class="card custom-card" style="width: 18rem; height: 28rem;">
                <div class="img-container">
                  <img src="/src/assets/spacecubs.jpg" class="card-img" alt="...">
                </div>
                <div class="card-body">
                  <h3 class="card-title">{{ $t('services.cards.2.title') }}</h3>
                  <p class="card-text">{{ $t('services.cards.2.text') }}</p>
                </div>
              </div>
            </router-link>
          </div>

          <button class="btn btn-primary" type="submit">
            <a href="#contact">{{ $t('services.buttonText') }}</a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'Services'
};
</script>

<style>
.custom-card {
  color: #000;
  text-align: justify;
  position: relative;
  padding: 0;
  overflow: hidden;
}

.img-container {
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.img-container:hover {
  transform: scale(1.1);
}

.card-img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}
</style>
