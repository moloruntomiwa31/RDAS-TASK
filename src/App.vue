<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- header -->
  <header>
    <nav>
      <RouterLink to="/" active-class="active">Home</RouterLink>
      <RouterLink to="/items" active-class="active">Items</RouterLink>
      <RouterLink to="/students" active-class="active">Students</RouterLink>
    </nav>
  </header>
<!-- //page views -->
  <RouterView />
</template>

<style scoped>
header {
  background-color: #333;
  width: 100%;
  max-width: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;
}
header nav {
  display: flex;
  justify-content: space-around;
}
header nav a {
  text-decoration: none;
  color: white;
  transition: all 0.3s;
  font-size: 1.2rem;
  outline: none;
}
header nav a:hover {
  color: rgb(183, 181, 181);
}
.active {
  background-color: #a14848;
  color: aliceblue;
  padding: 0.5rem;
  border-radius: 0.95rem;
}
</style>
