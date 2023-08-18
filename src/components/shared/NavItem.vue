<template>
  <li class="nav-item">
    <router-link v-if="isRoute" :to="route" class="nav-link" :aria-current="isCurrentPage ? 'page' : null">{{ title }}</router-link>
    <a v-else class="nav-link" :href="`#${id}`">{{ title }}</a>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    title: String,
    route: String,
    id: String,
    isRoute: Boolean,
  },
  computed: {
    isCurrentPage() {
      return this.$route.path === this.route;
    },
  },
};
</script>
