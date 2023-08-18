<template>
    <section class="services" id="services">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h1>Provided services</h1>
  
            <div class="d-flex justify-content-center flex-wrap">
                <div class="card mb-5 mx-3" v-for="(card, index) in cards" :key="index" style="width: 18rem; height: 25rem;">
                  <img :src="getImageUrl(index + 1)" class="card-img-fluid" alt="...">
                  <div class="card-body">
                    <h3 class="card-title">{{ card.title }}</h3>
                    <p class="card-text">{{ card.text }}</p>
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
    name: 'Services',
    data() {
      return {
        cards: [
          {
            title: 'Space3D',
            text: 'We have the technical expertise to build large industrial printers...',
            url: '/space3d',
          },
          {
            title: 'SpaceIoT',
            text: 'Our technology allows you to transfer data from places where there is no cellular coverage...',
            url: '/spaceiot',
          },
          {
            title: 'SpaceCUBS',
            text: 'some random stuff for a while',
            url: '/spacecubs',
          },
        ],
      };
    },
    methods: {
      getImageUrl(index) {
        return `src/assets/3d/${index}.png`;
      },
    },
  };
  </script>
  
  <style>
  .custom-card {
    color: #000;
    text-align: justify;
    position: relative;
    padding: 0;
    overflow: hidden;
  }
  
  .img-container {
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease-in-out;
  }
  
  .img-container:hover {
    transform: scale(1.1); 
  }
  
  .card-img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }
  
  </style>
  