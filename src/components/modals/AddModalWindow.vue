<template>
  <form ref="formModal">
    <label for="firstName">
      <span class="label__title">Имя</span>
      <input
        v-focus
        v-model="initialData.firstName"
        type="text"
        id="firstName"
        ref="firstInput"
      />
    </label>
    <label for="lastName">
      <span class="label__title">Фамилия</span>
      <input v-model="initialData.lastName" type="text" id="lastName" />
    </label>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { Person } from "@/models/person";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AddModalWindow extends Vue {
  @Prop() initialData!: Person;

  resetFrom() {
    (this.$refs.formModal as HTMLFormElement).reset();
  }

  focus() {
    (this.$refs.firstInput as HTMLFormElement).focus();
  }
}
</script>

<style lang="scss"></style>
