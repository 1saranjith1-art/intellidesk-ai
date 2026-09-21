/**
 * IntelliDesk AI - Analytics Dashboard
 *
 * Comprehensive ITSM analytics showing operational metrics, ticket trends,
 * category/priority breakdowns, team workload, and AI triage performance.
 *
 * STAGE 2: Mock UI with demo data (no real database)
 */

'use client';

import { PageHeader } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { DEMO_TICKETS, DEMO_AI_DECISIONS, DEMO_AUTOMATION_RUNS } from '@/data/demo-tickets';
import { useState } from 'react';

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Operational Metrics
  const totalTickets = DEMO_TICKETS.length;
  const openTickets = DEMO_TICKETS.filter(t => ['AI_TRIAGE', 'OPEN', 'IN_PROGRESS', 'WAITING_FOR_USER'].includes(t.status)).length;
  const resolvedTickets = DEMO_TICKETS.filter(t => t.status === 'RESOLVED' || t.status === 'CLOSED').length;
  const criticalTickets = DEMO_TICKETS.filter(t => t.is_critical).length;

  // Category Breakdown
  const categoryStats = [
    { name: 'Hardware', count: DEMO_TICKETS.filter(t => t.category === 'Hardware').length },
    { name: 'Software', count: DEMO_TICKETS.filter(t => t.category === 'Software').length },
    { name: 'Network', count: DEMO_TICKETS.filter(t => t.category === 'Network').length },
    { name: 'Account Access', count: DEMO_TICKETS.filter(t => t.category === 'Account Access').length },
    { name: 'Infrastructure', count: DEMO_TICKETS.filter(t => t.category === 'Infrastructure').length },
    { name: 'General Support', count: DEMO_TICKETS.filter(t => t.category === 'General Support').length },
  ];

  // Priority Breakdown
  const priorityStats = [
    { name: 'Critical', count: DEMO_TICKETS.filter(t => t.priority === 'Critical').length, color: 'bg-red-500' },
    { name: 'High', count: DEMO_TICKETS.filter(t => t.priority === 'High').length, color: 'bg-orange-500' },
    { name: 'Medium', count: DEMO_TICKETS.filter(t => t.priority === 'Medium').length, color: 'bg-yellow-500' },
    { name: 'Low', count: DEMO_TICKETS.filter(t => t.priority === 'Low').length, color: 'bg-green-500' },
  ];

  // Status Breakdown
  const statusStats = [
    { name: 'AI Triage', count: DEMO_TICKETS.filter(t => t.status === 'AI_TRIAGE').length },
    { name: 'Open', count: DEMO_TICKETS.filter(t => t.status === 'OPEN').length },
    { name: 'In Progress', count: DEMO_TICKETS.filter(t => t.status === 'IN_PROGRESS').length },
    { name: 'Waiting for User', count: DEMO_TICKETS.filter(t => t.status === 'WAITING_FOR_USER').length },
    { name: 'Resolved', count: DEMO_TICKETS.filter(t => t.status === 'RESOLVED').length },
    { name: 'Closed', count: DEMO_TICKETS.filter(t => t.status === 'CLOSED').length },
    { name: 'Triage Failed', count: DEMO_TICKETS.filter(t => t.status === 'TRIAGE_FAILED').length },
  ];

  // Team Workload
  const teamWorkload = [
    { name: 'Infrastructure Support', tickets: DEMO_TICKETS.filter(t => t.assigned_team_id === 'team-infrastructure').length },
    { name: 'Hardware Support', tickets: DEMO_TICKETS.filter(t => t.assigned_team_id === 'team-hardware').length },
    { name: 'Software Support', tickets: DEMO_TICKETS.filter(t => t.assigned_team_id === 'team-software').length },
    { name: 'Network Support', tickets: DEMO_TICKETS.filter(t => t.assigned_team_id === 'team-network').length },
    { name: 'Account Support', tickets: DEMO_TICKETS.filter(t => t.assigned_team_id === 'team-account').length },
    { name: 'General Support', tickets: DEMO_TICKETS.filter(t => t.assigned_team_id === 'team-general').length },
  ];

  // AI Triage Metrics
  const totalAIDecisions = DEMO_AI_DECISIONS.length;
  const autoAccepted = DEMO_AI_DECISIONS.filter(d => d.decision_source === 'AI_AUTOMATED' && !d.reviewed_by_id).length;
  const humanReviewed = DEMO_AI_DECISIONS.filter(d => d.reviewed_by_id !== null).length;
  const humanCorrected = DEMO_AI_DECISIONS.filter(
    d => d.reviewed_by_id && (d.original_category !== d.final_category || d.original_priority !== d.final_priority)
  ).length;
  const reviewRequired = DEMO_AI_DECISIONS.filter(d => d.original_review_required).length;

  // Automation Metrics
  const totalRuns = DEMO_AUTOMATION_RUNS.length;
  const successfulRuns = DEMO_AUTOMATION_RUNS.filter(r => r.status === 'SUCCESS' || r.status === 'SUCCESS_WITH_WARNING').length;
  const failedRuns = DEMO_AUTOMATION_RUNS.filter(r => r.status === 'FAILED').length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        description={
          <span>
            Operational metrics, ticket trends, and AI triage performance.{' '}
            <span className="text-xs text-gray-500 dark:text-gray-400">(Demo data)</span>
          </span>
        }
        actions={
          <div className="flex items-center gap-2">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as '7d' | '30d' | '90d')}
              className="px-3 py-1.5 text-sm border border-border rounded-md bg-surface focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
        }
      />

      {/* Operational Metrics */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-50 uppercase tracking-wider mb-3">
          Operational Metrics
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Tickets Created
              </div>
              <div className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-50">
                {totalTickets}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Open Tickets
              </div>
              <div className="mt-2 text-3xl font-semibold text-blue-600 dark:text-blue-400">
                {openTickets}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Resolved Tickets
              </div>
              <div className="mt-2 text-3xl font-semibold text-green-600 dark:text-green-400">
                {resolvedTickets}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Critical Tickets
              </div>
              <div className="mt-2 text-3xl font-semibold text-red-600 dark:text-red-400">
                {criticalTickets}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ticket Volume (simple bar visualization) */}
      <Card>
        <CardHeader>
          <CardTitle>Ticket Volume by Priority</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {priorityStats.map(stat => {
              const maxCount = Math.max(...priorityStats.map(s => s.count));
              const percentage = maxCount > 0 ? (stat.count / maxCount) * 100 : 0;
              return (
                <div key={stat.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.name}</span>
                    <span className="text-sm text-gray-500">{stat.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${stat.color}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {categoryStats.map(stat => (
                <div key={stat.name} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{stat.name}</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">{stat.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Status Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {statusStats.map(stat => (
                <div key={stat.name} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{stat.name}</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">{stat.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Workload */}
      <Card>
        <CardHeader>
          <CardTitle>Team Workload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamWorkload.map(team => {
              const maxTickets = Math.max(...teamWorkload.map(t => t.tickets));
              const percentage = maxTickets > 0 ? (team.tickets / maxTickets) * 100 : 0;
              return (
                <div key={team.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{team.name}</span>
                    <span className="text-sm text-gray-500">{team.tickets} tickets</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-primary-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* AI Triage Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>AI Triage Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">AI Decisions</div>
              <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-50">{totalAIDecisions}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Auto Accepted</div>
              <div className="mt-1 text-2xl font-semibold text-green-600 dark:text-green-400">{autoAccepted}</div>
              <div className="text-xs text-gray-500">
                {totalAIDecisions > 0 ? Math.round((autoAccepted / totalAIDecisions) * 100) : 0}% rate
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Human Reviewed</div>
              <div className="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">{humanReviewed}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Human Corrected</div>
              <div className="mt-1 text-2xl font-semibold text-orange-600 dark:text-orange-400">{humanCorrected}</div>
              <div className="text-xs text-gray-500">
                {humanReviewed > 0 ? Math.round((humanCorrected / humanReviewed) * 100) : 0}% rate
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Review Required</div>
              <div className="mt-1 text-2xl font-semibold text-yellow-600 dark:text-yellow-500">{reviewRequired}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automation Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Automation Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Runs</div>
              <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-50">{totalRuns}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Successful</div>
              <div className="mt-1 text-2xl font-semibold text-green-600 dark:text-green-400">{successfulRuns}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Failed</div>
              <div className="mt-1 text-2xl font-semibold text-red-600 dark:text-red-400">{failedRuns}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Success Rate</div>
              <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-gray-50">
                {totalRuns > 0 ? Math.round((successfulRuns / totalRuns) * 100) : 0}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
