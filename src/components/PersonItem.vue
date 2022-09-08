<template>
  <li class="person-list__item">
    <span>{{ person.firstName }} {{ person.lastName }}</span>
    <slot></slot>
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
}
</script>
