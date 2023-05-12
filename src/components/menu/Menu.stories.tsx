import { Story, Meta } from "@storybook/react";
import Menu, { Types } from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {},
} as Meta;

const Template: Story<Types> = (args: Types) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
