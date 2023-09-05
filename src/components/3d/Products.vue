<template>
  <section id="product" class="product">
    <div class="container-fluid">
      <h1>{{$t('productCharacteristics.title')}}</h1>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-lg-5">
                <div class="carousel-caption">
                  <h3>SL300</h3>
                </div>
                <div class="slide-image-container">
                  <img src="/src/assets/3d/SL300.png" class="img-fluid d-block w-100" alt="Slide 1 Image">
                </div>
              </div>
              
              <div class="col-lg-7">
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
                              <p>{{$t('productCharacteristics.workingArea')}}300х300х300 мм</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/2.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.nozzle')}}0.1 – 0.8 мм</p>
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
                              <img src="/src/assets/3d/product/5.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.printMedia')}}</p>
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
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <a href="#contact">
                        <button class="btn btn-primary btn-buy">Buy Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-lg-5">
                <div class="carousel-caption">
                  <h3>SL500</h3>
                </div>
                <div class="slide-image-container">
                  <img src="/src/assets/3d/SL500.png" class="img-fluid d-block w-100" alt="Slide 1 Image">
                </div>
              </div>
              
              <div class="col-lg-7">
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
                              <p>{{$t('productCharacteristics.workingArea')}}300х300х300 мм</p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-3">
                              <img src="/src/assets/3d/product/2.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.nozzle')}}0.1 – 0.8 мм</p>
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
                              <img src="/src/assets/3d/product/5.png" class="icon" alt="Icon">
                            </div>
                            <div class="col-9">
                              <p>{{$t('productCharacteristics.printMedia')}}</p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 text-center">
                      <a href="#contact">
                        <button class="btn btn-primary btn-buy">Buy Now</button>
                      </a>
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

.icon {
  width: 100%;
}

.characteristic-content .row {
  margin: 10px 0; 
}
</style>