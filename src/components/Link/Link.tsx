import React from 'react';
import './Link.css';

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'underline';
  size?: 'small' | 'medium' | 'large';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'medium',
  target = '_self',
  rel,
  className = '',
  onClick,
}) => {
  const baseClass = 'ui-link';
  const variantClass = `ui-link--${variant}`;
  const sizeClass = `ui-link--${size}`;

  const combinedClassName = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  const linkRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    <a href={href} className={combinedClassName} target={target} rel={linkRel} onClick={onClick}>
      {children}
    </a>
  );
};
