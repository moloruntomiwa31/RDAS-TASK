<script setup>
import { storeToRefs } from "pinia";
import UserForm from "@/components/UserForm.vue";
import UserTable from "@/components/UserTable.vue";
//USER PINIA STORE
import { useUserStore } from "@/stores/user";
const { users } = storeToRefs(useUserStore());
const { addUserData } = useUserStore();

//FUNCTION
const handleFormSubmit = (userData) => {
  addUserData(userData);
};
</script>

<template>
  <main
    class="flex flex-col justify-center items-center w-full min-h-screen p-12"
  >
    <!-- FORM DETAILS -->
    <section>
      <UserForm @submitForm="handleFormSubmit" />
    </section>
    <section>
      <UserTable v-show="users.length > 0" />
    </section>
  </main>
</template>

<style scoped></style>
