/**
 * IntelliDesk AI - Ticket Card
 *
 * Card layout for ticket display (mobile-friendly).
 */

import { Card } from '@/components/ui/Card';
import { TicketStatusBadge } from './TicketStatusBadge';
import { PriorityBadge } from './PriorityBadge';
import { Badge } from '@/components/ui/Badge';
import { formatTimeAgo } from '@/lib/utils';
import type { Ticket } from '@/types';
import Link from 'next/link';

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <Link href={`/tickets/${ticket.id}`} className="block">
      <Card className="hover:shadow-md transition-shadow cursor-pointer">
        <div className="p-4 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                  {ticket.ticket_number}
                </span>
                {ticket.is_critical && (
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50 line-clamp-2">
                {ticket.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {ticket.description}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <TicketStatusBadge status={ticket.status} />
            {ticket.priority && <PriorityBadge priority={ticket.priority} />}
            {ticket.category && (
              <Badge variant="neutral">{ticket.category}</Badge>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
            <span>{formatTimeAgo(ticket.created_at)}</span>
            {ticket.updated_at !== ticket.created_at && (
              <span>Updated {formatTimeAgo(ticket.updated_at)}</span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
