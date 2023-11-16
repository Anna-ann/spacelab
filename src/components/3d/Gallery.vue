<template>
  <section class="gallery">
    <div class="container">
      <div class="row">
        <h1>{{ $t("ratingSection.heading") }}</h1>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/src/assets/3d/gallery/2.jpg" class="mx-auto d-block w-50" alt="Slide 2">
            </div>
            <div class="carousel-item">
              <img src="/src/assets/3d/gallery/3.jpg" class="mx-auto d-block w-50" alt="Slide 3">
            </div>
            <div class="carousel-item">
              <img src="/src/assets/3d/gallery/4.jpg" class="mx-auto d-block w-50" alt="Slide 4">
            </div>
            <div class="carousel-item">
              <img src="/src/assets/3d/gallery/5.jpg" class="mx-auto d-block w-50" alt="Slide 5">
            </div>
            <div class="carousel-item">
              <img src="/src/assets/3d/gallery/17.jpeg" class="mx-auto d-block w-50" alt="Slide 4">
            </div>
            <div class="carousel-item">
              <img src="/src/assets/3d/gallery/18.jpeg" class="mx-auto d-block w-50" alt="Slide 5">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
img {
  max-height: 520px;
}
</style>
