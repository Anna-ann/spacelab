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
              <div class="card-body">
                <h5 class="card-title">Investment Details</h5>
                <p class="card-text">{{ investmentDetails }}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ budget }}</li>
                <li class="list-group-item">{{ timeline }}</li>
                <li class="list-group-item">{{ constellation }}</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Learn More</a>
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
      investmentDetails: String,
      budget: String,
      timeline: String,
      constellation: String,
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
  
  .card {
    border: none;
  }
  
  .card-title {
    font-weight: bold;
  }
  
  .list-group-item {
    background-color: transparent;
    border: none;
  }
  
  .card-link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .card-link:hover {
    text-decoration: underline;
  }
  </style>
  