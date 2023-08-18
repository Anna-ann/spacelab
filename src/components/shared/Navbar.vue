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
          <li class="nav-item" v-for="(item, index) in navItems" :key="index">
            <router-link v-if="item.isRoute" :to="item.route" class="nav-link" :class="{ active: isCurrentRoute(item.route) }">
              {{ item.text }}
            </router-link>
            <a v-else class="nav-link" :href="`#${item.id}`">
              {{ item.text }}
            </a>
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
      navItems: [
        { text: 'Home', route: '/' },
        { text: 'About', id: 'about', isRoute: false },
        { text: 'Space3D', route: '/space3d' },
        { text: 'SpaceIoT', route: '/spaceiot' },
        { text: 'SpaceCUBS', route: '/spacecubs' },
        { text: 'Services', id: 'services', isRoute: false },
        { text: 'Our Team', id: 'team', isRoute: false },
      ],
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
