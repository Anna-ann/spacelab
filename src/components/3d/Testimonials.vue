<template>
    <div class="testimonials">
      <h1>Testimonials</h1>
      <div id="testimonialsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <p class="testimonial-author">{{ testimonial.author }}</p>
          </div>
        </div>
      </div>
  
      <h1>Companies That Purchased From Us</h1>
      <div id="logoSlider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
          <div v-for="(logo, index) in logos" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <img :src="logo" alt="Company Logo" class="logo-image">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          { text: "Dear representatives of the Space Lab organization, I would like to express my sincere gratitude for the production of a 3D printer for our order. We are fully satisfied with the quality and functionality of the received equipment. I especially want to mention your team of engineers, who always responded promptly to our questions and always remained open to discuss any ideas.", author: "John Doe, CEO" },
          { text: "Amazing quality and excellent service.", author: "Jane Smith, CFO" },
          // Add more testimonials
        ],
        logos: [
          "src/assets/3d/companies/NU.png",
          "src/assets/company-logos/logo2.png",
          "src/assets/company-logos/logo3.png",
          // Add more logos
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
  }
  
  .testimonial-author {
    font-style: italic;
    color: #888;
  }
  
  .logo-image {
    max-width: 100px;
    margin: 0 auto;
  }
  </style>
  