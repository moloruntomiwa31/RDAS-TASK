<script setup>
import DisplayTable from "@/components/DisplayTable.vue";
import { ref } from "vue";

//datas sent as props
const itemsTableHeader = ref(["NO.", "Items"]);
const foodItems = ref(["Mango", "Cashew", "Apple"]);
</script>

<template>
  <main class="flexCenter flex-col h-screen">
    <DisplayTable :tableHeaders="itemsTableHeader" :details="foodItems" title="Items Details" />
  </main>
</template>

<style scoped></style>
