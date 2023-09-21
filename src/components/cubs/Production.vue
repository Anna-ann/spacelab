<template>
    <section class="spacecubs-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h2 class="display-4">{{ headline }}</h2>
            <p>{{ text }}</p>
          </div>
          <div class="col-lg-6">
            <!-- Video embed example (replace the URL with your video source) -->
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/your_video_id_here"></iframe>
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
  
  .container {
    padding: 20px;
  }
  </style>
  