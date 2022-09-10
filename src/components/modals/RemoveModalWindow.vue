<template>
  <div>
    <p class="modal__warn">Вы уверены, что хотите удалить сотрудника?</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
import { Person } from "@/models/person";

@Component({
  components: {
    BaseButton,
  },
})
export default class RemoveModalWindow extends Vue {
  @Prop() initialData!: Person;
}
</script>

<style lang="scss"></style>
