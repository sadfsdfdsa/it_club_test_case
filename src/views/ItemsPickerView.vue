<template>
  <div
    class="container mx-auto p-5 h-screen grid grid-cols-1 place-content-start"
  >
    <ButtonsNavBar
      :text="navbarText"
      :need-plus="true"
      :plus-clicked="() => $router.push({ name: createItemRouteName })"
      :back-clicked="() => $router.push({ name: 'MainPageView' })"
    />
    <div class="relative w-full">
      <div class="m-auto flex-grow mt-20">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-row mb-5"
        >
          <component
            :is="itemCard"
            class="flex flex-grow"
            :text="displayName(item)"
            @click="pick(index)"
          />
        </div>
        <div
          v-if="items.length === 0"
          class="flex flex-row mb-5"
        >
          <Btn
            class="flex-grow bg-blue-700 text-white mt-20"
            text="Create first!"
            @click="$router.push({ name: createItemRouteName })"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonsNavBar from '../components/ButtonsNavBar.vue'
import Btn from '../components/BaseBigButton.vue'
import { root } from '../store'
import { Contact } from '../types'

/**
 * TODO
 * the main idea is to unite pickers for methods and contacts
 * but I don't have time for complete realization
 */

export default defineComponent({
  components: {
    ButtonsNavBar,
    Btn
  },
  computed: {
    navbarText () {
      return 'Select ' + this.$route.params.type
    },
    createItemRouteName () {
      const name = this.$route.params.type[0].toUpperCase()
      return `Create${name + this.$route.params.type.slice(1)}View`
    },
    items () {
      if (this.$route.params.type === 'contact') {
        return root.getters.contacts
      }
      return []
    },
    itemCard () {
      // TODO methods type
      if (this.$route.params.type === 'contact') {
        return 'Btn'
      }
      return 'Btn'
    }
  },
  methods: {
    pick (index: number) {
      if (this.$route.params.type === 'contact') {
        root.dispatch('setPickedContact', this.items[index].email)
      }
      this.$router.push({ name: 'MainPageView' })
    },
    displayName (item: Contact) {
      if (this.$route.params.type === 'contact') {
        return item.secondName + ' ' + item.firstName
      }
    }
  }
})
</script>
