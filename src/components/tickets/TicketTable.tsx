/**
 * IntelliDesk AI - Ticket Table
 *
 * Professional table layout for ticket lists (desktop).
 */

import { TicketStatusBadge } from './TicketStatusBadge';
import { PriorityBadge } from './PriorityBadge';
import { Badge } from '@/components/ui/Badge';
import { formatTimeAgo } from '@/lib/utils';
import type { Ticket } from '@/types';
import Link from 'next/link';
import { getTeamForCategory } from '@/constants';

interface TicketTableProps {
  tickets: Ticket[];
}

export function TicketTable({ tickets }: TicketTableProps) {
  if (tickets.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        No tickets found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
              Ticket
            </th>
            <th className="text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
              Issue
            </th>
            <th className="text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
              Status
            </th>
            <th className="text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
              Priority
            </th>
            <th className="text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
              Category
            </th>
            <th className="text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
              Team
            </th>
            <th className="text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
              Created
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <td className="py-3 px-4">
                <Link
                  href={`/tickets/${ticket.id}`}
                  className="flex items-center gap-2 text-sm font-mono text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {ticket.is_critical && (
                    <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                  {ticket.ticket_number}
                </Link>
              </td>
              <td className="py-3 px-4">
                <Link
                  href={`/tickets/${ticket.id}`}
                  className="block max-w-md"
                >
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-50 line-clamp-1 hover:underline">
                    {ticket.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-1">
                    {ticket.description}
                  </div>
                </Link>
              </td>
              <td className="py-3 px-4">
                <TicketStatusBadge status={ticket.status} />
              </td>
              <td className="py-3 px-4">
                {ticket.priority ? (
                  <PriorityBadge priority={ticket.priority} />
                ) : (
                  <span className="text-xs text-gray-400">—</span>
                )}
              </td>
              <td className="py-3 px-4">
                {ticket.category ? (
                  <Badge variant="neutral">{ticket.category}</Badge>
                ) : (
                  <span className="text-xs text-gray-400">—</span>
                )}
              </td>
              <td className="py-3 px-4">
                {ticket.category ? (
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {getTeamForCategory(ticket.category)}
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">—</span>
                )}
              </td>
              <td className="py-3 px-4">
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {formatTimeAgo(ticket.created_at)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
