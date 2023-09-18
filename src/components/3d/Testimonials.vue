<template>
  <section class="testimonials">
    <div class="container">
      <div class="row">
        <h1>{{ $t('testimonialsSection.testimonialsHeading') }}</h1>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
          <div class="carousel-inner">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="carousel-item" :class="{ active: index === 0 }">
              <p class="testimonial-text">{{ $t(`testimonialsSection.testimonial${index + 1}`) }}</p>
              <p class="testimonial-author">{{ $t(`testimonialsSection.testimonialAuthor${index + 1}`) }}</p>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <h1>{{ $t('testimonialsSection.companiesHeading') }}</h1>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="square-holder">
              <img src="/src/assets/3d/companies/NU.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="square-holder">
              <img src="/src/assets/3d/companies/abai.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="square-holder">
              <img src="/src/assets/3d/companies/american.png" class="img-fluid" />
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
      testimonials: [
        { text: "Dear representatives of the Space Lab organization, I would like to express my sincere gratitude for the production of a 3D printer for our order. We are fully satisfied with the quality and functionality of the received equipment. I especially want to mention your team of engineers, who always responded promptly to our questions and always remained open to discuss any ideas.", author: "American Corner & Makerspace Astana" },
        { text: "Amazing quality and excellent service.", author: "Jane Smith, CFO" },
      ],
    };
  },
};
</script>
  
<style scoped>
.testimonials {
  padding: 40px;
}

.carousel-inner {
  text-align: center;
}

.testimonial-text {
  font-size: 1.2em;
  margin-bottom: 10px;
  padding: 0 20px; 
  text-align: justify; 
  text-justify: distribute-all-lines; 
}

.testimonial-author {
  font-style: italic;
  color: #888;
}

.logo-image {
  max-width: 100px;
  margin: 0 auto;
}

@media (max-width: 320px) {
  .testimonial-text {
    font-size: 1em;
    padding: 0 10px; 
  }
}
</style>
