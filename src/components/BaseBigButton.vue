<template>
  <button
    class="h-12 border border-blue-700 py-3 px-4 rounded-lg text-center"
    :disabled="$props.disabled"
    :class="{ 'bg-gray-100': $props.disabled }"
    v-text="$props.text"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      required: true,
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  }
})
</script>
