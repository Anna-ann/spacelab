<template>
  <section class="mainabout" id="about">
    <div class="container-fluid">
      <div class="row">
        <h1>{{$t('about.title')}}</h1>
        <div class="col-lg-6">
          <p>{{$t('about.text')}}</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              :style="{
                backgroundColor: isDarkTheme ? '#ffffff' : '#212529',
                color: isDarkTheme ? '#212529' : '#ffffff'
              }"
            >
              <div class="list-item">
                <i class="bi bi-person-badge-fill"></i>
                <div class="item-content">
                  <h3>{{$t('about.lists.0.title')}}</h3>
                  <p>{{$t('about.lists.0.text')}}</p>
                </div>
              </div>
            </li>
            <li
              class="list-group-item"
              :style="{
                backgroundColor: isDarkTheme ? '#ffffff' : '#212529',
                color: isDarkTheme ? '#212529' : '#ffffff'
              }"
            >
              <div class="list-item">
                <i class="bi bi-person-check-fill"></i>
                <div class="item-content">
                  <h3>{{$t('about.lists.1.title')}}</h3>
                  <p>{{$t('about.lists.1.text')}}</p>
                </div>
              </div>
            </li>
            <li
              class="list-group-item"
              :style="{
                backgroundColor: isDarkTheme ? '#ffffff' : '#212529',
                color: isDarkTheme ? '#212529' : '#ffffff'
              }"
            >
              <div class="list-item">
                <i class="bi bi-clipboard-data-fill"></i>
                <div class="item-content">
                  <h3>{{$t('about.lists.2.title')}}</h3>
                  <p>{{$t('about.lists.2.text')}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
  
        <div class="col-lg-6">
          <div class="position-relative">
            <img src="/src/assets/about.jpg" class="img-fluid" alt="">
            <div class="play-btn-container" v-if="!showVideo">
              <button type="button" class="play-btn" @click="playVideo">
                <i class="bi bi-play"></i>
              </button>
            </div>
            <iframe v-if="showVideo" class="video-frame" :src="videoUrl" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    </section>
  </template>
  
  <script>
export default {
  name: 'About',
  props: {
    isDarkTheme: Boolean,
  },
  data() {
    return {
      showVideo: false,
      playButtonClicked: false,
    };
  },
  computed: {
    videoUrl() {
      const lang = this.$i18n.locale;

   
      const videoPaths = {
        en: '/src/assets/aboutusen.mp4',
      };

   
      return videoPaths[lang] || '/src/assets/aboutus.mp4';
    },
  },
  methods: {
    playVideo() {
      this.showVideo = true;
      this.playButtonClicked = true;
    },
  },
};
</script>

  
  <style>
  .mainabout {
    text-align: left;
    background-color: var(--bg-color); 
  }

  .card {
    background-color: var(--card-bg-color) !important;
    color: var(--text-color) !important; 
  }
  
  .mainabout h1 {
    text-align: center;
  }

  .mainabout p {
    text-align: justify;
  }
  
  .mainabout .list-group {
    margin: 5px 0;
  }
  
  .mainabout .list-item {
    display: flex;
    align-items: center;
  }
  
  .mainabout .list-item i {
    margin-right: 10px;
  }

  .mainabout .list-group-item {
    border: none; 
  }
  
.play-btn-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    z-index: 2;
    border: none;
    background-color: #000;
    border-radius: 50%;
  }
  
 .play-btn-container:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .play-btn-container button {
    border: none;
    background-color: rgba(85, 85, 85, 0.7);
    border-radius: 50%;
    animation: blink 1s infinite;
  }

  .play-btn-container button:hover {
    animation: none;
  }
  
  .play-btn-container button.play-button-clicked {
    animation: none; 
    background-color: rgba(0, 0, 0, 0.7); 
    transform: scale(1.1);
  }

.video-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .custom-list-item {
    background-color: var(--card-bg-color) !important;
    color: var(--text-color) !important;
    border: none !important;
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  </style>
  