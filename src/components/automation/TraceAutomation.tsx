/**
 * IntelliDesk AI - Trace Automation Component
 *
 * Visualizes the complete automation pipeline from ticket creation
 * through AI triage to database update.
 *
 * STAGE 2: Shows DEMO/ARCHITECTURE pipeline - clearly labeled as prototype
 */

import type { AutomationRun } from '@/types';

interface TraceAutomationProps {
  run: AutomationRun;
  isArchitectureDiagram?: boolean;
}

type PipelineStage = {
  label: string;
  status: 'complete' | 'running' | 'pending' | 'warning' | 'failed';
  timestamp?: string;
};

export function TraceAutomation({ run, isArchitectureDiagram = false }: TraceAutomationProps) {
  // For architecture diagram, show all stages as demo
  if (isArchitectureDiagram) {
    const archStages: PipelineStage[] = [
      { label: 'Employee', status: 'complete' },
      { label: 'Website', status: 'complete' },
      { label: 'Database', status: 'complete' },
      { label: 'Backend', status: 'complete' },
      { label: 'UiPath', status: 'pending' },
      { label: 'Agentic AI', status: 'pending' },
      { label: 'Decision Validation', status: 'pending' },
      { label: 'Team Routing', status: 'pending' },
      { label: 'Database Update', status: 'pending' },
      { label: 'Website', status: 'pending' },
    ];

    return (
      <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg">
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
          DEMO/ARCHITECTURE TRACE
        </div>
        <div className="flex flex-col space-y-2">
          {archStages.map((stage, index) => (
            <div key={index}>
              <StageIndicator stage={stage} />
              {index < archStages.length - 1 && (
                <div className="ml-5 h-6 w-0.5 bg-gray-300 dark:bg-gray-700" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Note: This is a demonstration of the system architecture pipeline.
          Real UiPath and AI integration coming in future stages.
        </div>
      </div>
    );
  }

  // For actual automation runs, show only believable milestones based on demo state
  const stages: PipelineStage[] = [];

  // Always have these basic stages
  stages.push({
    label: 'Ticket received',
    status: 'complete',
    timestamp: run.created_at,
  });

  stages.push({
    label: 'Ticket stored',
    status: 'complete',
    timestamp: run.created_at,
  });

  stages.push({
    label: 'Automation requested',
    status: 'complete',
    timestamp: run.started_at,
  });

  // Add stages based on status
  if (run.status === 'QUEUED') {
    stages.push({
      label: 'Queued for processing',
      status: 'running',
      timestamp: run.started_at,
    });
  } else if (run.status === 'PROCESSING') {
    stages.push({
      label: 'AI triage in progress',
      status: 'running',
      timestamp: run.started_at,
    });
  } else if (run.status === 'SUCCESS' || run.status === 'SUCCESS_WITH_WARNING') {
    stages.push({
      label: 'AI triage',
      status: 'complete',
      timestamp: run.started_at,
    });

    stages.push({
      label: 'Decision validated',
      status: 'complete',
      timestamp: run.completed_at || undefined,
    });

    stages.push({
      label: 'Routing selected',
      status: 'complete',
      timestamp: run.completed_at || undefined,
    });

    stages.push({
      label: 'Processing complete',
      status: run.status === 'SUCCESS_WITH_WARNING' ? 'warning' : 'complete',
      timestamp: run.completed_at || undefined,
    });
  } else if (run.status === 'FAILED') {
    stages.push({
      label: 'AI triage',
      status: 'failed',
      timestamp: run.completed_at || undefined,
    });

    stages.push({
      label: 'Processing failed',
      status: 'failed',
      timestamp: run.completed_at || undefined,
    });
  }

  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
        Automation Trace
      </div>
      <div className="flex flex-col space-y-2">
        {stages.map((stage, index) => (
          <div key={index}>
            <StageIndicator stage={stage} />
            {index < stages.length - 1 && (
              <div className={`ml-5 h-6 w-0.5 ${
                stage.status === 'complete' ? 'bg-green-300 dark:bg-green-700' :
                stage.status === 'running' ? 'bg-blue-300 dark:bg-blue-700' :
                stage.status === 'warning' ? 'bg-yellow-300 dark:bg-yellow-700' :
                stage.status === 'failed' ? 'bg-red-300 dark:bg-red-700' :
                'bg-gray-300 dark:bg-gray-700'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StageIndicator({ stage }: { stage: PipelineStage }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">
        {stage.status === 'complete' && (
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        {stage.status === 'running' && (
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
        )}
        {stage.status === 'pending' && (
          <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600" />
        )}
        {stage.status === 'warning' && (
          <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        )}
        {stage.status === 'failed' && (
          <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-sm font-medium ${
          stage.status === 'complete' ? 'text-gray-900 dark:text-gray-50' :
          stage.status === 'running' ? 'text-blue-700 dark:text-blue-400' :
          stage.status === 'warning' ? 'text-yellow-700 dark:text-yellow-400' :
          stage.status === 'failed' ? 'text-red-700 dark:text-red-400' :
          'text-gray-500 dark:text-gray-400'
        }`}>
          {stage.label}
        </div>
        {stage.timestamp && (
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {new Date(stage.timestamp).toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
}
