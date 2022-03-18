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

export const ComponentTable = Template.bind({});
ComponentTable.args = {
  tableData: [
    {
      component: "jackson-databind",
      version: "2.2.2",
      language: "Java",
      vulnerabilities: {
        critical: 0,
        high: 32,
        medium: 32,
        low: 1,
        none: 0,
      },
      licenses: [
        {
          name: "Apache License 2.0",
          id: 1,
        },
        {
          name: "MIT License 2.0",
          id: 2,
        }
      ]
    },
    {
      date: "2022-01-02",
      name: "office 2",
      address: "macpherson mrt",
    },
  ],
};
