<template>
    <section id="hero" class="hero d-flex">
        <div class="container">
          <div class="row gy-4 d-flex justify-content-between">
            <div class="col-lg-4">
              <img src="/src/assets/iot/hero-img.png" class="img-fluid mb-3 mb-lg-0" alt="">
            </div>
            <div class="col-lg-8">
              <div class="iot-text">
                <div class="iot-title">
                  <h2>{{$t('heroSection.title')}}</h2>
                  <h3>{{$t('heroSection.subtitle')}}</h3>
                </div>
                </div>
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
.iot-text {
  text-align: justify;
}

.iot-title {
  padding: 0;
  text-align: center;
  padding-left: 20%;
}

.iot-title h2 {
  font-weight: 700;
  font-size: 3em;
  color: #FF7A00;
}

.iot-title h3 {
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