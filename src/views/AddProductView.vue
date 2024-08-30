<script setup lang="ts">
import CancelButton from "@/components/CancelButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import FormElements from "@/components/FormElements.vue";
</script>

<template>
  <div class="border rounded-lg px-8 py-8 shadow-sm max-w-3xl mx-auto">
    <form>
      <div class="flex flex-col items-center">
        <FormElements></FormElements>
        <div class="flex flex-col sm:flex-row gap-8 mt-16">
          <SubmitButton>Produkt erstellen</SubmitButton>
          <CancelButton>Abbrechen</CancelButton>
        </div>
      </div>
    </form>
  </div>
</template>
