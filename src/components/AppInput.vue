<script setup>
import { ref } from "vue";
const props = defineProps({
  labelText: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  inputType: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  eye: {
    type: Boolean,
    default: false,
  },
});

const input = ref(null);

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
    const newValue = (event.target).value;
    emit("update:modelValue", newValue);
};
</script>

<template>
  <div class="grid">
    <label v-if="labelText" class="font-bold">{{ labelText }}</label>
    <input
      :value="modelValue"
      @input="updateInput($event)"
      :type="inputType"
      :placeholder="placeholder"
      v-bind="$attrs"
      ref="input"
      required
      class="border-2 p-3 rounded shadow outline-none focus:ring-2 focus:ring-[#a14848] focus:border-transparent duration-200"
    />
  </div>
</template>

<style>
label:after {
  content: " *";
  color: red;
  white-space: nowrap;
}
</style>
