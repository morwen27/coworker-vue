<template>
  <div id="app">
    <person-list
      :persons="persons"
      @remove-person="removePerson($event)"
    ></person-list>
    <button-action :type-action="'add'" :is-modal="false"></button-action>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import { Person } from "./models/person";
import PersonList from "@/components/PersonList.vue";
import ButtonAction from "@/components/ButtonAction.vue";

const baseURL = "http://localhost:3000/persons";

@Component({
  components: {
    PersonList,
    ButtonAction,
  },
})
export default class App extends Vue {
  message = "hello";
  persons: Person[] = [];

  async created() {
    try {
      const res = await axios.get(`${baseURL}`);
      this.persons = res.data;
    } catch (error) {
      console.log(`Во время запроза произошла следующая ошибка: ${error}`);
    }
  }

  removePerson(id: number) {
    console.log(id);
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  max-width: 1024px;
  margin: 0 auto;
  padding: 15px;
  font-family: "Arial", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
}

ul {
  list-style: none;
}

.button-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin: 0 -5px -5px;
}
</style>
