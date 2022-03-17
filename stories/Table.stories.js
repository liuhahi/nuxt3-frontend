import MyTable from "./Table.vue";
import Button from "./Button.vue";

export default {
  title: "Example/Table",
  component: MyTable,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyTable },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<my-table :tableData="tableData"/>',
});

export const Sorted = Template.bind({});
Sorted.args = {
  tableData: [
    {
      date: "2020-02-02",
      name: "office 1",
      address: "pandan loop",
    },
    {
      date: "2022-01-02",
      name: "office 2",
      address: "macpherson mrt",
    },
  ],
};
