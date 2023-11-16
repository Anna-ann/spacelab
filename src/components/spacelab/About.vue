<template>
  <div class="container">
    <div id="content-wrapper">
      <div class="col-lg-6">
        <div id="featured-container">
          <img :src="featuredItem.src" v-if="featuredItem.type === 'image'" id="featured" />
          <video :src="featuredItem.src" v-if="featuredItem.type === 'video'" id="featured" controls></video>
        </div>

        <div id="slide-wrapper">
          <i class="bi bi-arrow-left arrow" @click="scrollLeft"></i>
          <div id="slider" @transitionend="transitionEnd">
            <template v-for="(item, index) in sliderItems" :key="index">
              <img v-if="item.type === 'image'" :src="item.src" @mouseover="changeItem(index)" class="thumbnail"
                :class="{ 'active': index === activeIndex }" />
              <video v-if="item.type === 'video'" :src="item.src" @mouseover="changeItem(index)" class="thumbnail"
                :class="{ 'active': index === activeIndex }" controls></video>
            </template>
          </div>
          <i class="bi bi-arrow-right arrow" @click="scrollRight"></i>
        </div>
      </div>

      <div class="col-lg-6">

        <h1>{{ $t('about.title') }}</h1>
        <div class="text">
          <p>{{ $t('about.text') }}</p>
          <div class="row">

            <div class="col-lg-2">
              <i class="bi bi-person-badge-fill"></i>
            </div>
            <div class="col-lg-10">
              <h3>{{ $t('about.lists.0.title') }}</h3>
              <p>{{ $t('about.lists.0.text') }}</p>
            </div>

            <div class="col-lg-2">
              <i class="bi bi-person-check-fill"></i>
            </div>
            <div class="col-lg-10">
              <h3>{{ $t('about.lists.1.title') }}</h3>
              <p>{{ $t('about.lists.1.text') }}</p>
            </div>

            <div class="col-lg-2">
              <i class="bi bi-clipboard-data-fill"></i>
            </div>
            <div class="col-lg-10">
              <h3>{{ $t('about.lists.2.title') }}</h3>
              <p>{{ $t('about.lists.2.text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSources: {
        en: 'src/assets/aboutusen.mp4',
        kz: 'src/assets/aboutus.mp4',
        ru: 'src/assets/aboutus.mp4',
      },
      sliderItems: [
        { type: 'video', locale: 'en' },
        { type: 'image', src: 'src/assets/about.jpg' },
        { type: 'image', src: 'src/assets/11.jpeg' },
        { type: 'image', src: 'src/assets/12.jpeg' },
        { type: 'image', src: 'src/assets/15.jpeg' }
      ],
      activeIndex: 0,
      transitioning: false
    };
  },
  computed: {
    featuredItem() {
      const currentItem = this.sliderItems[this.activeIndex];
      return {
        type: currentItem.type,
        src: currentItem.type === 'video' ? this.videoSources[this.$i18n.locale] : currentItem.src
      };
    }
  },
  methods: {
    changeItem(index) {
      if (!this.transitioning) {
        this.transitioning = true;
        this.activeIndex = (index + this.sliderItems.length) % this.sliderItems.length;
      }
    },
    scrollLeft() {
      if (!this.transitioning) {
        this.transitioning = true;
        this.activeIndex = (this.activeIndex - 1 + this.sliderItems.length) % this.sliderItems.length;
      }
    },
    scrollRight() {
      if (!this.transitioning) {
        this.transitioning = true;
        this.activeIndex = (this.activeIndex + 1) % this.sliderItems.length;
      }
    },
    transitionEnd() {
      this.transitioning = false;
    }
  }
};
</script>

<style scoped>
#content-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.thumbnail {
  object-fit: cover;
  max-width: 180px;
  max-height: 100px;
  cursor: pointer;
  opacity: 0.5;
  margin: 5px;
  transition: opacity 0.3s ease-in-out;
}

.thumbnail:hover,
.active {
  opacity: 1;
}

#featured-container {
  margin-bottom: 20px;
}

#featured-container img {
  max-width: 90%;
  max-height: 500px;
}

#featured-container video {
  max-width: 90%;
}

#slide-wrapper {
  display: flex;
  min-height: 100px;
  align-items: center;
}

#slider {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

#slider::-webkit-scrollbar {
  width: 8px;
}

#slider::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#slider::-webkit-scrollbar-thumb {
  background-color: #dede2e;
  outline: 1px solid slategrey;
  border-radius: 100px;
}

#slider::-webkit-scrollbar-thumb:hover {
  background-color: #18b5ce;
}

.arrow {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.arrow:hover {
  opacity: 0.5;
  width: 35px;
  height: 35px;
}
</style>