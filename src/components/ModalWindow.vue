<template>
  <div v-if="show">
    <div class="overlay"></div>
    <div class="modal">
      <h2>{{ title }}</h2>
      <div class="modal__container">
        <template v-if="actionName === 'add' || actionName === 'edit'">
          <form ref="form">
            <label for="firstName">
              <span class="label__title">Имя</span>
              <input
                v-model.trim="person.firstName"
                v-focus
                type="text"
                id="firstName"
              />
            </label>
            <label for="lastName">
              <span class="label__title">Фамилия</span>
              <input v-model.trim="person.lastName" type="text" id="lastName" />
            </label>
          </form>
        </template>

        <template v-else-if="actionName === 'remove'">
          <p class="modal__warn">Вы уверены, что хотите удалить сотрудника?</p>
        </template>

        <div class="button-wrapper">
          <base-button
            :typeAction="'close'"
            :isModal="true"
            @click="closeModal"
          ></base-button>
          <base-button
            :typeAction="actionName"
            :isModal="true"
            @click="submitData"
          ></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
import ModalType from "@/models/modal-type";
import { ButtonActions } from "@/models/button-actions";
import { Person } from "@/models/person";

const modalTypes: ModalType[] = [
  {
    name: ButtonActions.add,
    modalTitle: "Добавить сотрудника",
  },
  {
    name: ButtonActions.edit,
    modalTitle: "Редактировать данные сотрудника",
  },
  {
    name: ButtonActions.remove,
    modalTitle: "Удалить данные сотрудника",
  },
];

@Component({
  components: {
    BaseButton,
  },
})
export default class ModalWindow extends Vue {
  @Prop() show!: boolean;
  @Prop() actionName!: string;

  @Emit("close-modal")
  closeModal(): boolean {
    return !this.show;
  }

  submitData(): void {
    this.$emit("submit-data", this.person);
    this.resetForm();
  }

  get title(): string {
    const index = modalTypes.findIndex((type) => type.name === this.actionName);
    return modalTypes[index].modalTitle;
  }

  get person(): Person {
    return {
      firstName: "",
      lastName: "",
      id: Date.now(),
    };
  }

  resetForm() {
    this.$refs["form"]?.reset();
    this.person.firstName = "";
    this.person.lastName = "";
  }
}
</script>

<style lang="scss">
label {
  display: flex;
  flex-flow: row wrap;

  input {
    display: flex;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.4);
  }
  .label__title {
    display: flex;
    width: 100%;
    margin: 10px 0 5px;
  }
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  max-width: 500px;
  padding: 0 0 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.4);
  background: white;

  .modal__container {
    padding: 10px;
  }

  .modal__warn {
    padding: 20px 0;
  }

  @media screen and (max-width: 530px) {
    width: calc(100% - 30px);
  }
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  opacity: 0.6;
}
</style>
