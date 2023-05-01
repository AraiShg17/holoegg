import { Story, Meta } from "@storybook/react";
import Life, { Types } from "./Life";

export default {
  title: "Components/Life",
  component: Life,
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 30,
        step: 1,
      },
    },
  },
} as Meta;

const Template: Story<Types> = (args: Types) => <Life {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 15,
};
