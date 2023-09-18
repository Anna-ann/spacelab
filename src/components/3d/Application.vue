<template>
  <section class="application">
    <div class="container">
      <div class="row">
        <h1>{{ $t('applicationSection.heading') }}</h1>
        <div class="image-grid">
          <div class="image-item">
            <img src="/src/assets/application/1.png" class="image" />
            <div class="overlay">
              <p class="image-title">{{ $t('applicationSection.education') }}</p>
            </div>
          </div>
          <div class="image-item">
            <img src="/src/assets/application/2.png" class="image" />
            <div class="overlay">
              <p class="image-title">{{ $t('applicationSection.medicine') }}</p>
            </div>
          </div>
          <div class="image-item">
            <img src="/src/assets/application/3.png" class="image" />
            <div class="overlay">
              <p class="image-title">{{ $t('applicationSection.industry') }}</p>
            </div>
          </div>
          <div class="image-item">
            <img src="/src/assets/application/4.png" class="image" />
            <div class="overlay">
              <p class="image-title">{{ $t('applicationSection.aerospace') }}</p>
            </div>
          </div>
          <div class="image-item">
            <img src="/src/assets/application/5.png" class="image" />
            <div class="overlay">
              <p class="image-title">{{ $t('applicationSection.toysManufacturing') }}</p>
            </div>
          </div>
          <div class="image-item">
            <img src="/src/assets/application/6.png" class="image" />
            <div class="overlay">
              <p class="image-title">{{ $t('applicationSection.prototypeDevelopment') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
.image-grid {
  display: grid;
  gap: 20px;
}

@media (min-width: 992px) {
  .image-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.image-item {
  position: relative;
  overflow: hidden;
}

.image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-title {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
}

.image-item:hover .image {
  transform: scale(1.1);
}

.image-item:hover .overlay {
  opacity: 1;
}
</style>
