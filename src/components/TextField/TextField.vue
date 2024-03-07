<template>
  <label for="text-field" data-test-id="label">{{ label }}</label>
  <input :value="value" :type="type" name="text-field" data-test-id="input" @input="updateValue" />
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
  },
  value: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:value']);

const updateValue = (event) => {
  const { value } = event.target;

  emit('update:value', value);
};
</script>
