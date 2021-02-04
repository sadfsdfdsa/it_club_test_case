<template>
  <div
    class="container mx-auto p-5 h-screen grid grid-cols-1 place-content-between"
  >
    <Navbar />
    <div class="relative w-full flex flex-row">
      <div class="m-auto flex-grow">
        <LabeledBtn
          :label-text="'Select contact'"
          :inner-text="pickedContactLabel"
          :success="!!pickedContact"
          :click="
            $router.push({
              name: 'ItemsPickerView',
              params: { type: 'contact' },
            })
          "
        />
        <LabeledBtn
          :label-text="'Select payment method'"
          :inner-text="'Default method: TIME'"
          :disabled="true"
          :click="
            $router.push({
              name: 'ItemsPickerView',
              params: { type: 'method' },
            })
          "
        />
        <LabeledInput
          :label-text="'Enter amount (>0)'"
          :inner-text="'0'"
          :value="amount.toString()"
          @input="(e) => (amount = e.target.value)"
        />
      </div>
    </div>
    <div class="flex flex-row mb-5">
      <Btn
        class="flex-grow bg-blue-700 text-white"
        text="Pay"
        @click="pay"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LabeledBtn from '../components/LabeledBtn.vue'
import Btn from '../components/BaseBigButton.vue'
import LabeledInput from '../components/LabeledInput.vue'
import Navbar from '../components/BaseNavBar.vue'
import { root } from '../store'

export default defineComponent({
  name: 'MainPageView',
  components: {
    LabeledBtn,
    LabeledInput,
    Btn,
    Navbar
  },
  data: () => {
    return {
      amount: 0
    }
  },
  computed: {
    pickedContactLabel () {
      if (!root.getters.pickedContact) return 'Pick a contact'
      return (
        root.getters.pickedContact.secondName +
        ' ' +
        root.getters.pickedContact.firstName
      )
    },
    pickedContact () {
      return root.getters.pickedContact
    }
  },
  methods: {
    pay () {
      if (!this.validatePay()) return
      root.dispatch('pay')
      this.$router.push({ name: 'CompletedPayment' })
    },
    checkValidNumber (value: string | number) {
      return value != null && value !== '' && !isNaN(Number(value.toString()))
    },
    validatePay () {
      return (
        this.checkValidNumber(this.amount) &&
        this.amount !== 0 &&
        this.pickedContact
      )
    }
  }
})
</script>
