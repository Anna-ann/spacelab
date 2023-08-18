<template>
  <section class="about" id="about">
    <div class="container-fluid">
      <div class="row">
        <h1>About us</h1>
        <div class="col-lg-6">
          <p>Startup company providing innovative solutions for industrial technologies, from additive installations to telecommunications</p>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="list in lists"
              :key="list.title"
              :style="{
                backgroundColor: isDarkTheme ? '#ffffff' : '#212529',
                color: isDarkTheme ? '#212529' : '#ffffff'
              }"
            >
              <div class="list-item">
                <i :class="list.icon"></i>
                <div class="item-content">
                  <h3>{{ list.title }}</h3>
                  <p>{{ list.text }}</p>
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
        lists: [
          { title: 'Expertise', text: 'By choosing us, you trust a wide range of specialists', icon: 'bi bi-person-badge-fill'},
          { title: 'Customer focus', text: 'You can contact us for any questions within 3 months', icon: 'bi bi-person-check-fill' },
          { title: 'Experience', text: 'We have been successfully providing our services for more than 3 years', icon: 'bi bi-clipboard-data-fill' },
        ],
        showVideo: false,
        videoUrl: 'https://www.youtube.com/embed/835j3FPNkdw?autoplay=1',
        playButtonClicked: false,
      };
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
  .about {
    text-align: left;
    background-color: var(--bg-color); 
  }

  .card {
    background-color: var(--card-bg-color) !important;
    color: var(--text-color) !important; 
  }
  
  .about h1 {
    text-align: center;
  }

  .about p {
    text-align: justify;
  }
  
  .list-group {
    margin: 5px 0;
  }
  
  .list-item {
    display: flex;
    align-items: center;
  }
  
  .list-item i {
    margin-right: 10px;
  }

  .list-group-item {
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
  