/**
 * IntelliDesk AI - Critical Incidents Page
 *
 * Focused view of critical priority tickets requiring immediate attention.
 * STAGE 2: Uses demo data.
 */

'use client';

import { useMemo } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TicketStatusBadge } from '@/components/tickets';
import { EmptyState } from '@/components/ui/EmptyState';
import { getDemoCriticalTickets, getDemoUserById } from '@/data/demo-tickets';
import { formatTimeAgo } from '@/lib/utils';
import { getTeamForCategory } from '@/constants';
import Link from 'next/link';

export default function CriticalIncidentsPage() {
  const criticalTickets = useMemo(() => {
    const tickets = getDemoCriticalTickets();
    // Sort by created date (newest first)
    return tickets.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }, []);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Critical Incidents"
        description="High-priority incidents requiring immediate attention"
      />

      {/* Info Banner */}
      <Card className="border-l-4 border-l-red-500">
        <div className="p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Critical Incident Dashboard
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              This page prioritizes business-critical incidents that require immediate response.
              All critical tickets are monitored for rapid resolution.
            </div>
          </div>
        </div>
      </Card>

      {/* Count */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {criticalTickets.length} {criticalTickets.length === 1 ? 'critical incident' : 'critical incidents'}
      </div>

      {criticalTickets.length === 0 ? (
        <EmptyState
          title="No critical incidents"
          description="There are currently no critical priority tickets. All systems are operating normally."
          icon={
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      ) : (
        <div className="space-y-4">
          {criticalTickets.map((ticket) => {
            const requester = getDemoUserById(ticket.requester_id);
            const assignedAgent = ticket.assigned_to_id ? getDemoUserById(ticket.assigned_to_id) : undefined;

            return (
              <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-red-500">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                            {ticket.ticket_number}
                          </span>
                          <Badge variant="danger">Critical</Badge>
                          <TicketStatusBadge status={ticket.status} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                          {ticket.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {ticket.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Category</div>
                        {ticket.category ? (
                          <Badge variant="neutral">{ticket.category}</Badge>
                        ) : (
                          <span className="text-sm text-gray-400">Not set</span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Assigned Team</div>
                        {ticket.category ? (
                          <div className="text-sm text-gray-900 dark:text-gray-50">
                            {getTeamForCategory(ticket.category)}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-400">Not assigned</span>
                        )}
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Assigned To</div>
                        {assignedAgent ? (
                          <div className="text-sm text-gray-900 dark:text-gray-50">
                            {assignedAgent.name}
                          </div>
                        ) : (
                          <span className="text-sm text-red-600 dark:text-red-400 font-medium">
                            Unassigned
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {requester?.name || 'Unknown'}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Created {formatTimeAgo(ticket.created_at)}
                      </div>
                      {ticket.updated_at !== ticket.created_at && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Updated {formatTimeAgo(ticket.updated_at)}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
