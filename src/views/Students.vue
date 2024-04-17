<script setup>
import DisplayTable from "@/components/DisplayTable.vue";
import { ref } from "vue";

//datas sent as props
const studentTableHeader = ref(["ID", "Name"]);
const students = ref(["James", "Paul", "Peter"]);
</script>

<template>
  <main class="flexCenter flex-col h-screen">
    <DisplayTable :tableHeaders="studentTableHeader" :details="students" title="Students Data"/>
  </main>
</template>
