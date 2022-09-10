import Vue from "vue";
import Vuex, { Store } from "vuex";
import { Person } from "@/models/person";

Vue.use(Vuex);

interface PersonsState {
  persons: Person[];
}

export const store: Store<PersonsState> = new Vuex.Store({
  state: {
    persons: [],
  },
  mutations: {},
  actions: {},
  getters: {
    allPersons(state: PersonsState) {
      return state.persons;
    },
  },
});
