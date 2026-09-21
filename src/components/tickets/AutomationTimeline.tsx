/**
 * IntelliDesk AI - Automation Timeline
 *
 * Displays automation workflow pipeline visualization.
 */

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { AutomationRun, TicketStatus } from '@/types';
import { cn } from '@/lib/utils';

interface AutomationTimelineProps {
  automationRun?: AutomationRun;
  ticketStatus: TicketStatus;
}

interface TimelineStep {
  label: string;
  status: 'completed' | 'active' | 'pending' | 'failed';
  description?: string;
}

export function AutomationTimeline({ automationRun, ticketStatus }: AutomationTimelineProps) {
  // Derive timeline steps from actual system state (no fabrication)
  const steps: TimelineStep[] = [];

  // Step 1: Ticket received
  steps.push({
    label: 'Ticket Received',
    status: 'completed',
    description: 'Ticket created and saved to system',
  });

  // Step 2: AI Triage
  if (!automationRun) {
    steps.push({
      label: 'AI Triage',
      status: 'pending',
      description: 'Awaiting automation',
    });
  } else if (automationRun.status === 'QUEUED') {
    steps.push({
      label: 'AI Triage',
      status: 'active',
      description: 'Automation queued',
    });
  } else if (automationRun.status === 'PROCESSING') {
    steps.push({
      label: 'AI Triage',
      status: 'active',
      description: 'AI analyzing ticket',
    });
  } else if (automationRun.status === 'SUCCESS' || automationRun.status === 'SUCCESS_WITH_WARNING') {
    steps.push({
      label: 'AI Triage',
      status: 'completed',
      description: 'AI classification complete',
    });
  } else if (automationRun.status === 'FAILED') {
    steps.push({
      label: 'AI Triage',
      status: 'failed',
      description: 'Automation failed',
    });
  }

  // Step 3: Decision Validation
  if (ticketStatus === 'AI_TRIAGE') {
    steps.push({
      label: 'Decision Validation',
      status: 'pending',
    });
  } else if (ticketStatus === 'TRIAGE_FAILED') {
    steps.push({
      label: 'Decision Validation',
      status: 'failed',
      description: 'Manual classification required',
    });
  } else {
    steps.push({
      label: 'Decision Validation',
      status: 'completed',
    });
  }

  // Step 4: Team Assignment
  if (ticketStatus === 'AI_TRIAGE' || ticketStatus === 'TRIAGE_FAILED') {
    steps.push({
      label: 'Team Assignment',
      status: 'pending',
    });
  } else {
    steps.push({
      label: 'Team Assignment',
      status: 'completed',
      description: 'Routed to support team',
    });
  }

  // Step 5: Processing
  if (ticketStatus === 'IN_PROGRESS' || ticketStatus === 'WAITING_FOR_USER') {
    steps.push({
      label: 'Processing',
      status: 'active',
      description: 'Agent handling ticket',
    });
  } else if (ticketStatus === 'RESOLVED' || ticketStatus === 'CLOSED') {
    steps.push({
      label: 'Processing',
      status: 'completed',
      description: 'Ticket resolved',
    });
  } else if (ticketStatus === 'OPEN') {
    steps.push({
      label: 'Processing',
      status: 'pending',
      description: 'Awaiting agent assignment',
    });
  } else {
    steps.push({
      label: 'Processing',
      status: 'pending',
    });
  }

  return (
    <Card>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-4">
          Automation Timeline
        </h3>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-3">
              {/* Icon */}
              <div className="flex-shrink-0">
                {step.status === 'completed' && (
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                {step.status === 'active' && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
                {step.status === 'pending' && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600" />
                  </div>
                )}
                {step.status === 'failed' && (
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={cn(
                'flex-1 min-w-0',
                index < steps.length - 1 && 'pb-4 border-l-2 border-gray-200 dark:border-gray-700 ml-4 -mt-1'
              )}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    'text-sm font-medium',
                    step.status === 'completed' && 'text-green-700 dark:text-green-400',
                    step.status === 'active' && 'text-blue-700 dark:text-blue-400',
                    step.status === 'pending' && 'text-gray-500 dark:text-gray-400',
                    step.status === 'failed' && 'text-red-700 dark:text-red-400'
                  )}>
                    {step.label}
                  </span>
                  {step.status === 'completed' && <Badge variant="success">Complete</Badge>}
                  {step.status === 'active' && <Badge variant="info">In Progress</Badge>}
                  {step.status === 'failed' && <Badge variant="danger">Failed</Badge>}
                </div>
                {step.description && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Provider Info */}
        {automationRun && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Provider: <span className="text-gray-900 dark:text-gray-50 font-mono">
                {automationRun.provider}
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
