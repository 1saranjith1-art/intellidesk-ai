/**
 * IntelliDesk AI - AI Triage Center Page
 *
 * Operational Agentic AI decision center showing AI-assisted ticket classification,
 * prioritization, routing recommendations, and decisions requiring human attention.
 *
 * STAGE 2: Mock UI with demo data (no real AI/database)
 */

import { PageHeader } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { DEMO_TICKETS, DEMO_AI_DECISIONS, getDemoTicketsRequiringReview } from '@/data/demo-tickets';
import { formatTimeAgo } from '@/lib/utils';
import Link from 'next/link';

export const metadata = {
  title: 'AI Triage Center - IntelliDesk AI',
  description: 'Monitor AI-powered ticket classification and human review queue',
};

export default function AITriagePage() {
  // Calculate demo metrics
  const totalDecisions = DEMO_AI_DECISIONS.length;
  const autoAccepted = DEMO_AI_DECISIONS.filter(d => d.decision_source === 'AI_AUTOMATED' && !d.reviewed_by_id).length;
  const humanReviewed = DEMO_AI_DECISIONS.filter(d => d.reviewed_by_id !== null).length;
  const humanCorrected = DEMO_AI_DECISIONS.filter(
    d => d.reviewed_by_id && (d.original_category !== d.final_category || d.original_priority !== d.final_priority)
  ).length;

  const reviewQueue = getDemoTicketsRequiringReview();
  const reviewRequired = reviewQueue.length;

  // Recent AI decisions (last 10)
  const recentDecisions = [...DEMO_AI_DECISIONS]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 10);

  return (
    <div className="space-y-6">
      <PageHeader
        title="AI Triage"
        description={
          <span>
            Review AI-assisted ticket classification, prioritization, routing recommendations,
            and decisions requiring human attention.{' '}
            <span className="text-xs text-gray-500 dark:text-gray-400">(Demo data)</span>
          </span>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total AI Decisions
            </div>
            <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {totalDecisions}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Automatically Accepted
            </div>
            <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {autoAccepted}
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Acceptance Rate: {totalDecisions > 0 ? Math.round((autoAccepted / totalDecisions) * 100) : 0}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Human Review Required
            </div>
            <div className="mt-2 text-3xl font-semibold text-yellow-600 dark:text-yellow-500">
              {reviewRequired}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Human Corrected
            </div>
            <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {humanCorrected}
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Correction Rate: {humanReviewed > 0 ? Math.round((humanCorrected / humanReviewed) * 100) : 0}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Human Review Queue */}
      {reviewQueue.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Human Review Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reviewQueue.map(ticket => {
                const aiDecision = DEMO_AI_DECISIONS.find(d => d.ticket_id === ticket.id);
                return (
                  <Link
                    key={ticket.id}
                    href={`/tickets/${ticket.id}`}
                    className="block p-4 border border-border rounded-lg hover:border-primary-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-gray-500">{ticket.ticket_number}</span>
                          {ticket.is_critical && (
                            <Badge variant="danger">Critical</Badge>
                          )}
                        </div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-50 mb-2">
                          {ticket.title}
                        </p>
                        {aiDecision && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                            <div>
                              <span className="text-gray-500">AI Category:</span>{' '}
                              <span className="font-medium">{aiDecision.original_category || '—'}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">AI Priority:</span>{' '}
                              <span className="font-medium">{aiDecision.original_priority || '—'}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">AI Team:</span>{' '}
                              <span className="font-medium">{aiDecision.original_assigned_team}</span>
                            </div>
                          </div>
                        )}
                        {aiDecision?.original_review_reason && (
                          <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded text-xs text-yellow-800 dark:text-yellow-300">
                            <strong>Review Reason:</strong> {aiDecision.original_review_reason}
                          </div>
                        )}
                      </div>
                      <button className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-primary-700 bg-primary-50 border border-primary-200 rounded hover:bg-primary-100 dark:text-primary-400 dark:bg-primary-900/20 dark:border-primary-800 dark:hover:bg-primary-900/30">
                        Review
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent AI Decisions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent AI Decisions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Ticket</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">AI Summary</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Category</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Priority</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Team</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Decision Source</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Review Status</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentDecisions.map(decision => {
                  const ticket = DEMO_TICKETS.find(t => t.id === decision.ticket_id);
                  if (!ticket) return null;

                  return (
                    <tr key={decision.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3">
                        <Link
                          href={`/tickets/${ticket.id}`}
                          className="text-primary-600 hover:text-primary-700 font-medium dark:text-primary-400"
                        >
                          {ticket.ticket_number}
                        </Link>
                      </td>
                      <td className="py-3 max-w-xs truncate">{decision.original_summary}</td>
                      <td className="py-3">{decision.final_category || '—'}</td>
                      <td className="py-3">
                        {decision.final_priority ? (
                          <Badge variant={
                            decision.final_priority === 'Critical' ? 'danger' :
                            decision.final_priority === 'High' ? 'warning' :
                            decision.final_priority === 'Medium' ? 'info' : 'neutral'
                          }>
                            {decision.final_priority}
                          </Badge>
                        ) : '—'}
                      </td>
                      <td className="py-3 text-xs">{decision.final_assigned_team}</td>
                      <td className="py-3">
                        {decision.decision_source === 'AI_AUTOMATED' && (
                          <Badge variant="ai">AI Automated</Badge>
                        )}
                        {decision.decision_source === 'HUMAN_REVIEWED_AI' && (
                          <Badge variant="primary">Human Reviewed</Badge>
                        )}
                        {decision.decision_source === 'MANUALLY_CLASSIFIED' && (
                          <Badge variant="neutral">Manual</Badge>
                        )}
                      </td>
                      <td className="py-3">
                        {decision.original_review_required ? (
                          decision.reviewed_by_id ? (
                            <Badge variant="success">Reviewed</Badge>
                          ) : (
                            <Badge variant="warning">Pending</Badge>
                          )
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="py-3 text-xs text-gray-500">
                        {formatTimeAgo(decision.created_at)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
