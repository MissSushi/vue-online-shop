<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <nav class="bg-neutral-100 p-2 rounded-full mb-8 border">
    <div class="flex items-center gap-8">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products/add">Produkte hinzufügen</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
