<template>
  <header>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="/src/assets/logo.svg" width="120" height="55">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">{{$t('navbar.home')}}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">{{$t('navbar.about')}}</a>
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
            <router-link class="nav-link" to="/hackathon">NASA Hackathon</router-link>
          </li>
        </ul>
      </div>

      <div class="navbar-icons">
        <form class="d-flex">
          <button class="btn btn-primary" type="submit">
            <a href="#contact">{{$t('navbar.contact')}}</a>
          </button>
        </form>
        <div :class="['dropdown', { 'dropdown-dark': isDarkTheme }]">
          <button
            class="btn btn-link navbar-icon dropdown-toggle custom-dropdown-toggle"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="bi bi-globe"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="languageDropdown">
            <a
              v-for="language in supportedLanguages"
              :key="language"
              class="dropdown-item"
              :class="{ active: currentLocale === language }"
              @click="changeLanguage(language)"
            >
              {{ language }}
            </a>
          </div>
        </div>

        <button class="btn btn-link navbar-icon" @click="toggleTheme" title="Toggle Theme">
          <i :class="isDarkTheme ? 'bi bi-moon-fill' : 'bi bi-brightness-high-fill'" width="90" height="90"></i>
        </button>
      </div>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      supportedLanguages: ['en', 'kz', 'ru'], 
      currentLocale: 'en',
      isDarkTheme: true,
    };
  },
  methods: {
    changeLanguage(locale) {
    this.currentLocale = locale;
    this.$i18n.locale = locale;
    localStorage.setItem('selectedLanguage', locale);
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.updateThemeClasses();

      const textColor = this.isDarkTheme ? '#FAFAFA' : '#212529';

      document.documentElement.style.setProperty('--text-color', textColor);
      document.documentElement.style.setProperty('--bg-color', this.isDarkTheme ? '#212529' : '#FAFAFA');
      document.documentElement.style.setProperty('--card-bg-color', this.isDarkTheme ? '#212529' : '#FAFAFA');

      localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());

      setTimeout(() => {
        this.updateThemeClasses();
      }, 10);
    },
    updateThemeClasses() {
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
      document.body.classList.toggle('light-theme', !this.isDarkTheme);
    },
    isCurrentRoute(route) {
      return this.$route.path === route;
    },
  },
  created() {
  const savedTheme = localStorage.getItem('isDarkTheme');

  if (savedTheme === 'true') {
    this.isDarkTheme = true;
  } else if (savedTheme === 'false') {
    this.isDarkTheme = false;
  }

  this.updateThemeClasses();

  const selectedLanguage = localStorage.getItem('selectedLanguage');

  const userPreferredLanguage = navigator.language.substr(0, 2);

  if (selectedLanguage) {
    this.currentLocale = selectedLanguage;
    this.$i18n.locale = selectedLanguage;
  } else {
    if (this.supportedLanguages.includes(userPreferredLanguage)) {
      this.currentLocale = userPreferredLanguage;
      this.$i18n.locale = userPreferredLanguage;
    }
  }
},


};
</script>

<style>

header {
  width: 100%;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
  max-width: none;
}
.navbar {
  max-width: none;
  position: sticky;
  top: 0;
  z-index: 100;
}
.navbar-icons {
  display: flex;
  align-items: center;
}

.navbar-icons i {
  color: #FAFAFA;
  font-size: 1.5rem;
}

.light-theme {
  background-color: #FAFAFA;
  color: #212529;
}

.dark-theme {
  background-color: #212529;
  color: #FAFAFA;
}

.btn-primary a {
  color: #FAFAFA;
}

.custom-dropdown-toggle {
  background-image: none;
  padding: 0;
  position: relative;
}

.custom-dropdown-toggle::after {
  display: none;
}

.dropdown-menu.show {
  width: 60px; 
}

.dropdown-item.active, .dropdown-item:active {
  color: var(--bs-dropdown-link-active-color);
  text-decoration: none;
  background-color: #ff6b00;
}
</style>
