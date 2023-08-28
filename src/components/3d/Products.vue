<template>
  <section id="product" class="product">
    <div class="container-fluid">
      <h1>Our Printers</h1>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(item, index) in carouselItems" :key="index" :class="{ active: index === 0 }">
            <div class="row">
              <div class="col-lg-6">
                <div class="carousel-caption">
                  <h3>{{ item.title }}</h3>
                </div>
                <div class="slide-image-container">
                  <img :src="item.imageSrc" class="d-block w-100" :alt="item.altText">
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-characteristics">
                  <div class="row">
                    <div class="col-sm-6" v-for="(characteristic, idx) in item.characteristics" :key="idx">
                      <div class="characteristic">
                        <img :src="characteristic.iconSrc" class="icon" :alt="characteristic.iconAlt">
                        <div class="characteristic-content">
                          <p>{{ characteristic.content }}</p>
                        </div>
                      </div>
                    </div>
                    <div class="btn">
                      <a href="#contact">
                        <button class="btn btn-primary btn-buy">Buy Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      carouselItems: [
        {
          imageSrc: '/src/assets/3d/SL300.png',
          altText: 'Slide Image',
          title: 'SL300',
          characteristics: [
            {
              iconSrc: '/src/assets/3d/product/1.png',
              iconAlt: 'Icon',
              content: 'Working area: 300x300x300 mm',
            },
            {
              iconSrc: '/src/assets/3d/product/2.png',
              iconAlt: 'Icon',
              content: 'Nozzle: 0.1 - 0.8 mm',
            },
            {
              iconSrc: '/src/assets/3d/product/3.png',
              iconAlt: 'Icon',
              content: 'Print speed: up to 100 mm/s',
            },
            {
              iconSrc: '/src/assets/3d/product/4.png',
              iconAlt: 'Icon',
              content: 'Travel speed: 200 mm/s',
            },
            {
              iconSrc: '/src/assets/3d/product/5.png',
              iconAlt: 'Icon',
              content: 'Print media: PETG, PLA, and other materials up to 280°C',
            },
            {
              iconSrc: '/src/assets/3d/product/6.png',
              iconAlt: 'Icon',
              content: 'Accuracy up to 50 microns',
            },
          ],
        },
        {
          imageSrc: '/src/assets/3d/SL500.png',
          altText: 'Slide Image',
          title: 'SL500',
          characteristics: [
            {
              iconSrc: '/src/assets/3d/product/1.png',
              iconAlt: 'Icon',
              content: 'Working area: 500x500x500 mm',
            },
            {
              iconSrc: '/src/assets/3d/product/2.png',
              iconAlt: 'Icon',
              content: 'Nozzle: 0.1 - 0.8 mm',
            },
            {
              iconSrc: '/src/assets/3d/product/3.png',
              iconAlt: 'Icon',
              content: 'Print speed: up to 100 mm/s',
            },
            {
              iconSrc: '/src/assets/3d/product/4.png',
              iconAlt: 'Icon',
              content: 'Travel speed: 200 mm/s',
            },
            {
              iconSrc: '/src/assets/3d/product/5.png',
              iconAlt: 'Icon',
              content: 'Print media: PETG, PLA, and other materials up to 280°C',
            },
            {
              iconSrc: '/src/assets/3d/product/6.png',
              iconAlt: 'Icon',
              content: 'Accuracy up to 50 microns',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon {
  width: 40%;
}
</style>
