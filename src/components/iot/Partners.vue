<template>
  <section class="partners section-default mt-none mb-none">
    <div class="container">
      <div class="row">
        <h1 class="mb-sm">{{$t('partners.title')}}</h1>
        <div class="row">
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="col-sm-6 col-md-4 col-lg-4"
          >
            <div class="square-holder">
              <img :alt="partner.name" :src="partner.logo" />
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
    return {
      partners: [
        { name: 'TTC', logo: '/src/assets/iot/ttc.svg' },
        { name: 'Med365', logo: '/src/assets/iot/med365.png' },
        { name: 'Alemagro', logo: '/src/assets/iot/alemagro.png' },
      ],
    };
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
