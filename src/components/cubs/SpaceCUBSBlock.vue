<template>
    <section class="spacecubs-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="display-4">{{ headline }}</h2>
            <p>{{ text }}</p>
          </div>
          <div class="col-lg-6">
            <img :src="imageSrc" alt="Block Image" class="img-fluid rounded">
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
  .spacecubs-block {
    padding: 50px 0;
    text-align: center;
  }
  
  .display-4 {
    font-weight: bold;
  }
  
  .container {
    padding: 20px;
  }
  </style>
  