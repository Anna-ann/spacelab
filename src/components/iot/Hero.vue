<template>
  <section id="hero" class="hero d-flex">
    <div class="container">
      <div class="row gy-4 d-flex justify-content-between">
        <div class="col-lg-4">
          <img src="/src/assets/iot/about.png" class="img-fluid" alt="">
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
export default {};
</script>

<style>
.iot-title {
  padding: 0;
  text-align: center;
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

.iot-text {
  text-align: justify;
}

@media (max-width: 768px) {
  .iot-text {
    text-align: justify;
  }

  .iot-title h2 {
    font-weight: 700;
    font-size: 2.3em;
    color: #FF7A00;
  }
}
</style>
