<template>
  <form ref="formModal">
    <label for="firstName">
      <span class="label__title">Имя</span>
      <input v-focus type="text" id="firstName" />
    </label>
    <label for="lastName">
      <span class="label__title">Фамилия</span>
      <input type="text" id="lastName" />
    </label>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AddModalWindow extends Vue {
  resetFrom() {
    (this.$refs.formModal as HTMLFormElement).reset();
  }
}
</script>

<style lang="scss"></style>
