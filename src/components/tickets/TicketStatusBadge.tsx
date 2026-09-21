/**
 * IntelliDesk AI - Ticket Status Badge
 *
 * Displays ticket status with appropriate color coding.
 */

import { Badge } from '@/components/ui/Badge';
import { STATUS_COLORS, STATUS_DISPLAY_NAMES } from '@/constants';
import type { TicketStatus } from '@/types';

interface TicketStatusBadgeProps {
  status: TicketStatus;
}

export function TicketStatusBadge({ status }: TicketStatusBadgeProps) {
  const color = STATUS_COLORS[status];
  const displayName = STATUS_DISPLAY_NAMES[status];

  // Map internal color names to Badge variant
  const variantMap: Record<string, 'neutral' | 'primary' | 'ai' | 'success' | 'warning' | 'danger' | 'info'> = {
    gray: 'neutral',
    info: 'info',
    warning: 'warning',
    success: 'success',
    danger: 'danger',
  };

  const variant = variantMap[color] || 'neutral';

  return <Badge variant={variant}>{displayName}</Badge>;
}
