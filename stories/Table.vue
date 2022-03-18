<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script>
import "./table.scss";
import { reactive, computed } from "vue";

export default {
  name: "my-table",

  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      // classes: computed(() => ({})),
      // style: computed(() => ({
      //   backgroundColor: props.backgroundColor,
      // })),
      // onClick() {
      //   emit("click");
      // },
    };
  },
};
</script>