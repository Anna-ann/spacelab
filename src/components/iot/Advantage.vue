<template>
  <section id="advantage" class="competitive-advantage">
    <div class="container">
      <div class="row">
        <h1>{{$t('advantageSection.heading')}}</h1>
        <div class="col-lg-6">
          <img src="/src/assets/iot/iot-reasons.png" alt="">
        </div>
        <div class="col-lg-6">
          <ul class="list-unstyled">
            <li class="icon-li"><i class="bi bi-check-circle-fill"></i>{{$t('advantageSection.items.0')}}</li>
            <li class="icon-li"><i class="bi bi-check-circle-fill"></i>{{$t('advantageSection.items.1')}}</li>
            <li class="icon-li"><i class="bi bi-check-circle-fill"></i>{{$t('advantageSection.items.2')}}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.competitive-advantage img {
  max-width: 80%; 
}

.competitive-advantage ul {
  font-size: 18px;
  text-align: justify; 
  padding-top: 150px;
}

.competitive-advantage ul li {
  padding-left: 30px;
  position: relative;
  margin-bottom: 15px;
}

.competitive-advantage ul li.icon-li::before {
  font-weight: 700;
  position: absolute;
  left: 0;
  top: 0;
  color: #FF6B00;
}

@media (max-width: 768px) {
  .competitive-advantage ul {
    font-size: 18px;
    padding-top: 80px; 
  }
}
</style>
