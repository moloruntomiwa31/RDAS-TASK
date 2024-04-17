<script setup>
import FormComponent from "@/components/FormComponent.vue";
import AppInput from "@/components/AppInput.vue";
import AppButton from "@/components/AppButton.vue";
import { ref } from "vue";
//emits
const emit = defineEmits(["submitForm"]);

//data
const firstName = ref("");
const lastName = ref("");

//emiting event on submission
const submitForm = () => {
  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
  };
  emit("submitForm", userData);
  //clearing input fields
  firstName.value = "";
  lastName.value = "";
};
</script>

<template>
  <h1 class="text-3xl font-bold text-center mb-8">Form Details</h1>
  <FormComponent @submit="submitForm" class="space-y-8">
    <AppInput
      v-model="firstName"
      labelText="First Name"
      placeholder="Enter your first name"
      inputType="text"
    />
    <AppInput
      v-model="lastName"
      labelText="Last Name"
      placeholder="Enter your last name"
      inputType="text"
    />
    <AppButton
      buttonText="Submit"
      bgColor="bg-[#a14848]"
      class="block mx-auto mt-4"
    />
  </FormComponent>
</template>

<style scoped></style>
