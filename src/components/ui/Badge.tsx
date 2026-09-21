/**
 * IntelliDesk AI - Badge Component
 *
 * Compact status and category indicators.
 */

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | 'neutral'
    | 'primary'
    | 'ai'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';
}

export function Badge({
  className,
  variant = 'neutral',
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium';

  const variantStyles = {
    neutral:
      'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
    primary:
      'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400',
    ai: 'bg-ai-50 text-ai-700 dark:bg-ai-900/20 dark:text-ai-400',
    success:
      'bg-success-50 text-success-700 dark:bg-success-900/20 dark:text-success-400',
    warning:
      'bg-warning-50 text-warning-700 dark:bg-warning-900/20 dark:text-warning-400',
    danger:
      'bg-danger-50 text-danger-700 dark:bg-danger-900/20 dark:text-danger-400',
    info: 'bg-info-50 text-info-700 dark:bg-info-900/20 dark:text-info-400',
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
