/**
 * IntelliDesk AI - RecentActivity Component
 *
 * Displays recent ticket activity with empty state.
 */

import { Card, CardContent, CardHeader, CardTitle, EmptyState } from '@/components/ui';

export function RecentActivity() {
  // Placeholder empty state until database integration
  const hasData = false;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {!hasData ? (
          <EmptyState
            icon={
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
            title="No activity data available"
            description="Recent ticket activity will appear here once database integration is complete."
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 pr-4 font-medium text-gray-700 dark:text-gray-300">Ticket</th>
                  <th className="pb-3 px-4 font-medium text-gray-700 dark:text-gray-300">Issue</th>
                  <th className="pb-3 px-4 font-medium text-gray-700 dark:text-gray-300">Status</th>
                  <th className="pb-3 px-4 font-medium text-gray-700 dark:text-gray-300">Priority</th>
                  <th className="pb-3 px-4 font-medium text-gray-700 dark:text-gray-300">Assigned Team</th>
                  <th className="pb-3 pl-4 font-medium text-gray-700 dark:text-gray-300">Updated</th>
                </tr>
              </thead>
              <tbody>
                {/* Data rows will be added here */}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
