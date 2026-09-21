/**
 * IntelliDesk AI - Ticket Detail Page
 *
 * Comprehensive ticket detail view with AI triage, properties, and activity.
 * STAGE 2: Uses demo data. Will be replaced with real database queries in Stage 5.
 */

import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';
import {
  TicketProperties,
  AITriageCard,
  AutomationTimeline,
} from '@/components/tickets';
import {
  getDemoTicketById,
  getDemoUserById,
  getDemoAIDecisionForTicket,
  getDemoAutomationRunForTicket,
} from '@/data/demo-tickets';
import { formatTimeAgo } from '@/lib/utils';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TicketDetailPage({ params }: PageProps) {
  const { id } = await params;
  const ticket = getDemoTicketById(id);

  if (!ticket) {
    notFound();
  }

  const requester = getDemoUserById(ticket.requester_id);
  const assignedAgent = ticket.assigned_to_id ? getDemoUserById(ticket.assigned_to_id) : undefined;
  const aiDecision = ticket.ai_decision_id ? getDemoAIDecisionForTicket(ticket.id) : undefined;
  const automationRun = ticket.automation_run_id ? getDemoAutomationRunForTicket(ticket.id) : undefined;

  return (
    <div className="space-y-6">
      <PageHeader
        title={ticket.ticket_number}
        description={ticket.title}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <div className="p-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                  Description
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {ticket.description}
                </p>
              </div>

              {/* Attachment Area (UI Only for Stage 2) */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span>No attachments</span>
                </div>
              </div>
            </div>
          </Card>

          {/* AI Triage Result */}
          {aiDecision && (
            <AITriageCard decision={aiDecision} />
          )}

          {/* Automation Timeline */}
          <AutomationTimeline
            automationRun={automationRun}
            ticketStatus={ticket.status}
          />

          {/* Activity Tabs */}
          <Card>
            <div className="p-6">
              <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                <nav className="-mb-px flex space-x-6">
                  <button className="py-2 px-1 border-b-2 border-primary-600 font-medium text-sm text-primary-600 dark:text-primary-400">
                    All Activity
                  </button>
                  <button className="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    Comments
                  </button>
                  <button className="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    System
                  </button>
                </nav>
              </div>

              {/* Activity Timeline (Demo) */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900 dark:text-gray-50">
                        {requester?.name || 'Unknown'}
                      </span>
                      {' '}
                      <span className="text-gray-600 dark:text-gray-400">created this ticket</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formatTimeAgo(ticket.created_at)}
                    </div>
                  </div>
                </div>

                {ticket.assigned_to_id && assignedAgent && (
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm">
                        <span className="font-medium text-gray-900 dark:text-gray-50">
                          {assignedAgent.name}
                        </span>
                        {' '}
                        <span className="text-gray-600 dark:text-gray-400">was assigned to this ticket</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {formatTimeAgo(ticket.updated_at)}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Comment Composer (UI Only for Stage 2) */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <Textarea
                  placeholder="Add a comment..."
                  rows={3}
                  disabled
                />
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Comment functionality will be connected in Stage 7
                  </div>
                  <Button size="sm" disabled>
                    Add Comment
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <TicketProperties
            ticket={ticket}
            requester={requester}
            assignedAgent={assignedAgent}
          />

          {/* Human Review Required */}
          {ticket.requires_review && !ticket.review_completed && (
            <Card className="border-l-4 border-l-yellow-500">
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-yellow-900 dark:text-yellow-200">
                      Human Review Required
                    </div>
                    <div className="text-sm text-yellow-800 dark:text-yellow-300 mt-1">
                      This ticket requires manual review before processing.
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    Review AI Decision
                  </Button>
                  <Button variant="primary" size="sm" className="w-full" disabled>
                    Accept Recommendation
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
