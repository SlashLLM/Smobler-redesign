import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'sunlight' | 'glacier' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none border-none text-decoration-none';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }[size];

  let variantStyles = '';
  let inlineStyles: React.CSSProperties = {
    borderRadius: 'var(--radius-control)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    textTransform: 'none',
  };

  if (variant === 'primary' || variant === 'sunlight') {
    variantStyles = 'btn-primary-sun';
    inlineStyles = {
      ...inlineStyles,
      backgroundColor: 'var(--sun-500)',
      color: 'var(--ink)',
      boxShadow: 'var(--lift-rest)',
    };
  } else if (variant === 'ghost') {
    variantStyles = 'btn-ghost-rim';
    inlineStyles = {
      ...inlineStyles,
      backgroundColor: 'transparent',
      border: '1px solid var(--ink)',
      color: 'var(--ink)',
    };
  } else if (variant === 'glacier' || variant === 'white') {
    variantStyles = 'btn-glacier-rim';
    inlineStyles = {
      ...inlineStyles,
      backgroundColor: 'var(--white)',
      color: 'var(--ink)',
      border: '1px solid var(--line-light)',
      boxShadow: 'var(--lift-card-snow)',
    };
  }

  const combinedClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          style={inlineStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName} style={inlineStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} style={inlineStyles} {...props}>
      {children}
    </button>
  );
};
