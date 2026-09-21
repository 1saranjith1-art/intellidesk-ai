/**
 * IntelliDesk AI - CriticalIncidents Component
 *
 * Displays critical incidents area with empty state.
 */

import { Card, CardContent, CardHeader, CardTitle, EmptyState } from '@/components/ui';

export function CriticalIncidents() {
  // Placeholder empty state until database integration
  const hasData = false;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-danger-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <CardTitle>Critical Incidents</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {!hasData ? (
          <EmptyState
            icon={
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="No critical incidents"
            description="Critical incident data will appear here once database integration is complete."
          />
        ) : (
          <div className="space-y-3">
            {/* Critical incident rows will be added here */}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
