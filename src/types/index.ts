/**
 * IntelliDesk AI - Core Type Definitions
 *
 * Domain types for the IntelliDesk AI helpdesk automation system.
 * These types are implementation-neutral and not coupled to any specific backend.
 */

// ============================================
// Enumerations
// ============================================

/**
 * Ticket Category - Determines support team routing
 */
export type TicketCategory =
  | 'Hardware'
  | 'Software'
  | 'Network'
  | 'Account Access'
  | 'Infrastructure'
  | 'General Support';

/**
 * Ticket Priority - Determines response urgency
 */
export type TicketPriority =
  | 'Critical'   // Business-critical, immediate response required
  | 'High'       // Important, same-day response
  | 'Medium'     // Standard, 1-2 day response
  | 'Low';       // Nice to have, best effort

/**
 * Ticket Status - Lifecycle state
 */
export type TicketStatus =
  | 'AI_TRIAGE'           // Initial state, automation running
  | 'OPEN'                // Triaged, awaiting assignment
  | 'IN_PROGRESS'         // Agent actively working
  | 'WAITING_FOR_USER'    // Blocked on user response
  | 'RESOLVED'            // Fix implemented, awaiting confirmation
  | 'CLOSED'              // Confirmed resolved
  | 'TRIAGE_FAILED';      // AI/automation failed, needs manual classification

/**
 * Automation Status - State of automation execution
 */
export type AutomationStatus =
  | 'QUEUED'                  // Job submitted, waiting to start
  | 'PROCESSING'              // Actively running
  | 'SUCCESS'                 // Completed successfully
  | 'SUCCESS_WITH_WARNING'    // Completed but with warnings
  | 'FAILED'                  // Failed, can be retried
  | 'HUMAN_REVIEW_REQUIRED'   // Needs manual intervention
  | 'CANCELLED';              // Manually cancelled

/**
 * Decision Source - How the final classification was determined
 */
export type DecisionSource =
  | 'AI_AUTOMATED'         // AI decision accepted without human intervention
  | 'HUMAN_REVIEWED_AI'    // Human reviewed and accepted/modified AI decision
  | 'MANUALLY_CLASSIFIED'; // Human classified from scratch (no AI)

/**
 * User Role - Access level within the system
 */
export type UserRole =
  | 'employee'  // End user who creates tickets
  | 'agent'     // IT support staff who handles tickets
  | 'admin';    // System administrator with full access

/**
 * Impact Level - Scope of the issue
 */
export type ImpactLevel =
  | 'Organization-wide'
  | 'Department'
  | 'Team'
  | 'Individual';

/**
 * Urgency Level - Time sensitivity
 */
export type UrgencyLevel =
  | 'Immediate'
  | 'Same Day'
  | 'Within Week'
  | 'When Possible';

// ============================================
// Core Interfaces
// ============================================

/**
 * User Profile
 */
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Support Team
 */
export interface Team {
  id: string;
  name: string;
  description?: string;
  category: TicketCategory;
  created_at: string;
  updated_at: string;
}

/**
 * Ticket - Core helpdesk entity
 */
export interface Ticket {
  id: string;
  ticket_number: string; // Display ID (e.g., "DESK-1234")
  title: string;
  description: string;
  status: TicketStatus;
  category: TicketCategory | null;
  priority: TicketPriority | null;

  // Relationships
  requester_id: string;
  assigned_to_id: string | null;
  assigned_team_id: string | null;

  // AI & Automation
  ai_decision_id: string | null;
  automation_run_id: string | null;

  // Metadata
  created_at: string;
  updated_at: string;
  resolved_at: string | null;
  closed_at: string | null;

  // Flags
  is_critical: boolean;
  requires_review: boolean;
  review_completed: boolean;
}

/**
 * AI Triage Result - Output from AI decision engine
 */
export interface AITriageResult {
  id: string;
  ticket_id: string;

  // Original AI Output
  original_summary: string;
  original_category: TicketCategory;
  original_priority: TicketPriority;
  original_impact: ImpactLevel;
  original_urgency: UrgencyLevel;
  original_recommended_actions: string[];
  original_assigned_team: string;
  original_review_required: boolean;
  original_review_reason: string | null;
  original_decision_explanation: string;

  // Final Decision (after human review)
  final_category: TicketCategory;
  final_priority: TicketPriority;
  final_assigned_team: string;
  final_decision_explanation: string | null;

  // Decision Metadata
  decision_source: DecisionSource;
  reviewed_by_id: string | null;
  reviewed_at: string | null;
  review_notes: string | null;

  // Timestamps
  created_at: string;
}

/**
 * Automation Run - Execution record of automation workflow
 */
export interface AutomationRun {
  id: string;
  ticket_id: string;

  // Job Details
  provider: 'mock' | 'uipath';
  job_id: string | null; // UiPath job ID
  status: AutomationStatus;

  // Inputs
  input_data: {
    ticketId: string;
    title: string;
    description: string;
    requesterName: string;
    requesterEmail: string;
  };

  // Outputs
  output_data: {
    summary?: string;
    category?: string;
    priority?: string;
    impact?: string;
    urgency?: string;
    recommendedActions?: string[];
    assignedTeam?: string;
    reviewRequired?: boolean;
    reviewReason?: string | null;
    decisionExplanation?: string;
    processingSuccess?: boolean;
    errorMessage?: string | null;
  } | null;

  // Metadata
  started_at: string;
  completed_at: string | null;
  error_message: string | null;
  retry_count: number;
  parent_run_id: string | null; // If this is a retry

  // Audit
  created_at: string;
  updated_at: string;
}

/**
 * Ticket Comment
 */
export interface TicketComment {
  id: string;
  ticket_id: string;
  author_id: string;
  content: string;
  is_internal: boolean; // Internal comments are agent-only
  created_at: string;
  updated_at: string;
}

/**
 * Ticket History Entry
 */
export interface TicketHistoryEntry {
  id: string;
  ticket_id: string;
  actor_id: string;
  action: string; // e.g., "status_changed", "assigned", "priority_changed"
  old_value: string | null;
  new_value: string | null;
  created_at: string;
}

/**
 * Notification
 */
export interface Notification {
  id: string;
  user_id: string;
  ticket_id: string | null;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  created_at: string;
}

// ============================================
// Utility Types
// ============================================

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

/**
 * Filter options for ticket queries
 */
export interface TicketFilters {
  status?: TicketStatus[];
  priority?: TicketPriority[];
  category?: TicketCategory[];
  assigned_to?: string;
  requester?: string;
  search?: string;
}

/**
 * Sort options
 */
export type SortDirection = 'asc' | 'desc';

export interface SortOptions {
  field: string;
  direction: SortDirection;
}
