<template>
  <section class="partners section-default mt-none mb-none">
    <div class="container">
      <div class="row">
        <h1 class="mb-sm">{{$t('partners.title')}}</h1>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="square-holder">
              <img alt="TTC" src="/src/assets/iot/ttc.svg" />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="square-holder">
              <img alt="Med365" src="/src/assets/iot/med365.png" />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="square-holder">
              <img alt="Alemagro" src="/src/assets/iot/alemagro.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.square-holder {
  padding: 30px;
  border: 1px solid #cecece;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #f1f1f1;
  min-height: 200px;
  height: 300px;
}

.square-holder img {
  max-width: 100%;
  filter: grayscale(100%);
  transition: all 0.3s;
}

.square-holder:hover img {
  filter: none;
}
</style>
