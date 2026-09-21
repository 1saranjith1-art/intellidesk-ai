/**
 * IntelliDesk AI - Demo/Mock Ticket Data
 *
 * IMPORTANT: This is DEMO DATA for Stage 2 prototype/mock UI.
 * These records do NOT come from a real database, AI system, or UiPath execution.
 *
 * This file will be replaced with real database queries in Stage 5.
 */

import type {
  Ticket,
  TicketPriority,
  TicketStatus,
  AITriageResult,
  AutomationRun,
  UserProfile,
} from '@/types';

// ============================================
// DEMO USERS
// ============================================

export const DEMO_USERS: UserProfile[] = [
  {
    id: 'user-1',
    email: 'john.employee@company.com',
    name: 'John Employee',
    role: 'employee',
    created_at: '2026-09-01T08:00:00Z',
    updated_at: '2026-09-01T08:00:00Z',
  },
  {
    id: 'user-2',
    email: 'sarah.agent@company.com',
    name: 'Sarah Agent',
    role: 'agent',
    created_at: '2026-09-01T08:00:00Z',
    updated_at: '2026-09-01T08:00:00Z',
  },
  {
    id: 'user-3',
    email: 'admin@company.com',
    name: 'System Admin',
    role: 'admin',
    created_at: '2026-09-01T08:00:00Z',
    updated_at: '2026-09-01T08:00:00Z',
  },
];

// ============================================
// DEMO TICKETS
// ============================================

