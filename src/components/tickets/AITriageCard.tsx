/**
 * IntelliDesk AI - AI Triage Card
 *
 * Displays AI triage decision and recommendations.
 */

import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { AITriageResult } from '@/types';

interface AITriageCardProps {
  decision: AITriageResult;
}

export function AITriageCard({ decision }: AITriageCardProps) {
  return (
    <Card className="border-l-4 border-l-violet-500">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
              AI Triage Result
            </h3>
          </div>
          {decision.decision_source === 'AI_AUTOMATED' && (
            <Badge variant="ai">Automated</Badge>
          )}
          {decision.decision_source === 'HUMAN_REVIEWED_AI' && (
            <Badge variant="neutral">Human Reviewed</Badge>
          )}
        </div>

        {/* Summary */}
        <div>
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Summary</div>
          <p className="text-sm text-gray-900 dark:text-gray-50">
            {decision.original_summary}
          </p>
        </div>

        {/* Classification */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Category</div>
            <Badge variant="neutral">{decision.final_category}</Badge>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Priority</div>
            <Badge
              variant={
                decision.final_priority === 'Critical' ? 'danger' :
                decision.final_priority === 'High' ? 'warning' :
                decision.final_priority === 'Medium' ? 'info' : 'success'
              }
            >
              {decision.final_priority}
            </Badge>
          </div>
        </div>

        {/* Impact & Urgency */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Impact</div>
            <p className="text-sm text-gray-900 dark:text-gray-50">{decision.original_impact}</p>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Urgency</div>
            <p className="text-sm text-gray-900 dark:text-gray-50">{decision.original_urgency}</p>
          </div>
        </div>

        {/* Recommended Actions */}
        {decision.original_recommended_actions.length > 0 && (
          <div>
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
              Recommended Actions
            </div>
            <ul className="space-y-1">
              {decision.original_recommended_actions.map((action, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-50">
                  <svg className="w-4 h-4 text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Decision Explanation */}
        <div>
          <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
            Decision Explanation
          </div>
          <p className="text-sm text-gray-900 dark:text-gray-50">
            {decision.original_decision_explanation}
          </p>
        </div>

        {/* Review Required */}
        {decision.original_review_required && (
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md border border-yellow-200 dark:border-yellow-800">
              <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-yellow-900 dark:text-yellow-200">
                  Human Review Required
                </div>
                {decision.original_review_reason && (
                  <div className="text-sm text-yellow-800 dark:text-yellow-300 mt-1">
                    {decision.original_review_reason}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
