/**
 * IntelliDesk AI - My Tickets Page
 *
 * Shows tickets created by the current user.
 * STAGE 2: Demo view. Authentication does not exist yet.
 */

'use client';

import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { TicketTable, TicketCard } from '@/components/tickets';
import { EmptyState } from '@/components/ui/EmptyState';
import { DEMO_TICKETS, DEMO_USERS } from '@/data/demo-tickets';

type TabType = 'open' | 'resolved';

export default function MyTicketsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('open');

  // For demo purposes, show all tickets from user-1 (John Employee)
  const currentUserId = 'user-1';
  const currentUser = DEMO_USERS.find(u => u.id === currentUserId);

  const myTickets = useMemo(() => {
    return DEMO_TICKETS.filter(t => t.requester_id === currentUserId);
  }, [currentUserId]);

  const filteredTickets = useMemo(() => {
    let tickets = [...myTickets];

    if (activeTab === 'open') {
      tickets = tickets.filter(t => t.status !== 'RESOLVED' && t.status !== 'CLOSED');
    } else {
      tickets = tickets.filter(t => t.status === 'RESOLVED' || t.status === 'CLOSED');
    }

    // Sort by created date (newest first)
    tickets.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return tickets;
  }, [myTickets, activeTab]);

  const openCount = myTickets.filter(t => t.status !== 'RESOLVED' && t.status !== 'CLOSED').length;
  const resolvedCount = myTickets.filter(t => t.status === 'RESOLVED' || t.status === 'CLOSED').length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Tickets"
        description={
          <div className="space-y-1">
            <div>Tickets you have submitted</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Demo view showing tickets from: {currentUser?.name || 'Unknown User'}
            </div>
          </div>
        }
        actions={
          <Button href="/create-ticket">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Ticket
          </Button>
        }
      />

      {myTickets.length === 0 ? (
        <EmptyState
          title="No tickets yet"
          description="You haven't submitted any tickets. Create your first ticket to get started."
          action={
            <Button href="/create-ticket">
              Create Your First Ticket
            </Button>
          }
        />
      ) : (
        <>
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('open')}
                className={`
                  whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors
                  ${
                    activeTab === 'open'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }
                `}
              >
                Open
                <span className="ml-2 py-0.5 px-2 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                  {openCount}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('resolved')}
                className={`
                  whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors
                  ${
                    activeTab === 'resolved'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }
                `}
              >
                Resolved
                <span className="ml-2 py-0.5 px-2 rounded-full bg-gray-100 dark:bg-gray-800 text-xs">
                  {resolvedCount}
                </span>
              </button>
            </nav>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {filteredTickets.length} {filteredTickets.length === 1 ? 'ticket' : 'tickets'}
          </div>

          {filteredTickets.length === 0 ? (
            <EmptyState
              title={activeTab === 'open' ? 'No open tickets' : 'No resolved tickets'}
              description={
                activeTab === 'open'
                  ? 'All your tickets have been resolved.'
                  : 'You don\'t have any resolved tickets yet.'
              }
            />
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block bg-surface border border-border rounded-lg overflow-hidden">
                <TicketTable tickets={filteredTickets} />
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {filteredTickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
