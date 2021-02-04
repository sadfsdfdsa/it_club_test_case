<template>
  <div
    id="navbar"
    class="flex flex-row content-center items-center"
  >
    <div class="flex-col">
      <button
        class="text-blue-700 border border-blue-700 p-2 rounded-full"
        @click="$props.backClicked"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div class="flex-col flex-grow text-center text-2xl py-2">
      {{ text }}
    </div>
    <div class="flex-col">
      <button
        v-if="$props.needPlus"
        class="bg-blue-700 text-white border border-blue-700 font-bold py-2 px-2 rounded-full"
        @click="$props.plusClicked"
      >
        <svg
          viewBox="0 0 20 20"
          enable-background="new 0 0 20 20"
          class="w-6 h-6 inline-block"
        >
          <path
            fill="#FFFFFF"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

/**
 * TODO decompose this big component!
 * Need to create new components from rounded buttons
 */

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'Make a payment'
    },
    nextRouteName: {
      type: String,
      default: 'MainPageView'
    },
    needPlus: {
      type: Boolean,
      default: false
    },
    plusClicked: {
      type: Function,
      default: () => {}
    },
    backClicked: {
      type: Function,
      default: () => {
        (this as any).$router.go(-1)
      }
    }
  }
})
</script>
