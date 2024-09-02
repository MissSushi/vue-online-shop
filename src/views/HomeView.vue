<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

type ProductApiItem = {
  id: number;
  productName: string;
  description: string;
  price: number;
};

const data = ref<ProductApiItem[]>([]);

const abortController = new AbortController();
async function getData() {
  try {
    const response = await fetch("http://localhost/api/items", {
      signal: abortController.signal,
    });
    if (!response.ok) {
      throw new Error("Response not ok.");
    }

    const result = await response.json();
    data.value = result;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") return;
      console.error(`error message: ${error.message}`);
    }
  }
}
onBeforeUnmount(() => {
  abortController.abort();
});
getData();
</script>

<template>
  <div class="border rounded-lg shadow-sm p-4 sm:p-8 max-w-5xl mx-auto">
    <table class="w-full">
      <thead class="border-b-2 border-black text-left">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Preis</th>
          <th>Beschreibung</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data" class="border-b-2 border-neutral-200">
          <td class="my-2">{{ entry["id"] }}</td>
          <td class="my-2">{{ entry["productName"] }}</td>
          <td class="my-2">{{ entry["price"] }}€</td>
          <td class="my-2 max-w-[5ch] truncate">{{ entry["description"] }}</td>
          <td>
            <div class="flex gap-4 justify-end my-2">
              <button class="text-slate-700 text-sm hover:text-slate-900">
                Bearbeiten
              </button>
              <button class="text-red-500 text-sm hover:text-red-600">
                Löschen
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
