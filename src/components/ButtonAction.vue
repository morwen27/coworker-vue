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
  [ButtonActions.remove]: {
    title: "Удалить",
    class: "button_remove",
  },
};

@Component
export default class ButtonAction extends Vue {
  @Prop() readonly typeAction!: ButtonActions;
  @Prop() readonly isModal!: boolean;

  get title() {
    return this.isModal ? buttonTypes[this.typeAction].title : "";
  }

  get classModificator() {
    return buttonTypes[this.typeAction].class;
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
}
</style>
