/**
 * IntelliDesk AI - Settings Page
 *
 * Professional admin/settings UI for system configuration.
 *
 * STAGE 2: Mock UI - settings controls are prototype only
 */

import { PageHeader } from '@/components/layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const metadata = {
  title: 'Settings - IntelliDesk AI',
  description: 'System configuration and settings',
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Configure system settings, integrations, and preferences."
      />

      {/* General Settings */}
      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Application Name
            </label>
            <input
              type="text"
              value="IntelliDesk AI"
              disabled
              className="w-full px-3 py-2 border border-border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Environment
            </label>
            <input
              type="text"
              value="Development"
              disabled
              className="w-full px-3 py-2 border border-border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Theme Preference
            </label>
            <select
              disabled
              className="w-full px-3 py-2 border border-border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 cursor-not-allowed"
            >
              <option>System Default</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
            <p className="mt-1 text-xs text-gray-500">
              (Prototype control - not functional in Stage 2)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* AI Triage Settings */}
      <Card>
        <CardHeader>
          <CardTitle>AI Triage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              AI Provider
            </label>
            <input
              type="text"
              value="Not configured / Prototype"
              disabled
              className="w-full px-3 py-2 border border-border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-500">
              Real AI integration will be implemented in Stage 6
            </p>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-not-allowed">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Require human review for critical incidents
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-not-allowed">
              <input
                type="checkbox"
                checked={false}
                disabled
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Auto-accept AI decisions with high confidence
              </span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Allowed Categories
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Hardware', 'Software', 'Network', 'Account Access', 'Infrastructure', 'General Support'].map(category => (
                <label key={category} className="flex items-center gap-2 cursor-not-allowed">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-not-allowed"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automation Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Automation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Provider
            </label>
            <select
              disabled
              className="w-full px-3 py-2 border border-border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 cursor-not-allowed"
            >
              <option>Mock (Prototype)</option>
              <option>UiPath (Not Available)</option>
            </select>
            <p className="mt-1 text-xs text-gray-500">
              UiPath integration will be implemented in Stage 12
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              UiPath Orchestrator URL
            </label>
            <input
              type="text"
              placeholder="Not configured"
              disabled
              className="w-full px-3 py-2 border border-border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Retry Policy
            </label>
            <select
              disabled
              className="w-full px-3 py-2 border border-border rounded-md bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 cursor-not-allowed"
            >
              <option>Manual retry for V1</option>
              <option>Auto-retry once</option>
              <option>Auto-retry up to 3 times</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Notifications Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="flex items-center gap-2 cursor-not-allowed">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                In-app notifications (Planned for Stage 7)
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-not-allowed">
              <input
                type="checkbox"
                checked={false}
                disabled
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Email notifications (Future enhancement)
              </span>
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-not-allowed">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-not-allowed"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Notify on critical incident assignment
              </span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Product Version</span>
              <span className="text-sm text-gray-900 dark:text-gray-50">0.1.0</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Current Environment</span>
              <span className="text-sm text-gray-900 dark:text-gray-50">Development</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Database</span>
              <span className="text-sm text-yellow-600 dark:text-yellow-500">Not configured (Stage 5)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Authentication</span>
              <span className="text-sm text-yellow-600 dark:text-yellow-500">Not configured (Stage 4)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">UiPath Integration</span>
              <span className="text-sm text-yellow-600 dark:text-yellow-500">Not configured (Stage 12)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Provider</span>
              <span className="text-sm text-yellow-600 dark:text-yellow-500">Not configured (Stage 6)</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-sm text-blue-800 dark:text-blue-300">
            <strong>Stage 2 Prototype:</strong> This is a frontend demonstration with mock data.
            Real database, authentication, AI, and UiPath integrations will be implemented in
            subsequent stages according to the implementation plan.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
