<template>
  <section class="hero">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <h2>Space starts from Earth</h2>
          <p>We produce 3D printers, IoVIT modems and satellites</p>
        </div>
        <div class="col-lg-8">
          <img src="/src/assets/hero-bg.png" alt="Hero Image" class="img-fluid">
        </div>
      </div>

      <div class="row">
        <div class="d-flex justify-content-center flex-wrap">
          <div class="col-md-6 col-lg-4" v-for="card in cards" :key="card.title">
            <div class="card d-flex" :class="{ 'dark-theme': isDarkTheme, 'light-theme': !isDarkTheme }">
              <div class="features">
                <div class="row">
                  <div class="col-lg-2">
                    <div class="card-image">
                      <img :src="getImageUrl(card.title)" class="card-img-fluid" alt="...">
                    </div>  
                  </div>
                  <div class="col-lg-10">
                    <div class="card-title">
                      <h3>{{ card.title }}</h3>
                    </div>  
                  </div>
                </div>
                <div class="card-body">
                  <div class="card-text">
                    <p>{{ card.text }}</p>
                  </div>
                  <router-link :to="getCardRoute(card.title)">
                    <button class="btn btn-primary">more...</button>
                  </router-link>
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
  name: 'Hero',
  props: {
    isDarkTheme: Boolean,
  },
  data() {
    return {
      bgColor: '#212529',       
      textColor: '#ffffff',     
      cardBgColor: '#212529', 
      cards: [
        {
          title: 'Space3D',
          text: 'The production of large-sized and industrial 3D printers and printing for space, med and deep tech industries',
        },
        {
          title: 'SpaceIoT',
          text: 'Creation of IoT infrastructure and satellite data transmission independent of mobile network coverage',
        },
        {
          title: 'SpaceCUBS',
          text: 'Space Commercial Unified Blockchain System provide anonymous messaging for blockchain and IoT applications',
        },
      ],
    };
  },
  methods: {
    getImageUrl(title) {
      return `src/assets/${title.toLowerCase()}.png`;
    },
    getCardRoute(title) {
      const routeMap = {
        Space3D: '/space3d',
        SpaceIoT: '/spaceiot',
        SpaceCUBS: '/spacecubs',
      };

      return routeMap[title] || '/';
    },
  },
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
  text-align: center;
  background-color: var(--bg-color); 
}
.card {
  background-color: var(--card-bg-color) !important;
  color: var(--text-color) !important; 
  text-align: justify;
    color: #fff;
    border: none;
    display: flex;
}
  
  .hero p {
    margin-bottom: 30px;
   }
 
  .hero .icon h4 {
    font-weight: bold;
    color: #FF6B00;
  }

  .card:hover {
    text-align: justify;
    color: #FF6B00;
  }

  .card img{
    width: 50px;
  }

  .card-image {
    margin-right: 15px; 
  }
  
  .card-title {
    font-size: 1.5em; 
  }
  
  .card-text {
    margin-top: 10px; 
  }
  
  </style>
