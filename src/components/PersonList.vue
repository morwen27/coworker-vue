<template>
  <ul v-if="persons?.length" class="persons-list">
    <li
      v-for="person of persons"
      v-bind:person="person"
      :key="person.id"
      class="person-list__item"
    >
      <span>{{ person.firstName }} {{ person.lastName }}</span>
      <span class="button-wrapper">
        <!-- <button type="button" @click="removePerson(person.id)"></button> -->
        <button-action :type-action="'edit'" :is-modal="false"></button-action>
        <button-action
          :type-action="'remove'"
          :is-modal="false"
          @click="removePerson($event)"
        ></button-action>
      </span>
    </li>
  </ul>
  <p v-else class="persons-list persons-list_empty">
    Список сотрудников пуст. Чтобы добавить, нажмите кнопку ниже
  </p>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import ButtonAction from "@/components/ButtonAction.vue";
import { Person } from "@/models/person";

@Component({
  components: {
    ButtonAction,
  },
})
export default class PersonList extends Vue {
  @Prop() readonly persons?: Person[];

  // @Emit("remove-person")
  removePerson(evt: Event) {
    console.log(evt.target);
    // return evt.target;
  }
}
</script>

<style lang="scss">
.persons-list {
  margin: 30px 0;
}

.person-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px;
  padding: 25px 15px 25px 70px;
  border-radius: 10px;
  background: url("@/assets/icons/user-icon.svg") no-repeat 15px center;
  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
}

.persons-list_empty {
  display: inline-block;
  vertical-align: baseline;
  margin: 0 0 15px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
}
</style>
