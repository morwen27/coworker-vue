<template>
  <div>
    <div class="overlay"></div>
    <div class="modal">
      <h2>{{ title }}</h2>
      <div class="modal__container">
        <component :is="modalType" :initialData="person" ref="form">
          <div class="button-wrapper">
            <base-button
              :typeAction="'close'"
              :isModal="true"
              @click="closeModal"
            ></base-button>
            <base-button
              ref="button"
              :typeAction="actionName"
              :isModal="true"
              @click="submitData"
            ></base-button>
          </div>
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
import RemoveModalWindow from "@/components/modals/RemoveModalWindow.vue";
import EditModalWindow from "@/components/modals/EditModalWindow.vue";
import AddModalWindow from "@/components/modals/AddModalWindow.vue";
import ModalType from "@/models/modal-type";
import { ButtonActions } from "@/models/button-actions";
import { Person } from "@/models/person";

const modalTypes: ModalType[] = [
  {
    name: ButtonActions.add,
    modalTitle: "Добавить сотрудника",
    component: AddModalWindow,
  },
  {
    name: ButtonActions.edit,
    modalTitle: "Редактировать данные сотрудника",
    component: EditModalWindow,
  },
  {
    name: ButtonActions.remove,
    modalTitle: "Удалить данные сотрудника",
    component: RemoveModalWindow,
  },
];

@Component({
  components: {
    BaseButton,
    RemoveModalWindow,
  },
})
export default class ModalWindow extends Vue {
  @Prop() actionName!: string;
  @Prop() person!: Person;

  @Emit("close-modal")
  closeModal(): boolean {
    if (this.actionName === ButtonActions.add) {
      (this.$refs["form"] as AddModalWindow).resetFrom();
    }
    return false;
  }

  @Emit("submit-data")
  submitData(): Person {
    if (this.actionName === ButtonActions.remove) {
      (this.$refs["button"] as BaseButton).disabledButton();
    }
    if (this.actionName === ButtonActions.add) {
      (this.$refs["form"] as AddModalWindow).resetFrom();
      (this.$refs["form"] as AddModalWindow).focus();
    }
    console.log(this.person);
    return this.person;
  }

  get title(): string {
    const index = modalTypes.findIndex((type) => type.name === this.actionName);
    return modalTypes[index].modalTitle;
  }

  get modalType() {
    return modalTypes.find((type) => type.name === this.actionName)?.component;
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
