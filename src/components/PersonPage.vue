<template>
  <div>
    <table class="person__table">
      <tr>
        <td class="person__name person_name_title">Имя</td>
        <td class="person__name person_name_first">{{ person.firstName }}</td>
      </tr>
      <tr>
        <td class="person__name person_name_title">Фамилия</td>
        <td class="person__name person_name_second">{{ person.lastName }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Person } from "@/models/person";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PersonPage extends Vue {
  get person(): Person {
    return this.$store.getters.allPersons.find(
      (p: Person) => p.id === parseInt(this.$route.params.id)
    );
  }
}
</script>

<style lang="scss">
@import "@/variables.scss";
.person__table {
  border-collapse: separate;
  border-spacing: 10px;

  .person__name {
    padding: 5px 15px;
    border: 1px solid $mainColor;
    border-radius: 10px;

    &.person_name_title {
      margin: 0 0 0 15px;
      font-weight: 600;
    }
  }
}
</style>
