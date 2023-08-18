<template>
    <li class="nav-item">
      <router-link :to="route" class="nav-link" :aria-current="isCurrentPage ? 'page' : null">{{ title }}</router-link>
    </li>
  </template>
  
  <script>
  export default {
    name: 'NavItem',
    props: {
      title: String,
      route: String,
    },
    computed: {
      isCurrentPage() {
        return this.$route.path === this.route;
      },
    },
  };
  </script>
  