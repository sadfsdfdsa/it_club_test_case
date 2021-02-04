<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').filter((e: string) => e !== '').length
      const fromDepth = from.path.split('/').filter((e: string) => e !== '')
        .length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
  }
})
</script>

<style>
.slide-left-enter-active {
  transition: all 0.1s ease-out;
}

.slide-left-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from,
.slide-left-leave-to,
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all 0.1s ease-in;
}

.slide-right-leave-active {
  transition: all 0.1s cubic-bezier(-1, -0.5, -0.8, -1);
}
</style>
