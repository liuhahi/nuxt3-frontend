import SeverityLabel from "./SeverityLabel.vue";

export default {
  title: "Example/SeverityLabel",
  component: SeverityLabel,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SeverityLabel },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<severity-label v-bind="args" />',
});

export const Critical = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Critical.args = {
  backgroundColor: "",
  level: "critical",
  label: 24,
};

export const Medium = Template.bind({});
Medium.args = {
  backgroundColor: "",
  level: "medium",
  label: 10,
};
