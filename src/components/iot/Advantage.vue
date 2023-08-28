<template>
  <section id="advantage" class="competitive-advantage">
    <div class="container-fluid">
      <div class="row">
        <h1>Why Choose S-IoVIT?</h1>
        <div class="col-lg-6">
          <img src="/src/assets/iot/iot-reasons.png" alt="">
        </div>
        <div class="col-lg-6">
          <ul class="list-unstyled">
            <li class="icon-li"><i class="bi bi-check-circle-fill"></i> Collect data up to 10 km via LoRa, Wi-Fi, Ethernet</li>
            <li class="icon-li"><i class="bi bi-check-circle-fill"></i> Secure blockchain node for data protection and verification</li>
            <li class="icon-li"><i class="bi bi-check-circle-fill"></i> Global data transmission from and to any location</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<style>
.competitive-advantage img {
  max-width: 80%;
}

.competitive-advantage ul {
  font-size: 18px;
  padding-top: 200px;
  text-align: justify;
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

</style>
