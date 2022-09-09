import { VueConstructor } from "vue";
import { ButtonActions } from "./button-actions";

export default interface ModalType {
  name: ButtonActions;
  modalTitle: string;
  buttonTitle?: string;
  component?: VueConstructor;
}
