/**
 * IntelliDesk AI - All Tickets Page
 *
 * Main ticket queue with filters and search.
 * STAGE 2: Uses demo data. Will be replaced with real database queries in Stage 5.
 */

'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { TicketTable, TicketCard, TicketFilters, type FilterValues } from '@/components/tickets';
import { DEMO_TICKETS } from '@/data/demo-tickets';

type TabType = 'all' | 'my-queue' | 'critical' | 'unassigned' | 'resolved';

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [filters, setFilters] = useState<FilterValues>({
    search: '',
    status: 'all',
    priority: 'all',
    category: 'all',
  });

  // Filter tickets based on active tab and filters
  const filteredTickets = useMemo(() => {
    let tickets = [...DEMO_TICKETS];

    // Apply tab filter
    if (activeTab === 'critical') {
      tickets = tickets.filter(t => t.is_critical);
    } else if (activeTab === 'unassigned') {
      tickets = tickets.filter(t => !t.assigned_to_id);
    } else if (activeTab === 'resolved') {
      tickets = tickets.filter(t => t.status === 'RESOLVED' || t.status === 'CLOSED');
    } else if (activeTab === 'my-queue') {
      // For demo purposes, show assigned tickets
      tickets = tickets.filter(t => t.assigned_to_id);
    }

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      tickets = tickets.filter(
        t =>
          t.title.toLowerCase().includes(searchLower) ||
          t.description.toLowerCase().includes(searchLower) ||
          t.ticket_number.toLowerCase().includes(searchLower)
      );
    }

    // Apply status filter
    if (filters.status !== 'all') {
      tickets = tickets.filter(t => t.status === filters.status);
    }

    // Apply priority filter
    if (filters.priority !== 'all') {
      tickets = tickets.filter(t => t.priority === filters.priority);
    }

    // Apply category filter
    if (filters.category !== 'all') {
      tickets = tickets.filter(t => t.category === filters.category);
    }

    // Sort by created date (newest first)
    tickets.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return tickets;
  }, [activeTab, filters]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Tickets"
        description="Manage and monitor helpdesk requests"
        actions={
          <Button href="/create-ticket">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Ticket
          </Button>
        }
      />

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {[
            { id: 'all' as const, label: 'All', count: DEMO_TICKETS.length },
            { id: 'my-queue' as const, label: 'My Queue', count: DEMO_TICKETS.filter(t => t.assigned_to_id).length },
            { id: 'critical' as const, label: 'Critical', count: DEMO_TICKETS.filter(t => t.is_critical).length },
            { id: 'unassigned' as const, label: 'Unassigned', count: DEMO_TICKETS.filter(t => !t.assigned_to_id).length },
            { id: 'resolved' as const, label: 'Resolved', count: DEMO_TICKETS.filter(t => t.status === 'RESOLVED' || t.status === 'CLOSED').length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors
                ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }
              `}
            >
              {tab.label}
              <span className="ml-2 py-0.5 px-2 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Filters */}
      <TicketFilters filters={filters} onFilterChange={setFilters} />

      {/* Results Count */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {filteredTickets.length} {filteredTickets.length === 1 ? 'ticket' : 'tickets'}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-surface border border-border rounded-lg overflow-hidden">
        <TicketTable tickets={filteredTickets} />
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {filteredTickets.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No tickets found
          </div>
        ) : (
          filteredTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>
    </div>
  );
}
