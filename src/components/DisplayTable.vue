<script setup>
defineProps({
  tableHeaders: Array,
  details: Array,
  title: String,
});
</script>

<template>
  <h1 class="text-3xl font-bold text-center mb-8">{{ title }}</h1>
  <table class="border-collapse w-[250px] mt-8">
    <tr>
      <th v-for="header in tableHeaders">{{ header }}</th>
    </tr>
    <tr v-for="(detail, index) in details" :key="detail">
      <td>{{ index + 1 }}</td>
      <td>{{ detail }}</td>
    </tr>
  </table>
</template>

<style scoped></style>
