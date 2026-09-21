/**
 * IntelliDesk AI - Button Component
 *
 * Reusable button with variants, sizes, and states.
 * Can render as a button or Link based on href prop.
 */

'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
};

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonAsLink = ButtonBaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      children,
      ...rest
    } = props;

    const disabled = 'disabled' in props ? props.disabled : false;
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variantStyles = {
      primary:
        'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
      secondary:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700',
      outline:
        'border border-border bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-900 dark:active:bg-gray-800',
      ghost:
        'bg-transparent hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-gray-900 dark:active:bg-gray-800',
      danger:
        'bg-danger-600 text-white hover:bg-danger-700 active:bg-danger-800',
    };

    const sizeStyles = {
      sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
      md: 'h-10 px-4 text-sm rounded-md gap-2',
      lg: 'h-12 px-6 text-base rounded-lg gap-2',
    };

    const classes = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </>
    );

    // Render as Link if href is provided
    if ('href' in rest && rest.href) {
      const { href, ...linkProps } = rest;
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }

    // Render as button
    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={classes}
        disabled={disabled || isLoading}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
