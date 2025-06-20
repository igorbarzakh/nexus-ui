# Nexus UI

Современная библиотека React компонентов с автоматическим подключением стилей.

## Установка

```bash
npm install nexus-ui
# или
yarn add nexus-ui
# или
pnpm add nexus-ui
```

## Использование

### Button

```tsx
import { Button } from 'nexus-ui';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
        Нажми меня
      </Button>

      <Button variant="secondary" size="large" disabled>
        Отключенная кнопка
      </Button>

      <Button variant="outline" size="small">
        Контурная кнопка
      </Button>
    </div>
  );
}
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' (по умолчанию: 'primary')
- `size`: 'small' | 'medium' | 'large' (по умолчанию: 'medium')
- `disabled`: boolean (по умолчанию: false)
- `onClick`: () => void
- `type`: 'button' | 'submit' | 'reset' (по умолчанию: 'button')

### Link

```tsx
import { Link } from 'nexus-ui';

function App() {
  return (
    <div>
      <Link href="https://example.com" variant="primary">
        Обычная ссылка
      </Link>

      <Link href="https://example.com" variant="underline" target="_blank">
        Ссылка с подчеркиванием
      </Link>

      <Link href="/internal" variant="secondary" size="large">
        Внутренняя ссылка
      </Link>
    </div>
  );
}
```

**Props:**

- `href`: string (обязательный)
- `variant`: 'primary' | 'secondary' | 'underline' (по умолчанию: 'primary')
- `size`: 'small' | 'medium' | 'large' (по умолчанию: 'medium')
- `target`: '\_blank' | '\_self' | '\_parent' | '\_top' (по умолчанию: '\_self')
- `onClick`: () => void

### Input

```tsx
import { Input } from 'nexus-ui';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <Input
        value={value}
        onChange={setValue}
        placeholder="Введите текст"
        variant="default"
        size="medium"
      />

      <Input type="email" placeholder="Email" variant="error" size="large" />

      <Input type="password" placeholder="Пароль" variant="success" size="small" disabled />
    </div>
  );
}
```

**Props:**

- `value`: string
- `placeholder`: string
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' (по умолчанию: 'text')
- `variant`: 'default' | 'error' | 'success' (по умолчанию: 'default')
- `size`: 'small' | 'medium' | 'large' (по умолчанию: 'medium')
- `disabled`: boolean (по умолчанию: false)
- `required`: boolean (по умолчанию: false)
- `onChange`: (value: string) => void
- `onFocus`: () => void
- `onBlur`: () => void

## Демонстрация компонентов

Запустите Storybook для интерактивной демонстрации всех компонентов:

```bash
pnpm storybook
```

Storybook включает:

- 🎨 Интерактивные контролы для всех пропсов
- 📱 Адаптивные viewport'ы (mobile, tablet, desktop)
- ♿ Тестирование accessibility
- 📖 Автоматическая документация
- 🧪 Тестирование взаимодействий

## Особенности

- **Автоматические стили**: Стили подключаются автоматически при импорте компонента
- **TypeScript**: Полная поддержка TypeScript с типизированными пропсами
- **Tree-shaking**: Поддерживается tree-shaking для оптимизации размера бандла
- **CSS-in-JS**: Стили изолированы и не конфликтуют с другими стилями
- **Storybook**: Современная документация с интерактивными примерами

## Разработка

```bash
# Установка зависимостей
pnpm install

# Запуск в режиме разработки
pnpm dev

# Сборка библиотеки
pnpm build

# Запуск Storybook
pnpm storybook

# Сборка Storybook
pnpm build-storybook

# Очистка папки dist
pnpm clean
```

## Лицензия

MIT
