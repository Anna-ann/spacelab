<template>
    <section class="spacecubs-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="display-4">{{ headline }}</h2>
            <p>{{ text }}</p>
          </div>
          <div class="col-lg-6">
            <div class="expertise-image">
              <!-- You can add an image or other content here -->
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
      // You can add other props as needed for this block
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
  
  .expertise-image {
    /* You can add styles for the image or other content here */
  }
  </style>
  