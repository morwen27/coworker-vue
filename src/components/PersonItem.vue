<template>
  <li class="person-list__item">
    <span>{{ person.firstName }} {{ person.lastName }}</span>
    <span class="button-wrapper">
      <base-button :type-action="'edit'" :is-modal="false"></base-button>
      <base-button :type-action="'remove'" :is-modal="false"></base-button>
    </span>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
import { Person } from "@/models/person";

@Component({
  components: {
    BaseButton,
  },
})
export default class PersonItem extends Vue {
  @Prop() person!: Person;
}
</script>
