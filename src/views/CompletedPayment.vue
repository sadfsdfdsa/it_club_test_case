<template>
  <div
    class="container mx-auto p-5 h-screen grid grid-cols-1 place-content-between"
  >
    <div class="relative w-full">
      <div class="m-auto flex-grow mt-20">
        <img
          class="w-1/2 h-1/2 mx-auto"
          src="../assets/completed.png"
        >
        <div class="text-center text-2xl">
          Payment completed successfully
        </div>
      </div>
    </div>
    <div class="flex flex-row mb-5">
      <Btn
        class="flex-grow text-blue-700"
        text="Make another one"
        @click="$router.push({ name: 'MainPageView' })"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Btn from '../components/BaseBigButton.vue'

export default defineComponent({
  components: {
    Btn
  }
})
</script>
