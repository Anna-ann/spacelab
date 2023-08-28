<template>
    <section id="hero" class="hero d-flex">
        <div class="container">
          <div class="row gy-4 d-flex justify-content-between">
            <div class="col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <div class="text">
                <div class="title">
                  <h1>3D printers</h1>
                  <h3>Made in Kazakhstan!</h3>
                </div>
  
                <ul class="orange-bullet">
                  <li>3-months waranty</li>
                  <li>Training on printer operation</li>
                  <li>Delivery anywhere in Kazakhstan</li>
                  <li>1-year post-sale support</li>
                </ul>
              </div>
              </div>
              
    
            <div class="col-lg-8 order-1 order-lg-2 hero-img">
              <img src="/src/assets/3d/hero-img.png" class="img-fluid mb-3 mb-lg-0" alt="">
            </div>
    
          </div>
        </div>
      </section>
</template>

<script>
    export default {
        
    }
</script>

<style>
.text {
  text-align: justify;
}

.title {
  padding: 0;
  text-align: center;
}

.title h1 {
  font-weight: 700;
  font-size: 3em;
}

.title h3 {
  margin-bottom: 20px;
  font-size: 2em;
  font-weight: 500;
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