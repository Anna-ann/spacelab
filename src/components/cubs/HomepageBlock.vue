<template>
    <section class="spacecubs-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="display-4">{{ headline }}</h2>
            <p>{{ text }}</p>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <img :src="imageSrc" alt="Card Image" class="card-img-top">
              <div class="card-body">
                <p class="card-text">Card content here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      headline: String,
      text: String,
      imageSrc: String,
    },
  };
  </script>
  
  
  <style scoped>
  .homepage-block {
    padding: 50px 0;
    text-align: center;
  }
  
  .display-4 {
    font-weight: bold;
  }
  
  .subheadline {
    color: #007bff;
    font-weight: bold;
  }
  
  .container {
    padding: 20px;
  }
  </style>
  