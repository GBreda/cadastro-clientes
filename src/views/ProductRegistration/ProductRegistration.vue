<template>
  <content-Box :title="title">
    <ProductRegistrationFormContainer />
  </content-Box>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ContentBox from '@/components/ContentBox/ContentBox.vue';
import ProductRegistrationFormContainer from './ProductRegistrationFormContainer.vue';

const route = useRoute();

const title = computed(() => route.meta.friendlyName);
</script>
