<template>
  <div class="content-container">
    <h1 class="pb-4">{{ title }}</h1>
    <slot name="default" />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
});
</script>

<style lang="scss" scope>
.content-container {
  padding: 3rem 0 0 26rem;
}
</style>
