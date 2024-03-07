<template>
  <content-Box :title="title">
    <text-field label="Nome" @update:modelValue="update" />
    <status-checkbox />
  </content-Box>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ContentBox from '@/components/ContentBox/ContentBox.vue';
import TextField from '@/components/TextField/TextField.vue';
import StatusCheckbox from '@/components/StatusCheckbox/StatusCheckbox.vue';

const route = useRoute();

const title = computed(() => route.meta.friendlyName);

const update = (value) => console.log(value);
</script>
