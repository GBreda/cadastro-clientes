<template>
  <content-container :title="title"> aqui vai o conteúdo </content-container>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ContentContainer from '@/components/ContentContainer/ContentContainer.vue';

const route = useRoute();

const title = computed(() => route.meta.friendlyName);
</script>
