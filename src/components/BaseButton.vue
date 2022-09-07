<template>
  <button
    type="button"
    class="button"
    :class="classModificator"
    v-on="$listeners"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ButtonActions } from "@/models/button-actions";
import { Prop } from "vue-property-decorator";

const buttonTypes = {
  [ButtonActions.add]: {
    title: "Добавить",
    class: "button_add",
  },
  [ButtonActions.edit]: {
    title: "Изменить",
    class: "button_edit",
  },
  [ButtonActions.close]: {
    title: "Закрыть",
    class: "button_close",
  },
  [ButtonActions.remove]: {
    title: "Удалить",
    class: "button_remove",
  },
};

@Component
export default class BaseButton extends Vue {
  @Prop() readonly typeAction!: ButtonActions;
  @Prop() readonly isModal!: boolean;

  modalButtonClasses = ["button_modal", "button_title"];

  get title() {
    return this.isModal ? buttonTypes[this.typeAction].title : "";
  }

  get classModificator() {
    return this.isModal
      ? `${buttonTypes[this.typeAction].class} ${this.modalButtonClasses.join(
          " "
        )}`
      : buttonTypes[this.typeAction].class;
  }
}
</script>

<style lang="scss">
.button {
  display: flex;
  margin: 0 5px 5px;
  min-width: 40px;
  min-height: 40px;
  background: none;
  border-radius: 10px;
  border: 0;
  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.4);
  cursor: pointer;

  &.button_remove {
    background: url("@/assets/icons/remove-icon.svg") no-repeat;
  }
  &.button_edit {
    background: url("@/assets/icons/edit-icon.svg") no-repeat;
  }
  &.button_add {
    margin-left: 0;
    background: url("@/assets/icons/add-icon.svg") no-repeat;
  }
  &.button_remove,
  &.button_edit,
  &.button_add {
    background-position: center center;
    background-size: 70% 70%;
  }

  &.button_modal {
    display: inline-block;
    vertical-align: baseline;
    margin: 10px 10px 0;
  }
  &.button_title {
    padding: 5px 10px;
    color: white;
    background: #98ccfd;
  }
  &.button_close {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .button:hover {
    opacity: 0.7;
  }
}
</style>
