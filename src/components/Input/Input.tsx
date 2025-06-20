import React from 'react';
import './Input.css';

export interface InputProps {
  value?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'error' | 'success';
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  value = '',
  placeholder,
  type = 'text',
  size = 'medium',
  variant = 'default',
  disabled = false,
  required = false,
  name,
  id,
  className = '',
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
}) => {
  const baseClass = 'ui-input';
  const sizeClass = `ui-input--${size}`;
  const variantClass = `ui-input--${variant}`;
  const disabledClass = disabled ? 'ui-input--disabled' : '';

  const combinedClassName = [baseClass, sizeClass, variantClass, disabledClass, className]
    .filter(Boolean)
    .join(' ');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={combinedClassName}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  );
};
