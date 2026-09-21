/**
 * IntelliDesk AI - Automation Center
 *
 * Monitor helpdesk automation runs, workflow health, and integration status.
 *
 * STAGE 2: Mock UI with honest system state (UiPath NOT connected)
 */

import { PageHeader } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '@/components/ui';
import { DEMO_AUTOMATION_RUNS, DEMO_TICKETS } from '@/data/demo-tickets';
import { TraceAutomation } from '@/components/automation/TraceAutomation';
import { formatTimeAgo } from '@/lib/utils';
import Link from 'next/link';

export const metadata = {
  title: 'Automation Center - IntelliDesk AI',
  description: 'Monitor automation runs and workflow health',
};

export default function AutomationPage() {
  // Calculate metrics
  const totalRuns = DEMO_AUTOMATION_RUNS.length;
  const successfulRuns = DEMO_AUTOMATION_RUNS.filter(r => r.status === 'SUCCESS' || r.status === 'SUCCESS_WITH_WARNING').length;
  const failedRuns = DEMO_AUTOMATION_RUNS.filter(r => r.status === 'FAILED').length;
  const humanReviewRuns = DEMO_AUTOMATION_RUNS.filter(r => r.status === 'HUMAN_REVIEW_REQUIRED').length;

  // Calculate average duration for completed runs
  const completedRuns = DEMO_AUTOMATION_RUNS.filter(r => r.completed_at);
  const avgDuration = completedRuns.length > 0
    ? completedRuns.reduce((sum, run) => {
        const duration = new Date(run.completed_at!).getTime() - new Date(run.started_at).getTime();
        return sum + duration;
      }, 0) / completedRuns.length / 1000
    : 0;

  // Sort runs by most recent
  const sortedRuns = [...DEMO_AUTOMATION_RUNS].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  function getStatusBadge(status: string) {
    switch (status) {
      case 'SUCCESS':
        return <Badge variant="success">Success</Badge>;
      case 'SUCCESS_WITH_WARNING':
        return <Badge variant="warning">Success with Warning</Badge>;
      case 'FAILED':
        return <Badge variant="danger">Failed</Badge>;
      case 'PROCESSING':
        return <Badge variant="info">Processing</Badge>;
      case 'QUEUED':
        return <Badge variant="neutral">Queued</Badge>;
      case 'HUMAN_REVIEW_REQUIRED':
        return <Badge variant="warning">Human Review Required</Badge>;
      case 'CANCELLED':
        return <Badge variant="neutral">Cancelled</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Automation Center"
        description="Monitor helpdesk automation runs, workflow health, and integration status."
      />

      {/* Connection Status Panel */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                UiPath Orchestrator
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-500">Not configured</span>
              </div>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Automation Provider
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Mock / Prototype</span>
              </div>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Environment
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Development</span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded text-sm text-yellow-800 dark:text-yellow-300">
            <strong>Stage 2 Prototype:</strong> UiPath Orchestrator is not connected.
            All automation runs shown here are demo data. Real UiPath integration will be
            implemented in Stage 12.
          </div>
        </CardContent>
      </Card>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Automation Runs
            </div>
            <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {totalRuns}
            </div>
            <div className="mt-1 text-xs text-gray-500">(Demo data)</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Successful
            </div>
            <div className="mt-2 text-3xl font-semibold text-green-600 dark:text-green-400">
              {successfulRuns}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Failed
            </div>
            <div className="mt-2 text-3xl font-semibold text-red-600 dark:text-red-400">
              {failedRuns}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Human Review Required
            </div>
            <div className="mt-2 text-3xl font-semibold text-yellow-600 dark:text-yellow-500">
              {humanReviewRuns}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Average Duration
            </div>
            <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {avgDuration.toFixed(1)}s
            </div>
            <div className="mt-1 text-xs text-gray-500">(Demo data)</div>
          </CardContent>
        </Card>
      </div>

      {/* Architecture Trace Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>System Architecture Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <TraceAutomation
            run={DEMO_AUTOMATION_RUNS[0]}
            isArchitectureDiagram={true}
          />
        </CardContent>
      </Card>

      {/* Automation Runs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Automation Runs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Run ID</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Ticket</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Workflow</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Started</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Duration</th>
                  <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Provider</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sortedRuns.map(run => {
                  const ticket = DEMO_TICKETS.find(t => t.id === run.ticket_id);
                  const duration = run.completed_at
                    ? ((new Date(run.completed_at).getTime() - new Date(run.started_at).getTime()) / 1000).toFixed(1)
                    : '—';

                  return (
                    <tr key={run.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-3 font-mono text-xs text-gray-500">
                        {run.id.split('-')[1]}
                      </td>
                      <td className="py-3">
                        {ticket ? (
                          <Link
                            href={`/tickets/${ticket.id}`}
                            className="text-primary-600 hover:text-primary-700 font-medium dark:text-primary-400"
                          >
                            {ticket.ticket_number}
                          </Link>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="py-3 text-xs">AI Triage</td>
                      <td className="py-3">{getStatusBadge(run.status)}</td>
                      <td className="py-3 text-xs text-gray-500">
                        {formatTimeAgo(run.started_at)}
                      </td>
                      <td className="py-3 text-xs">{duration}s</td>
                      <td className="py-3">
                        <Badge variant="neutral">{run.provider}</Badge>
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
