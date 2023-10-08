<template>
    <section class="hackathon-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="position-relative video-container">
              <video class="video-fluid" id="about-video" loop autoplay controls>
                <source :src="videoPath" type="video/mp4">
              </video>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text">
              <h1 class="display-2 font-weight-bold">IoVIT for Fire Application</h1>
              <p class="lead" id="typing-subtitle"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import videoPath from '/src/assets/hackathon/about.mp4';
  
  export default {
    data() {
      return {
        subtitle: 'Igniting Innovation in Fire Safety',
        videoPath: videoPath,
      };
    },
    mounted() {
      const subtitleElement = document.getElementById('typing-subtitle');
      subtitleElement.textContent = this.subtitle;
  
      subtitleElement.addEventListener('load', () => {
        setTimeout(() => {
          subtitleElement.style.animation = 'typing 3s steps(40) 1s infinite';
        }, 500);
      });
    },
  };
  </script>  
    
  
  <style scoped>
  .hackathon-hero h1 {
    font-size: 2.5rem;
    font-weight: 500;
    padding-top: 20%;
  }

  
  
  .video-fluid {
    max-width: 100%;
    height: auto;
  }
  
  .video-container {
    position: relative;
  }
  
  #typing-subtitle {
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    border-right: 1px solid white;
    animation: typing 3s steps(40) 1s infinite;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  </style>
  