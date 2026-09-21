/**
 * IntelliDesk AI - SectionHeader Component
 *
 * Reusable section heading for dashboard/workspace areas.
 */

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function SectionHeader({
  className,
  title,
  description,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        {title}
      </h2>
      {description && (
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
