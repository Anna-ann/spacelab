<template>
  <h1>Our Printers</h1>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        type="button"
        :data-bs-target="'#carouselExampleIndicators'"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        aria-label="Slide"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
      <div class="row">
        <div class="col-lg-6">
          <div class="slide-image-container">
            <img :src="slide.image" class="d-block w-100">
          </div>
          <button class="btn btn-primary btn-buy">Buy Now</button>
        </div>
        <div class="col-lg-6">
          <div class="carousel-caption">
            <h3>{{ slide.title }}</h3>
            <div class="product-characteristics">
              <div class="row">
                <div class="col-sm-4" v-for="(characteristic, charIndex) in slide.characteristics.left" :key="charIndex">
                  <div class="characteristic">
                    <img :src="characteristic.icon" class="icon">
                    <div class="characteristic-content">
                      <p>{{ characteristic.text }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4" v-for="(characteristic, charIndex) in slide.characteristics.right" :key="charIndex">
                  <div class="characteristic">
                    <img :src="characteristic.icon" class="icon">
                    <div class="characteristic-content">
                      <p>{{ characteristic.text }}</p>
                    </div>
                  </div>
                </div>
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
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image: "src/assets/3d/SL300.png",
          title: "SL300",
          characteristics: {
            left: [
              {
                icon: "src/assets/3d/product/1.png",
                text: "Working area: 300x300x300 mm",
              },
              {
                icon: "src/assets/3d/product/2.png",
                text: "Nozzle: 0.1 - 0.8 mm",
              },
              {
                icon: "src/assets/3d/product/3.png",
                text: "Print speed: up to 100 mm/s",
              },
            ],
            right: [
              {
                icon: "src/assets/3d/product/4.png",
                text: "Travel speed: 250-300mm/s",
              },
              {
                icon: "src/assets/3d/product/5.png",
                text: "Print media: PETG, PLA, and other materials up to 280°C",
              },
              {
                icon: "src/assets/3d/product/6.png",
                text: "Accuracy up to 50 microns",
              },
            ],
          },
        },
        {
          image: "src/assets/3d/SL500.png",
          title: "SL500",
          characteristics: {
            left: [
              {
                icon: "src/assets/3d/product/1.png",
                text: "Working area: 500x500x500 mm",
              },
              {
                icon: "src/assets/3d/product/2.png",
                text: "Nozzle: 0.1 - 0.8 mm",
              },
              {
                icon: "src/assets/3d/product/3.png",
                text: "Print speed: up to 100 mm/s",
              },
            ],
            right: [
              {
                icon: "src/assets/3d/product/4.png",
                text: "Travel speed: 250-300mm/s",
              },
              {
                icon: "src/assets/3d/product/5.png",
                text: "Print media: PETG, PLA, and other materials up to 280°C",
              },
              {
                icon: "src/assets/3d/product/6.png",
                text: "Accuracy up to 50 microns",
              },
            ],
          },
        },
      ],
    };
  },
};
</script>

<style>
.slide-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.icon {
  width: 15%;
}
</style>
