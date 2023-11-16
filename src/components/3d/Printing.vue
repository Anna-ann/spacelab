<template>
  <div class="container">
    <div class="row">
      <section class="printing">
        <h1>{{ $t('printing.title') }}</h1>
        <div class="row">
          <div class="col-lg-5">
            <img src="/src/assets/3d/1.jpeg" class="img-fluid">
          </div>

          <div class="col-lg-7">
            <h3>{{ $t('printing.modeling.title') }}</h3>
            <em>{{ $t('printing.modeling.subtitle') }}</em>
            <p>{{ $t('printing.modeling.description') }}
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-7">
            <h3>{{ $t('printing.printingTypes.title') }}</h3>
            <em>{{ $t('printing.printingTypes.fdm.subtitle') }}</em>
            <ul class="list-unstyled">
              <li>
                <i class="bi bi-check"></i>{{ $t('printing.printingTypes.fdm.list.0') }}
              </li>
              <li>
                <i class="bi bi-check"></i> {{ $t('printing.printingTypes.fdm.list.1') }}
              </li>
              <li>
                <i class="bi bi-check"></i> {{ $t('printing.printingTypes.fdm.list.2') }}
              </li>
              <li>
                <i class="bi bi-check"></i> {{ $t('printing.printingTypes.fdm.list.3') }}
              </li>
            </ul>

            <em>{{ $t('printing.printingTypes.sla.subtitle') }}</em>
            <ul class="list-unstyled">
              <li>
                <i class="bi bi-check"></i> {{ $t('printing.printingTypes.sla.list.0') }}
              </li>
              <li>
                <i class="bi bi-check"></i> {{ $t('printing.printingTypes.sla.list.1') }}
              </li>
              <li>
                <i class="bi bi-check"></i>{{ $t('printing.printingTypes.sla.list.2') }}
              </li>
              <li>
                <i class="bi bi-check"></i> {{ $t('printing.printingTypes.sla.list.3') }}
              </li>
            </ul>
          </div>

          <div class="col-lg-5">
            <img src="/src/assets/3d/2.jpeg" class="img-fluid">
          </div>
        </div>


        <div class="row">
          <div class="col-lg-5">
            <img src="/src/assets/3d/3.jpeg" class="img-fluid">
          </div>

          <div class="col-lg-7">
            <h3>{{ $t('printing.approbation.title') }}</h3>
            <p>{{ $t('printing.approbation.description') }}
            </p>
          </div>
        </div>

        <button class="btn btn-primary btn-buy" type="button" @click="scrollToContact">
          {{ $t('printing.btn') }}
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToContact() {
      const contactElement = document.getElementById('contact');

      if (contactElement) {
        window.scrollTo({
          top: contactElement.offsetTop,
          behavior: 'smooth',
        });
      }
    },
  }
}
</script>

<style scoped>
.printing h3 {
  font-weight: 600;
  font-size: 26px;
  padding-top: 5%;
}

.printing ul {
  list-style: none;
  padding: 0;
}

.printing ul li {
  text-align: justify;
}

.printing ul li:last-child {
  padding-bottom: 0;
}

.printing img {
  padding: 10% 0;
}
</style>