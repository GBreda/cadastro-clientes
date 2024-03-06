<template>
  <label for="text-field" data-test-id="label">{{ label }}</label>
  <input :type="type" name="text-field" data-test-id="input" v-model="value" />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['email', 'number', 'tel', 'text'].includes(value);
    }
  }
});

const value = defineModel();
</script>
