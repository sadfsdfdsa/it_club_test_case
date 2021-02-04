<template>
  <div
    id="navbar"
    class="flex flex-row content-center items-center"
  >
    <div class="flex-col flex-grow text-center text-2xl py-2">
      {{ $props.text }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'Make a payment'
    }
  }
})
</script>
