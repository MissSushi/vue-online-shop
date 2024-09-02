<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>

<template>
  <div class="flex flex-col w-full px-8">
    <label for="productName" class="mb-1">Produktname</label>
    <input
      type="text"
      name="productName"
      class="border rounded-lg p-1 bg-neutral-100/20"
      placeholder="T-Shirt, Kleid, Schuhe ..."
      required
      :value="props.product.productName"
    />

    <label for="price" class="mb-1 mt-8">Preis in Euro</label>
    <input
      type="number"
      name="price"
      class="border rounded-lg p-1 bg-neutral-100/20"
      placeholder="50, 40, 3 ..."
      required
      :value="props.product.price"
    />

    <label for="productDescription" class="mb-1 mt-8">Beschreibung</label>
    <textarea
      name="productDescription"
      class="border rounded-lg h-28 p-1 bg-neutral-100/20"
      maxlength="600"
      required
      :value="props.product.description"
    ></textarea>
  </div>
</template>
