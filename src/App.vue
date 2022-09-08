<template>
  <div id="app">
    <person-list></person-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonList from "@/components/PersonList.vue";
import BaseButton from "@/components/BaseButton.vue";

@Component({
  components: {
    PersonList,
    BaseButton,
  },
})
export default class App extends Vue {}
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

h2 {
  padding: 15px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: #98ccfd;
}

.button-wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin: 0 -5px -5px;
}
</style>
