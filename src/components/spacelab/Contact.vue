<template>
    <section id="contact" class="contact">
        <div class="container">
          <div class="row">

            <h1>{{$t('contact.title')}}</h1>
            <div class="col-lg-12 text-center">
                <div class="row justify-content-center align-items-center">
                    <div class="social-icons d-flex justify-content-center mt-4">
                        <a href="https://wa.me/77016078789"><i class="bi bi-whatsapp"></i></a>
                        <a href="https://www.instagram.com/space.lab/"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                    </div>
                    <div class="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.683118608004!2d71.3838036!3d51.0773994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458576f418fe65%3A0x67262ac9a4808fe3!2z0L_RgNC-0YHQvy4g0KLRg9GA0LDQvSA4OSwg0JDRgdGC0LDQvdCwIDAyMDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2shu!4v1683339039564!5m2!1sru!2shu">
                        </iframe>
                    </div>

                    <div class="contact-icons d-flex justify-content-center mt-4">
                        <div class="col-md-3">
                            <div class="contact-info">
                              <div class="contact-icon">
                                <i class="bi bi-geo-alt"></i>
                              </div>
                              <div class="contact-text">
                                <p>{{$t('contact.address')}}</p>
                              </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                              <div class="contact-icon">
                                <i class="bi bi-phone"></i>
                              </div>
                              <div class="contact-text">
                                <a href="tel:8-701-607-8789">8 701 607 8789</a>
                              </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="contact-info">
                              <div class="contact-icon">
                                <i class="bi bi-envelope"></i>
                              </div>
                              <div class="contact-text">
                                <a href="mailto:kense@spacelab.kz">kense@spacelab.kz</a>
                              </div>
                            </div>
                        </div>
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

.contact-map {
    width: 100%;
    height: 450px;
    padding: 20px 0;
  }
  
  .contact-map iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
  
  @media (min-width: 992px) {
    .contact-map iframe {
      width: 800px;     
      height: 450px;
    }
  }

</style>