<script setup>
defineProps({
  buttonText: {
    type: String,
    default: "Submit",
  },
  bgColor: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
    :class="bgColor"
    class="p-3 rounded-md shadow outline-none text-white"
    v-bind="$attrs"
  >
    {{ buttonText }}
  </button>
</template>

<style scoped></style>
