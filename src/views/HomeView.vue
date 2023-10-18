<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useMonads } from "@/composables/sampleMonads/useMonads";
const { bmi, bmiThrow } = useMonads();

// sample 1
try {
  console.log(bmiThrow(170, 60));
} catch (error) {
  console.log(error);
}


// sample 2
bmi(170, 60).match({
  ok: (value) => console.log(value),
  err: (error) => console.log(error),
});




</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
