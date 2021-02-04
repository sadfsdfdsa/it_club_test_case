<template>
  <div
    class="container mx-auto p-5 h-screen grid grid-cols-1 place-content-between"
  >
    <ButtonsNavBar
      text="New contact"
      :back-clicked="
        () =>
          $router.push({ name: 'ItemsPickerView', params: { type: 'contact' } })
      "
    />
    <div class="relative w-full">
      <div class="m-auto flex-grow mt-20">
        <LabeledInput
          :value="firstName"
          label-text="First name"
          inner-text="Oops, unvalidated!"
          @input="(e) => firstName = e.target.value"
        />
        <LabeledInput
          :value="secondName"
          label-text="Second name"
          inner-text="Oops, unvalidated!"
          @input="(e) => secondName = e.target.value"
        />
        <LabeledInput
          :value="email"
          label-text="Email (unique*)"
          inner-text="Oops, unvalidated!"
          @input="(e) => email = e.target.value"
        />
      </div>
    </div>
    <div class="flex flex-row mb-5">
      <Btn
        class="flex-grow bg-blue-700 text-white"
        text="Save"
        @click="save"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonsNavBar from '../components/ButtonsNavBar.vue'
import Btn from '../components/BaseBigButton.vue'
import LabeledInput from '../components/LabeledInput.vue'
import { root } from '../store'

export default defineComponent({
  components: {
    ButtonsNavBar,
    Btn,
    LabeledInput
  },
  data: () => {
    return {
      firstName: '',
      secondName: '',
      email: ''
    }
  },
  methods: {
    save () {
      /**
       * TODO:
       * add validation for all types (regexp for email)
       * add error if NOT success
       */
      const success = root.dispatch('addContact', {
        firstName: this.firstName, secondName: this.secondName, email: this.email
      })

      success && this.$router.push({
        name: 'ItemsPickerView',
        params: { type: 'contact' }
      })
    }
  }
})
</script>
