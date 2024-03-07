<template>
  <div class="d-flex align-items-center">
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Ativo</label>
  </div>
</template>

<script setup>
const checked = defineModel();
</script>
