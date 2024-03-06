<template>
  <div class="sidebar">
    <router-link
      v-for="(item, index) in routesList"
      :key="index"
      class="sidebar__link"
      :to="{ name: item.name }"
    >
      {{ item.meta.friendlyName }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

const routesList = computed(() => router.options.routes);
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  padding: 2rem;
  background-color: $light-gray;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  width: 30rem;
  min-height: 100vh;

  &__link {
    display: block;
    padding: 2rem;
    font-size: 1.4rem;
    border-left: 0.3rem solid transparent;

    &:hover {
      background-color: $gray;
    }

    &.router-link-active {
      border-color: $primary-color;
      color: $primary-color;
      font-weight: 600;
    }
  }
}
</style>
