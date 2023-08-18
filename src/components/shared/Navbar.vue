<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="src/assets/logo.svg" width="120" height="55">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/space3d">Space3D</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/spaceiot">SpaceIoT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/spacecubs">SpaceCUBS</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#team">Our team</a>
          </li>
        </ul>
      </div>

      <div class="navbar-icons">
        <form class="d-flex">
          <button class="btn btn-primary" type="submit">
            <a href="#contact">Contact</a>
          </button>
        </form>
        <button class="btn btn-link navbar-icon" title="Change Language">
          <i class="bi bi-globe"></i>
        </button>
        <button class="btn btn-link navbar-icon" @click="toggleTheme" title="Toggle Theme">
          <i :class="isDarkTheme ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'" width="90" height="90"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  name: 'Navbar',
  data() {
    return {
      isDarkTheme: true,
    };
  },
  methods: {
    scrollToElement(id) {
      VueScrollTo.scrollTo(id, 500, { offset: -100 });
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.updateThemeClasses();

      const textColor = this.isDarkTheme ? '#ffffff' : '#212529';

      document.documentElement.style.setProperty('--text-color', textColor);
      document.documentElement.style.setProperty('--bg-color', this.isDarkTheme ? '#212529' : '#ffffff');
      document.documentElement.style.setProperty('--card-bg-color', this.isDarkTheme ? '#212529' : '#ffffff');
    },
    updateThemeClasses() {
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
      document.body.classList.toggle('light-theme', !this.isDarkTheme);
    },
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.navbar-icons {
  display: flex;
  align-items: center;
}

.navbar-icons i {
  color: #fff;
  font-size: 1.5rem;
}

.light-theme {
  background-color: #ffffff;
  color: #212529;
}

.dark-theme {
  background-color: #212529;
  color: #ffffff;
}

.btn-primary a {
  color: #fff;
}
</style>
