/**
 * IntelliDesk AI - Project Constants
 *
 * Centralized constants for ticket categories, priorities, statuses,
 * and deterministic routing logic.
 */

import type {
  TicketCategory,
  TicketPriority,
  TicketStatus,
  AutomationStatus,
  UserRole,
  DecisionSource,
  ImpactLevel,
  UrgencyLevel,
} from '@/types';

// ============================================
// Ticket Categories
// ============================================

export const TICKET_CATEGORIES: readonly TicketCategory[] = [
  'Hardware',
  'Software',
  'Network',
  'Account Access',
  'Infrastructure',
  'General Support',
] as const;

// ============================================
// Ticket Priorities
// ============================================

export const TICKET_PRIORITIES: readonly TicketPriority[] = [
  'Critical',
  'High',
  'Medium',
  'Low',
] as const;

// ============================================
// Ticket Statuses
// ============================================

export const TICKET_STATUSES: readonly TicketStatus[] = [
  'AI_TRIAGE',
  'OPEN',
  'IN_PROGRESS',
  'WAITING_FOR_USER',
  'RESOLVED',
  'CLOSED',
  'TRIAGE_FAILED',
] as const;

// ============================================
// Automation Statuses
// ============================================

export const AUTOMATION_STATUSES: readonly AutomationStatus[] = [
  'QUEUED',
  'PROCESSING',
  'SUCCESS',
  'SUCCESS_WITH_WARNING',
  'FAILED',
  'HUMAN_REVIEW_REQUIRED',
  'CANCELLED',
] as const;

// ============================================
// User Roles
// ============================================

export const USER_ROLES: readonly UserRole[] = [
  'employee',
  'agent',
  'admin',
] as const;

// ============================================
// Decision Sources
// ============================================

export const DECISION_SOURCES: readonly DecisionSource[] = [
  'AI_AUTOMATED',
  'HUMAN_REVIEWED_AI',
  'MANUALLY_CLASSIFIED',
] as const;

// ============================================
// Impact Levels
// ============================================

export const IMPACT_LEVELS: readonly ImpactLevel[] = [
  'Organization-wide',
  'Department',
  'Team',
  'Individual',
] as const;

// ============================================
// Urgency Levels
// ============================================

export const URGENCY_LEVELS: readonly UrgencyLevel[] = [
  'Immediate',
  'Same Day',
  'Within Week',
  'When Possible',
] as const;

// ============================================
// Deterministic Category → Team Mapping
// ============================================

/**
 * Maps ticket categories to their assigned support teams.
 * This mapping is deterministic and used for automatic routing.
 */
export const CATEGORY_TO_TEAM: Record<TicketCategory, string> = {
  'Hardware': 'Hardware Support Team',
  'Software': 'Software Support Team',
  'Network': 'Network Support Team',
  'Account Access': 'Account Support Team',
  'Infrastructure': 'Infrastructure Support Team',
  'General Support': 'General Support Team',
} as const;

/**
 * Get the support team name for a given category
 */
export function getTeamForCategory(category: TicketCategory): string {
  return CATEGORY_TO_TEAM[category];
}

// ============================================
// Priority Colors (for UI badges)
// ============================================

export const PRIORITY_COLORS: Record<TicketPriority, string> = {
  'Critical': 'danger',
  'High': 'warning',
  'Medium': 'info',
  'Low': 'success',
} as const;

// ============================================
// Status Colors (for UI badges)
// ============================================

export const STATUS_COLORS: Record<TicketStatus, string> = {
  'AI_TRIAGE': 'info',
  'OPEN': 'info',
  'IN_PROGRESS': 'warning',
  'WAITING_FOR_USER': 'warning',
  'RESOLVED': 'success',
  'CLOSED': 'gray',
  'TRIAGE_FAILED': 'danger',
} as const;

// ============================================
// Automation Status Colors (for UI badges)
// ============================================

export const AUTOMATION_STATUS_COLORS: Record<AutomationStatus, string> = {
  'QUEUED': 'gray',
  'PROCESSING': 'info',
  'SUCCESS': 'success',
  'SUCCESS_WITH_WARNING': 'warning',
  'FAILED': 'danger',
  'HUMAN_REVIEW_REQUIRED': 'warning',
  'CANCELLED': 'gray',
} as const;

// ============================================
// Friendly Display Names
// ============================================

export const STATUS_DISPLAY_NAMES: Record<TicketStatus, string> = {
  'AI_TRIAGE': 'AI Triage',
  'OPEN': 'Open',
  'IN_PROGRESS': 'In Progress',
  'WAITING_FOR_USER': 'Waiting for User',
  'RESOLVED': 'Resolved',
  'CLOSED': 'Closed',
  'TRIAGE_FAILED': 'Triage Failed',
} as const;

export const AUTOMATION_STATUS_DISPLAY_NAMES: Record<AutomationStatus, string> = {
  'QUEUED': 'Queued',
  'PROCESSING': 'Processing',
  'SUCCESS': 'Success',
  'SUCCESS_WITH_WARNING': 'Success with Warning',
  'FAILED': 'Failed',
  'HUMAN_REVIEW_REQUIRED': 'Human Review Required',
  'CANCELLED': 'Cancelled',
} as const;

export const ROLE_DISPLAY_NAMES: Record<UserRole, string> = {
  'employee': 'Employee',
  'agent': 'IT Support Agent',
  'admin': 'Administrator',
} as const;

// ============================================
// Configuration Constants
// ============================================

/**
 * Maximum retries for failed automation runs
 */
export const MAX_AUTOMATION_RETRIES = 3;

/**
 * Automation timeout in seconds
 */
export const AUTOMATION_TIMEOUT_SECONDS = 60;

/**
 * Duplicate detection window in minutes
 */
export const DUPLICATE_DETECTION_WINDOW_MINUTES = 5;

/**
 * Auto-close resolved tickets after N days
 */
export const AUTO_CLOSE_RESOLVED_AFTER_DAYS = 7;

/**
 * Max tickets per user per hour (rate limiting)
 */
export const MAX_TICKETS_PER_USER_PER_HOUR = 10;

/**
 * Pagination default page size
 */
export const DEFAULT_PAGE_SIZE = 25;

/**
 * Pagination max page size
 */
export const MAX_PAGE_SIZE = 100;
