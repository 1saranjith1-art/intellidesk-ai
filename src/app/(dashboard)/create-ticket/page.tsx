/**
 * IntelliDesk AI - Create Ticket Page
 *
 * Form for creating new helpdesk tickets.
 * STAGE 2: UI only. Submission will be connected in Stage 5.
 */

'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { TICKET_CATEGORIES } from '@/constants';

export default function CreateTicketPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'auto',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Stage 2: Prevent actual submission
    alert('Stage 2 Prototype: Ticket submission will be connected to the database in Stage 5.\n\nFor now, this is a demonstration of the UI.');
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <PageHeader
        title="Create Ticket"
        description="Submit a new helpdesk request"
      />

      <Card>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <Input
              label="Title"
              type="text"
              placeholder="Brief summary of the issue"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          {/* Category */}
          <div>
            <Select
              label="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              helperText="Select a category or let AI decide based on your description"
            >
              <option value="auto">Let AI decide</option>
              {TICKET_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>

          {/* Description */}
          <div>
            <Textarea
              label="Description"
              placeholder="Provide detailed information about your issue. Include any error messages, steps to reproduce, and what you've already tried."
              rows={8}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              helperText="The more detail you provide, the faster we can help you"
            />
          </div>

          {/* Attachments (UI Only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Attachments
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Drag and drop files here, or click to browse
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                (Attachment functionality will be connected in Stage 5)
              </p>
            </div>
          </div>

          {/* AI Triage Info */}
          <Card className="border-l-4 border-l-violet-500">
            <div className="p-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  AI-Powered Triage
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  When AI triage is enabled, IntelliDesk analyzes your request to automatically
                  recommend a category, priority, support team, and next action.
                </div>
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button type="submit" variant="primary">
              Submit Ticket
            </Button>
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>

          {/* Stage 2 Notice */}
          <div className="text-xs text-gray-500 dark:text-gray-400 pt-2">
            Note: This is a Stage 2 prototype. Ticket submission will be connected to the database
            in Stage 5 with real AI triage and UiPath automation.
          </div>
        </form>
      </Card>
    </div>
  );
}