export const DEMO_TICKETS: Ticket[] = [
  // Critical Infrastructure Issue
  {
    id: 'ticket-1',
    ticket_number: 'DESK-1001',
    title: 'Production database server running out of disk space',
    description: 'The main PostgreSQL database server is at 95% capacity. Transaction logs are growing rapidly and we need immediate attention to prevent service disruption.',
    status: 'IN_PROGRESS',
    category: 'Infrastructure',
    priority: 'Critical',
    requester_id: 'user-1',
    assigned_to_id: 'user-2',
    assigned_team_id: 'team-infrastructure',
    ai_decision_id: 'ai-decision-1',
    automation_run_id: 'run-1',
    created_at: '2026-09-22T09:15:00Z',
    updated_at: '2026-09-22T09:45:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: true,
    requires_review: false,
    review_completed: false,
  },

  // Hardware Issue
  {
    id: 'ticket-2',
    ticket_number: 'DESK-1002',
    title: 'Laptop keyboard keys not responding',
    description: 'Several keys on my laptop keyboard (Q, W, E, R) are not responding. This is affecting my ability to type emails and code. The laptop is a Dell Latitude 5420.',
    status: 'OPEN',
    category: 'Hardware',
    priority: 'High',
    requester_id: 'user-1',
    assigned_to_id: null,
    assigned_team_id: 'team-hardware',
    ai_decision_id: 'ai-decision-2',
    automation_run_id: 'run-2',
    created_at: '2026-09-22T08:30:00Z',
    updated_at: '2026-09-22T08:31:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Network Issue
  {
    id: 'ticket-3',
    ticket_number: 'DESK-1003',
    title: 'Cannot connect to company VPN from home',
    description: 'When I try to connect to the VPN using the company-provided credentials, I get an "authentication failed" error. I have tried resetting my password but the issue persists.',
    status: 'AI_TRIAGE',
    category: 'Network',
    priority: 'Medium',
    requester_id: 'user-1',
    assigned_to_id: null,
    assigned_team_id: null,
    ai_decision_id: null,
    automation_run_id: 'run-3',
    created_at: '2026-09-22T10:00:00Z',
    updated_at: '2026-09-22T10:00:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Software Issue
  {
    id: 'ticket-4',
    ticket_number: 'DESK-1004',
    title: 'Microsoft Teams crashes when joining video calls',
    description: 'Whenever I try to join a video call in Microsoft Teams, the application crashes immediately. This has been happening for the past two days. I have tried restarting my computer and reinstalling Teams.',
    status: 'RESOLVED',
    category: 'Software',
    priority: 'High',
    requester_id: 'user-1',
    assigned_to_id: 'user-2',
    assigned_team_id: 'team-software',
    ai_decision_id: 'ai-decision-4',
    automation_run_id: 'run-4',
    created_at: '2026-09-21T14:00:00Z',
    updated_at: '2026-09-22T11:30:00Z',
    resolved_at: '2026-09-22T11:30:00Z',
    closed_at: null,
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Account Access Issue
  {
    id: 'ticket-5',
    ticket_number: 'DESK-1005',
    title: 'Need access to shared drive for Finance department',
    description: 'I recently transferred to the Finance team and need read/write access to the Finance shared drive (\\\\fileserver\\finance). My manager is Michael Chen.',
    status: 'OPEN',
    category: 'Account Access',
    priority: 'Medium',
    requester_id: 'user-1',
    assigned_to_id: null,
    assigned_team_id: 'team-account',
    ai_decision_id: 'ai-decision-5',
    automation_run_id: 'run-5',
    created_at: '2026-09-22T07:45:00Z',
    updated_at: '2026-09-22T07:46:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Critical Network Outage
  {
    id: 'ticket-6',
    ticket_number: 'DESK-1006',
    title: 'Entire 3rd floor network is down',
    description: 'All network connectivity on the 3rd floor has been lost. Approximately 50 employees are affected. Wired and wireless connections are both down. This started at 9:00 AM.',
    status: 'IN_PROGRESS',
    category: 'Network',
    priority: 'Critical',
    requester_id: 'user-1',
    assigned_to_id: 'user-2',
    assigned_team_id: 'team-network',
    ai_decision_id: 'ai-decision-6',
    automation_run_id: 'run-6',
    created_at: '2026-09-22T09:05:00Z',
    updated_at: '2026-09-22T09:20:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: true,
    requires_review: false,
    review_completed: false,
  },

  // General Support
  {
    id: 'ticket-7',
    ticket_number: 'DESK-1007',
    title: 'How to set up out-of-office reply in Outlook?',
    description: 'I am going on vacation next week and need to set up an automatic out-of-office reply in Outlook. Can someone guide me through the steps?',
    status: 'RESOLVED',
    category: 'General Support',
    priority: 'Low',
    requester_id: 'user-1',
    assigned_to_id: 'user-2',
    assigned_team_id: 'team-general',
    ai_decision_id: 'ai-decision-7',
    automation_run_id: 'run-7',
    created_at: '2026-09-20T16:00:00Z',
    updated_at: '2026-09-21T09:00:00Z',
    resolved_at: '2026-09-21T09:00:00Z',
    closed_at: null,
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Hardware - Printer Issue
  {
    id: 'ticket-8',
    ticket_number: 'DESK-1008',
    title: 'Office printer showing "Paper Jam" error but no jam found',
    description: 'The HP LaserJet printer on the 2nd floor keeps displaying a paper jam error, but when I open it, there is no paper stuck inside. I have tried turning it off and on again.',
    status: 'WAITING_FOR_USER',
    category: 'Hardware',
    priority: 'Low',
    requester_id: 'user-1',
    assigned_to_id: 'user-2',
    assigned_team_id: 'team-hardware',
    ai_decision_id: 'ai-decision-8',
    automation_run_id: 'run-8',
    created_at: '2026-09-21T11:30:00Z',
    updated_at: '2026-09-22T08:00:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Software - License Request
  {
    id: 'ticket-9',
    ticket_number: 'DESK-1009',
    title: 'Need Adobe Creative Cloud license for design work',
    description: 'I have been assigned to work on marketing materials and need access to Adobe Photoshop and Illustrator. My manager has approved this request.',
    status: 'OPEN',
    category: 'Software',
    priority: 'Medium',
    requester_id: 'user-1',
    assigned_to_id: null,
    assigned_team_id: 'team-software',
    ai_decision_id: 'ai-decision-9',
    automation_run_id: 'run-9',
    created_at: '2026-09-22T08:00:00Z',
    updated_at: '2026-09-22T08:01:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Infrastructure - Backup Failure
  {
    id: 'ticket-10',
    ticket_number: 'DESK-1010',
    title: 'Automated backup job failed for the last 3 nights',
    description: 'The nightly backup job for the file server has been failing with error code 0x80070005 (Access Denied). This needs to be investigated urgently as we have no recent backups.',
    status: 'OPEN',
    category: 'Infrastructure',
    priority: 'High',
    requester_id: 'user-1',
    assigned_to_id: null,
    assigned_team_id: 'team-infrastructure',
    ai_decision_id: 'ai-decision-10',
    automation_run_id: 'run-10',
    created_at: '2026-09-22T06:30:00Z',
    updated_at: '2026-09-22T06:31:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: false,
    requires_review: true,
    review_completed: false,
  },

  // Account Access - Password Reset
  {
    id: 'ticket-11',
    ticket_number: 'DESK-1011',
    title: 'Unable to reset password - security questions not working',
    description: 'I forgot my password and tried to use the self-service password reset, but the security questions are not being accepted even though I am providing the correct answers.',
    status: 'CLOSED',
    category: 'Account Access',
    priority: 'Medium',
    requester_id: 'user-1',
    assigned_to_id: 'user-2',
    assigned_team_id: 'team-account',
    ai_decision_id: 'ai-decision-11',
    automation_run_id: 'run-11',
    created_at: '2026-09-19T10:00:00Z',
    updated_at: '2026-09-19T14:00:00Z',
    resolved_at: '2026-09-19T13:30:00Z',
    closed_at: '2026-09-19T14:00:00Z',
    is_critical: false,
    requires_review: false,
    review_completed: false,
  },

  // Triage Failed Example
  {
    id: 'ticket-12',
    ticket_number: 'DESK-1012',
    title: 'Strange error when opening certain files',
    description: 'Sometimes when I try to open files, I get a weird error that says something about memory. It does not happen all the time, maybe once or twice a day.',
    status: 'TRIAGE_FAILED',
    category: null,
    priority: null,
    requester_id: 'user-1',
    assigned_to_id: null,
    assigned_team_id: null,
    ai_decision_id: null,
    automation_run_id: 'run-12',
    created_at: '2026-09-22T11:00:00Z',
    updated_at: '2026-09-22T11:02:00Z',
    resolved_at: null,
    closed_at: null,
    is_critical: false,
    requires_review: true,
    review_completed: false,
  },
];

// ============================================
// DEMO AI DECISIONS
// ============================================

export const DEMO_AI_DECISIONS: AITriageResult[] = [
  {
    id: 'ai-decision-1',
    ticket_id: 'ticket-1',
    original_summary: 'Critical database capacity issue requiring immediate infrastructure intervention',
    original_category: 'Infrastructure',
    original_priority: 'Critical',
    original_impact: 'Organization-wide',
    original_urgency: 'Immediate',
    original_recommended_actions: [
      'Archive or purge old transaction logs',
      'Add additional disk space to database server',
      'Set up automated log rotation',
    ],
    original_assigned_team: 'Infrastructure Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Database storage exhaustion poses immediate risk of service disruption affecting all users.',
    final_category: 'Infrastructure',
    final_priority: 'Critical',
    final_assigned_team: 'Infrastructure Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-22T09:15:30Z',
  },
  {
    id: 'ai-decision-2',
    ticket_id: 'ticket-2',
    original_summary: 'Hardware keyboard malfunction requiring replacement or repair',
    original_category: 'Hardware',
    original_priority: 'High',
    original_impact: 'Individual',
    original_urgency: 'Same Day',
    original_recommended_actions: [
      'Test keyboard with external USB keyboard to confirm hardware issue',
      'Check for driver updates',
      'Replace keyboard if hardware confirmed faulty',
    ],
    original_assigned_team: 'Hardware Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Non-responsive keys significantly impact user productivity and likely require hardware replacement.',
    final_category: 'Hardware',
    final_priority: 'High',
    final_assigned_team: 'Hardware Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-22T08:30:15Z',
  },
  {
    id: 'ai-decision-4',
    ticket_id: 'ticket-4',
    original_summary: 'Microsoft Teams application crash during video calls',
    original_category: 'Software',
    original_priority: 'High',
    original_impact: 'Individual',
    original_urgency: 'Same Day',
    original_recommended_actions: [
      'Clear Teams cache',
      'Update graphics drivers',
      'Reinstall Teams with latest version',
    ],
    original_assigned_team: 'Software Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Application crashes preventing video communication require prompt software troubleshooting.',
    final_category: 'Software',
    final_priority: 'High',
    final_assigned_team: 'Software Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-21T14:00:20Z',
  },
  {
    id: 'ai-decision-5',
    ticket_id: 'ticket-5',
    original_summary: 'Access permission request for departmental shared resources',
    original_category: 'Account Access',
    original_priority: 'Medium',
    original_impact: 'Individual',
    original_urgency: 'Within Week',
    original_recommended_actions: [
      'Verify user is member of Finance team',
      'Confirm manager approval',
      'Grant read/write permissions to Finance shared drive',
    ],
    original_assigned_team: 'Account Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Standard access request following department transfer, requires manager verification.',
    final_category: 'Account Access',
    final_priority: 'Medium',
    final_assigned_team: 'Account Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-22T07:45:25Z',
  },
  {
    id: 'ai-decision-6',
    ticket_id: 'ticket-6',
    original_summary: 'Critical network outage affecting multiple users on floor',
    original_category: 'Network',
    original_priority: 'Critical',
    original_impact: 'Department',
    original_urgency: 'Immediate',
    original_recommended_actions: [
      'Check physical network equipment on 3rd floor',
      'Verify switch and router status',
      'Test network cables and ports',
    ],
    original_assigned_team: 'Network Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Complete floor network outage affecting 50+ users requires immediate attention.',
    final_category: 'Network',
    final_priority: 'Critical',
    final_assigned_team: 'Network Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-22T09:05:10Z',
  },
  {
    id: 'ai-decision-7',
    ticket_id: 'ticket-7',
    original_summary: 'User guidance request for standard Outlook feature',
    original_category: 'General Support',
    original_priority: 'Low',
    original_impact: 'Individual',
    original_urgency: 'When Possible',
    original_recommended_actions: [
      'Provide step-by-step instructions for Outlook out-of-office setup',
      'Send link to self-service knowledge base article',
    ],
    original_assigned_team: 'General Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Simple how-to question that can be resolved with standard documentation.',
    final_category: 'General Support',
    final_priority: 'Low',
    final_assigned_team: 'General Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-20T16:00:15Z',
  },
  {
    id: 'ai-decision-8',
    ticket_id: 'ticket-8',
    original_summary: 'Printer hardware error requiring troubleshooting',
    original_category: 'Hardware',
    original_priority: 'Low',
    original_impact: 'Team',
    original_urgency: 'When Possible',
    original_recommended_actions: [
      'Check for debris in paper path sensors',
      'Reset printer to factory defaults',
      'Contact vendor support if issue persists',
    ],
    original_assigned_team: 'Hardware Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Phantom paper jam likely caused by sensor malfunction, standard troubleshooting required.',
    final_category: 'Hardware',
    final_priority: 'Low',
    final_assigned_team: 'Hardware Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-21T11:30:45Z',
  },
  {
    id: 'ai-decision-9',
    ticket_id: 'ticket-9',
    original_summary: 'Software license request requiring approval and provisioning',
    original_category: 'Software',
    original_priority: 'Medium',
    original_impact: 'Individual',
    original_urgency: 'Within Week',
    original_recommended_actions: [
      'Verify manager approval',
      'Check license availability',
      'Provision Adobe Creative Cloud access',
    ],
    original_assigned_team: 'Software Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Standard software license request with stated manager approval.',
    final_category: 'Software',
    final_priority: 'Medium',
    final_assigned_team: 'Software Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-22T08:00:20Z',
  },
  {
    id: 'ai-decision-10',
    ticket_id: 'ticket-10',
    original_summary: 'Critical backup system failure requiring immediate investigation',
    original_category: 'Infrastructure',
    original_priority: 'High',
    original_impact: 'Organization-wide',
    original_urgency: 'Immediate',
    original_recommended_actions: [
      'Check backup service account permissions',
      'Review event logs for detailed error information',
      'Manually run backup to test',
    ],
    original_assigned_team: 'Infrastructure Support Team',
    original_review_required: true,
    original_review_reason: 'Backup failures pose significant data loss risk and may indicate broader security issues.',
    original_decision_explanation: 'Multiple consecutive backup failures require escalated review given organization-wide impact.',
    final_category: 'Infrastructure',
    final_priority: 'High',
    final_assigned_team: 'Infrastructure Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-22T06:30:40Z',
  },
  {
    id: 'ai-decision-11',
    ticket_id: 'ticket-11',
    original_summary: 'Account access issue preventing password self-service',
    original_category: 'Account Access',
    original_priority: 'Medium',
    original_impact: 'Individual',
    original_urgency: 'Same Day',
    original_recommended_actions: [
      'Verify user identity through alternate method',
      'Manually reset password',
      'Update security questions',
    ],
    original_assigned_team: 'Account Support Team',
    original_review_required: false,
    original_review_reason: null,
    original_decision_explanation: 'Security question failure requires manual intervention for password reset.',
    final_category: 'Account Access',
    final_priority: 'Medium',
    final_assigned_team: 'Account Support Team',
    final_decision_explanation: null,
    decision_source: 'AI_AUTOMATED',
    reviewed_by_id: null,
    reviewed_at: null,
    review_notes: null,
    created_at: '2026-09-19T10:00:30Z',
  },
];

// ============================================
// DEMO AUTOMATION RUNS
// ============================================

export const DEMO_AUTOMATION_RUNS: AutomationRun[] = [
  {
    id: 'run-1',
    ticket_id: 'ticket-1',
    provider: 'mock',
    job_id: 'mock-job-1',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-1',
      title: 'Production database server running out of disk space',
      description: 'The main PostgreSQL database server is at 95% capacity...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-22T09:15:15Z',
    completed_at: '2026-09-22T09:15:30Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T09:15:15Z',
    updated_at: '2026-09-22T09:15:30Z',
  },
  {
    id: 'run-2',
    ticket_id: 'ticket-2',
    provider: 'mock',
    job_id: 'mock-job-2',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-2',
      title: 'Laptop keyboard keys not responding',
      description: 'Several keys on my laptop keyboard...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-22T08:30:05Z',
    completed_at: '2026-09-22T08:30:15Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T08:30:05Z',
    updated_at: '2026-09-22T08:30:15Z',
  },
  {
    id: 'run-3',
    ticket_id: 'ticket-3',
    provider: 'mock',
    job_id: 'mock-job-3',
    status: 'PROCESSING',
    input_data: {
      ticketId: 'ticket-3',
      title: 'Cannot connect to company VPN from home',
      description: 'When I try to connect to the VPN...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: null,
    started_at: '2026-09-22T10:00:10Z',
    completed_at: null,
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T10:00:10Z',
    updated_at: '2026-09-22T10:00:10Z',
  },
  {
    id: 'run-4',
    ticket_id: 'ticket-4',
    provider: 'mock',
    job_id: 'mock-job-4',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-4',
      title: 'Microsoft Teams crashes when joining video calls',
      description: 'Whenever I try to join a video call in Microsoft Teams...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-21T14:00:05Z',
    completed_at: '2026-09-21T14:00:20Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-21T14:00:05Z',
    updated_at: '2026-09-21T14:00:20Z',
  },
  {
    id: 'run-5',
    ticket_id: 'ticket-5',
    provider: 'mock',
    job_id: 'mock-job-5',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-5',
      title: 'Need access to shared drive for Finance department',
      description: 'I recently transferred to the Finance team...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-22T07:45:10Z',
    completed_at: '2026-09-22T07:45:25Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T07:45:10Z',
    updated_at: '2026-09-22T07:45:25Z',
  },
  {
    id: 'run-6',
    ticket_id: 'ticket-6',
    provider: 'mock',
    job_id: 'mock-job-6',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-6',
      title: 'Entire 3rd floor network is down',
      description: 'All network connectivity on the 3rd floor has been lost...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-22T09:05:00Z',
    completed_at: '2026-09-22T09:05:10Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T09:05:00Z',
    updated_at: '2026-09-22T09:05:10Z',
  },
  {
    id: 'run-7',
    ticket_id: 'ticket-7',
    provider: 'mock',
    job_id: 'mock-job-7',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-7',
      title: 'How to set up out-of-office reply in Outlook?',
      description: 'I am going on vacation next week...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-20T16:00:05Z',
    completed_at: '2026-09-20T16:00:15Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-20T16:00:05Z',
    updated_at: '2026-09-20T16:00:15Z',
  },
  {
    id: 'run-8',
    ticket_id: 'ticket-8',
    provider: 'mock',
    job_id: 'mock-job-8',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-8',
      title: 'Office printer showing "Paper Jam" error but no jam found',
      description: 'The HP LaserJet printer on the 2nd floor...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-21T11:30:30Z',
    completed_at: '2026-09-21T11:30:45Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-21T11:30:30Z',
    updated_at: '2026-09-21T11:30:45Z',
  },
  {
    id: 'run-9',
    ticket_id: 'ticket-9',
    provider: 'mock',
    job_id: 'mock-job-9',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-9',
      title: 'Need Adobe Creative Cloud license for design work',
      description: 'I have been assigned to work on marketing materials...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-22T08:00:05Z',
    completed_at: '2026-09-22T08:00:20Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T08:00:05Z',
    updated_at: '2026-09-22T08:00:20Z',
  },
  {
    id: 'run-10',
    ticket_id: 'ticket-10',
    provider: 'mock',
    job_id: 'mock-job-10',
    status: 'SUCCESS_WITH_WARNING',
    input_data: {
      ticketId: 'ticket-10',
      title: 'Automated backup job failed for the last 3 nights',
      description: 'The nightly backup job for the file server...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-22T06:30:20Z',
    completed_at: '2026-09-22T06:30:40Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T06:30:20Z',
    updated_at: '2026-09-22T06:30:40Z',
  },
  {
    id: 'run-11',
    ticket_id: 'ticket-11',
    provider: 'mock',
    job_id: 'mock-job-11',
    status: 'SUCCESS',
    input_data: {
      ticketId: 'ticket-11',
      title: 'Unable to reset password - security questions not working',
      description: 'I forgot my password and tried to use the self-service...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: true,
    },
    started_at: '2026-09-19T10:00:10Z',
    completed_at: '2026-09-19T10:00:30Z',
    error_message: null,
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-19T10:00:10Z',
    updated_at: '2026-09-19T10:00:30Z',
  },
  {
    id: 'run-12',
    ticket_id: 'ticket-12',
    provider: 'mock',
    job_id: 'mock-job-12',
    status: 'FAILED',
    input_data: {
      ticketId: 'ticket-12',
      title: 'Strange error when opening certain files',
      description: 'Sometimes when I try to open files...',
      requesterName: 'John Employee',
      requesterEmail: 'john.employee@company.com',
    },
    output_data: {
      processingSuccess: false,
      errorMessage: 'Unable to classify ticket: insufficient detail in description',
    },
    started_at: '2026-09-22T11:00:10Z',
    completed_at: '2026-09-22T11:02:00Z',
    error_message: 'AI classification failed: insufficient context',
    retry_count: 0,
    parent_run_id: null,
    created_at: '2026-09-22T11:00:10Z',
    updated_at: '2026-09-22T11:02:00Z',
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a ticket by ID (DEMO VERSION)
 */
export function getDemoTicketById(id: string): Ticket | undefined {
  return DEMO_TICKETS.find(ticket => ticket.id === id);
}

/**
 * Get a ticket by ticket number (DEMO VERSION)
 */
export function getDemoTicketByNumber(ticketNumber: string): Ticket | undefined {
  return DEMO_TICKETS.find(ticket => ticket.ticket_number === ticketNumber);
}

/**
 * Get AI decision for a ticket (DEMO VERSION)
 */
export function getDemoAIDecisionForTicket(ticketId: string): AITriageResult | undefined {
  return DEMO_AI_DECISIONS.find(decision => decision.ticket_id === ticketId);
}

/**
 * Get automation run for a ticket (DEMO VERSION)
 */
export function getDemoAutomationRunForTicket(ticketId: string): AutomationRun | undefined {
  return DEMO_AUTOMATION_RUNS.find(run => run.ticket_id === ticketId);
}

/**
 * Get user by ID (DEMO VERSION)
 */
export function getDemoUserById(id: string): UserProfile | undefined {
  return DEMO_USERS.find(user => user.id === id);
}

/**
 * Filter tickets by status (DEMO VERSION)
 */
export function getDemoTicketsByStatus(status: TicketStatus): Ticket[] {
  return DEMO_TICKETS.filter(ticket => ticket.status === status);
}

/**
 * Filter tickets by priority (DEMO VERSION)
 */
export function getDemoTicketsByPriority(priority: TicketPriority): Ticket[] {
  return DEMO_TICKETS.filter(ticket => ticket.priority === priority);
}

/**
 * Get critical tickets (DEMO VERSION)
 */
export function getDemoCriticalTickets(): Ticket[] {
  return DEMO_TICKETS.filter(ticket => ticket.is_critical);
}

/**
 * Get tickets requiring review (DEMO VERSION)
 */
export function getDemoTicketsRequiringReview(): Ticket[] {
  return DEMO_TICKETS.filter(ticket => ticket.requires_review && !ticket.review_completed);
}
