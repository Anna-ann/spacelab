<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ $t('contactSection.heading') }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 custom-class">
          <div class="crm">
            <div id="amoforms_container">
              <iframe src="https://forms.amocrm.ru/rrvdrrd" frameborder="0" scrolling="no"></iframe>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="contact-icons">
              <a href="https://wa.me/77016078789" class="whatsapp"><i class="bi bi-whatsapp"></i></a>
              <a href="https://www.instagram.com/space.lab/" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
            <div class="contact-map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.683118608004!2d71.3838036!3d51.0773994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458576f418fe65%3A0x67262ac9a4808fe3!2z0L_RgNC-0YHQvy4g0KLRg9GA0LDQvSA4OSwg0JDRgdGC0LDQvdCwIDAyMDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2shu!4v1683339039564!5m2!1sru!2shu" allowfullscreen="true" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact-icons d-flex justify-content-center mt-4">
              <div class="col-md-4">
                <div class="contact-info">
                  <div class="contact-icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <div class="contact-text">
                    <p>{{ $t('contactSection.address') }}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-info">
                  <div class="contact-icon">
                    <i class="bi bi-phone"></i>
                  </div>
                  <div class="contact-text">
                    <a href="tel:8-701-607-8789">8 701 607 8789</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
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
  mounted() {
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = 'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1693208336';
    document.head.appendChild(script);
  },
};
</script>

<style>
.contact-map-container {
  width: 100%;
  height: 450px;
  overflow: hidden;
  position: relative;
}

.contact-map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
