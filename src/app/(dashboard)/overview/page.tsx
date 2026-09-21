/**
 * IntelliDesk AI - Overview Page
 *
 * Main dashboard showing operational metrics, recent activity, and system status.
 *
 * STAGE 2: Integrated with demo data - clearly labeled as prototype
 */

import Link from 'next/link';
import { Button } from '@/components/ui';
import { StatCard } from '@/components/overview/StatCard';
import { RecentActivity } from '@/components/overview/RecentActivity';
import { AutomationStatus } from '@/components/overview/AutomationStatus';
import { AITriagePanel } from '@/components/overview/AITriagePanel';
import { CriticalIncidents } from '@/components/overview/CriticalIncidents';
import { DEMO_TICKETS, DEMO_AUTOMATION_RUNS, getDemoCriticalTickets } from '@/data/demo-tickets';

export default function OverviewPage() {
  // Calculate metrics from demo data
  const openTickets = DEMO_TICKETS.filter(t =>
    ['AI_TRIAGE', 'OPEN', 'IN_PROGRESS', 'WAITING_FOR_USER'].includes(t.status)
  ).length;

  const criticalIncidents = getDemoCriticalTickets().length;

  const aiTriageCount = DEMO_TICKETS.filter(t => t.status === 'AI_TRIAGE').length;

  const automationRuns = DEMO_AUTOMATION_RUNS.length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
            Overview
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Monitor helpdesk operations, AI triage, and automation.{' '}
            <span className="text-xs text-gray-500">(Demo data)</span>
          </p>
        </div>
        <Link href="/create-ticket">
          <Button variant="primary" size="md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Ticket
          </Button>
        </Link>
      </div>

      {/* Operational Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Open Tickets"
          value={openTickets.toString()}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          }
          iconBgColor="bg-primary-600"
        />
        <StatCard
          title="Critical Incidents"
          value={criticalIncidents.toString()}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
          iconBgColor="bg-danger-600"
        />
        <StatCard
          title="AI Triage"
          value={aiTriageCount.toString()}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          }
          iconBgColor="bg-ai-600"
        />
        <StatCard
          title="Automation Runs"
          value={automationRuns.toString()}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          iconBgColor="bg-warning-600"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Spans 2 columns on large screens */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <RecentActivity />

          {/* Critical Incidents */}
          <CriticalIncidents />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* AI Triage Panel */}
          <AITriagePanel />

          {/* Automation Status */}
          <AutomationStatus />
        </div>
      </div>
    </div>
  );
}
