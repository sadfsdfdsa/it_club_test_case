<template>
  <div class="flex flex-row mb-5">
    <div class="flex flex-col flex-grow content-center">
      <div class="mb-2">
        {{ $props.labelText }}
      </div>
      <Btn
        :text="$props.innerText"
        :disabled="$props.disabled"
        :class="{ 'bg-green-100': $props.success }"
        @click="$props.click"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Btn from './BaseBigButton.vue'

export default defineComponent({
  components: {
    Btn
  },
  props: {
    innerText: {
      type: String,
      default: 'Empty'
    },
    labelText: {
      required: true,
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    success: {
      default: false,
      type: Boolean
    },
    click: {
      type: Function,
      required: true
    }
  }
})
</script>
