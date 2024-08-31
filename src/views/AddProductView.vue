<script setup lang="ts">
import CancelButton from "@/components/CancelButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";
import FormElements from "@/components/FormElements.vue";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { ref } from "vue";

const submissionStatus = ref();

async function formHandler(e: Event) {
  submissionStatus.value = "pending";

  const formData = new FormData(e.target as HTMLFormElement);
  const name = formData.get("productName");
  const price = formData.get("price");
  const description = formData.get("productDescription");

  if (
    typeof name !== "string" ||
    typeof price !== "string" ||
    typeof description !== "string"
  ) {
    submissionStatus.value = "error";
    return;
  }

  try {
    const response = await fetch("http://localhost/api/items", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        price: parseInt(price),
        description: description,
      }),
    });

    if (!response.ok) {
      throw new Error("Response not ok.");
    }
    submissionStatus.value = "success";
    (e.target as HTMLFormElement).reset();
  } catch (error) {
    submissionStatus.value = "error";
  }
}
</script>

<template>
  <SuccessMessage
    v-if="submissionStatus === 'success'"
    class="mb-8 max-w-3xl flex justify-center mx-auto"
    >Das Produkt wurde erfolgreich erstellt!</SuccessMessage
  >
  <ErrorMessage
    v-else-if="submissionStatus === 'error'"
    class="mb-8 max-w-3xl flex justify-center mx-auto"
    >Etwas ist schiefgelaufen. Bitte wenden Sie sich an den
    Support.</ErrorMessage
  >
  <div class="border rounded-lg px-8 py-8 shadow-sm max-w-3xl mx-auto">
    <form @submit.prevent="formHandler">
      <div class="flex flex-col items-center">
        <FormElements></FormElements>
        <div class="flex flex-col sm:flex-row gap-8 mt-16">
          <SubmitButton class="relative">
            <div
              v-if="submissionStatus === 'pending'"
              class="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950 overflow-hidden rounded-full"
            >
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            Produkt erstellen
          </SubmitButton>
          <CancelButton>Abbrechen</CancelButton>
        </div>
      </div>
    </form>
  </div>
</template>
