/**
 * IntelliDesk AI - Demo Notifications Data
 *
 * IMPORTANT: This is DEMO DATA for Stage 2 prototype/mock UI.
 * These records do NOT come from a real notification system.
 */

export interface DemoNotification {
  id: string;
  type: 'critical' | 'assignment' | 'review' | 'automation' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  link?: string;
  ticketId?: string;
}

export const DEMO_NOTIFICATIONS: DemoNotification[] = [
  {
    id: 'notif-1',
    type: 'critical',
    title: 'Critical Incident Requires Attention',
    message: 'DESK-1001: Production database server running out of disk space',
    timestamp: '2026-09-22T09:15:00Z',
    read: false,
    link: '/tickets/ticket-1',
    ticketId: 'ticket-1',
  },
  {
    id: 'notif-2',
    type: 'review',
    title: 'Human Review Required',
    message: 'DESK-1010: Automated backup job failed - AI flagged for review',
    timestamp: '2026-09-22T06:31:00Z',
    read: false,
    link: '/tickets/ticket-10',
    ticketId: 'ticket-10',
  },
  {
    id: 'notif-3',
    type: 'automation',
    title: 'Automation Warning',
    message: 'DESK-1012: AI triage failed - manual classification needed',
    timestamp: '2026-09-22T11:02:00Z',
    read: true,
    link: '/tickets/ticket-12',
    ticketId: 'ticket-12',
  },
  {
    id: 'notif-4',
    type: 'assignment',
    title: 'Ticket Assigned to You',
    message: 'DESK-1001 has been assigned to you',
    timestamp: '2026-09-22T09:20:00Z',
    read: true,
    link: '/tickets/ticket-1',
    ticketId: 'ticket-1',
  },
  {
    id: 'notif-5',
    type: 'info',
    title: 'Ticket Resolved',
    message: 'DESK-1004: Microsoft Teams crashes - marked as resolved',
    timestamp: '2026-09-22T11:30:00Z',
    read: true,
    link: '/tickets/ticket-4',
    ticketId: 'ticket-4',
  },
];

/**
 * Get unread notification count
 */
export function getUnreadNotificationCount(): number {
  return DEMO_NOTIFICATIONS.filter(n => !n.read).length;
}

/**
 * Get notifications sorted by timestamp (newest first)
 */
export function getSortedNotifications(): DemoNotification[] {
  return [...DEMO_NOTIFICATIONS].sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}
