<template>
  <text-field :value="name" label="Nome" @update:value="updateName" />
  <status-checkbox />
</template>

<script setup>
import { computed } from 'vue';
import { useProductsStore } from '@/stores/productsStore';
import TextField from '@/components/TextField/TextField.vue';
import StatusCheckbox from '@/components/StatusCheckbox/StatusCheckbox.vue';

const productsStore = useProductsStore();

const name = computed(() => productsStore.name);

const updateName = (name) => {
  productsStore.setName(name);
};
</script>
