import Vue from "vue";
import Vuex, { ActionContext, Store } from "vuex";
import axios from "axios";
import { Person } from "@/models/person";

const baseURL = "http://localhost:3000/persons";

Vue.use(Vuex);

interface PersonsState {
  persons: Person[];
}

export const store: Store<PersonsState> = new Vuex.Store({
  state: {
    persons: [],
  },
  mutations: {
    changePersons(state: PersonsState, data: Person[]) {
      state.persons = data;
    },
    removePerson(state: PersonsState, data: Person) {
      state.persons = state.persons.filter((p) => p.id !== data.id);
    },
    editPerson(state: PersonsState, data: Person) {
      const index = state.persons.findIndex((p) => p.id === data.id);
      state.persons.splice(index, 1, data);
    },
    addPerson(state: PersonsState, data: Person) {
      state.persons.push(data);
    },
  },
  actions: {
    async fetchPersons(ctx) {
      try {
        const request = await axios.get(baseURL);
        const persons = await request.data;
        ctx.commit("changePersons", persons);
      } catch (error) {
        console.log(`Во время запроза произошла следующая ошибка: ${error}`);
      }
    },
    async removePerson(ctx, person: Person) {
      await axios
        .delete(`${baseURL}/${person.id}`)
        .then(() => {
          ctx.commit("removePerson", person);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async editPerson(ctx, person: Person) {
      await axios
        .put(`${baseURL}/${person.id}`, person)
        .then(() => {
          ctx.commit("editPerson", person);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async addPerson(ctx, person: Person) {
      await axios
        .post(baseURL, person)
        .then(() => {
          ctx.commit("addPerson", person);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    allPersons(state: PersonsState) {
      return state.persons;
    },
  },
});
