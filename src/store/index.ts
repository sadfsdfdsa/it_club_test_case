import {
  createStore,
  Getters,
  Module,
  Actions,
  Mutations
} from 'vuex-smart-module'
import { Contact } from '../types'

/**
 * TODO:
 * module should be splited for files for each part:
 * state.ts, getters.ts, actions.ts, mutatuions.ts, index.ts
 * Prefer to not use root module, but ITS TIME)
 */

class RootState {
  contacts: Contact[] = [];
  pickedContact: Contact | null = null;
}

class RootGetters extends Getters<RootState> {
  get pickedContact () {
    return this.state.pickedContact
  }

  get contacts () {
    return this.state.contacts
  }
}

class RootMutations extends Mutations<RootState> {
  addContact (contact: Contact) {
    this.state.contacts.push(contact)
  }

  setPickedContact (contact: Contact | null) {
    this.state.pickedContact = contact
  }
}

class RootActions extends Actions<RootState, RootGetters, RootMutations> {
  /**
   * Set picked contact in store (can remove it by passing null)
   * @param email
   * @example root.dispatch('setPickedContact', 'email')
   */
  setPickedContact (email: string | null) {
    if (email === null) {
      this.mutations.setPickedContact(null)
      return
    }
    const c = this.state.contacts.filter((c) => c.email === email)
    if (c.length < 1) return
    this.mutations.setPickedContact(c[0])
  }

  /**
   * Add contact to existing contacts.
   * Email should be unique
   * @param contact
   * @example root.dispatch('addContact', contact)
   */
  addContact (contact: Contact) {
    if (this.state.contacts.some((c) => c.email === contact.email)) {
      return false
    }
    this.mutations.addContact(contact)
    return true
  }

  /**
   * Simple pay method
   * Also setting picked contact to null
   * TODO something!
   */
  pay () {
    console.log('PAY!')
    this.commit('setPickedContact', null)
  }
}

const rootModule = new Module({
  state: RootState,
  getters: RootGetters,
  actions: RootActions,
  mutations: RootMutations
})

export const store = createStore(rootModule)

export const root = rootModule.context(store)
