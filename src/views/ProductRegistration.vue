<template>
  <content-container :title="title">
    <text-field label="Nome" />
  </content-container>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ContentContainer from '@/components/ContentContainer/ContentContainer.vue';
import TextField from '@/components/TextField/TextField.vue';

const route = useRoute();

const title = computed(() => route.meta.friendlyName);
</script>
