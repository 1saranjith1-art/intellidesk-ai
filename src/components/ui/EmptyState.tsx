/**
 * IntelliDesk AI - EmptyState Component
 *
 * Display for empty ticket queues and automation screens.
 */

import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  className,
  title,
  description,
  icon,
  action,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8',
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-gray-400 dark:text-gray-600">{icon}</div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm mb-4">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
