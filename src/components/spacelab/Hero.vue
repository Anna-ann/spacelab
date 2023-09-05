<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h2>{{ $t('hero.spaceStarts') }}</h2>
          <p>{{ $t('hero.spaceStartsDescription') }}</p>
        </div>
        <div class="col-lg-8">
          <img src="/src/assets/hero-bg.png" alt="Hero Image" class="img-fluid">
        </div>
      </div>

      <div class="row">
        <div class="d-flex justify-content-center flex-wrap">
          <div class="col-md-6 col-lg-4">
            <div class="card d-flex dark-theme">
              <div class="features">
                <div class="row">
                  <div class="col-lg-2">
                    <div class="card-image">
                      <img src="/src/assets/space3d.png" class="card-img-fluid" alt="Space3D">
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <div class="card-title">
                      <h3>Space3D</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-text">  
                    <p>{{ $t('hero.cards.0.text') }}</p>
                  </div>
                  <router-link to="/space3d">
                    <button class="btn btn-primary"><p>{{ $t('hero.cards.1.buttonText') }}</p></button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card d-flex dark-theme">
              <div class="features">
                <div class="row">
                  <div class="col-lg-2">
                    <div class="card-image">
                      <img src="/src/assets/spaceiot.png" class="card-img-fluid" alt="SpaceIoT">
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <div class="card-title">
                      <h3>SpaceIoT</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-text">
                    <p>{{ $t('hero.cards.1.text') }}</p>
                  </div>
                  <router-link to="/spaceiot">
                    <button class="btn btn-primary"><p>{{ $t('hero.cards.1.buttonText') }}</p></button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="card d-flex dark-theme">
              <div class="features">
                <div class="row">
                  <div class="col-lg-2">
                    <div class="card-image">
                      <img src="/src/assets/spacecubs.png" class="card-img-fluid" alt="SpaceCUBS">
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <div class="card-title">
                      <h3>SpaceCUBS</h3>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-text">
                    <p>{{ $t('hero.cards.2.text') }}</p>
                  </div>
                  <router-link to="/spacecubs">
                    <button class="btn btn-primary"><p>{{ $t('hero.cards.1.buttonText') }}</p></button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    isDarkTheme: Boolean,
  },
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  text-align: center;
  background-color: var(--bg-color);
}
.card {
  background-color: var(--card-bg-color) !important;
  color: var(--text-color) !important;
  text-align: justify;
  color: #fff;
  border: none;
  display: flex;
}

.hero p {
  margin-bottom: 30px;
}

.hero .icon h4 {
  font-weight: bold;
  color: #FF6B00;
}

.card:hover {
  text-align: justify;
  color: #FF6B00;
}

.card img {
  width: 50px;
}

.card-image {
  margin-right: 15px;
}

.card-title {
  font-size: 1.5em;
}

.card-text {
  margin-top: 10px;
}
</style>
