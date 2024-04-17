<script setup>
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const { users } = storeToRefs(useUserStore());
</script>

<template>
  <Transition name="table">
    <table
      class="border-collapse w-full mt-8"
    >
      <tr>
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user">
        <td>{{ index + 1 }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
      </tr>
    </table>
  </Transition>
</template>

<style scoped>

.table-enter-from,
.table-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.table-enter-to,
.table-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.table-enter-active,
.table-leave-active {
  transition: all 0.3s;
}
</style>
