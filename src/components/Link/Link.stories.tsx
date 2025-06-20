import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Ссылка с различными вариантами стилей, размерами и настройками.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'underline'],
      description: 'Вариант стиля ссылки',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Размер ссылки',
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'Цель открытия ссылки',
    },
    href: {
      control: { type: 'text' },
      description: 'URL ссылки',
    },
    children: {
      control: { type: 'text' },
      description: 'Текст ссылки',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Link',
    href: 'https://example.com',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Link',
    href: 'https://example.com',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Underline: Story = {
  args: {
    children: 'Underline Link',
    href: 'https://example.com',
    variant: 'underline',
    size: 'medium',
  },
};

export const External: Story = {
  args: {
    children: 'External Link',
    href: 'https://example.com',
    variant: 'primary',
    size: 'medium',
    target: '_blank',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ссылка, открывающаяся в новой вкладке.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Link href="#" variant="primary">
        Primary Link
      </Link>
      <Link href="#" variant="secondary">
        Secondary Link
      </Link>
      <Link href="#" variant="underline">
        Underline Link
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все варианты ссылок для сравнения.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <Link href="#" variant="primary" size="small">
        Small Link
      </Link>
      <Link href="#" variant="primary" size="medium">
        Medium Link
      </Link>
      <Link href="#" variant="primary" size="large">
        Large Link
      </Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все размеры ссылок для сравнения.',
      },
    },
  },
};
