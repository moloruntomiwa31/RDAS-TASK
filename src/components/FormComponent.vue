<script setup>
const emit = defineEmits(["submit"]);
const submit = () => {
  emit("submit");
};
</script>

<template>
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>

<style lang="scss" scoped></style>
