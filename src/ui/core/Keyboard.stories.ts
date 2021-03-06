import { Story, Meta } from '@storybook/web-components';
import { Keyboard, KeyboardProps } from './Keyboard';
import object from './object';

export default {
  title: 'Core/Keyboard',
  argTypes: {
  },
} as Meta;

const Template: Story<Partial<KeyboardProps>> = () => new Keyboard();

export const Default = Template.bind({});
Default.args = {
  header: 'Object',
  target: object,
};