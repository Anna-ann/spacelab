<template>
  <section id="product" class="product">
    <div class="container">
      <h1>{{$t('productCharacteristics.title')}}</h1>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-12 col-lg-5">
                <h3>SL300</h3>
                <img src="/src/assets/3d/SL300.png" class="img-fluid" alt="Slide 1 Image">
              </div>
              <div class="col-12 col-lg-7">
                <div class="product-characteristics">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="characteristic">
                        <div class="characteristic-content">
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/1.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.workingArea')}}: 300х300х300 мм</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/2.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.nozzle')}}: 0.1 – 0.8 мм</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/3.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.printSpeed')}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="characteristic">
                        <div class="characteristic-content">
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/4.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.travelSpeed')}}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/6.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.accuracy')}}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/5.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.printMedia')}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <a href="#contact" class="btn btn-primary btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row">
              <div class="col-12 col-lg-5">
                <h3>SL500</h3>
                <img src="/src/assets/3d/SL500.png" class="img-fluid" alt="Slide 2 Image">
              </div>
              <div class="col-12 col-lg-7">
                <div class="product-characteristics">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="characteristic">
                        <div class="characteristic-content">
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/1.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.workingArea')}}: 500х500х500 мм</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/2.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.nozzle')}}: 0.1 – 0.8 мм</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/3.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.printSpeed')}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="characteristic">
                        <div class="characteristic-content">
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/4.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.travelSpeed')}}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/6.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.accuracy')}}</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/5.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.printMedia')}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <a href="#contact" class="btn btn-primary btn-buy">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style scoped>
#carouselExampleIndicators {
  max-width: none; 
}

.btn-primary {
  margin-top: 10%;
}

.icon {
  width: 100%;
}

.characteristic-content .row {
  margin: 40px 0; 
}

.carousel-control-prev, .carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
</style>
