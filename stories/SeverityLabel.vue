<template>
  <div :class="classes" :style="style">
    {{ label }}
  </div>
</template>

<script>
import "./severityLabel.scss";
import { reactive, computed } from "vue";

export default {
  name: "my-button",

  props: {
    label: {
      type: [String, Number],
      required: true,
    },
    level: {
      type: String,
      default: "",
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "severity-label": true,
        [`severity-label--${props.level || "unknown"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
