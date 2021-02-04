<template>
  <div class="flex flex-row mb-5">
    <div class="flex flex-col flex-grow content-center">
      <div class="mb-2">
        {{ $props.labelText }}
      </div>
      <BaseInput
        :text="$props.innerText"
        :disabled="$props.disabled"
        :value="$props.value"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from './BaseBigInput.vue'

export default defineComponent({
  components: {
    BaseInput
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
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      required: true
    }
  }
})
</script>
