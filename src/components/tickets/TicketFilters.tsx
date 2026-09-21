/**
 * IntelliDesk AI - Ticket Filters
 *
 * Filter controls for ticket lists.
 */

'use client';

import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { TICKET_CATEGORIES, TICKET_PRIORITIES, TICKET_STATUSES } from '@/constants';
import type { TicketCategory, TicketPriority, TicketStatus } from '@/types';

export interface FilterValues {
  search: string;
  status: TicketStatus | 'all';
  priority: TicketPriority | 'all';
  category: TicketCategory | 'all';
}

interface TicketFiltersProps {
  filters: FilterValues;
  onFilterChange: (filters: FilterValues) => void;
}

export function TicketFilters({ filters, onFilterChange }: TicketFiltersProps) {
  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value });
  };

  const handleStatusChange = (value: string) => {
    onFilterChange({ ...filters, status: value as TicketStatus | 'all' });
  };

  const handlePriorityChange = (value: string) => {
    onFilterChange({ ...filters, priority: value as TicketPriority | 'all' });
  };

  const handleCategoryChange = (value: string) => {
    onFilterChange({ ...filters, category: value as TicketCategory | 'all' });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Search */}
      <div className="lg:col-span-2">
        <Input
          type="text"
          placeholder="Search tickets..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>

      {/* Status Filter */}
      <div>
        <Select
          value={filters.status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="all">All Statuses</option>
          {TICKET_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status.replace(/_/g, ' ')}
            </option>
          ))}
        </Select>
      </div>

      {/* Priority Filter */}
      <div>
        <Select
          value={filters.priority}
          onChange={(e) => handlePriorityChange(e.target.value)}
        >
          <option value="all">All Priorities</option>
          {TICKET_PRIORITIES.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </Select>
      </div>

      {/* Category Filter */}
      <div className="sm:col-span-2 lg:col-span-2">
        <Select
          value={filters.category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">All Categories</option>
          {TICKET_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}
