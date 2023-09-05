<template>
  <section class="iotabout" id="about">
    <div class="container-fluid">
      <div class="row">
        <h1>{{ $t('aboutSection.heading') }}</h1>
        <div class="col-lg-6">
          <div class="text">
            <p>{{ $t('aboutSection.description') }}</p>
            <ul class="orange-bullet">
              <li>{{ $t('aboutSection.bullets.0') }}</li>
              <li>{{ $t('aboutSection.bullets.1') }}</li>
              <li>{{ $t('aboutSection.bullets.2') }}</li>
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
.iotabout .text {
  padding-top: 20%;
}

.iotabout span {
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

.orange-bullet li {
  display: flex;
  align-items: center;
}
</style>
