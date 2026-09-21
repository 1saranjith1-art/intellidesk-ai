/**
 * IntelliDesk AI - AutomationStatus Component
 *
 * Displays UiPath and automation system status.
 */

import { Badge, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

interface StatusItem {
  label: string;
  value: string;
  status: 'not-configured' | 'pending' | 'connected' | 'error';
}

const statusItems: StatusItem[] = [
  {
    label: 'UiPath Connection',
    value: 'Not configured',
    status: 'not-configured',
  },
  {
    label: 'Automation Provider',
    value: 'Awaiting integration',
    status: 'pending',
  },
  {
    label: 'Recent Run',
    value: '—',
    status: 'not-configured',
  },
  {
    label: 'System Status',
    value: 'Not configured',
    status: 'not-configured',
  },
];

function getStatusBadgeVariant(status: StatusItem['status']) {
  switch (status) {
    case 'connected':
      return 'success';
    case 'error':
      return 'danger';
    case 'pending':
      return 'warning';
    case 'not-configured':
    default:
      return 'neutral';
  }
}

export function AutomationStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Automation Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {statusItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {item.label}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.value}
                </p>
              </div>
              <Badge variant={getStatusBadgeVariant(item.status)}>
                {item.status === 'not-configured' && 'Not Configured'}
                {item.status === 'pending' && 'Pending'}
                {item.status === 'connected' && 'Connected'}
                {item.status === 'error' && 'Error'}
              </Badge>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p className="font-medium mb-1">Integration Required</p>
              <p>UiPath automation will be configured in a later stage.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
