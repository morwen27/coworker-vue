<template>
  <li class="person-list__item">
    <span>{{ person.firstName }} {{ person.lastName }}</span>
    <span class="button-wrapper">
      <base-button
        :type-action="'edit'"
        :is-modal="false"
        @click="openModal('edit', person)"
      ></base-button>
      <base-button
        :type-action="'remove'"
        :is-modal="false"
        @click="openModal('remove', person)"
      ></base-button>
    </span>
  </li>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
import { Person } from "@/models/person";

@Component({
  components: {
    BaseButton,
  },
})
export default class PersonItem extends Vue {
  @Prop() person!: Person;

  @Emit("open-modal")
  openModal(action: string, person: Person) {
    return {
      action,
      person,
    };
  }
}
</script>
