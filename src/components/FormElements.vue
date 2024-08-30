<template>
  <div class="flex flex-col w-full px-8">
    <label for="productName" class="mb-1">Produktname</label>
    <input
      type="text"
      name="productName"
      class="border rounded-lg p-1 bg-neutral-100/20"
      placeholder="T-Shirt, Kleid, Schuhe ..."
    />

    <label for="price" class="mb-1 mt-8">Preis in Euro</label>
    <input
      type="number"
      name="price"
      class="border rounded-lg p-1 bg-neutral-100/20"
      placeholder="50, 40, 3 ..."
    />

    <label for="productDescription" class="mb-1 mt-8">Beschreibung</label>
    <textarea
      name="productDescription"
      class="border rounded-lg h-28 p-1 bg-neutral-100/20"
      maxlength="600"
    ></textarea>
  </div>
</template>
