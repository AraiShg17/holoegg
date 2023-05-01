import { Story, Meta } from "@storybook/react";
import Hungry, { Types } from "./Hungry";

export default {
  title: "Components/Hungry",
  component: Hungry,
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
} as Meta;

const Template: Story<Types> = (args: Types) => <Hungry {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 8,
};
