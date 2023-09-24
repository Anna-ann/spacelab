<template>
  <div class="container" id="about">
    <h1>{{$t('about.title')}}</h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="text">
          <p>{{$t('about.text')}}</p>
          <div class="row">
          
            <div class="col-lg-2">
              <i class="bi bi-person-badge-fill"></i>
            </div>
            <div class="col-lg-10">
              <h3>{{$t('about.lists.0.title')}}</h3>
              <p>{{$t('about.lists.0.text')}}</p>
            </div>
            
            <div class="col-lg-2">
              <i class="bi bi-person-check-fill"></i>
            </div>
            <div class="col-lg-10">
              <h3>{{$t('about.lists.1.title')}}</h3>
              <p>{{$t('about.lists.1.text')}}</p>
            </div>
            
            <div class="col-lg-2">
              <i class="bi bi-clipboard-data-fill"></i>
            </div>
            <div class="col-lg-10">
              <h3>{{$t('about.lists.2.title')}}</h3>
              <p>{{$t('about.lists.2.text')}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div
          v-if="!isVideoPlaying"
          @click="playVideo"
          class="video-placeholder"
        >
          <img src="/src/assets/about.jpg" class="img-fluid" />
          <button @click="playVideo" class="play-button">
            <i class="bi bi-play"></i>
          </button>
        </div>
        <video
          v-else-if="selectedLanguage === 'en'"
          src="/src/assets/aboutusen.mp4"
          controls
          autoplay
          class="video-frame"
          @ended="handleVideoEnd"
        ></video>
        <video
          v-else
          src="/src/assets/aboutus.mp4"
          controls
          autoplay
          class="video-frame"
          @ended="handleVideoEnd"
        ></video>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: this.$i18n.locale,
      isVideoPlaying: false,
    };
  },
  methods: {
    playVideo() {
      this.isVideoPlaying = true;
    },
    handleVideoEnd() {
      this.isVideoPlaying = false;
    },
  },
};
</script>

<style scoped>
.video-frame {
  width: 100%;
  height: auto;
}

.text p {
  text-align: justify;
}

.video-placeholder {
  position: relative;
  cursor: pointer;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  font-size: 3rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  transition: background 0.2s ease, transform 0.2s ease;
  animation: scaleUp 0.5s infinite alternate;
}

.play-button::before {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}


@keyframes scaleUp {
  from {
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.play-button:hover {
  background: rgba(0, 0, 0, 0.7);
}

.play-button i {
  font-size: inherit;
  display: inline-block;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
