<template>
  <section class="about" id="about">
    <div class="container-fluid">
      <div class="row">
        <h1>About S-IoVIT</h1>
        <div class="col-lg-6">
          <div class="text">
            <p>Experience reliable data transfer for IoT applications from critical infrastructures worldwide. Our satellite-based system ensures efficient monitoring of climate, environment, and resources</p>
            <ul class="orange-bullet">
              <li>Strategic infostructure that needs to be controlled <span>each moment</span></li>
              <li>For those whose <span>business</span> depends on <span>data</span></li>
              <li>Data transmission at <span>any</span> cost</li>
              <li>Device that will <span>survive</span> even the most hardcore situations</li>
           </ul>
          </div>
          
        </div>
  
          <div class="col-lg-6">
            <div class="position-relative">
              <img src="/src/assets/iot/about.png" class="img-fluid" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  </script>
  
  <style>
  .about .text {
    padding-top: 20%;
  }
  
.about span {
  color: #FF6B00;
}

.orange-bullet {
  list-style: none;
  padding-left: 20px;
  text-align: justify;
}

.orange-bullet li::before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 8px;
  border-color: transparent transparent transparent #FF7A00;
  margin-right: 10px;
}
  </style>
  