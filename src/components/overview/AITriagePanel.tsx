/**
 * IntelliDesk AI - AITriagePanel Component
 *
 * Displays the AI triage workflow visualization.
 */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

const workflowSteps = [
  {
    label: 'Ticket Received',
    description: 'Customer submits helpdesk request',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
  },
  {
    label: 'AI Understands',
    description: 'Natural language processing analyzes request',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    label: 'Category + Priority',
    description: 'Automatic classification and prioritization',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    label: 'Recommended Action',
    description: 'AI determines best resolution path',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'UiPath Routes',
    description: 'Automated workflow execution',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function AITriagePanel() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-ai-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <CardTitle>AI Triage Workflow</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {workflowSteps.map((step, index) => (
            <div key={index}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-ai-50 dark:bg-ai-900/20 border border-ai-200 dark:border-ai-800 flex items-center justify-center text-ai-600 dark:text-ai-400">
                  {step.icon}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < workflowSteps.length - 1 && (
                <div className="ml-5 mt-2 mb-1 w-0.5 h-4 bg-ai-200 dark:bg-ai-800"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-ai-50 dark:bg-ai-900/20 rounded-lg border border-ai-200 dark:border-ai-800">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-ai-600 dark:text-ai-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-ai-700 dark:text-ai-300">
              <p className="font-medium">System Capability</p>
              <p className="mt-1 text-xs">
                This workflow represents the planned AI triage system. Live processing will be available after AI provider integration.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
