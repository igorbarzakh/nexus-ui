import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Поле ввода с различными типами, вариантами стилей и размерами.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Тип поля ввода',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success'],
      description: 'Вариант стиля поля',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Размер поля',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Отключенное состояние',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Обязательное поле',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Плейсхолдер',
    },
    value: {
      control: { type: 'text' },
      description: 'Значение поля',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Введите текст',
    type: 'text',
    variant: 'default',
    size: 'medium',
  },
};

export const Email: Story = {
  args: {
    placeholder: 'example@email.com',
    type: 'email',
    variant: 'default',
    size: 'medium',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Введите пароль',
    type: 'password',
    variant: 'default',
    size: 'medium',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Поле с ошибкой',
    type: 'text',
    variant: 'error',
    size: 'medium',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Поле с успехом',
    type: 'text',
    variant: 'success',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Отключенное поле',
    type: 'text',
    variant: 'default',
    size: 'medium',
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', width: '300px' }}>
      <Input placeholder="Small input" size="small" />
      <Input placeholder="Medium input" size="medium" />
      <Input placeholder="Large input" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все размеры полей ввода для сравнения.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', width: '300px' }}>
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Success variant" variant="success" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все варианты полей ввода для сравнения.',
      },
    },
  },
};

export const DifferentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column', width: '300px' }}>
      <Input placeholder="Text input" type="text" />
      <Input placeholder="Email input" type="email" />
      <Input placeholder="Password input" type="password" />
      <Input placeholder="Number input" type="number" />
      <Input placeholder="Tel input" type="tel" />
      <Input placeholder="URL input" type="url" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Различные типы полей ввода.',
      },
    },
  },
};
