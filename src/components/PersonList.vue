<template>
  <div>
    <ul v-if="persons?.length" class="persons-list">
      <person-item
        v-for="person of persons"
        :person="person"
        :key="person.id"
        @open-modal="openModal($event.action, $event.person)"
      >
      </person-item>
    </ul>
    <p v-else class="persons-list persons-list_empty">
      Список сотрудников пуст. Чтобы добавить, нажмите кнопку ниже
    </p>
    <base-button
      :type-action="'add'"
      :is-modal="false"
      @click="openModal('add', currentPerson)"
    ></base-button>
    <modal-window
      v-if="showModal"
      :actionName="actionForModal"
      :person="currentPerson"
      @close-modal="closeModal"
      @submit-data="getChangedData"
    >
    </modal-window>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonItem from "@/components/PersonItem.vue";
import BaseButton from "@/components/BaseButton.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import { Person } from "@/models/person";
import { editPerson, removePerson } from "@/getData";
import { ButtonActions } from "@/models/button-actions";

export const currentPerson: Person = {
  firstName: "",
  lastName: "",
  id: Date.now(),
};

@Component({
  components: {
    PersonItem,
    BaseButton,
    ModalWindow,
  },
})
export default class PersonList extends Vue {
  currentPerson!: Person;

  get persons(): Person[] {
    this.$store.dispatch("fetchPersons");
    return this.$store.getters.allPersons;
  }

  showModal = false;
  actionForModal = "";

  async created() {
    this.currentPerson = currentPerson;
  }

  openModal(action: string, person: Person) {
    this.actionForModal = action;
    this.currentPerson = {
      ...person,
    };
    this.showModal = !this.showModal;
  }

  closeModal() {
    this.showModal = !this.showModal;
  }

  async getChangedData(person: Person) {
    switch (this.actionForModal) {
      case ButtonActions.edit: {
        await editPerson(person);
        const index = this.persons.findIndex((p) => p.id === person.id);
        this.persons.splice(index, 1, person);

        console.log(this.persons);
        break;
      }
      case ButtonActions.remove: {
        // removePerson(person);
        this.$store.dispatch("removePerson", person);
        break;
      }
    }
  }
}
</script>

<style lang="scss">
.persons-list {
  margin: 30px 0;

  .person-list__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 15px;
    padding: 25px 15px 25px 70px;
    border-radius: 10px;
    background: url("@/assets/icons/user-icon.svg") no-repeat 15px center;
    box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);

    @media screen and (max-width: 475px) {
      position: relative;
      padding: 25px 15px 25px 50px;
      background-position: 5px center;
    }
  }

  .persons-list_empty {
    display: inline-block;
    vertical-align: baseline;
    margin: 0 0 15px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);
  }

  @media screen and (max-width: 475px) {
    .button-wrapper {
      width: 40px;
    }

    .button {
      min-width: 30px;
      min-height: 30px;
    }
  }
}
</style>
