<template>
  <form>
    <label for="firstName">
      <span class="label__title">Имя</span>
      <input
        v-focus
        v-model="initialData.firstName"
        type="text"
        id="firstName"
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
export default class EditModalWindow extends Vue {
  @Prop() initialData!: Person;
}
</script>

<style lang="scss"></style>
