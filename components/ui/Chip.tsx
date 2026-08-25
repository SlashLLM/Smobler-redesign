import React from 'react';

export interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'filter' | 'status-ice' | 'status-sun' | 'office' | 'tag';
  active?: boolean;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md';
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  active = false,
  onClick,
  className = '',
  size = 'md',
}) => {
  const isClickable = !!onClick;
  const Component = isClickable ? 'button' : 'span';

  const sizeStyles = size === 'sm' ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';

  const baseStyles = `
    inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.14em] font-medium
    rounded-full transition-all duration-150 select-none whitespace-nowrap
    ${sizeStyles} ${isClickable ? 'cursor-pointer' : 'cursor-default'}
  `;

  let variantStyles = '';
  let customStyle: React.CSSProperties = {
    borderRadius: 'var(--radius-pill)',
  };

  switch (variant) {
    case 'status-ice':
      // Signal — machine / AI state strictly (§4)
      variantStyles = 'bg-[var(--ice-900)] text-[var(--ice-400)] border border-[rgba(124,211,232,0.3)]';
      break;
    case 'status-sun':
      variantStyles = 'bg-[var(--sun-100)] text-[var(--sun-700)] border border-[rgba(179,143,0,0.3)]';
      break;
    case 'office':
      variantStyles = 'bg-[rgba(11,14,18,0.06)] text-[var(--ink-mute)] border border-[var(--line-light)]';
      break;
    case 'filter':
      if (active) {
        variantStyles = 'bg-[var(--sun-500)] text-[var(--ink)] font-semibold shadow-sm';
      } else {
        variantStyles = 'bg-transparent text-inherit border border-[var(--line-light)] hover:border-[var(--sun-500)]';
      }
      break;
    default:
      variantStyles = 'bg-[rgba(11,14,18,0.05)] text-inherit border border-[var(--line-light)]';
      break;
  }

  return (
    <Component
      type={isClickable ? 'button' : undefined}
      onClick={onClick}
      aria-pressed={variant === 'filter' ? active : undefined}
      className={`${baseStyles} ${variantStyles} ${className}`.trim()}
      style={customStyle}
    >
      {variant === 'status-ice' && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: 'var(--ice-400)' }}
          aria-hidden="true"
        />
      )}
      {children}
    </Component>
  );
};
