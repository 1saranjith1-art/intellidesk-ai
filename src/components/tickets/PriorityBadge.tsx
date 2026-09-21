/**
 * IntelliDesk AI - Priority Badge
 *
 * Displays ticket priority with appropriate color coding.
 */

import { Badge } from '@/components/ui/Badge';
import { PRIORITY_COLORS } from '@/constants';
import type { TicketPriority } from '@/types';

interface PriorityBadgeProps {
  priority: TicketPriority;
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const color = PRIORITY_COLORS[priority];

  // Map internal color names to Badge variant
  const variantMap: Record<string, 'neutral' | 'primary' | 'ai' | 'success' | 'warning' | 'danger' | 'info'> = {
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    success: 'success',
  };

  const variant = variantMap[color] || 'neutral';

  return <Badge variant={variant}>{priority}</Badge>;
}
