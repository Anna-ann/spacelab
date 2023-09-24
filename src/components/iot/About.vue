<template>
  <section class="iotabout" id="about">
    <div class="container">
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
          <div class="position-relative video-container">
            <video class="video-fluid" id="about-video" loop @click="toggleVideo">
              <source src="/src/assets/iot/about.mp4" type="video/mp4">
            </video>
            <div class="play-button" v-if="!isVideoPlaying" @click="playVideo"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isVideoPlaying: false,
    };
  },
  methods: {
    playVideo() {
      const video = document.getElementById('about-video');
      video.play();
      this.isVideoPlaying = true;
    },
    toggleVideo() {
      const video = document.getElementById('about-video');
      if (this.isVideoPlaying) {
        video.pause();
        this.isVideoPlaying = false;
      } else {
        video.play();
        this.isVideoPlaying = true;
      }
    },
  },
};
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

.video-fluid {
  max-width: 100%;
  height: auto;
}

.video-container {
  position: relative;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;
}

.play-button:before {
  content: '';
  border-left: 25px solid #FF6B00;
  border-right: none;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.play-button:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>
