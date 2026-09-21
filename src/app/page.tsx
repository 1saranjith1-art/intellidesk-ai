/**
 * IntelliDesk AI - Foundation Page
 *
 * Minimal landing page confirming the design system and architecture foundation.
 * This is NOT the final dashboard - that comes in Stage 2.
 */

export default function FoundationPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-600 mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
            IntelliDesk AI
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Intelligent Helpdesk Automation powered by Agentic AI + RPA
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-surface border border-border rounded-lg p-8 mb-8 shadow-sm">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6 text-center">
            System Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Website */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  Website
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  INTERACT
                </div>
              </div>
            </div>

            {/* Agentic AI */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-ai-50 dark:bg-ai-900/20 border border-ai-200 dark:border-ai-800">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-ai-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  Agentic AI
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  UNDERSTAND + DECIDE
                </div>
              </div>
            </div>

            {/* UiPath */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-warning-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  UiPath
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  ACT
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="flex items-center gap-3 p-4 rounded-lg bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  Database
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  REMEMBER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800">
            <div className="w-2 h-2 rounded-full bg-success-600 animate-pulse"></div>
            <span className="text-sm font-medium text-success-700 dark:text-success-400">
              Foundation Ready
            </span>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Design system and architecture baseline established.
          </p>
        </div>
      </div>
    </div>
  );
}
