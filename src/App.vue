<template>
  <div id="app">
    <person-list :persons="persons"></person-list>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import { Person } from "./models/person";
import PersonList from "@/components/PersonList.vue";

const baseURL = "http://localhost:3000/persons";

@Component({
  components: {
    PersonList,
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
</style>
