/**
 * IntelliDesk AI - Ticket Properties Panel
 *
 * Property display panel for ticket details (right sidebar on desktop).
 */

import { Card } from '@/components/ui/Card';
import { TicketStatusBadge } from './TicketStatusBadge';
import { PriorityBadge } from './PriorityBadge';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDateTime } from '@/lib/utils';
import { getTeamForCategory } from '@/constants';
import type { Ticket, UserProfile } from '@/types';

interface TicketPropertiesProps {
  ticket: Ticket;
  requester?: UserProfile;
  assignedAgent?: UserProfile;
}

export function TicketProperties({ ticket, requester, assignedAgent }: TicketPropertiesProps) {
  return (
    <Card>
      <div className="p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">Properties</h3>

        {/* Status */}
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Status</div>
          <TicketStatusBadge status={ticket.status} />
        </div>

        {/* Priority */}
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Priority</div>
          {ticket.priority ? (
            <PriorityBadge priority={ticket.priority} />
          ) : (
            <span className="text-sm text-gray-400">Not set</span>
          )}
        </div>

        {/* Category */}
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Category</div>
          {ticket.category ? (
            <Badge variant="neutral">{ticket.category}</Badge>
          ) : (
            <span className="text-sm text-gray-400">Not set</span>
          )}
        </div>

        {/* Assigned Team */}
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Assigned Team</div>
          {ticket.category ? (
            <span className="text-sm text-gray-900 dark:text-gray-50">
              {getTeamForCategory(ticket.category)}
            </span>
          ) : (
            <span className="text-sm text-gray-400">Not assigned</span>
          )}
        </div>

        {/* Requester */}
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Requester</div>
          <div className="text-sm text-gray-900 dark:text-gray-50">
            {requester?.name || 'Unknown'}
          </div>
          {requester?.email && (
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {requester.email}
            </div>
          )}
        </div>

        {/* Assigned To */}
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Assigned To</div>
          {assignedAgent ? (
            <div className="text-sm text-gray-900 dark:text-gray-50">
              {assignedAgent.name}
            </div>
          ) : (
            <span className="text-sm text-gray-400">Unassigned</span>
          )}
        </div>

        {/* Timestamps */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Created</div>
            <div className="text-xs text-gray-900 dark:text-gray-50">
              {formatDateTime(ticket.created_at)}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Updated</div>
            <div className="text-xs text-gray-900 dark:text-gray-50">
              {formatDateTime(ticket.updated_at)}
            </div>
          </div>
          {ticket.resolved_at && (
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Resolved</div>
              <div className="text-xs text-gray-900 dark:text-gray-50">
                {formatDateTime(ticket.resolved_at)}
              </div>
            </div>
          )}
        </div>

        {/* Actions (Prototype UI - Stage 2) */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <Button variant="outline" size="sm" className="w-full" disabled>
            Assign to Me
          </Button>
          <Button variant="outline" size="sm" className="w-full" disabled>
            Change Status
          </Button>
        </div>
      </div>
    </Card>
  );
}
